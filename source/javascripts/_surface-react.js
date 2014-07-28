function surfaceReact() {

  var delayAmount = 250;
  var fadeOutTime = 250;
  var fadeInTime = 350;

  $("li").on("mouseenter", function(event) {
    $(event.target).find(".animated-backgrounds")
    .animate({opacity: 1}, fadeInTime, function(){
      $(this).delay(delayAmount)
      .animate({opacity: 0}, fadeOutTime);
    });
  });
}
