function countdown(){
  const now=new Date();//今の時間
  const tomorrow=new Date( 2021, 10, 19, 10, 00);//明日の0:00
  const differ=tomorrow.getTime()-now.getTime();//あと何秒か計算

  const sec1=Math.floor(Math.floor(differ/1000)%60/10);//ミリ秒を秒に直してから
  const sec2=Math.floor(differ/1000)%60%10;//ミリ秒を秒に直してから
  const min1=Math.floor(Math.floor(differ/1000/60)%60/10);
  const min2=Math.floor(differ/1000/60)%60%10;
  const hour1=Math.floor(Math.floor(differ/1000/60/60)%24/10);
  const hour2=Math.floor(differ/1000/60/60)%24%10;
  const date1=Math.floor(differ/1000/60/60/24/10);
  const date2=Math.floor(differ/1000/60/60/24)%10;


  document.getElementById("date1").textContent=String(date1).padStart(1,"0"); //一桁になった時0がつくように
  document.getElementById("date2").textContent=String(date2).padStart(1,"0"); //一桁になった時0がつくように
  document.getElementById("hour1").textContent=String(hour1).padStart(1,"0"); //一桁になった時0がつくように
  document.getElementById("hour2").textContent=String(hour2).padStart(1,"0"); //一桁になった時0がつくように
  document.getElementById("min1").textContent=String(min1).padStart(1,"0")
  document.getElementById("min2").textContent=String(min2).padStart(1,"0")
  document.getElementById("sec1").textContent=String(sec1).padStart(1,"0")
  document.getElementById("sec2").textContent=String(sec2).padStart(1,"0")
  setTimeout(countdown,1000);//1秒毎に繰り返す
  }
  countdown();