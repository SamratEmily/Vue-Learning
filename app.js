new Vue({
    el: '#vue-app',
    data: {
        name: "Emily",
        age: 27,    
        peoples: [
            {name: "Samrat", age: 27},
            {name: "emily", age: 26}
        ]
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