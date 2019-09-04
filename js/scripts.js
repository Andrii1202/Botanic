$(function() {
    $("#menu-expander").click(function(){
        if($("#menu-expand-elements").css("display") == "none"){
            $("#menu-expand-elements").slideDown(500);
        } else {
            $("#menu-expand-elements").slideUp(500);
        }
    });
});