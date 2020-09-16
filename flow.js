$(document).ready(function(){
	
	$("body").prepend('<style> .ak_nice{ position:fixed; z-index:500;  border-radius:100%; -webkit-animation-name: ak_rotate; -webkit-animation-duration: 4s; -webkit-animation-iteration-count: infinite; animation-name: ak_rotate;animation-duration: 4s;animation-iteration-count: infinite;}   @keyframes ak_rotate {0%   {transform: rotate(0deg);} 100% {transform: rotate(1080deg);}}   @-webkit-keyframes ak_rotate {0%   {transform: rotate(0deg);} 100% {transform: rotate(1080deg);}}  </script>');
	
var ak_count=0;	
setInterval(function(){
	if(ak_count==500)
	{
	ak_count=0;	
	}
	ak_count++;
	
$("body").prepend('<div id="ak_flowid'+ak_count+'" class="ak_nice" style="height:'+Math.floor(Math.random() * 11)+'px; width:'+Math.floor(Math.random() * 11)+'px; left:'+ak_random_position()+'%;   top:0%;  border-bottom:2px solid '+ak_rgb()+'; "></div>');	
	
	
	$("#ak_flowid"+ak_count).animate({top:'100%',left: ak_random_position()+'%'},5000);
	
	
	ak_flowremove("ak_flowid"+ak_count);	
	
	
}, 100);	
	
});
//
function ak_flowremove(ak_fid)
{
	
$("#"+ak_fid).fadeOut(4300);
setTimeout(function(){$("#"+ak_fid).remove()},4400);
}





//random 1 to 100


function ak_random_position()
{
var ak_random_left=Math.floor(Math.random() * 11);
var ak_left_x= ak_random_left * Math.floor(Math.random() * 11);          
return ak_left_x;
}

//RGB Color

function ak_rgb()
{
return "white";
}

$(document).ready(function(){

//Mouse move

$("#mainbord").mousemove(function(event){

var pv=event.pageX /(document.getElementById("mainbord").clientWidth/50)+25;
var pvfx=pv.toFixed(0);

//$("#result").text(pvfx);


//background
$("#mainbord").css("background-image","linear-gradient(45deg, black 0px,  #53e0da "+pvfx+"%, black 100%)");

//textbord left right cng
var xv=(document.getElementById("mainbord").clientWidth/2)-event.pageX;
var xvp=(document.getElementById("mainbord").clientWidth/2)/17;
var fxv=xv/xvp;
var xvpf=fxv.toFixed(2);


//textbord up down cng
var yv=(document.getElementById("mainbord").clientHeight/2)-event.pageY;
var yvp=(document.getElementById("mainbord").clientHeight/2)/17;
var fyv=yv/yvp;
var yvpf=fyv.toFixed(2);

$("#textbord").css("transform","perspective(1000px) rotateY("+xvpf+"deg)   rotateX("+yvpf+"deg)");


});


//mouse out

$("#mainbord").mouseout(function()
{



});


});

