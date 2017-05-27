/**
 * Created by Administrator on 2017/5/27.
 */

$(function(){
//        alert(1)
    $(".new-item").on("click",function(){
        var i=$(this).index();
        $(this).addClass("new-item-choose").siblings().removeClass("new-item-choose ");
        $(".mask").css({marginLeft:i*170+"px"})
        $(".new-box1").eq(i).css({display:"block"}).siblings().css({display:"none"});
    })
})
