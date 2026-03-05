const express = require('express');
const app=express();
const notesRoutes =  require('./routes/notesRoutes');
app.use(express.json());

app.use('/notes',notesRoutes);

app.get('/',(req,res)=>{
    res.send("Test run of notes API");
});

app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
});