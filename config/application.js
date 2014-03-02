//= require jquery
//= require environment
//= require ember-appkit
//= require opal/opal
//= require opal/opal-parser
//= require ace/ace-noconflict
//= require ace/mode-ruby
//= require_self
//= require_tree ./adapters
//= require router
//= require_tree ../app
//= require_tree ./initializers

window.App = require('app').default.create();

window.log = "";
var oldLog = console.log;
console.log = function (message) {
  window.log += message + '\n';
  oldLog.apply(console, arguments);
};
