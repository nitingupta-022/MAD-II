// function initialize_app() {
//     // onEventListener takes two parameters. First parameter is event and second parameter function name.
//     calculate_button = document.getElementById("calculate");
//     calculate_button.addEventListener("click", calculate());
// }

function calculate() {
   expression = document.getElementById("expression").value;
   console.log(expression);
   try {
    if(expression) {
        answer = eval(expression);
        document.getElementById("expression").value = answer;
        addLog(expression + " = " + answer);
    }
   }
    catch (e) {
        console.log("Bad expression");
        addLog(expression + " is bad. Please fix it")
   }
}

function addLog(msg) {
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    var msg_text_node = document.createTextNode(msg)
    li.appendChild(msg_text_node)
    ul.appendChild(li)
}