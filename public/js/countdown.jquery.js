(function($){

  $.fn.countdown = function(year, month, day, hour, minute, second, endtext, onTick) {

    var end = new Date(year,month,day,hour,minute,second);

    return this.each(function() {
      setInterval(function() {
        $(this).text(calculateTimeleft())
        // if (typeof onTick === 'function') {
        //   onTick()
        // }
      }, 1000)
    });

    function calculateTimeleft() {
      var now = new Date();
      if(now.getYear() < 1900) {
        yr = now.getYear() + 1900;
      }
      var sec = second - now.getSeconds();
      var min = minute - now.getMinutes();
      var hr = hour - now.getHours();
      var dy = day - now.getDate();
      var mnth = month - now.getMonth();
      var yr = year - yr;
      var daysinmnth = 32 - new Date(now.getYear(),now.getMonth(), 32).getDate();
      if(sec < 0){
        sec = (sec+60)%60;
        min--;
      }
      if(min < 0){
        min = (min+60)%60;
        hr--;
      }
      if(hr < 0){
        hr = (hr+24)%24;
        dy--;
      }
      if(dy < 0){
        dy = (dy+daysinmnth)%daysinmnth;
        mnth--;
      }
      if(mnth < 0){
        mnth = (mnth+12)%12;
        yr--;
      }
      var sectext = ' seconds ';
      var mintext = ' minutes, and ';
      var hrtext = ' hours, ';
      var dytext = ' days, ';
      var mnthtext = ' months, ';
      var yrtext = ' years, ';
      if (yr === 1) {
        yrtext = ' year, ';
      }
      if (mnth === 1) {
        mnthtext = ' month, ';
      }
      if (dy === 1) {
        dytext = ' day, ';
      }
      if (hr === 1) {
        hrtext = ' hour, ';
      }
      if (min === 1) {
        mintext = ' minute, and ';
      }
      if (sec === 1) {
        sectext = ' second ';
      }
      if(now >= end){
        $(this).text = endtext;
      }
      else{
        return dy + dytext + hr + hrtext + min + mintext + sec + sectext;
      }
    }
  };
})( jQuery );