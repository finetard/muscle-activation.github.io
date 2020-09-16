Vue.component('button-toggle', {
    props: ['text'],
    template: "<button >{{text.text}}</button>"
})

Vue.component('route', {
    props: ['route'],
    template: "<router-link to='route.loc'>Go to {{route.loc}}</router-link>"
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

var todo = new Vue({
    el: '#todo',
    data: {
        groceryList: [{
                id: 0,
                text: "Banana"
            },
            {
                id: 1,
                text: "Potato"
            },
            {
                id: 2,
                text: "Tomato"
            },
        ]
    }
})

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app_route = new Vue({
    router,
    data: {
        routes: [{
                id: 0,
                loc: 'foo'
            },
            {
                id: 1,
                loc: 'bar'
            },
        ]
    }
}).$mount('#app_route')