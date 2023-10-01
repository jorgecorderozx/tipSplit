let billInput = document.getElementById("billValue");
let billValueContainer = document.getElementById("billValueContainer");
let billZeroLabel = document.getElementById("billLessThanZero");
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
    tipAmountOutput.innerHTML = "$" + tipPerPerson;
    totalAmountOutput.innerHTML = "$" + totalPerPerson;
}

billInput.addEventListener("input", function () {
    widerInputsValidation(billInput)
});

for (i = 0; i < percentageInputs.length; i++) {
    percentageInputs[i].addEventListener("click", function () {
        storePercentageValue;
    })
}

customInput.addEventListener("click", uncheckButtons);
customInput.addEventListener("input", storePercentageValue);

numberOfPeopleInput.addEventListener("input", function () {
    widerInputsValidation(numberOfPeopleInput)
});

function storePercentageValue() {
    for (i = 0; i < percentageInputs.length; i++) {
        if (percentageInputs[i].checked) {
            percentageValue = percentageInputs[i].value;
        }
        else if (customInput.value >= 0) {
            customInput.style.border = " 1px solid var(--strong-cyan)"
            percentageValue = customInput.value;
        }
        else if (customInput.value < 0) {
            customInput.style.border = ""
            percentageValue = "";
            customInput.style.border = "1px solid red";
        }

        if (customInput.value === "") {
            customInput.style.border = "1px solid transparent";

        }
    }
}

function uncheckButtons() {
    for (i = 0; i < percentageInputs.length; i++) {
        percentageInputs[i].checked = false;
    }
}

function widerInputsValidation(inputName) {
    if (inputName == billInput) {
        let billInputNumber = billInput.value;
        parseFloat(billInputNumber);
        if (billInputNumber >= 0) {
            billValueContainer.style.border = "1px solid var(--strong-cyan)";
            billZeroLabel.style.display = "none";
        }
        else {
            billValueContainer.style.border = "1px solid red";
            billZeroLabel.style.display = "inline";
        }
        if (billInputNumber === "") {
            billValueContainer.style.border = "1px solid transparent";
            billZeroLabel.style.display = "none"
        }
    }
    if (inputName == numberOfPeopleInput) {
        let numberOfPeopleInputNumber = numberOfPeopleInput.value;
        parseInt(numberOfPeopleInputNumber);
        if (numberOfPeopleInputNumber == Math.floor(numberOfPeopleInputNumber)) {
            if (numberOfPeopleInputNumber > 0) {
                numberOfPeopleValueContainer.style.border = "1px solid var(--strong-cyan)";
                numberOfPeopleZeroLabel.style.display = "none";
            }
            else if (numberOfPeopleInputNumber == 0) {
                numberOfPeopleValueContainer.style.border = "1px solid red";
                numberOfPeopleZeroLabel.style.display = "inline";
                numberOfPeopleZeroLabel.innerHTML = "Can't be zero";
            }
            else {
                numberOfPeopleValueContainer.style.border = "1px solid red";
                numberOfPeopleZeroLabel.style.display = "inline";
                numberOfPeopleZeroLabel.innerHTML = "Can't be less than zero"
                
            }
            if (numberOfPeopleInputNumber === "") {
                numberOfPeopleValueContainer.style.border = "1px solid transparent";
                numberOfPeopleZeroLabel.style.display = "none"
            }
        }
    }
}