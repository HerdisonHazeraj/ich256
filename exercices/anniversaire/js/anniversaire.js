var snd = new Audio("bomb.wav");

$(function () {
    $(".anniv").on("click", function(){
        $(".vie").css("display", "block");
    })
});

$(function () {
    $(".vie").on("click", function(){
        $(".jour").css("display", "block");
    })
});

$(function () {
    $(".jour").on("click", function(){
        $(".meilleur").css("display", "block");
    })
});

$(function () {
    $(".meilleur").on("click", function(){
        snd.play();
    })
});