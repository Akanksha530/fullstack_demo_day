const express = require('express')
const app = express()
const path = require('path')
var bodyparser=require('body-parser')
                                                  
const studentsDetails = require('./data/data.js')


app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs')
app.set('views','./view')
app.get('/newform',(req,res)=>
{
    res.render('newform.ejs')
})
app.use(bodyparser.json())

app.get('/home', (req, res)=> {
  res.send('home.ejs',{studentsDetails})
})

app.get('/about', (req, res)=> {
    res.send('About us')
  })

app.get('/contact', (req, res)=> {
    res.send('Contact us')
  })

app.post('/information',(req,res)=>
{
    const{name,rollno,marks,course}=req.body;
    const newStudent={
        name:name,
        rollno:rollno,
        marks:marks,
        course:course
    }
    console.log(studentsDetails.length)
    studentsDetails.push(newStudent);
    res.send('Student added')
})
app.get('/all',(req,res)=>
{
    res.send(studentsDetails)
})
app.listen(3000, ()=>
{
    console.log("server is running at port 3000")
})