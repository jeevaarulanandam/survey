const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({test:"Ave Maria"})
});

const PORT = process.env.PORT || 5000
app.listen(5000);