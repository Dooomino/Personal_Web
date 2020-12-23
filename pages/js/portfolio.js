$("#toTop").on("click",function(e){
  e.preventDefault();
  var c = $("html, body").stop().animate({ scrollTop: 0 },1000);
});

let imageCount = 0;
let state = 0;

$(window).on('ready', function(e) {
  $(".progress").addClass("half");
});

$(window).on('load', function(e) {
  $(".progress").addClass("ready");

  setTimeout(function (){
    $(".progress").addClass("end");
  },2000);
});