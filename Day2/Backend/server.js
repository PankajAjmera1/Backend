import express from 'express';

const app = express()

app.get('/',(req,res) =>{
    res.send('Server is ready')
})

const port =process.env.PORT || 3000;


//get a list of 5 jokes

app.get('/api/jokes' ,(req,res) =>{
    const jokes = [
        {
            id :1,
            title : '1 joke',
            content :'This is 1joke'
        },
        {
            id :2,
            title : '2 joke',
            content :'This is  2 joke'
        },
        {
            id :3 ,
            title : '3  joke',
            content :'This is 3 joke'
        },
        {
            id :4 ,
            title : '4  joke',
            content :'This is 4 joke'
        }
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})