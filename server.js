const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(9000, function() {
    console.log('Listening on :9000');
});

