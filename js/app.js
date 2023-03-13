$(function () {
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