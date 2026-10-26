const express = require("express")
const fs=require ("fs")
const app = new express();
app.listen(3000,()=>{
    console.log("listening")
});
app.get("/" ,(req,res)=>{
    const {id }=req.query;
    fs.writeFile("app.txt",id || "",(err)=>{
        if(err){
            console.log(err);
            return res.status(500).send("Error writing file");
        }
        console.log("File written successfully ");
        res.send("ok");
    });
})