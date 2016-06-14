function Submit(){
    var e_id = document.forms["create_acc_form"]["email_id"].value,
        pass = document.forms["create_acc_form"]["email_password"].value;

    var name = document.forms["contact_information_form"]["full_name"].value,
        contact_e = document.forms["contact_information_form"]["contact_id"].value,
        phone = document.forms["contact_information_form"]["ph_no"].value;
        
    var com_name = document.forms["billing_contact_form"]["company_name"].value,
        address_street = document.forms["billing_address_form"]["bill_address_street"].value,
        address_city = document.forms["billing_address_form"]["bill_address_city"].value,
        address_state  = document.forms["billing_address_form"]["bill_address_state"].value,
        address_zip = document.forms["billing_address_form"]["bill_address_zip"].value;
    
    var card_no = document.forms["secure_billing"]["card_number"].value;
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    
    /* create your account--section starts here */
    if (e_id == null || e_id == "" ) {
        alert("Please enter your Email-Id");
        document.create_acc_form.email_id.focus();
        return false;
    }
    if(filter.test(e_id)){
        testresults=true
    }
    else{
        alert("Please input a valid email address!")
        testresults=false
    }
    
    if (pass == null || pass == "" ) {
        alert("Incorect Password");
        document.create_acc_form.email_password.focus();
        return false;
    }
    /* create your account--section ends here */
    
    /* contact information--section starts here*/
    if (name == null || name == "") {
        alert("Please enter your name");
        return false;
    }
    if (contact_e == null || contact_e == "") {
        alert("Please enter your Contact-Email");
        return false;
    }
    if(filter.test(contact_e)){
        testresults=true
    }
    else{
        alert("Please input a valid email address!")
        testresults=false
    }
    if (phone == null || phone == "") {
        alert("Please enter your Phone Number");
        return false;
    }
    /* contact information--section ends here */
   
    /* billing--section starts here */
    if (com_name == null || com_name == "") {
        alert("Please enter your Company Name");
        return false;
    }
    if (address_street == null || address_street == "") {
        alert("Please enter your Street");
        return false;
    }
    if (address_city == null || address_city == "") {
        alert("Please enter your City");
        return false;
    }
    if (address_state == null || address_state == "") {
        alert("Please enter your State");
        return false;
    }
    if (address_zip == null || address_zip == "") {
        alert("Please enter your Zip");
        return false;
    }
    /* billing--section ends here */
    
    /* secure billing--section starts here */
    if (card_no == null || card_no == "") {
        alert("Please enter your Card No");
        return false;
    }
    /* secure billing--section ends here */
    return true;
}