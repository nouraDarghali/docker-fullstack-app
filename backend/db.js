const mysql = require("mysql2"); 
require("dotenv").config(); 
const connection = mysql.createConnection({ 
host: process.env.MYSQL_HOST, // Nom du service Docker 
user: process.env.MYSQL_USER, 
password: process.env.MYSQL_PASSWORD, 
database: process.env.MYSQL_DATABASE, 
}); 
connection.connect((err) => { 
if (err) { 
console.error("Erreur de connexion à la base de données : ", err); 
return; 
} 
console.log("Connecté à la base de données MySQL !"); 
}); 
module.exports = connection; 