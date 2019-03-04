$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("navbar-shrink");
  } else {
    $("nav").removeClass("navbar-shrink");
  }
});

function readMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (moreText.style.display === "inline") {
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

//$(function(){
//  $('.dropdown-toggle').click(
//    function(){
//      if ($(this).next().is(':visible')) {
//        location.href = $(this).attr('href');;
//      }
//     });
//  });
