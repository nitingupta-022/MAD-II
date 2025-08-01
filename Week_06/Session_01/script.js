// Component 
/*
const Home = {
    template: `
    <div><h2>Home</h2>
    <p>Welcome to the home page</p>
    </div>
    `
}
*/ 

// Component
/*
const About = {
    template: `
    <div><h2>About</h2>
    <p>This is the about page.</p> 
    </div> 
    `
}
*/ 


// Instead of creating components in scripts.js we import them from there file
import Home from './Components/Home.js'
import About from './Components/About.js'
import NotFound from './Components/NotFound.js'
import AboutUser from './Components/AboutUser.js'
import AboutPassword from './Components/AboutPassword.js'

// Routes
const routes = [
    { path: '/', component: Home },

    // 1) Dynamic Route Matching 
    // { path : '/about', component: About}, 
    // { path : '/about/:username', component: About},
    // { path: '/about/:username/:password', component: About },

    // 2) Nested Routing
    {
        path : '/about', 
        component : About, 
        children : [
            { path : '/about/:username', component : AboutUser}, 
            { path : '/about/:password', component : AboutPassword}
        ]
    },
 
    { path: '*', component: NotFound}
]

// Router
const router = new VueRouter({
    // Connecting to the routes 
    routes: routes
})

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue Users!"
    }, 
    // Connecting to the router 
    router: router, 
    methods : {
        goBack : function() {
            this.$router.go(-1)
        }
    }
}) 