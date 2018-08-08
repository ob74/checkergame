import Express from 'express';
import path from 'path';
import http from 'http';
import socket_io from 'socket.io';
import bodyParser from 'body-parser';
import socketHandler from './socket.js';
import { setUsername } from './socket.js';

var app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = http.Server(app);
var io = socket_io.listen(server);
io.on('connection', socketHandler);

app.get('/', (req, res) => {
   res.render('index', {
        bundle: 'lobby'
   });
});

app.get('/game', (req, res) => {
    res.render('index', {
        bundle: 'game'
    });
});

app.post('/newPlayer', (req, res) => {
    setUsername(req.body.username);
    res.sendStatus(200);    
});

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

server.listen(port, err => {
   console.log("Server is listening on port", port);
});
