const express=require("express");
const path=require("path");
const fs=require("fs");
const users=require("./database.json");
var database;
var token="wrong key";
//read database.json file
fs.readFile("database.json",function(err,data){
    //check for errord
    if(err)throw err;
    //converting to JSON
    database=JSON.parse(data);
});
//Import jwt for API'S endpoint authentication
const jwt=require("jsonwebtoken");
const app=express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res,sendFile(__dirname+'/login.html');
});
//login route
app.post("/auth",(req,res)=>{
    //Get the name to the json body data

    

});
app.listen(port,()=>{
    console.log(`Server is running:http://localhost:${port}`);
});

