const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
// create express app
const app = express();
app.use(cors())
// Setup server port
const port = process.env.PORT || 5000;
// // Tryin' to handle CORS
// app.use( function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Require bank routes
const bankRoutes = require('./src/routes/bank.routes')
// using as middleware
app.use('/api/v1/banks', bankRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});