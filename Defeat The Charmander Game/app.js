new Vue({
    el: "#vue-app",
    data: {
        hp: 100,
        endGame: false
    },

    methods: {
        punch: function() {
            this.hp -= 10;
            console.log(this.hp);
            if (this.hp <= 0) {
                this.endGame = true;
            }
        },
        restart: function() {
            this.hp = 100;
            console.log(this.hp);
            this.endGame = false;
        }
    },

    computed: {

    }
});