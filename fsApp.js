const fs = require('fs')

fs.writeFile("demo.txt","These are the contents of the file",(err)=>{
    if(err){
        console.log("Error occured");
    }else{
        console.log("demo.txt created successfully");
        fs.readFile('demo.txt','utf8',(err,file) => {
            if(err) throw err
            console.log(file);

        })
    }
})

fs.writeFile('rename1.txt',"File woyld be renamed",(err) =>{
    if(err){
        console.log("File is not created successfully");
    }else{
        console.log("file is created successfully");
        fs.rename('rename1.txt','rename2.txt',(err) => {
            if(err){
                console.log("file is not renamed");
            }else{
                console.log("file renamed successfully");
            }            
        })

        fs.appendFile('rename2.txt',"this data is appended",(err) => {
            if(err) {
                console.log("error in appendeing file");
            }else{
                console.log("data is appended successfully");
            }            
        })
    }
})



