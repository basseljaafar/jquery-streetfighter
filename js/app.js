$(document).ready(function(){

$(".ryu").mouseenter(function(){

$(this).find(".ryu-still").hide();
$(this).find(".ryu-ready").show();
})

.mouseleave(function(){

$(this).find(".ryu-ready").hide();
$(this).find(".ryu-still").show();

});

});