$(document).ready(function() {

    //  1 = EN, 2 = JP, 3 = ZH, 4 = NO

    //  SET LANGUAGES ON LOAD
    if($.cookie("lang") == 0000){
        window.location.href = "https://bonnie39.github.io/lang/en";
    }
     
    //  SET LANG MANUAL
    $("#en").on('click',function(){
        $.cookie("lang", 1);
        window.location.href = "https://bonnie39.github.io/lang/en";
    });

    $("#jp").on('click',function(){
        $.cookie("lang", 2);
        window.location.href = "https://bonnie39.github.io/lang/jp";
    });

    $("#zh").on('click',function(){
        $.cookie("lang", 3);
        window.location.href = "https://bonnie39.github.io/lang/zh";
    });

    $("#no").on('click',function(){
        $.cookie("lang", 4);
        window.location.href = "https://bonnie39.github.io/lang/no";
    });

});