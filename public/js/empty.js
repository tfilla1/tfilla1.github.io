var empty = new Vue({
    el: '#app',
    data: function() {
        return {
            count: 1,
            blogs: ['blog post one', 'plog lost two']
        }
    },
    methods: {
        countUp: function() {
            this.count += 1;
        }
    }
});