$(document).ready(function() {
    // alert(5);

    // $("#clickMe").click(function(){
    //     $(".nav-item").fadeIn();
    // });

    // $("#show").click(function(){
    //     $(".nav-item").fadeOut(function(){
    //         console.log("hello world");
    //     }) ;
    // });

    // $("#clickMe").click(function(){
    //     $("p").show();
    // });


    
// ...................All categories owl carousel.............


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    });


}); 




