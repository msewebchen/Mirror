/*
 * @Author: lxk0301 https://gitee.com/lxk0301
 * @Date: 2020-08-16 18:54:16
 * @Last Modified by: lxk0301
 * @Last Modified time: 2021-3-4 21:22:37
 */
/*
东东超市
活动入口：京东APP首页-京东超市-底部东东超市
Some Functions Modified From https://github.com/Zero-S1/JD_tools/blob/master/JD_superMarket.py
东东超市兑换奖品请使用此脚本 https://gitee.com/lxk0301/jd_scripts/raw/master/jd_blueCoin.js
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
=================QuantumultX==============
[task_local]
#东东超市
11 * * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_superMarket.js, tag=东东超市, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxc.png, enabled=true
===========Loon===============
[Script]
cron "11 * * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_superMarket.js,tag=东东超市
=======Surge===========
东东超市 = type=cron,cronexp="11 * * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_superMarket.js
==============小火箭=============
东东超市 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_superMarket.js, cronexpr="11 * * * *", timeout=3600, enable=true
 */
const $ = new Env('东东超市');
//Node.js用户请在jdCookie.js处填写京东ck;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', jdSuperMarketShareArr = [], notify, newShareCodes;
const helpAu = true;//给作者助力 免费拿活动
let jdNotify = true;//用来是否关闭弹窗通知，true表示关闭，false表示开启。
let superMarketUpgrade = true;//自动升级,顺序:解锁升级商品、升级货架,true表示自动升级,false表示关闭自动升级
let businessCircleJump = true;//小于对方300热力值自动更换商圈队伍,true表示运行,false表示禁止
let drawLotteryFlag = false;//是否用500蓝币去抽奖，true表示开启，false表示关闭。默认关闭
let joinPkTeam = true;//是否自动加入PK队伍
let message = '', subTitle;
const JD_API_HOST = 'https://api.m.jd.com/api';

//助力好友分享码
//此此内容是IOS用户下载脚本到本地使用，填写互助码的地方，同一京东账号的好友互助码请使用@符号隔开。
//下面给出两个账号的填写示例（iOS只支持2个京东账号）
let shareCodes = []

