var time = new anime.timeline();


function fly() {
  var rocket = document.getElementById("rocket");
  var fire = rocket.getElementsByClassName("fire")[0];
  var launch = document.getElementsByClassName("launch")[0];

  fire.classList.remove('hide');
  fire.classList.add('wave');
  launch.classList.add('hide');

  time.add({
    targets: rocket,
    delay: 500,
    duration: 1000,
    easing: [.29, -0.3, .67, .9],
    translateY: ['0%', '-300%'],
    zIndex: [100, 100],
    complete: () => {
      document.location = "http://www.mino.moe";
    }
  })
}

document.getElementById("rocket").onclick = fly;
