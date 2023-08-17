
//＝＝＝＝＝＝＝ヘッダーの固定＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const header = document.querySelector(".header");
const globalnav = document.querySelector(".globalnav");

//ヘッダーがulタグの位置まで来たら固定
//scroll->高さを取得
window.addEventListener("scroll", () => {
    //console.log(globalnav.offsetTop); ->高さを確認
    if(window.scrollY >= globalnav.offsetTop) {
       header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");

    }
});