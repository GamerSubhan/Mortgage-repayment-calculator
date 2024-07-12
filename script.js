const amountInput = document.getElementById('amountInput');
const rateInput = document.getElementById('rateInput');
const yearsInput = document.getElementById('yearsInput');
const currencySymbol = document.getElementById('currency-symbol');
const yearsSymbol = document.getElementById('years-symbol');
const rateSymbol = document.getElementById('percentage-symbol');

amountInput.addEventListener('input', () => {
    if (amountInput.value.trim() !== '') {
        currencySymbol.style.backgroundColor = 'hsl(61, 70%, 52%)'
    } else {
        currencySymbol.style.backgroundColor = 'hsl(202, 86%, 94%)'
    }
});

yearsInput.addEventListener('input', () => {
    if (yearsInput.value.trim() !== '') {
        yearsSymbol.style.backgroundColor = 'hsl(61, 70%, 52%)'
    } else {
        yearsSymbol.style.backgroundColor = 'hsl(202, 86%, 94%)'
    }
});
rateInput.addEventListener('input', () => {
    if (rateInput.value.trim() !== '') {
        rateSymbol.style.backgroundColor = 'hsl(61, 70%, 52%)'
    } else {
        rateSymbol.style.backgroundColor = 'hsl(202, 86%, 94%)'
    }
});

const typeInput = document.querySelector('.input----container');
const interestInput = document.querySelector('.input-----container');
const typeInputButton = document.getElementById('typeInput');
const interestInputButton = document.getElementById('interestInput');

const calculateButton = document.getElementById('calculateBtn')

typeInput.addEventListener('click', () => {
    typeInput.style.backgroundColor = 'hsl(61, 70%, 52%, 0.3)'
    typeInput.style.borderColor = 'hsl(61, 70%, 52%)'
    typeInputButton.style.border = '3.5px solid white'
    typeInputButton.style.backgroundColor = 'hsl(61, 70%, 52%)'
    typeInputButton.style.width = '18px'
    typeInputButton.style.height = '17.6px'

    disableOtherInput(this, interestInput);


    interestInput.style.backgroundColor = 'white'
    interestInput.style.borderColor = 'hsl(200, 24%, 40%)'
    interestInputButton.style.backgroundColor = 'white'
    interestInputButton.style.border = '1px solid hsl(202, 55%, 16%)'
    interestInputButton.style.width = '15px'
    interestInputButton.style.height = '15px'
});

interestInput.addEventListener('click', () => {
    interestInput.style.backgroundColor = 'hsl(61, 70%, 52%, 0.3)'
    interestInput.style.borderColor = 'hsl(61, 70%, 52%)'
    interestInputButton.style.border = '3.5px solid white'
    interestInputButton.style.backgroundColor = 'hsl(61, 70%, 52%)'
    interestInputButton.style.width = '18px'
    interestInputButton.style.height = '18px'
    disableOtherInput(this, typeInput);

    typeInput.style.backgroundColor = 'white'
    typeInput.style.borderColor = 'hsl(200, 24%, 40%)'
    typeInputButton.style.backgroundColor = 'white'
    typeInputButton.style.border = '1px solid hsl(202, 55%, 16%)'
    typeInputButton.style.width = '15px'
    typeInputButton.style.height = '15px'
});

function disableOtherInput(clickedInput, otherInput) {
    clickedInput.disabled = true;
    otherInput.disabled = false;
}

let monthly_repayment = document.getElementById('monthlyPayment');
let total_repayment = document.getElementById('totalPayVal');

calculateButton.addEventListener('click', () => {
    if(amountInput.value.trim() !== '' && rateInput.value.trim() !== '' && yearsInput.value.trim() !== '')
    {
        let monthly_interest_rate = rateInput.value / 12 / 100;

        let total_payments = yearsInput.value * 12;

        let monthlyPatmentValue = amountInput.value * (monthly_interest_rate * (1 + monthly_interest_rate) ** total_payments) / ((1 + monthly_interest_rate) ** total_payments - 1);

        monthly_repayment.textContent = "€" + monthlyPatmentValue.toFixed(2);
        let total_paymentValue = total_payments * monthlyPatmentValue;
        total_repayment.textContent = "€" + total_paymentValue.toFixed(2);

        document.getElementById('resultVision').style.display = 'block';
        document.getElementById('coverVision').style.display = 'none';

        document.querySelectorAll('#errorMessage').forEach((message) => {
            message.style.display = 'none';
        })
    }
    else
    {
        currencySymbol.style.backgroundColor = 'red'
        currencySymbol.firstChild.style.color = 'white'
        yearsSymbol.style.backgroundColor = 'red'
        yearsSymbol.firstChild.style.color = 'white'
        rateSymbol.style.backgroundColor = 'red'
        rateSymbol.firstChild.style.color = 'white'

        document.querySelectorAll('#errorMessage').forEach((message) => {
            message.style.display = 'block';
        })
    }

    console.log(yearsInput.value)
});


//clear button

document.getElementById('clearBtn').addEventListener('click', () => {
    amountInput.value = '';
    rateInput.value = '';
    yearsInput.value = '';

    currencySymbol.style.backgroundColor = 'hsl(202, 86%, 94%)';
    rateSymbol.style.backgroundColor = 'hsl(202, 86%, 94%)';
    yearsSymbol.style.backgroundColor = 'hsl(202, 86%, 94%)';
})

