

window.onload=function(){

		run(1000);
}


function run(dur){
	var Move= new anime({
		targets: "#ring",
		scale: [1,2],
		duration: dur,
		direction: 'alternate',
		delay:100,
		loop: true,
		easing: [0, -0.20, 1, 1.20]
	});
}
