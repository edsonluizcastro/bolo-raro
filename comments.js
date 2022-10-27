function loadMore() {
  $('#more').show()
  $('.fb-comments-loadmore').hide().remove()
}
$('like').on('click', function () {
  if ($(this).hasClass('liked')) {
    $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) - 1)
    $(this).removeClass('liked')
    $(this).text('Curtir')
  } else {
    $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) + 1)
    $(this).addClass('liked')
    $(this).text('Descurtir')
  }
})
setCookie('returningVisitor', 'yes', today)