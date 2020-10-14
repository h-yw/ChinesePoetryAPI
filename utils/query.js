/*
 * @Author       : houyw
 * @Date         : 2020-09-29 10:01:38
 * @LastEditTime : 2020-10-07 18:52:33
 * @FilePath     : /utils/query.js
 * @Description  : 
 */


const authorByName = function (query) {
  console.log(query)
  if (Object.keys(query).indexOf("name") !== -1) {

    return "select * from authors where name= ?"
  }
}
const authorsByPage = function (query) {
  if (Object.keys(query).indexOf("page") !== -1 && Object.keys(query).indexOf("offset") !== -1) {
    return "select * from authors limit ?,?"
  }
}
const authorsByDynasty = function (query) {
  if (Object.keys(query).indexOf("dynasty") !== -1) {
    return "select * from authors where dynasty=?"
  }
}
const queryOfFuzzy = function (query) {

}
const sql_poetry = {

}
const shici_data = {
  id: '',
  name: '',
  dynasty: '',
  birthYear: '',
  deathYear: '',
  desc: '',
  poetryTotal: 0,
  //contents: [],
  types: {
    shi: {
      total: 0,
      contents: []
    },
    ci: {
      total: 0,
      contents: []
    },
    qu: {
      total: 0,
      contents: []
    }
  }
}
module.exports = { authorByName, authorsByPage, authorsByDynasty }
