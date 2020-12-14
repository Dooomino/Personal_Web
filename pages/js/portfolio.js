function topFunction() {
  // document.body.scrollTop = 0; //  Safari
  // document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE , Opera
  $("html, body").animate({ scrollTop: 0 }, "slow");
}