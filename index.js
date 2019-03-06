const express = require('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs')


    app.get('/', function (req, res) {
    res.render('home');
})
    app.post('/webhooks', function (req, res) {
    res.send('OK')
})
app.listen(3000, function () {
})
