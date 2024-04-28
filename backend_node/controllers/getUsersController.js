//getUsersController.js

const connection = require('../config/dbConfig');

function getUsers(req,res){
    const query = 'SELECT * from users';
    connection.query(query, (err, result) => {
        if(err){
            console.log("Error Executing query:", err);
            res.status(500).json({error: 'Internal Server error!'});
            return;
        }
        res.json(result);
    });
}

module.exports = {
    getUsers
};