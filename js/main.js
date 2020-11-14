/*Google Analytics*/
( function ( i , s , o , g , r , a , m ){ i [ 'GoogleAnalyticsObject' ]= r ; i [ r ]= i [ r ]|| function (){ ( i [ r ]. q = i [ r ]. q ||[]). push ( arguments )}, i [
    r ]. l = 1 * new Date (); a = s . createElement ( o ), m = s . getElementsByTagName ( o )[ 0 ]; a . async = 1 ; a . src = g ; m . parentNode . insertBefore ( a , m ) })( window , document , 'script' 
    , 'https://www.google-analytics.com/analytics.js' , 'ga' ); 
    ga ( 'create' , 'UA-174663250-1' , 'auto' );
    ga ( 'send' , ' pageview' );
    ga(function() {
        let trackers = ga.getAll();
        $('#online').text(trackers.length);
    });
$(document).ready(function () {
    //顯示回到最上面的圖標
    $( window ).scroll(function() {
        if($(window).width()>764)
        {
            if($(this).scrollTop() > $(".header").height()*0.75) {
                $(".container").css("grid-template-rows","30vh 10vh auto 15vh");
                $("nav").addClass("shrink_nav");
                $( "nav>img" ).fadeIn( "slow" );
                } else {
                $(".container").css("grid-template-rows","30vh 10vh auto 15vh");
                $("nav").removeClass("shrink_nav");
                $( "nav>img" ).fadeOut( "slow" );
            }
        }
        else{
            if($(this).scrollTop() > $(".header").height()*0.75) {
                $(".container").css("grid-template-rows","30vh 10vh auto auto 15vh");
                $("nav").addClass("shrink_nav");
                $( "nav>img" ).fadeIn( "slow" );
                } else {
                $(".container").css("grid-template-rows","30vh 10vh auto auto 15vh");
                $("nav").removeClass("shrink_nav");
                $( "nav>img" ).fadeOut( "slow" );
            }
        }
    });
    //回到最上面
    $("nav >img").click(function () { 
        let body = $("html, body");
        body.stop().animate({scrollTop:$(".header").height()*0.75}, 500, 'swing',);
    });
});
//切換文章
function swich_article(){
    $(".js_swich_article").click(function () {
        let article = $(this).data("article");
        $("#content").empty();
        if(article == "home"){
            $("#content").load(`block/article.html`);
            $("#content").attr("class","content");
            console.log("ff");
        }else{
            $("#content").load(`article/${article}.html`);
            $("#content").attr("class","content article_background");
        }
    });
}