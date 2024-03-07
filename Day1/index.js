require('dotenv').config()
const express = require('express')

const app =express()

const port = 4000

app.get ('/', (req,res) => {
    res.send("Hello Day1 Backend")
})
app.get ('/twitter', (req,res) => {
    res.send("Twiiter Backend")
})



app.listen(process.env.PORT,()=> {
    console.log(`App listening ${port}`);
})