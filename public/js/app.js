function keepSize($content, $logo, $text){

    $logo.show()

    function redraw() {

      var windowsWidth = $(window).width();
      $text.css({ fontSize: windowsWidth / 25 });
      $logo.css({ width: windowsWidth / 1.6 });

      var top = ($(window).height() - $content.height()) / 3

      $content.css({ marginTop: top });
    }

    redraw()
    $(window).on('resize', redraw);
}