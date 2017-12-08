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
    , },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
, });
