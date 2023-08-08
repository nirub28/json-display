const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const submittedJson = req.body.json_input;
    res.json(submittedJson);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
