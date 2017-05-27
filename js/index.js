$(function(){
    //alert(1)
    $(".left-ps").on("click",function(){
        //alert(1)
        var i=$(this).index();
        $(this).addClass("left-choose").siblings().removeClass("left-choose");
        $(".ps-list").eq(i).css({display:"block"}).siblings().css({display:"none"})
    });

    $(".left-ps1").on("click",function(){
        //alert(1)
        var i=$(this).index();
        $(this).addClass("left-choose").siblings().removeClass("left-choose");
        $(".ps-list1").eq(i).css({display:"block"}).siblings().css({display:"none"})
    });

    var slideList=function(a,b){
    $(a).on("mouseover",function(){
        $(this).next().slideToggle().parent().siblings().children(b).slideUp();
    })
    }
    slideList(".l-name",".name-con");


    var time=function(a,b,c){
       $(a).on("click",function(){
           $(this).addClass(b).siblings().removeClass(b);
           var i=$(this).index();
           $(c).eq(i).css({display:"block"}).siblings().css({display:"none"})
       })
    }

    time(".time-item","time-choose",".chbox-list");
    time(".time-item1","time-choose",".chbox-listed");
    time(".time-item2","time-choose",".chbox-listed1");
    time(".time-item3","time-choose",".chbox-listed2");



    $(".item-easy").on("mouseover",function(){
        $(this).addClass("item-easy1").parent().siblings().children(".item-easy").removeClass("item-easy1")
        $(this).siblings().addClass("chbox-details1").parent().siblings().children(".chbox-details").removeClass("chbox-details1")
    })


    $(".w-text-img").on("click",function(){
        var i=$(this).index();
        $(".w-left-img").eq(i).css({display:"block"}).siblings().css({display:"none"})
        $(".w-detailsbox").eq(i).css({display:"block"}).siblings().css({display:"none"})
    });


    $(".vip-top-item").on("click",function(){
        // alert(1);
        var i=$(this).index();
        $(this).addClass("vip-top-item1").siblings().removeClass("vip-top-item1");
        $(".vip-mask").css({marginLeft:i*170+"px"});
        $(".vip-conbox").eq(i).css({display:"block"}).siblings().css({display:"none"});
    })

    var len=$(".friend-name-item").length;
    // console.log(len)
    if(len=48||len>48){
        $(".friend-name-item").eq(48).html("<a href=''>更多</a>").nextAll().css({display:"none"});
    }

    var len1=$(".chbox-item").length;
    if(len1=9||len1>9){
        $(".chbox-item").eq(8).addClass("chbox-item-last1").html("<a href=''>查看更多</a>").nextAll().css({display:"none"});
        // $(".chbox-item:gt(5)").css({display:"none"})
    }

    var len2=$(".cream-details").length;
    // alert(len2);
    if(len2>5){
        // alert(1)
        $(".cream-details").eq(6).nextAll(".cream-details").css({display:"none"});
    }


    var len3=$(".list-name").length;
    if(len3>18){
        $(".list-name").eq(18).addClass("chbox-item-last").html("<a href=''>查看更多</a>").nextAll().css({display:"none"});
    }


    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay:"2000"

    });
    var mySwiper1 = new Swiper ('.swiper-container1', {
        direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination1',
        autoplay:"0",
        speed:4000
    });

})