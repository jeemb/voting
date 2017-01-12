$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#Over').show();
  } else {
    $('#Under').show();
  }
});
