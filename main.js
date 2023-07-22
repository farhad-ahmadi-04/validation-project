// validation project

// Contributor:  Frahad Ahmadi

// githubLink:  'https://github.com/feri-punisher'
// farhad.13ahmadi.83@gmail.com


const boxes = document.querySelector("boxes")
const signUpBtn = document.querySelector('#signUpBtn');
const signInBtn = document.querySelector('#signInBtn');
const createAccount = document.querySelector('#createAccount');
const SignInPage = document.querySelector('#SignInPage');
const starter = document.querySelector('#starter')
const signUpLink = document.querySelector('.signUpLink');
const signInLink = document.querySelector(".signInLink")


// click for style
signUpLink.addEventListener('click', signUpStyle)
signUpBtn.addEventListener('click', signUpStyle)
// click for style
signInBtn.addEventListener('click', signInStyle)
signInLink.addEventListener('click', signInStyle)
// functon for stylr
function signUpStyle() {
    // style the create Account div==box-shadow
    createAccount.style = "width:450px;transition:all .5s linear"
    // style first section (#starter) div=box-shadow
    starter.style = "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;width:350px;transition:width 1s"
    // style sign In page div==box-shadow
    SignInPage.style = "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;width:350px;transition:width 1s"

}
// functon for style
function signInStyle() {
    // style first section (#starter) div=box-shadow
    starter.style = "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;width:350px;transition:width 1s"
    // style the create Account div==box-shadow
    createAccount.style = "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;width:350px;transition:width 1s"
    // style sign In page div==box-shadow
    SignInPage.style = "width:450px;transition:width 1s"
}
// -----------validation--------
const passwordPettern = /([a-zA-Z0-9])/g;

const signInForm = document.querySelector('#signInForm>div.btn>input')
console.log(signInForm);
const email = SignInPage.querySelector("div.email>input")
const password = SignInPage.querySelector("div.password input");


// click for checking sign in  form
// -----function is for sign in page-------
signInForm.addEventListener('click', chekingSignInPage)
// checking function
function chekingSignInPage(event) {
    // value input
    const emailValue = email.value.trim();
    // vlue input password
    const passwordValue = password.value.trim();
    if (emailValue == "") {
        error(email, "Please write your email");
    } else if (!emailValue.includes("@gmail.com", "@yahoo.com")) {
        error(email, "Please enter @gmail.com/@yahoo.com")
    }else {
        success(email)
    }
    if (passwordValue == "") {
        error(password, "Please write your password");
    } else if (passwordValue.length < 8) {
        error(password, "less than 8 characters");
    } else {
        success(password)
    }
}
// -----function is for sign in page-------

// -------function is for sign up page------
const signUpFormBtn = document.querySelector('#signUpForm>div.btn>input')
const fullName = createAccount.querySelector("div.name>input")

const phoneNumber = createAccount.querySelector("div.number>input")
const emailAddress = createAccount.querySelector("div.email>input")
const createPassword = createAccount.querySelector("div.password>input")


// click for checking sign up  form
signUpFormBtn.addEventListener('click', chekingSignUpPage)
// checking function
function chekingSignUpPage() {
    // value input(full name)
    const fullNameValue = fullName.value.trim()
    // value input(phone number)
    const phoneNumberValue = phoneNumber.value.trim()
    // value input(email address)
    const emailAddressValue = emailAddress.value.trim();
    // vlue input (new password)
    const createPasswordVlaue = createPassword.value.trim();
    // ----------condition for name-----------------
    if (fullNameValue == "") {
        error(fullName, "Please write your name");
    } else {
        success(fullName)
    }
    // ---------------condition for phone number---------------
    if (phoneNumberValue == "") {
        error(phoneNumber, "Please write yuor password");
    } else if (phoneNumberValue.length < 11) {
        error(phoneNumber, "Please enter the phone number correctly")
    } else {
        success(phoneNumber)
    }
    // ----------------------condition for email----------------------
    if (emailAddressValue == "") {
        error(emailAddress, "Please write your email address");
    } else if (!emailAddressValue.includes( "@yahoo.com", "@gmail.com")) {
        error(emailAddress, "Please enter @gmail.com/@yahoo.com")
    } else {
        success(emailAddress)
    }
    // --------------------condition for password-------------------------
    if (createPasswordVlaue == "") {
        error(createPassword, "Please write a password");
    } else if (createPasswordVlaue.length < 8) {
        error(createPassword, "Password must be at least 8 characters")
    } else {
        success(createPassword)
    }
}

// with this function we show and hide password in 2nd section
const hideAndShowPasswordd = document.
    querySelector("#togglePasswordd")
    hideAndShowPasswordd.addEventListener("click", () => {
        if (password.type === "password") { 
            password.type="text"
        }else if (password.type==="text"){
            password.type="password"
        }
    })

    // with this function we show and hide password in 3rd section
    const hideAndShowPassword = document.
    querySelector("#togglePassword")
    hideAndShowPassword.addEventListener("click", () => {
        if (createPassword.type==="password") {
            createPassword.type="text"
        }else if (createPassword.type==="text"){
            createPassword.type="password"
        }
    })
   
// function for error messages
    function error(input, massage) {
        const errorMassge = input.parentElement
        const small = errorMassge.querySelector('small')
        small.innerText = massage
        input.style = "border: 1px solid red"
        
    }
    
    // function for correct word
function success(input) {
    const errorMassge = input.parentElement
    const small = errorMassge.querySelector('small');
    small.innerText = ""
    input.style = "border: 1px solid green"
}




//-----------next version----------------- 
// add conditon for password:


// function passwordRules(input) {
//     // validate capital letters
//     const UperCaseLetter =/[A-Z]/g
//     // validate lowrCase letter
//     const lowerCaseLetter = /[a-z]/g
//     // validate number
//     const NUMBER=/[0-9]/g
//     // validate symbols
//     // const symbol = ['-', '_', '.',';', '/','!', '?']
//     // uperCaserull
//     if (!password.value.match(UperCaseLetter)) {
//         error(input,"use UperCaseLetter too, Please")
//     }else{
//         success(input)
//     }
//     // lowerCaseRul
//     if (!password.value.match(lowerCaseLetter)) {
//         error(input,"use lowerCaseLetter too, Please")
//     }else{
//         success(input)
//     }
//     // number rul
//     if (!password.value.match(NUMBER)) {
//         error(input,"use NUMBER too, Please")
//     }else{
//         success(input)
//     }
//     // // symbol rul
//     // if (!password.value.match(symbol)) {
//     //     error(input,"use symbols too, Please")
//     // }else{
//     //     success(input)
//     // }
// }