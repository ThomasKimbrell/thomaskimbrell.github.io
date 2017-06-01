$(document).ready(function () {
  
  var currPos = $('.contentWrapper').offset().left;
  var swipex = $('.topic').width()+10;
  var maxX = swipex*4;
  var index = 0;
  
  console.log($('header > i').offset().top);
  

  $('#btnDrawer').click(function() {
    $('main').css("position","fixed");
    $('.trans').removeClass('hidden');
    $('.drawer').animate({marginLeft: 0}, 300);
  });
  
  $('#closeDrawer').click(function() {
    $('.drawer').animate({marginLeft: '-100vw'}, 300, function() {
      $('main').css("position","static");
    });
    $('.trans').addClass('hidden');
  });
  
  $(window).resize(function() {
    swipex = $('.topic').width()+10;
    maxX = swipex*4;
    currPos = index*swipex;
    $('.contentWrapper').animate({
      scrollLeft: currPos}, 100);
  });
  
  $('ul.footerList li').click(function() {
    index = $(this).index();
    var scrollLeft = swipex*index;
    currPos = scrollLeft;
    
    $('.contentWrapper').animate({
          scrollLeft: scrollLeft}, 500);
    $('div.topic:eq('+index+')').animate({
      height: '100%'}, 500);
    $('div.topic:eq('+index+')').siblings().animate({
      height: '90%'}, 500);
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
  
  $(function() {
    $('.contentWrapper').on("swipeleft",function(){
      if(currPos >= 0 && currPos < maxX){
        
        currPos += swipex;
        index += 1;
        
        $('.contentWrapper').animate({
          scrollLeft: currPos}, 300);
        $('div.topic:eq('+index+')').animate({
          height: '100%'}, 300);
        $('div.topic:eq('+index+')').siblings().animate({
          height: '90%'}, 300);
        $('.footerList li:eq('+index+')').addClass('active');
        $('.footerList li:eq('+index+')').siblings().removeClass('active');
      }
    });

    $('.contentWrapper').on("swiperight",function(){
      if(currPos > 0 && currPos <= maxX){
        
        currPos -= swipex;
        index -= 1;
        
        $('.contentWrapper').animate({
          scrollLeft: currPos}, 300);
        $('div.topic:eq('+index+')').animate({
          height: '100%'}, 300);
        $('div.topic:eq('+index+')').siblings().animate({
          height: '90%'}, 300);
        $('.footerList li:eq('+index+')').addClass('active');
        $('.footerList li:eq('+index+')').siblings().removeClass('active');
      }
    });
  });
});
