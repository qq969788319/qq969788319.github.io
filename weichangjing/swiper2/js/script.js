var swiper = new Swiper('.swiper-container', {
    direction: 'vertical'
    , navigation: {
        nextEl: '.swiper-button-next'
    , }
    , //设置分页器
    pagination: {
        el: '.swiper-pagination'
        , //设置小圆点可以点击
        clickable: true
    , }
, });