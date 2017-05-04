/**
 * Created by linzx on 2017/5/3.
 */
/*====关于我们左边目录====*/
$("body").on("click",".about-nav-li",function () {
    var index = $(this).index();
    $(".about-nav-li").removeClass("active");
    $(this).addClass("active")
});