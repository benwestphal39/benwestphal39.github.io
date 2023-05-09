$(document).ready(function() {

    //  1 = EN, 2 = JP, 3 = ZH, 4 = NO

    //  SET LANGUAGES ON LOAD
    if($.cookie("lang") == 0000){
        window.location.href = "/lang/en";
    }
     
    //  SET LANG MANUAL
    $("#en").on('click',function(){
        $.cookie("lang", 1);
        window.location.href = "/lang/en";
    });

    $("#jp").on('click',function(){
        $.cookie("lang", 2);
        window.location.href = "/lang/jp";
    });

    $("#zh").on('click',function(){
        $.cookie("lang", 3);
        window.location.href = "/lang/zh";
    });

    $("#no").on('click',function(){
        $.cookie("lang", 4);
        window.location.href = "/lang/no";
    });

});