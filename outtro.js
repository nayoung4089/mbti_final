window.onload = function() {
    document.body.className += ' fadeIn';
}

var text = document.querySelector('.first');
var p = -1;
var writing = ["눈이 점점 아득해지고 고개가 절로 숙여지더니...", "결국 길 한복판에 쓰러져버린 당신.<br> 오늘 아침 느꼈던 으슬으슬함이 <br>영 약을 지어먹었어야 했나보다.", "운이 좋게도 지나가던 명의가 쓰러진 당신을 발견한다.<br>그 명의가 고심 끝에 당신의 입에 무언갈 넣는데..."];
var backcolor = ["#f9faf2", "rgb(235, 233, 144)", "rgb(166, 187, 133)"];

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
};