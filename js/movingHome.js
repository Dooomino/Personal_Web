var times= new anime.timeline();
var isdone=false,count;
function menuin(){
    var i;
    for(i=1;i<4;i++){
        times.add({
            targets:"#menus .menu"+i,
            opacity:1,
            translateY:-10,
            duration:500,
            easing:"easeOutSine"
        });
    }
 }

function run(dur){
    count = document.querySelectorAll("#title .text").length;
//     console.log(count);
    for(var i=1;i<count+1;i++){
        times.add({
            targets:"#title .text"+String(i),
            translateY:-10,
            opacity:1,
            duration: dur,
            easing:"easeOutSine"
        });
//        if(i==2){
//            times.add({
//                targets:"#skip",
//                opacity:0.5,
//                duration: dur,
//                easing:"easeOutSine"
//            });
//
//        }
        
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
                easing:"easeOutSine"
            });
//    times.add({
//                targets:"#skip",
//                opacity:0,
//                translateY:-1000,
//                duration: dur/2,
//                easing:"easeOutSine"
//            });
    menuin();



    
    

}

 window.onload=function(){
     run(1000);    

     document.addEventListener("keydown",function(event){
         if (!isdone){
            done();
            isdone=true;
         }
     })
}
 
 
function done(){
    times.pause();
    times = new anime.timeline();
//    console.log("done")
    run(10);
}


function gotoWork(){
    times.pause();
    times = new anime.timeline();
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
    },1000);
}
function gotoMe(){
    times.pause();
    times = new anime.timeline();
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
    },1000);
}

document.onclick=clickDo

function clickDo(){
    if(!isdone){
        done();
        isdone=true;
    }
}
