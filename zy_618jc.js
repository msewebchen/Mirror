/*
tgchannel：https://t.me/Ariszy_Script
github：https://github.com/Ariszy/script
boxjs：https://raw.githubusercontent.com/Ariszy/Private-Script/master/Ariszy.boxjs.json
[task_local]
#618竞猜
23 0 * * * https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/zy_618jc.js, tag=618竞猜, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
==============Loon==============
[Script]
cron "23 0 * * *" script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/zy_618jc.js,tag=618竞猜
================Surge===============
618竞猜 = type=cron,cronexp="23 0 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/zy_618jc.js
===============小火箭==========
618竞猜 = type=cron,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/zy_618jc.js, cronexpr="23 0 * * *", timeout=3600, enable=true
*/
const Ariszy = '618手机竞猜'
const $ = Env(Ariszy)
const notify = $.isNode() ?require('./sendNotify') : '';
/*
 *Progcessed By JSDec in 0.44s
 *JSDec - JSDec.js.org
 */
cookiesArr = [];
CodeArr = [];
cookie = '';
var brandlistArr = [],
    shareidArr = [];
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x2bc24d => _0x2bc24d['cookie'])]['filter'](_0x45a3b6 => !!_0x45a3b6);
let tz = $['getval']('tz') || '1';
const invite = 0x1;
const logs = 0x0;
var hour = '';
var minute = '';
if ($['isNode']()) {
    hour = new Date(new Date()['getTime']() + 0x8 * 0x3c * 0x3c * 0x3e8)['getHours']();
    minute = new Date(new Date()['getTime']() + 0x8 * 0x3c * 0x3c * 0x3e8)['getMinutes']();
} else {
    hour = new Date()['getHours']();
    minute = new Date()['getMinutes']();
}
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0xd7c636 => {
        cookiesArr['push'](jdCookieNode[_0xd7c636]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...$['toObj']($['getdata']('CookiesJD') || '[]')['map'](_0x5645c7 => _0x5645c7['cookie'])]['filter'](_0x50c623 => !!_0x50c623);
}!(async () => {
    var _0x3fbc53 = {
        'qXDMO': function(_0x219b64, _0x3e2ac0) {
            return _0x219b64 + _0x3e2ac0;
        },
        'WuYAU': function(_0x4984a0, _0x4bd70b) {
            return _0x4984a0 * _0x4bd70b;
        },
        'uBAOg': 'DhFUa',
        'CiwaI': 'DqLMf',
        'UmPBZ': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'YIyWw': 'https://bean.m.jd.com/bean/signIndex.action',
        'PIQsF': function(_0x1bee1c) {
            return _0x1bee1c();
        },
        'CFsAr': function(_0x213e16, _0x2ec20f) {
            return _0x213e16 < _0x2ec20f;
        },
        'LIhyi': function(_0x4efbd3, _0x546619) {
            return _0x4efbd3(_0x546619);
        },
        'KEGZY': function(_0x1151ae, _0x36f37f) {
            return _0x1151ae + _0x36f37f;
        },
        'SsLry': 'LKsnG',
        'awWMl': function(_0x384122, _0x1861e6) {
            return _0x384122 === _0x1861e6;
        },
        'NMDSF': 'WHkZf',
        'sVFMF': function(_0x5859a6) {
            return _0x5859a6();
        },
        'pJhSt': function(_0x3107e0) {
            return _0x3107e0();
        }
    };
    if (!cookiesArr[0x0]) {
        if (_0x3fbc53['uBAOg'] !== _0x3fbc53['CiwaI']) {
            $['msg']($['name'], _0x3fbc53['UmPBZ'], _0x3fbc53['YIyWw'], {
                'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
            });
            return;
        } else {
            $['logErr'](e, response);
        }
    }
    await _0x3fbc53['PIQsF'](control);
    for (let _0x5ccbd0 = 0x0; _0x3fbc53['CFsAr'](_0x5ccbd0, cookiesArr['length']); _0x5ccbd0++) {
        cookie = cookiesArr[_0x5ccbd0];
        $['UserName'] = _0x3fbc53['LIhyi'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        message = '';
        $['isLogin'] = !![];
        $['index'] = _0x3fbc53['KEGZY'](_0x5ccbd0, 0x1);
        console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
        if (!$['isLogin']) {
            if ('LKsnG' !== _0x3fbc53['SsLry']) {
                return JSON['parse'](str);
            } else {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x3fbc53['YIyWw']
                });
                if ($['isNode']()) {
                    if (_0x3fbc53['awWMl']('WHkZf', _0x3fbc53['NMDSF'])) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    } else {
                        var _0x235828 = _0x3fbc53['qXDMO'](~~_0x3fbc53['WuYAU'](Math['random'](), count), _0x5ccbd0);
                        newsharecodes[_0x5ccbd0] = arr[_0x235828];
                        arr[_0x235828] = arr[_0x5ccbd0];
                        count--;
                    }
                }
                continue;
            }
        }
        await getlist();
        await _0x3fbc53['sVFMF'](quiz);
        await _0x3fbc53['pJhSt'](zy);
    }
})()['catch'](_0x2ddca7 => $['logErr'](_0x2ddca7))['finally'](() => $['done']());

