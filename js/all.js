$(document).ready(function() {

    // 下拉式選單功能
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });




    // Top 效果
    $('.top a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 1000);
    });

    $('.button').click(function(event) {
        $('.text').fadeToggle(1000);
        // fadeIn 預設隱藏的東西給打開
        // fadeOut 預設開啟的東西給關閉
    });
      
    // lightbox 效果
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true
    });
    $(window).load(function() {
        $('#slider').nivoSlider(); 
    });
   
});