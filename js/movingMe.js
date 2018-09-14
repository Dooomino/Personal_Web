var smooth =[.50, 0.5, .71, 1]

function run(dur){
     times.add({
         targets:"#Me",
         opacity: 1,
         duration:dur,
         easing: "easeOutSine"
    });
    
    times.add({
        targets:"body",
        backgroundColor: 'rgb(100, 150, 130)',
        easing: "easeOutSine"
    });
    times.add({
        targets:"#leftCover",
        width: '100%',
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



window.onload = function(){
    times=new anime.timeline();
    run(1000);
}
