const express = require('express')
const app = express()
const path = require('path')
const Joi = require('@hapi/joi')
app.use(express.json())

const movies = [
    {"id":1,"name":"Start Wars"},
    {"id":2,"name":"Start Trek"},
    {"id":3,"name":"Bat Man"},
]

const port = process.env.PORT || '5000'

app.use((req,res,next) => {
    console.log(req.url,req.method);
    next()
})


app.use('/api/movies',(req,res,next) => {
    console.log(req.url,req.method);
    next()
})

app.delete('/api/movies/:id',(req,res) => {
    let movie = movies.find(c => c.id===parseInt(req.params.id))
    if(!movie){
        res.send("Movie not found for the id "+req.params.id)
    }

    const index = movies.indexOf(movie)
    movies.splice(index,1)
    res.send(movie)
})

app.put('/api/movies/:id',(req,res) =>{

    let movie = movies.find(c => c.id===parseInt(req.params.id))
    if(!movie){
        res.send("Movie not found for the id "+req.params.id)
    }
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    })

    const result = schema.validate(req.body)
    console.log(result);

    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }
    movie.name = req.body.name
    res.send(movie)
})

app.post('/api/movies' , (req , res)=>{

    const schema = Joi.object({
        name : Joi.string().min(3).required()
    })

    const result = schema.validate(req.body)
    console.log(result);

    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }

    // if(req.body.name.length < 3 ){
    //     res.status(400).send("The name of the movie is not present")
    //     return
    // }

    let movie = {
        id : movies.length + 1,
        name : req.body.name
    }
    movies.push(movie)
    res.send(movies)

})

app.get('/',(req,res) =>{
    res.send('<h1 >hello everyone using nodemon</h1>')
})

app.get('/api/movies',(req,res)=>{
    res.send(movies)
})

app.get('/api/movies/:id',(req,res)=>{
    let movie = movies.find(c => c.id===parseInt(req.params.id))
    if(!movie){
        res.send("Movie not found for the id "+req.params.id)
    }
    res.send(movie)
})

app.get('/index',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/person',(req,res) =>{
    res.send('<h1 >hello everyone this is person route</h1>')
})

app.get('/person/:name/:age',(req,res) =>{ 
    //console.log(req.params.name +" "+ req.params.age);
    //console.log(req.params);
    //res.send(req.params)
    res.send(req.query)
})


    
   app.listen(port,()=>{
        console.log("Listening on port : "+port);
    })