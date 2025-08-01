export default {
    template: `
    <div> 
        <h1> About Page </h1> 
        <router-link to="/about/username">About User</router-link>
        <router-link to="/about/password">About Password</router-link>
        <p> This is the about page. </p> 
        <router-view></router-view>
    </div> 
    `
}