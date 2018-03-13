const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Hello World");
    res.send("<h3>Hello World</h3>");
});

app.get('/time', (req, res) => {
    let date = new Date();
    let iso = date.toISOString()
    console.log("Current Date and Time", `${iso}`);
    res.send(`<h3>${iso}</h3>`);
});


let port = process.env.PORT || 8080;


app.listen(port, function () {
    console.log('Port is running');
});
