let box = new Vue({
    el: "#box", 
    data: {
        message: "Helllo Nitin", 
        count: 0, 
        users_name: "", 
        users: []
    },
    methods: {
        sayHI: function() {
            this.message = "Hello Users, How are u ?";
            this.count += 1; 
            this.users.push(this.users_name); 
            this.users_name = "";
        }, 
        decrease: function() {
            this.count -= 1; 
        }
        
    }
})