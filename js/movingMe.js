var times=new anime.timeline();
var smooth =[.50, 0.5, .71, 1];

window.onload=function(){
	run(1000);
}


function run(dur){
	times.add({
		targets: "body",
		backgroundColor: "rgb(255,255,255)",
		duration:dur,
		easing: smooth
	}).add({
		targets: "#Topbar",
		opacity:1,
		duration:dur,
		easing: smooth,
		offset:500
	}).add({
		targets: "#coverText",
		opacity:1,
		duration:dur,
		easing: smooth,
	}).add({
		targets: "#cover img",
		opacity:1,
		top:["-100%","0%"],
		duration:dur,
		delay: dur,
		easing: smooth,
	}).add({
		targets: "#coverText",
		textShadow: ["2px 2px rgba(0,0,0,0)","2px 2px rgba(0,0,0,0.3)"],
		duration:dur,
		easing: smooth,
	});

}
