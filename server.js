const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("frontend"))

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname,"../frontend/index.html"))
})

app.listen(3000, ()=>{
console.log("Server running on port 3000")
})
