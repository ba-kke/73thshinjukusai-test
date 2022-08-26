
//top-view削除

//定義
const windowHeight = document.documentElement.clientHeight;

const topView = document.getElementById('topView');
const returnPageTop = document.getElementById('returnPageTop');
const returnPageTopLink = document.getElementById('returnPageTopLink');
const header = document.getElementById('header');
const footerHeight = document.getElementById('footer').clientHeight;

//returnPageTop登場&削除
let y = 0;
const getHeight = () => {
  const timeoutId = setTimeout(getHeight, 1000);
  y = window.pageYOffset;
  if(y > windowHeight){
    clearTimeout(timeoutId);
    returnPageTop.classList.add("add");
    topView.classList.add("delete");
  }
}
getHeight();

//削除

// function getScrollBottom() {
//   let body = window.document.body;
//   let html = window.document.documentElement;
//   let scrollTop = body.scrollTop || html.scrollTop;
//   return html.scrollHeight - html.clientHeight - scrollTop;
// }


// let scrollBottom;
// setInterval("fixedReturn()", 0.00001);
// function fixedReturn() {
//   scrollBottom = getScrollBottom();
//   if(scrollBottom <= footerHeight) {
//     returnPageTopLink.classList.add('add-return')
//   }
//   else if(scrollBottom > footerHeight) {
//     returnPageTopLink.classList.remove('add-return');
//   }
// }