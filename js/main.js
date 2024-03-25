document.addEventListener('DOMContentLoaded', () =>{
  // header start

  $('.hamburger').on('click', function(){

    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.header__mobile__wrap').slideUp(500);
    }
    else {$(this).addClass('is-active');
    $('.header__mobile__wrap').slideDown(500);
  }





  })



});
const swiper = new Swiper('.banner-swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(document).ready(function(){
    $('.slider').slick({
      
      centralMode: true,
      dots:false,
      arrows:false,
      adaptiveHeight:true,
      slidesToShow:3,
      slidesToScroll:1,
      dots: true,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('a[href^="#"]').click(function(){
      let target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      },500);
    })
})

jQuery(document).ready(function () {
     
  $(".phone").mask("+7 (999) 999-99-99"); 
 

 jQuery('.send-form').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});



