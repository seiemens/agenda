const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
User = require('./models/user');
Meeting = require('./models/meeting');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mydb",
	{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/api/login', (req, res) => {
    const requestData = req.body;
    
    console.log(requestData); 
    User.findOne({ username: req.body.username, password: req.body.password }) 
        .then((user) => {
        if (!user) {
          // User not found
          res.status(404).send();
          console.log('User not found');
        } else {
          // User found
          res.json(user);
          console.log('User found:', user);
          // Redirect to the dashboard or perform any other action
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle the error
      })
    });

app.post('/api/register', (req, res) => {
    
    const requestData = req.body;
    console.log(req.body)
    const newUser = new User({username: req.body.username, email: req.body.email, password: req.body.password})
    
    newUser.save()
    .then(() => console.log('Data saved to MongoDB!'))
    .catch(err => console.error('Error saving data to MongoDB:', err));
    const responseData = { message: 'Created User' };
    res.json(responseData);
});

var port = process.env.PORT || '3000'
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})