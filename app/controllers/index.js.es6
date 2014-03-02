export default Ember.Controller.extend({
  init: function() {
    window.log = "";
    var oldLog = console.log;
    console.log = function (message) {
      window.log += message + '\n';
      oldLog.apply(console, arguments);
    };
  },

  code: "puts Time.now\n\n(1..25).each do |n| \n  puts \"hello #{n}\"\nend",
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
