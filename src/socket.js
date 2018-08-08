// Keep track of which names are used so that there are no duplicates
var userNames = (function() {
   var names = {};

   var claim = function(name) {
      if (!name || names[name]) {
         return false;
      } else {
         names[name] = true;
         return true;
      }
   };

   // find the lowest unused "guest" name and claim it
   var getGuestName = function() {
      var name,
         nextUserId = 1;

      do {
         name = 'Guest ' + nextUserId;
         nextUserId += 1;
      } while (!claim(name));

      return name;
   };

   // serialize claimed names as an array
   var get = function() {
      var res = [];
      let user;
      for (user in names) {
         res.push(user);
      }

      return res;
   };

   var free = function(name) {
      if (names[name]) {
         delete names[name];
      }
   };

   return {
      claim: claim,
      free: free,
      get: get,
      getGuestName: getGuestName
   };
}());

let client1 = undefined;
let client2 = undefined;
let username1 = "Player1";
let username2 = "Player2";

export function setUsername(username) {
    if (username1 == "") {
        username1 = username;
    }
    else if (username2 == "") {
        username2 = username;
    }
    else {
        return;
    }
};

// export function for listening to the socket
export default function(socket) {
    console.log("user connected");
    if (client1 == undefined) {
        client1 = socket;    
        client1.on('disconnect', () => {
            client1 = undefined;            
            username1 = "";
        });
        client1.on('switchTurn', () => {
            console.log("Switch turn");
            client2.emit('switchTurn', {});
        });
        client1.on('updateBoard', (data) => {
            console.log("updateBoard");
            client2.emit('updateBoard', data);
        });
        client1.on('giveup', () => {
            client2.emit('otherGiveUp', {});
        });
        client1.on('gameOver', () => {
            client2.emit('setGameOver', {});
        });
    }
    else if (client2 == undefined) {
        client2 = socket;
        client2.on('disconnect', () => {
            client2 = undefined;            
            username2 = "";
        });
        client2.on('switchTurn', () => {
            client1.emit('switchTurn', {});
        });
        client2.on('updateBoard', (data) => {
            console.log("updateBoard");
            client1.emit('updateBoard', data);
        });
        client2.on('giveup', () => {
            client1.emit('otherGiveUp', {});
        });
        client2.on('gameOver', () => {
            client1.emit('setGameOver', {});
        });
    }
    else {
        return;
    }

    if (client1 != undefined && client2 != undefined) { 
        client1.emit('init', {
            color: 2,
            username: username1
        });
        client2.emit('init', {
            color: 1,
            username: username2
        });
    }
        /*
   var name = userNames.getGuestName();

   // send the new user their name and a list of users
   socket.emit('init', {
      name: name,
      users: userNames.get()
   });

   // notify other clients that a new user has joined
   socket.broadcast.emit('user:join', {
      name: name
   });

   // broadcast a user's message to other users
   socket.on('send:message', function(data) {
      socket.broadcast.emit('send:message', {
         user: name,
         text: data.text
      });
   });

   // validate a user's name change, and broadcast it on success
   socket.on('change:name', function(data, fn) {
      if (userNames.claim(data.name)) {
         var oldName = name;
         userNames.free(oldName);

         name = data.name;

         socket.broadcast.emit('change:name', {
            oldName: oldName,
            newName: name
         });

         fn(true);
      } else {
         fn(false);
      }
   });

   // clean up when a user leaves, and broadcast it to other users
   socket.on('disconnect', function() {
      socket.broadcast.emit('user:left', {
         name: name
      });
      userNames.free(name);
   });
   */
};
