




let string = ""
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string); //to evaluate the expression
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Ac') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            //return the element where event has occured
            string = string + e.target.innerHTML; //returns the content in the tag
            document.querySelector('input').value = string; //shows the element in the input 
        }
    }) // to get which element was clicked

})