function PostRequest(_0x4ec510, _0x2926e5) {
    var _0x3f625e = {
        'CMtwl': 'application/json, text/plain, */*',
        'qQQWa': 'zh-cn',
        'hIJXD': 'application/json;charset=utf-8',
        'dVifP': 'brandquiz.m.jd.com'
    };
    const _0x4a2d9c = 'https://brandquiz.m.jd.com/api/' + _0x4ec510;
    const _0x3da046 = 'POST';
    const _0x23584b = {
        'Accept': _0x3f625e['CMtwl'],
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': _0x3f625e['qQQWa'],
        'Connection': 'keep-alive',
        'Content-Type': _0x3f625e['hIJXD'],
        'Cookie': cookie,
        'Host': _0x3f625e['dVifP'],
        'User-Agent': 'jdapp;iPhone;9.4.6;14.4;0bcbcdb2a68f16cf9c9ad7c9b944fd141646a849;network/4g;ADID/BF650B20-A81A-4172-98EE-064834D97D6E;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/2377723269;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': _0x4a2d9c,
        'method': _0x3da046,
        'headers': _0x23584b,
        'body': _0x2926e5
    };
}

function PostRequests(_0x46282a, _0x26f060) {
    var _0x57444b = {
        'QSyjS': 'application/json, text/plain, */*',
        'aikfu': 'gzip, deflate, br',
        'ElKZt': 'zh-cn',
        'GcMud': 'brandquiz.m.jd.com',
        'UdBSB': 'jdapp;iPhone;9.4.6;14.4;0bcbcdb2a68f16cf9c9ad7c9b944fd141646a849;network/4g;ADID/BF650B20-A81A-4172-98EE-064834D97D6E;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/2377723269;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x590e0d = 'https://brandquiz.m.jd.com/api/' + _0x46282a;
    const _0x46a8a8 = 'POST';
    const _0x5cbe1f = {
        'Accept': _0x57444b['QSyjS'],
        'Accept-Encoding': _0x57444b['aikfu'],
        'Accept-Language': _0x57444b['ElKZt'],
        'Cookie': cookie,
        'Host': _0x57444b['GcMud'],
        'User-Agent': _0x57444b['UdBSB']
    };
    return {
        'url': _0x590e0d,
        'method': _0x46a8a8,
        'headers': _0x5cbe1f,
        'body': _0x26f060
    };
}

function GetRequest(_0x173e62) {
    var _0x1ed389 = {
        'XemOe': 'gzip, deflate, br',
        'Wuofp': 'zh-cn',
        'dIFwA': 'keep-alive'
    };
    const _0x492597 = 'https://brandquiz.m.jd.com/api/' + _0x173e62;
    const _0x255a7c = 'GET';
    const _0x364191 = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': _0x1ed389['XemOe'],
        'Accept-Language': _0x1ed389['Wuofp'],
        'Connection': _0x1ed389['dIFwA'],
        'Cookie': cookie,
        'User-Agent': 'jdapp;iPhone;9.4.6;14.4;0bcbcdb2a68f16cf9c9ad7c9b944fd141646a849;network/4g;ADID/BF650B20-A81A-4172-98EE-064834D97D6E;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/2377723269;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': _0x492597,
        'method': _0x255a7c,
        'headers': _0x364191
    };
}
async function quiz() {
    var _0x35703b = {
        'uTIil': function(_0x5f1aae) {
            return _0x5f1aae();
        },
        'lOqwD': function(_0x3d53c6, _0xc864e) {
            return _0x3d53c6 + _0xc864e;
        },
        'DNTGz': function(_0x55a22b, _0x5ea5f3) {
            return _0x55a22b == _0x5ea5f3;
        },
        'hbXUH': function(_0x864d67, _0x30e093) {
            return _0x864d67 + _0x30e093;
        },
        'JkbPi': '豆豆\n开奖时间为:',
        'rULOB': ' 10:00 \n下轮竞猜时间为：',
        'iQWxR': 'QynIX',
        'ruxCM': function(_0x2122f7, _0x4b0d76) {
            return _0x2122f7 + _0x4b0d76;
        },
        'HyaPN': function(_0x38b5fa, _0x4b227e, _0x764b57) {
            return _0x38b5fa(_0x4b227e, _0x764b57);
        }
    };
    let _0x28e142 = _0x35703b['ruxCM'](new Date()['getDate'](), 0x1);
    const _0x54ea3d = '{"quizId":' + _0x28e142 + ',"myQuiz":' + JSON['stringify'](brandlistArr['distinct']()) + '}';
    const _0x441e5a = _0x35703b['HyaPN'](PostRequest, 'index/quiz', _0x54ea3d);
    return new Promise(_0x556ee3 => {
        var _0x5e3756 = {
            'qNCPO': function(_0xd3ee20) {
                return _0x35703b['uTIil'](_0xd3ee20);
            },
            'bKQws': function(_0x4c1d74, _0x300824) {
                return _0x35703b['lOqwD'](_0x4c1d74, _0x300824);
            },
            'giMPu': function(_0xb01572, _0x384796) {
                return _0x35703b['DNTGz'](_0xb01572, _0x384796);
            },
            'mdIAq': function(_0x2896aa, _0x298875) {
                return _0x2896aa !== _0x298875;
            },
            'fEprS': function(_0x4144d3, _0x101f77) {
                return _0x35703b['lOqwD'](_0x4144d3, _0x101f77);
            },
            'rzyCx': function(_0x70d28a, _0xad371f) {
                return _0x35703b['lOqwD'](_0x70d28a, _0xad371f);
            },
            'JQCci': function(_0x5ace0e, _0x3ea440) {
                return _0x35703b['hbXUH'](_0x5ace0e, _0x3ea440);
            },
            'Oaqwo': _0x35703b['JkbPi'],
            'YBzrH': function(_0x438edd, _0x299526) {
                return _0x438edd + _0x299526;
            },
            'EyCnr': _0x35703b['rULOB'],
            'HlUVK': function(_0x3a2079, _0x1f0b08) {
                return _0x3a2079 !== _0x1f0b08;
            },
            'RToFQ': _0x35703b['iQWxR']
        };
        $['post'](_0x441e5a, async (_0x57b84b, _0xcf9aac, _0x5e557c) => {
            var _0x410a54 = {
                'bTgpt': function(_0x4ee1b3) {
                    return _0x5e3756['qNCPO'](_0x4ee1b3);
                },
                'urllf': function(_0x2c2ad0, _0x4eca0b) {
                    return _0x5e3756['bKQws'](_0x2c2ad0, _0x4eca0b);
                }
            };
            try {
                const _0x3cbea5 = JSON['parse'](_0x5e557c);
                if (logs) $['log'](_0x5e557c);
                if (_0x3cbea5 && _0x3cbea5['code'] && _0x5e3756['giMPu'](_0x3cbea5['code'], 0xc8)) {
                    if (_0x5e3756['mdIAq']('QSYZH', 'MPyIb')) {
                        console['log'](_0x5e3756['fEprS'](_0x5e3756['rzyCx'](_0x5e3756['rzyCx'](_0x5e3756['rzyCx'](_0x5e3756['JQCci'](_0x5e3756['JQCci']('\x0a参与竞猜成功，获得', _0x3cbea5['data']['beanNum']), _0x5e3756['Oaqwo']), new Date()['getMonth']() + 0x1) + '月', _0x5e3756['YBzrH'](new Date()['getDate'](), 0x2)), '日'), _0x5e3756['EyCnr']) + _0x3cbea5['data']['nextQuizDate']);
                        await $['wait'](0x1f40);
                    } else {
                        _0x410a54['bTgpt'](_0x556ee3);
                    }
                } else {
                    if (_0x5e3756['HlUVK'](_0x5e3756['RToFQ'], _0x5e3756['RToFQ'])) {
                        $['log'](_0x410a54['urllf']('😫' + _0x3cbea5['msg'], '\x0a'));
                    } else {
                        $['log'](_0x3cbea5['msg'] + '\x0a');
                    }
                }
            } catch (_0x4d49dd) {
                $['logErr'](_0x4d49dd, _0xcf9aac);
            } finally {
                _0x5e3756['qNCPO'](_0x556ee3);
            }
        });
    });
}
async function control() {
    var _0x4871bd = {
        'bQFkA': function(_0x2f7c97, _0x411213) {
            return _0x2f7c97 < _0x411213;
        },
        'rAibo': function(_0x137dce) {
            return _0x137dce();
        }
    };
    for (let _0x2c34b2 = 0x0; _0x4871bd['bQFkA'](_0x2c34b2, cookiesArr['length']); _0x2c34b2++) {
        cookie = cookiesArr[_0x2c34b2];
        await _0x4871bd['rAibo'](getshareid);
    }
}
async function getshareid() {
    var _0x2aebf1 = {
        'zZiDW': function(_0x425e8c, _0x2c67f7) {
            return _0x425e8c + _0x2c67f7;
        },
        'Yqihh': function(_0x16a49b, _0x1c268d) {
            return _0x16a49b == _0x1c268d;
        },
        'hDOnB': function(_0x1d27ec, _0x4dd7e3) {
            return _0x1d27ec !== _0x4dd7e3;
        },
        'CVnHq': 'aebzy',
        'FNWKB': function(_0x51c883) {
            return _0x51c883();
        },
        'QtFWU': function(_0x588666, _0x1ebaf1) {
            return _0x588666 + _0x1ebaf1;
        },
        'eEXUy': function(_0x54cc5b, _0x15bda5) {
            return _0x54cc5b(_0x15bda5);
        }
    };
    let _0x336f11 = _0x2aebf1['QtFWU'](new Date()['getDate'](), 0x1);
    const _0x4e4621 = _0x2aebf1['eEXUy'](GetRequest, '/support/getSupport?quizId=' + _0x336f11 + '&t=' + new Date()['getTime']());
    return new Promise(_0x5225b5 => {
        var _0x215c69 = {
            'aCEuW': function(_0x7d0cc0, _0x36baee) {
                return _0x2aebf1['zZiDW'](_0x7d0cc0, _0x36baee);
            },
            'RruXO': function(_0x15adbf, _0x233ba8) {
                return _0x2aebf1['Yqihh'](_0x15adbf, _0x233ba8);
            },
            'NJKiY': 'EDDem',
            'MDWMN': function(_0x4eb4a5, _0xd363a4) {
                return _0x2aebf1['hDOnB'](_0x4eb4a5, _0xd363a4);
            },
            'PwLHq': _0x2aebf1['CVnHq'],
            'AgOXv': function(_0x3d300b) {
                return _0x2aebf1['FNWKB'](_0x3d300b);
            }
        };
        $['get'](_0x4e4621, async (_0x341dcc, _0x3de35d, _0x4b716c) => {
            try {
                const _0x1f66bb = JSON['parse'](_0x4b716c);
                if (logs) $['log'](_0x4b716c);
                if (_0x1f66bb && _0x1f66bb['code'] && _0x215c69['RruXO'](_0x1f66bb['code'], 0xc8)) {
                    $['log'](_0x215c69['aCEuW']('互助码：' + _0x1f66bb['data']['shareId'], '\x0a'));
                    shareidArr['push'](_0x1f66bb['data']['shareId']);
                    await $['wait'](0x1f40);
                } else {
                    $['log']('😫' + _0x1f66bb['msg'] + '\x0a');
                }
            } catch (_0x1d62af) {
                if (_0x215c69['NJKiY'] !== 'foIce') {
                    $['logErr'](_0x1d62af, _0x3de35d);
                } else {
                    _0x5225b5();
                }
            } finally {
                if (_0x215c69['MDWMN']('aebzy', _0x215c69['PwLHq'])) {
                    $['log'](_0x215c69['aCEuW']('😫' + result['msg'], '\x0a'));
                } else {
                    _0x215c69['AgOXv'](_0x5225b5);
                }
            }
        });
    });
}
async function dosupport(_0x44ad15) {
    var _0x5a3c52 = {
        'hJjlc': function(_0x2728d4, _0x351989) {
            return _0x2728d4 + _0x351989;
        },
        'XihnB': '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取',
        'Icswa': 'https://bean.m.jd.com/bean/signIndex.action',
        'CxBMs': function(_0x215407, _0x21111f) {
            return _0x215407 !== _0x21111f;
        },
        'vlCWN': 'FJvYj',
        'OMvZD': function(_0x413781, _0x211bc1) {
            return _0x413781 == _0x211bc1;
        },
        'jNbYz': function(_0x3cc9ed, _0x4edf47) {
            return _0x3cc9ed === _0x4edf47;
        },
        'WzDiz': 'bAvzW',
        'VcPsh': '助力成功\x0a',
        'uzTDY': function(_0x367c04, _0x10b545) {
            return _0x367c04 == _0x10b545;
        },
        'TFAKX': 'fsHsM',
        'TDDRP': '😫助力失败,不能助力自己\n',
        'MuwwG': function(_0x23c15e, _0x3f4a17) {
            return _0x23c15e == _0x3f4a17;
        },
        'lkGXO': function(_0x38c16b, _0x365124) {
            return _0x38c16b !== _0x365124;
        },
        'edZdX': 'zxLkB',
        'FEVyF': '😫助力失败,已经助力过了\n',
        'OYgPP': function(_0x137c35, _0x3e5916) {
            return _0x137c35 === _0x3e5916;
        },
        'bAbid': 'EhKzV',
        'fnmHl': 'CcQxg',
        'UYzWP': function(_0x110089) {
            return _0x110089();
        },
        'mLFhb': function(_0x32b3f3, _0x1c8003, _0xa88241) {
            return _0x32b3f3(_0x1c8003, _0xa88241);
        }
    };
    const _0x37b48b = 'shareId=' + _0x44ad15;
    const _0xe6be3c = _0x5a3c52['mLFhb'](PostRequests, '/support/doSupport', _0x37b48b);
    return new Promise(_0x4e7394 => {
        $['post'](_0xe6be3c, async (_0x4b037b, _0x4c788a, _0x3b45a1) => {
            var _0x2e8f83 = {
                'hDQzW': function(_0x44e771, _0x103adf) {
                    return _0x5a3c52['hJjlc'](_0x44e771, _0x103adf);
                },
                'iRQxG': function(_0x38375e, _0x31f6d1) {
                    return _0x38375e === _0x31f6d1;
                },
                'gaEqa': 'false',
                'fsKkv': _0x5a3c52['XihnB'],
                'PdMPv': _0x5a3c52['Icswa']
            };
            try {
                if (_0x5a3c52['CxBMs'](_0x5a3c52['vlCWN'], _0x5a3c52['vlCWN'])) {
                    $['log'](message);
                } else {
                    const _0x574ae3 = JSON['parse'](_0x3b45a1);
                    if (logs) $['log'](_0x3b45a1);
                    if (_0x574ae3 && _0x574ae3['code'] && _0x5a3c52['OMvZD'](_0x574ae3['code'], 0xc8) && _0x574ae3['data'] == 0x7) {
                        if (_0x5a3c52['jNbYz']('bAvzW', _0x5a3c52['WzDiz'])) {
                            console['log'](_0x5a3c52['VcPsh']);
                        } else {
                            $['log'](message);
                        }
                    } else if (_0x5a3c52['uzTDY'](_0x574ae3['data'], 0x1)) {
                        if (_0x5a3c52['jNbYz']('yJDCL', _0x5a3c52['TFAKX'])) {
                            var _0x49dccb = this,
                                _0x160ad8 = [],
                                _0x313b5f = _0x49dccb['length'];
                            _0x49dccb['forEach'](function(_0x3f0ea4, _0x2740d0, _0x49dccb) {
                                var _0x3a19bb = _0x49dccb['indexOf'](_0x3f0ea4, _0x2e8f83['hDQzW'](_0x2740d0, 0x1));
                                if (_0x3a19bb === -0x1) {
                                    _0x160ad8['push'](_0x3f0ea4);
                                }
                            });
                            return _0x160ad8;
                        } else {
                            $['log'](_0x5a3c52['TDDRP']);
                        }
                    } else if (_0x5a3c52['MuwwG'](_0x574ae3['data'], 0x3)) {
                        if (_0x5a3c52['lkGXO'](_0x5a3c52['edZdX'], 'zxLkB')) {
                            Object['keys'](jdCookieNode)['forEach'](_0x3fb644 => {
                                cookiesArr['push'](jdCookieNode[_0x3fb644]);
                            });
                            if (process['env']['JD_DEBUG'] && _0x2e8f83['iRQxG'](process['env']['JD_DEBUG'], _0x2e8f83['gaEqa'])) console['log'] = () => {};
                        } else {
                            $['log'](_0x5a3c52['FEVyF']);
                        }
                    } else if (_0x574ae3['data'] == 0x5) {
                        $['log']('😫助力失败,助力次数耗尽\n');
                    }
                }
            } catch (_0x483600) {
                if (_0x5a3c52['OYgPP'](_0x5a3c52['bAbid'], _0x5a3c52['fnmHl'])) {
                    $['msg']($['name'], _0x2e8f83['fsKkv'], _0x2e8f83['PdMPv'], {
                        'open-url': _0x2e8f83['PdMPv']
                    });
                    return;
                } else {
                    $['logErr'](_0x483600, _0x4c788a);
                }
            } finally {
                _0x5a3c52['UYzWP'](_0x4e7394);
            }
        });
    });
}
async function zy() {
    var _0x2ac694 = {
        'PjTtX': '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie',
        'YlPua': function(_0x45a8e3, _0x4c6483) {
            return _0x45a8e3 < _0x4c6483;
        },
        'hKDpN': function(_0x93f807, _0x27b01e) {
            return _0x93f807 + _0x27b01e;
        },
        'ZhAcv': '\n开始内部助力',
        'OsrLO': function(_0x17e0ac, _0x5cd0e3) {
            return _0x17e0ac(_0x5cd0e3);
        },
        'gptPC': function(_0x3fd6cd) {
            return _0x3fd6cd();
        },
        'jclkP': function(_0x416e92, _0x69c092) {
            return _0x416e92 - _0x69c092;
        },
        'qeGam': function(_0x20515a, _0x290b9b) {
            return _0x20515a === _0x290b9b;
        },
        'lAvID': 'NhamN',
        'jhkXV': function(_0x2a6ba8, _0x295e9c) {
            return _0x2a6ba8 * _0x295e9c;
        },
        'atycz': function(_0x2a8fc7, _0x5d0140) {
            return _0x2a8fc7 + _0x5d0140;
        },
        'qkSWW': function(_0x5b32b0, _0x351924) {
            return _0x5b32b0 + _0x351924;
        },
        'ZWDGl': function(_0x217420, _0x33ee4f) {
            return _0x217420 + _0x33ee4f;
        },
        'vCECw': function(_0x1688c4, _0x39c15d) {
            return _0x1688c4 + _0x39c15d;
        },
        'oIdYS': '随机取出',
        'PzBjN': function(_0x26d754, _0x5c97b3) {
            return _0x26d754 - _0x5c97b3;
        },
        'IKxIU': function(_0x5e3716, _0x3dc58e) {
            return _0x5e3716 < _0x3dc58e;
        },
        'rJpwz': function(_0x59f5dc, _0x4999de) {
            return _0x59f5dc + _0x4999de;
        },
        'xmhvM': function(_0x679df5, _0x2e22a7) {
            return _0x679df5 + _0x2e22a7;
        },
        'zwQFq': function(_0x241dd8, _0x398ae5) {
            return _0x241dd8 * _0x398ae5;
        }
    };
    for (let _0x58ff73 = 0x0; _0x2ac694['YlPua'](_0x58ff73, shareidArr['distinct']()['length']); _0x58ff73++) {
        console['log'](_0x2ac694['hKDpN'](_0x2ac694['hKDpN'](_0x2ac694['ZhAcv'], shareidArr[_0x58ff73]), ''));
        await _0x2ac694['OsrLO'](dosupport, shareidArr[_0x58ff73]);
        await $['wait'](0x1f40);
    }
    await _0x2ac694['gptPC'](readShareCodes);
    var _0x342021 = [];
    var _0x303b05 = CodeArr;
    var _0x46e27c = _0x303b05['length'];
    for (var _0x538cf1 = 0x0; _0x538cf1 < _0x2ac694['jclkP'](0x8, shareidArr['distinct']()['length']); _0x538cf1++) {
        if (_0x2ac694['qeGam']('NhamN', _0x2ac694['lAvID'])) {
            var _0x3b050e = ~~_0x2ac694['jhkXV'](Math['random'](), _0x46e27c) + _0x538cf1;
            _0x342021[_0x538cf1] = _0x303b05[_0x3b050e];
            _0x303b05[_0x3b050e] = _0x303b05[_0x538cf1];
            _0x46e27c--;
        } else {
            try {
                return JSON['parse'](str);
            } catch (_0x4750bf) {
                console['log'](_0x4750bf);
                $['msg']($['name'], '', _0x2ac694['PjTtX']);
                return [];
            }
        }
    }
    console['log'](_0x2ac694['atycz'](_0x2ac694['qkSWW'](_0x2ac694['ZWDGl'](_0x2ac694['ZWDGl'](_0x2ac694['vCECw'](_0x2ac694['oIdYS'], _0x2ac694['PzBjN'](0x8, shareidArr['distinct']()['length'])), '个助力码,账号'), $['UserName'] + '即将助力【'), _0x342021), '】\x0a'));
    for (let _0x538cf1 = 0x0; _0x2ac694['IKxIU'](_0x538cf1, _0x342021['length']); _0x538cf1++) {
        console['log'](_0x2ac694['rJpwz']('开始第' + _0x2ac694['xmhvM'](_0x538cf1, 0x1) + '次随机助力', _0x342021[_0x538cf1]) + '\x0a');
        await _0x2ac694['OsrLO'](dosupport, _0x342021[_0x538cf1]);
        await $['wait'](_0x2ac694['zwQFq'](0x3e8, _0x342021['length']));
    }
}
async function getlist() {
    var _0x26091e = {
        'HWbkb': function(_0x2a3e38, _0x474b58) {
            return _0x2a3e38 + _0x474b58;
        },
        'Ptdzs': 'bjBJn',
        'rcwXr': function(_0x1a5b61, _0x3fa809) {
            return _0x1a5b61 < _0x3fa809;
        },
        'uCBGK': 'cmXmR',
        'fulLd': function(_0x51d5a6, _0x3128f7) {
            return _0x51d5a6 === _0x3128f7;
        },
        'jAbSn': 'taDVv',
        'MEDLc': function(_0x288c4d, _0x3d3a42) {
            return _0x288c4d(_0x3d3a42);
        }
    };
    const _0x5c1087 = _0x26091e['MEDLc'](GetRequest, 'index/indexInfo?t=' + new Date()['getTime']());
    return new Promise(_0x5d69b8 => {
        var _0x33a993 = {
            'rpdnM': function(_0x5a2e78) {
                return _0x5a2e78();
            },
            'gWWcL': function(_0x2e208f, _0x3e2c6b) {
                return _0x26091e['HWbkb'](_0x2e208f, _0x3e2c6b);
            },
            'jcvsT': function(_0x152714, _0x55a0a1) {
                return _0x152714 === _0x55a0a1;
            },
            'qjVRf': 'Cbcnq',
            'NAgzj': function(_0x20fed8, _0x1fa4c2) {
                return _0x20fed8 == _0x1fa4c2;
            },
            'MibaD': _0x26091e['Ptdzs'],
            'Tefcb': function(_0x2fabb1, _0x57bfb1) {
                return _0x2fabb1 + _0x57bfb1;
            },
            'WQxXH': function(_0x56a581, _0x20dc48) {
                return _0x26091e['rcwXr'](_0x56a581, _0x20dc48);
            },
            'DNbFS': '榜单获取成功',
            'wCMoy': function(_0x2466b9, _0x1bd7dd) {
                return _0x2466b9 !== _0x1bd7dd;
            },
            'vYQLL': _0x26091e['uCBGK'],
            'uAHDG': function(_0x56d8ea, _0x308da7) {
                return _0x26091e['HWbkb'](_0x56d8ea, _0x308da7);
            },
            'nyEno': function(_0x26a518, _0x41714a) {
                return _0x26091e['fulLd'](_0x26a518, _0x41714a);
            },
            'plQtd': _0x26091e['jAbSn']
        };
        $['get'](_0x5c1087, async (_0x14f655, _0x9cab84, _0x17993) => {
            if (_0x33a993['jcvsT'](_0x33a993['qjVRf'], _0x33a993['qjVRf'])) {
                try {
                    const _0x1ce725 = JSON['parse'](_0x17993);
                    if (logs) $['log'](_0x17993);
                    if (_0x1ce725 && _0x1ce725['code'] && _0x33a993['NAgzj'](_0x1ce725['code'], 0xc8)) {
                        if (_0x33a993['jcvsT'](_0x33a993['MibaD'], 'bjBJn')) {
                            console['log'](_0x33a993['Tefcb'](_0x1ce725['data']['listName'], '\x0a'));
                            for (let _0x351045 = 0x0; _0x33a993['WQxXH'](_0x351045, 0xa); _0x351045++) {
                                brandlistArr['push'](_0x1ce725['data']['brandWall'][_0x351045]['id']);
                            }
                            $['log'](_0x33a993['Tefcb'](_0x33a993['DNbFS'], JSON['stringify'](brandlistArr['distinct']())));
                            await $['wait'](0x1f40);
                        } else {
                            _0x33a993['rpdnM'](_0x5d69b8);
                        }
                    } else {
                        if (_0x33a993['wCMoy'](_0x33a993['vYQLL'], 'cmXmR')) {
                            $['logErr'](e, _0x9cab84);
                        } else {
                            $['log'](_0x33a993['Tefcb'](_0x33a993['uAHDG']('😫', _0x1ce725['msg']), '\x0a'));
                        }
                    }
                } catch (_0x28a7e7) {
                    if (_0x33a993['nyEno']('taDVv', _0x33a993['plQtd'])) {
                        $['logErr'](_0x28a7e7, _0x9cab84);
                    } else {
                        $['log'](_0x33a993['gWWcL'](result['msg'], '\x0a'));
                    }
                } finally {
                    _0x5d69b8();
                }
            } else {
                $['log'](message);
            }
        });
    });
}
async function upload() {
    var _0x5cffcb = {
        'TGioY': 'sRyjD',
        'jjVQt': 'wjjzS',
        'PGTFG': function(_0x399e0d, _0x233f0e) {
            return _0x399e0d == _0x233f0e;
        },
        'HlknZ': function(_0x589c0f, _0x3092fd) {
            return _0x589c0f + _0x3092fd;
        }
    };
    return new Promise(_0xfc9cb1 => {
        let _0xcc86a7 = {
            'url': 'https://pool.nz.lu/upload/PKv2/Phoneupload/11111'
        };
        $['get'](_0xcc86a7, async (_0x227638, _0x4d27f1, _0x29944d) => {
            if (_0x5cffcb['TGioY'] !== _0x5cffcb['jjVQt']) {
                try {
                    const _0x34a186 = JSON['parse'](_0x29944d);
                    $['log'](_0x29944d);
                    if (_0x5cffcb['PGTFG'](_0x34a186['code'], 0x0)) $['log'](_0x5cffcb['HlknZ'](_0x5cffcb['HlknZ'](_0x34a186['msg'] + '观看', _0x34a186['amount']), '\x0a'));
                } catch (_0x2afb43) {
                    $['logErr'](_0x2afb43, _0x4d27f1);
                } finally {
                    _0xfc9cb1();
                }
            } else {
                $['logErr'](e, _0x4d27f1);
            }
        });
    });
}
async function readShareCodes() {
    var _0x417ce2 = {
        'BYKbu': 'gzip, deflate, br',
        'lniYw': 'zh-cn',
        'DoNqp': 'application/json;charset=utf-8',
        'jWtbB': function(_0xc77a81, _0x492c15) {
            return _0xc77a81 + _0x492c15;
        },
        'DUgbH': function(_0x2bd23d, _0x1c22a6) {
            return _0x2bd23d * _0x1c22a6;
        },
        'BHOxm': function(_0xde50dd) {
            return _0xde50dd();
        },
        'bxwWb': function(_0x426d66, _0x399d7c) {
            return _0x426d66 !== _0x399d7c;
        },
        'SjwOe': 'hyEOd',
        'fWvwj': 'MfbqP',
        'aLGeZ': 'AMBHT',
        'oQIsX': function(_0x515d1c) {
            return _0x515d1c();
        }
    };
    return new Promise(_0x3b81f7 => {
        let _0x64199e = {
            'url': 'https://raw.githubusercontent.com/Ariszy/TGBOT/main/sjjc.js'
        };
        $['get'](_0x64199e, async (_0x4f2477, _0x46f221, _0x4f4604) => {
            var _0x17c039 = {
                'egcMK': _0x417ce2['BYKbu'],
                'LbNVy': _0x417ce2['lniYw'],
                'ZySNV': _0x417ce2['DoNqp'],
                'YrChU': 'jdapp;iPhone;9.4.6;14.4;0bcbcdb2a68f16cf9c9ad7c9b944fd141646a849;network/4g;ADID/BF650B20-A81A-4172-98EE-064834D97D6E;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/2377723269;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                'pKLfT': function(_0x3143eb, _0x390731) {
                    return _0x417ce2['jWtbB'](_0x3143eb, _0x390731);
                },
                'JBpVc': function(_0x3a028d, _0x314db9) {
                    return _0x417ce2['DUgbH'](_0x3a028d, _0x314db9);
                },
                'lahXl': function(_0x3b7af5, _0x2a2a0e) {
                    return _0x3b7af5 * _0x2a2a0e;
                },
                'mAQMY': function(_0x595289) {
                    return _0x417ce2['BHOxm'](_0x595289);
                }
            };
            try {
                const _0x27e53e = JSON['parse'](_0x4f4604);
                if (!![]) {
                    var _0x40d667 = new Array();
                    for (var _0x548076 in _0x27e53e) {
                        if (_0x417ce2['bxwWb'](_0x417ce2['SjwOe'], _0x417ce2['SjwOe'])) {
                            const _0x443630 = 'https://brandquiz.m.jd.com/api/' + uri;
                            const _0x109b98 = 'POST';
                            const _0x563700 = {
                                'Accept': 'application/json, text/plain, */*',
                                'Accept-Encoding': _0x17c039['egcMK'],
                                'Accept-Language': _0x17c039['LbNVy'],
                                'Connection': 'keep-alive',
                                'Content-Type': _0x17c039['ZySNV'],
                                'Cookie': cookie,
                                'Host': 'brandquiz.m.jd.com',
                                'User-Agent': _0x17c039['YrChU']
                            };
                            return {
                                'url': _0x443630,
                                'method': _0x109b98,
                                'headers': _0x563700,
                                'body': body
                            };
                        } else {
                            _0x40d667['push'](_0x27e53e[_0x548076]);
                        }
                    }
                    var _0x2b7b99 = new Array();
                    for (let _0x548076 = 0x0; _0x548076 < _0x40d667['length']; _0x548076++) {
                        if ('MfbqP' === _0x417ce2['fWvwj']) {
                            for (var _0x57d1a3 in _0x40d667[_0x548076]) {
                                if (_0x417ce2['bxwWb'](_0x417ce2['aLGeZ'], _0x417ce2['aLGeZ'])) {
                                    hour = new Date(_0x17c039['pKLfT'](new Date()['getTime'](), _0x17c039['JBpVc'](0x8 * 0x3c, 0x3c) * 0x3e8))['getHours']();
                                    minute = new Date(_0x17c039['pKLfT'](new Date()['getTime'](), _0x17c039['JBpVc'](_0x17c039['JBpVc'](_0x17c039['lahXl'](0x8, 0x3c), 0x3c), 0x3e8)))['getMinutes']();
                                } else {
                                    _0x2b7b99['push'](_0x40d667[_0x548076][_0x57d1a3]['Code']);
                                }
                            }
                        } else {
                            _0x17c039['mAQMY'](_0x3b81f7);
                        }
                    }
                    CodeArr = _0x2b7b99;
                    return _0x2b7b99;
                }
            } catch (_0x4a2b60) {
                $['logErr'](_0x4a2b60, _0x46f221);
            } finally {
                _0x417ce2['oQIsX'](_0x3b81f7);
            }
        });
    });
}
async function showmsg() {
    var _0x5d8e15 = {
        'WHWZA': 'application/json, text/plain, */*',
        'TuNGC': 'gzip, deflate, br',
        'aSNFF': 'zh-cn',
        'wXwqw': 'keep-alive',
        'oFPrA': function(_0x513284, _0x3df953) {
            return _0x513284 == _0x3df953;
        },
        'tTZkL': function(_0x3bd610, _0x1056b6) {
            return _0x3bd610 <= _0x1056b6;
        },
        'uQPtl': function(_0x12ba29, _0x19113f) {
            return _0x12ba29 == _0x19113f;
        },
        'ZRpan': function(_0x2bfe72, _0x182d35) {
            return _0x2bfe72 === _0x182d35;
        },
        'xNXsS': 'LZNxP',
        'TAQhc': 'Ftvtf',
        'xqRGS': function(_0x1b6369, _0x37444b) {
            return _0x1b6369 == _0x37444b;
        },
        'bccvn': function(_0x170f18, _0x38730a) {
            return _0x170f18 <= _0x38730a;
        },
        'pPTAK': function(_0x3df728, _0x536610) {
            return _0x3df728 !== _0x536610;
        },
        'zhWSm': 'ddXKv',
        'dZMSa': 'ICmNy'
    };
    if (_0x5d8e15['oFPrA'](tz, 0x1)) {
        if ($['isNode']()) {
            if (_0x5d8e15['oFPrA'](hour, 0xc) && _0x5d8e15['tTZkL'](minute, 0x14) || _0x5d8e15['uQPtl'](hour, 0x17) && minute >= 0x28) {
                await notify['sendNotify']($['name'], message);
            } else {
                if (_0x5d8e15['ZRpan'](_0x5d8e15['xNXsS'], _0x5d8e15['TAQhc'])) {
                    hour = new Date()['getHours']();
                    minute = new Date()['getMinutes']();
                } else {
                    $['log'](message);
                }
            }
        } else {
            if (_0x5d8e15['xqRGS'](hour, 0xc) && _0x5d8e15['bccvn'](minute, 0x14) || _0x5d8e15['xqRGS'](hour, 0x17) && minute >= 0x28) {
                if (_0x5d8e15['pPTAK']('xQNtu', 'xQNtu')) {
                    brandlistArr['push'](result['data']['brandWall'][i]['id']);
                } else {
                    $['msg'](zhiyi, '', message);
                }
            } else {
                if (_0x5d8e15['ZRpan'](_0x5d8e15['zhWSm'], 'ddXKv')) {
                    $['log'](message);
                } else {
                    console['log']('助力成功\n');
                }
            }
        }
    } else {
        if (_0x5d8e15['dZMSa'] === 'ICmNy') {
            $['log'](message);
        } else {
            const _0x4a713d = 'https://brandquiz.m.jd.com/api/' + uri;
            const _0x30893a = 'GET';
            const _0x2da25b = {
                'Accept': _0x5d8e15['WHWZA'],
                'Accept-Encoding': _0x5d8e15['TuNGC'],
                'Accept-Language': _0x5d8e15['aSNFF'],
                'Connection': _0x5d8e15['wXwqw'],
                'Cookie': cookie,
                'User-Agent': 'jdapp;iPhone;9.4.6;14.4;0bcbcdb2a68f16cf9c9ad7c9b944fd141646a849;network/4g;ADID/BF650B20-A81A-4172-98EE-064834D97D6E;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/2377723269;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
            };
            return {
                'url': _0x4a713d,
                'method': _0x30893a,
                'headers': _0x2da25b
            };
        }
    }
}

