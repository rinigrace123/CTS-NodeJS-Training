import os from "os";
import fs from "fs";

const os = require("os");
const fs = require("fs")
console.log(os.platform)
console.log(os.arch)

function readFile(params){
    fs.readFile('exrcise.js','utf8',(err,data)=>{//if filename is wring code goes to error block
        if(err){
          console.error("Error reading the file",err)
          return;
        }
        console.log("File content",data);
    })
}
function readFile(file){
    fs.readFile('file','utf8',(err,data)=>{//if filename is wring code goes to error block
        if(err){
          console.error("Error reading the file",err)
          return;
        }
        console.log("File content",data);
    })
}
readFile()
readFile(file)

async function readFileWithPromise(){
    const data = await fs.readFile('exercise.js','utf8')

}