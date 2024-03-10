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

