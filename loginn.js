/*function validate(){
let unname = document.getElementById("em");
let pass = document.getElementById("pass");     
    if (unname.value.trim()=="" || pass.value.trim()=="" ) {
        console.log("Blank not allowed ");
        alert("No blank values allowes");
        return false;
    }
    else{
       return true;

    }
    
}
*/
function validateForm() {
    var username = document.getElementById("em").value;
    var password = document.getElementById("pass").value;

    if (username.trim() === '' || password.trim() === '') {
        alert("Please enter both username and password.");
        return false; // Prevent form submission
    }

    // If everything is filled out, allow form submission
    return true;
}

