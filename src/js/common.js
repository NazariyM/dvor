import dotdotdot from 'dotdotdot';
// clear placeholder
(function () {
  const el = $('input, textarea');
  el.focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());

const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();

function initAdvPopups() {
  const $advPopups = $('.js-advantage-popups');
  const $advItems = $advPopups.find('.advantage__item');
  const $advItemCircle = $advPopups.find('.advantage__item-circle');

  $advItemCircle.on('mouseover hover tap', function () {
    $(this).parent().siblings().addClass('low-index');
  });
  $advItemCircle.on('mouseleave', () => {
    setTimeout(() => {
      $advItems.removeClass('low-index');
    }, 50);
  });
}
initAdvPopups();