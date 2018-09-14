let times= new anime.timeline();

function menuin(){
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


 window.onload=function(){
    count = document.querySelectorAll("#title .text").length;
//     console.log(count);
    for(i=1;i<count+1;i++){
        times.add({
            targets:"#title .text"+String(i),
            translateY:-10,
            opacity:1,
            duration: 1000,
            easing:"easeOutSine"
        });
        if(i==2){
            times.add({
                targets:"#skip",
                opacity:0.1,
                duration: 1000,
                easing:"easeOutSine"
            });
            
        }
        
        if(i<count){
            times.add({
                targets:"#title .text"+String(i),
                opacity:0,
                duration: 1000,
                easing:"easeOutSine"

            });
            times.add({
                targets:"#title",
                translateY:-30*i,
                easing:"easeOutSine"
            });
        }
    }
    times.add({
        targets:"#title",
        translateY:-30*count-30,
        easing:"easeOutSine"
    });
     
    times.add({
                targets:"#skip",
                opacity:0,
                duration: 10,
                easing:"easeOutSine"
            });
     
    menuin();
     
     
     
  
     
}
 
 
function done(){
    count = document.querySelectorAll("#title .text").length;
    times.pause();
    times = new anime.timeline();
    console.log("done")
    for(i=1;i<count+1;i++){
        times.add({
            targets:"#title .text"+String(i),
            translateY:-10,
            opacity:1,
            duration: 1,
            easing:"easeOutSine"
        });
        if(i<count){
            times.add({
                targets:"#title .text"+String(i),
                opacity:0,
                duration: 1,
                easing:"easeOutSine"

            });
            times.add({
                targets:"#title",
                duration: 1,
                translateY:-30*i,
                easing:"easeOutSine"
            });
        }
    }
    times.add({
        targets:"#title",
        duration: 1,
        translateY:-30*count-30,
        easing:"easeOutSine"
    });
     
    menuin();
     
    times.add({
                targets:"#skip",
                opacity:0,
                duration: 10,
                easing:"easeOutSine"
            });
     
}