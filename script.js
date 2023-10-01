let billInput = document.getElementById("billValue");
let billValueContainer = document.getElementById("billValueContainer");
let billZeroLabel = document.getElementById("billLessThanZero");
let percentageIndividualContainers = document.getElementsByClassName("individualPercentageContainer")
let percentageIndividualText = document.getElementsByClassName("individualPercentageText");
let percentageInputs = document.querySelectorAll('input[name="percentageInput"]');
let customInput = document.getElementById("customInput");
let numberOfPeopleInput = document.getElementById("numberOfPeopleInput");
let numberOfPeopleValueContainer = document.getElementById("numberOfPeopleValueContainer");
let numberOfPeopleZeroLabel = document.getElementById("zeroLabel");
let tipAmountOutput = document.getElementById("tipAmountOutput");
let totalAmountOutput = document.getElementById("totalAmountOutput");
let resetBtn = document.getElementById("resetBtn");
let percentageValue;


function calculateTip(billAmount, percentageAmount, numberOfPeople) {
    let tipPerPerson = billAmount * (percentageAmount / 100) / numberOfPeople;
    let totalPerPerson = ((tipPerPerson * numberOfPeople) + billAmount) / numberOfPeople;
    tipAmountOutput.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalAmountOutput.innerHTML = "$" + totalPerPerson.toFixed(2);
}

function finalValidation(){
    let numberOfPeopleNumber = parseInt(numberOfPeopleInput.value);
    let billInputNumber = parseFloat(billInput.value)
    if(billInput.value !== "" && billInputNumber >= 0 && percentageValue !== "" && percentageValue >= 0 && numberOfPeopleNumber == Math.floor(numberOfPeopleNumber)){
        calculateTip(billInputNumber, percentageValue, numberOfPeopleNumber);
    }
}

billInput.addEventListener("input", function () {
    widerInputsValidation(billInput)
    finalValidation();
});

for (i = 0; i < percentageInputs.length; i++) {
    percentageInputs[i].addEventListener("input", function(){
        customInput.value = "";
        customInput.style.border = "1px solid transparent";
        storePercentageValue();
        finalValidation();
    })
}

customInput.addEventListener("click", uncheckButtons);
customInput.addEventListener("input", function(){
    storeCustomPercentageValue();
    finalValidation();
});

numberOfPeopleInput.addEventListener("input", function () {
    widerInputsValidation(numberOfPeopleInput)
    finalValidation();
});

resetBtn.addEventListener("click", resetAllFields)

function storePercentageValue() {
    for (i = 0; i < percentageInputs.length; i++) {
        if (percentageInputs[i].checked) {
            percentageValue = parseFloat(percentageInputs[i].value);
            percentageIndividualContainers[i].style.backgroundColor = "var(--light-grayish-cyan)";
            percentageIndividualText[i].style.color = "var(--strong-cyan)";
            percentageIndividualContainers[i].classList.add('nohover');
        }
        else {
            percentageIndividualContainers[i].style.backgroundColor = "var(--very-dark-cyan)";
            percentageIndividualText[i].style.color = "white";
            percentageIndividualContainers[i].classList.remove('nohover');
        }
    }
}

function storeCustomPercentageValue(){
    if (customInput.value >= 0) {
        customInput.style.border = " 1px solid var(--strong-cyan)"
        percentageValue = parseFloat(customInput.value);
    }
    else if (customInput.value < 0) {
        customInput.style.border = "1px solid red";
    }

    if (customInput.value === "") {
        customInput.style.border = "1px solid transparent";

    }
}

function uncheckButtons() {
    percentageValue = "";
    for (i = 0; i < percentageInputs.length; i++) {
        percentageInputs[i].checked = false;
        percentageIndividualContainers[i].style.backgroundColor = "var(--very-dark-cyan)";
        percentageIndividualText[i].style.color = "white";
    }
}

function widerInputsValidation(inputName) {
    if (inputName == billInput) {
        let billInputNumber = parseFloat(billInput.value);
        if (billInput.value == "") {
            billValueContainer.style.border = "1px solid transparent";
            billZeroLabel.style.display = "none"
        }
        if (billInputNumber >= 0) {
            billValueContainer.style.border = "1px solid var(--strong-cyan)";
            billZeroLabel.style.display = "none";
        }
        else if(billInputNumber < 0) {
            billValueContainer.style.border = "1px solid red";
            billZeroLabel.style.display = "inline";
        }
    }

    /*Revisar*/
    if (inputName == numberOfPeopleInput) {
        let numberOfPeopleInputNumber = parseInt(numberOfPeopleInput.value);
        
        if (numberOfPeopleInputNumber == numberOfPeopleInput.value) {
            if (numberOfPeopleInputNumber > 0) {
                numberOfPeopleValueContainer.style.border = "1px solid var(--strong-cyan)";
                numberOfPeopleZeroLabel.style.display = "none";
            }
            else if (numberOfPeopleInputNumber == 0) {
                numberOfPeopleValueContainer.style.border = "1px solid red";
                numberOfPeopleZeroLabel.style.display = "inline";
                numberOfPeopleZeroLabel.innerHTML = "Can't be zero";
            }
            else if(numberOfPeopleInputNumber < 0) {
                numberOfPeopleValueContainer.style.border = "1px solid red";
                numberOfPeopleZeroLabel.style.display = "inline";
                numberOfPeopleZeroLabel.innerHTML = "Can't be less than zero"
                
            }
        }
        else if (numberOfPeopleInput.value === "" || numberOfPeopleInputNumber != Math.floor(numberOfPeopleInputNumber)){
            numberOfPeopleValueContainer.style.border = "1px solid transparent";
            numberOfPeopleZeroLabel.style.display = "none"
        }
    }
}

function resetAllFields(){
    tipAmountOutput.innerHTML = "$0.00";
    totalAmountOutput.innerHTML = "$0.00";
    billValueContainer.style.border = "1px solid transparent";
    customInput.style.border = "1px solid transparent";
    numberOfPeopleValueContainer.style.border = "1px solid transparent";
    billZeroLabel.style.display = "none";
    numberOfPeopleZeroLabel.style.display = "none";
    uncheckButtons();
}