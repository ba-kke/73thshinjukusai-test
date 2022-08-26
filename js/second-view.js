// const pics_src = ["images/second-header-1.gif","images/second-header-2.gif","images/second-header-3.gif"];
// let num = -1;

// function slideshow_timer(){
//   if (num === 2){
//     num = 0;
//   }
//   else {
//     num ++;
//   }
//   document.getElementById("secondViewItem").src = pics_src[num];
// }

// setInterval(slideshow_timer, 3000);

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});