// How to Register a component
// Example of a Vue component
/*
Vue.component("user-card", {
    props : ["name", "rollno", "bio"],   // <--- defining properties to the element in the form of an attribute
    template: `
    <div>
    <h2>This is my first component</h2>
    <p>My name is {{name}}</p>
    <p>My roll no. is {{rollno}}</p>
    <p>Bio : {{bio}}</p>
    <p><slot></slot></p>
    </div>
})
*/ 



Vue.component("user-card", {
    props: ["name", "avatar", "bio", "details"], 
    template: `
    <div class="card">
        <img v-bind:src="avatar" v-bind:alt="name"  />
        <h2>{{name}}</h2>   
        <p>{{bio}}</p>
        <input v-model="name" />
        {{name}}
         <slot></slot>
        <p>{{myData1}} </p>
        <h3 :class="attr">{{attr}} </h3>
        <button v-on:click="viewDetails">View Details </button>
    </div>
    `, 

    data: function() {
        return {
            myData1 : "12345", 
            attr: "attr1", 
            // This is the data property of the component, which can be used in the template
            name: "" 
        }
    }, 

    methods: {
        viewDetails() {
            this.$emit("view-details", this.details)
        }
    }
})

const app = new Vue({
    el: "#app",
    data: {
        users: [
            {
                id: 1,
                name: "Alice",
                avatar: "https://i.pravatar.cc/150?img=1",
                bio: "Frontend Engineer",
                details: "Hi, this is Alice, and I have work ex of 3 years."
            }, 
            {
                id: 2, 
                name: "Algo", 
                avatar: "https://i.pravatar.cc/150?img=5",
                bio: "Backend Engineer", 
                details: "Hi, this is Algo, and I am Fresher."
            }
        ], 
        // This is the name attribute or data property of the parent you have to pass to the child component
        name: ""
    }, 
    methods: {
        showDetails: function(details) {
            alert(details)   // This will be called when the child component emits the event
            // $emit sends the child component data to the parent componet    
            // In child component $emit("view-details", this.details) --> In index.html v-on:view-detials="showDetials" (showDetails is the method in the parent component) --> In parent component, we define the showDetails method with the details parameter
        }
    }
})
