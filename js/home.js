var colors = [
  'rgb(201, 222, 214, 1)',
  'rgb(132, 172, 206, 1)',
  'rgb(126, 189, 195, 1)',
  'rgb(6, 141, 157, 1)',
  'rgb(70, 70, 85, 1)'
];

var deviceWidth = window.innerWidth;
$('.heads :header').after('<hr class = "heads-line" />');


function toggleBars() {
  $("#icon-back").toggleClass("active");
  $("#left-contain").toggleClass("active");
  $("#main-contain").toggleClass("active");
  $("#menus").toggleClass("active");
}

function goto(el) {
  id = $(el).attr('href');
  $(".heads-line").each(function (i, el) {
    el.classList.remove("active");
  });
  head = id + '>.heads-line';
  $(head).each(function (i, el) {
    el.classList.add("active");
  });

  $('body,html').stop().animate({
    scrollTop: $(id).offset().top
  }, 500);

  if (deviceWidth < 960) {
    $("#icon-back").removeClass("active");
    $("#left-contain").removeClass("active");
    $("#main-contain").removeClass("active");
    $("#menus").removeClass("active");
  }
}


window.onload = function () {
  $('#header hr').addClass("active");
  if (deviceWidth > 960) {

    $('.heads-text p').each(function (i, el) {
      c = colors.length % (i + 1);
      el.style.backgroundColor = colors[c];
    });
  }
}

window.addEventListener('mousemove', function (event) {
  x = event.clientX;
  y = event.clientY;
  deviceWidth = window.innerWidth;
  deviceHeight = window.innerHeight;
  if (x <= 0.2 * deviceWidth &
    y >= 0.1 * deviceHeight) {

    $("#icon-back").addClass("active");
    $("#left-contain").addClass("active");
    $("#main-contain").addClass("active");
    $("#menus").addClass("active");
  } else {
    if (y >= 0.1 * deviceHeight) {
      $("#icon-back").removeClass("active");
      $("#left-contain").removeClass("active");
      $("#main-contain").removeClass("active");
      $("#menus").removeClass("active");
    }
  }
})
