var empty = new Vue({
    el: '#app',
    data: function() {
        count: 1
    },
    methods: {
        countUp: function() {
            this.count += 1;
        }
    }
});