Vue.component('mysbsh', {
	props: [''],
    template: '<div v-for="list in lists">苹果</div>'
})

var app = new Vue({
    el:'#app',
    data:{
    	lists:["香蕉","苹果","鸭梨"]
    }
})