const express=require("express")
const dotenv=require("dotenv")
const User=require("./db")

const app=express()
app.use(express.json())
dotenv.config()

const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.json({message:"Welcome to Advanced Docker"});
})

app.post("/user",async (req,res)=>{
    const {name}=req.body;

    try{
        const user=await User.create({name:name})

        return res.json(user)
    }catch(error){
        return res.json({error:"something went Wrong"})
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})