const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const lists = require('./routes/api/lists')
const todos = require('./routes/api/todos')

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// config database key
const db = require('./config/keys').mongoURI;


// connect mongoDB
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err =>console.log(err));


// use route
app.use('/api/lists', lists);
app.use('/api/todos', todos);





const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server running on port ${port}`));