var express = require('express');
var router = express.Router();
const { getAuthor, getAuthors, getDataByAuthor, errorMsg } = require('../utils/utils')
const { authorByName, authorsByPage, authorsByDynasty } = require('../utils/query')
const { getDynastyTable } = require('../utils/table')

const author = {
  id: '',
  name: '',
  dynasty: '',
  birthYear: '',
  deathYear: '',
  desc: ''
}
/**
 * @api {get} /api/dynasty 根据朝代检索作者
 * @apiDescription 根据朝代检索作者
 * @apiVersion  1.0.0
 * @apiName dynasty
 * @apiGroup Author
 * @apiPermission admin
 * @apiParam {string} dynasty 朝代，例：dynasty=唐
 * @apiSuccess (200) {Number} status 状态码
 * @apiSuccess (200) {Number} total 检索总数
 * @apiSuccess (200) {Object[]} authors 作者列表
 * @apiSuccess (200) {String} id 作者id
 * @apiSuccess (200) {String} name 作者姓名
 * @apiSuccess (200) {String} dynasty 朝代
 * @apiSuccess (200) {String} birthYear 出生年份分
 * @apiSuccess (200) {String} deathYear 死亡年份
 * @apiSuccess (200) {String} desc 作者简介
 * @apiSampleRequest http://localhost:4000/api/dynasty
 */
router.get('/dynasty', function (req, res, next) {
  if (Object.keys(req.query).indexOf("dynasty") !== -1) {
    getAuthors(authorsByDynasty(req.query), [req.query.dynasty], author).then(resolve => {
      res.send(resolve)
    })
  } else {
    res.send(errorMsg)
  }
})

module.exports = router;
