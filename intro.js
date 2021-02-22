window.onload = function() {
  document.body.className += ' fadeIn';
}

var text = document.querySelector('.first');
var p = -1;
var writing = ["그렇게 씻지도 못하고 잠에 빠진 당신. <br> 눈을 떠보니 과거로 돌아와 있다.", "그곳에서 당신은 <br> 의인이 되기 위해 <br> 의술을 공부 중이다.", "당장 다음날에 있을 과거시험을 위해 <br> 여정을 떠나야 하는데..."];
var backcolor = ["rgb(31, 31, 31)", "rgb(100, 100, 100)", "rgb(89, 126, 115)"];

mainbutton.onclick =  function(){
p++;
if(p >= writing.length-1){
document.getElementById('resultbutton').style.display = 'block';
document.getElementById('mainbutton').style.display = 'none';
};
var text = document.querySelector('.first');
text.innerHTML = writing[p];
document.body.style.backgroundColor = backcolor[p];
document.body.style.transition = 'all 2s';
}