var smooth =[.50, 0.5, .71, 1]

var colors=["rgb(255 204 92 )",
            "rgb(255 238 173)",
            "rgb(150 206 180)",
            "rgb(136 216 176)",
            "rgb(255 111 105)"
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
        backgroundColor: 'rgb(255, 255, 255)',
        duration:dur,
        easing: "easeOutSine"
    });
    times.add({
        targets:"#Topbar",
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        duration:dur,
        easing: smooth
    });
    times.add({
        targets:".text2",
        opacity: 1,
        duration:dur,
        easing: smooth
    });

    times.add({
        targets: "#avatar",
        opacity: 1,
        translateY:'-=20',
        duration:dur/2,
        easing: smooth
    });
    times.add({
        targets:"#info",
        opacity: 1,
        duration:dur,
        easing:smooth
    })
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

window.onscroll=function(){
    var divs=document.querySelectorAll("#Timeline .times"),i;
    for(i=0;i<divs.length;i++){
        var c=i%colors.length;
        if($("html,body").scrollTop().offset().top==$(divs[i]).scrollTop().offset().top){
            $(".fa-circle").css("color",colors[c]);
        }
    }

}

window.onload = function(){
    times=new anime.timeline();
    run(1000);

    var divs=document.querySelectorAll("#Timeline .times"),i;
    for(i=0;i<divs.length;i++){
        var c=i%colors.length;
        $(divs[i]).css("backgroundColor",colors[c]);
    }
}
