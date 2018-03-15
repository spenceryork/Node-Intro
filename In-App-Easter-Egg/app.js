const express = require('express');
const appRoutes = require('./routes/appRoutes');
const app = express();

const currentTime = ( req, res, next ) => {
    let date = new Date();
    req.currentTime = date.toISOString();
    next();
}

const setEgg = ( req, res, next ) => {
    process.stdout.write(`
    You found the Easter Egg at ${req.currentTime}
    ",ggadddd8888888bbbbaaa,_
    ,ad888,      Y88,      Y888baa,
  ,dP"  "Y8b,      "Y8b,      "Y8888ba,
 ,88      "Y88b,      "Y8ba,       "Y88Ya,
,P88b,      "Y88b,       "Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        "Y8ba,_      Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         ""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
b,"Y88ba,         ""Y88baa,_         """Y888bd"
b, "Y88ba,_         ""Y888baa,_         ,8"
 8,   ""Y88ba,_         """Y8888baaaaaP"
  Ya,     ""Y888ba,_           "d88P"
    "Yb,,_     ""Y888baa,__,,adP""'
        """YYYY8888888PPPP"""'"
    `)
    next();
}

// middlewares

app.use(currentTime);
app.use(setEgg);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/see-chickens', (req, res) => {
    res.sendFile(__dirname + '/public/see-chickens.html');
});

app.get('/see-eggs', (req, res) => {
    res.sendFile(__dirname + '/public/see-eggs.html');
    req.setEgg;
});

// Error middlewares need to be the last items
app.use( (req, res, next) => {
    let err = new Error("Page not found");
    err.status = 404;
    res.send(`<h4> Sorry that page could not be found </h4>`);
})


app.use( (req, res, next,) => {
    let err = new Error('Not found, friend');
    err.status = 404;
    next(err);
})

app.use( (err, req, res, next) => {
    // one error handler to rule them all
    res.json({
        "message": "You blew it",
        "err": err.message
    });
});



app.listen(8080, () => {
    console.log('listening on port 8080');
});