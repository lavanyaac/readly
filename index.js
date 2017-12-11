const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function(req, res) {
	console.log('Logging********')
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
