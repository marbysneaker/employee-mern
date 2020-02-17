const express = require('express')
const employeeRouter = express.Router();
const Employee = require('../model/Employee')

//Crud

//read
employeeRouter.get('/',(req,res) => {
    Employee.find({},(err,reponse) =>{
        if(err){
            res.status(500).json({message:{
                msgBody : "unable to get employees",
                msgError : true
            }})
        }
        else{
            res.status(200).json(response);
        }
    });
});

//create

employeeRouter.post('/',(req,res) => {
    const employee = new Employee(req.body);
    employee.save((err,document) =>{
        if(err){
            res.status(500).json({message:{
                msgBody:"unable to add employee",
                msgError: true
                 
            }});
        }
        else{
            res.status(200).json({message:{
                msgBody:"successfully added employee",
                msgError: false
            }})
        };
    })
});

employeeRouter.delete('/:id',(req, res) => {
    Employee.findByIdAndDelete(req.params.id,err=>{
        if(err){
            res.status(500).json({message:{
                msgBody:"unable to delete Employee",
                msgError: true
            }})
        }
        else{
            res.status(200).json({message:{
                msgBody:"successfully Added Employee",
                msgError: false
            }})
        };
    })
});

employeeRouter.put(':id',(req,res)=>{
    Employee.findOneAndUpdate(req.params.id,req.body,{runValidators:true},(err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody:"unable to update employee",
                msgError: true
            }})
        }
        else{
            res.status(200).json({message:{
                msgBody:"successfully updated employee",
                msgError: false
            }})
        };
    })
});


module.exports = employeeRouter;