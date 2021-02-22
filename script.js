function Question(text, choice, answer){
  this.text = text;
  this.choice = choice;
  this.answer = answer;
}

function Quiz(questions){
  this.typeENFP = 0;
  this.typeENFJ = 0;
  this.typeENTP = 0;
  this.typeENTJ = 0;
  this.typeESFP = 0;
  this.typeESFJ = 0;
  this.typeESTP = 0;
  this.typeESTJ = 0;
  this.typeINFP = 0;
  this.typeINFJ = 0;
  this.typeINTP = 0;
  this.typeINTJ = 0;
  this.typeISFP = 0;
  this.typeISFJ = 0;
  this.typeISTP = 0;
  this.typeISTJ = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
  var questions = [
    new Question('깊은 잠 끝에 눈을 뜬 당신.<br>오늘은 그간 준비해온 <br>과거시험을 치러 떠나는 날이다.<br>당신의 짐꾸러미는..', ['이제 챙겨야한다.','이미 싸여져 있다.'], ['E','I']),
    new Question('이제 짐을 가지고 떠나려는데 <br>혼자 남겨질 어머님이 걱정된다.<br>어머님께 약방 가는 길을 <br>알려드리려 한다<br>간단히 쪽지에 지도를 그렸다. <br>그 지도는..', ['주막, 시장 등 <br>지나쳐야하는 곳들까지 세세하게 적었다.','그냥 목적지까지 선으로 대강 그렸다.'], ['S','N']),
    new Question('어머님께 인사드린 후<br>어느덧 과거시험장 근처에 도착한 당신.<br>하지만 어디로 들어가야할지 모르겠다.<br>이때 당신은..', ['주변 행인들에게 길을 묻는다.','눈치껏 나와 비슷해 보이는 사람 찾아 따라간다.'], ['E','I']),
    new Question('시험장에 무사히 도착한 당신. <br>시간이 되어 막 문제를 발표하려던 순간, <br>한 학우가 허겁지겁 들어온다.<br>딱한 사연이 있는 상황.<br>아직 문제를 공개하지 않아 <br>모두가 찬성하면 시험을 볼 수 있다.<br>당신은..', ['뭣이? 사정은 사정이고 시험은 시험이지. <br>안돼, 돌아가.','그래도 사연이 딱하니 봐준다.'], ['T','F']),
    new Question('예정대로 시험이 시작되고 <br>열심히 한 만큼 문제가 술술 풀린다.<br>그러다 문득, 기막힌 답변이 떠올랐다.<br>하지만 이미 줄줄 외워둔 답이 있는 상황.<br>당신은..', ['안정이 최고지. 이미 외워둔 답을 쓴다.','아니, 이건 장원급제감이다. <br>방금 떠오른 생각을 쓴다.'], ['S','N']),
    new Question('과거시험이 끝나고 <br>다들 답을 맞춰보느라 웅성거린다.<br>그냥 가려는데 내가 찍은 답을 <br>신랄히 비판중이다.<br>다시 생각해봐도 내가 너무 맞는데, <br>그걸 써낸 사람이 있겠냐며 비웃는다. <br>그럴 때 당신은..', ['그게 나다! 끼어들어 내 답이 맞는 이유를 설명해주고 이기고 온다.','쯧. 감정 상할 바엔 참고 지나친다.'], ['T','F']),
    new Question('시험장을 나오면서 친구를 만난 당신.<br>친구가 시험을 망친 것 같다며 걱정한다.<br>실제로 평소 공부에 소홀했던 친구. <br>당신은..', ['그래, 그래놓고 어떻게 잘봤겠니. <br>사실 그대로를 얘기해준다','에이, 아닐거야. 위로해준다.'], ['T','F']),
    new Question('시험이 끝난 회포를 풀러 <br>친구들과 함께 주막에 온 당신. <br>당신은..', ['끝인 듯 먹자! <br>큰 목소리로 분위기를 띄운다.','껄껄껄, <br>분위기에 따라 반응하며 즐긴다.'], ['E','I']),
    new Question('친구들과 놀던 중,<br> 저 멀리 한 이성이 눈에 들어온다.<br>꿈꾸던 이상형. 그 사람은...', ['높은 코에 적당히 큰 눈. <br> 고운 피부를 가졌다.','JUST 엄청나다. 그냥 대박이다.'], ['S','N']),
    new Question('오랜만의 노는 자리라 그런지 <br>친구들이 유독 신이 났다. <br>2차에 가자고 조르는데 당신은..', ['너무 좋은 생각이다. 간다.','이젠 한계다. <br> 집에 가서 혼자만의 시간을 갖는다.'], ['E','I']),
    new Question('어제 술을 너무 마셨는지 <br>몸이 으슬으슬하니 쑤신다.<br>하지만 좀 쉬면 나을 것도 같은데, <br>이때 나는..', ['뭐, 그렇게 아픈 것도 아니니깐. <br>그냥 넘어간다.','그래도 관리해야지. <br>몸에 좋다는 것을 먹는다.'], ['P','J']),
    new Question('이제 시험도 마쳤겠다, <br>슬슬 집에 가려한다.<br>친구와 함께 짐을 싸던 중 웬걸, <br>친구가 어제 본 나의 님과 <br>서신을 주고 받기로 했다는 거다.<br>절대 나의 님을 뺏기기 싫다. <br>이때 나는..', ['지체할 시간이 없다. <br>당장 나의 님께 가서 적극적으로 구애한다.','계획적으로 나의 님을 내 것으로. <br>우연을 가장한 만남을 위해 머리를 굴린다.'], ['P','J'])
];

var quiz = new Quiz(questions);
function updateQuiz(){
  var question = document.getElementById('question');
  var idx = quiz.questionIndex + 1;
  var choice = document.querySelectorAll('.btn');

// question.innerHTML = '문제'+idx+')'+quiz.questions[quiz.questionIndex].text;
question.innerHTML = quiz.questions[quiz.questionIndex].text;
for (var i =0; i<2; i++){
  choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
  choice[i].value = quiz.questions[quiz.questionIndex].answer[i];
}

// progress();
barchange();
};
// 문제 1/11 이런거 쓸 때 사용되는 함수임.
// function progress(){
//   var progress = document.getElementById('progress');
//   progress.innerHTML = '문제'+(quiz.questionIndex+1)+'/'+quiz.questions.length;
// };

// var fileNm = ['예비배경1.png','배경2.png','배경3.png','배경4.png','배경5.png','배경6.png','배경7.png'];
// function picture(){
//   var url = "url("+fileNm[quiz.questionIndex]+")";
//   document.body.style.backgroundImage = url;
// };
function barchange(){
  // var num = ["30px", "60px", "90px", "120px", "150px", "180px", "210px", "240px", "270px", "300px", "330px", "360px"];
  var num = [100/12,200/12,300/12,400/12,500/12,600/12,700/12,800/12,900/12,1000/12,1100/12,1200/12];
  var bar = document.querySelector('.gage');
  bar.style.width = num[quiz.questionIndex] + 'vw';
  bar.style.transition = 'all 0.7s';
};
var btn= document.querySelectorAll('.btn');

function checkAnswer(i){
  btn[i].addEventListener('click',function(){
    var answer = btn[i].value;
    if (answer == "E"){
      quiz.typeENFP++ && quiz.typeENTP++ && quiz.typeESTP++ && quiz.typeESFP++ && quiz.typeENFJ++ && quiz.typeENTJ++ && quiz.typeESTJ++ && quiz.typeESFJ++;
      }
      else if (answer == "I"){
        quiz.typeINFP++ && quiz.typeINTP++ && quiz.typeISTP++ && quiz.typeISFP++ && quiz.typeINFJ++ && quiz.typeINTJ++ && quiz.typeISTJ++ && quiz.typeISFJ++;
      }
      else if (answer == "N"){
        quiz.typeENFP++ && quiz.typeENTP++ && quiz.typeINFP++ && quiz.typeINTP++ &&  quiz.typeENFJ++ && quiz.typeENTJ++ && quiz.typeINFJ++ && quiz.typeINTJ++;

      }
      else if (answer == "S"){
        quiz.typeISTP++ && quiz.typeISFP++ && quiz.typeESTP++ && quiz.typeESFP++ &&  quiz.typeISTJ++ && quiz.typeISFJ++ && quiz.typeESTJ++ && quiz.typeESFJ++;

      }
      else if (answer == "F"){
        quiz.typeENFP++ && quiz.typeINFP++ && quiz.typeISFP++ && quiz.typeESFP++ &&  quiz.typeENFJ++ && quiz.typeINFJ++ && quiz.typeISFJ++ && quiz.typeESFJ++;

      }
      else if (answer == "T"){
        quiz.typeISTP++ && quiz.typeENTP++ && quiz.typeESTP++ && quiz.typeINTP++ &&  quiz.typeISTJ++ && quiz.typeENTJ++ && quiz.typeESTJ++ && quiz.typeINTJ++;

      }
      else if (answer == "P"){
        quiz.typeISTP++ && quiz.typeENTP++ && quiz.typeESTP++ && quiz.typeINTP++ &&  quiz.typeENFP++ && quiz.typeINFP++ && quiz.typeISFP++ && quiz.typeESFP++;

      } 
      else if (answer == "J"){
        quiz.typeENFJ++ && quiz.typeINFJ++ && quiz.typeISFJ++ && quiz.typeESFJ++ &&  quiz.typeISTJ++ && quiz.typeENTJ++ && quiz.typeESTJ++ && quiz.typeINTJ++;

      }

    if (quiz.questionIndex < quiz.questions.length-1){
      quiz.questionIndex++;
      updateQuiz();
    }
    else {
      document.querySelector('.final').style.display='block';
      document.querySelector('.everything').style.display='none';
      result();
    }
    });
}

for (var i = 0; i<btn.length; i++){
  checkAnswer(i);
}
updateQuiz();
