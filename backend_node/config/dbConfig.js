//dbCongif.js

const mysql = require('mysql');

const dbConfig = {
    host:'localhost',
    user:'root',
    password:'prab@31092PCS',
    database:'tourism',
    port: 3306,
};



const connection = mysql.createConnection(dbConfig);
// connection.connect((err) => {
//     if(err){
//         console.log("Some Error",err);
//         return;
//     }
//     console.log('Connected to Database');
// })

module.exports = connection;