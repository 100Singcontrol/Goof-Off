// 实时输出时间
function getCurrentTime(){
	var myDate = new Date();
	document.getElementById('time').innerHTML=myDate;
}
setInterval('getCurrentTime()',500);

// 跑马灯
function paomadeng(){
	var tag=document.getElementById('paomadeng');
	var a = tag.innerText;
	var b = a.charAt(0);
	var c = a.substring(1,a.length);
	tag.innerText = c + b;
}
setInterval('paomadeng()',500);
// 搜索框
function sousuokuang(){
	var sousuokuang = document.getElementById('search');
	var d = sousuokuang.value;
	if (d == '输入关键字搜索'){
		sousuokuang.value = '';
	}
}
function sousuokuang_Null(){
	var sousuokuang = document.getElementById('search');
	var e = sousuokuang.value;
	if (e.length == 0){
		sousuokuang.value = '输入关键字搜索';
	}
}