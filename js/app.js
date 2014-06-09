$(document).ready(function(){

$(".pic").fadeIn(2000).delay(1000).fadeOut(2000);
$(".text").delay(5000).fadeIn(2000);
//$.delay(5000);
//$(".text").fadeOut(3000);

$(".ryu").mouseenter(function(){

$(this).find(".ryu-still").hide();
$(this).find(".ryu-ready").show();
})

.mouseleave(function(){

$(this).find(".ryu-ready").hide();
$(this).find(".ryu-still").show();
})

.mousedown(function(){
//alert("very good");
console.log("mousedown");
playHadouken();
$(this).find(".ryu-ready").hide();
$(this).find(".ryu-cool").hide();
$(this).find(".ryu-still").hide();
$(this).find(".ryu-throwing").show();
//(".handouken").css({"left":"-195px;"});
//$(".handouken").show();
$(".hadouken").show().finish().animate(
{"left":"200px"}, 500, function(){
$(this).hide();
$(this).css({"left":"-195px"});
});

})

.mouseup(function(){

console.log("mouseup");
$(this).find(".ryu-throwing").hide();
$(this).find(".ryu-still").hide();

//$(this).find(".ryu-ready").show();
//$(".handouken").hide();
//$(".handouken").css({"left":"-195px"});
});

function playHadouken () {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}

$(document).keydown(function(e){

	if(e.keyCode == 88){
	cool();
		}

});

$(document).keyup(function(e){

	if(e.keyCode == 88){
	$(".ryu-cool").hide();
	$(".ryu-ready").hide();
	$(".ryu-still").show();
	
		}

});

//$(document).keypress(function(e){

	//if(e.keyChar == 'x'){
	//alert("very good");
	//$("#cool-sound")[0].volume = 1;
	//$("#cool-sound")[0].load();
	//$("#cool-sound")[0].play();
	//	}
//});


function cool() {
$(".ryu-still").hide();
$(".ryu-ready").hide();
$(".ryu-throwing").hide();
$(".ryu-cool").show();
//$("#cool-sound")[0].volume = 1;
//$("#cool-sound")[0].load();
//$("#cool-sound")[0].play();
}

});