const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide(); 
$('#success').hide(); 
// console.log(name, email, phone)

name.addEventListener('blur',function(){
    console.log('Name is blurred');
    //Validating name
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    // console.log(str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log('name is not valid');
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur',function(){
    console.log('email is blurred');
    //Validating email
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let str = email.value;
    // console.log(str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',function(){
    console.log('phone is blurred');
    //Validating phone
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You have clicked submit');
    //Submit your form here
    let failure = document.getElementById('failure');
    let success = document.getElementById('success');
    if(validEmail && validName && validPhone){
        console.log('everything is valid')
        
        success.classList.add('show');
        // $('#failure').alert('close');  
        $('#failure').hide();  
        $('#success').show();
    }
    else{
        console.log('Invalid input')  
        failure.classList.add('show');
        // $('#sucess').alert('close');
        $('#success').hide();
        $('#failure').show();
    }
    
})