const name = document.getElementById('name');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const form = document.getElementById('myform');
const human_verify =document.getElementById('human');
form.addEventListener("submit", (e) => {
    //console.log("triggered");
    let messages = [];
    if(name.value === '' || name.value == null){
        messages.push('Name is required');
    }
    if(!(email.value.match(mailformat))){
        messages.push('Enter valid email address');
    }
    if(human_verify.value === '' || human_verify.value != 20){
        messages.push('Enter the value');
    }
    if(messages.length > 0){
e.preventDefault();
errorElement.innerText = messages.join(', ');
    }
    else{
        alert(`Thank you for the comments!! ${name.value}`);
        errorElement.innerText = `Thank you for signing up! ${name.value}`;
    }
   
}

);
name.value = "";
email.value= "";
/*function human_verify(){
    alert("test");
    
    let var1=parseInt(prompt("what is the value of 20 + 10?"));
    if( var1 === 30 ){
        
    }
}*/



