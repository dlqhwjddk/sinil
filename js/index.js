$(function () {
    //ready
    //네비에 마우스 올렸을 때
    $("header").on("mouseenter", function () {
        $(this).find("div").addClass("active");
        $(".white").show();
    });
    //네비에서 마우스 내렸을 때
    $("header").on("mouseleave", function () {
        $(this).find("div").removeClass("active");
        $(".white").hide();
    });
    //비주얼이미지 fadein fadeout
    $(".banner li img").not(":first").hide();

    function loop() {
        var idx = 0;
        setInterval(function () {
            $(".banner li img").eq(idx).fadeOut(1000);
            idx++;
            if (idx === 3) {
                idx = 0;
            }
            $(".banner li img").eq(idx).fadeIn(1000);
        }, 6000);
    }
    loop();

    //product 애니메이션
    function pSlide() {
        var clone = $(".drag").html();
        var k = 0, dragW = $(".drag").width();
        
        $(".drag").append(clone);
        var inter;
        function product(){
            inter = setInterval(function () {
                dragW != k ? k++ : k = 0;
                $(".drag").css({
                    left: -k + "px"
                });
            }, 10);
        }
        product();
        
        $(".drag figure").on("mouseenter", function () {
            clearInterval(inter);
        });
        $(".drag figure").on("mouseleave", function () {
            product();
                    
        });
    }
    pSlide();
    
    //end
});