require('dotenv').config()


const express = require('express')

const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Hola mundo!!!!</h1>")
});
console.log(process.env.MYSQL_HOST)

app.get("/about", (req, res) => {
    res.send("<h1>Acerca de...</h1>")
});


app.listen(3000)
console.log(`Puerto abierto en ${3000}`)
