const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(9000, function() {
    console.log('Listening on :9000');
});

