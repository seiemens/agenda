const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
Person = require('./models/person');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mydb",
	{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const myData = new Person({ name: 'John', age: 30, email: 'john@example.com' });

myData.save()
.then(() => console.log('Data saved to MongoDB!'))
.catch(err => console.error('Error saving data to MongoDB:', err));

app.post('/api/login', (req, res) => {
    const requestData = req.body;
    console.log(requestData); 
    const responseData = { message: 'Request received!' };
    res.json(responseData);
});

var port = process.env.PORT || '3000'
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})