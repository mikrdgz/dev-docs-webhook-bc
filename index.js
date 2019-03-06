const express = require('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/', function (req, res) {
    res.render('home');
})
    app.post('/webhooks', function (req, res) {
    res.send('OK');
    console.log(req.body);

})
app.listen(3000, function () {
})
