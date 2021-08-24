$(function () {

    $("img").on("click", function(){
        change_color();
    })
});

function change_color() {
    if($("#content").hasClass("light")){
        $("#content").removeClass("light");
    } else{
        $("#content").addClass("light");
    }
}