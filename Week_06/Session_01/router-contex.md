link - "https://www.youtube.com/watch?v=zmAMuGb4u4s"


# Vue Router 3 

## Getting Started and Installation 

- Add vue 2 and Vue Router 3 CDN to the document
    - `<script src="https://unpkg.com/vue@2/dist/vue.js"></script>`
    - `<script src="https://unpkg.com/vue-router@3/dist/vue-router.js"></script>`
- Create simple components (perferably external exported) 
- Register them as components of Router 
    - `const routes = [array of routes]` 
- Create Router Instance 
    - `const router = new VueRouter({routes})` 
- Embed Router instance to the App
    - `const app = new Vue({router}).$mount(#'app')`

## Dynamic Route Matching 

- Used for passing parameters to the routes 
- Can be used in doc or used programmatically
- route parameters are provided using colon `:` followed by parameter name. 
    - ex: `/user/:username/profile` where 'username' is the parameter
- Accessed using `$route` object 
    - Within Template : `$route.params` 
    - Withing Script: `this.$route.params`

## Nested Routes 

- Routes within routes 
- Comes in handy when you want to use components withing components and most part of the url 
    - ex: `user/:id/profile` and `user/:id/dashboard`


## Programmatic Navigation 
- Used to got to a route programmatically, Accessses `$router` ex: 
    - with a click of a button 
    - Used for redirecting to a different route 
    - Used for creating `Go Back` or `Home` Button 
    - literal string path 
    - When used as object : `this.$router.push({ path: 'home' })`
    - When used as object passing query parameters: `this.$router.push({ path: 'register', query: {plan: 'private'}})`

## Named Routes
- Used for providing route parameters and/or query parameters programmatically. 
- Accesses `$router` object
- When used as object passing parameters: `this.$router.push({name: 'user', params: {userId: '123'}})`

