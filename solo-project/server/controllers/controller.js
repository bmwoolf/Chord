const db = require('../models/userModel')

const controller = {}; 


controller.addUser = (req, res, next) => {
    const {firstname, lastname, username, password} = req.body;
    // console.log(document.getElementsById('firstname').value)
    console.log('req.body',req.body)

    const query = `
    INSERT INTO users (firstname, lastname, username, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *`

    const values = [firstname, lastname, username, password]

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(`Error in controller.addUser ${err}`);
            res.status(500);
        }
        //send them to the second page
        return next();
    })
}

// controller.verifyUser = (req, res, next) => {
//     //we are going to get a users' info from login in req.body
//     //we want to send a query to the database
//     const query = `SELECT loginUsername, loginPassword FROM users`

//     db.query()
// }

module.exports = controller;