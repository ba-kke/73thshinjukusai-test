// const crackerBox = document.getElementById('crackerBox');
const cracker = document.getElementById('cracker');


document.getElementById("crackerBox").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
};
document.getElementById("crackerBox").addEventListener('click', function(){
  cracker.classList.add("cracker-add");
});
// setInterval(alert("Yeyaaaaaaaaaaa!!"), 3000);
// let count = 0;
const countUp = () => {
  cracker.classList.remove("cracker-add");
  // console.log(count++);
  setTimeout(countUp, 4000);
}
countUp();