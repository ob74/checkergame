const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {userAgent: 'node.js'};
