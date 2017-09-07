new Vue({
    el: "#vue-app",
    data: {
        mensagem: "This is Vue Js! :)",
        url: "http://www.uol.com.br",
        age: 24,
        x: 0,
        y: 0
    },
    methods: {
        greet: function() {
            return "Hey this is a function call in Vue.Js!";
        },
        addAYear: function(increase) {
            this.age += increase;
        },
        subtractAYear: function(decrease) {
            this.age -= decrease;
        },
        doubleYear: function() {
            this.age *= 2;
        },
        updateXY: function() {
            this.x += 1;
            this.y += 1;
        },
        alertSome: function(){
            alert("hey!");
        }
    }
})