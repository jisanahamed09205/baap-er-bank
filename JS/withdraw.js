/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total

4. calculate total withdraw amount 
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total

7. clear the input field
*/

// Step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function (){
    // Step-2: get the withdraw amount from the withdraw input field
    // for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-7: clear the  withdraw field
    withdrawField.value = '';

    // NaN error checker
    if(isNaN(newWithdrawAmount)){
        alert('Please provide me valid number');
        return;
    }

    // Step-3: get the current  withdraw total
    // for non-input (element other than input,textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5: get account balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('কি ভাইয়া এতো টাকা তো নাই');
        return;
    }
    
    //Step-4: add numbers to set the total  withdraw 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the  withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // Step-6: add numbers to set the total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = newBalanceTotal;

});

// Step-8: press enter button to done withdraw 

document.getElementById('withdraw-field').addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
            // Step-2: get the withdraw amount from the withdraw input field
    // for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-7: clear the  withdraw field
    withdrawField.value = '';

    // NaN error checker
    if(isNaN(newWithdrawAmount)){
        alert('Please provide me valid number');
        return;
    }

    // Step-3: get the current  withdraw total
    // for non-input (element other than input,textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5: get account balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('কি ভাইয়া এতো টাকা তো নাই');
        return;
    }
    
    //Step-4: add numbers to set the total  withdraw 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the  withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // Step-6: add numbers to set the total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = newBalanceTotal;
    }
});