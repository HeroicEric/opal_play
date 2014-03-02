export default Ember.Component.extend({
  setupEditor: function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/github");
    editor.getSession().setMode("ace/mode/ruby");
  }.on('didInsertElement')
});
