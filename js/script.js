// first tPage---------
const firstPage = document.getElementById("firstPage")
const firstPageHead = document.getElementById("firstPageHead")
const firstNameInput = document.getElementById("firstNameInput")
const firstNameBtn = document.getElementById("firstNameBtn")
const firstNameError = document.getElementById("firstNameError")
// first tPage---------

// second Page---------
const secondPage = document.getElementById("secondPage")
const secondPageHead = document.getElementById("secondPageHead")
const firstNumberInput = document.getElementById("firstNumberInput")
const firstNumberBtn = document.getElementById("firstNumberBtn")
const firstNumberError = document.getElementById("firstNumberError")
// second Page---------

// third Page---------
const thirdPage = document.getElementById("thirdPage")
const thirdPageHead = document.getElementById("thirdPageHead")
const secondNameInput = document.getElementById("secondNameInput")
const secondNameBtn = document.getElementById("secondNameBtn")
const secondNameError = document.getElementById("secondNameError")
// third Page---------

// fourth Page---------
const fourthPage = document.getElementById("fourthPage")
const fourthPageHead = document.getElementById("fourthPageHead")
const secondNumberInput = document.getElementById("secondNumberInput")
const secondNumberBtn = document.getElementById("secondNumberBtn")
const secondNumberError = document.getElementById("secondNumberError")
// fourth Page---------

// final Page---------
const curret = document.getElementById("curret")
const curretText = document.getElementById("curretText")
const wrong = document.getElementById("wrong")
const wrongText = document.getElementById("wrongText")
// final Page---------



// first page-------------
firstNameBtn.addEventListener("click", ()=>{
    let inputName = firstNameInput.value
    console.log(inputName);

    if (inputName === "") {
        firstNameError.removeAttribute("hidden")
    }
    else{
        firstNameError.setAttribute("hidden", true)
        firstPage.setAttribute("hidden", true)
        secondPage.removeAttribute("hidden")
        secondPageHead.innerText = firstNameInput.value
    }   
})
// first page-------------

// second page-------------
firstNumberBtn.addEventListener("click", ()=>{
    let inputNumber = firstNumberInput.value
    console.log(inputNumber);

    if (inputNumber === "") {
        firstNumberError.removeAttribute("hidden")
    }
    else{
        firstNumberError.setAttribute("hidden", true)
        secondPage.setAttribute("hidden", true)
        thirdPage.removeAttribute("hidden")
    }   
})
// second page-------------

// third page-------------
secondNameBtn.addEventListener("click", ()=>{
    let inputName2 = secondNameInput.value
    console.log(inputName2);

    if (inputName2 === "") {
        secondNameError.removeAttribute("hidden")
    }
    else{
        secondNameError.setAttribute("hidden", true)
        thirdPage.setAttribute("hidden", true)
        fourthPage.removeAttribute("hidden")
        fourthPageHead.innerText = secondNameInput.value
    }   
})
// third page-------------

// fourth page-------------
secondNumberBtn.addEventListener("click", ()=>{
    let inputNumber2 = secondNumberInput.value
    console.log(inputNumber2);

    if (inputNumber2 === "") {
        secondNumberError.removeAttribute("hidden")
    }
    else{
        secondNumberError.setAttribute("hidden", true)
        fourthPage.setAttribute("hidden", true)
        
        if (inputNumber2 === firstNumberInput.value) {
            curret.removeAttribute("hidden")
            curretText.innerText=`${secondNameInput.value} is win`         
        }
        else{
            wrong.removeAttribute("hidden")
            wrongText.innerText=`${firstNameInput.value} is win`
        }
    }   
})
// fourth page-------------