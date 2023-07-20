const form = document.querySelector("#form")
const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const btn = document.querySelector('#btn')
const txt = document.querySelector('#txt')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkBtn()
})



function checkBtn() {
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    if (checking() && userNameValue != "" && emailValue != "" && passwordValue != "" && password2Value != "") {
        btn.disabled = false
    }
}
document.addEventListener('DOMContentLoaded', typeWriter)
let i = 0;

function typeWriter() {
    let text = 'To get something you never had, You have to do something you never did'
    if (i < text.length) {
        document.getElementById("txt").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

function checking() {
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

console.log(userName);

    if (userNameValue == "") {
        setError(userName, 'نام کاربری را وارد کنید')
    } else {
        setSuccess(userName)
    }

    if (emailValue == "") {
        setError(email, "ایمیل را وارد کنید")
    } else {
        setSuccess(email)
    }

    if (passwordValue == "") {
        setError(password, "رمز عبور را وارد کنید")
    } else {
        setSuccess(password)
    }

    if (password2Value == "") {
        setError(password2, "تکرار رمز عبور را وارد کنید")
    } else if (passwordValue != password2Value) {
        setError(password2, "رمز عبور اشتباه وارد شده")
    } else {
        setSuccess(password2)
    }
}

function setError(input, massage) {
    const formControl = input.parentElement
    console.log(formControl);
    const small = formControl.querySelector('small')

    formControl.className = "form-control error"
    small.innerText = massage
}

function setSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}