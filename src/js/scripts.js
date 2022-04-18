/* eslint-disable */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import M from 'materialize-css'
//import Materialmodal from './custom-material-box'


/*
  Init Materialize Modules
*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    document.querySelectorAll("a[href^='#turnthistomail']").forEach(function(e){
      e.addEventListener('click', function(e) {
        if (navigator.userAgent.indexOf("Headless") == -1 && navigator.userAgent.indexOf("headless") == -1){
          let hash = str_rot13("fpuervo");
          window.location.href='mailto:'+hash+'@'+'g'+'e'+'ck'+'s'+'e'+'.de';
          this.href = 'mailto:'+hash+'@'+'g'+'e'+'ck'+'s'+'e'+'.de';
        }
        e.preventDefault();
        e.stopPropagation();
        return true;
      });
    });

    document.querySelectorAll('.swiper-container').forEach(function(e){
      const swiper = new Swiper(e, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
      });
    });
    console.log(swiper);

});


function str_rot13(str){
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })
}
