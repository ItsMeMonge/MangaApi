const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const api = require('./api/api')

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.get('/search', (req,res) => {
    res.render('search')
})


app.post('/pesquisar', (req,res) => {
    var titulo = req.body.titulo
    console.log(titulo)

    api.search(titulo).then((Response) => {
        res.send(`${Response}`)
    });
})


app.listen(3000, () => {
    console.log('ABRIU')
})

