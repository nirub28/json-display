const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.static("./assets"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.post('/submit', (req, res) => {
    const submittedJson = req.body.json_input;
    const jsonData = JSON.parse(submittedJson);
    res.render('json-data', { submittedJson, jsonData }); 
});

app.get('/json-data', (req, res) => {
    const jsonData = req.query.data;
    res.render('json-data', { jsonData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
