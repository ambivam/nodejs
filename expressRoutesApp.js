const express = require('express')
const route = express.Router()


const movies = [
    {"id":1,"name":"Start Wars"},
    {"id":2,"name":"Start Trek"},
    {"id":3,"name":"Bat Man"},
]

route.delete('/api/movies/:id',(req,res) => {
    let movie = movies.find(c => c.id===parseInt(req.params.id))
    if(!movie){
        res.send("Movie not found for the id "+req.params.id)
    }

    const index = movies.indexOf(movie)
    movies.splice(index,1)
    res.send(movie)
})

route.put('/api/movies/:id',(req,res) =>{

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

route.post('/api/movies' , (req , res)=>{

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

route.get('/',(req,res) =>{
    res.send('<h1 >hello everyone using nodemon</h1>')
})

route.get('/api/movies',(req,res)=>{
    res.send(movies)
})

route.get('/api/movies/:id',(req,res)=>{
    let movie = movies.find(c => c.id===parseInt(req.params.id))
    if(!movie){
        res.send("Movie not found for the id "+req.params.id)
    }
    res.send(movie)
})

route.get('/index',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

route.get('/person',(req,res) =>{
    res.send('<h1 >hello everyone this is person route</h1>')
})

route.get('/person/:name/:age',(req,res) =>{ 
    //console.log(req.params.name +" "+ req.params.age);
    //console.log(req.params);
    //res.send(req.params)
    res.send(req.query)
})

module.exports = route