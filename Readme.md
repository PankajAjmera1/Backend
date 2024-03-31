#DAY 1
Directory Structure 
-->src
 index => DB Connects
  App=> config ,cookie
  constans => DB name

-> DB 
-> Models
-> Controllers--> Only a functions
-> Routes
-> Middlewares
-> Utils  
->More (Depends)


#Day2 
khudka server yand api
CORS error ko sahi krna


#Day3
fresher v/s Experience  --> kya store kr rhe (Authentication)
Data Modelling Tools - Moon Modeler  , Eraser.io
time stamps

models
 todos
  user.models.js
  todo.models.js
  subtodo.models.js


user.models.js ------>

import mongoose from "mongooose"

const userSchema = new mongoose.Schema(
  {

    <!-- Simple  -->
    <!-- username :String,
    email :String,
    isActive:Boolean -->

    <!-- Chai aur mentos -->
    username : {
      type:String,
      required: true,
      unique:true,
      lowecase :true
    },

    email :{
      type :String,
      required:true,
      unique :true,
      lowecase:true
    },
    password:{
      type : String,
      required :[true , "password required"],

    }

  },
  {timestamps :true}
  )

exposrt const User - mongoose.model("User",userSchema)



------> todo.models.js

import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-Todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);


-----> subtodo.models.js

import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);



Day-4  -->Mini Moderls
Ecommmerce Data Model ,Hospital Management


Code --->https://stackblitz.com/edit/stackblitz-starters-wmxq42?file=pages%2Fmodels%2Fhospital%2Fhospital.models.js



#Day 5 
Backend connection ,utils ,middleware ,express ,dotenv ,error


#Day 6
USER & Video model with hooks

#Day 7
Upload file
---> multer , file upload ,cloudinary

#Day 8 
--> HTTP
URl , URI ,URN
-->http headers ==> metadata -> key value sent along with req & res
most common header -----> accept ,user -agent ,authorization , content -type ,cookie , cache -control

hhtp method <--->
hhtp method <---> post , get , put , delete , patch , options , head

HTTP status code 
1xx --> informational
2xx --> success
3xx --> Redirection
4xx --> Client Error
5xx --> Server Error

#Day 9
<!-- logic for user -->
middleware --> jate hue mijhse milte jana

#Day10
<!--  Resolving Error of user registration-->

#Day11
<!-- Access Referesh Token ,Middlewaes & cookies -->

Access -> Short Lived & Refresh Token --> Long Live

#Day12
<!-- Access and refresh  -->

#Day 13 
<!-- subscription model -->
<!-- update password -->
<!-- get current user -->
<!-- getCUrrentUser -->


#Day 14
<!-- subscription model why ? -->
<!-- har bar ek document banega -->
Subscriber kitne hai --> CHANNEL

<!-- aggregation  pipeline -->
-->$lookup
-->$addFields

#Day 15
<!-- error on clodinary -->

#Day 16
<!-- watch history ,owner ==> joins ==> nested lookup  -->
<!-- subpipline -->

#Day 17
<!-- Summary of the backend course where -->

#Day 18
<!-- Revision  -->

#Day 19
<!-- MongoDB models like, comments ,playlists & tweet -->

#Day20
<!-- Testing  -->

#Day21
<!-- fixing errors -->

#Day 22
<!-- Assignment Given in the course -->
#Day 23
<!-- Start working assignment -->

#Day 24
<!-- Assignment Planning -->

#Day 25
<!-- Assignment Doing & Thinking  -->