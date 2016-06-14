function ValidateEmail(inputText)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.create_acc_form.email_id.focus();  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
document.create_acc_form.email_id.focus();  
return false;  
}  
}