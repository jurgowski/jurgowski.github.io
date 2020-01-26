var animStart = 'animated fadeInUp'
var animEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
$(window).load(function() {
    $('.profilePic').addClass(animStart)
})
$(function() {
    $('.profilePic').one(animEnd, function() {
        $('.bio').addClass(animStart)
    });
    $('.bio').one(animEnd, function() {
        $('.portfolio').addClass(animStart)
    });
    $('.portfolio').one(animEnd, function() {
        $('.past').addClass(animStart)
    });
})
