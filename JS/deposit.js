// Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function (){
    // Step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    // Step-7: clear the deposit field
    depositField.value = '';

    // NaN error checker
    if(isNaN(newDepositAmount)){
        alert('Please provide me valid number');
        return;
    }
    
    // Step-3: get the current deposit total
    // for non-input (element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);

    //Step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get account balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: add numbers to set the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
});

// Step-8: press enter button to done deposit

document.getElementById('deposit-field').addEventListener('keyup',function (event){
    if(event.key === 'Enter'){
    // Step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    // Step-7: clear the deposit field
    depositField.value = '';

    // NaN error checker
    if(isNaN(newDepositAmount)){
        alert('Please provide me valid number');
        return;
    }
    
    // Step-3: get the current deposit total
    // for non-input (element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);

    //Step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get account balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: add numbers to set the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7: clear the deposit field
    depositField.value = '';
    }
});