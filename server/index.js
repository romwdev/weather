const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.json());

const port = 3000;

const router = require('./routes/routes');

app.use('/api', router);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
})