export default Ember.Controller.extend({
  code: "puts Time.now\n\n10.times do\n  puts \"Hello World!\"\nend",
  output: "",

  actions: {
    run: function() {
      window.log = "";
      var input = this.get('code');
      eval(Opal.compile(input));
      this.set('output', window.log);
    }
  }
});
