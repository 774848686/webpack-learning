const express = require('express');
const app = express();
app.get('/api/user',(req,res)=>{
    res.json({name:'test-proxy'})
})
app.listen(3000)