var express = require('express');
var router = express.Router();
const { getAuthor, getDataByAuthor, errorMsg } = require('../utils/utils')
const { authorByName } = require('../utils/query')
const { getDynastyTable } = require('../utils/table')
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
 * @api {get} /api/author 获取作者及作品
 * @apiDescription 获取作者信息及作者诗词曲等相关作品
 * @apiVersion  1.0.0
 * @apiName author
 * @apiGroup Author
 * @apiPermission admin
 * @apiParam {String} name 作者姓名
 * @apiSuccess (200) {Number} status 状态码
 * @apiSuccess (200) {String} id 作者id
 * @apiSuccess (200) {String} name 作者姓名
 * @apiSuccess (200) {String} dynasty 朝代
 * @apiSuccess (200) {String} birthYear 出生年份分
 * @apiSuccess (200) {String} deathYear 死亡年份
 * @apiSuccess (200) {String} desc 作者简介
 * @apiSuccess (200) {Number} total 作品总数
 * @apiSuccess (200) {Object} types 分类作品
 * @apiSuccess (200) {Object} types.shi 诗
 * @apiSuccess (200) {Number} shi.total 诗总数
 * @apiSuccess (200) {Object[]}  shi.contents 诗详情
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "status": 200,
 *    "id": "4cf43776293040fcb4a5289506997f04",
 *    "name": "李白",
 *    "dynasty": "唐",
 *    "birthYear": "701",
 *    "deathYear": "762",
 *    "total": 966,
 *    "desc":"李白，字太白，号青莲居士，唐朝诗人......"
 *    "types":{
 *        "shi":{
 *            "total":955,
 *            "content":[
 *                {
 *                  "title": "月夜金陵怀古",
 *                  "content": "[\"苍苍金陵月，空悬帝王州。\",\"天文列宿在，霸业大江流。\",\"绿水绝驰道，青松摧古丘。\",\"台倾鳷鹊观，宫没凤凰楼。\",\"别殿悲清暑，芳园罢乐游。\",\"一闻歌玉树，萧瑟后庭秋。\"]",
 *                  "intro": "《月夜金陵怀古》是唐代诗人李白创作的一首五言古诗。诗人一生游金陵有七次之多，这首诗是诗人来到金陵（今江苏南京），想到金陵是东晋、东吴、宋、齐、梁、陈六代的故都，曾有过繁荣的景象。而今，六代豪华，空留陈迹，让诗人到此总要抒发一通思古之幽隋，于是就写下了此诗。",
 *                  "translation": null,
 *                  "appreciation": "月光照着南京，诗人不尽悲从中来。星星还是那几颗星星，而金陵的王气却像东流水一样一去不复返了。路之尽头是浩淼的湖水，古墓上的苍松翠柏老态龙钟；昔日那么繁华的妈鹊观、凤凰楼、清暑殿和乐游苑，也都荒废残破，少有人来。萧瑟的秋风中，还可以听到陈后主所作的《玉树后庭花》。\n金陵自三国东吴以来，连续是好几个朝代的首都，在帝王将相的经营下，它的繁华程度和消费水平达到了顶点。东晋在这里定都以后，建造清暑殿，重楼复道，是夏天乘凉的好地方。南朝宋修驰道，一直通到玄武湖，长达十余里。凤凰山上有凤凰楼，覆舟山下有乐游苑，从山南到山北，排列着大大小小的宫观台榭。南朝齐诗人谢眺作诗说：“江南佳丽地，金陵帝王洲。”可见它在当时人们心目中的地位。\n在作为政治中心的金陵，文学艺术也发展繁荣起来。这首先是因为皇帝的提倡，而且好几位皇帝就是文学家或艺术家，在他们周围聚集了大批文士；其次也因为金陵地处江南，民歌流行，艺术土壤丰厚，滋养出华丽璀璨的艺术之花。\n但这一切都成为过去。面对着傲岸的诗人李白，只剩下萧瑟的秋风和素净的月光。秋风里，隐隐传来《韦树后庭花》的乐声，这种靡靡之音，这种亡国之音，这昭示着金陵衰落原因的曲子，现在还在被人唱着！",
 *                  "comment": null,
 *                  "annotation": "[\"苍苍：苍白色。\",\"帝王州：指金陵曾为六朝古都。谢眺诗《入朝曲》\\u201C江南佳丽地，金陵帝王州。\\u201D\",\"列宿：指天上的星宿。\",\"霸业大江流：意思是古代的帝王霸业已似江水一般逝去。\",\"绝：冲断。\",\"驰道：《三辅黄图》：\\u201C驰道，天子所行道也。\\u201D\",\"古丘：指六朝时的陵墓。李白《登金陵凤凰台》有\\u201C晋代衣冠成古丘力\\u201D诗句。全句意思是古墓已坏，长满松树。\",\"台倾鳷鹊观：意思是鹪鹊观楼台已倾坏。一鹩鹊观，六朝时所建宫室，今无考。\",\"宫没凤凰楼：意思是凤凰楼宫室荒投。凤凰楼，在凤凰山上。南朝宋元嘉年间所建。因有风集此，·赦名。\",\"清暑：清暑殿，在台城内，晋孝武帝所建。虽暑月尤有清风，故以为名。（见《景定建康志》）\",\"芳园罢乐游：意思是乐游园里已经没有了游乐。芳园，指游乐园，在覆舟山南，北连山筑台观，苑内造正阳、林光等殿。\",\"玉树：即《玉树后庭花》。\"]"
 *                },
 *                {...},
 *                ...
 *            ]
 *        },
 *        ci:{
 *        
 *        },
 *        qu:{
 *        
 *        }
 *    }
 * }
 * @apiSampleRequest http://localhost:4000/api/author
 */
router.get('/author', function (req, res, next) {
  if (Object.keys(req.query).indexOf("name") !== -1) {
    var author = {
      status: 0,
      id: '',
      name: '',
      dynasty: '',
      birthYear: '',
      deathYear: '',
      desc: '',
      total: 0,
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
    getAuthor(authorByName(req.query), [req.query.name], author).then(resolve => {
      var types = getDynastyTable(resolve.dynasty)
      getDataByAuthor(types.shi, resolve, "shi").then(res_shi => {
        getDataByAuthor(types.ci, res_shi, "ci").then(res_ci => {
          getDataByAuthor(types.qu, res_ci, "qu").then(res_data => {
            res.send(res_data)
          })
        })
      })

    })
  } else {
    res.send(errorMsg)
  }
});

module.exports = router;
