const firstPageHead = document.getElementById("firstPageHead")
const firstNameInput = document.getElementById("firstNameInput")
const firstNameBtn = document.getElementById("firstNameBtn")
const firstNameError = document.getElementById("firstNameError")
const firstPage = document.getElementById("firstPage")
const secondPage = document.getElementById("secondPage")
const secondPageHead = document.getElementById("secondPageHead")
const firstNumberInput = document.getElementById("firstNumberInput")
const firstNumberBtn = document.getElementById("firstNumberBtn")
const firstNumberError = document.getElementById("firstNumberError")
const thirdPage = document.getElementById("thirdPage")
const thirdPageHead = document.getElementById("thirdPageHead")
const secondNameInput = document.getElementById("secondNameInput")
const secondNameBtn = document.getElementById("secondNameBtn")
const secondNameError = document.getElementById("secondNameError")
const fourthPage = document.getElementById("fourthPage")
const fourthPageHead = document.getElementById("fourthPageHead")
const secondNumberInput = document.getElementById("secondNumberInput")
const secondNumberBtn = document.getElementById("secondNumberBtn")
const secondNumberError = document.getElementById("secondNumberError")



firstNameBtn.addEventListener("click", () => {
    let inputValue = firstNameInput.value;
    console.log(inputValue);

    if (inputValue === "") {
        firstNameError.removeAttribute("hidden")
    }
    else {
        firstNameError.setAttribute("hidden", true)
        secondPage.removeAttribute("hidden")
        firstPage.setAttribute("hidden", true)
        secondPageHead.innerText = firstNameInput.value;
    }

})



// firstNumberBtn.addEventListener("click", () => {
//     let inputNumberValue = firstNumberInput.value;
//     console.log(inputNumberValue);

//     if (inputNumberValue === "") {
//         firstNumberError.removeAttribute("hidden")
//     }
//     else {
//         firstNumberError.setAttribute("hidden", true)
//         thirdPage.removeAttribute("hidden")
//         secondPage.setAttribute("hidden", true)
//     }

// })



// secondNameBtn.addEventListener("click", () => {
//     let inputName2Value = secondNameInput.value;
//     console.log(inputName2Value);

//     if (inputName2Value === "") {
//         secondNameError.removeAttribute("hidden")
//     }
//     else {
//         secondNameError.setAttribute("hidden", true)
//         fourthPage.removeAttribute("hidden")
//         thirdPage.setAttribute("hidden", true)
//         fourthPageHead.innerText = secondNameInput.value;
//     }

// })



// secondNumberBtn.addEventListener("click", () => {
//     let inputNumber2Value = secondNumberInput.value;
//     console.log(inputNumber2Value);

//     if (inputNumber2Value === "") {
//         secondNumberError.removeAttribute("hidden")
//     }
//     else {
//         secondNumberError.setAttribute("hidden", true)
//         fourthPage.setAttribute("hidden", true)

//         if (inputNumber2Value === firstNumberInput.value) {
//             curret.removeAttribute("hidden")
//         }else{
//             wrong.removeAttribute("hidden")
//         }
        
//     }

// })