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
