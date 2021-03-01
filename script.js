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
    new Question('깊은 잠 끝에 눈을 뜬 나.<br>지금은 조선시대다.<br>오늘은 처음으로 서당에 가는 날.<br>나의 짐은', ['싸여져있다.','이제 싸야한다.'], ['J','P']),
    new Question('서당 근처에 오긴 했는데 <br>더이상 길을 모르겠다.<br>이때', ['주위 사람들에게 길을 묻는다.','나와 비슷해 보이는 사람을 따라간다.'], ['E','I']),
    new Question('서당에 도착했다. <br>낯선 학우들이 보인다.<br>나의 기분은', ['떨리지만 설렌다.','낯설고 걱정된다.'], ['E','I']),
    new Question('훈장님이 간단한 문제를 냈다.<br>답은 이미 알고 있긴 한데,<br>갑자기 새로운 생각이 났다.<br>이때 나는', ['이미 알고있는 답을 적는다.','새로 떠오른 답을 적는다.'], ['J','P']),
    new Question('내 답이 마음에 드셨는지<br>훈장님이 나를 칭찬해주셨다.<br>그 칭찬은', ['그간 공부를 정말 열심히 했구나!','넌 정말 영특하구나!'], ['F','T']),
    new Question('수업이 끝나고 집으로 가는 길.<br>이 동네 나의 이상형을 마주쳤다.<br>그 사람은', ['JUST 엄청나다. 오늘도 대박이다.','오늘도 피부가 곱고 눈이 예쁘다.'], ['N','S']),
    new Question('나의 그분과 잘되고 싶다.<br>나는', ['일단 말부터 걸어본다.','지켜보면서 신중하게 다가간다.'], ['P','J']),
    new Question('이따가 친구들과 놀기로 했는데,<br>근처의 바로 앞 책방 앞에서 만나기로 했다.<br>길을 모르는 친구에게 <br>지도를 간단히 그려줬는데<br>그 지도는', ['선으로 대강 알아볼 수 있게 그렸다.','주막, 서당 등 지나치는 곳까지 그렸다.'], ['N','S']),
    new Question('친구들과 만나서 즐겁게 노는 중이다.<br>이때 나는', ['주로 크게 말을 하며 분위기를 주도한다.','분위기에 맞춰 호응한다.'], ['E','I']),
    new Question('친구들과 놀다 옹기 파는 행상 앞을 지나게 됐다.<br>옹기들을 피해 조심히 가는 중,<br>뒤에서 오던 친구의 악, 소리가 들린다.<br>그때 든 생각은', ['옹기가 깨졌나?','다쳤나?'], ['T','F']),
    new Question('뒤를 돌아보니 옹기에 걸려 친구가 넘어졌다.<br>옹기 조각에 베여 조금 피도 나는 상황.<br>이때 나는', ['당장 친구에게 달려가 괜찮냐고 묻는다.','바로 주위를 둘러보면서 약방이 있는지부터 본다.'], ['F','T']),
    new Question('이 테스트 이름은?', ['기억 안난다.','알고 있다.'], ['N','S'])
];

var quiz = new Quiz(questions);
function updateQuiz(){
  var question = document.getElementById('question');
  var idx = quiz.questionIndex + 1;
  var choice = document.querySelectorAll('.btn');
question.innerHTML = quiz.questions[quiz.questionIndex].text;
for (var i =0; i<2; i++){
  choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
  choice[i].value = quiz.questions[quiz.questionIndex].answer[i];
}
progress();
};
function progress(){
  var progress = document.getElementById('progress');
  progress.innerHTML = '문제'+'&nbsp;'+(quiz.questionIndex+1)+'/'+quiz.questions.length;
};
var btn= document.querySelectorAll('.btn');

function checkAnswer(i){
  btn[i].addEventListener('click',function(){
    var answer = btn[i].value;
    if (answer == "E"){
      quiz.typeENFP++ ; quiz.typeENTP++ ; quiz.typeESTP++ ; quiz.typeESFP++ ; quiz.typeENFJ++ ; quiz.typeENTJ++ ; quiz.typeESTJ++ ; quiz.typeESFJ++;
      }
      if (answer == "I"){
        quiz.typeINFP++ ; quiz.typeINTP++ ; quiz.typeISTP++ ; quiz.typeISFP++ ; quiz.typeINFJ++ ; quiz.typeINTJ++ ; quiz.typeISTJ++ ; quiz.typeISFJ++;
      }
      if (answer == "N"){
        quiz.typeENFP++ ; quiz.typeENTP++ ; quiz.typeINFP++ ; quiz.typeINTP++ ;  quiz.typeENFJ++ ; quiz.typeENTJ++ ; quiz.typeINFJ++ ; quiz.typeINTJ++;

      }
      if (answer == "S"){
        quiz.typeISTP++ ; quiz.typeISFP++ ; quiz.typeESTP++ ; quiz.typeESFP++ ;  quiz.typeISTJ++ ; quiz.typeISFJ++ ; quiz.typeESTJ++ ; quiz.typeESFJ++;

      }
      if (answer == "F"){
        quiz.typeENFP++ ; quiz.typeINFP++ ; quiz.typeISFP++ ; quiz.typeESFP++ ;  quiz.typeENFJ++ ; quiz.typeINFJ++ ; quiz.typeISFJ++ ; quiz.typeESFJ++;

      }
      if (answer == "T"){
        quiz.typeISTP++ ; quiz.typeENTP++ ; quiz.typeESTP++ ; quiz.typeINTP++ ;  quiz.typeISTJ++ ; quiz.typeENTJ++ ; quiz.typeESTJ++ ; quiz.typeINTJ++;

      }
      if (answer == "P"){
        quiz.typeISTP++ ; quiz.typeENTP++ ; quiz.typeESTP++ ; quiz.typeINTP++ ;  quiz.typeENFP++ ; quiz.typeINFP++ ; quiz.typeISFP++ ; quiz.typeESFP++;
      } 
      if (answer == "J"){
        quiz.typeENFJ++ ; quiz.typeINFJ++ ; quiz.typeISFJ++ ; quiz.typeESFJ++ ;  quiz.typeISTJ++ ; quiz.typeENTJ++ ; quiz.typeESTJ++ ; quiz.typeINTJ++;
      }

    if (quiz.questionIndex < quiz.questions.length-1){
      quiz.questionIndex++;
      updateQuiz();
    }
    else{
      document.querySelector('.realfinal').style.display='block';
      document.querySelector('.everything').style.display='none';
      result();
    }
    });
}

for (var i = 0; i<btn.length; i++){
  checkAnswer(i);
}
updateQuiz();