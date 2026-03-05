const express = require('express');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Test run of notes API");
});

app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
});