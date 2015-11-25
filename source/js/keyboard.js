// Generated by CoffeeScript 1.10.0
(function() {
  var ready;

  ready = function(fn) {
    if (document.readyState !== 'loading') {
      return fn();
    } else {
      return document.addEventListener('DOMContentLoaded', fn);
    }
  };

  ready(function() {
    var keyboardObj;
    keyboardObj = document.getElementById('keyboard');
    return keyboardObj.addEventListener('load', function() {
      var keyboardDoc, keys;
      keyboardDoc = keyboardObj.contentDocument;
      keys = keyboardDoc.querySelectorAll('.key');
      return console.log('Keyboard loaded', keys[0]);
    });
  });

}).call(this);