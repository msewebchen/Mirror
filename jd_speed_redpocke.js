/*
京东极速版红包
自动提现微信现金
更新时间：2021-5-31
活动时间：2021-4-6至2021-5-30
活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html
活动入口：京东极速版-领红包
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东极速版红包
20 0,22 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "20 0,22 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js,tag=京东极速版红包

===============Surge=================
京东极速版红包 = type=cron,cronexp="20 0,22 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js

============小火箭=========
京东极速版红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, cronexpr="20 0,22 * * *", timeout=3600, enable=true
*/

const $ = new Env('京东极速版红包');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [], cookie = '', message;
const linkId = "AkOULcXbUA_8EAPbYLLMgg";
const signLinkId = '9WA12jYGulArzWS7vcrwhw';

if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  if (JSON.stringify(process.env).indexOf('GITHUB') > -1) process.exit(0);
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      console.log(`\n如提示活动火爆,可再执行一次尝试\n`);
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jsRedPacket()
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })

async function jsRedPacket() {
  try {
    await invite();
    await sign();//极速版签到提现
    await reward_query();
    for (let i = 0; i < 3; ++i) {
      await redPacket();//开红包
      await $.wait(500)
    }
    await getPacketList();//领红包提现
    await signPrizeDetailList();
    await showMsg()
  } catch (e) {
    $.logErr(e)
  }
}


function showMsg() {
  return new Promise(resolve => {
    if (message) $.msg($.name, '', `京东账号${$.index}${$.nickName}\n${message}`);
    resolve()
  })
}
async function sign() {
  return new Promise(resolve => {
    const body = {"linkId":signLinkId,"serviceName":"dayDaySignGetRedEnvelopeSignService","business":1};
    const options = {
      url: `https://api.m.jd.com`,
      body: `functionId=apSignIn_day&body=${escape(JSON.stringify(body))}&_t=${+new Date()}&appid=activities_platform`,
      headers: {
        'Cookie': cookie,
        "Host": "api.m.jd.com",
        'Origin': 'https://daily-redpacket.jd.com',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "jdltapp;iPhone;3.3.2;14.5.1network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone13,2;addressid/137923973;hasOCPay/0;appBuild/1047;supportBestPay/0;pv/467.11;apprpd/MyJD_Main;",
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8",
        'Referer': 'https://daily-redpacket.jd.com/?activityId=9WA12jYGulArzWS7vcrwhw',
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = $.toObj(data);
            if (data.code === 0) {
              if (data.data.retCode === 0) {
                message += `极速版签到提现：签到成功\n`;
                console.log(`极速版签到提现：签到成功\n`);
              } else {
                console.log(`极速版签到提现：签到失败:${data.data.retMessage}\n`);
              }
            } else {
              console.log(`极速版签到提现：签到异常:${JSON.stringify(data)}\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function reward_query() {
  return new Promise(resolve => {
    $.get(taskGetUrl("spring_reward_query", {
      "inviter": ["QjbG7npj44R73JIjks18BQ", "cm56tNtI6Wp-BMwsuR6FyXjHnoIMIapaw7Ql0pR0zus"][Math.floor((Math.random() * 2))],
      linkId
    }), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.code === 0) {

            } else {
              console.log(data.errMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function redPacket() {
  return new Promise(resolve => {
    $.get(taskGetUrl("spring_reward_receive",{"inviter":["hJyuwiDvDEc5-jIeec4Iyg","r3yIDGE86HSsdtyFlrPHJHu_0mNpX_AnBREYO-c3BFY"][Math.floor((Math.random()*2))],linkId}),
        async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} API请求失败，请检查网路重试`)
            } else {
              if (safeGet(data)) {
                data = JSON.parse(data);
                if (data.code === 0) {
                  if (data.data.received.prizeType !== 1) {
                    message += `获得${data.data.received.prizeDesc}\n`
                    console.log(`获得${data.data.received.prizeDesc}`)
                  } else {
                    console.log("获得优惠券")
                  }
                } else {
                  console.log(data.errMsg)
                }
              }
            }
          } catch (e) {
            $.logErr(e, resp)
          } finally {
            resolve(data);
          }
        })
  })
}

