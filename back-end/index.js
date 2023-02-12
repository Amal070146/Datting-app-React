const express = require('express');
const mogoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/User');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(cors());

app.use('/user',userRoutes);

mogoose.connect('mongodb+srv://admin:admin@cluster0.mfiavh0.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log("the database is connnected successfully");

})

app.listen(port,()=>{
    console.log(`the app is running on port ${port}`);
})
