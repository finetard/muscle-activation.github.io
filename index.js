Vue.component('button-toggle', {
    props: ['text'],
    template: "<button >{{text.text}}</button>"
})

var app = new Vue({
    el: '#app',
    data: {
        message: "Welcome to vue!",
        seen: true
    },
    methods: {
        toggle: function () {
            this.seen = !(this.seen)
        }
    }
})

app.seen = false;