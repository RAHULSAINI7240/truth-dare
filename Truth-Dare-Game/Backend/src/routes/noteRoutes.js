const express = require("express");

const noteReporter = express.Router();


noteReporter.get('/' , (req , res)=>{
    res.send("noteReporter");
})


noteReporter.post("/" , (req , res)=>{
    res.send("noteReporter");
})


module.exports = noteReporter;