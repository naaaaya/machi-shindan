var second_questions = ["",""]
var third_questions = ["", "", "", ""]
var answers = "";
var q_num = 1;
function clickedYes(){
  answers += "y";
  console.log(answers);
  nextQuestion();
}
function clickedNo(){
  answers += "n";
  console.log(answers);
  nextQuestion();
}

function nextQuestion(){
  q_num += 1;
  document.getElementById("q_text").innerText = "問題" + q_num;
  if (q_num == 4) {
    showResult();
  }
}

function showResult(){
  document.getElementById("yes-btn").style.display = "none";
  document.getElementById("no-btn").style.display = "none";
  document.getElementById("print-btn").style.display = "block";
  document.getElementById("q_text").innerText = "あなたは";
}
