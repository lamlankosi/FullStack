import { createPool } from "mysql2";
import 'dotenv/config'

const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    database: process.env.dbName,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30
})

connection.on('connection', (pool) => {
    if(!pool) throw new Error('unable to connect to the database, please try again later')
    })

export {
    connection 
}