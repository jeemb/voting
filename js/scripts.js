$(document).ready(function() {
  // var age = parseInt(prompt("How old are you?"));
  //
  // if (age >= 18) {
  //   $('#Over').show();
  // } else {
  //   $('#Under').show();
  // });

  $("form#politics").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age > 35 || gender === "male") {
      $("#party").append("conservative");
    } else {
      $("#party").append("liberal");
    }

      $("#prediction").show();

    event.preventDefault();
  });
});
