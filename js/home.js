var colors = [
  'rgb(201, 222, 214, 1)',
  'rgb(132, 172, 206, 1)',
  'rgb(126, 189, 195, 1)',
  'rgb(6, 141, 157, 1)',
  'rgb(70, 70, 85, 1)'
];

var deviceWidth = document.documentElement.clientWidth;
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
  }, 2000);

  if (deviceWidth < 960) {
    $("#icon-back").removeClass("active");
    $("#left-contain").removeClass("active");
    $("#main-contain").removeClass("active");
    $("#menus").removeClass("active");
  }
}


window.onload = function () {
  $('#header hr').addClass("active");
  m = [];
  $.get("https://api.github.com/users/dooomino/repos")
    .done(function (res, rqs) {
      for (i = 0; i < res.length; i++) {
        m.push({
          "name": res[i].name,
          "url": res[i].svn_url,
          "time": res[i].pushed_at.substring(0, 10),
          "descript": res[i].description,
          "j": res[i]
        });
      }
      m.sort(function (a, b) {
        return Date.parse(b.time) - Date.parse(a.time);
      })


      for (i = 0; i < m.length; i++) {
        if (!/CSCI/.test(m[i].name)) {
          if (!m[i].j.private && !m[i].j.fork) {
            $("#gits ul").append('<a class="repos" href="' + m[i].url + '" target="_blank"><li>' + m[i].name + '<p>' +
              m[i].descript + '</p></li></a>');

          }
        }
      }
    });
  $('.heads-text p').each(function (i, el) {
    c = colors.length % (i + 1);
    el.style.backgroundColor = colors[c];
  });
  if (deviceWidth > 960) {
    $('.menu0').html("Half Floor Space");
    window.addEventListener('mousemove', hoverborder);
  } else {
    $('.menu0').html("Dooomino");
  }
}


window.onresize = function () {
  deviceWidth = document.documentElement.clientWidth;
  $('.heads-text p').each(function (i, el) {
    c = colors.length % (i + 1);
    el.style.backgroundColor = colors[c];
  });
  if (deviceWidth > 960) {
    $('.menu0').html("Half Floor Space");

    window.addEventListener('mousemove', hoverborder);
  } else {
    $('.menu0').html("Dooomino");
    window.removeEventListener('mousemove', hoverborder);
    window.addEventListener('touchstart', Tstart);
    window.addEventListener('touchmove', Tmove);
  }
}

var xi, yi;

function Tstart(ent) {
  t = ent.touches[0];

  xi = t.clientX;
  yi = t.clientY;
  console.log(xi, yi);
}

var Ton = false;

function Tmove(ent) {
  t = ent.touches[0];

  xn = t.clientX;
  yn = t.clientY;

  difx = xn - xi;
  dify = yn - yi;
  console.log(difx, dify);

  if (difx > 10 && Math.abs(dify) < 5) {
    $("#icon-back").addClass("active");
    $("#left-contain").addClass("active");
    $("#main-contain").addClass("active");
    $("#menus").addClass("active");
  } else if (difx < -10 && Math.abs(dify) > 5) {
    $("#icon-back").removeClass("active");
    $("#left-contain").removeClass("active");
    $("#main-contain").removeClass("active");
    $("#menus").removeClass("active");
  }

}


window.onscroll = srcollAction;

function srcollAction() {

  //github repo color changing
  var barPos = window.scrollY;
  var elPos = $("#gits").position().top;
  var offsetPos = elPos * 0.2;
  if (barPos > (elPos - offsetPos)) {
    var diff = barPos - (elPos - offsetPos);
    if (diff < offsetPos) {
      var g = 50;
      var blend = 255 - diff / offsetPos * (255 - g);
      console.log(blend)
      $("#main-contain").css("background-color", "rgb(" + blend + "," + blend + "," + blend + ")");
    }
  } else {
    $("#main-contain").css("background-color", "#fff");
  }
}


function hoverborder(event) {
  x = event.clientX;
  y = event.clientY;
  deviceWidth = window.innerWidth;
  deviceHeight = window.innerHeight;
  if (x <= 0.03 * deviceWidth &
    y >= 0.1 * deviceHeight) {

    $("#icon-back").addClass("active");
    $("#left-contain").addClass("active");
    $("#main-contain").addClass("active");
    $("#menus").addClass("active");
  } else if (x > 0.2 * deviceWidth) {
    if (y >= 0.1 * deviceHeight) {
      $("#icon-back").removeClass("active");
      $("#left-contain").removeClass("active");
      $("#main-contain").removeClass("active");
      $("#menus").removeClass("active");
    }
  }
}
