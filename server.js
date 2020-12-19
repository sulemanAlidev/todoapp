const express = require('express');
const mongoose = require('mongoose');
const lists = require('./routes/api/lists')

const app = express();

// config database key
const db = require('./config/keys').mongoURI;


// connect mongoDB
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err =>console.log(err));


// use route
app.use('/api/lists', lists);




const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`server running on port ${port}`));