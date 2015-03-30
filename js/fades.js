$(window).load(function()
{
    $('.profilePic').addClass('animated fadeInUp')
})
$(function(){
    $('.profilePic').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.bio').addClass('animated fadeInUp')
    });
    $('.bio').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.portfolio').addClass('animated fadeInUp')
    });
})