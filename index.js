const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const Employeemodel = require('./models/Employee')


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee")

app.post('/register',(req,res)=>{
    Employeemodel.create(req.body).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
})
app.listen(3001,()=>{
    console.log("Server is running on 3001");
})