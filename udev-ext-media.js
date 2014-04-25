var udev = require("./build/Release/udev-ext-media");
var util = require("util");

var EventEmitter = require("events").EventEmitter;

util.inherits(udev.Monitor, EventEmitter);

module.exports = {
    monitor: function() { return new udev.Monitor(); },
    list: udev.list
}