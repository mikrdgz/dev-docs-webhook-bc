const express = require('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var router = express.Router();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let friends = [
    {
      name: 'juvi'
    },
    {
      name: 'laura'
    },
    {
    name: 'theo'
  }
];


app.get('/webhooks', function (req, res) {
   // console.log('get the request');
   // console.log(req.body.data);
   // console.log('get the response');
   // console.log(res);
   console.log('gotten resposne');
  res.render('home', {friends});
});


//
// app.post('/webhooks', function (req, res) {
//       console.log(req.body)
//       res.status(200).send(res.body);
//
//   })


app.post('/webhooks', function (req, res) {
  console.log('post req data');
  console.log(req.body.data);
  let newFriend = { name : req.body.data.id };
  friends.push(newFriend);
  console.log(friends);
  res.send(newFriend);

  // const responsebody = res;
  // const meow = 'theo';
  // console.log(responsebody);
  // res.render('home', {
  //   responseBodyody: responsebody,
  //   cat: meow
  // }).status(200);
});


app.listen(3000, function (err) {
  console.log('we on');
  if (err) {
    throw err }
  })
