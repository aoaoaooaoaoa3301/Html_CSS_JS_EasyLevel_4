/* console.log("script enable"); */


const button = document.querySelector(".button_use");
const inputs = document.querySelectorAll(".input_container");
/* console.log(inputs) */




inputs.forEach(element => {
    button.addEventListener('click', function(){
        if (element.querySelector(".input_").value == 0 || (!(/@/.test(element.querySelector(".input_").value)) && (element.id == "Email_Address"))){
            if (element.id == "Email_Address"){
                element.querySelector(".input_").placeholder = "email@example/com";
            }
            else {
                element.querySelector(".input_").placeholder = "";
            }
            
            element.querySelector(".input_").className = "input_error";
            element.querySelector(".error_notification_hide").className = "error_notification_show";
        }
    });
});