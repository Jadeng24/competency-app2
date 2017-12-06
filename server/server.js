require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller.js');

const app = express();
app.use(express.static(`${__dirname}/../../build`));

app.use(bodyParser.json());

app.use(cors());
//session 
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//masive db
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('You are connected to the database!');
}).catch(err => console.log('error of ' + err))

//=====| ENDPOINTS |==================================

app.get('/api/getallanimals', controller.getAll);

//delete
app.delete('/deleteitem/:id', controller.deleteItem);




const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));