alert("esto es una prueba");
$(document).ready(function(){
       onscroll = function(){
        var position = $(document).scrollTop();
        if(position >= 60){
            $('.MainMenu').addClass('MainMenu-scrolled');
        }
        else{
            $('.MainMenu').removeClass('MainMenu-scrolled');
        }
       }
})
