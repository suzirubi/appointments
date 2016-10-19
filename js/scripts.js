$(document).ready(function() {
  $("form#appt").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var date = $("#date").val();
    var start = $("#start").val();
    var end = $("#end").val();

    $(".name").text(name);
    $(".date").text(date);
    $(".start").text(start);
    $(".end").text(end);

    $("#confirmation").show();


  });
});
