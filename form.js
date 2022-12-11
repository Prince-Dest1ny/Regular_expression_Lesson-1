function validateName(){
        var uname = document.interest.name;
        var letters = /^[A-Za-Z]+$/;
        document.getElementById("nameError").innerHTML = "";
        if (uname.value.match(letters)){
            return true;
        } else{
            document.getElementById("nameError").innerHTML = "[Name may only contain alphabet characters]";
            uname.focus();
            return false;
        }
}
function validatePhone(){
    var ucontact = document.interest.phone;
    var numbers = /^(6|8|9)[0-9]{7}$/;
    document.getElementById("phoneError").innerHTML = "";
    var ucontact_len = ucontact.value.length;
    if (ucontact.value.match(numbers)){
        return true;
    } else if (ucontact_len != 8){
        document.getElementById("phoneError").innerHTML = "[Contact numbers should only contain 8 digits]";
        ucontact.focus();
        return false;
    } else{
        document.getElementById("phoneError").innerHTML = "[Contact numbers should start with 6 8 or 9]";
        ucontact.focus();
        return false;
    }
}
function formValidation(){
    if (validateName() && validatePhone()){
        alert('All fields validated. Form will be submitted to database.');
        return true;
    } else{
        alert('Some fields are invalid. Please correct before resubmission.');
        return false;
    }
}