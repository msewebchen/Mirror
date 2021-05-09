/*

活动入口：京东众筹-众筹许愿池
短期活动

已支持IOS京东双账号,云端N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
注：会自动关注任务中的店铺跟商品，介意者勿使用。
=====================================Quantumult X=================================
[task_local]
10 10,15 13-20 3 * https://raw.githubusercontent.com/i-chenzhe/qx/main/z_wish.js, tag=众筹许愿池, enabled=true
=====================================Loon================================
[Script]
cron "10 10,15 13-20 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_wish.js,tag=众筹许愿池
======================================Surge==========================
众筹许愿池 = type=cron,cronexp="10 10,15 13-20 3 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_wish.js
====================================小火箭=============================
众筹许愿池 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_wish.js, cronexpr="10 10,15 13-20 3 *", timeout=3600, enable=true
*/
const $ = new Env('众筹许愿池');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const JD_API_HOST = 'https://api.m.jd.com/client.action/';
//Node.js用户请在jdCookie.js处填写京东ck;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message = '', assistList = [];
let helpAuthor = false;//为作者助力的开关
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
/*
 *Progcessed By JSDec in 0.15s
 *JSDec - JSDec.js.org
 */
!(async () => {
    var _0x1a63e3 = {
        'uDOxG': function(_0x166ea8) {
            return _0x166ea8();
        },
        'lICPy': 'api.m.jd.com',
        'zUyzL': 'https://h5.m.jd.com',
        'QxSwE': 'gzip, deflate, br',
        'fzNbJ': 'application/json, text/plain, */*',
        'uxBtc': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'DxElH': 'zh-cn',
        'oXeDB': function(_0x1bb7cd) {
            return _0x1bb7cd();
        },
        'lcunM': 'application/json',
        'RXnuX': 'https://bean.m.jd.com/',
        'bzrKr': function(_0x464eb9, _0x1fd564) {
            return _0x464eb9 < _0x1fd564;
        },
        'aKAeX': function(_0x512589, _0x3c3a67) {
            return _0x512589(_0x3c3a67);
        },
        'XwxQA': function(_0x435aa1, _0x51dc05) {
            return _0x435aa1 + _0x51dc05;
        },
        'afXNH': function(_0x53bcad) {
            return _0x53bcad();
        },
        'bfbDQ': function(_0x1bfdb6, _0xcf0eb4) {
            return _0x1bfdb6 !== _0xcf0eb4;
        },
        'IcJvj': function(_0x8c9a36, _0xf314f6) {
            return _0x8c9a36 === _0xf314f6;
        },
        'qoBJm': function(_0x1de217, _0x1f4e96, _0xc730e0) {
            return _0x1de217(_0x1f4e96, _0xc730e0);
        },
        'FxSaf': function(_0x129a42, _0x38110e, _0x13e54b) {
            return _0x129a42(_0x38110e, _0x13e54b);
        },
        'KLdCL': function(_0x4f9ece) {
            return _0x4f9ece();
        },
        'iihon': '有点东西进账'
    };
    $['log']('脚本版本 210508\n更新时间:2021-05-08 14:51');
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', _0x1a63e3['RXnuX'], {
            'open-url': _0x1a63e3['RXnuX']
        });
        return;
    }
    //本期活动ID更改位置
    $['appId'] = '1EFRYxg';
    for (let _0x50b253 = 0x0; _0x1a63e3['bzrKr'](_0x50b253, cookiesArr['length']); _0x50b253++) {
        if (cookiesArr[_0x50b253]) {
            cookie = cookiesArr[_0x50b253];
            $['UserName'] = _0x1a63e3['aKAeX'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x1a63e3['XwxQA'](_0x50b253, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x1a63e3['oXeDB'](checkCookie);
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/', {
                    'open-url': 'https://bean.m.jd.com/'
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                } else {
                    $['setdata']('', 'CookieJD' + (_0x50b253 ? _0x1a63e3['XwxQA'](_0x50b253, 0x1) : ''));
                }
                continue;
            }
            if (helpAuthor) {
                function _0x62aea6() {
                    return new Promise(_0x3d3865 => {
                        $['get']({
                            'url': ''
                        }, (_0x377709, _0x291975, _0x124d11) => {
                            try {
                                if (_0x124d11) {
                                    $['zData'] = JSON['parse'](_0x124d11);
                                };
                            } catch (_0x50230c) {
                                console['log'](_0x50230c);
                            } finally {
                                _0x3d3865();
                            };
                        });
                    });
                }

                function _0x2e2055(_0x56e7d4, _0x42a597) {
                    var _0x150149 = {
                        'JPaDV': function(_0x4ff206) {
                            return _0x1a63e3['uDOxG'](_0x4ff206);
                        }
                    };
                    let _0x3f6fcb = {
                        'url': 'https://api.m.jd.com/client.action',
                        'headers': {
                            'Host': _0x1a63e3['lICPy'],
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Origin': _0x1a63e3['zUyzL'],
                            'Accept-Encoding': _0x1a63e3['QxSwE'],
                            'Cookie': cookie,
                            'Connection': 'keep-alive',
                            'Accept': _0x1a63e3['fzNbJ'],
                            'User-Agent': _0x1a63e3['uxBtc'],
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + _0x56e7d4 + '&way=0&lng=&lat=&sid=&un_area=',
                            'Accept-Language': _0x1a63e3['DxElH']
                        },
                        'body': 'functionId=cutPriceByUser&body={"activityId":"' + _0x56e7d4 + '\",\"userName\":\"\",\"followShop\":1,\"shopId\":' + _0x42a597 + ',\"userPic\":\"\"}&client=wh5&clientVersion=1.0.0'
                    };
                    return new Promise(_0x33dd3b => {
                        var _0x310719 = {
                            'ShqBn': function(_0x35e2f5) {
                                return _0x150149['JPaDV'](_0x35e2f5);
                            }
                        };
                        $['post'](_0x3f6fcb, (_0xb0c800, _0x324d6e, _0x2c910e) => {
                            if (_0x2c910e) {
                                $['zRes'] = JSON['parse'](_0x2c910e);
                                _0x310719['ShqBn'](_0x33dd3b);
                            };
                        });
                    });
                }

                function _0x145522(_0x5987eb, _0x498367) {
                    var _0x2b42d3 = {
                        'ueamp': function(_0x13aa14) {
                            return _0x1a63e3['oXeDB'](_0x13aa14);
                        }
                    };
                    let _0x56863f = {
                        'url': 'https://api.r2ray.com/jd.bargain/done',
                        'headers': {
                            'Content-Type': _0x1a63e3['lcunM']
                        },
                        'body': JSON['stringify']({
                            'actID': _0x5987eb,
                            'actsID': _0x498367,
                            'done': 0x1
                        })
                    };
                    return new Promise(_0x5b6354 => {
                        var _0x53ccea = {
                            'jSPSQ': function(_0x2fa4da) {
                                return _0x2b42d3['ueamp'](_0x2fa4da);
                            }
                        };
                        $['post'](_0x56863f, (_0x7ae58f, _0x4bb9fe, _0xefda6a) => {
                            _0x53ccea['jSPSQ'](_0x5b6354);
                        });
                    });
                }
                await _0x1a63e3['afXNH'](_0x62aea6);
                if (_0x1a63e3['bfbDQ']($['zData']['data']['length'], 0x0)) {
                    for (let _0x50b253 = 0x0; _0x50b253 < $['zData']['data']['length']; _0x50b253++) {
                        var _0x275a3d = '3|1|4|2|0' ['split']('|'),
                            _0x5afe96 = 0x0;
                        while (!![]) {
                            switch (_0x275a3d[_0x5afe96++]) {
                                case '0':
                                    if ($['Res'] && _0x1a63e3['IcJvj']($['Res']['status'], 0x4)) {
                                        await _0x1a63e3['qoBJm'](_0x145522, actID, actsID);
                                    }
                                    continue;
                                case '1':
                                    actsID = $['zData']['data'][_0x50b253]['actsID'];
                                    continue;
                                case '2':
                                    await $['wait'](0x5dc);
                                    continue;
                                case '3':
                                    actID = $['zData']['data'][_0x50b253]['actID'];
                                    continue;
                                case '4':
                                    await _0x1a63e3['FxSaf'](_0x2e2055, actID, actsID);
                                    continue;
                            }
                            break;
                        }
                    };
                };
            };
            await _0x1a63e3['KLdCL'](wish);
        }
    }
    if (_0x1a63e3['bfbDQ'](message, '')) {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'], message);
        } else {
            $['msg']($['name'], _0x1a63e3['iihon'], message);
        }
    }
})()['catch'](_0x503673 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x503673 + '!', '');
})['finally'](() => {
    $['done']();
});
async function wish() {
    var _0x4a0b87 = {
        'PrAwE': '获取活动信息',
        'THDLH': function(_0x332b39, _0x46e01c, _0x27519b) {
            return _0x332b39(_0x46e01c, _0x27519b);
        },
        'Rtgwd': 'healthyDay_getHomeData',
        'biSoA': function(_0x4f8f4a, _0x47d42d) {
            return _0x4f8f4a - _0x47d42d;
        },
        'BdmLv': function(_0x21d257, _0x38afc6, _0x2609e6) {
            return _0x21d257(_0x38afc6, _0x2609e6);
        },
        'aovLa': 'harmony_collectScore',
        'WzirW': function(_0x84f75b, _0x1eb665) {
            return _0x84f75b > _0x1eb665;
        },
        'zhQyZ': function(_0xeec3a, _0x185675) {
            return _0xeec3a > _0x185675;
        },
        'UQHNt': function(_0x9ed6e9, _0x49c452) {
            return _0x9ed6e9 - _0x49c452;
        },
        'gnjeF': '1|2|3|4|0',
        'PvpIE': function(_0x5505ef, _0x36d588) {
            return _0x5505ef * _0x36d588;
        },
        'SBzRi': function(_0x449e92, _0x21d2c8, _0x20b25a) {
            return _0x449e92(_0x21d2c8, _0x20b25a);
        },
        'DemHJ': function(_0x1b4822, _0x41d757) {
            return _0x1b4822 - _0x41d757;
        },
        'mgETz': function(_0x498705, _0x5a13a9) {
            return _0x498705 < _0x5a13a9;
        },
        'hjamC': '添加助力码到本地助力池',
        'cRBJf': function(_0x5ceffc, _0x4614ab) {
            return _0x5ceffc / _0x4614ab;
        },
        'EjmzW': '去抽奖',
        'MVkIo': 'interact_template_getLotteryResult'
    };
    $['risk'] = ![];
    $['bean'] = 0x0;
    $['log'](_0x4a0b87['PrAwE']);
    await _0x4a0b87['THDLH'](doSomething, _0x4a0b87['Rtgwd'], '{\"appId\":\"' + $['appId'] + '","taskToken":"","channelId":1}');
    if (!$['risk']) {
        if ($['taskVos']) {
            for (const _0x4faad1 of $['taskVos']) {
                switch (_0x4faad1['taskType']) {
                    case 0xd:
                        if (_0x4a0b87['biSoA'](_0x4faad1['maxTimes'], _0x4faad1['times']) > 0x0) {
                            taskToken = _0x4faad1['simpleRecordInfoVo']['taskToken'];
                            $['log']('执行' + _0x4faad1['taskName']);
                            await _0x4a0b87['BdmLv'](doSomething, _0x4a0b87['aovLa'], '{"appId":"' + $['appId'] + '","taskToken":"' + taskToken + '","taskId":' + _0x4faad1['taskId'] + ',"actionType":"0"}');
                            await $['wait'](0x3e8);
                        } else {
                            $['log']('已经完成所有' + _0x4faad1['taskName'] + '任务');
                        }
                        break;
                    case 0x1a:
                        if (_0x4a0b87['WzirW'](_0x4a0b87['biSoA'](_0x4faad1['maxTimes'], _0x4faad1['times']), 0x0)) {
                            taskTokenList = _0x4faad1['shoppingActivityVos']['filter'](_0x1cd623 => _0x1cd623['status'] === 0x1);
                            for (const _0x1a7204 of taskTokenList) {
                                $['log']('执行' + _0x4faad1['taskName']);
                                await doSomething('harmony_collectScore', '{\"appId\":\"' + $['appId'] + '\",\"taskToken\":\"' + _0x1a7204['taskToken'] + '","taskId":' + _0x4faad1['taskId'] + ',\"actionType\":\"0\"}');
                                await $['wait'](0x3e8);
                            }
                        } else {
                            $['log']('已经完成所有' + _0x4faad1['taskName'] + '任务');
                        }
                        break;
                    case 0x8:
                        if (_0x4a0b87['zhQyZ'](_0x4a0b87['UQHNt'](_0x4faad1['maxTimes'], _0x4faad1['times']), 0x0)) {
                            taskTokenList = _0x4faad1['productInfoVos']['filter'](_0x56076e => _0x56076e['status'] === 0x1);
                            for (const _0x1c74c8 of taskTokenList) {
                                var _0x411a3d = _0x4a0b87['gnjeF']['split']('|'),
                                    _0x11bc5c = 0x0;
                                while (!![]) {
                                    switch (_0x411a3d[_0x11bc5c++]) {
                                        case '0':
                                            await $['wait'](0x3e8);
                                            continue;
                                        case '1':
                                            $['log']('执行' + _0x4faad1['taskName']);
                                            continue;
                                        case '2':
                                            await _0x4a0b87['BdmLv'](doSomething, _0x4a0b87['aovLa'], '{"appId":"' + $['appId'] + '","taskToken":"' + _0x1c74c8['taskToken'] + '","taskId":' + _0x4faad1['taskId'] + ',"actionType":"1"}');
                                            continue;
                                        case '3':
                                            await $['wait'](_0x4a0b87['PvpIE'](0x3e8, _0x4faad1['waitDuration']));
                                            continue;
                                        case '4':
                                            await _0x4a0b87['SBzRi'](doSomething, 'harmony_collectScore', '{\"appId\":\"' + $['appId'] + '\",\"taskToken\":\"' + _0x1c74c8['taskToken'] + '\",\"taskId\":' + _0x4faad1['taskId'] + ',\"actionType\":\"0\"}');
                                            continue;
                                    }
                                    break;
                                }
                            }
                        } else {
                            $['log']('已经完成所有' + _0x4faad1['taskName'] + '任务');
                        }
                        break;
                    case 0xe:
                        if (_0x4a0b87['DemHJ'](_0x4faad1['maxTimes'], _0x4faad1['times']) > 0x0) {
                            $['helpDone'] = ![];
                            for (let _0x404783 = 0x0; _0x4a0b87['mgETz'](_0x404783, assistList['length']); _0x404783++) {
                                if (!$['helpDone']) {
                                    $['log']('执行' + _0x4faad1['taskName']);
                                    await _0x4a0b87['SBzRi'](doSomething, 'harmony_collectScore', '{\"appId\":\"' + $['appId'] + '","taskToken":"' + assistList[_0x404783] + '\",\"taskId\":' + _0x4faad1['taskId'] + ',\"actionType\":\"0\"}');
                                    await $['wait'](0x7d0);
                                }
                            }
                        } else {
                            $['log']('已经完成所有' + _0x4faad1['taskName'] + '任务');
                        }
                        $['log'](_0x4a0b87['hjamC']);
                        assistList['push'](_0x4faad1['assistTaskDetailVo']['taskToken']);
                        break;
                    default:
                        break;
                }
            }
        }
        await doSomething('healthyDay_getHomeData', '{\"appId\":\"' + $['appId'] + '","taskToken":"","channelId":1}');
        if ($['userScore']) {
            $['log']('当前用户积分:' + $['userScore']);
            for (let _0x58b60c = 0x0; _0x4a0b87['mgETz'](_0x58b60c, parseInt(_0x4a0b87['cRBJf']($['userScore'], $['userInfo']['scorePerLottery']))); _0x58b60c++) {
                $['log'](_0x4a0b87['EjmzW']);
                await _0x4a0b87['SBzRi'](doSomething, _0x4a0b87['MVkIo'], '{"appId": "' + $['appId'] + '\"}');
                await $['wait'](0x3e8);
            }
        }
        if (_0x4a0b87['zhQyZ']($['bean'], 0x0)) {
            message += '\x0a【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a    └获得' + $['bean'] + '个京豆';
        }
    } else {
        message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a    └东哥说喜欢奶茶妹不喜欢你～';
    }
}

