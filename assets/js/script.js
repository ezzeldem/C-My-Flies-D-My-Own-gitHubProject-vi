$(document).ready(function(){




  $('.slider-main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    outhight:true,
    autoplaySpeed: 2000,
    autoplay:true,
    dots: false, 
    arrows:false, 
       responsive: [
     
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });
  

  $('.burger-b').click(function(){
    $('.burger-b').toggleClass('close-b');
    $('body').toggleClass('over-h');
    $('.nav-bar-u>ul').toggleClass('opne-nav');
})

$('.how-work-a').click(function(){
  $('html, body').animate({
    scrollTop: $(".how-work").offset().top
}, 1000);
  $('.burger-b').removeClass('close-b');
  $('body').removeClass('over-h');
  $('.nav-bar-u>ul').removeClass('opne-nav');
})



$('.features-a').click(function(){
$('html, body').animate({
  scrollTop: $(".features").offset().top
}, 1000);
$('.burger-b').removeClass('close-b');
$('body').removeClass('over-h');
$('.nav-bar-u>ul').removeClass('opne-nav');
})


$('.cases-a').click(function(){
  $('html, body').animate({
    scrollTop: $(".for").offset().top
  }, 1000);
  $('.burger-b').removeClass('close-b');
  $('body').removeClass('over-h');
  $('.nav-bar-u>ul').removeClass('opne-nav');
  })
  

  $('.schedule-a').click(function(){
    $('html, body').animate({
      scrollTop: $(".do").offset().top
    }, 1000);
    $('.burger-b').removeClass('close-b');
    $('body').removeClass('over-h');
    $('.nav-bar-u>ul').removeClass('opne-nav');
    })
    



AOS.init();
});