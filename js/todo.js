//change color and text-decoration
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//delete to-do
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//add to-do
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let messageToDo = $(this).val();
    $("ul").append("<li><span>X</span> " + messageToDo + "</li>");
    $(this).val("");
  }
});
