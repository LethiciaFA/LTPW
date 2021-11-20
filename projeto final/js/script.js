function onScroll(){
    if($(window).scrollTop()<250){
        $('.scroll').css('display','none');
     }else{
         $('.scroll').css('display','block');
     }
}
window.addEventListener('scroll',onScroll,false);

jQuery(document).ready(function($){
    $('.link').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},800)
    });
});