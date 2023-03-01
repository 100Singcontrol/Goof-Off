// 实时输出时间
function getCurrentTime(){
	var myDate = new Date();
	document.getElementById('time-dark').innerHTML=myDate;
}
setInterval('getCurrentTime()',500);

// 跑马灯
function paomadeng(){
	var tag=document.getElementById('paomadeng-dark');
	var a = tag.innerText;
	var b = a.charAt(0);
	var c = a.substring(1,a.length);
	tag.innerText = c + b;
}
setInterval('paomadeng()',500);