//authController.js
const connection = require('../config/dbConfig');

function login(req,res) {
    console.log("request",req.body);
    const { email, password } = req.body;

    const query = `SELECT * FROM users WHERE email = '${email}' and password = '${password}'`;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
      
          if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
          }
          req.session.user = results[0];
          res.status(200).send({ code: 200, message: "Login successful", data: results[0] });
          //res.json({ message: 'Login successful', user: results[0] });
    });
}

function logout(req,res){
    req.session.destroy();
    res.json({message: 'Logout Success '});
}

module.exports ={
    login: login,
    logout: logout
}