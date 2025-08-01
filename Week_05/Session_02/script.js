/*
const app = new Vue({
    data : {

    }, 
    mounted() {
        console.log("Mounted is executed")
        this.method1()
    }, 
    methods: {
        method1 : function() {
            // Fetch method returns a promise
            fetch("https://jsonplaceholder.typicode.com/users")   // <--- first fetch request return the promise which was caught by res variable
            .then(res => res.json())  // <--- whatever it returned was resolved and caught in res, then it was converted to json. When I resolved it into again 
            .then(data => console.log(data)) // <--- then it will be it was stored in data
   
            // What if there is an error
            .catch(err => console.log("Error: ", err))
        }
    }

}).$mount('#app')
*/ 


const app = new Vue({
    data : {
        users : [], 
        user : null, 
        postData: {
            title: 'My First Post', 
            body : 'This is the content of the post',
            userId : 1
        }
    }, 
    mounted() {
        // In mounted everything is trigerred automatically
        console.log("Mounted is executed")
        this.method1()    // <--- For static URL 
        // this.method4()
        this.method5()
    }, 
    methods : {
        // Fetch on a Static URL 
        method1 : function() {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((users) => {
                this.users = users; 
            })
            .catch(err => console.log("Error : ", err))
        },

        // Fetch on a Dynamic URL 
        method2 : function(user_Id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${user_Id}`)
            .then(response => response.json())
            .then((user) => {
                this.user = user; 
            })
            .catch(error => console.log(error))
        }, 
        method3 : function() {
            this.user = null;
        }, 

        // Fetch with data/info sent as request header (ex: token) or request body
        method4 : function() {
            fetch(`https://jsonplaceholder.typicode.com/posts`, {
                // the information sending frontend to backend there we use POST method
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json'
                }, 
                body : JSON.stringify(this.PostData)
            })
            .then(response => response.json()) 
            .then(data => console.log(data))
            .catch(error => console.log("Error : ", error))
        }, 

        // When does a fetch() Request Fail ? 
        method5 : function() {
            fetch(`https://mock.httpstatus.io/404`)      // Invalid domain
            // http error will always resolved
            .then(response => console.log("My response :",response))           // This is never reached
            .catch(error => console.log("Network error : ",error))
        }

    }

}).$mount("#app")


// fetch ---> Promise (then) we use first then to resolve this promise ---> Response (JSON Like) [response.json()] ---> Promise to resolve this promise we use another then. After resolving this promise we actual JSON