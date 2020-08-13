/*Google Analytics*/
( function ( i , s , o , g , r , a , m ){ i [ 'GoogleAnalyticsObject' ]= r ; i [ r ]= i [ r ]|| function (){ ( i [ r ]. q = i [ r ]. q ||[]). push ( arguments )}, i [
    r ]. l = 1 * new Date (); a = s . createElement ( o ), m = s . getElementsByTagName ( o )[ 0 ]; a . async = 1 ; a . src = g ; m . parentNode . insertBefore ( a , m ) })( window , document , 'script' 
    , 'https://www.google-analytics.com/analytics.js' , 'ga' ); 
    ga ( 'create' , 'UA-174663250-1' , 'auto' );
    ga ( 'send' , ' pageview' );
    ga(function() {
        let trackers = ga.getAll();
        $('#flow').append("<p>在線人數："+trackers.length+"</p>");
    });

$(document).ready(function () {
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
    //顯示幾個頁面
    const page_max=1;
    let page=1;
    for(let i=1;i<=page_max;i++)
    {
        $('#page').append('<span id="'+i+'">'+i+'</span>');
    }
    //頁面切換動作
    $("#"+page).css("background","#90b76c6b");
    $(".left,.right").click(function (){
        if($(this).attr('class')=="left"){
            if(page>1){
                $("#"+page).css("background","#deb8878a");
                page--;
                $("iframe").attr("src","article/page_"+page+".html");
                $('html, body').scrollTop($(".header").height()*0.75);
                $("#"+page).css("background","#90b76c6b");
            }
        }else{
            if(page<page_max){
                $("#"+page).css("background","#deb8878a");
                page++;
                $("iframe").attr("src","article/page_"+page+".html");
                $('html, body').scrollTop($(".header").height()*0.75);
                $("#"+page).css("background","#90b76c6b");
            }
        }
    });
    $(".page > span").click(function () {
        $("#"+page).css("background","#deb8878a");
        page=$(this).attr("id");
        $("iframe").attr("src","article/page_"+page+".html");
        $('html, body').scrollTop($(".header").height()*0.75);
        $("#"+page).css("background","#90b76c6b");
    });
    //回到最上面
    $("nav >img").click(function () { 
        $('html, body').scrollTop($(".header").height()*0.75);    
    });
    //分類,排序
    $("#daily,#technology,#2020year").click(function () {
        $(this).nextAll("ul").children().toggle( "slow" );
    });
});