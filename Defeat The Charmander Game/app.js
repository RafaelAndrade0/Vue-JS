new vue({
    el: "#vue-app",
    data: {
        hp: 100
    },

    methods: {
        punch: function() {
            this.hp -= 10
        },
        restart: function() {
            this.hp = 100
        }
    },

    computed: {

    }
});