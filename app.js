
const express= require("express");
const app = new express();

const nav = [
    {link:"/",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},
    {link:"/addbook",name:"Add Book"},{link:"/signup",name:"Signup"},{link:"/login",name:"Login"}
];



const booksRouter= require("./src/routes/bookRoutes")(nav)
const authorsRouter= require("./src/routes/authorsRoutes")(nav)
const loginRouter= require("./src/routes/loginRoutes")(nav)
const signupRouter= require("./src/routes/signupRoutes")(nav)
const addRouter= require("./src/routes/addRoutes")(nav)

app.use(express.static("./public"))
app.set("view engine","ejs");
app.set("views","./src/views");
app.use('/books',booksRouter)                  
app.use('/authors',authorsRouter) 
app.use('/login',loginRouter) 
app.use('/signup',signupRouter) 
app.use('/addbook',addRouter)

app.get("/",function(req,res){

    res.render("index",
    {
      nav,
      title:"Library"
    })
});



app.listen(5000);
console.log("port : 5000")