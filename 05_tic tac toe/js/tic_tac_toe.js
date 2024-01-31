"use strict";

// flagが"pen-flag"のときpenguinsのターソ、"bear-flag"のときbearのターソ
let flag = "pen-flag";

// ターソ数カウンター
let counter = 9;

//squaresの要素を取得
const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");

//NewGAmeボタン取得

//Win or Lose Judment Line

//メッセージ
const msgtxt1 = '<p class="image"><img src ="img/penguins.jpg" width=61px></p><p class="text">penguins Attack!</p>';
const msgtxt2 = '<p class="image"><img src ="img/whitebear.jpg" width=61px></p><p class="text">whitebear Attack!</p>';

//***************************************************
//　ページ本体が読み込まれたタイミングで実行するコード
//***************************************************
window.addEventListener("DOMContentLoaded",
  function() {
    //メッセージ (最初はpenguinsのターソから)
    setMessage("pen-turn");
  }, false
);

//****************************************************
//Win or Lose Judgment Lineを配列化
//***************************************************


//***************************************************
// squareをクリックしたときにイベント発火
//****************************************************
// クリックしたsquareに、penguinsかbearを表示。画像を表示したsquareはクリックできないようにする、win or lose Judgmentの呼び出し

a_1.addEventListener("click",
  function() {
    isSelect(a_1);
  }, false
);

//上記のコーディングと下記のコーディングは同じ意味

a_2.addEventListener("click", () => {
  isSelect(a_2);
});

a_3.addEventListener("click", () => {
  isSelect(a_3);
});

b_1.addEventListener("click", () => {
  isSelect(b_1);
});

b_2.addEventListener("click", () => {
  isSelect(b_2);
});

b_3.addEventListener("click", () => {
  isSelect(b_3);
});

c_1.addEventListener("click", () => {
  isSelect(c_1);
});

c_2.addEventListener("click", () => {
  isSelect(c_2);
});

c_3.addEventListener("click", () => {
  isSelect(c_3);
});

//************************************************************
// クリックしたsquareにはpenguinsかbearを表示。
// 表示したところはクリックできないようにする。
//************************************************************
function isSelect(selectSquare) {

  if(flag === "pen-flag") {
    selectSquare.classList.add("js-pen-checked");
    selectSquare.classList.add("js-unclickable");

    setMessage("bear-turn");
    flag = "bear-flag";

  } else {
    selectSquare.classList.add("js-bear-checked");
    selectSquare.classList.add("js-unclicked");

    setMessage("pen-turn");
    flag = "pen-flag";
  }

  //ターン数カウンターをー１する
  counter--;

  //ターン数＝０になったらDRAW
  if (counter === 0) {
    setMessage("draw");
    }

 }
//*******************************************************
//勝敗判定
//*******************************************************


//*******************************************************
//メッセージ切り替え関数
//*******************************************************

function setMessage(id) {
  switch (id) {
    case "pen-turn":
      document.getElementById("msgtext").innerHTML=msgtxt1;
      break;
    case "bear-turn":
        document.getElementById("msgtext").innerHTML=msgtxt2;
        break;
    default:
          document.getElementById("msgtext").innerHTML=msgtxt1;
    }
}

//***************************************************************
//ゲーム完了時の処理
//***************************************************************




//***************************************************************
//NewGameボタン　クリック時、ゲーム初期化
//***************************************************************