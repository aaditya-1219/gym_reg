const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const port = 80;

// '/static' is the URL and the .js file should be in folder 'static'
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get('/', (req, res) => {
    res.render('index.pug', {'title': 'Gym Registration'});
})

// POST request
app.post('/', (req, res) => {
    Name = req.body.name
    Age = req.body.age
    Gender = req.body.gender
    Address = req.body.address
    More = req.body.more

    let outputToWrite = `Name: ${Name}\nAge: ${Age}\nGender: ${Gender}\nAddress: ${Address}\nMore about user: ${More}`
    fs.writeFileSync('output.txt', outputToWrite);
    res.render('index.pug', {'title': 'Gym Registration'});
})

app.listen(port, () => {
    console.log(`Application started successfully on port ${port}`);
})