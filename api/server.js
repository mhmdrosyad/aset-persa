const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const handleErrors = require('./middlewares/errorHandler');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);
app.use(handleErrors);

app.listen(port, () => {
    console.log(`REST API listening at http://localhost:${port}`);
});