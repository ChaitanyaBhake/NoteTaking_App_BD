
const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
const connectDB = require("./config/connectDB")
const groupRoutes = require("./routes/groupRoutes")
const noteRoutes = require("./routes/noteRoutes")

const app = express()

corsOptions ={
    credential:true,
    origin:"https://note-taking-app-fd.vercel.app/"
}
app.use(cors(corsOptions))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi I am running")
})

connectDB()

app.use("/api/v1/group",groupRoutes)
app.use("/api/v1/note",noteRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`I am running at port ${process.env.PORT}`);
})