const express= require("express");
const signupRouter = express.Router();  

function routerSignup(nav){

  var formData = [
    {name : 'Name',id : 'Name',placeholder : 'Full Name',type : 'text',hidden : 'name1'},
    {name : 'Username',id : 'UserName',placeholder : 'Desired username',type : 'text',hidden : 'usname'},
    {name : 'Phone Number',id : 'phoneNumber',placeholder : 'Ph No',type : 'text',hidden : 'pnum'},
    {name : 'Email',id : 'inputEmail',placeholder : 'Email',type : 'text',hidden : 'mail'},
    {name : 'Password',id : 'InputPassword1',placeholder : 'password',type : 'password',hidden : 'pass1'},
    {name : 'Confirm Password ',id : 'confirmPassword',placeholder : 'Confirm password',type : 'password',hidden : 'pass2'}
  ]

    signupRouter.get("/",function(req,res){                      
    
        res.render("signup",
        {
          nav,
          title:"Sign up - Library", 
          formData                   
        })
    });
    

    return signupRouter;
}



module.exports = routerSignup;