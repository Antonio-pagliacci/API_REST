import mysql from "mysql";

const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_copa'
})

conn.connect()

export default conn;
