$(document).ready(function () {
	var mySwiper = new Swiper('.swiper-container', {
		direction:"horizontal",
		loop:true,
		pagination:'.swiper-pagination',
		autoplay:3000,
        paginationClickable:true
    

		
	});
	
	
	
//	倒计时

 var starttime = new Date("2020/1/2");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    $('.jd_sk_h').html(hour);
     $('.jd_sk_m').html(minute);
      $('.jd_sk_s').html(seconds);
  }, 1000);
  


});
