const express = require("express");
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

//Rutas
app.use(require('./routes/index'));
app.use('/api/admin', require('./routes/admin'));



app.listen(app.get('port'),()=>{
  console.log(`Server listening on port ${app.get('port')}`);
});
