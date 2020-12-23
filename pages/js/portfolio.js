$("#toTop").on("click",function(e){
  e.preventDefault();
  var c = $("html, body").stop().animate({ scrollTop: 0 },1000);
});