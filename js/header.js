"use strict";

// ヘッダー

// ーヘッダーナビ(@media screen and (max-width:520px))
// 定義

// const acMenu = document.getElementById('acMenu');
const acMenuBtn = document.getElementById('acMenuBtn');
const acMenu = document.getElementById('acMenu');

// 処理
acMenuBtn.addEventListener("click", function() {
  acMenu.classList.toggle('add-display-block');
});

// if(acMenu.classList.contains('add-display-block')) {
//   acMenu.addEventListener("click" , function() {
//     acMenu.classList.remove('add-display-block');
//   });
// }