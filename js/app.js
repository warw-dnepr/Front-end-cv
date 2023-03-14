$(function () {
   const screenWidth = window.screen.width
   if (screenWidth < 800) {
      $('.block-for-img img').css(`width`, `${screenWidth}px`)
      $('.block-for-img').css(`margin-left`, `0`).css('margin-top', '0').css('top', '40%').css('left', '0')
   }

   $('.diplom_1,.diplom_2').click(function () {
      $('.block-for-img,.block-for-img-child').fadeIn()
      $('.block-for-img-child').attr('src', this.id)
   })
})
$(function () {
   $('.block-for-img').click(function () {
      $('.block-for-img,.block-for-img-child').fadeOut()
   })
})


