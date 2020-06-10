const express = require('express');
const app = express();
const { sequelize } = require('./models/index');
const cors = require('cors');

// Settings
const PORT = process.env.APP_PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Rutas
app.use(express.static('public'));
app.use(require('./routes'));

app.listen(PORT, function () {
  console.log(`Example app listening on http://localhost:${PORT}!`);

  sequelize.authenticate().then(() => {
      console.log('Nos hemos conectado a la base de datos!!!!!');
  })
});