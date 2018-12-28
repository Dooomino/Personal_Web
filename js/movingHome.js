var times= new anime.timeline();
var isdone=false,count;
var savedcss;
var ln = new anime.timeline();
var smooth = [.19,1.0,.77,1.0];
var colorWheel=[
   "rgb(231,29,53)",
   "rgb(47,41,79)",
   "rgb(27,153,139)",
   "rgb(232,212,77)",
   "rgb(244,96,56)"
];
var divcolor = new Array(colorWheel.length);

function menuin(){
   var i;
   var c= times
   c.add({
         before: function(){
           $("#logo").css("opacity","1");
         },
         targets: '#logo line,path',
         strokeDashoffset: [anime.setDashoffset, 0],
	     opacity:[0,1],
         easing: smooth,
         duration: function(el,i){
			 return 100*(i+1)+150;
		 },
		 delay: function(el,i){
			 return 250*i;
		 }
      });
	$("#menus").css("display",savedcss)
   	for(i=1;i<4;i++){
      c.add({
         targets:".menu"+i,
		 opacity:[0,1],
         translateY:-10,
         duration:500,
         easing:"easeOutSine",
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
   $("#menus").css("display","none");
   run(1000);
   document.addEventListener("keydown",function(event){
      if (!isdone){
        done();
        isdone=true;
      }
   });
 }

function done(){
   times.pause();
   times = new anime.timeline();
//   console.log("done")
   run(1);
}

function logoOut(c){
   c.add({
       	 targets: '#logo line,path',
         strokeDashoffset: [0,anime.setDashoffset],
	     opacity:[1,0.3],
         easing: smooth,
         duration: function(el,i){
			 return 200*(i+1);
		 },
		 delay: function(el,i){
			 console.log(el.id);
			 return 100*i;
		 }
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
   },3000);
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
   },3000);
}

document.onclick=clickDo

function clickDo(){
   if(!isdone){
      done();
      isdone=true;
   }
}
