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

//connect to mongodb via url
mongoose.connect("mongodb://localhost:27017/mydb",
	{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//check if user exists in db
app.post('/api/login', (req, res) => {
    const requestData = req.body;
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
        }
      })
      .catch((err) => {
        console.log(err);
      })
    });

app.post('/api/register', (req, res) => {

    //create new user with mongoose schema
    const newUser = new User({username: req.body.username, email: req.body.email, password: req.body.password})
    
    //save user to db
    newUser.save()
    .then(() => console.log('Data saved to MongoDB!'))
    .catch(err => console.error('Error saving data to MongoDB:', err));

    //send response
    const responseData = { message: 'Created User' };
    res.json(responseData);
});

app.post('/api/meeting', (req, res) => {
const meeting = new Meeting({title: req.body.title, description: req.body.description, startTime: req.body.startDate, endTime: req.body.endDate})
meeting.save()
});

//start webserver
var port = process.env.PORT || '3000'
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})