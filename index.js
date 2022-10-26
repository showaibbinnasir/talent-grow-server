const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const catagories = require('./data/catagories.json');

app.get('/', (req, res)=>{
    res.send('api is running')
})

app.get('/catagories', (req, res)=>{
    res.send(catagories)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourses = catagories.find(n => n.course_id === id);
    res.send(selectedCourses)
})

app.listen(port, ()=> console.log('api is running on port', port));