function jsonParse(_0x5367cd) {
    var _0x3171c0 = {
        'SlSfv': '😫助力失败,助力次数耗尽\n',
        'rsIxn': '请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie',
        'rWKRU': function(_0x371c3c, _0x49ff78) {
            return _0x371c3c == _0x49ff78;
        },
        'QLZzY': function(_0x2df0f7, _0x14e77f) {
            return _0x2df0f7 !== _0x14e77f;
        },
        'JOXNt': 'pXEyf',
        'KZqhQ': 'XHZRY',
        'qlMuO': function(_0x2c65a0, _0x1d7f96) {
            return _0x2c65a0 === _0x1d7f96;
        },
        'Zydsp': 'sPZbG'
    };
    if (_0x3171c0['rWKRU'](typeof _0x5367cd, 'string')) {
        if (_0x3171c0['QLZzY'](_0x3171c0['JOXNt'], _0x3171c0['KZqhQ'])) {
            try {
                if (_0x3171c0['qlMuO'](_0x3171c0['Zydsp'], _0x3171c0['Zydsp'])) {
                    return JSON['parse'](_0x5367cd);
                } else {
                    $['log'](_0x3171c0['SlSfv']);
                }
            } catch (_0x576bee) {
                console['log'](_0x576bee);
                $['msg']($['name'], '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
                return [];
            }
        } else {
            console['log'](e);
            $['msg']($['name'], '', _0x3171c0['rsIxn']);
            return [];
        }
    }
}
Array['prototype']['distinct'] = function() {
    var _0x189221 = {
        'XNcgL': function(_0x20a7ed, _0x1b1156) {
            return _0x20a7ed === _0x1b1156;
        }
    };
    var _0x149de6 = this,
        _0x3ca699 = [],
        _0x3d1efe = _0x149de6['length'];
    _0x149de6['forEach'](function(_0x3fe44d, _0x27ffa0, _0x149de6) {
        var _0x3d2d2c = _0x149de6['indexOf'](_0x3fe44d, _0x27ffa0 + 0x1);
        if (_0x189221['XNcgL'](_0x3d2d2c, -0x1)) {
            _0x3ca699['push'](_0x3fe44d);
        }
    });
    return _0x3ca699;
};;
_0xodz = 'jsjiami.com.v6'
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
