$(document).ready(function () {
  $('.menu').on('click', function (e) {
    e.preventDefault();
    $('header').toggleClass('show-menu')
  })
});