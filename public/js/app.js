function keepSize($content, $logo, $text){

    $logo.show()

    function redraw() {

      var windowsWidth = $(window).width();
      $text.css({ fontSize: windowsWidth / 25 });
      $logo.css({ width: windowsWidth / 1.6 });

      var top = ($(window).height() - $content.height()) / 2
        , left = (windowsWidth - $content.width()) / 2;

      $content.css({ top: top, left: left, fontSize: windowsWidth / 7 });
    }

    redraw()
    $(window).on('resize', redraw);
}