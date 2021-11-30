const fs = require('fs')

fs.rm('rename1.txt',(err) => {
    if(err){
        console.log("Error in deleting the file");
    }else{
        console.log("file deleted susccessfully");
    }
    
    
})

fs.unlink('rename2.txt',(err) => {
    if(err){
        console.log("Error in deleting the file");
    }else{
        console.log("file deleted susccessfully");
    }
    
    
})