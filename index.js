const express = require('express')

const app = express()

function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
        <body>
            <h1>Tere, ${req.query.nimi}</h1>
            <p>Kes hommikuti külas käib, see asjatult ei longi</p>
        </body>
        </html>
        `)
}

app.get('/tervitus', tervita)

function parimkoer (req, res) {
    res.end(`
        <html>
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
        <body>
            <h1> Finley on parim koer maailmas!</h1>
        </body>
        </html>
        `)
}

app.get('/Finley', parimkoer)

app.listen(3000)