function doSomething(_0x393a31, _0x3dd26f) {
    var _0xf4d4ac = {
        'DVeou': 'healthyDay_getHomeData',
        'bLAMB': 'userAwardsCacheDto',
        'oYwkn': 'jBeanAwardVo',
        'Ylrzg': function(_0x2ba4e4, _0x2c577f) {
            return _0x2ba4e4(_0x2c577f);
        },
        'WQbkL': function(_0xb572aa, _0x22bdde) {
            return _0xb572aa === _0x22bdde;
        },
        'mSlVa': 'https://api.m.jd.com/client.action',
        'QcsWx': 'application/x-www-form-urlencoded',
        'gemek': 'gzip, deflate, br',
        'jtvsB': 'application/json, text/plain, */*',
        'CFVYS': 'jdapp;iPhone;9.3.6;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/97911903;supportBestPay/0;appBuild/167521;jdSupportDarkMode/0;pv/31.10;apprpd/;ref/JDWebViewController;psq/6;ads/;psn/;jdv/;adk/;app_device/IOS;pap/JA2015_311210|9.3.6|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'JxZUt': 'zh-cn'
    };
    let _0x483d2b = {
        'url': _0xf4d4ac['mSlVa'],
        'headers': {
            'Content-Type': _0xf4d4ac['QcsWx'],
            'Accept-Encoding': _0xf4d4ac['gemek'],
            'Cookie': cookie,
            'Connection': 'keep-alive',
            'Accept': _0xf4d4ac['jtvsB'],
            'User-Agent': _0xf4d4ac['CFVYS'],
            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/DMySHKicu2cogEN6WSYpttBnZFc/index.html?babelChannel=ttt2&utm_campaign=&utm_source=&utm_term=&utm_medium=&lng=117.029234&lat=25.095196&sid=&un_area=16_1362_44319_55501',
            'Accept-Language': _0xf4d4ac['JxZUt']
        },
        'body': 'functionId=' + _0x393a31 + '&body=' + _0x3dd26f + '&client=wh5&clientVersion=1.0.0'
    };
    return new Promise(_0x25c1a0 => {
        var _0x4d7ff7 = {
            'hFtbW': _0xf4d4ac['DVeou'],
            'XruqY': _0xf4d4ac['bLAMB'],
            'OQvTZ': _0xf4d4ac['oYwkn'],
            'Gsexo': function(_0x46d86d, _0x47f8f8) {
                return _0xf4d4ac['Ylrzg'](_0x46d86d, _0x47f8f8);
            },
            'sHRvD': 'userScore',
            'ZyOMx': function(_0x485326, _0x5e48f1) {
                return _0xf4d4ac['WQbkL'](_0x485326, _0x5e48f1);
            }
        };
        $['post'](_0x483d2b, (_0x29637c, _0x346541, _0x3aefad) => {
            try {
                if (_0x29637c) {
                    $['logErr'](_0x29637c);
                } else {
                    if (_0x3aefad) {
                        _0x3aefad = JSON['parse'](_0x3aefad);
                        if (_0x3aefad['data']['success']) {
                            switch (_0x393a31) {
                                case _0x4d7ff7['hFtbW']:
                                    $['taskVos'] = _0x3aefad['data']['result']['taskVos'];
                                    $['userInfo'] = _0x3aefad['data']['result']['userInfo'];
                                    $['userScore'] = _0x3aefad['data']['result']['userInfo']['userScore'];
                                    break;
                                case 'interact_template_getLotteryResult':
                                    if (_0x3aefad['data']['result']['hasOwnProperty'](_0x4d7ff7['XruqY'])) {
                                        if (_0x3aefad['data']['result']['userAwardsCacheDto']['hasOwnProperty'](_0x4d7ff7['OQvTZ'])) {
                                            $['log']('    └ 抽到了' + _0x3aefad['data']['result']['userAwardsCacheDto']['jBeanAwardVo']['quantity'] + '个' + _0x3aefad['data']['result']['userAwardsCacheDto']['jBeanAwardVo']['ext']);
                                            $['bean'] += _0x4d7ff7['Gsexo'](parseInt, _0x3aefad['data']['result']['userAwardsCacheDto']['jBeanAwardVo']['quantity']);
                                        } else {
                                            $['log']('    └ 抽到了' + JSON['stringify'](_0x3aefad['data']['result']));
                                            message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' 抽到了一些东西，但是无法判断类型，请自行查看数据。\n' + JSON['stringify'](_0x3aefad['data']['result']);
                                        }
                                    }
                                    break;
                                default:
                                    if (_0x3aefad['data']['result']['hasOwnProperty']('score')) {
                                        $['log']('    └ 完成任务，获得' + _0x3aefad['data']['result']['score'] + '积分');
                                    }
                                    if (_0x3aefad['data']['result']['hasOwnProperty'](_0x4d7ff7['sHRvD'])) {
                                        $['userScore'] = _0x3aefad['data']['result']['userScore'];
                                    }
                                    break;
                            }
                        } else {
                            if (_0x3aefad['data']['bizCode'] === -0x3e9) {
                                $['log']('    ├ ' + JSON['stringify'](_0x3aefad['data']['bizMsg']) + '\x0a    └东哥说喜欢奶茶妹不喜欢你～');
                                $['risk'] = !![];
                                return;
                            } else if (_0x4d7ff7['ZyOMx'](_0x3aefad['data']['bizCode'], 0x68)) {
                                $['helpDone'] = !![];
                                $['log']('    └助力次数已用尽～');
                            } else {
                                $['log']('    ├ ' + JSON['stringify'](_0x3aefad['data']['bizMsg']));
                            }
                        }
                    } else {
                        $['log']('京东服务器返回空数据');
                    }
                }
            } catch (_0x327373) {
                $['logErr'](_0x327373, _0x346541);
            } finally {
                _0x25c1a0();
            }
        });
    });
}