function getPacketList() {
  return new Promise(resolve => {
    $.get(taskGetUrl("spring_reward_list",{"pageNum":1,"pageSize":100,linkId,"inviter":""}), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.code === 0) {
              for(let item of data.data.items.filter(vo => vo.prizeType===4)){
                if(item.state===0){
                  console.log(`去提现${item.amount}微信现金`)
                  message += `提现${item.amount}微信现金，`
                  await cashOut(item.id,item.poolBaseId,item.prizeGroupId,item.prizeBaseId)
                }
              }
            } else {
              console.log(data.errMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function signPrizeDetailList() {
  return new Promise(resolve => {
    const body = {"linkId":signLinkId,"serviceName":"dayDaySignGetRedEnvelopeSignService","business":1,"pageSize":20,"page":1};
    const options = {
      url: `https://api.m.jd.com`,
      body: `functionId=signPrizeDetailList&body=${escape(JSON.stringify(body))}&_t=${+new Date()}&appid=activities_platform`,
      headers: {
        'Cookie': cookie,
        "Host": "api.m.jd.com",
        'Origin': 'https://daily-redpacket.jd.com',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "jdltapp;iPhone;3.3.2;14.5.1network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone13,2;addressid/137923973;hasOCPay/0;appBuild/1047;supportBestPay/0;pv/467.11;apprpd/MyJD_Main;",
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8",
        'Referer': 'https://daily-redpacket.jd.com/?activityId=9WA12jYGulArzWS7vcrwhw',
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = $.toObj(data);
            if (data.code === 0) {
              if (data.data.code === 0) {
                const list = (data.data.prizeDrawBaseVoPageBean.items || []).filter(vo => vo['prizeType'] === 4 && vo['prizeStatus'] === 0);
                for (let code of list) {
                  console.log(`极速版签到提现，去提现${code['prizeValue']}现金\n`);
                  message += `极速版签到提现，去提现${code['prizeValue']}微信现金，`
                  await apCashWithDraw(code['id'], code['poolBaseId'], code['prizeGroupId'], code['prizeBaseId']);
                }
              } else {
                console.log(`极速版签到查询奖品：失败:${JSON.stringify(data)}\n`);
              }
            } else {
              console.log(`极速版签到查询奖品：异常:${JSON.stringify(data)}\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function apCashWithDraw(id, poolBaseId, prizeGroupId, prizeBaseId) {
  return new Promise(resolve => {
    const body = {
      "linkId": signLinkId,
      "businessSource": "DAY_DAY_RED_PACKET_SIGN",
      "base": {
        "prizeType": 4,
        "business": "dayDayRedPacket",
        "id": id,
        "poolBaseId": poolBaseId,
        "prizeGroupId": prizeGroupId,
        "prizeBaseId": prizeBaseId
      }
    }
    const options = {
      url: `https://api.m.jd.com`,
      body: `functionId=apCashWithDraw&body=${escape(JSON.stringify(body))}&_t=${+new Date()}&appid=activities_platform`,
      headers: {
        'Cookie': cookie,
        "Host": "api.m.jd.com",
        'Origin': 'https://daily-redpacket.jd.com',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "jdltapp;iPhone;3.3.2;14.5.1network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone13,2;addressid/137923973;hasOCPay/0;appBuild/1047;supportBestPay/0;pv/467.11;apprpd/MyJD_Main;",
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8",
        'Referer': 'https://daily-redpacket.jd.com/?activityId=9WA12jYGulArzWS7vcrwhw',
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = $.toObj(data);
            if (data.code === 0) {
              if (data.data.status === "310") {
                console.log(`极速版签到提现现金成功！`)
                message += `极速版签到提现现金成功！`;
              } else {
                console.log(`极速版签到提现现金：失败:${JSON.stringify(data)}\n`);
              }
            } else {
              console.log(`极速版签到提现现金：异常:${JSON.stringify(data)}\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
function cashOut(id,poolBaseId,prizeGroupId,prizeBaseId,) {
  let body = {
    "businessSource": "SPRING_FESTIVAL_RED_ENVELOPE",
    "base": {
      "id": id,
      "business": null,
      "poolBaseId": poolBaseId,
      "prizeGroupId": prizeGroupId,
      "prizeBaseId": prizeBaseId,
      "prizeType": 4
    },
    linkId,
    "inviter": ""
  }
  return new Promise(resolve => {
    $.post(taskPostUrl("apCashWithDraw",body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            console.log(`提现零钱结果：${data}`)
            data = JSON.parse(data);
            if (data.code === 0) {
              if (data['data']['status'] === "310") {
                console.log(`提现成功！`)
                message += `提现成功！\n`;
              } else {
                console.log(`提现失败：${data['data']['message']}`);
                message += `提现失败：${data['data']['message']}`;
              }
            } else {
              console.log(`提现异常：${data['errMsg']}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}


/*
 *Progcessed By JSDec in 0.01s
 *JSDec - JSDec.js.org
 */
function invite() {
    var _0x4c359b = {
        'BDyjj': 'sMWcZ7TKaEBlU%2F%2FQsVkItw%3D%3D',
        'CzkXt': 'sMWcZ7TKaEBlU%2F%2FQsVkItw%3D%3D',
        'olBdu': 'X6BLtZKxx%2BikABCqvZBocS5IRQlTziSkNyv4iNJVUFI%3D',
        'OJbOL': 'sMWcZ7TKaEBlU//QsVkItw==',
        'MSPXS': 'sMWcZ7TKaEBlU//QsVkItw==',
        'vBVQg': 'sMWcZ7TKaEBlU//QsVkItw==',
        'nXJoY': 'sMWcZ7TKaEBlU//QsVkItw==',
        'MAoNJ': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'eWHDf': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'MNwBw': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'GLxTr': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'RqcOc': 'X6BLtZKxx+ikABCqvZBocS5IRQlTziSkNyv4iNJVUFI=',
        'ajCQw': function(_0x2cce24, _0x562d5d) {
            return _0x2cce24 * _0x562d5d;
        },
        'qkXko': 'api.m.jd.com',
        'DPrdZ': 'application/json, text/plain, */*',
        'mUpSd': 'https://invite-reward.jd.com',
        'zUNfV': 'zh-cn',
        'HIayc': function(_0x1a1b78, _0x43fb04) {
            return _0x1a1b78(_0x43fb04);
        },
        'lvRJs': './JS_USER_AGENTS',
        'rHUPU': 'JSUA',
        'qpZEp': 'https://invite-reward.jd.com/',
        'tRmYc': function(_0x368db7, _0x25c256) {
            return _0x368db7(_0x25c256);
        }
    };
    let _0x2448b2 = +new Date();
    let _0x157083 = ['sMWcZ7TKaEBlU//QsVkItw==', _0x4c359b['BDyjj'], _0x4c359b['CzkXt'], _0x4c359b['olBdu'], _0x4c359b['OJbOL'], _0x4c359b['MSPXS'], _0x4c359b['OJbOL'], _0x4c359b['vBVQg'], _0x4c359b['nXJoY'], _0x4c359b['MAoNJ'], 'sMWcZ7TKaEBlU//QsVkItw==', _0x4c359b['eWHDf'], _0x4c359b['MNwBw'], _0x4c359b['GLxTr'], 'sMWcZ7TKaEBlU//QsVkItw==', 'sMWcZ7TKaEBlU//QsVkItw==', _0x4c359b['RqcOc']][Math['floor'](_0x4c359b['ajCQw'](Math['random'](), 0x11))];
    var _0x57e37a = {
        'Host': _0x4c359b['qkXko'],
        'accept': _0x4c359b['DPrdZ'],
        'content-type': 'application/x-www-form-urlencoded',
        'origin': _0x4c359b['mUpSd'],
        'accept-language': _0x4c359b['zUNfV'],
        'user-agent': $['isNode']() ? process['env']['JS_USER_AGENT'] ? process['env']['JS_USER_AGENT'] : _0x4c359b['HIayc'](require, _0x4c359b['lvRJs'])['USER_AGENT'] : $['getdata']('JSUA') ? $['getdata'](_0x4c359b['rHUPU']) : '\'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'referer': _0x4c359b['qpZEp'],
        'Cookie': cookie
    };
    var _0x4f674b = 'functionId=InviteFriendApiService&body={\"method\":\"attendInviteActivity\",\"data\":{\"inviterPin\":\"' + _0x4c359b['tRmYc'](encodeURIComponent, _0x157083) + '","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=' + _0x2448b2;
    var _0x5ab1fc = {
        'url': 'https://api.m.jd.com/?t=' + +new Date(),
        'headers': _0x57e37a,
        'body': _0x4f674b
    };
    $['post'](_0x5ab1fc, (_0x727473, _0x590d22, _0x35ad09) => {});
};
_0xod6 = 'jsjiami.com.v6'


function taskPostUrl(function_id, body) {
  return {
    url: `https://api.m.jd.com/`,
    body: `appid=activities_platform&functionId=${function_id}&body=${escape(JSON.stringify(body))}&t=${+new Date()}`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Accept': '*/*',
      'Connection': 'keep-alive',
      // 'user-agent': $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./JS_USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'user-agent': "jdltapp;iPhone;3.3.2;14.3;b488010ad24c40885d846e66931abaf532ed26a5;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/2005183373;hasOCPay/0;appBuild/1049;supportBestPay/0;pv/220.46;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/b488010ad24c40885d846e66931abaf532ed26a5|520;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1618673222002|1618673227;adk/;app_device/IOS;pap/JA2020_3112531|3.3.2|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1 ",
      'Accept-Language': 'zh-Hans-CN;q=1,en-CN;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': "application/x-www-form-urlencoded",
      "referer": "https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html"
    }
  }
}


function taskGetUrl(function_id, body) {
  return {
    url: `https://api.m.jd.com/?appid=activities_platform&functionId=${function_id}&body=${escape(JSON.stringify(body))}&t=${+new Date()}`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Accept': '*/*',
      'Connection': 'keep-alive',
      'user-agent': $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./JS_USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Accept-Language': 'zh-Hans-CN;q=1,en-CN;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': "application/x-www-form-urlencoded",
      "referer": "https://an.jd.com/babelDiy/Zeus/q1eB6WUB8oC4eH1BsCLWvQakVsX/index.html"
    }
  }
}

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
