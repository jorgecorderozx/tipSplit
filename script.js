let billInput = document.getElementById("billValue");
const percentageInputs = document.querySelectorAll('input[name="percentageInput"]');
let customInput = document.getElementById("customInput");
let numberOfPeopleInput = document.getElementById("numberOfPeopleInput");
let tipAmountOutput = document.getElementById("tipAmountOutput");
let totalAmountOutput = document.getElementById("totalAmountOutput");
let resetBtn = document.getElementById("resetBtn");
let billFinalValue;
let tipPercentage;
let percentageIsLessThanZero;
let percentageAndCustomNotSelected;
let billIsLessThanZero;
let peopleIsLessThanZeroOrNotInt;

function calculateTip() {
    if (billInput.value == "" || numberOfPeopleInput.value == "" || billIsLessThanZero == true || percentageIsLessThanZero == true || percentageAndCustomNotSelected == true || peopleIsLessThanZeroOrNotInt == true) {
        tipAmountOutput.innerHTML == "$0.00";
        totalAmountOutput.innerHTML == "$0.00";
    }

}

function billValidation() {
    if (billInput.value != "") {
        let billValueCheck = billInput.value;
        parseFloat(billValueCheck);
        if (billValueCheck >= 0) {
            billFinalValue = billInput.value;
            billIsLessThanZero = false
        }
        else {
            billIsLessThanZero = true;
        }
    }
}

function percentageInputSelection() {
    for (i = 0; i < percentageInputs.length; i++) {
        if (percentageInputs[i].checked) {
            tipPercentage = percentageInputs[i].value;
            parseInt(tipPercentage);
            percentageAndCustomNotSelected = false;
        }

        else if (customInput.value != "") {
            let customInputCheck = customInput.value;
            parseInt(customInputCheck);
            if (customInputCheck >= 0) {
                tipPercentage = customInput.value;
                parseFloat(tipPercentage);
                percentageIsLessThanZero = false;
                percentageAndCustomNotSelected = false;
            }

            else {
                percentageIsLessThanZero = true;
            }

        }

        else {
            percentageAndCustomNotSelected = true
        }

    }
}

function numberOfPeopleValidation() {
    if (numberOfPeopleInput != "") {
        let numberOfPeopleCheck = numberOfPeopleInput.value;
        Number(numberOfPeopleCheck);
        if (numberOfPeopleCheck <= 0 || !Number.isInteger(numberOfPeopleCheck)) {
            peopleIsLessThanZeroOrNotInt = true;
        }

        else {
            peopleIsLessThanZeroOrNotInt = false;
        }

    }
}



