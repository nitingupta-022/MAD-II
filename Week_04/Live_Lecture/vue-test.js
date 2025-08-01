let app = new Vue({
    el: "#app", 
    data: {
        message: "Hello Vue Users!", 
        fsize: "42px", 
        msg2 : "Dummy Text"
    }, 
    methods: {
        updateMsg() {
            this.message = "Back to square one!"
        }
    }, 
    computed: {
        myFontSize: function(){
            return `${this.message.length + 10}px`
        }
    }, 
    watch: {
        message: function(omsg, nmsg) {
            this.msg2 = `New: ${nmsg}, Old: ${omsg}`
        }
    }
})