const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  let person1 = {
    name: 'Austin',
    age: 32,
    hair: 'brown'
  }
  let person2 = {
    name: 'Lauren',
    age: 30,
    hair: 'brown'
  }
  res.render('main', {person1, person2});
});

app.listen(3000, function() {
  console.log('Your server has started on PORT 3000.');
});
