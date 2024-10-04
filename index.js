const express = require('express')
const ejs = require('ejs')
const path = require("path")

const app = express()

function tervita(req, res) {
    console.log(req.query)
    res.end(`
        <html>
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
        <body>
            <h1>Tere, ${req.query.nimi}</h1>
            <p>Kes hommikuti külas käib, see asjatult ei longi</p>
            <img class="koer" src="static/asset/koer.jpg">
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

const matk1 = {
    nimetus: "Sügismatk Kõrvemaal",
    pildiUrl: "/static/asset/koer.jpg",
    kirjeldus: "Lähme ja oleme 3 päeva Kõrvemaal",
    osalejad: ["üksinimene@gmail.com", "kaksinimene@gmail.com"]
}

const matk2 = {
    nimetus: "Kevadine matk Hiiumaal",
    pildiUrl: "/static/asset/koer.jpg",
    kirjeldus: "Lähme oleme paar päeva Hiiumaal",
    osalejad: ["üksonimenex@gmail.com"]
}

const matkad = [matk1, matk2]

function palavTervitus(req, res) {
    const parameetrid = { isik: req.query.nimi }
    res.render("palavtervitus", parameetrid)
}

function naitaMatkad(req, res) {
    res.render("matkad", {matkad: matkad})
}

app.use('/static', express.static('public'))
app.use(express.json())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/Finley', parimkoer)

app.get('/palavtervitus', palavTervitus)
app.get('/matkad', naitaMatkad)

app.listen(3000)