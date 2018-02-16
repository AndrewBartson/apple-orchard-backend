let express = require('express');
let app = express();
let morgan = require('morgan');
let cors = require('cors');
let bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
let knex = require('./db');

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let routes = require('./routes');
app.use(routes.trees);
app.use(routes.sites);
app.use(routes.species);
app.use(routes.users);
app.use(routes.varieties);
app.use(routes.notes);
app.use(routes.species_sites)

// runs if flow of control gets here
app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})
// runs whenever next is called with a parameter, not empty.
app.use((err, req, res, next) => {
  //console.log('err.status - ', err.status);
  res.status(500).json({error: err })
})

let listener = () => console.log(`Listening on port ${PORT}`);
app.listen(PORT, listener);

// export the app so we can run tests -
module.exports = app;
