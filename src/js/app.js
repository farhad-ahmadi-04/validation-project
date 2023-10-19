// varible
const form = document.querySelector('form'),
    staticEmail2 = document.querySelector("#staticEmail2"),
    inputPassword01 = document.querySelector("#inputPassword01"),
    inputPassword02 = document.querySelector("#inputPassword02");


// event
form.addEventListener('submit', formSubmit)


// function
// submit form
function formSubmit(e) {
    e.preventDefault();
    const email = staticEmail2.value.trim(),
        password = inputPassword01.value.trim(),
        password01 = inputPassword02.value.trim()
    // check email input
    validaiteEmail(email)
    // check password2 input
    validaitePassword02(password, password01)
    // check password input
    validaitePassword(password)
}

// email validate
// parametr1 : email input value(type of string)
// output : if email will be write output is seccess, if not output will be error 
function validaiteEmail(email) {
    if (email == "" || !email.match(emailCheck(email))) {
        error(staticEmail2, "example@gmail.com")
    } else {
        seccess(staticEmail2)
    }
}

// password validate
// parametr1 : passsword input value(type of string)
// output : if password be strong output will be seccess, if not be error
function validaitePassword(psd) {
    if (psd == "" || !psd.match(passwordCheck(psd))) {
        error(inputPassword01, "choose stranger password")
    } else {
        seccess(inputPassword01)
    }
}

// password2 validate
// parametr1 : password1 and password2(type of string)
// output : if passwords be same output is seccess, if not output is error
function validaitePassword02(psd, psd2) {
    if (psd2 == "" || psd !== psd2) {
        error(inputPassword02, "")
    } else {
        seccess(inputPassword02)
    }
}

// condition for choosing email
// paramet : email input value
// return : form of write email
function emailCheck(re) {
    return re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
};

// condition for choosing password
// paramet : password input value
// return : form of write password
function passwordCheck(re) {
    //should contain at least one digit
    //should contain at least one lower case
    //should contain at least one upper case
    //should contain at least 8 from the mentioned characters
    return re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
}

// when user fill the box write
// paramet : input that user filled it write
// output : green border for input && massage to next element
function seccess(input) {
    input.classList.add("seccess")
    let small = input.nextElementSibling
    small.innerText = ""
}

// when user fill the box wrong
// paramet : input that user filled it wrong & massage
// output : red border for input && massage to next element
function error(input, message) {
    let small = input.nextElementSibling
    small.innerText = message
    input.classList.add("error")
}