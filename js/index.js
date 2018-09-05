//signupform
document.getElementById('loginform').addEventListener('submit', login)



function login(e) {
    e.preventDefault();
   
    let username = document.getElementById('username_edt').value;
    let email = document.getElementById('email_edt').value;
    let password = document.getElementById('password_edt').value;
 

   var re = /[!@#$%^&*:;?><.0-9]/;  

   if(username==''){

   return  alert('sorry the username is null, please enter username.')
   }

   if (email ==''){
    return alert('sorry the email is null please enter email.')
   }

   if (password==''){
    return alert('sorry the password is null, please enter password.')
   }

   var re = /[!@#$%^&*:;?><.0-9]/;  
   if (re.exec(username)){
    return alert('username contains invalid characters.')

   }

   let ree = /([\w\.-]+)@([\w\.-]+)(\.[\w\.]+$)/;

   if(!email.match(ree)){

    return alert('Sorry invalid email please. enter the correct one')
   }

   

   

   if ((password.length) < 8) {
    return alert('Sorry the password has to be 8 characters and above.')
   }

   let pass_re = /^[0-9a-zA-Z]+$/

   if (!password.match(pass_re))
   {
    return alert('Sorry the password should contain atleast one number or letter.')
   }


   return alert('User successfully registered.');



   
   
    
    
   
}