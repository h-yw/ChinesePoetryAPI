var express = require('express');
var router = express.Router();
const { getAuthors, errorMsg } = require('../utils/utils')
const { authorsByPage } = require('../utils/query')
/* GET users listing. */
const author = {
  id: '',
  name: '',
  dynasty: '',
  birthYear: '',
  deathYear: '',
  desc: ''
}
/**
 * @api {get} /api/authorlist 作者分页
 * @apiDescription 分页作者列表
 * @apiVersion  1.0.0
 * @apiName authorlist
 * @apiGroup Author
 * @apiPermission admin
 * @apiParam {Number} page 页码，例：page=1
 * @apiParam  {Number} offset 每页数量，
 * @apiSuccess (200) {Number} status 状态码
 * @apiSuccess (200) {Number} total 检索总数
 * @apiSuccess (200) {Object[]} authors 作者列表
 * @apiSuccess (200) {String} id 作者id
 * @apiSuccess (200) {String} name 作者姓名
 * @apiSuccess (200) {String} dynasty 朝代
 * @apiSuccess (200) {String} birthYear 出生年份分
 * @apiSuccess (200) {String} deathYear 死亡年份
 * @apiSuccess (200) {String} desc 作者简介
 * @apiSampleRequest http://localhost:4000/api/authorlist
 */
router.get('/authorlist', function (req, res, next) {
  if (Object.keys(req.query).indexOf("page") !== -1 && Object.keys(req.query).indexOf("offset") !== -1) {
    var start = (parseInt(req.query.page) - 1) * parseInt(req.query.offset)
    getAuthors(authorsByPage(req.query), [start, parseInt(req.query.offset)]).then(resolve => {
      res.send(resolve)
    })
  } else {
    res.send(errorMsg)
  }
})

module.exports = router;
