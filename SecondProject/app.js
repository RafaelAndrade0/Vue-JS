new Vue({
    el: "#vue-app",
    data: {
        randomVariable: "Risos",
        items: [
            {message: "Item 1"},
            {message: "Item 2"}
        ]
    },
    methods: {
        helloWorld: function() {
            return "Hello World!";
        }
    }
})