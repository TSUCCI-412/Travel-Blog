
document.addEventListener('DOMContentLoaded', setMenuVisibility);
document.addEventListener('resize', setMenuVisibility);

//＝＝＝＝＝＝＝tb&pcヘッダーの固定＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const header = document.getElementById("header");
const nav = document.getElementById("responsibleNav");
const navbtn = document.getElementById("btn-toggle");


//ヘッダーがulタグの位置まで来たら固定
//scroll->高さを取得
window.addEventListener("scroll", () => {

    if(window.scrollY >= nav.offsetTop) {
       header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");

    }
});


//＝＝＝＝＝＝＝spMenu＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

let isOpen = false; //最初はclose

navbtn.addEventListener('click', function () {
  if (!isOpen) {
    nav.style.right = '0';
    this.classList.add('active'); 
    isOpen = true;
  } else {
    nav.style.right = '-300px';
    this.classList.remove('active');
    isOpen = false;
  }
});

function setMenuVisibility() {
  const windowWidth = window.innerWidth;
  
  if (windowWidth <= 600) {
    isOpen = false;
    nav.style.right = '-300px';
  } else {
    isOpen = false;
    nav.style.right = '-300px';
  }
}





// // phoneメニューのアニメーションの対象の要素を取得
// const target = document.getElementById('sp-menu');
// // ボタンの要素を取得
// const start = document.getElementById('btn-toggle');

// let isOpen = false; // メニューの初期状態は閉じている
// let isAnimating = true; // 初期状態ではクリックイベントを待つ

// // ページが読み込まれたときにクリックイベントを待つ
// window.addEventListener('load', () => {
//   isAnimating = false;
// });

// // ボタンの要素にクリックイベントを設定
// start.addEventListener('click', () => {
//   if (!isAnimating) {
//     isAnimating = true; // アニメーションが実行中であることをマーク

//     if (isOpen) {
//       // メニューが開いている場合、閉じるアニメーションを実行
//       target.animate(
//         [
//           { opacity: 1, width: '50%', transform: 'translateX(0)' }, // 現在の状態キーフレーム
//           { opacity: 0, width: '0', transform: 'translateX(-120%)' } // 閉じる状態キーフレーム
//         ],
//         {
//           duration: 1000, // 再生時間（ミリ秒）
//           easing: 'linear' // イージング
//         }
//       ).onfinish = () => {
//         isAnimating = false; // アニメーションが終了したらフラグをリセット
//       };
//     } else {
//       // メニューが閉じている場合、開くアニメーションを実行
//       target.animate(
//         [
//           { opacity: 0, width: '0', transform: 'translateX(-120%)' }, // 現在の状態キーフレーム
//           { opacity: 1, width: '50%', transform: 'translateX(0)' } // 開く状態キーフレーム
//         ],
//         {
//           duration: 1000, // 再生時間（ミリ秒）
//           easing: 'linear' // イージング
//         }
//       ).onfinish = () => {
//         isAnimating = false; // アニメーションが終了したらフラグをリセット
//       };
//     }
//     isOpen = !isOpen; // メニューの状態を切り替える
//   }
// });






