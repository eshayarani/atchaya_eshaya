
   const email = document.getElementById('email');
    const password = document.getElementById('password');
    const form = document .getElementById('form');

    const email_error = document.getElementById('email_error');
    const password_error = document.getElementById('password_error');
   
   form.addEventListener('submit',(e)=>
   {
       var email_check = /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       var password_check = "/(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/";
       if(!email.value.match(email_check))
       {
           e.preventDefault();
           email_error.innerHTML = "valid email is required";
       }
       else{
           email_error.innerHTML="";
       }
       
       if(!password.value.match(password_check))
         {
               e.preventDefault();
               password_error.innerHTML="password must be more than 8 chara,One special character,One capital letter ";
               
          }
          else
           {
                password_error.innerHTML="";

            }
            if( password.value=="")
                {
                    password_error.innerHTML="enter the password";
                }
                else {
                    password_error.innerHTML="";
                }

           })