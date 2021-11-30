const fs = require('fs')

fs.mkdir("temp",(err) => {
    if(err){
        console.log("not created directory successfully");
    }
    else{
        console.log("created directory successfully");
        fs.writeFile("./temp/temporary.txt","Contents in directory file",(err) => {
            if(err){
                console.log("error in creating file in directory");
            }
            else{
                console.log("file created successfully");
            }
        })
    }
})



