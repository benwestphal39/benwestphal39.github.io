window.onload = function() {
    const phrases = ["言語を選択してください", "Vennligst velg språket ditt", "請選擇你的語言", "Please choose your language"];
    const h2 = document.getElementById("blink-text");
    h2.classList.add('smaller');

    let i = 0;
    setInterval(() => {
        while (h2.firstChild) {
            h2.removeChild(h2.firstChild);
        }
        //h2.innerHTML.span = phrases[i];
        const newSpan = document.createElement("span");
        newSpan.appendChild(document.createTextNode(phrases[i]));
        h2.appendChild(newSpan)
        i = (i + 1) % phrases.length;
    }, 4000);
  };


$(document).ready(function() {

    //  SET THEMES ON LOAD
    if($.cookie("ody-theme") == 1){
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #541cd0, #0f4c29) 0% 0% / 200% '});
        $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    }
    
    if($.cookie("ody-theme") == 2){
    
    
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #534548, #da0628) 0% 0% / 200% '});
	    $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    }
    
    if($.cookie("ody-theme") == 3){
        
    
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #00FFFF, #FFA201) 0% 0% / 200% '});
        $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    }
    
    if(!$.cookie("ody-theme")){
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #541cd0, #0f4c29) 0% 0% / 200% '});
        $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    }
    
    
    //  SET THEMES MANUAL
    $("#Lean").on('click',function(){
    
        $.cookie("ody-theme", 1);
    
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #541cd0, #0f4c29) 0% 0% / 200% '});
        $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    });

    $("#Meridian").on('click',function(){
    
        $.cookie("ody-theme", 2);
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #534548, #da0628) 0% 0% / 200% '});
	    $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
    });
    
    $("#Mango").on('click',function(){
    
        $.cookie("ody-theme", 3);
    
        $(".hero-jumbo").css({background:'linear-gradient(242deg, #00FFFF, #FFA201) 0% 0% / 200% '});
        $(".hero-jumbo").css({animation:'9s ease 0s infinite normal none running AnimationName'});
     });
    
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            //i.e. apply safari class via jquery
            $(".navbar").addClass("fancy");
        }
    
        if ($("#hero-container").length > 0) {
            window.addEventListener("scroll", function() {
                if ($(window).scrollTop() > $("#hero-container").height()) {
                    $("body").addClass("page-scrolled");
                    $(".navbar").removeClass("clearbg");
                } else {
                    $("body").removeClass("page-scrolled");
                    $(".navbar").addClass("clearbg");
                }
            }, { passive: true });
        }
        console.log(window.location.pathname);
    
        $(".none_shall_know").on('click',function(){
    
    
    
           $(".hero-jumbo").css({'background-image': 'url("https://pbs.twimg.com/media/EQh9D61X0AURDK_.jpg")'});
           $(".hero-jumbo").css({'background-repeat': 'repeat'});
           $(".hero-jumbo").css({'background-size': '200px'});
           
        });
       
});