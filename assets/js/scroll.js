$(window).on("scroll", function () {
  if ($(window).scrollTop() > 10) {
    $("nav").addClass("navbar-light");
  } else {
    $("nav").removeClass("navbar-light");
  }
});
