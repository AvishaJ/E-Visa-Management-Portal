const express = require('express');
const Visa = require('./Routes/visa');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/esd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to ESD database...'))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', Visa);

app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message });
});

app.listen(3000);