function checkCookie() {
    var _0x16f128 = {
        'rOCxk': function(_0x25a544, _0x4119c4) {
            return _0x25a544 === _0x4119c4;
        },
        'ingYK': '1001',
        'UTZvw': function(_0x173b06, _0x173fea) {
            return _0x173b06 === _0x173fea;
        },
        'eJCdx': '京东返回了空数据',
        'HONSi': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'NuszA': '*/*',
        'XPVhN': 'keep-alive',
        'znGZL': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
        'kZRUD': 'zh-cn',
        'YiHhW': 'gzip, deflate, br'
    };
    const _0x1c70b2 = {
        'url': _0x16f128['HONSi'],
        'headers': {
            'Host': 'me-api.jd.com',
            'Accept': _0x16f128['NuszA'],
            'Connection': _0x16f128['XPVhN'],
            'Cookie': cookie,
            'User-Agent': _0x16f128['znGZL'],
            'Accept-Language': _0x16f128['kZRUD'],
            'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
            'Accept-Encoding': _0x16f128['YiHhW']
        }
    };
    return new Promise(_0x4534d5 => {
        $['get'](_0x1c70b2, (_0x2e6a57, _0x30d260, _0x2b99e7) => {
            try {
                if (_0x2e6a57) {
                    $['logErr'](_0x2e6a57);
                } else {
                    if (_0x2b99e7) {
                        _0x2b99e7 = JSON['parse'](_0x2b99e7);
                        if (_0x16f128['rOCxk'](_0x2b99e7['retcode'], _0x16f128['ingYK'])) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (_0x16f128['UTZvw'](_0x2b99e7['retcode'], '0') && _0x2b99e7['data']['hasOwnProperty']('userInfo')) {
                            $['nickName'] = _0x2b99e7['data']['userInfo']['baseInfo']['nickname'];
                        }
                    } else {
                        $['log'](_0x16f128['eJCdx']);
                    }
                }
            } catch (_0x1139b4) {
                $['logErr'](_0x1139b4);
            } finally {
                _0x4534d5();
            }
        });
    });
};
_0xodJ = 'jsjiami.com.v6'
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
