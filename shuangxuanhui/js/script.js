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
//音频标签
var mp3 = document.querySelector("#mp3");

//音乐按钮
var mp3Btn = document.querySelector("#mp3Btn");

//暂停音乐按钮
//mp3Btn.style.animationPlayState = 'paused'
//旋转音乐按钮
//mp3Btn.style.animationPlayState = 'running'

mp3Btn.onclick = function () {
    if (mp3.paused) {
        //开始旋转
        mp3Btn.style.animationPlayState = 'running';
        //开始音频
        mp3.play();
    } else {
        //暂停旋转
        mp3Btn.style.animationPlayState = 'paused';
        //暂停音频
        mp3.pause();
    }
}