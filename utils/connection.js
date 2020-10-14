/*
 * @Author       : houyw
 * @Date         : 2020-09-28 21:22:47
 * @LastEditTime : 2020-10-08 15:54:33
 * @FilePath     : /utils/connection.js
 * @Description  : 
 */


const mysql = require('mysql')
const { connect } = require('../routes/author')
const host = 'localhost'
const port = 3306
const user = 'root'
const password = 'root'
const database = 'shici'
const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
  port
})

connection.connect(err => {
  if (err) {
    console.log(err);
    return
  }
})
module.exports = connection
