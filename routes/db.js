const mysql = require ('mysql2');

const config = {
    host :'localhost',
    port: 3306,
    database: 'backend3',
    user: 'root',
    password: 'Ecdeee5dj'

};

const connection = mysql.createConnection(config);

connection.connect((err)=> {
    if(err){
        console.log("Error connecting to MySQL database", err);
    }else{
        console.log("Connected to MySQL database sucess")
    }
})

connection.end();