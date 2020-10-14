/*
 * @Author       : houyw
 * @Date         : 2020-09-29 10:15:53
 * @LastEditTime : 2020-09-29 11:26:46
 * @FilePath     : /utils/table.js
 * @Description  : 
 */


const type = {
  shi: {
    han: 'shi_han',
    jin_sima: 'shi_jin_sima',
    jin_wanyan: 'shi_jin_wanyan',
    ming: 'shi_ming',
    nanbei: 'shi_nanbei',
    qin: 'shi_qin',
    qing: 'shi_qing',
    sanguo: 'shi_sanguo',
    song: 'shi_song',
    sui: 'shi_sui',
    tang: 'shi_tang',
    wudaishiguo: 'shi_wudaishiguo',
    yuan: 'shi_yuan'
  },
  ci: {
    jin_wanyan: 'ci_jin_wanyan',
    ming: 'ci_ming',
    nanbei: 'ci_nanbei',
    qing: 'ci_qing',
    song: 'ci_song',
    tang: 'ci_tang',
    wudaishiguo: 'ci_wudaishiguo',
    yuan: 'ci_yuan',
  },
  qu: {
    jin_wanyan: 'qu_jin_wanyan',
    ming: 'qu_ming',
    qing: 'qu_qing',
    song: 'qu_song',
    yuan: 'qu_yuan',
  }
}
const dynasty = {
  qin: {
    shi: 'shi_qin',
    ci: '',
    qu: ''
  },
  han: {
    shi: 'shi_han',
    ci: '',
    qu: ''
  },
  sanguo: {
    shi: 'shi_sanguo',
    ci: '',
    qu: ''
  },
  jin_sima: {
    shi: 'shi_jin_sima',
    ci: '',
    qu: ''
  },
  sui: {
    shi: 'shi_sui',
    ci: '',
    qu: ''
  },
  jin_wanyan: {
    shi: 'shi_jin_wanyan',
    ci: 'ci_jin_wanyan',
    qu: ''
  },
  wudaishiguo: {
    shi: 'shi_wudaishiguo',
    ci: 'ci_wudaishiguo',
    qu: ''
  },
  tang: {
    shi: 'shi_tang',
    ci: 'ci_tang',
    qu: ''
  },
  song: {
    shi: 'shi_song',
    ci: 'ci_song',
    qu: ''
  },
  yuan: {
    shi: 'shi_yuan',
    ci: 'ci_yuan',
    qu: 'qu_yuan'
  },
  ming: {
    shi: 'shi_ming',
    ci: 'ci_ming',
    qu: 'qu_ming',
  },
  qing: {
    shi: 'shi_qing',
    ci: 'ci_qing',
    qu: 'qu_qing',

  },
  nanbei: {
    shi: 'shi_nanbei',
    ci: 'ci_nanbei',
    qu: ''
  }
}
const getDynastyTable = function (dy) {
  switch (dy) {
    case "秦":
      return dynasty.qin;

    case "隋":

      return dynasty.sui;

    case "宋":

      return dynasty.song;

    case "唐":

      return dynasty.tang;

    case "三国":

      return dynasty.sanguo;

    case "五代十国":
      return dynasty.wudaishiguo;

    case "南北朝":
      return dynasty.nanbei;

    case "商":
      // return dynasty; 
      break;
    case "辽":
      //return dynasty;
      break;
    case "金":
      return dynasty.jin_wanyan;

    case "周":
      //return dynasty;
      break;
    case "清":
      return dynasty.qing;

    case "晋":
      return dynasty.jin_sima;

    case "元":
      return dynasty.yuan;

    case "明":
      return dynasty.ming;

    case "汉":
      return dynasty.han;

    case "秦":
      return dynasty.qin;

    case "上古":
      //return dynasty;
      break;
    default:
      break;
  }
}
module.exports = { type, dynasty, getDynastyTable }
