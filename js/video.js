/**
 * Created by Administrator on 2017/5/27.
 */
$(function(){
    $(".v-top-item").on("click",function(){
        var i=$(this).index();
        console.log(i)
        $(this).addClass("v-top-item1").siblings().removeClass("v-top-item1");
        $(".v-top-left").eq(i).css({display:"block"}).siblings().css({display:"none"});
        console.log(2)
    })



})