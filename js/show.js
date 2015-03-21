/*金雨婷 2015/3 脚印出现*/
function show_feet(id, sdelay, hdelay) {
	var during = 1000;
	var feet = $("#div"+id);
	console.log(feet);
	// feet.show();
	var t = setTimeout(function(){
		feet.fadeIn(during, function(){
			setTimeout(feet.fadeOut(during), hdelay);
		})	
	}, sdelay);
}
$(document).ready(function(){
	show_feet(1, 1000, 4000);
})
$(document).ready(function(){
	show_feet(2, 2000, 4000);
})
$(document).ready(function(){
	show_feet(3, 3000, 4000);
})
$(document).ready(function(){
	show_feet(4, 4000, 4000);
})



function displayAll()
{
	var odiv0=document.getElementById('div0');
	odiv0.style.display="none";
}
setTimeout(displayAll,5000);



// function changeWhite()
// {
// 	var obody=document.getElementById('hiBody');
// 	obody.style.backgroundColor="white";
// }
// setTimeout(changeWhite,5000);
