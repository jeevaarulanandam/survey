const express = require('express');
const mongoose = require('mongoose');
const keys = require('./configs/keys');

require('./services/passport');
require('./models/User');

const app = express();

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
});

/**
 * <code>
 * const authRoutes = require('./routes/authRoutes');
 * these line written as
 * authRoutes(app);
 * 
 * Pass the app to authRoutes.So authRoutes can access the app object
 */

require('./routes/authRoutes')(app)

app.get('/mylife', (req, res) => {
    res.send({
        test: "Ave Maria"
    })
});

app.get('/', (req, res) => {
    res.send({
        test: "Hello World"
    })
});

const PORT = process.env.PORT || 5000
app.listen(5000);