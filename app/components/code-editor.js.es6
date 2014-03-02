export default Ember.Component.extend({
  editor: null,

  initEditor: function() {
    var editor  = ace.edit("editor");
    var session = editor.getSession();
    this.set('editor', editor);

    editor.setTheme("ace/theme/github");
    session.setMode("ace/mode/ruby");

    var _this = this;
    session.on('change', function() {
      _this.updateContent();
    });
  }.on('didInsertElement'),

  updateContent: function() {
    var editor = this.get('editor');
    var content = editor.getValue('content');
    this.set('content', content);
  },

  editorContent: Ember.computed.alias('content')
});
