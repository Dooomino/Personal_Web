var smooth =[.50, 0.5, .71, 1]

var colors=["rgb(47,41,79)",
            "rgb(255,238,173)",
            "rgb(150,206,180)",
            "rgb(136,216,176)",
            "rgb(255,111,105)"
           ];

function run(dur){
     times.add({
         targets:"#Me",
         opacity: 1,
         duration:dur,
         easing: "easeOutSine"
    });

    times.add({
        targets:"body",
        backgroundColor: 'rgb(47,41,79)',
        duration:dur,
        easing: "easeOutSine"
    });
    times.add({
        targets:".text2,#info,#Timeline",
        opacity: 1,
        duration:dur,
        easing: smooth
    });
}


function gotoHome(){
    times.pause();
    times = new anime.timeline();
    times.add({
        targets: "#Me",
        opacity: 0,
        duration: 1000,
        easing: smooth
    });
    times.add({
        targets: "body",
        backgroundColor: 'rgb(0,0,0)',
        duration: 1000,
        easing: smooth
    });
    setTimeout(function(){
        if(times.finished){
            window.location.href = "index.html";
        }
       },2000);
}

var divs,i;
var windowHeight = document.documentElement.clientHeight;


function checkpos(){
    var scrollBarTop = document.body.scrollTop;
    var divs=document.querySelectorAll("#Timeline .times"),i;
    for(i=0;i<divs.length;i++){
        var c=i%(colors.length+1);
        var targetTop = document.getElementsByClassName('time'+(i+1))[0].offsetTop;
        var count = windowHeight + scrollBarTop-$(divs[i]).height()+20;
        if(targetTop<count){
            $(".circle"+(i+1)).css("color","#fff");
        }else{
            $(".circle"+(i+1)).css("color","#000");
        }
    }

}
window.onscroll=checkpos;

function moveto(el){
    var id = $(el).attr('href');
    $('html,body').stop().animate({scrollTop: $(id).offset().top},1000);
}


window.onload = function(){
    times=new anime.timeline();
    run(1000);

    var divs=document.querySelectorAll("#Timeline .times"),i;
    for(i=0;i<divs.length;i++){
        var c=i%colors.length;
        $(divs[i]).css("backgroundColor",colors[c]);
    }
    checkpos();
}
