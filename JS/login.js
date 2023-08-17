// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function (){
    // step-2: get the email address inside the email input field
    // 2.a set id on the html element
    // 2.b get the element
    // 2.c get the value from the element
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // console.log(email)
    // step-3: get password
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    // always remember to use .value to get text from an input field
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;

    //step-7:
    passwordField.value = '';

    // console.log(password);
    //DANGER: DO NOT VERIFY email password on the clint side
    // Step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid');
    }
});

// step-8: special press enter to work the function condition like submit button
document.getElementById('user-password').addEventListener('keyup',function (event){
    if(event.key === 'Enter'){
    // step-2: get the email address inside the email input field
    // 2.a set id on the html element
    // 2.b get the element
    // 2.c get the value from the element
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // console.log(email)
    // step-3: get password
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    // always remember to use .value to get text from an input field
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;

    //step-7:
    passwordField.value = '';

    // console.log(password);
    //DANGER: DO NOT VERIFY email password on the clint side
    // Step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid');
    }

    }
});