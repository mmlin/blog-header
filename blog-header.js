function initHeader() {
  // Hide the original header and show the new one.
  $('#site-header').hide();
  $('#blog-header').show();

  // Set the active subnavigation item.
  switch (window.location.pathname) {
  case '/infographics/':
    $('.bh-infographics').addClass('active');
    break;

  case '/marketing-guides/':
    $('.bh-guides').addClass('active');
    break;

  case '/webinars/':
    $('.bh-webinars').addClass('active');
    break;

  case '/topics/academy/':
    $('.bh-academy').addClass('active');
    break;

  default:
    $('.bh-blog').addClass('active');
  }

  // Enable open/close of the mobile menu.
  $('.bh-mobl-icon').click(function() {
    $(this).toggleClass('open');
    $('.bh-nav-mobl').toggleClass('open');
  });
}
