//load express

const express = require('express')
const app = express()

//allow assets to be accessed
app.use(express.static('public'));

//set view engine to Embedded Javascript Templates
app.set('view engine', 'ejs')

//used to parse response from POST into JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//create global array to store POST data
let products = [

];

//route for /webhooks destination
app.get('/webhooks', function (req, res) {

   console.log('response');

// template for home page and instatiating variable that contains POST data
  res.render('home', {products});
});


//route for capturing BigCommerce webhook callback
app.post('/webhooks', function (req, res) {

//populate object inside route with contents from BigCommerce callback
  let newProduct = {
    id : req.body.data.id,
    type: req.body.data.type,
    hash: req.body.hash
  };

//add object to global array
  products.push(newProduct);
  res.send(newProduct);
});


// server
app.listen(3000, function (err) {

// check if server initiated
  console.log('we on');
  if (err) {
    throw err }
  })

// TODO: catch duplicates due to WEBHOOKS-46?