!(async () => {
  await requireConfig();
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.coincount = 0;//收取了多少个蓝币
      $.coinerr = "";
      $.blueCionTimes = 0;
      $.isLogin = true;
      $.nickName = '';
      await TotalBean();
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      message = '';
      subTitle = '';
      //await shareCodesFormat();//格式化助力码
      await jdSuperMarket();
      await showMsg();
      // await businessCircleActivity();
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
async function jdSuperMarket() {
  try {
    await receiveGoldCoin();//收金币
    await businessCircleActivity();//商圈活动
    await receiveBlueCoin();//收蓝币（小费）
    // await receiveLimitProductBlueCoin();//收限时商品的蓝币
    await daySign();//每日签到
    await BeanSign()//
    await doDailyTask();//做日常任务，分享，关注店铺，
    // await help();//商圈助力
    //await smtgQueryPkTask();//做商品PK任务
    await drawLottery();//抽奖功能(招财进宝)
    // await myProductList();//货架
    // await upgrade();//升级货架和商品
    // await manageProduct();
    // await limitTimeProduct();
    await smtg_shopIndex();
    await smtgHome();
    await receiveUserUpgradeBlue();
    await Home();
    await rankVote();
    if (helpAu === true) {
      await helpAuthor();
      await helpAuthor3();
    }
  } catch (e) {
    $.logErr(e)
  }
}
function showMsg() {
  $.log(`【京东账号${$.index}】${$.nickName}\n${message}`);
  jdNotify = $.getdata('jdSuperMarketNotify') ? $.getdata('jdSuperMarketNotify') : jdNotify;
  if (!jdNotify || jdNotify === 'false') {
    $.msg($.name, subTitle ,`【京东账号${$.index}】${$.nickName}\n${message}`);
  }
}
//抽奖功能(招财进宝)
async function drawLottery() {
  console.log(`\n注意⚠:东东超市抽奖已改版,花费500蓝币抽奖一次,现在脚本默认已关闭抽奖功能\n`);
  drawLotteryFlag = $.getdata('jdSuperMarketLottery') ? $.getdata('jdSuperMarketLottery') : drawLotteryFlag;
  if ($.isNode() && process.env.SUPERMARKET_LOTTERY) {
    drawLotteryFlag = process.env.SUPERMARKET_LOTTERY;
  }
  if (`${drawLotteryFlag}` === 'true') {
    const smtg_lotteryIndexRes = await smtg_lotteryIndex();
    if (smtg_lotteryIndexRes && smtg_lotteryIndexRes.data.bizCode === 0) {
      const { result } = smtg_lotteryIndexRes.data
      if (result.blueCoins > result.costCoins && result.remainedDrawTimes > 0) {
        const drawLotteryRes = await smtg_drawLottery();
        console.log(`\n花费${result.costCoins}蓝币抽奖结果${JSON.stringify(drawLotteryRes)}`);
        await drawLottery();
      } else {
        console.log(`\n抽奖失败:已抽奖或者蓝币不足`);
        console.log(`失败详情：\n现有蓝币:${result.blueCoins},抽奖次数:${result.remainedDrawTimes}`)
      }
    }
  } else {
    console.log(`设置的为不抽奖\n`)
  }
}
async function help() {
  return
  console.log(`\n开始助力好友`);
  for (let code of newShareCodes) {
    if (!code) continue;
    const res = await smtgDoAssistPkTask(code);
    console.log(`助力好友${JSON.stringify(res)}`);
  }
}
async function doDailyTask() {
  const smtgQueryShopTaskRes = await smtgQueryShopTask();
  if (smtgQueryShopTaskRes.code === 0 && smtgQueryShopTaskRes.data.success) {
    const taskList = smtgQueryShopTaskRes.data.result.taskList;
    console.log(`\n日常赚钱任务       完成状态`)
    for (let item of taskList) {
      console.log(` ${item['title'].length < 4 ? item['title']+`\xa0` : item['title'].slice(-4)}         ${item['finishNum'] === item['targetNum'] ? '已完成':'未完成'} ${item['finishNum']}/${item['targetNum']}`)
    }
    for (let item of taskList) {
      //领奖
      if (item.taskStatus === 1 && item.prizeStatus === 1) {
        const res = await smtgObtainShopTaskPrize(item.taskId);
        console.log(`\n领取做完任务的奖励${JSON.stringify(res)}\n`)
      }
      //做任务
      if ((item.type === 1 || item.type === 11) && item.taskStatus === 0) {
        // 分享任务
        const res = await smtgDoShopTask(item.taskId);
        console.log(`${item.subTitle}结果${JSON.stringify(res)}`)
      }
      if (item.type === 2) {
        //逛会场
        if (item.taskStatus === 0) {
          console.log('开始逛会场')
          const itemId = item.content[item.type].itemId;
          const res = await smtgDoShopTask(item.taskId, itemId);
          console.log(`${item.subTitle}结果${JSON.stringify(res)}`);
        }
      }
      if (item.type === 8) {
        //关注店铺
        if (item.taskStatus === 0) {
          console.log('开始关注店铺')
          const itemId = item.content[item.type].itemId;
          const res = await smtgDoShopTask(item.taskId, itemId);
          console.log(`${item.subTitle}结果${JSON.stringify(res)}`);
        }
      }
      if (item.type === 9) {
        //开卡领蓝币任务
        if (item.taskStatus === 0) {
          console.log('开始开卡领蓝币任务')
          const itemId = item.content[item.type].itemId;
          const res = await smtgDoShopTask(item.taskId, itemId);
          console.log(`${item.subTitle}结果${JSON.stringify(res)}`);
        }
      }
      if (item.type === 10) {
        //关注商品领蓝币
        if (item.taskStatus === 0) {
          console.log('关注商品')
          const itemId = item.content[item.type].itemId;
          const res = await smtgDoShopTask(item.taskId, itemId);
          console.log(`${item.subTitle}结果${JSON.stringify(res)}`);
        }
      }
      if ((item.type === 8 || item.type === 2 || item.type === 10) && item.taskStatus === 0) {
        // await doDailyTask();
      }
    }
  }
}
/*
 *Progcessed By JSDec in 0.02s
 *JSDec - JSDec.js.org
 */
async function receiveGoldCoin() {
    var _0x4fa25c = {
        'Shdoo': '\n东东超市: API查询请求失败 ‼️‼️',
        'WOeXE': function(_0x41e168, _0x371768, _0x89b5b8) {
            return _0x41e168(_0x371768, _0x89b5b8);
        },
        'kKoLG': 'smtg_newHome',
        'iASbk': 'NhvCboewDl4KLJIZEQcOSY6-HDOplvHeChID78wv70NFtLOIrRmOnfiIA4fYF-QnNYpkkMwaMyAzg7Ac2xx01pm7fmmgOnme6cXRnfn7Iy8kgeInHdZ1ydgqidG81dZbj1xavgze3mWtD011VRZuSw1iX2D6uvtxmaOI1fQ5_Wc',
        'EnPfv': 'XezeBXzhJGnyfjuDxUByXHNZrJLAW4DycDvakCZuIWHTpW-BmnabeRphKRsXU6J22AiHYHaRP46nVw7FCnvqRRx72KbtqoYbNGV-8YpSLodief6QbcvhtAZp6gjsnkYVO5UdEjKphyYZ5LxyeUMwMB99719wAZ8Fc7OvFms6xs8',
        'qVbnJ': 'BV58Q3kKSNk0AbPKMuDr05UWQDiuSo8kmEzqsVZbmf5-IbTByTpUK7qYy5K9oLr1XKp0tCRSiebOTIJfaoa5ZrdmLw-3wtshpZOJX4cAnDwkCWfebqgYPEGQZslByGpyFlQB2jUWFTY9v9uQikFwdnyCTmadpYJsvVCF_u1thvg',
        'pHWak': function(_0x45588d, _0x2886f0) {
            return _0x45588d * _0x2886f0;
        },
        'EaRqk': function(_0x48368a, _0x3756da) {
            return _0x48368a(_0x3756da);
        },
        'oJDZr': function(_0x27c544, _0x55b6a1) {
            return _0x27c544 === _0x55b6a1;
        },
        'eKgpp': 'LFWtR'
    };
    const _0x862b2c = _0x4fa25c['WOeXE'](taskUrl, _0x4fa25c['kKoLG'], {
        'shareId': [_0x4fa25c['iASbk'], _0x4fa25c['EnPfv'], _0x4fa25c['qVbnJ']][Math['floor'](_0x4fa25c['pHWak'](Math['random'](), 0x3))],
        'channel': '4'
    });
    $['get'](_0x862b2c, (_0xcd0230, _0x129b96, _0x6f0d7c) => {});
    $['goldCoinData'] = await _0x4fa25c['EaRqk'](smtgReceiveCoin, {
        'type': 0x0
    });
    if ($['goldCoinData']['data'] && _0x4fa25c['oJDZr']($['goldCoinData']['data']['bizCode'], 0x0)) {
        console['log']('领取金币成功' + $['goldCoinData']['data']['result']['receivedGold']);
        message += '【领取金币】' + $['goldCoinData']['data']['result']['receivedGold'] + '个\x0a';
    } else {
        if (_0x4fa25c['oJDZr'](_0x4fa25c['eKgpp'], _0x4fa25c['eKgpp'])) {
            console['log']('' + ($['goldCoinData']['data'] && $['goldCoinData']['data']['bizMsg']));
        } else {
            console['log'](_0x4fa25c['Shdoo']);
            console['log'](JSON['stringify'](err));
        }
    }
}

function smtgHome() {
    var _0x2b0b51 = {
        'Tnybf': function(_0x3cfac6, _0x5ebf63) {
            return _0x3cfac6(_0x5ebf63);
        },
        'KfcyW': '\n东东超市: API查询请求失败 ‼️‼️',
        'ULcFc': function(_0xf3db46, _0x4ddbc1) {
            return _0xf3db46 === _0x4ddbc1;
        },
        'OZgNt': 'NMVVZ',
        'fgcRm': function(_0x218926, _0xe4ad23) {
            return _0x218926(_0xe4ad23);
        },
        'bynrM': function(_0x4ded26, _0x51a247) {
            return _0x4ded26 !== _0x51a247;
        },
        'umcbJ': 'rGPRU',
        'ZKYUq': function(_0x5843d, _0x4f2c1e, _0x23c3d1) {
            return _0x5843d(_0x4f2c1e, _0x23c3d1);
        },
        'DCCUj': 'smtg_newHome',
        'rDJJu': 'NhvCboewDl4KLJIZEQcOSY6-HDOplvHeChID78wv70NFtLOIrRmOnfiIA4fYF-QnNYpkkMwaMyAzg7Ac2xx01pm7fmmgOnme6cXRnfn7Iy8kgeInHdZ1ydgqidG81dZbj1xavgze3mWtD011VRZuSw1iX2D6uvtxmaOI1fQ5_Wc',
        'Uiniz': 'XezeBXzhJGnyfjuDxUByXHNZrJLAW4DycDvakCZuIWHTpW-BmnabeRphKRsXU6J22AiHYHaRP46nVw7FCnvqRRx72KbtqoYbNGV-8YpSLodief6QbcvhtAZp6gjsnkYVO5UdEjKphyYZ5LxyeUMwMB99719wAZ8Fc7OvFms6xs8',
        'XyDTT': 'BV58Q3kKSNk0AbPKMuDr05UWQDiuSo8kmEzqsVZbmf5-IbTByTpUK7qYy5K9oLr1XKp0tCRSiebOTIJfaoa5ZrdmLw-3wtshpZOJX4cAnDwkCWfebqgYPEGQZslByGpyFlQB2jUWFTY9v9uQikFwdnyCTmadpYJsvVCF_u1thvg',
        'TIMmh': function(_0x7cea4, _0x4d9e77) {
            return _0x7cea4 * _0x4d9e77;
        },
        'rTxVX': function(_0x1f9203, _0x41fca2, _0x4dfc90) {
            return _0x1f9203(_0x41fca2, _0x4dfc90);
        }
    };
    return new Promise(_0x19bcc9 => {
        var _0x50ad87 = {
            'ffdRj': _0x2b0b51['KfcyW'],
            'maldN': function(_0x2d0056, _0x4fba72) {
                return _0x2b0b51['ULcFc'](_0x2d0056, _0x4fba72);
            },
            'pXfiX': function(_0x45bb54, _0xf58ee6) {
                return _0x2b0b51['ULcFc'](_0x45bb54, _0xf58ee6);
            },
            'SiSqZ': _0x2b0b51['OZgNt'],
            'QrDoh': function(_0x580291, _0x2482f9) {
                return _0x2b0b51['fgcRm'](_0x580291, _0x2482f9);
            }
        };
        if (_0x2b0b51['bynrM'](_0x2b0b51['umcbJ'], _0x2b0b51['umcbJ'])) {
            _0x2b0b51['Tnybf'](_0x19bcc9, data);
        } else {
            const _0x4bebee = _0x2b0b51['ZKYUq'](taskUrl, _0x2b0b51['DCCUj'], {
                'shareId': [_0x2b0b51['rDJJu'], _0x2b0b51['Uiniz'], _0x2b0b51['XyDTT']][Math['floor'](_0x2b0b51['TIMmh'](Math['random'](), 0x3))],
                'channel': '4'
            });
            $['get'](_0x4bebee, (_0x176204, _0x22f68e, _0x3cd660) => {});
            $['get'](_0x2b0b51['rTxVX'](taskUrl, _0x2b0b51['DCCUj'], {
                'channel': '18'
            }), (_0x509722, _0x52e599, _0x37449c) => {
                try {
                    if (_0x509722) {
                        console['log'](_0x50ad87['ffdRj']);
                        console['log'](JSON['stringify'](_0x509722));
                    } else {
                        _0x37449c = JSON['parse'](_0x37449c);
                        if (_0x50ad87['maldN'](_0x37449c['code'], 0x0) && _0x37449c['data']['success']) {
                            const {
                                result
                            } = _0x37449c['data'];
                            const {
                                shopName,
                                totalBlue,
                                userUpgradeBlueVos,
                                turnoverProgress
                            } = result;
                            $['userUpgradeBlueVos'] = userUpgradeBlueVos;
                            $['turnoverProgress'] = turnoverProgress;
                        }
                    }
                } catch (_0x56d7e6) {
                    $['logErr'](_0x56d7e6, _0x52e599);
                } finally {
                    if (_0x50ad87['pXfiX'](_0x50ad87['SiSqZ'], _0x50ad87['SiSqZ'])) {
                        _0x50ad87['QrDoh'](_0x19bcc9, _0x37449c);
                    } else {
                        console['log']('' + ($['goldCoinData']['data'] && $['goldCoinData']['data']['bizMsg']));
                    }
                }
            });
        }
    });
};
_0xod8 = 'jsjiami.com.v6'

//领限时商品的蓝币
async function receiveLimitProductBlueCoin() {
  const res = await smtgReceiveCoin({ "type": 1 });
  console.log(`\n限时商品领蓝币结果：[${res.data.bizMsg}]\n`);
  if (res.data.bizCode === 0) {
    message += `【限时商品】获得${res.data.result.receivedBlue}个蓝币\n`;
  }
}
//领蓝币
function receiveBlueCoin(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      $.get(taskUrl('smtg_receiveCoin', {"type": 2, "channel": "18"}), async (err, resp, data) => {
        try {
          if (err) {
            console.log('\n东东超市: API查询请求失败 ‼️‼️')
            console.log(JSON.stringify(err));
          } else {
            data = JSON.parse(data);
            $.data = data;
            if ($.data.data.bizCode !== 0 && $.data.data.bizCode !== 809) {
              $.coinerr = `${$.data.data.bizMsg}`;
              message += `【收取小费】${$.data.data.bizMsg}\n`;
              console.log(`收取蓝币失败：${$.data.data.bizMsg}`)
              return
            }
            if  ($.data.data.bizCode === 0) {
              $.coincount += $.data.data.result.receivedBlue;
              $.blueCionTimes ++;
              console.log(`【京东账号${$.index}】${$.nickName} 第${$.blueCionTimes}次领蓝币成功，获得${$.data.data.result.receivedBlue}个\n`)
              if (!$.data.data.result.isNextReceived) {
                message += `【收取小费】${$.coincount}个\n`;
                return
              }
            }
            await receiveBlueCoin(3000);
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
async function daySign() {
  const signDataRes = await smtgSign({"shareId":"QcSH6BqSXysv48bMoRfTBz7VBqc5P6GodDUBAt54d8598XAUtNoGd4xWVuNtVVwNO1dSKcoaY3sX_13Z-b3BoSW1W7NnqD36nZiNuwrtyO-gXbjIlsOBFpgIPMhpiVYKVAaNiHmr2XOJptu14d8uW-UWJtefjG9fUGv0Io7NwAQ","channel":"4"});
  await smtgSign({"shareId":"TBj0jH-x7iMvCMGsHfc839Tfnco6UarNx1r3wZVIzTZiLdWMRrmoocTbXrUOFn0J6UIir16A2PPxF50_Eoo7PW_NQVOiM-3R16jjlT20TNPHpbHnmqZKUDaRajnseEjVb-SYi6DQqlSOioRc27919zXTEB6_llab2CW2aDok36g","channel":"4"});
  if (signDataRes && signDataRes.code === 0) {
    const signList = await smtgSignList();
    if (signList.data.bizCode === 0) {
      $.todayDay = signList.data.result.todayDay;
    }
    if (signDataRes.code === 0 && signDataRes.data.success) {
      message += `【第${$.todayDay}日签到】成功，奖励${signDataRes.data.result.rewardBlue}蓝币\n`
    } else {
      message += `【第${$.todayDay}日签到】${signDataRes.data.bizMsg}\n`
    }
  }
}
async function BeanSign() {
  const beanSignRes = await smtgSign({"channel": "1"});
  if (beanSignRes && beanSignRes.data['bizCode'] === 0) {
    console.log(`每天从指定入口进入游戏,可获得额外奖励:${JSON.stringify(beanSignRes)}`)
  }
}
//每日签到
function smtgSign(body) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_sign', body), async (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 商圈活动
async function businessCircleActivity() {
  // console.log(`\n商圈PK奖励,次日商圈大战开始的时候自动领领取\n`)
  joinPkTeam = $.isNode() ? (process.env.JOIN_PK_TEAM ? process.env.JOIN_PK_TEAM : `${joinPkTeam}`) : ($.getdata('JOIN_PK_TEAM') ? $.getdata('JOIN_PK_TEAM') : `${joinPkTeam}`);
  const smtg_getTeamPkDetailInfoRes = await smtg_getTeamPkDetailInfo();
  if (smtg_getTeamPkDetailInfoRes && smtg_getTeamPkDetailInfoRes.data.bizCode === 0) {
    const { joinStatus, pkStatus, inviteCount, inviteCode, currentUserPkInfo, pkUserPkInfo, prizeInfo, pkActivityId, teamId } = smtg_getTeamPkDetailInfoRes.data.result;
    console.log(`\njoinStatus:${joinStatus}`);
    console.log(`pkStatus:${pkStatus}\n`);
    console.log(`pkActivityId:${pkActivityId}\n`);

    if (joinStatus === 0) {
      if (joinPkTeam === 'true') {
        console.log(`\n注：PK会在每天的七点自动随机加入LXK9301创建的队伍\n`)
        await updatePkActivityIdCDN('https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/jd_updateTeam.json');
        console.log(`\nupdatePkActivityId[pkActivityId]:::${$.updatePkActivityIdRes && $.updatePkActivityIdRes.pkActivityId}`);
        console.log(`\n京东服务器返回的[pkActivityId] ${pkActivityId}`);
        if ($.updatePkActivityIdRes && ($.updatePkActivityIdRes.pkActivityId === pkActivityId)) {
          await getTeam();
          let Teams = []
          Teams = $.updatePkActivityIdRes['Teams'] || Teams;
          if ($.getTeams && $.getTeams.length) {
            Teams = [...Teams, ...$.getTeams.filter(item => item['pkActivityId'] === `${pkActivityId}`)];
          }
          const randomNum = randomNumber(0, Teams.length);

          const res = await smtg_joinPkTeam(Teams[randomNum] && Teams[randomNum].teamId, Teams[randomNum] && Teams[randomNum].inviteCode, pkActivityId);
          if (res && res.data.bizCode === 0) {
            console.log(`加入战队成功`)
          } else if (res && res.data.bizCode === 229) {
            console.log(`加入战队失败,该战队已满\n无法加入`)
          } else {
            console.log(`加入战队其他未知情况:${JSON.stringify(res)}`)
          }
        } else {
          console.log('\nupdatePkActivityId请求返回的pkActivityId与京东服务器返回不一致,暂时不加入战队')
        }
      }
    } else if (joinStatus === 1) {
      if (teamId) {
        console.log(`inviteCode: [${inviteCode}]`);
        console.log(`PK队伍teamId: [${teamId}]`);
        console.log(`PK队伍名称: [${currentUserPkInfo && currentUserPkInfo.teamName}]`);
        console.log(`我邀请的人数:${inviteCount}\n`)
        console.log(`\n我方战队战队 [${currentUserPkInfo && currentUserPkInfo.teamName}]/【${currentUserPkInfo && currentUserPkInfo.teamCount}】`);
        console.log(`对方战队战队 [${pkUserPkInfo && pkUserPkInfo.teamName}]/【${pkUserPkInfo && pkUserPkInfo.teamCount}】\n`);
      }
    }
    if (pkStatus === 1) {
      console.log(`商圈PK进行中\n`)
      if (!teamId) {
        const receivedPkTeamPrize = await smtg_receivedPkTeamPrize();
        console.log(`商圈PK奖励领取结果：${JSON.stringify(receivedPkTeamPrize)}\n`)
        if (receivedPkTeamPrize.data.bizCode === 0) {
          if (receivedPkTeamPrize.data.result.pkResult === 1) {
            const { pkTeamPrizeInfoVO } = receivedPkTeamPrize.data.result;
            message += `【商圈PK奖励】${pkTeamPrizeInfoVO.blueCoin}蓝币领取成功\n`;
            if ($.isNode()) {
              await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【商圈队伍】PK获胜\n【奖励】${pkTeamPrizeInfoVO.blueCoin}蓝币领取成功`)
            }
          } else if (receivedPkTeamPrize.data.result.pkResult === 2) {
            if ($.isNode()) {
              await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【商圈队伍】PK失败`)
            }
          }
        }
      }
    } else if (pkStatus === 2) {
      console.log(`商圈PK结束了`)
      if (prizeInfo.pkPrizeStatus === 2) {
        console.log(`开始领取商圈PK奖励`);
        // const receivedPkTeamPrize = await smtg_receivedPkTeamPrize();
        // console.log(`商圈PK奖励领取结果：${JSON.stringify(receivedPkTeamPrize)}`)
        // if (receivedPkTeamPrize.data.bizCode === 0) {
        //   if (receivedPkTeamPrize.data.result.pkResult === 1) {
        //     const { pkTeamPrizeInfoVO } = receivedPkTeamPrize.data.result;
        //     message += `【商圈PK奖励】${pkTeamPrizeInfoVO.blueCoin}蓝币领取成功\n`;
        //     if ($.isNode()) {
        //       await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【商圈队伍】PK获胜\n【奖励】${pkTeamPrizeInfoVO.blueCoin}蓝币领取成功`)
        //     }
        //   } else if (receivedPkTeamPrize.data.result.pkResult === 2) {
        //     if ($.isNode()) {
        //       await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【商圈队伍】PK失败`)
        //     }
        //   }
        // }
      } else if (prizeInfo.pkPrizeStatus === 1) {
        console.log(`商圈PK奖励已经领取\n`)
      }
    } else if (pkStatus === 3) {
      console.log(`商圈PK暂停中\n`)
    }
  } else {
    console.log(`\n${JSON.stringify(smtg_getTeamPkDetailInfoRes)}\n`)
  }
  return
  const businessCirclePKDetailRes = await smtg_businessCirclePKDetail();
  if (businessCirclePKDetailRes && businessCirclePKDetailRes.data.bizCode === 0) {
    const { businessCircleVO, otherBusinessCircleVO, inviteCode, pkSettleTime } = businessCirclePKDetailRes.data.result;
    console.log(`\n【您的商圈inviteCode互助码】：\n${inviteCode}\n\n`);
    const businessCircleIndexRes = await smtg_businessCircleIndex();
    const { result } = businessCircleIndexRes.data;
    const { pkPrizeStatus, pkStatus  } = result;
    if (pkPrizeStatus === 2) {
      console.log(`开始领取商圈PK奖励`);
      const getPkPrizeRes = await smtg_getPkPrize();
      console.log(`商圈PK奖励领取结果：${JSON.stringify(getPkPrizeRes)}`)
      if (getPkPrizeRes.data.bizCode === 0) {
        const { pkPersonPrizeInfoVO, pkTeamPrizeInfoVO } = getPkPrizeRes.data.result;
        message += `【商圈PK奖励】${pkPersonPrizeInfoVO.blueCoin + pkTeamPrizeInfoVO.blueCoin}蓝币领取成功\n`;
      }
    }
    console.log(`我方商圈人气值/对方商圈人气值：${businessCircleVO.hotPoint}/${otherBusinessCircleVO.hotPoint}`);
    console.log(`我方商圈成员数量/对方商圈成员数量：${businessCircleVO.memberCount}/${otherBusinessCircleVO.memberCount}`);
    message += `【我方商圈】${businessCircleVO.memberCount}/${businessCircleVO.hotPoint}\n`;
    message += `【对方商圈】${otherBusinessCircleVO.memberCount}/${otherBusinessCircleVO.hotPoint}\n`;
    // message += `【我方商圈人气值】${businessCircleVO.hotPoint}\n`;
    // message += `【对方商圈人气值】${otherBusinessCircleVO.hotPoint}\n`;
    businessCircleJump = $.getdata('jdBusinessCircleJump') ? $.getdata('jdBusinessCircleJump') : businessCircleJump;
    if ($.isNode() && process.env.jdBusinessCircleJump) {
      businessCircleJump = process.env.jdBusinessCircleJump;
    }
    if (`${businessCircleJump}` === 'false') {
      console.log(`\n小于对方300热力值自动更换商圈队伍: 您设置的是禁止自动更换商圈队伍\n`);
      return
    }
    if (otherBusinessCircleVO.hotPoint - businessCircleVO.hotPoint > 300 && (Date.now() > (pkSettleTime - 24 * 60 * 60 * 1000))) {
      //退出该商圈
      if (inviteCode === '-4msulYas0O2JsRhE-2TA5XZmBQ') return;
      console.log(`商圈PK已过1天，对方商圈人气值还大于我方商圈人气值300，退出该商圈重新加入`);
      await smtg_quitBusinessCircle();
    } else if (otherBusinessCircleVO.hotPoint > businessCircleVO.hotPoint && (Date.now() > (pkSettleTime - 24 * 60 * 60 * 1000 * 2))) {
      //退出该商圈
      if (inviteCode === '-4msulYas0O2JsRhE-2TA5XZmBQ') return;
      console.log(`商圈PK已过2天，对方商圈人气值还大于我方商圈人气值，退出该商圈重新加入`);
      await smtg_quitBusinessCircle();
    }
  } else if (businessCirclePKDetailRes && businessCirclePKDetailRes.data.bizCode === 222) {
    console.log(`${businessCirclePKDetailRes.data.bizMsg}`);
    console.log(`开始领取商圈PK奖励`);
    const getPkPrizeRes = await smtg_getPkPrize();
    console.log(`商圈PK奖励领取结果：${JSON.stringify(getPkPrizeRes)}`)
    if (getPkPrizeRes && getPkPrizeRes.data.bizCode === 0) {
      const { pkPersonPrizeInfoVO, pkTeamPrizeInfoVO } = getPkPrizeRes.data.result;
      $.msg($.name, '', `【京东账号${$.index}】 ${$.nickName}\n【商圈PK奖励】${pkPersonPrizeInfoVO.blueCoin + pkTeamPrizeInfoVO.blueCoin}蓝币领取成功`)
      if ($.isNode()) {
        await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【商圈PK奖励】${pkPersonPrizeInfoVO.blueCoin + pkTeamPrizeInfoVO.blueCoin}蓝币领取成功`)
      }
    }
  } else if (businessCirclePKDetailRes && businessCirclePKDetailRes.data.bizCode === 206) {
    console.log(`您暂未加入商圈,现在给您加入LXK9301的商圈`);
    const joinBusinessCircleRes = await smtg_joinBusinessCircle(myCircleId);
    console.log(`参加商圈结果：${JSON.stringify(joinBusinessCircleRes)}`)
    if (joinBusinessCircleRes.data.bizCode !== 0) {
      console.log(`您加入LXK9301的商圈失败，现在给您随机加入一个商圈`);
      const BusinessCircleList = await smtg_getBusinessCircleList();
      if (BusinessCircleList.data.bizCode === 0) {
        const { businessCircleVOList } = BusinessCircleList.data.result;
        const { circleId } = businessCircleVOList[randomNumber(0, businessCircleVOList.length)];
        const joinBusinessCircleRes = await smtg_joinBusinessCircle(circleId);
        console.log(`随机加入商圈结果：${JSON.stringify(joinBusinessCircleRes)}`)
      }
    }
  } else {
    console.log(`访问商圈详情失败：${JSON.stringify(businessCirclePKDetailRes)}`);
  }
}
//我的货架
async function myProductList() {
  const shelfListRes = await smtg_shelfList();
  if (shelfListRes.data.bizCode === 0) {
    const { shelfList } = shelfListRes.data.result;
    console.log(`\n货架数量:${shelfList && shelfList.length}`)
    for (let item of shelfList) {
      console.log(`\nshelfId/name : ${item.shelfId}/${item.name}`);
      console.log(`货架等级 level ${item.level}/${item.maxLevel}`);
      console.log(`上架状态 groundStatus ${item.groundStatus}`);
      console.log(`解锁状态 unlockStatus ${item.unlockStatus}`);
      console.log(`升级状态 upgradeStatus ${item.upgradeStatus}`);
      if (item.unlockStatus === 0) {
        console.log(`${item.name}不可解锁`)
      } else if (item.unlockStatus === 1) {
        console.log(`${item.name}可解锁`);
        await smtg_unlockShelf(item.shelfId);
      } else if (item.unlockStatus === 2) {
        console.log(`${item.name}已经解锁`)
      }
      if (item.groundStatus === 1) {
        console.log(`${item.name}可上架`);
        const productListRes = await smtg_shelfProductList(item.shelfId);
        if (productListRes.data.bizCode === 0) {
          const { productList } = productListRes.data.result;
          if (productList && productList.length > 0) {
            // 此处限时商品未分配才会出现
            let limitTimeProduct = [];
            for (let item of productList) {
              if (item.productType === 2) {
                limitTimeProduct.push(item);
              }
            }
            if (limitTimeProduct && limitTimeProduct.length > 0) {
              //上架限时商品
              await smtg_ground(limitTimeProduct[0].productId, item.shelfId);
            } else {
              await smtg_ground(productList[productList.length - 1].productId, item.shelfId);
            }
          } else {
            console.log("无可上架产品");
            await unlockProductByCategory(item.shelfId.split('-')[item.shelfId.split('-').length - 1])
          }
        }
      } else if (item.groundStatus === 2 || item.groundStatus === 3) {
        if (item.productInfo.productType === 2) {
          console.log(`[${item.name}][限时商品]`)
        } else if (item.productInfo.productType === 1){
          console.log(`[${item.name}]`)
        } else {
          console.log(`[${item.name}][productType:${item.productInfo.productType}]`)
        }
      }
    }
  }
}
//根据类型解锁一个商品,货架可上架商品时调用
async function unlockProductByCategory(category) {
  const smtgProductListRes = await smtg_productList();
  if (smtgProductListRes.data.bizCode === 0) {
    let productListByCategory = [];
    const { productList } = smtgProductListRes.data.result;
    for (let item of productList) {
      if (item['unlockStatus'] === 1 && item['shelfCategory'].toString() === category) {
        productListByCategory.push(item);
      }
    }
    if (productListByCategory && productListByCategory.length > 0) {
      console.log(`待解锁的商品数量:${productListByCategory.length}`);
      await smtg_unlockProduct(productListByCategory[productListByCategory.length - 1]['productId']);
    } else {
      console.log("该类型商品暂时无法解锁");
    }
  }
}
//升级货架和商品
async function upgrade() {
  superMarketUpgrade = $.getdata('jdSuperMarketUpgrade') ? $.getdata('jdSuperMarketUpgrade') : superMarketUpgrade;
  if ($.isNode() && process.env.SUPERMARKET_UPGRADE) {
    superMarketUpgrade = process.env.SUPERMARKET_UPGRADE;
  }
  if (`${superMarketUpgrade}` === 'false') {
    console.log(`\n自动升级: 您设置的是关闭自动升级\n`);
    return
  }
  console.log(`\n*************开始检测升级商品，如遇到商品能解锁，则优先解锁***********`)
  console.log('目前没有平稳升级,只取倒数几个商品进行升级,普通货架取倒数4个商品,冰柜货架取倒数3个商品,水果货架取倒数2个商品')
  const smtgProductListRes = await smtg_productList();
  if (smtgProductListRes.data.bizCode === 0) {
    let productType1 = [], shelfCategory_1 = [], shelfCategory_2 = [], shelfCategory_3 = [];
    const { productList } = smtgProductListRes.data.result;
    for (let item of productList) {
      if (item['productType'] === 1) {
        productType1.push(item);
      }
    }
    for (let item2 of productType1) {
      if (item2['shelfCategory'] === 1) {
        shelfCategory_1.push(item2);
      }
      if (item2['shelfCategory'] === 2) {
        shelfCategory_2.push(item2);
      }
      if (item2['shelfCategory'] === 3) {
        shelfCategory_3.push(item2);
      }
    }
    shelfCategory_1 = shelfCategory_1.slice(-4);
    shelfCategory_2 = shelfCategory_2.slice(-3);
    shelfCategory_3 = shelfCategory_3.slice(-2);
    const shelfCategorys = shelfCategory_1.concat(shelfCategory_2).concat(shelfCategory_3);
    console.log(`\n商品名称       归属货架     目前等级    解锁状态    可升级状态`)
    for (let item of shelfCategorys) {
      console.log(`  ${item["name"].length<3?item["name"]+`\xa0`:item["name"]}       ${item['shelfCategory'] === 1 ? '普通货架' : item['shelfCategory'] === 2 ? '冰柜货架' : item['shelfCategory'] === 3 ? '水果货架':'未知货架'}       ${item["unlockStatus"] === 0 ? '---' : item["level"]+'级'}     ${item["unlockStatus"] === 0 ? '未解锁' : '已解锁'}      ${item["upgradeStatus"] === 1 ? '可以升级' : item["upgradeStatus"] === 0 ? '不可升级':item["upgradeStatus"]}`)
    }
    shelfCategorys.sort(sortSyData);
    for (let item of shelfCategorys) {
      if (item['unlockStatus'] === 1) {
        console.log(`\n开始解锁商品：${item['name']}`)
        await smtg_unlockProduct(item['productId']);
        break;
      }
      if (item['upgradeStatus'] === 1) {
        console.log(`\n开始升级商品：${item['name']}`)
        await smtg_upgradeProduct(item['productId']);
        break;
      }
    }
  }
  console.log('\n**********开始检查能否升级货架***********');
  const shelfListRes = await smtg_shelfList();
  if (shelfListRes.data.bizCode === 0) {
    const { shelfList } = shelfListRes.data.result;
    let shelfList_upgrade = [];
    for (let item of shelfList) {
      if (item['upgradeStatus'] === 1) {
        shelfList_upgrade.push(item);
      }
    }
    console.log(`待升级货架数量${shelfList_upgrade.length}个`);
    if (shelfList_upgrade && shelfList_upgrade.length > 0) {
      shelfList_upgrade.sort(sortSyData);
      console.log("\n可升级货架名         等级     升级所需金币");
      for (let item of shelfList_upgrade) {
        console.log(` [${item["name"]}]         ${item["level"]}/${item["maxLevel"]}         ${item["upgradeCostGold"]}`);
      }
      console.log(`开始升级[${shelfList_upgrade[0].name}]货架，当前等级${shelfList_upgrade[0].level}，所需金币${shelfList_upgrade[0].upgradeCostGold}\n`);
      await smtg_upgradeShelf(shelfList_upgrade[0].shelfId);
    }
  }
}
async function manageProduct() {
  console.log(`安排上货(单价最大商品)`);
  const shelfListRes = await smtg_shelfList();
  if (shelfListRes.data.bizCode === 0) {
    const { shelfList } = shelfListRes.data.result;
    console.log(`我的货架数量:${shelfList && shelfList.length}`);
    let shelfListUnlock = [];//可以上架的货架
    for (let item of shelfList) {
      if (item['groundStatus'] === 1 || item['groundStatus'] === 2) {
        shelfListUnlock.push(item);
      }
    }
    for (let item of shelfListUnlock) {
      const productListRes = await smtg_shelfProductList(item.shelfId);//查询该货架可以上架的商品
      if (productListRes.data.bizCode === 0) {
        const { productList } = productListRes.data.result;
        let productNow = [], productList2 = [];
        for (let item1 of productList) {
          if (item1['groundStatus'] === 2) {
            productNow.push(item1);
          }
          if (item1['productType'] === 1) {
            productList2.push(item1);
          }
        }
        // console.log(`productNow${JSON.stringify(productNow)}`)
        // console.log(`productList2${JSON.stringify(productList2)}`)
        if (productList2 && productList2.length > 0) {
          productList2.sort(sortTotalPriceGold);
          // console.log(productList2)
          if (productNow && productNow.length > 0) {
            if (productList2.slice(-1)[0]['productId'] === productNow[0]['productId']) {
              console.log(`货架[${item.shelfId}]${productNow[0]['name']}已上架\n`)
              continue;
            }
          }
          await smtg_ground(productList2.slice(-1)[0]['productId'], item['shelfId'])
        }
      }
    }
  }
}
async function limitTimeProduct() {
  const smtgProductListRes = await smtg_productList();
  if (smtgProductListRes.data.bizCode === 0) {
    const { productList } = smtgProductListRes.data.result;
    let productList2 = [];
    for (let item of productList) {
      if (item['productType'] === 2 && item['groundStatus'] === 1) {
        //未上架并且限时商品
        console.log(`出现限时商品[${item.name}]`)
        productList2.push(item);
      }
    }
    if (productList2 && productList2.length > 0) {
      for (let item2 of productList2) {
        const { shelfCategory } = item2;
        const shelfListRes = await smtg_shelfList();
        if (shelfListRes.data.bizCode === 0) {
          const { shelfList } = shelfListRes.data.result;
          let shelfList2 = [];
          for (let item3 of shelfList) {
            if (item3['shelfCategory'] === shelfCategory && (item3['groundStatus'] === 1 || item3['groundStatus'] === 2)) {
              shelfList2.push(item3['shelfId']);
            }
          }
          if (shelfList2 && shelfList2.length > 0) {
            const groundRes = await smtg_ground(item2['productId'], shelfList2.slice(-1)[0]);
            if (groundRes.data.bizCode === 0) {
              console.log(`限时商品上架成功`);
              message += `【限时商品】上架成功\n`;
            }
          }
        }
      }
    } else {
      console.log(`限时商品已经上架或暂无限时商品`);
    }
  }
}
//领取店铺升级的蓝币奖励
async function receiveUserUpgradeBlue() {
  $.receiveUserUpgradeBlue = 0;
  if ($.userUpgradeBlueVos && $.userUpgradeBlueVos.length > 0) {
    for (let item of $.userUpgradeBlueVos) {
      const receiveCoin = await smtgReceiveCoin({ "id": item.id, "type": 5 })
      // $.log(`\n${JSON.stringify(receiveCoin)}`)
      if (receiveCoin && receiveCoin.data['bizCode'] === 0) {
        $.receiveUserUpgradeBlue += receiveCoin.data.result['receivedBlue']
      }
    }
    $.log(`店铺升级奖励获取:${$.receiveUserUpgradeBlue}蓝币\n`)
  }
  const res = await smtgReceiveCoin({"type": 4, "channel": "18"})
  // $.log(`${JSON.stringify(res)}\n`)
  if (res && res.data['bizCode'] === 0) {
    console.log(`\n收取营业额：获得 ${res.data.result['receivedTurnover']}\n`);
  }
}
async function Home() {
  const homeRes = await smtgHome();
  if (homeRes && homeRes.data['bizCode'] === 0) {
    const { result } = homeRes.data;
    const { shopName, totalBlue } = result;
    subTitle = shopName;
    message += `【总蓝币】${totalBlue}个\n`;
  }
}
//=============================================脚本使用到的京东API=====================================

//===新版本

//查询有哪些货架
function smtg_shopIndex() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_shopIndex', { "channel": 1 }), async (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
          if (data && data.data['bizCode'] === 0) {
            const { shopId, shelfList, merchandiseList, level } = data.data['result'];
            message += `【店铺等级】${level}\n`;
            if (shelfList && shelfList.length > 0) {
              for (let item of shelfList) {
                //status: 2可解锁,1可升级,-1不可解锁
                if (item['status'] === 2) {
                  $.log(`${item['name']}可解锁\n`)
                  await smtg_shelfUnlock({ shopId, "shelfId": item['id'], "channel": 1 })
                } else if (item['status'] === 1) {
                  $.log(`${item['name']}可升级\n`)
                  await smtg_shelfUpgrade({ shopId, "shelfId": item['id'], "channel": 1, "targetLevel": item['level'] + 1 });
                } else if (item['status'] === -1) {
                  $.log(`[${item['name']}] 未解锁`)
                } else if (item['status'] === 0) {
                  $.log(`[${item['name']}] 已解锁，当前等级：${item['level']}级`)
                } else {
                  $.log(`未知店铺状态(status)：${item['status']}\n`)
                }
              }
            }
            if (data.data['result']['forSaleMerchandise']) {
              $.log(`\n限时商品${data.data['result']['forSaleMerchandise']['name']}已上架`)
            } else {
              if (merchandiseList && merchandiseList.length > 0) {
                for (let  item of merchandiseList) {
                  console.log(`发现限时商品${item.name}\n`);
                  await smtg_sellMerchandise({"shopId": shopId,"merchandiseId": item['id'],"channel":"18"})
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//解锁店铺
function smtg_shelfUnlock(body) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_shelfUnlock', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          $.log(`解锁店铺结果:${data}\n`)
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_shelfUpgrade(body) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_shelfUpgrade', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          $.log(`店铺升级结果:${data}\n`)
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//售卖限时商品API
function smtg_sellMerchandise(body) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_sellMerchandise', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          $.log(`限时商品售卖结果:${data}\n`)
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//新版东东超市
function updatePkActivityId(url = 'https://raw.githubusercontent.com/LXK9301/updateTeam/master/jd_updateTeam.json') {
  return new Promise(resolve => {
    $.get({url}, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          // console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          $.updatePkActivityIdRes = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function updatePkActivityIdCDN(url) {
  return new Promise(async resolve => {
    const headers = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
    }
    $.get({ url, headers, timeout: 10000, }, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          $.updatePkActivityIdRes = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
    await $.wait(10000)
    resolve();
  })
}
function smtgDoShopTask(taskId, itemId) {
  return new Promise((resolve) => {
    const body = {
      "taskId": taskId,
      "channel": "18"
    }
    if (itemId) {
      body.itemId = itemId;
    }
    $.get(taskUrl('smtg_doShopTask', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtgObtainShopTaskPrize(taskId) {
  return new Promise((resolve) => {
    const body = {
      "taskId": taskId
    }
    $.get(taskUrl('smtg_obtainShopTaskPrize', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtgQueryShopTask() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_queryShopTask'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtgSignList() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_signList', { "channel": "18" }), (err, resp, data) => {
      try {
        // console.log('ddd----ddd', data)
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//查询商圈任务列表
function smtgQueryPkTask() {
  return new Promise( (resolve) => {
    $.get(taskUrl('smtg_queryPkTask'), async (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
          if (data.code === 0) {
            if (data.data.bizCode === 0) {
              const { taskList } = data.data.result;
              console.log(`\n 商圈任务     状态`)
              for (let item of taskList) {
                if (item.taskStatus === 1) {
                  if (item.prizeStatus === 1) {
                    //任务已做完，但未领取奖励， 现在为您领取奖励
                    await smtgObtainPkTaskPrize(item.taskId);
                  } else if (item.prizeStatus === 0) {
                    console.log(`[${item.title}] 已做完 ${item.finishNum}/${item.targetNum}`);
                  }
                } else {
                  console.log(`[${item.title}] 未做完 ${item.finishNum}/${item.targetNum}`)
                  if (item.content) {
                    const { itemId } = item.content[item.type];
                    console.log('itemId', itemId)
                    await smtgDoPkTask(item.taskId, itemId);
                  }
                }
              }
            } else {
              console.log(`${data.data.bizMsg}`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//PK邀请好友
function smtgDoAssistPkTask(code) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_doAssistPkTask', {"inviteCode": code}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtgReceiveCoin(body) {
  $.goldCoinData = {};
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_receiveCoin', body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//领取PK任务做完后的奖励
function smtgObtainPkTaskPrize(taskId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_obtainPkTaskPrize', {"taskId": taskId}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtgDoPkTask(taskId, itemId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_doPkTask', {"taskId": taskId, "itemId": itemId}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_joinPkTeam(teamId, inviteCode, sharePkActivityId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_joinPkTeam', { teamId, inviteCode, "channel": "3", sharePkActivityId }), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_getTeamPkDetailInfo() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_getTeamPkDetailInfo'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_businessCirclePKDetail() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_businessCirclePKDetail'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_getBusinessCircleList() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_getBusinessCircleList'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//加入商圈API
function smtg_joinBusinessCircle(circleId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_joinBusinessCircle', { circleId }), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_businessCircleIndex() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_businessCircleIndex'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_receivedPkTeamPrize() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_receivedPkTeamPrize', {"channel": "1"}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//领取商圈PK奖励
function smtg_getPkPrize() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_getPkPrize'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_quitBusinessCircle() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_quitBusinessCircle'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//我的货架
function smtg_shelfList() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_shelfList'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//检查某个货架可以上架的商品列表
function smtg_shelfProductList(shelfId) {
  return new Promise((resolve) => {
    console.log(`开始检查货架[${shelfId}] 可上架产品`)
    $.get(taskUrl('smtg_shelfProductList', { shelfId }), (err, resp, data) => {
      try {
        // console.log(`检查货架[${shelfId}] 可上架产品结果:${data}`)
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//升级商品
function smtg_upgradeProduct(productId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_upgradeProduct', { productId }), (err, resp, data) => {
      try {
        // console.log(`升级商品productId[${productId}]结果:${data}`);
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          console.log(`升级商品结果\n${data}`);
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//解锁商品
function smtg_unlockProduct(productId) {
  return new Promise((resolve) => {
    console.log(`开始解锁商品`)
    $.get(taskUrl('smtg_unlockProduct', { productId }), (err, resp, data) => {
      try {
        // console.log(`解锁商品productId[${productId}]结果:${data}`);
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//升级货架
function smtg_upgradeShelf(shelfId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_upgradeShelf', { shelfId }), (err, resp, data) => {
      try {
        // console.log(`升级货架shelfId[${shelfId}]结果:${data}`);
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          console.log(`升级货架结果\n${data}`)
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
//解锁货架
function smtg_unlockShelf(shelfId) {
  return new Promise((resolve) => {
    console.log(`开始解锁货架`)
    $.get(taskUrl('smtg_unlockShelf', { shelfId }), (err, resp, data) => {
      try {
        // console.log(`解锁货架shelfId[${shelfId}]结果:${data}`);
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_ground(productId, shelfId) {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_ground', { productId, shelfId }), (err, resp, data) => {
      try {
        // console.log(`上架商品结果:${data}`);
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_productList() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_productList'), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_lotteryIndex() {
  return new Promise((resolve) => {
    $.get(taskUrl('smtg_lotteryIndex', {"costType":1,"channel":1}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function smtg_drawLottery() {
  return new Promise(async (resolve) => {
    await $.wait(1000);
    $.get(taskUrl('smtg_drawLottery', {"costType":1,"channel":1}), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n东东超市: API查询请求失败 ‼️‼️')
          console.log(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function sortSyData(a, b) {
  return a['upgradeCostGold'] - b['upgradeCostGold']
}
function sortTotalPriceGold(a, b) {
  return a['previewTotalPriceGold'] - b['previewTotalPriceGold']
}
//格式化助力码
function shareCodesFormat() {
  return new Promise(resolve => {
    console.log(`第${$.index}个京东账号的助力码:::${jdSuperMarketShareArr[$.index - 1]}`)
    if (jdSuperMarketShareArr[$.index - 1]) {
      newShareCodes = jdSuperMarketShareArr[$.index - 1].split('@');
    } else {
      console.log(`由于您未提供与京京东账号相对应的shareCode,下面助力将采纳本脚本自带的助力码\n`)
      const tempIndex = $.index > shareCodes.length ? (shareCodes.length - 1) : ($.index - 1);
      newShareCodes = shareCodes[tempIndex].split('@');
    }
    console.log(`格式化后第${$.index}个京东账号的助力码${JSON.stringify(newShareCodes)}`)
    resolve();
  })
}
function requireConfig() {
  return new Promise(resolve => {
    // console.log('\n开始获取东东超市配置文件\n')
    notify = $.isNode() ? require('./sendNotify') : '';
    //Node.js用户请在jdCookie.js处填写京东ck;
    const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
    //IOS等用户直接用NobyDa的jd cookie
    if ($.isNode()) {
      Object.keys(jdCookieNode).forEach((item) => {
        if (jdCookieNode[item]) {
          cookiesArr.push(jdCookieNode[item])
        }
      })
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
    } else {
      cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
    }
    console.log(`共${cookiesArr.length}个京东账号\n`);
    // console.log(`东东超市已改版,目前暂不用助力, 故无助力码`)
    // console.log(`\n东东超市商圈助力码::${JSON.stringify(jdSuperMarketShareArr)}`);
    // console.log(`您提供了${jdSuperMarketShareArr.length}个账号的助力码\n`);
    resolve()
  })
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
function getTeam() {
  return new Promise(async resolve => {
    $.getTeams = [];
    $.get({url: `http://jd.turinglabs.net/api/v2/jd/supermarket/read/100000/`, timeout: 100000}, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} supermarket/read/ API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          $.getTeams = data && data['data'];
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
    await $.wait(10000);
    resolve()
  })
}
function taskUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}?functionId=${function_id}&appid=jdsupermarket&clientVersion=8.0.0&client=m&body=${escape(JSON.stringify(body))}&t=${Date.now()}`,
    headers: {
      'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Host': 'api.m.jd.com',
      'Cookie': cookie,
      'Referer': 'https://jdsupermarket.jd.com/game',
      'Origin': 'https://jdsupermarket.jd.com',
    }
  }
}
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
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
/*
 *Progcessed By JSDec in 0.03s
 *JSDec - JSDec.js.org
 */
async function helpAuthor3() {
    var _0x1a92e7 = {
        'yqItq': function(_0x48eb73, _0x2e5f99) {
            return _0x48eb73 - _0x2e5f99;
        },
        'TZnky': function(_0xdbabb9, _0x3fc135) {
            return _0xdbabb9 > _0x3fc135;
        },
        'SbELo': function(_0x5b6e90, _0x5188cd) {
            return _0x5b6e90 * _0x5188cd;
        },
        'cJwSr': function(_0xe7e900, _0x5b48cd) {
            return _0xe7e900 + _0x5b48cd;
        },
        'yiDfq': function(_0x10900a) {
            return _0x10900a();
        },
        'psPtX': function(_0x45f9c3, _0x549869, _0x202c89) {
            return _0x45f9c3(_0x549869, _0x202c89);
        },
        'JZESR': function(_0x42c454, _0x2cab4f) {
            return _0x42c454 > _0x2cab4f;
        },
        'cTtdJ': function(_0x4df1dd, _0x559548) {
            return _0x4df1dd(_0x559548);
        },
        'UomQT': 'api.m.jd.com',
        'cThef': 'application/json, text/plain, */*',
        'GaKUn': 'https://h5.m.jd.com',
        'TYVXc': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'JLoHF': 'zh-cn',
        'Wider': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg'
    };

    function _0x5c0181(_0xd695bf, _0x30a3e0) {
        let _0x2a7f8b = _0xd695bf['slice'](0x0),
            _0x3d44ce = _0xd695bf['length'],
            _0x4dfcc5 = _0x1a92e7['yqItq'](_0x3d44ce, _0x30a3e0),
            _0x261f59, _0x5b8782;
        while (_0x1a92e7['TZnky'](_0x3d44ce--, _0x4dfcc5)) {
            _0x5b8782 = Math['floor'](_0x1a92e7['SbELo'](_0x1a92e7['cJwSr'](_0x3d44ce, 0x1), Math['random']()));
            _0x261f59 = _0x2a7f8b[_0x5b8782];
            _0x2a7f8b[_0x5b8782] = _0x2a7f8b[_0x3d44ce];
            _0x2a7f8b[_0x3d44ce] = _0x261f59;
        }
        return _0x2a7f8b['slice'](_0x4dfcc5);
    }
    let _0x2a9094 = await _0x1a92e7['yiDfq'](getAuthorShareCode),
        _0x523d77 = [];
    $['strMyShareIds'] = [..._0x2a9094 || [], ..._0x523d77 || []];
    $['strMyShareIds'] = _0x1a92e7['psPtX'](_0x5c0181, $['strMyShareIds'], _0x1a92e7['JZESR']($['strMyShareIds']['length'], 0x3) ? 0x6 : $['strMyShareIds']['length']);
    for (let _0xced0dd of $['strMyShareIds'] || []) {
        const _0xd2d746 = {
            'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x1a92e7['cTtdJ'](escape, JSON['stringify'](_0xced0dd)),
            'headers': {
                'Host': _0x1a92e7['UomQT'],
                'accept': _0x1a92e7['cThef'],
                'origin': _0x1a92e7['GaKUn'],
                'user-agent': _0x1a92e7['TYVXc'],
                'accept-language': _0x1a92e7['JLoHF'],
                'referer': _0x1a92e7['Wider'],
                'Cookie': cookie
            }
        };
        $['get'](_0xd2d746, (_0x48f64f, _0x5c4b49, _0x553ed8) => console['log'](_0x553ed8));
    }
}

function getAuthorShareCode(_0x324b83 = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x802afa = {
        'dDJhL': function(_0x28d5d5, _0x1f9ec2) {
            return _0x28d5d5(_0x1f9ec2);
        },
        'GfegC': 'api.m.jd.com',
        'mCejk': 'application/json, text/plain, */*',
        'GIsNg': 'https://h5.m.jd.com',
        'hMIwD': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'YuddI': 'zh-cn',
        'HudEQ': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
        'mFSGu': function(_0xa8bd0e, _0x2af67e) {
            return _0xa8bd0e === _0x2af67e;
        },
        'rDGqn': 'wEfJS',
        'xJrmB': function(_0x267cb6, _0x138b89) {
            return _0x267cb6 !== _0x138b89;
        },
        'yuEgA': 'tucjQ',
        'GEvhK': 'EzMgo',
        'WFmKG': function(_0x56cb0c, _0x34d887) {
            return _0x56cb0c === _0x34d887;
        },
        'qCGOn': 'RDdIl',
        'EtdoP': function(_0x3af92f, _0x3409c6) {
            return _0x3af92f(_0x3409c6);
        },
        'XrxhF': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'vqXHG': function(_0x2fdb13) {
            return _0x2fdb13();
        }
    };
    return new Promise(async _0x350abf => {
        var _0x4b605c = {
            'pjcVN': function(_0x29fbeb, _0x820586) {
                return _0x802afa['dDJhL'](_0x29fbeb, _0x820586);
            },
            'rVcGm': _0x802afa['GfegC'],
            'lxkHq': _0x802afa['mCejk'],
            'HpfBW': _0x802afa['GIsNg'],
            'XIRHs': _0x802afa['hMIwD'],
            'VmIhC': _0x802afa['YuddI'],
            'dXYzv': _0x802afa['HudEQ'],
            'GfXLd': function(_0x47a240, _0x521855) {
                return _0x802afa['mFSGu'](_0x47a240, _0x521855);
            },
            'qxEHj': _0x802afa['rDGqn'],
            'rSiGz': function(_0x2edc72, _0x109660) {
                return _0x802afa['xJrmB'](_0x2edc72, _0x109660);
            },
            'wvPMl': _0x802afa['yuEgA'],
            'jKjjq': _0x802afa['GEvhK'],
            'aJybn': function(_0x3e3007, _0x60854) {
                return _0x802afa['WFmKG'](_0x3e3007, _0x60854);
            },
            'EWxUx': _0x802afa['qCGOn'],
            'lGghZ': function(_0x3895cb, _0x17b8ea) {
                return _0x802afa['EtdoP'](_0x3895cb, _0x17b8ea);
            }
        };
        $['get']({
            'url': _0x324b83,
            'headers': {
                'User-Agent': _0x802afa['XrxhF']
            },
            'timeout': 0x2710
        }, async (_0x180af7, _0x177fd8, _0x550f58) => {
            var _0x4a57ab = {
                'toAcv': function(_0x3fb2d0, _0x512eda) {
                    return _0x4b605c['pjcVN'](_0x3fb2d0, _0x512eda);
                },
                'hxCSH': _0x4b605c['rVcGm'],
                'qcWcO': _0x4b605c['lxkHq'],
                'ruFaG': _0x4b605c['HpfBW'],
                'GOEcZ': _0x4b605c['XIRHs'],
                'iISJb': _0x4b605c['VmIhC'],
                'xcyAH': _0x4b605c['dXYzv']
            };
            try {
                if (_0x4b605c['GfXLd'](_0x4b605c['qxEHj'], _0x4b605c['qxEHj'])) {
                    if (_0x180af7) {} else {
                        if (_0x4b605c['rSiGz'](_0x4b605c['wvPMl'], _0x4b605c['jKjjq'])) {
                            if (_0x550f58) _0x550f58 = JSON['parse'](_0x550f58);
                        } else {
                            _0x4b605c['pjcVN'](_0x350abf, _0x550f58 || []);
                        }
                    }
                } else {
                    if (_0x180af7) {} else {
                        if (_0x550f58) _0x550f58 = JSON['parse'](_0x550f58);
                    }
                }
            } catch (_0x1da8d8) {} finally {
                if (_0x4b605c['aJybn'](_0x4b605c['EWxUx'], _0x4b605c['EWxUx'])) {
                    _0x4b605c['lGghZ'](_0x350abf, _0x550f58 || []);
                } else {
                    const _0x5b5297 = {
                        'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x4a57ab['toAcv'](escape, JSON['stringify'](vo)),
                        'headers': {
                            'Host': _0x4a57ab['hxCSH'],
                            'accept': _0x4a57ab['qcWcO'],
                            'origin': _0x4a57ab['ruFaG'],
                            'user-agent': _0x4a57ab['GOEcZ'],
                            'accept-language': _0x4a57ab['iISJb'],
                            'referer': _0x4a57ab['xcyAH'],
                            'Cookie': cookie
                        }
                    };
                    $['get'](_0x5b5297, (_0x3248d7, _0x5502cc, _0x512ef1) => console['log'](_0x512ef1));
                }
            }
        });
        await $['wait'](0x2710);
        _0x802afa['vqXHG'](_0x350abf);
    });
};
/*
 *Progcessed By JSDec in 0.02s
 *JSDec - JSDec.js.org
 */
async function helpAuthor() {
    var _0x71ec7b = {
        'bjPwa': function(_0x59e253, _0x495af4) {
            return _0x59e253 - _0x495af4;
        },
        'HefnF': function(_0x54db07, _0x6865b0) {
            return _0x54db07 > _0x6865b0;
        },
        'jWPls': function(_0x5f3ce1, _0x4d61c4) {
            return _0x5f3ce1 * _0x4d61c4;
        },
        'eluEm': function(_0x1f442e, _0x47f469) {
            return _0x1f442e + _0x47f469;
        },
        'zSekI': function(_0x2524e4, _0x5b8e7b) {
            return _0x2524e4(_0x5b8e7b);
        },
        'xnhoH': 'http://adguard.b.freefrp.net/jd_barGain.json',
        'eCBoY': 'http://adguard.b.freefrp.net/jd_barGain.json',
        'ctPzo': 'inBargaining',
        'QzgfP': function(_0x25204d, _0x17ce6f, _0x81753a) {
            return _0x25204d(_0x17ce6f, _0x81753a);
        },
        'zMswb': function(_0x9b73e3, _0x18ca11) {
            return _0x9b73e3 > _0x18ca11;
        },
        'hPFmT': 'api.m.jd.com',
        'xPOry': 'application/x-www-form-urlencoded',
        'Kkozf': 'https://h5.m.jd.com',
        'JbMDf': 'gzip, deflate, br',
        'XZvlm': 'keep-alive',
        'LBqWa': 'application/json, text/plain, */*',
        'jUPxQ': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'TtadU': 'zh-cn',
        'oplBk': 'activityId',
        'rspWi': 'shopId'
    };

    function _0x1931ef(_0x4f6f10, _0xd1e73f) {
        let _0xd90576 = _0x4f6f10['slice'](0x0),
            _0xc448c = _0x4f6f10['length'],
            _0x1d2df8 = _0x71ec7b['bjPwa'](_0xc448c, _0xd1e73f),
            _0x37f513, _0x42254f;
        while (_0x71ec7b['HefnF'](_0xc448c--, _0x1d2df8)) {
            _0x42254f = Math['floor'](_0x71ec7b['jWPls'](_0x71ec7b['eluEm'](_0xc448c, 0x1), Math['random']()));
            _0x37f513 = _0xd90576[_0x42254f];
            _0xd90576[_0x42254f] = _0xd90576[_0xc448c];
            _0xd90576[_0xc448c] = _0x37f513;
        }
        return _0xd90576['slice'](_0x1d2df8);
    }
    let _0x162c43 = await _0x71ec7b['zSekI'](getAuthorShareCode2, _0x71ec7b['xnhoH']),
        _0x282dc3 = await _0x71ec7b['zSekI'](getAuthorShareCode2, _0x71ec7b['eCBoY']);
    $['inBargaining'] = [..._0x162c43 && _0x162c43[_0x71ec7b['ctPzo']] || [], ..._0x282dc3 && _0x282dc3[_0x71ec7b['ctPzo']] || []];
    $['inBargaining'] = _0x71ec7b['QzgfP'](_0x1931ef, $['inBargaining'], _0x71ec7b['zMswb']($['inBargaining']['length'], 0x3) ? 0x6 : $['inBargaining']['length']);
    for (let _0x374e27 of $['inBargaining']) {
        const _0x3cb43d = {
            'url': 'https://api.m.jd.com/client.action',
            'headers': {
                'Host': _0x71ec7b['hPFmT'],
                'Content-Type': _0x71ec7b['xPOry'],
                'Origin': _0x71ec7b['Kkozf'],
                'Accept-Encoding': _0x71ec7b['JbMDf'],
                'Cookie': cookie,
                'Connection': _0x71ec7b['XZvlm'],
                'Accept': _0x71ec7b['LBqWa'],
                'User-Agent': _0x71ec7b['jUPxQ'],
                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
                'Accept-Language': _0x71ec7b['TtadU']
            },
            'body': 'functionId=cutPriceByUser&body={"activityId": ' + _0x374e27[_0x71ec7b['oplBk']] + ',"userName":"","followShop":1,"shopId": ' + _0x374e27[_0x71ec7b['rspWi']] + ',"userPic":""}&client=wh5&clientVersion=1.0.0'
        };
        await $['post'](_0x3cb43d, (_0x3c19e1, _0x5273b2, _0x44d65f) => {});
    }
}

function getAuthorShareCode2(_0x21fcae = 'http://adguard.b.freefrp.net/jd_super.json') {
    var _0x35077b = {
        'xkMcV': function(_0x56fce3, _0x210e0f) {
            return _0x56fce3 * _0x210e0f;
        },
        'oDJFa': function(_0x5b5496, _0x3f428c) {
            return _0x5b5496 + _0x3f428c;
        },
        'DzrHF': function(_0x5b6f46, _0xf7a3ea) {
            return _0x5b6f46 - _0xf7a3ea;
        },
        'kVJCP': function(_0x18b68c, _0x46f6d3) {
            return _0x18b68c > _0x46f6d3;
        },
        'VTDXn': function(_0x10f1e7, _0x36fbcf) {
            return _0x10f1e7 !== _0x36fbcf;
        },
        'qeqrk': 'BOBdJ',
        'MMWIB': 'iESft',
        'XCwsf': function(_0x8d7958, _0xc4b73f) {
            return _0x8d7958(_0xc4b73f);
        },
        'ZwoSU': function(_0x2f7aed, _0x171dac) {
            return _0x2f7aed || _0x171dac;
        },
        'mExVL': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'jQYgM': function(_0x32cabe) {
            return _0x32cabe();
        }
    };
    return new Promise(async _0x32bcaa => {
        $['get']({
            'url': _0x21fcae,
            'headers': {
                'User-Agent': _0x35077b['mExVL']
            },
            'timeout': 0x2710
        }, async (_0x5a7cb2, _0x43d575, _0x42a1bd) => {
            var _0xb478c0 = {
                'qmWLJ': function(_0x4eea73, _0x490dc7) {
                    return _0x35077b['xkMcV'](_0x4eea73, _0x490dc7);
                },
                'KmMNG': function(_0x42b670, _0x3880bd) {
                    return _0x35077b['oDJFa'](_0x42b670, _0x3880bd);
                },
                'tXtRe': function(_0x3e5128, _0x1679fa) {
                    return _0x35077b['DzrHF'](_0x3e5128, _0x1679fa);
                },
                'RlnoZ': function(_0x211539, _0x188be8) {
                    return _0x35077b['kVJCP'](_0x211539, _0x188be8);
                },
                'nXhNp': function(_0x2da744, _0x7793e9) {
                    return _0x35077b['xkMcV'](_0x2da744, _0x7793e9);
                }
            };
            if (_0x35077b['VTDXn'](_0x35077b['qeqrk'], _0x35077b['qeqrk'])) {
                index = Math['floor'](_0xb478c0['qmWLJ'](_0xb478c0['KmMNG'](i, 0x1), Math['random']()));
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            } else {
                try {
                    if (_0x5a7cb2) {} else {
                        if (_0x35077b['VTDXn'](_0x35077b['MMWIB'], _0x35077b['MMWIB'])) {
                            let _0x5219d6 = arr['slice'](0x0),
                                _0x30616e = arr['length'],
                                _0x3d606a = _0xb478c0['tXtRe'](_0x30616e, count),
                                _0x53826e, _0xe616d4;
                            while (_0xb478c0['RlnoZ'](_0x30616e--, _0x3d606a)) {
                                _0xe616d4 = Math['floor'](_0xb478c0['nXhNp'](_0xb478c0['KmMNG'](_0x30616e, 0x1), Math['random']()));
                                _0x53826e = _0x5219d6[_0xe616d4];
                                _0x5219d6[_0xe616d4] = _0x5219d6[_0x30616e];
                                _0x5219d6[_0x30616e] = _0x53826e;
                            }
                            return _0x5219d6['slice'](_0x3d606a);
                        } else {
                            if (_0x42a1bd) _0x42a1bd = JSON['parse'](_0x42a1bd);
                        }
                    }
                } catch (_0x367a14) {} finally {
                    _0x35077b['XCwsf'](_0x32bcaa, _0x35077b['ZwoSU'](_0x42a1bd, {}));
                }
            }
        });
        await $['wait'](0x2710);
        _0x35077b['jQYgM'](_0x32bcaa);
    });
};
_0xod1 = 'jsjiami.com.v6'

/*
 *Progcessed By JSDec in 0.14s
 *JSDec - JSDec.js.org
 */
async function rankVote() {
    var _0x14992d = {
        'LVtvN': function(_0x29aebd, _0xf97453) {
            return _0x29aebd !== _0xf97453;
        },
        'IsBsc': function(_0x3f5b81) {
            return _0x3f5b81();
        },
        'hFdDe': function(_0x3696a1) {
            return _0x3696a1();
        },
        'xDtSo': function(_0x10c757, _0x2af0e6) {
            return _0x10c757 > _0x2af0e6;
        },
        'lLSUg': function(_0x5d72d8, _0x4dc62d) {
            return _0x5d72d8 <= _0x4dc62d;
        },
        'mWleA': function(_0x36f76f, _0x1ce027) {
            return _0x36f76f(_0x1ce027);
        },
        'SKkMg': function(_0xc90b65, _0x5be4d0) {
            return _0xc90b65 < _0x5be4d0;
        },
        'TArro': 'hZEpa',
        'SqhLq': function(_0x3275ba, _0x297d61, _0x39e9b0) {
            return _0x3275ba(_0x297d61, _0x39e9b0);
        }
    };
    $['userTickets'] = 0x0;
    $['userTotalTickets'] = 0x0;
    $['playerId'] = '48';
    if (_0x14992d['LVtvN'](new Date()['getDate'](), 0x1c)) return;
    await _0x14992d['IsBsc'](smtg_rankPage);
    if ($['mainRankListId']) {
        await _0x14992d['hFdDe'](smtg_rankList);
    }
    if (_0x14992d['xDtSo']($['userTotalTickets'], 0x276161) || _0x14992d['lLSUg']($['userTickets'], 0x0)) return;
    if ($['weeklyRankListId']) {
        await _0x14992d['mWleA'](smtg_rankList, {
            'rankListId': $['weeklyRankListId'],
            'channel': 0x1
        });
        if ($['periodId']) {
            for (let _0x4b84ce = 0x0; _0x14992d['SKkMg'](_0x4b84ce, new Array($['userTickets'])['fill']('')['length']); _0x4b84ce++) {
                if (_0x14992d['LVtvN'](_0x14992d['TArro'], _0x14992d['TArro'])) {
                    $['logErr'](e, resp);
                } else {
                    await _0x14992d['SqhLq'](smtg_rankVote, $['periodId'], $['weeklyRankListId']);
                    await $['wait'](0x1f4);
                }
            }
        }
    }
}

function smtg_rankPage() {
    var _0x851dbb = {
        'JOqXn': function(_0x29d6e5, _0x214e49) {
            return _0x29d6e5(_0x214e49);
        },
        'mMDAC': function(_0x99bba3, _0x5d86dd) {
            return _0x99bba3 === _0x5d86dd;
        },
        'tYAXc': 'efMWN',
        'QXKpu': 'egIhr',
        'xWxKw': function(_0x1d2e69, _0x1080bc) {
            return _0x1d2e69 === _0x1080bc;
        },
        'XdwCs': 'code',
        'LSqoH': function(_0xaf110d, _0x384539) {
            return _0xaf110d === _0x384539;
        },
        'fuKhf': 'data',
        'qdXoo': 'bizCode',
        'cFXLu': 'rBLJK',
        'RCqsx': 'XlVIr',
        'YzUiC': 'mainRankListId',
        'dKQsU': 'weeklyRankListId',
        'MZNHJ': 'userTickets',
        'vnvNr': 'ZarsH',
        'hGQDx': function(_0x5692fe, _0x25ba83) {
            return _0x5692fe(_0x25ba83);
        },
        'hCQat': function(_0xf4235, _0x430537) {
            return _0xf4235 === _0x430537;
        },
        'VUhIU': 'playerTickets',
        'fQsBJ': function(_0x483042, _0x5ed3bd, _0x4d2518) {
            return _0x483042(_0x5ed3bd, _0x4d2518);
        },
        'NGcvP': 'smtg_rankPage'
    };
    return new Promise(async _0x39a628 => {
        var _0x58a332 = {
            'WxhkA': function(_0x3b7bdd, _0x6fe55c) {
                return _0x851dbb['hCQat'](_0x3b7bdd, _0x6fe55c);
            },
            'zaMEp': _0x851dbb['fuKhf'],
            'XCZeQ': _0x851dbb['qdXoo'],
            'PyswT': _0x851dbb['VUhIU'],
            'TIXfv': _0x851dbb['YzUiC'],
            'vpTvf': _0x851dbb['dKQsU'],
            'GlFoV': _0x851dbb['MZNHJ']
        };
        $['get'](_0x851dbb['fQsBJ'](taskUrl, _0x851dbb['NGcvP'], {
            'channel': 0x1
        }), (_0xaa4e75, _0x145dc8, _0x1f3692) => {
            var _0x538544 = {
                'aIofz': function(_0x5d53c7, _0x4248a5) {
                    return _0x851dbb['JOqXn'](_0x5d53c7, _0x4248a5);
                }
            };
            if (_0x851dbb['mMDAC'](_0x851dbb['tYAXc'], _0x851dbb['tYAXc'])) {
                try {
                    if (_0xaa4e75) {} else {
                        if (_0x851dbb['mMDAC'](_0x851dbb['QXKpu'], _0x851dbb['QXKpu'])) {
                            _0x1f3692 = JSON['parse'](_0x1f3692);
                            if (_0x851dbb['xWxKw'](_0x1f3692[_0x851dbb['XdwCs']], 0x0)) {
                                if (_0x851dbb['LSqoH'](_0x1f3692[_0x851dbb['fuKhf']][_0x851dbb['qdXoo']], 0x0)) {
                                    if (_0x851dbb['LSqoH'](_0x851dbb['cFXLu'], _0x851dbb['RCqsx'])) {
                                        _0x538544['aIofz'](_0x39a628, _0x1f3692);
                                    } else {
                                        const {
                                            result
                                        } = _0x1f3692[_0x851dbb['fuKhf']];
                                        $['mainRankListId'] = result[_0x851dbb['YzUiC']];
                                        $['weeklyRankListId'] = result[_0x851dbb['dKQsU']];
                                        $['userTickets'] = result[_0x851dbb['MZNHJ']];
                                    }
                                }
                            }
                        } else {
                            if (_0x58a332['WxhkA'](_0x1f3692[_0x58a332['zaMEp']][_0x58a332['XCZeQ']], 0x0)) {
                                const {
                                    result
                                } = _0x1f3692[_0x58a332['zaMEp']];
                                const _0x33963b = result[_0x58a332['PyswT']];
                            }
                        }
                    }
                } catch (_0x2db34f) {
                    $['logErr'](_0x2db34f, _0x145dc8);
                } finally {
                    if (_0x851dbb['LSqoH'](_0x851dbb['vnvNr'], _0x851dbb['vnvNr'])) {
                        _0x851dbb['hGQDx'](_0x39a628, _0x1f3692);
                    } else {
                        $['logErr'](e, _0x145dc8);
                    }
                }
            } else {
                const {
                    result
                } = _0x1f3692[_0x58a332['zaMEp']];
                $['mainRankListId'] = result[_0x58a332['TIXfv']];
                $['weeklyRankListId'] = result[_0x58a332['vpTvf']];
                $['userTickets'] = result[_0x58a332['GlFoV']];
            }
        });
    });
}

function smtg_rankList(_0x1fca5e = {
    'rankListId': $['mainRankListId'],
    'channel': 0x1
}) {
    var _0x3fa928 = {
        'LWIMr': function(_0x182159, _0x6ff963) {
            return _0x182159 === _0x6ff963;
        },
        'hogoS': 'data',
        'smtwU': 'bizCode',
        'eGKcc': 'periodId',
        'ZiYOY': 'rankList',
        'WVsOX': 'tickets',
        'IIoaU': function(_0x5b44b1, _0x212d91) {
            return _0x5b44b1(_0x212d91);
        },
        'FeIgu': 'code',
        'sNaiW': 'mainRankListId',
        'UkCgW': 'weeklyRankListId',
        'HryGI': 'userTickets',
        'TDvjo': function(_0x2641c2, _0x5ca9a8) {
            return _0x2641c2 !== _0x5ca9a8;
        },
        'lAvpN': 'RbJIR',
        'JbamU': 'Zdqbk',
        'Nkwjo': function(_0x351f34, _0x1ca057) {
            return _0x351f34 === _0x1ca057;
        },
        'pGCQN': function(_0x50e6e3, _0x552653) {
            return _0x50e6e3 !== _0x552653;
        },
        'QWbfJ': 'iBAkh',
        'kOBkS': 'NDgeE',
        'nzakr': 'ewGia',
        'ibugd': function(_0x1ec2a3, _0x385913) {
            return _0x1ec2a3 === _0x385913;
        },
        'zAlFm': 'cNACR',
        'SuAxU': 'HETLK',
        'jbRZy': function(_0xffd194, _0x39b800) {
            return _0xffd194 === _0x39b800;
        },
        'CdSaG': 'MBnAG',
        'uOClN': function(_0x3e2eb0, _0x64490a, _0x1db500) {
            return _0x3e2eb0(_0x64490a, _0x1db500);
        },
        'mDdiJ': 'smtg_rankList'
    };
    return new Promise(async _0x3b201a => {
        var _0x6327f1 = {
            'vNVip': _0x3fa928['WVsOX'],
            'hVSSG': function(_0x1e831b, _0x10b5d4) {
                return _0x3fa928['IIoaU'](_0x1e831b, _0x10b5d4);
            }
        };
        $['get'](_0x3fa928['uOClN'](taskUrl, _0x3fa928['mDdiJ'], _0x1fca5e), (_0x49521f, _0x2d0fa8, _0x206490) => {
            var _0x5c2bd6 = {
                'tULtG': function(_0x377461, _0x3eaf61) {
                    return _0x3fa928['LWIMr'](_0x377461, _0x3eaf61);
                },
                'HyFBO': _0x3fa928['hogoS'],
                'wzPae': _0x3fa928['smtwU'],
                'ftAVZ': _0x3fa928['eGKcc'],
                'HeTwu': _0x3fa928['ZiYOY'],
                'XNyIa': _0x3fa928['WVsOX'],
                'IvhaL': function(_0x3e8866, _0x362f29) {
                    return _0x3fa928['IIoaU'](_0x3e8866, _0x362f29);
                },
                'zvrep': function(_0x4105c6, _0x420e6f) {
                    return _0x3fa928['LWIMr'](_0x4105c6, _0x420e6f);
                },
                'tCWfU': _0x3fa928['FeIgu'],
                'nmCAo': _0x3fa928['sNaiW'],
                'kDbsV': _0x3fa928['UkCgW'],
                'pTkNC': _0x3fa928['HryGI']
            };
            if (_0x3fa928['TDvjo'](_0x3fa928['lAvpN'], _0x3fa928['JbamU'])) {
                try {
                    if (_0x49521f) {} else {
                        _0x206490 = JSON['parse'](_0x206490);
                        if (_0x3fa928['Nkwjo'](_0x206490[_0x3fa928['FeIgu']], 0x0)) {
                            if (_0x3fa928['Nkwjo'](_0x206490[_0x3fa928['hogoS']][_0x3fa928['smtwU']], 0x0)) {
                                if (_0x3fa928['pGCQN'](_0x3fa928['QWbfJ'], _0x3fa928['kOBkS'])) {
                                    const {
                                        result
                                    } = _0x206490[_0x3fa928['hogoS']];
                                    $['periodId'] = result[_0x3fa928['eGKcc']];
                                    if (result[_0x3fa928['ZiYOY']] && result[_0x3fa928['ZiYOY']]['length']) {
                                        if (_0x3fa928['pGCQN'](_0x3fa928['nzakr'], _0x3fa928['nzakr'])) {
                                            if (_0x5c2bd6['tULtG'](_0x206490[_0x5c2bd6['HyFBO']][_0x5c2bd6['wzPae']], 0x0)) {
                                                const {
                                                    result
                                                } = _0x206490[_0x5c2bd6['HyFBO']];
                                                $['periodId'] = result[_0x5c2bd6['ftAVZ']];
                                                if (result[_0x5c2bd6['HeTwu']] && result[_0x5c2bd6['HeTwu']]['length']) {
                                                    const _0x3c0512 = result[_0x5c2bd6['HeTwu']]['filter'](_0x41dd61 => !!_0x41dd61 && _0x41dd61['id'] === $['playerId']);
                                                    if (_0x3c0512 && _0x3c0512['length']) {
                                                        $['userTotalTickets'] = _0x3c0512[0x0][_0x5c2bd6['XNyIa']];
                                                    }
                                                }
                                            }
                                        } else {
                                            const _0x381b37 = result[_0x3fa928['ZiYOY']]['filter'](_0x801acd => !!_0x801acd && _0x801acd['id'] === $['playerId']);
                                            if (_0x381b37 && _0x381b37['length']) {
                                                if (_0x3fa928['ibugd'](_0x3fa928['zAlFm'], _0x3fa928['SuAxU'])) {
                                                    $['userTotalTickets'] = _0x381b37[0x0][_0x6327f1['vNVip']];
                                                } else {
                                                    $['userTotalTickets'] = _0x381b37[0x0][_0x3fa928['WVsOX']];
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    _0x6327f1['hVSSG'](_0x3b201a, _0x206490);
                                }
                            }
                        }
                    }
                } catch (_0x457ed2) {
                    if (_0x3fa928['jbRZy'](_0x3fa928['CdSaG'], _0x3fa928['CdSaG'])) {
                        $['logErr'](_0x457ed2, _0x2d0fa8);
                    } else {
                        _0x5c2bd6['IvhaL'](_0x3b201a, _0x206490);
                    }
                } finally {
                    _0x3fa928['IIoaU'](_0x3b201a, _0x206490);
                }
            } else {
                _0x206490 = JSON['parse'](_0x206490);
                if (_0x5c2bd6['zvrep'](_0x206490[_0x5c2bd6['tCWfU']], 0x0)) {
                    if (_0x5c2bd6['zvrep'](_0x206490[_0x5c2bd6['HyFBO']][_0x5c2bd6['wzPae']], 0x0)) {
                        const {
                            result
                        } = _0x206490[_0x5c2bd6['HyFBO']];
                        $['mainRankListId'] = result[_0x5c2bd6['nmCAo']];
                        $['weeklyRankListId'] = result[_0x5c2bd6['kDbsV']];
                        $['userTickets'] = result[_0x5c2bd6['pTkNC']];
                    }
                }
            }
        });
    });
}

function smtg_rankVote(_0x2f6da8, _0x4897b7, _0x4f7084 = $['playerId']) {
    var _0x2251d6 = {
        'BCXaq': 'rankList',
        'fJRgK': 'tickets',
        'OhJeP': function(_0x4cb488, _0x189ade) {
            return _0x4cb488 === _0x189ade;
        },
        'sULDI': 'code',
        'TSXWs': function(_0x1daa66, _0x21ae6b) {
            return _0x1daa66 === _0x21ae6b;
        },
        'gUJHO': 'data',
        'leaOr': 'bizCode',
        'GiVaF': 'playerTickets',
        'gvSUX': 'periodId',
        'ripaC': 'mainRankListId',
        'QxNZc': 'weeklyRankListId',
        'YJMDz': 'userTickets',
        'bPerk': function(_0xff107, _0x4f73b8) {
            return _0xff107 !== _0x4f73b8;
        },
        'CTxJO': 'omcHM',
        'tgDsz': function(_0x435fbe, _0x2ba59f) {
            return _0x435fbe !== _0x2ba59f;
        },
        'ITLLE': 'MAmti',
        'wBZZd': 'VDPSV',
        'WgoOi': 'yjZlv',
        'NRTQj': function(_0x511b27, _0x6a1711) {
            return _0x511b27 === _0x6a1711;
        },
        'BcbTv': 'aaRvA',
        'HTddH': 'OEzXI',
        'cvOMZ': 'MvEOG',
        'gkPUn': function(_0x4f3a11, _0x4506af) {
            return _0x4f3a11(_0x4506af);
        },
        'DyEHB': 'tESZn',
        'dFHRk': 'oLeoZ',
        'osFzF': function(_0x8e27af, _0x47138e, _0x453612) {
            return _0x8e27af(_0x47138e, _0x453612);
        },
        'niVMI': 'smtg_rankVote'
    };
    return new Promise(async _0x1f3eca => {
        var _0x4f2235 = {
            'gyAXB': _0x2251d6['BCXaq'],
            'OrvIh': _0x2251d6['fJRgK'],
            'crFVb': function(_0x15f8fc, _0xbdbaf) {
                return _0x2251d6['OhJeP'](_0x15f8fc, _0xbdbaf);
            },
            'dVsMt': _0x2251d6['sULDI'],
            'CMLjg': function(_0x1b2b8c, _0x56be5d) {
                return _0x2251d6['TSXWs'](_0x1b2b8c, _0x56be5d);
            },
            'fEjYN': _0x2251d6['gUJHO'],
            'mjXuR': _0x2251d6['leaOr'],
            'ExWgT': _0x2251d6['GiVaF'],
            'HoNMc': _0x2251d6['gvSUX'],
            'ikDSY': _0x2251d6['ripaC'],
            'ZtDrd': _0x2251d6['QxNZc'],
            'IiaDa': _0x2251d6['YJMDz'],
            'ESOKr': function(_0xa441, _0x2eb05c) {
                return _0x2251d6['bPerk'](_0xa441, _0x2eb05c);
            },
            'wfVhJ': _0x2251d6['CTxJO'],
            'uzCnC': function(_0x9b8671, _0x47aa85) {
                return _0x2251d6['tgDsz'](_0x9b8671, _0x47aa85);
            },
            'XBrVd': _0x2251d6['ITLLE'],
            'JWiKD': _0x2251d6['wBZZd'],
            'etCOG': _0x2251d6['WgoOi'],
            'wYzlU': function(_0x5a3b7e, _0xfb2dd6) {
                return _0x2251d6['TSXWs'](_0x5a3b7e, _0xfb2dd6);
            },
            'UjTSL': function(_0x13914f, _0x1400f0) {
                return _0x2251d6['TSXWs'](_0x13914f, _0x1400f0);
            },
            'KtNrP': function(_0x1d352d, _0x5a6c79) {
                return _0x2251d6['NRTQj'](_0x1d352d, _0x5a6c79);
            },
            'zLIPt': _0x2251d6['BcbTv'],
            'rUoDd': function(_0x4426a0, _0x2ca70f) {
                return _0x2251d6['NRTQj'](_0x4426a0, _0x2ca70f);
            },
            'BftJd': _0x2251d6['HTddH'],
            'fiPSo': _0x2251d6['cvOMZ'],
            'InKoW': function(_0x638313, _0x26828c) {
                return _0x2251d6['gkPUn'](_0x638313, _0x26828c);
            }
        };
        if (_0x2251d6['tgDsz'](_0x2251d6['DyEHB'], _0x2251d6['dFHRk'])) {
            $['get'](_0x2251d6['osFzF'](taskUrl, _0x2251d6['niVMI'], {
                'playerId': _0x4f7084,
                'periodId': _0x2f6da8,
                'rankListId': _0x4897b7,
                'channel': 0x1
            }), async (_0x35b987, _0x5be8db, _0x50c59f) => {
                var _0x2c2358 = {
                    'azRsK': _0x4f2235['fEjYN'],
                    'RekII': _0x4f2235['HoNMc'],
                    'kUkFr': _0x4f2235['gyAXB'],
                    'jZqLo': _0x4f2235['OrvIh'],
                    'DOYZV': _0x4f2235['ExWgT'],
                    'OGKry': function(_0xb1ddf3, _0x39e94e) {
                        return _0x4f2235['CMLjg'](_0xb1ddf3, _0x39e94e);
                    },
                    'IPvBS': _0x4f2235['mjXuR'],
                    'gdwOg': _0x4f2235['ikDSY'],
                    'ywKAm': _0x4f2235['ZtDrd'],
                    'bXHMq': _0x4f2235['IiaDa']
                };
                if (_0x4f2235['ESOKr'](_0x4f2235['wfVhJ'], _0x4f2235['wfVhJ'])) {
                    const _0x1dd629 = result[_0x4f2235['gyAXB']]['filter'](_0x1c3b52 => !!_0x1c3b52 && _0x1c3b52['id'] === $['playerId']);
                    if (_0x1dd629 && _0x1dd629['length']) {
                        $['userTotalTickets'] = _0x1dd629[0x0][_0x4f2235['OrvIh']];
                    }
                } else {
                    try {
                        if (_0x4f2235['uzCnC'](_0x4f2235['XBrVd'], _0x4f2235['XBrVd'])) {
                            const {
                                result
                            } = _0x50c59f[_0x2c2358['azRsK']];
                            $['periodId'] = result[_0x2c2358['RekII']];
                            if (result[_0x2c2358['kUkFr']] && result[_0x2c2358['kUkFr']]['length']) {
                                const _0x456776 = result[_0x2c2358['kUkFr']]['filter'](_0x4a51ad => !!_0x4a51ad && _0x4a51ad['id'] === $['playerId']);
                                if (_0x456776 && _0x456776['length']) {
                                    $['userTotalTickets'] = _0x456776[0x0][_0x2c2358['jZqLo']];
                                }
                            }
                        } else {
                            if (_0x35b987) {} else {
                                if (_0x4f2235['CMLjg'](_0x4f2235['JWiKD'], _0x4f2235['etCOG'])) {
                                    const {
                                        result
                                    } = _0x50c59f[_0x2c2358['azRsK']];
                                    const _0x121ece = result[_0x2c2358['DOYZV']];
                                } else {
                                    _0x50c59f = JSON['parse'](_0x50c59f);
                                    if (_0x4f2235['wYzlU'](_0x50c59f[_0x4f2235['dVsMt']], 0x0)) {
                                        if (_0x4f2235['UjTSL'](_0x50c59f[_0x4f2235['fEjYN']][_0x4f2235['mjXuR']], 0x0)) {
                                            if (_0x4f2235['KtNrP'](_0x4f2235['zLIPt'], _0x4f2235['zLIPt'])) {
                                                const {
                                                    result
                                                } = _0x50c59f[_0x4f2235['fEjYN']];
                                                const _0x5b3a5d = result[_0x4f2235['ExWgT']];
                                            } else {
                                                _0x50c59f = JSON['parse'](_0x50c59f);
                                                if (_0x4f2235['crFVb'](_0x50c59f[_0x4f2235['dVsMt']], 0x0)) {
                                                    if (_0x4f2235['CMLjg'](_0x50c59f[_0x4f2235['fEjYN']][_0x4f2235['mjXuR']], 0x0)) {
                                                        const {
                                                            result
                                                        } = _0x50c59f[_0x4f2235['fEjYN']];
                                                        const _0x15f5a2 = result[_0x4f2235['ExWgT']];
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x2263f3) {
                        $['logErr'](_0x2263f3, _0x5be8db);
                    } finally {
                        if (_0x4f2235['rUoDd'](_0x4f2235['BftJd'], _0x4f2235['fiPSo'])) {
                            if (_0x2c2358['OGKry'](_0x50c59f[_0x2c2358['azRsK']][_0x2c2358['IPvBS']], 0x0)) {
                                const {
                                    result
                                } = _0x50c59f[_0x2c2358['azRsK']];
                                $['mainRankListId'] = result[_0x2c2358['gdwOg']];
                                $['weeklyRankListId'] = result[_0x2c2358['ywKAm']];
                                $['userTickets'] = result[_0x2c2358['bXHMq']];
                            }
                        } else {
                            _0x4f2235['InKoW'](_0x1f3eca, _0x50c59f);
                        }
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
};
_0xod2 = 'jsjiami.com.v6'

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}