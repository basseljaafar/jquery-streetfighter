$(document).ready(function(){

$(".ryu").mouseenter(function(){

$(this).find(".ryu-still").hide();
$(this).find(".ryu-ready").show();
})

.mouseleave(function(){

$(this).find(".ryu-ready").hide();
$(this).find(".ryu-still").show();
})

.mousedown(function(){

console.log("mousedown");
playHadouken();
$(this).find(".ryu-ready").hide();
$(this).find(".ryu-throwing").show();
//(".handouken").css({"left":"-195px;"});
//$(".handouken").show();
$(".handouken").show().finish().animate(
{"left":"200px"}, 500, function(){
$(this).hide();
$(this).css({"left":"-195px"});
});

})

.mouseup(function(){

console.log("mouseup");
$(this).find(".ryu-throwing").hide();
$(this).find(".ryu-ready").show();
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
		console.log("X");
		}

});

$(document).keyup(function(e){

	if(e.keyCode == 88){
	$(".ryu").hide;
	$(".ryu-still").show();
	$("#cool-sound")[0].volume = 0.5;
	$("#cool-sound")[0].load();
	$("#cool-sound")[0].play();
		}

});



function cool() {
$(".ryu-still").hide();
$(".ryu-ready").hide();
$(".ryu-throwing").hide();
$(".ryu-cool").show();

}

});