new Vue({
    el: '#vue-app',
    data: {
        name: "Emily",
        age: 27
    },
    methods:{
        add: function(time){
            this.age = this.age + time;
        },
        subtract: function(time){
            this.age = this.age - time;
        }
    }
});