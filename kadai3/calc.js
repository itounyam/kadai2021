// これは calc.html と一緒に使用するJavaScriptファイルです。

// 入力モードの定義
const MODE_OPERATOR = 1;
const MODE_NUMBER   = 2;

// 現在の入力モード
let mode = MODE_OPERATOR;

// 表示する値
let answerValue = 0;

// オペランド1, 2
let operand1 = null;
let operand2 = null;

// オペレーター
let operator = null;

// 【クリア】ボタンが押されたときの動作
document.getElementById('button-clear').addEventListener('click', function(event) {
  let answerElement = document.getElementById('answer');
  answerElement.value = 0;
  mode = MODE_OPERATOR;
});

// 数字のボタンが押されたときのイベントハンドラの登録
document.getElementsByName('number').forEach(function(element) {
  element.addEventListener('click', onNumberClicked);
});

// 文字のボタンが押されたときのイベントハンドラの登録
document.getElementsByName('operator').forEach(function(element) {
  element.addEventListener('click', onOperatorClicked);
});

// TODO この関数を実装すると良い
function onNumberClicked(event) {
  // 押されたボタンの値は event.target.value で取得できる
  console.log(event.target.value);
}

// TODO この関数を実装すると良い
function onOperatorClicked(event) {
  // 押されたボタンの値は event.target.value で取得できる
  const operator = event.target.value;
  console.log(operator);
}
