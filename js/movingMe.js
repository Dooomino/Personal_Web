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
        easing: [.50, 0.5, .71, 1]
    })
} 



window.onload = function(){
    times=new anime.timeline();
    run(1000);
}
