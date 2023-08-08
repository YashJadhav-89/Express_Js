// const express=require('express');
// const app =express();
// app.get('',(req,res)=>{
//   res.send('Hello,this is Home page');
// });


// app.get('/about',(req,res)=>{
//     res.send('Hello,this is About page');
//   });

//   app.get('/help',(req,res)=>{
//     res.send('Hello,this is Help page');
//   });

//   app.listen(5000);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//HOW TO RENDER HTML AND JSON //

//1>RENDER HTML DATA=
// const express=require('express');
// const app =express();
// app.get("",(req, res)=>{
//   res.send(`<h1>Hello,this is Home page</h1><a href="/about" >Go to About page</a>
//   `);
// });


// app.get("/about",(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="user name" />
//     <button>click me</button>
//     <a href="/" >Go to Home page</a>
//     `);
   
//   });

// //   2>RENDER JSON DATA=
//   app.get("/help",(req,res)=>{
//     res.send([
//         {
//             name:'yash',
//             email:'jadhavyash030@gmail.com'
//         },
//         {
//             name:'vinit',
//             email:'vinitmahant@gmail.com'
//         }
//     ]);
//   });

//   app.listen(5000);


//make html page in node js
// const express = require('express');
// const app = express();
// const path=require('path');
// const publicPath=path.join(__dirname,'public');


//Template engine=for any template engine we need view folder.
//TO make website rendering dynamic we need ejs or we need to use ejs.
// app.set('view engine','ejs');
//app.use(express.static(publicPath));

//Removal extension from url
// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// });

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// });


// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'yash jadhav',
//         email:'jadhavyash030@gmail.com',
//         city:'latur',
//         skills:['php','js','c++','java']
//     }
//     resp.render('profile',{user}); 
// });

// app.get('/login',(_,resp)=>{
//     resp.render('login');
// })

// app.get('/help',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })


// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// });
// app.listen(5500);




//middleware=It is used to check user login or not or to block our site in specific country or to make changes in req and resp.


// const express=require('express');
// const app= express();
// const reqFilter=require('./middleware');
// const route =express.Router();

//    //app.use(reqFilter);


//    route.use(reqFilter);
// app.get('/',(req,resp)=>{
//     resp.send('welcome to Home page')
// });

// app.get('/user',(req,resp)=>{
//     resp.send('welcome to User page')
// });

// //route level middleware.
// route.get('/about',(req,resp)=>{
//     resp.send('welcome to about page')
// });


// route.get('/contact',(req,resp)=>{
//     resp.send('welcome to contact page')
// });

// app.use('/',route);
// app.listen(5000);





























































