const fs = require('fs')

fs.readdir('temp',(err,files)=>{
    if(err){
        console.log("object");
    }else{
        console.log(files);
        files.forEach((file) => {
            fs.unlink('./temp/'+file,(err)=>{
                if(err){
                    console.log('error in deleting the file');
                }else{
                    console.log('file deleted successfully');
                }
            })
        })
    }
})