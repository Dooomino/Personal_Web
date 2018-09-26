var times = new anime.timeline();
var smooth =[.50, 0.5, .71, 1];

var colorWheel=[
    "rgb(231,29,53)",
    "rgb(47,41,79)",
    "rgb(27 153 139)",
    "rgb(232,212,77)",
    "rgb(244,96,56)"
];


$(document).ready(function(){
    run(1000);
    var divs=document.querySelectorAll(".worksheets div"),i;

    for(i=0;i<divs.length;i++){
        var c=i%colorWheel.length;
        divs[i].style.backgroundColor=colorWheel[c];
    }
});

var initl;



function run(dur){
    initl=-0.25*$(window).width();
     times.add({
        targets: "body",
        backgroundColor: "rgb(137, 212, 245)",
        duration:dur,
        delay:1000,
        easing: smooth
     });
    times.add({
        targets: "#leftBar",
        opacity: 1,
        left: initl,
        duration: dur,
        easing: smooth
    });
    times.add({
        targets: '.fa-bars,#back',
        opacity: 1,
        left: "2%",
        duration: dur/2,
        easing:smooth
    });
    times.add({
        targets: "#container",
        opacity: [0,1],
        duration:dur,
        easing: smooth
    });

}

function expandLeft(){
    initl=0.25*$("#leftBar").width();
    times.pause();
    $("#icon").toggleClass("active");
    var moving = new anime.timeline();
    if($("#icon").attr('class')=="active"){
        moving.add({
            targets:".fa-bars",
            rotate: {value: 90},
            scale: [2,2],
            duration: 500,
            easing: smooth
        });
        moving.add({
            targets: "#leftBar,#container",
            left: {value: "+="+($("#leftBar").width()-initl)},
            duration: 500,
            easing: smooth
        });
    }else{
        moving.add({
            targets:".fa-bars",
            rotate: {value: 0},
            scale: [2,2],
            duration: 500,
            easing: smooth
        });
        moving.add({
            targets: "#leftBar,#container",
            left:{ value: "-="+($("#leftBar").width()-initl)},
            duration: 500,
            easing: smooth
            });
    }
}

function moveto(el){
    var id = $(el).attr('href');
    $('html,body').stop().animate({scrollTop: $(id).offset().top},1000);
}

function gotoHome(){
    times.pause();
    times = new anime.timeline();
    times.add({
        targets: "#WORKP",
        translateY:"+="+$(window).height(),
        duration: 1000,
        easing: smooth
    });
    times.add({
        targets: "body",
        backgroundColor: 'rgb(0,0,0)',
        duration: 1000,
        delay:100,
        easing: smooth
    });
    setTimeout(function(){
        if(times.finished){
            window.location.href = "index.html";
        }
       },2000);
}


