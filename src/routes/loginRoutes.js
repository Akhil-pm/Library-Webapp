const express= require("express");
const loginRouter = express.Router();  

function routerLogin(nav){
   
    loginRouter.get("/",function(req,res){                      
    
        res.render("login",
        {
          nav,
          title:"Login - Library",                   
        })
    });
    
    

    return loginRouter;
}



module.exports = routerLogin;