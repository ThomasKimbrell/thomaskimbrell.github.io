$(document).ready(function () {
  
  var currPos = $('.contentWrapper').offset().left;
  
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
  
  $('ul.footerList li').click(function() {
    var index = $(this).index();
    var swipex = $('.topic').width()+10;
    var scrollLeft = swipex*index;
    currPos = scrollLeft;
    //console.log('btnIndex: ' + index);
    //console.log('scrollLeft: ' + scrollLeft);
    
    $('.contentWrapper').animate({
          scrollLeft: scrollLeft}, 500);
    $('div.topic:eq('+index+')').animate({
      height: '100%'}, 500);
    $('div.topic:eq('+index+')').siblings().animate({
      height: '90%'}, 500);
  });
  
  $(function() {
    
    
    $('.contentWrapper').on("swipeleft",function(){
      var swipex = $('.topic').width()+10;
      var maxX = swipex*4;
      if(currPos >= 0 && currPos < maxX){
        
        currPos += swipex;
        var topicIndex = currPos/swipex;
        //console.log('newPos: ' + currPos);
        //console.log('topicIndex: ' + topicIndex);
        
        $('.contentWrapper').animate({
          scrollLeft: currPos}, 300);
        $('div.topic:eq('+topicIndex+')').animate({
          height: '100%'}, 300);
        $('div.topic:eq('+topicIndex+')').siblings().animate({
          height: '90%'}, 300);
      }
    });

    $('.contentWrapper').on("swiperight",function(){
      var swipex = $('.topic').width()+10;
      var maxX = swipex*4;
      if(currPos > 0 && currPos <= maxX){
        
        currPos -= swipex;
        var topicIndex = currPos/swipex;
        //console.log('newPos: ' + currPos);
        //console.log('topicIndex: ' + topicIndex);
        
        $('.contentWrapper').animate({
          scrollLeft: currPos}, 300);
        $('div.topic:eq('+topicIndex+')').animate({
          height: '100%'}, 300);
        $('div.topic:eq('+topicIndex+')').siblings().animate({
          height: '90%'}, 300);
      }
    });
  });
});
