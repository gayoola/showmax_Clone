
let input = document.querySelector("#phone"),
errMsg = document.querySelector('#error-msg'),
validMsg = document.querySelector('#valid-msg');

let errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long"];

let intl = window.intlTelInput(input, {
    utilscript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
});

// let reset = function () {
//     input.classList.remove("error");
//     errMsg.innerHTML = "";
//     errMsg.classList.add("hide");
//     validMsg.classList.add("hide");
// }

// input.addEventListener('blur', function () {
//     reset();

//     if (input.value.trim()) {
//         if (intl.isValidNumber()) {
//             validMsg.classList.remove('hide');
//         } else {
//             input.classList.add("error");
//             let errorCode = intl.getValidationError();
//             errMsg.innerHTML = errorMap[errorCode];
//             errMsg.classList.remove("hide");
//         }
//     }
// });

// input.addEventListener('change', reset);
// input.addEventListener('keyup', reset);



let tab = document.querySelector('.tab-form');
let tabHeader = document.querySelector('.tab-header');
let tabHeaderEl = document.querySelectorAll(".tab-header > div");
let tabBody = document.querySelector(".tab-body");
let tabBodyEl = document.querySelectorAll('.tab-body > div');


for (let i = 0; i < tabHeaderEl.length; i++) {
    tabHeaderEl[i].addEventListener('click', () => {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderEl[i].classList.add("active");
        tabBody.querySelector('.active').classList.remove("active");
        tabBodyEl[i].classList.add("active");
        
    })
}