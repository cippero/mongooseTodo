//const db         = require('./models');
const express    = require('express'),
bodyParser       = require('body-parser');
const path       = require('path');
const logger     = require('morgan');
const app        = express();
const indexRoute = require("./routes/index");
const mongoose   = require('mongoose');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);

// const port = 3000;

// app.listen(port, ()=> {
//   console.log(`App is running on ${port}`);
// });

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})