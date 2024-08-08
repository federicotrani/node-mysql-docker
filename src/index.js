import express from 'express'
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config()

const app = express();

const pool = createPool({
    host: 'mysqldb', //process.env.MARIADB_HOST,
    user: 'root', //process.env.MARIADB_USER,
    password: '123456', //process.env.MARIADB_ROOT_PASSWORD,
    port: '3306' //process.env.MARIADB_PORT
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/ping', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(process.env.NODE_DOCKER_PORT)
console.log('Server en port',process.env.NODE_DOCKER_PORT)