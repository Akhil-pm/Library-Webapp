const express= require("express");
const addRouter = express.Router();  

function routerAdd(nav){
   
    addRouter.get("/",function(req,res){                  //Router for addbook page        
    
        res.render("addbook",
        {
          nav,
          title:"Add Book - Library",                   
        })
    });
    
    

    return addRouter;
}

module.exports = routerAdd;