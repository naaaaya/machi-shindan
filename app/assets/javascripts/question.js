var second_questions = ["",""]
var third_questions = ["", "", "", ""]
var answers = "";
var q_num = 1;
var results = ["yyy", "yyn", "ynn", "yny", "nyy", "nny", "nnn", "nyn"];

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
    result = culcResult(answers);
    showResult(result);
  }
}

function culcResult(answers) {
  var result = results.indexOf(answers) + 1;
  console.log(answers);
  console.log(result);
  return result
}

function showResult(result){
  document.getElementById("yes-btn").style.display = "none";
  document.getElementById("no-btn").style.display = "none";
  document.getElementById("print-btn").style.display = "block";
  var ele = document.createElement('input');
    // データを設定
    ele.setAttribute('type', 'hidden');
    ele.setAttribute('name', 'result');
    ele.setAttribute('value', result);
    // 要素を追加
    document.getElementsByClassName("button_to")[0].appendChild(ele);
  document.getElementById("q_text").innerText = "あなたは";
  showResultImage(result);
}

function showResultImage(result){
  var resultImage = document.createElement('img')
  var src = "/assets/" + result + "-icon.svg"
  resultImage.setAttribute("src", src);
  resultImage.setAttribute("style", "display: block");
  document.getElementById("q_text").appendChild(resultImage);
  document.getElementById("print-btn").style.display = "block";
}
