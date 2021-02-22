resultbutton.onclick = function result(){
    var quizDiv = document.querySelector('.final');
    var calcType = Math.max(quiz.typeENFP, quiz.typeENTP, quiz.typeESFP, quiz.typeESTP, quiz.typeINFP, quiz.typeINTP ,quiz.typeISFP, quiz.typeISTP,
  quiz.typeENFJ, quiz.typeENTJ, quiz.typeESFJ, quiz.typeESTJ, quiz.typeINFJ, quiz.typeINTJ ,quiz.typeISFJ, quiz.typeISTJ
    );
    var type = "";
    // 이제 이 mbti를 결과값 페이지 링크로 바꿔주면 됨.
    if (quiz.typeENFP == calcType){
      type = "ENFP";
    }
    if (quiz.typeENTP == calcType){
      type = "ENTP";
    }
    if (quiz.typeESTP == calcType){
      type = "ESTP";
    }
    if (quiz.typeESFP == calcType){
      type = "ESFP";
    }
    if (quiz.typeINFP == calcType){
      type = "INFP";
    }
    if (quiz.typeINTP == calcType){
      type = "INTP";
    }
    if (quiz.typeISFP == calcType){
      type = "ISFP";
    }
    if (quiz.typeISTP == calcType){
      type = "ISTP";
    }
    if (quiz.typeENFJ == calcType){
      type = "ENFJ";
    }
    if (quiz.typeENTJ == calcType){
      type = "ENTJ";
    }
    if (quiz.typeESTJ == calcType){
      type = "ESTJ";
    }
    if (quiz.typeESFJ == calcType){
      type = "ESFJ";
    }
    if (quiz.typeINFJ == calcType){
      type = "INFJ";
    }
    if (quiz.typeINTJ == calcType){
      type = "INTJ";
    }
    if (quiz.typeISFJ == calcType){
      type = "ISFJ";
    }
    if (quiz.typeISTJ == calcType){
      type = "ISTJ";
    }
  
    var txt = '<h1> 결과</h1>' + '<h2 id = "score"> 당신의 유형 :' +type+ '</h2>';
    quizDiv.innerHTML = txt;
  }