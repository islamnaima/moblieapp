"use strict";

window.addEventListener("DOMContentLoaded",

function() {


    // 1.localStorageが使えるか　(つかえるか) 確認 (かくにん)
    if (typeof localStorage === "undefined") {
        window.alert("このブラウザはLocal Storage機能が実装されていません");
        return;
     } else {
      viewStorage();        //localStorageからのデータ取得とテーブルへ表示
       saveLocalStorage(); //2.localStorageへの保存(ほぞん)
    }

   }, false
);

//2.localStorageへの保存(ほぞん)
function saveLocalStorage() {
   const save = document.getElementById("save");
   save.addEventListener("click",
   function(e){
      e.preventDefault();
      const key = document.getElementById("textKey").Value;
      const value = document.getElementById("textMemo").value;
      //値の入力チェック
      if (key=="" || value=="") {
         window.alert("Key.Memoはいずれも必須です。");
         return;
      }else{
         localStorage.setItem(key,value);
         viewStorage();        //localStorageからのデータ取得とテーブルへ表示
         let W_msg = "LocalStorageに" + key + " " + value + "を保存 (ほぞん) しました。";
         window.alert(W_msg);
         document.getElementById("textKey").value = "";
         document.getElementById("textMemo").value = "";
      }
   },false
   );
};
viewStorage();        //localStorageからのデータ取得とテーブルへ表示
function viewStorage() {
   const list = document.getElementById("list");
   //htmlのテーブル初期化
   while(list.rows[0]) list.deleteRow(0);
   
   //localStorageすべての情報の取得
   for (let i=0; i < localStorage.length; i++) {
      let W_key = localStorage.key(i);

      // localStorageのキーと値を表示
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      list.appendChild(tr)
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      td1.innerHTML = "<input name='radio1' type='radio'>";
      td2.innerHTML = W_key;
      td3.innerHTML = localStorage.getItem(W_key);
   }
}