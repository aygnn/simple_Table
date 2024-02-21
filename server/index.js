const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const mongoose=require("mongoose")
const { json } = require('body-parser')


const app=express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log('DB conect');
        app.listen(PORT ,()=>{
            console.log('SERVER STARTING');
        })
    }
})

const {Schema}=mongoose
const userTable=new Schema(
    {
        name:{type:String, required:true},
        surname:{type:String, required:true},
        username:{type:String, required:true},
        age:{type:Number, required:true},

    }

)
const Users=mongoose.model("userTable",userTable)


app.get('/',(req,res)=>{
    res.send('hello')
})
//add user
app.post('/users',(req,res)=>{
    const user=new Users({
        name:req.body.name,
        surname:req.body.surname,
        username:req.body.username,
        age:req.body.age,

    })
    user.save()
    res.send({message:'User Created'})
})

//get all users
app.get('/users',(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//delete user

app.delete('/users/:id',(req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send({message:'Deleted'})
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//get user by id
app.get('/users/:id',(req,res)=>{
    const {id}=req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"NOT FOUND"})

            }
        }
        else{
            res.status(500).json({message:err})

        }
    })
})

//update user

app.put('/users/:id',(req,res)=>{
    const {id}=req.params
    Users.findByIdAndUpdate(id,req.body,(err)=>{
        if(!err){
            res.send({message:'Updated'})
        }
        else{
            console.log(err);
            res.status(404).json({message:err})
        }
    })



})