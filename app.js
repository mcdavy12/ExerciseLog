require("dotenv").config();
let express = require('express');
let app = express();



// import our database connection from the db.js file
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
// const { databaseVersion } = require('./db');


// connect with the locally running postgres database to allow us to bth get and send
// data to our postgres server.
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json())

app.use("/user", user)




app.listen(3001, function() {
    console.log('App is listening on port 3000');
})