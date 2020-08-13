/*Google Analytics*/
( function ( i , s , o , g , r , a , m ){ i [ 'GoogleAnalyticsObject' ]= r ; i [ r ]= i [ r ]|| function (){ ( i [ r ]. q = i [ r ]. q ||[]). push ( arguments )}, i [
    r ]. l = 1 * new Date (); a = s . createElement ( o ), m = s . getElementsByTagName ( o )[ 0 ]; a . async = 1 ; a . src = g ; m . parentNode . insertBefore ( a , m ) })( window , document , 'script' 
    , 'https://www.google-analytics.com/analytics.js' , 'ga' ); 
    ga ( 'create' , 'UA-174663250-1' , 'auto' );
    ga ( 'send' , ' pageview' );
    ga(function() {
        let trackers = ga.getAll();
        $('#flow').append("<p>在線人數："+trackers.length+"</p>");
        $('#flow').append("<p>本日人氣："+trackers.length+"</p>");
        $('#flow').append("<p>累積人氣："+trackers.length+"</p>");
        console.table(trackers);
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
    //頁面切換動作
    const page_max=2;
    let page=1;
    $("#"+page).css("background","red");
    $(".left,.right").click(function (){
        if($(this).attr('class')=="left"){
            if(page>1){
                $("#"+page).css("background","burlywood");
                page--;
                $("iframe").attr("src","article/page_"+page+".html");
                $('html, body').scrollTop($(".header").height()*0.75);
                $("#"+page).css("background","red");
            }
        }else{
            if(page<page_max){
                $("#"+page).css("background","burlywood");
                page++;
                $("iframe").attr("src","article/page_"+page+".html");
                $('html, body').scrollTop($(".header").height()*0.75);
                $("#"+page).css("background","red");
            }
        }
    });
    $(".page > span").click(function () {
        $("#"+page).css("background","burlywood");
        page=$(this).attr("id");
        $("iframe").attr("src","article/page_"+page+".html");
        $('html, body').scrollTop($(".header").height()*0.75);
        $("#"+page).css("background","red");
    });
    $("nav >img").click(function () { 
        $('html, body').scrollTop($(".header").height()*0.75);    
    });
});