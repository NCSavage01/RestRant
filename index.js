require('dotenv').config()
const express = require('express')
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)
app.use(express.static('public'))
app.use('/places', require('./controller/places'))
app.get('/', function(req, res){
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  
app.listen(process.env.PORT)