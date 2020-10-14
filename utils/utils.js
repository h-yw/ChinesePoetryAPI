/*
 * @Author       : houyw
 * @Date         : 2020-10-07 14:02:47
 * @LastEditTime : 2020-10-08 15:29:55
 * @FilePath     : /utils/utils.js
 * @Description  : 
 */

const connection = require('../utils/connection')

const errorMsg = {
  status: 501,
  msg: "参数错误"
}
const noFindMsg = {
  status: 502,
  msg: "数据不存在"
}
//const data={}
const getAuthor = function (sql, querys, data) {
  return new Promise((resolve, reject) => {
    connection.query(sql, querys, (err, rows, fileds) => {
      if (err) {
        console.log(err)
        resolve(noFindMsg)
      } else {
        if (rows.length <= 0) {
          resolve(noFindMsg)
        }
        data.id = rows[0].id
        data.name = rows[0].name
        data.dynasty = rows[0].dynasty
        data.birthYear = rows[0].birthYear
        data.deathYear = rows[0].deathYear
        data.desc = rows[0].desc
      }
      data.status = 200
      resolve(data)
    })
  })
}

const getAuthors = function (sql, querys) {
  return new Promise((resolve, reject) => {
    connection.query(sql, querys, (err, rows, fileds) => {
      if (err) {
        resolve(err)
        //connection.release()
      }

      resolve({ status: 200, totla: rows.length, authors: rows })
      // connection.release()
    })
  })
}

const getDataByAuthor = function (type, data, typeN) {
  if (!type) {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  } else {
    return new Promise((resolve, reject) => {
      console.log('type:', type)
      const sql_poetry = "select  appreciation,title,content,comment,translation,intro,annotation from shici." + type + " where shici." + type + ".authorId = '" + data.id + "'"
      connection.query(sql_poetry, (err, rows, fileds) => {

        data.types[typeN].contents = []
        if (err) {
          console.log(err)
        } else {
          data.types[typeN].total = rows.length
          data.total += data.types[typeN].total
          rows.map(item => {
            data.types[typeN].contents.push({
              title: item.title,
              content: item.content,
              intro: item.intro,
              translation: item.translation,
              appreciation: item.appreciation,
              comment: item.comment,
              annotation: item.annotation
            })
          })
        }
        resolve(data)
      })
    })
  }

}

const getShi = function (sql, querys, data) {

}
const getCi = function (sql, querys, data) {

}
const getQu = function (sql, querys, data) {

}
module.exports = { getAuthor, getAuthors, getDataByAuthor, errorMsg }
