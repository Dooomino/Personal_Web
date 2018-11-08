var times= new anime.timeline();
var smooth =[.50, 0.5, .71, 1];

var colorWheel=[
    "rgb(231,29,53)",
    "rgb(47,41,79)",
    "rgb(27 153 139)",
    "rgb(232,212,77)",
    "rgb(244,96,56)"
];

function run(dur){
	times.add({
		targets: "body",
		backgroundColor: "rgb(247, 180, 145)",
		duration:dur,
		delay:dur/2,
		easing:smooth
	}).add({
		targets:"#WORKP",
		opacity:1,
		duration:dur,
		easing: smooth,
		offset:dur
	});
}


window.onload=function(){
	run(1000);

	var divs=document.querySelectorAll(".items"),i;

    for(i=0;i<divs.length;i++){
        var c=i%colorWheel.length;
        divs[i].style.backgroundColor=colorWheel[c];
    }

}

function goto(el){
	var id = $(el).attr('href');
    $('html,body').stop().animate({scrollTop:$(id).offset().top-0.05*$("body").height()},1000);
	openbar()
}


function openbar(){
	times= new anime.timeline();
	$("#leftBar").toggleClass("active");
	if($("#leftBar").attr('class')=="active"){
		times.add({
			targets: "#leftBar",
			height: ["5%","100%"],
			duration: 500,
			easing:smooth,
		}).add({
			targets: ".fas",
			top: ["25%","1%"],
			duration: 500,
			easing:smooth,
			offset:0
		}).add({
			targets:"#leftBar ul",
			opacity:1,
			duration:500,
			easing:smooth,
			offset: 100
		});
		$("#leftBar ul").css("display","block");
	}else{
		times.add({
			targets: "#leftBar",
			height: ["100%","5%"],
			duration: 500,
			easing:smooth,
		}).add({
			targets: ".fas",
			top: ["1%","25%"],
			duration: 500,
			easing:smooth,
			offset:0
		}).add({
			targets:"#leftBar ul",
			opacity:0,
			duration:500,
			easing:smooth,
			offset: 100
		});
		$("#leftBar ul").css("display","none");
	}
}


function gotoHome(){
    times.pause();
    times = new anime.timeline();
    times.add({
        targets: "#WORKP",
		opacity:0,
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


function checkpos(){
    var scrollBarTop = document.body.scrollTop;
    var divs=document.querySelectorAll("#leadBar .times"),i;
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
