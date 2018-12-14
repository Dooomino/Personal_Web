var times= new anime.timeline();
var isdone=false,count;
var savedcss;
var ln = new anime.timeline();
var smooth = [.19,1.0,.77,1.0];
var colorWheel=[
   "rgb(231,29,53)",
   "rgb(47,41,79)",
   "rgb(27 153 139)",
   "rgb(232,212,77)",
   "rgb(244,96,56)"
];


function menuin(){
   var i;
   var c= times
   c.add({
         before: function(){
           $("#logodrawing").css("opacity","1");
         },
         targets: '.lines circle',
         opacity: [0,1],
         strokeDashoffset: [anime.setDashoffset, -0.1],
         easing: smooth,
         duration: 1000,
      }).add({
         targets: '.lines path',
         opacity: [0,1],
         strokeDashoffset: [anime.setDashoffset, 0],
         easing: smooth,
         duration: 1000,
      });
   for(i=1;i<4;i++){
      c.add({
         before:function(){
               $("#menus").css("display",savedcss);
         },
         targets:"#menus .menu"+i,
         opacity:1,
         translateY:-10,
         duration:500,
         easing:"easeOutSine"
      });
   }
   c.add({
         targets:"#powered",
         bottom: "0%",
         duration:500,
         easing:"easeOutSine",
         complete:function(){
            isdone=true;
         }
      });
 }

function run(dur){
   count = document.querySelectorAll("#title .text").length;
//    console.log(count);
   for(var i=1;i<count+1;i++){
      times.add({
         targets:"#title .text"+String(i),
         translateY:-10,
         opacity:1,
         duration: dur,
         easing:"easeOutSine"
      });
      if(i<count){
         times.add({
            targets:"#title .text"+String(i),
            opacity:0,
            duration: dur,
            easing:"easeOutSine"

         });
         times.add({
            targets:"#title",
            translateY:-30*i,
            duration:dur,
            easing:"easeOutSine"
         });
      }
   }
   times.add({
      targets:"#title",
      translateY:-30*count-30,
      duration:dur,
      easing:"easeOutSine"
   });

    times.add({
            targets:".text"+count,
            opacity:0,
            duration: dur,
            easing:"easeOutSine"
         });
     times.add({
            targets:".change",
            opacity:1,
            duration: dur/2 ,
            easing:"easeOutSine",
         });
   menuin();
}


 window.onload=function(){
   savedcss = $("#menus").css("display");
   $("#logodrawing").css("opacity","0");
   $("#menus").css("display","none");
   run(1000);
   document.addEventListener("keydown",function(event){
      if (!isdone){
        done();
        isdone=true;
      }
   })

  	var amenu = new anime.timeline();
   	$(".menu").each(function(i,obj){
	  	var c=i%colorWheel.length;
	 	obj.onmouseover=function(){
		  amenu = new anime.timeline();
		  amenu.add({
			targets:".menu"+(i+1),
			backgroundColor: colorWheel[c],
			duration: 500,
			easing:smooth
		  });
		}
		obj.onmouseout=function(){
		  amenu = new anime.timeline();
		  amenu.add({
			targets:".menu"+(i+1),
			backgroundColor: 'rgb(0,0,0)',
			duration: 1000,
			easing:smooth
		  });
		}


   })


 }


 
 
function done(){
   times.pause();
   times = new anime.timeline();
//   console.log("done")
   run(1);
}

function logoOut(c){
   c.add({
      targets: '.lines circle, path',
      opacity: [1,0.6],
      strokeDashoffset: [0,anime.setDashoffset],
      easing: smooth,
      duration: 1000,
   });
}

function gotoWork(){
   times.pause();
   times = new anime.timeline();
   logoOut(times);
   times.add({
      targets:"#Home",
      opacity:0,
      duration:1000,
      easing:"easeOutSine"
   });
   setTimeout(function(){
      if(times.finished){
         console.log("done");
         window.location.href="works.html";
      }
   },2000);
}
function gotoMe(){
   times.pause();
   times = new anime.timeline();
   logoOut(times);
   times.add({
      targets:"#Home",
      opacity:0,
      duration:1000,
      easing:"easeOutSine"
   });
   setTimeout(function(){
      if(times.finished){
         console.log("done");
         window.location.href="me.html";
      }
   },2000);
}

document.onclick=clickDo

function clickDo(){
   if(!isdone){
      done();
      isdone=true;
   }
}

function loadlogo(){
   ln.add({
      targets: '.lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: smooth,
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
   }).add({
      targets: '.lines circle',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: smooth,
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
   });
}
