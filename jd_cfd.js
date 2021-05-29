/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-4-15
活动入口：京喜APP-我的-京喜财富岛

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京喜财富岛
5 0,8,13,19 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js, tag=京喜财富岛, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true

================Loon==============
[Script]
cron "5 0,8,13,19 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js,tag=京喜财富岛

===============Surge=================
京喜财富岛 = type=cron,cronexp="5 0,8,13,19 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js

============小火箭=========
京喜财富岛 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_cfd.js, cronexpr="5 0,8,13,19 * * *", timeout=3600, enable=true
 */
const $ = new Env("京喜财富岛");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.showLog = $.getdata("cfd_showLog") ? $.getdata("cfd_showLog") === "true" : false;
$.notifyTime = $.getdata("cfd_notifyTime");
$.result = [];$.shareCodes = [];
let cookiesArr = [], cookie = '', token;


/*
 *Progcessed By JSDec in 9.43s
 *JSDec - JSDec.js.org
 */
const randomCount = $['isNode']() ? 0x3 : 0x3;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x2a57ef => {
        cookiesArr['push'](jdCookieNode[_0x2a57ef]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x231be0 => _0x231be0['cookie'])]['filter'](_0x1183bc => !!_0x1183bc);
}!(async () => {
    var _0x55e71c = {
        'dqvtd': function(_0x14600f, _0x528223) {
            return _0x14600f != _0x528223;
        },
        'hTVWM': '未中奖',
        'lAfQg': function(_0x4eefa3) {
            return _0x4eefa3();
        },
        'FTAST': function(_0x511f5c, _0x4c2627) {
            return _0x511f5c === _0x4c2627;
        },
        'MzVzL': 'vhYbG',
        'TRvRA': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'nbQRk': 'https://bean.m.jd.com/bean/signIndex.action',
        'AEDar': function(_0x1804dd, _0x47252a) {
            return _0x1804dd(_0x47252a);
        },
        'iJBMA': 'http://adguard.b.freefrp.net/cfd.json',
        'BpPGN': function(_0xffee87, _0x2f04f3) {
            return _0xffee87 <= _0x2f04f3;
        },
        'hXMSX': function(_0x56daab, _0x24af67) {
            return _0x56daab(_0x24af67);
        },
        'sSmmQ': 'http://adguard.b.freefrp.net/cfd.json',
        'iZPTv': function(_0x28b738, _0x481549) {
            return _0x28b738(_0x481549);
        },
        'RPkjG': function(_0x9ac266, _0x258de9) {
            return _0x9ac266 < _0x258de9;
        },
        'fvqZn': function(_0x35a567, _0x1c283d) {
            return _0x35a567 !== _0x1c283d;
        },
        'bRUAJ': 'JYoqn',
        'cNQjJ': 'JCRLv',
        'ISTyv': 'OdRxC',
        'BnwJl': function(_0x553123) {
            return _0x553123();
        },
        'EvmSe': function(_0x51ce2d, _0x36b392) {
            return _0x51ce2d === _0x36b392;
        },
        'HSDbq': function(_0xc9111a, _0x31b69d) {
            return _0xc9111a(_0x31b69d);
        },
        'vSHcp': function(_0x4e9702, _0x503b88) {
            return _0x4e9702 * _0x503b88;
        }
    };
    await _0x55e71c['lAfQg'](requireConfig);
    if (!cookiesArr[0x0]) {
        if (_0x55e71c['FTAST'](_0x55e71c['MzVzL'], _0x55e71c['MzVzL'])) {
            $['msg']($['name'], _0x55e71c['TRvRA'], 'https://bean.m.jd.com/bean/signIndex.action', {
                'open-url': _0x55e71c['nbQRk']
            });
            return;
        } else {
            const {
                iRet,
                sErrMsg,
                strAwardPoolName
            } = JSON['parse'](data);
            $['log']('\n【抽奖结果】🎰 ' + (_0x55e71c['dqvtd'](strAwardPoolName, '') ? _0x55e71c['hTVWM'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? data : ''));
        }
    }
    let _0x54ad58 = {},
        _0x8627ac = await _0x55e71c['AEDar'](getAuthorShareCode, _0x55e71c['iJBMA']);
    if (_0x55e71c['BpPGN'](new Date()['getHours'](), 0x3)) _0x54ad58 = await _0x55e71c['hXMSX'](getAuthorShareCode, _0x55e71c['sSmmQ']);
    if (!_0x8627ac) _0x8627ac = await _0x55e71c['iZPTv'](getAuthorShareCode, 'http://adguard.b.freefrp.net/cfd.json');
    $['strMyShareIds'] = [..._0x54ad58 && _0x54ad58['shareId'] || [], ..._0x8627ac && _0x8627ac['shareId'] || []];
    $['strGroupIds'] = [..._0x54ad58 && _0x54ad58['strGroupIds'] || [], ..._0x8627ac && _0x8627ac['strGroupIds'] || []];
    for (let _0xcf2c6b = 0x0; _0x55e71c['RPkjG'](_0xcf2c6b, cookiesArr['length']); _0xcf2c6b++) {
        if (cookiesArr[_0xcf2c6b]) {
            if (_0x55e71c['fvqZn'](_0x55e71c['bRUAJ'], _0x55e71c['bRUAJ'])) {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' FriendCircle API请求失败，请检查网路重试');
            } else {
                cookie = cookiesArr[_0xcf2c6b];
                $['UserName'] = _0x55e71c['iZPTv'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0xcf2c6b + 0x1;
                $['nickName'] = '';
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x55e71c['lAfQg'](TotalBean);
                console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                if (!$['isLogin']) {
                    if (_0x55e71c['cNQjJ'] !== _0x55e71c['cNQjJ']) {
                        $['shareCodesArr']['push'](shareCodes[item]);
                    } else {
                        $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                            'open-url': _0x55e71c['nbQRk']
                        });
                        if ($['isNode']()) {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                        }
                        continue;
                    }
                }
                token = await _0x55e71c['lAfQg'](getJxToken);
                $['allTask'] = [];
                $['info'] = {};
                await _0x55e71c['lAfQg'](shareCodesFormat);
                await _0x55e71c['lAfQg'](cfd);
                await $['wait'](0x1388);
            }
        }
    }
    for (let _0x118a92 = 0x0; _0x55e71c['RPkjG'](_0x118a92, cookiesArr['length']); _0x118a92++) {
        if (_0x55e71c['fvqZn'](_0x55e71c['ISTyv'], _0x55e71c['ISTyv'])) {
            $['logErr'](e, resp);
        } else {
            cookie = cookiesArr[_0x118a92];
            $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            token = await _0x55e71c['BnwJl'](getJxToken);
            if (!token) continue;
            $['canHelp'] = !![];
            if ($['shareCodes'] && $['shareCodes']['length']) console['log']('\n\n寻宝大作战，自己账号内部循环互助\n\n');
            for (let _0x498fa1 of $['shareCodes']) {
                if (_0x55e71c['EvmSe']('vinsO', 'vinsO')) {
                    console['log']('账号' + $['UserName'] + ' 去参加 ' + _0x498fa1 + ' 寻宝大作战');
                    await joinGroup(_0x498fa1);
                    if (!$['canHelp']) break;
                    await $['wait'](0x1f40);
                } else {
                    if (err) {
                        console['log']('' + JSON['stringify'](err));
                        console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            sErrMsg,
                            dwExpericnce
                        } = JSON['parse'](data);
                        $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? data : ''));
                    }
                }
            }
            if (!$['canHelp']) continue;
            console['log']('\n\n寻宝大作战，助力作者\n');
            for (let _0x1bf709 of $['strGroupIds']) {
                console['log']('账号' + $['UserName'] + ' 去参加寻宝大作战 ' + _0x1bf709 + ' 等待10秒');
                await _0x55e71c['HSDbq'](joinGroup, _0x1bf709);
                if (!$['canHelp']) break;
                await $['wait'](_0x55e71c['vSHcp'](0x3e8, 0xa));
            }
        }
    }
    await _0x55e71c['BnwJl'](showMsg);
})()['catch'](_0x57fcfc => $['logErr'](_0x57fcfc))['finally'](() => $['done']());
async function cfd() {
    var _0x15bea8 = {
        'qxaAf': function(_0x5a6cf8) {
            return _0x5a6cf8();
        },
        'SXQgI': function(_0x1848ef, _0x3c97d8) {
            return _0x1848ef(_0x3c97d8);
        },
        'ysaHq': function(_0x2cf4ca, _0x59eed1) {
            return _0x2cf4ca(_0x59eed1);
        },
        'OONSz': function(_0x26fc83) {
            return _0x26fc83();
        },
        'kTzoC': function(_0x4c904f) {
            return _0x4c904f();
        },
        'CNMUb': function(_0x2ccf93, _0x583b62) {
            return _0x2ccf93(_0x583b62);
        },
        'CgLHZ': function(_0x454d87) {
            return _0x454d87();
        },
        'EGAax': function(_0x3c31e5, _0x2b6623) {
            return _0x3c31e5 === _0x2b6623;
        },
        'sQtjh': 'ppqub',
        'JyuEd': 'hnYvM'
    };
    try {
        const _0x4a9f0b = await getUserInfo();
        await $['wait'](0x7d0);
        await querySignList();
        await $['wait'](0xbb8);
        await _0x15bea8['qxaAf'](getMoney);
        await $['wait'](0xbb8);
        await _0x15bea8['SXQgI'](getTaskList, 0x0);
        await $['wait'](0xbb8);
        await _0x15bea8['ysaHq'](browserTask, 0x0);
        await $['wait'](0xbb8);
        await _0x15bea8['OONSz'](treasureHunt);
        await $['wait'](0xbb8);
        await _0x15bea8['kTzoC'](friendCircle);
        await $['wait'](0xbb8);
        await getTaskList(0x1);
        await $['wait'](0xbb8);
        await _0x15bea8['CNMUb'](browserTask, 0x1);
        await $['wait'](0xbb8);
        await funCenterState();
        await $['wait'](0xbb8);
        await openPeriodBox();
        await $['wait'](0xbb8);
        await submitGroupId();
        await $['wait'](0xbb8);
        await _0x15bea8['CgLHZ'](helpFriend);
        $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】' + _0x4a9f0b['ddwMoney'] + '\x0a');
    } catch (_0xdf787) {
        if (_0x15bea8['EGAax'](_0x15bea8['sQtjh'], _0x15bea8['JyuEd'])) {
            console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
            data = JSON['parse'](data);
        } else {
            $['logErr'](_0xdf787);
        }
    }
}

function helpFriend() {
    var _0x51f806 = {
        'dKinF': function(_0x2b6326, _0x34292f) {
            return _0x2b6326 === _0x34292f;
        },
        'yCOpA': 'VaNfj',
        'rYiwn': 'rYEaB',
        'zwYEv': 'jxQDZ',
        'QzzIW': function(_0x206441, _0x2b7a45) {
            return _0x206441(_0x2b7a45);
        }
    };
    return new Promise(async _0x35dd7e => {
        if (_0x51f806['dKinF'](_0x51f806['yCOpA'], _0x51f806['rYiwn'])) {
            $['logErr'](e, resp);
        } else {
            $['canHelp'] = !![];
            for (let _0x582440 of $['newShareCodes']['filter'](_0x899aa4 => !!_0x899aa4 && !_0x899aa4['includes']('GroupId'))) {
                if (_0x51f806['dKinF'](_0x51f806['zwYEv'], _0x51f806['zwYEv'])) {
                    console['log']('去助力好友 【' + _0x582440 + '】');
                    if (token) await _0x51f806['QzzIW'](createSuperAssistUser, _0x582440);
                    await $['wait'](0x2710);
                    await _0x51f806['QzzIW'](createAssistUser, _0x582440);
                    if (!$['canHelp']) break;
                    await $['wait'](0x2ee0);
                } else {
                    console['log']('' + JSON['stringify'](err));
                    console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
                }
            }
            _0x35dd7e();
        }
    });
}

function getAuthorShareCode(_0x3e6172) {
    var _0x1a0ee9 = {
        'lObLx': function(_0x3ddb09) {
            return _0x3ddb09();
        },
        'alCOS': function(_0x11fbf4, _0x33f6d2) {
            return _0x11fbf4(_0x33f6d2);
        }
    };
    return new Promise(async _0x22cfb => {
        const _0x376f01 = {
            'url': _0x3e6172 + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            const _0x3a1fbd = _0x1a0ee9['alCOS'](require, 'tunnel');
            const _0x5eeb1a = {
                'https': _0x3a1fbd['httpsOverHttp']({
                    'proxy': {
                        'host': process['env']['TG_PROXY_HOST'],
                        'port': process['env']['TG_PROXY_PORT'] * 0x1
                    }
                })
            };
            Object['assign'](_0x376f01, {
                'agent': _0x5eeb1a
            });
        }
        $['get'](_0x376f01, async (_0x300882, _0x16c34d, _0x5381cc) => {
            try {
                _0x22cfb(JSON['parse'](_0x5381cc));
            } catch (_0x1b19c5) {} finally {
                _0x1a0ee9['lObLx'](_0x22cfb);
            }
        });
        await $['wait'](0x2710);
        _0x1a0ee9['lObLx'](_0x22cfb);
    });
}

function getJxToken() {
    var _0x471b30 = {
        'lQbOt': function(_0x1ca69a) {
            return _0x1ca69a();
        },
        'fZviG': function(_0x143e20, _0xeb443f) {
            return _0x143e20 !== _0xeb443f;
        },
        'TwdFy': 'HeydK',
        'wLChH': function(_0xca2d6d, _0xdadf73) {
            return _0xca2d6d < _0xdadf73;
        },
        'PJugW': function(_0x3dbf77, _0x4e51cc) {
            return _0x3dbf77(_0x4e51cc);
        },
        'mhSRr': function(_0x361f13, _0x1c9aa2) {
            return _0x361f13 * _0x1c9aa2;
        },
        'aELxF': 'nVNIp',
        'eapFf': function(_0x246537, _0x442ff9) {
            return _0x246537(_0x442ff9);
        },
        'xfmgx': function(_0x399884, _0x3622a9) {
            return _0x399884 === _0x3622a9;
        },
        'JzkPG': 'ZzJdu',
        'nmfmc': 'iLUqW',
        'xymeo': function(_0x577d72, _0x36b693) {
            return _0x577d72(_0x36b693);
        }
    };

    function _0x50af40(_0xaec3bd) {
        if (_0x471b30['fZviG'](_0x471b30['TwdFy'], 'jUbme')) {
            let _0x2b9952 = 'abcdefghijklmnopqrstuvwxyz1234567890';
            let _0xc41b44 = '';
            for (let _0x4525be = 0x0; _0x471b30['wLChH'](_0x4525be, _0xaec3bd); _0x4525be++) {
                _0xc41b44 += _0x2b9952[_0x471b30['PJugW'](parseInt, _0x471b30['mhSRr'](Math['random'](), _0x2b9952['length']))];
            }
            return _0xc41b44;
        } else {
            _0x471b30['lQbOt'](resolve);
        }
    }
    return new Promise(_0x3719dc => {
        if (_0x471b30['aELxF'] === _0x471b30['aELxF']) {
            let _0x1cde10 = _0x471b30['eapFf'](_0x50af40, 0x28);
            let _0x3645c8 = (+new Date())['toString']();
            if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
                if (_0x471b30['xfmgx'](_0x471b30['JzkPG'], _0x471b30['nmfmc'])) {
                    _0x3719dc();
                } else {
                    console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\x0a');
                    _0x471b30['eapFf'](_0x3719dc, null);
                }
            }
            let _0x3443b6 = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
            let _0x39e521 = $['md5']('' + _0x471b30['eapFf'](decodeURIComponent, _0x3443b6) + _0x3645c8 + _0x1cde10 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
            _0x471b30['xymeo'](_0x3719dc, {
                'timestamp': _0x3645c8,
                'phoneid': _0x1cde10,
                'farm_jstoken': _0x39e521
            });
        } else {
            _0x3719dc();
        }
    });
}

function getUserInfo(_0xe80f63 = !![]) {
    var _0x19fc03 = {
        'qNTVH': function(_0x53ee68, _0x2b1663) {
            return _0x53ee68 === _0x2b1663;
        },
        'doRIP': 'cBALk',
        'AEiXB': 'rBfqN',
        'RZFSg': function(_0x2dbfd4, _0x454b30) {
            return _0x2dbfd4(_0x454b30);
        },
        'mLAQw': 'gTGXg',
        'Tfprd': 'ahxgu',
        'qwyjb': function(_0x2092e1, _0x45043e) {
            return _0x2092e1 === _0x45043e;
        },
        'AwoSE': function(_0x48d06d, _0x2708e4) {
            return _0x48d06d === _0x2708e4;
        },
        'qPuNd': 'dAMoT'
    };
    return new Promise(async _0x31ca83 => {
        var _0x197b7e = {
            'eXAtR': function(_0x41e0e5, _0x49f4b7) {
                return _0x41e0e5 === _0x49f4b7;
            },
            'JOrqn': function(_0x504180, _0x5744f6) {
                return _0x19fc03['qwyjb'](_0x504180, _0x5744f6);
            }
        };
        if (_0x19fc03['AwoSE'](_0x19fc03['qPuNd'], 'SOSPi')) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
        } else {
            $['get'](_0x19fc03['RZFSg'](taskUrl, 'user/QueryUserInfo'), (_0x320b52, _0x39de9d, _0x7eb916) => {
                try {
                    if (_0x19fc03['qNTVH'](_0x19fc03['doRIP'], _0x19fc03['AEiXB'])) {
                        const {
                            sErrMsg,
                            iRet
                        } = _0x7eb916 = JSON['parse'](_0x7eb916);
                        if (_0x197b7e['eXAtR'](iRet, 0x7d5) || _0x197b7e['JOrqn'](iRet, 0x270f)) $['canHelp'] = ![];
                        $['log']('iRet:' + iRet + ' ' + sErrMsg);
                    } else {
                        if (_0x320b52) {
                            console['log']('' + JSON['stringify'](_0x320b52));
                            console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                        } else {
                            _0x7eb916 = JSON['parse'](_0x7eb916);
                            const {
                                iret,
                                SceneList = {},
                                XbStatus: {
                                    XBDetail = [],
                                    dwXBRemainCnt
                                } = {},
                                ddwMoney,
                                dwIsNewUser,
                                sErrMsg,
                                strMyShareId,
                                strPin,
                                dwLevel
                            } = _0x7eb916;
                            $['log']('\x0a获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x7eb916 : ''));
                            $['log']('\x0a当前等级:' + dwLevel + ',财富值:' + _0x7eb916['ddwMoney'] + '\x0a');
                            if (_0xe80f63) {
                                console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                            }
                            $['info'] = {
                                ...$['info'],
                                'SceneList': SceneList,
                                'XBDetail': XBDetail,
                                'dwXBRemainCnt': dwXBRemainCnt,
                                'ddwMoney': ddwMoney,
                                'dwIsNewUser': dwIsNewUser,
                                'strMyShareId': strMyShareId,
                                'strPin': strPin,
                                'dwLevel': dwLevel
                            };
                            _0x19fc03['RZFSg'](_0x31ca83, {
                                'SceneList': SceneList,
                                'XBDetail': XBDetail,
                                'dwXBRemainCnt': dwXBRemainCnt,
                                'ddwMoney': ddwMoney,
                                'dwIsNewUser': dwIsNewUser,
                                'strMyShareId': strMyShareId,
                                'strPin': strPin
                            });
                        }
                    }
                } catch (_0x1a3379) {
                    if (_0x19fc03['mLAQw'] === _0x19fc03['Tfprd']) {
                        if (_0x320b52) {
                            console['log']('' + JSON['stringify'](_0x320b52));
                            console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                        } else {
                            _0x7eb916 = JSON['parse'](_0x7eb916);
                            const {
                                iret,
                                SceneList = {},
                                XbStatus: {
                                    XBDetail = [],
                                    dwXBRemainCnt
                                } = {},
                                ddwMoney,
                                dwIsNewUser,
                                sErrMsg,
                                strMyShareId,
                                strPin,
                                dwLevel
                            } = _0x7eb916;
                            $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x7eb916 : ''));
                            $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x7eb916['ddwMoney'] + '\x0a');
                            if (_0xe80f63) {
                                console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                            }
                            $['info'] = {
                                ...$['info'],
                                'SceneList': SceneList,
                                'XBDetail': XBDetail,
                                'dwXBRemainCnt': dwXBRemainCnt,
                                'ddwMoney': ddwMoney,
                                'dwIsNewUser': dwIsNewUser,
                                'strMyShareId': strMyShareId,
                                'strPin': strPin,
                                'dwLevel': dwLevel
                            };
                            _0x31ca83({
                                'SceneList': SceneList,
                                'XBDetail': XBDetail,
                                'dwXBRemainCnt': dwXBRemainCnt,
                                'ddwMoney': ddwMoney,
                                'dwIsNewUser': dwIsNewUser,
                                'strMyShareId': strMyShareId,
                                'strPin': strPin
                            });
                        }
                    } else {
                        $['logErr'](_0x1a3379, _0x39de9d);
                    }
                } finally {
                    _0x31ca83();
                }
            });
        }
    });
}

function querySignList() {
    var _0x472ad6 = {
        'FDfdv': function(_0x55addc, _0x4d43d4) {
            return _0x55addc !== _0x4d43d4;
        },
        'WeCPS': function(_0x566b3b, _0x4f576b) {
            return _0x566b3b(_0x4f576b);
        },
        'zykuU': 'UMEgd',
        'SwHQE': function(_0xf6c4ac, _0x593ff4) {
            return _0xf6c4ac === _0x593ff4;
        },
        'AGziq': function(_0x1f6011, _0x2b8cea, _0x25c4ab) {
            return _0x1f6011(_0x2b8cea, _0x25c4ab);
        }
    };
    return new Promise(async _0x5ae1ed => {
        var _0x5d3e88 = {
            'ppldY': function(_0x294369, _0xdd4d6e) {
                return _0x472ad6['FDfdv'](_0x294369, _0xdd4d6e);
            },
            'YVtfF': '任务进行中或者未到任务时间',
            'EixZC': function(_0x2cb65c, _0x3c1810) {
                return _0x472ad6['WeCPS'](_0x2cb65c, _0x3c1810);
            },
            'agvYF': function(_0x2cb155, _0x74d2e9) {
                return _0x2cb155 === _0x74d2e9;
            },
            'jxani': _0x472ad6['zykuU'],
            'ovoHt': 'bdKDB',
            'rDVGv': 'WURpa',
            'ttols': 'KMIDv',
            'bvinr': function(_0x276666, _0x1157ff) {
                return _0x472ad6['SwHQE'](_0x276666, _0x1157ff);
            },
            'vqhqW': function(_0x586cfc, _0x193c15, _0x492dc6) {
                return _0x472ad6['AGziq'](_0x586cfc, _0x193c15, _0x492dc6);
            }
        };
        $['get'](taskUrl('task/QuerySignListV2'), async (_0x342f17, _0x46b49b, _0x355762) => {
            try {
                if (_0x5d3e88['jxani'] === _0x5d3e88['ovoHt']) {
                    if (_0x342f17) {
                        console['log']('' + JSON['stringify'](_0x342f17));
                        console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            sErrMsg,
                            taskinfo = []
                        } = JSON['parse'](_0x355762);
                        $['allTask'] = taskinfo['filter'](_0x15ed8e => _0x15ed8e['dwAwardStatus'] === 0x1);
                        $['log']('\x0a获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x355762 : ''));
                    }
                } else {
                    if (_0x342f17) {
                        if (_0x5d3e88['ppldY'](_0x5d3e88['rDVGv'], _0x5d3e88['ttols'])) {
                            console['log']('' + JSON['stringify'](_0x342f17));
                            console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
                        } else {
                            console['log']('' + JSON['stringify'](_0x342f17));
                            console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                        }
                    } else {
                        const {
                            iRet,
                            sData: {
                                Sign = [{}],
                                dwUserFlag
                            },
                            sErrMsg
                        } = JSON['parse'](_0x355762);
                        $['log']('\n签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x355762 : ''));
                        const [{
                            dwStatus,
                            ddwMoney
                        }] = Sign['filter'](_0x3645c5 => _0x3645c5['dwShowFlag'] === 0x1);
                        if (_0x5d3e88['bvinr'](dwStatus, 0x0)) {
                            if (_0x5d3e88['bvinr']('uDmXv', 'uDmXv')) {
                                await _0x5d3e88['vqhqW'](userSignReward, dwUserFlag, ddwMoney);
                            } else {
                                if (_0x342f17) {
                                    console['log']('' + JSON['stringify'](_0x342f17));
                                    console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                                } else {
                                    const {
                                        msg,
                                        ret
                                    } = JSON['parse'](_0x355762);
                                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x5d3e88['ppldY'](msg['indexOf']('活动太火爆了'), -0x1) ? _0x5d3e88['YVtfF'] : msg) + '\x0a' + ($['showLog'] ? _0x355762 : ''));
                                    _0x5d3e88['EixZC'](_0x5ae1ed, _0x5d3e88['agvYF'](ret, 0x0));
                                }
                            }
                        } else {
                            $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                        }
                    }
                }
            } catch (_0x130f6e) {
                $['logErr'](_0x130f6e, _0x46b49b);
            } finally {
                _0x5ae1ed();
            }
        });
    });
}
async function userSignReward(_0x206292, _0x4ac5c8) {
    var _0x13fc11 = {
        'xjZeH': function(_0x356daf, _0x187ff7) {
            return _0x356daf !== _0x187ff7;
        },
        'sMYdC': '活动太火爆了',
        'yxyRP': function(_0x443136, _0x51ea71) {
            return _0x443136 === _0x51ea71;
        },
        'tOMsg': 'NCFOO',
        'fhwIU': 'JPGCW',
        'MXbJG': function(_0x4ea0a8, _0xeb7bd) {
            return _0x4ea0a8 || _0xeb7bd;
        },
        'lLddq': function(_0x15a33f) {
            return _0x15a33f();
        },
        'gTDJa': function(_0x6fd851, _0x2caa1a, _0xa987f6) {
            return _0x6fd851(_0x2caa1a, _0xa987f6);
        }
    };
    return new Promise(async _0x40f3ae => {
        var _0x3227bb = {
            'IeyDl': function(_0x213236, _0xa11a8a) {
                return _0x13fc11['xjZeH'](_0x213236, _0xa11a8a);
            },
            'yxcgB': _0x13fc11['sMYdC'],
            'drzEn': '任务进行中或者未到任务时间',
            'UOglN': function(_0x282b7e, _0x5a1f71) {
                return _0x282b7e(_0x5a1f71);
            },
            'cLyWq': function(_0x39f51c, _0x28bc84) {
                return _0x13fc11['yxyRP'](_0x39f51c, _0x28bc84);
            },
            'IedRd': function(_0x5d670c, _0x162e0c) {
                return _0x13fc11['yxyRP'](_0x5d670c, _0x162e0c);
            },
            'yWqmf': _0x13fc11['tOMsg'],
            'XpMqD': _0x13fc11['fhwIU'],
            'GrcWR': function(_0x46d7a8, _0x38ddf0) {
                return _0x13fc11['MXbJG'](_0x46d7a8, _0x38ddf0);
            },
            'Tqtee': function(_0x473ca1) {
                return _0x13fc11['lLddq'](_0x473ca1);
            }
        };
        $['get'](_0x13fc11['gTDJa'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x206292 + '&ddwMoney=' + _0x4ac5c8), async (_0x5347c2, _0x35f4e9, _0x24c573) => {
            try {
                if (_0x3227bb['cLyWq']('zWlQQ', 'zWlQQ')) {
                    if (_0x5347c2) {
                        if (_0x3227bb['IedRd'](_0x3227bb['yWqmf'], _0x3227bb['XpMqD'])) {
                            $['logErr'](e, _0x35f4e9);
                        } else {
                            console['log']('' + JSON['stringify'](_0x5347c2));
                            console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                        }
                    } else {
                        const {
                            iRet,
                            sData: {
                                ddwMoney
                            },
                            sErrMsg
                        } = JSON['parse'](_0x24c573);
                        $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x3227bb['GrcWR'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x24c573 : ''));
                    }
                } else {
                    const {
                        msg,
                        ret
                    } = JSON['parse'](_0x24c573);
                    $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x3227bb['IeyDl'](msg['indexOf'](_0x3227bb['yxcgB']), -0x1) ? _0x3227bb['drzEn'] : msg) + '\x0a' + ($['showLog'] ? _0x24c573 : ''));
                    _0x3227bb['UOglN'](_0x40f3ae, ret === 0x0);
                }
            } catch (_0x3f9a8b) {
                $['logErr'](_0x3f9a8b, _0x35f4e9);
            } finally {
                _0x3227bb['Tqtee'](_0x40f3ae);
            }
        });
    });
}
async function getMoney() {
    var _0x341a20 = {
        'bXBGd': function(_0x44f8e0, _0xbb8acf) {
            return _0x44f8e0 !== _0xbb8acf;
        },
        'zHbGG': '活动太火爆了',
        'ySimm': '任务为成就任务或者未到任务时间',
        'jFbbw': '1001',
        'hDQYA': '1003',
        'ltjtJ': function(_0x5e68e5, _0x4b94e9) {
            return _0x5e68e5 === _0x4b94e9;
        },
        'MMryY': '1002',
        'poCHh': function(_0x46ee40, _0x3fbe17) {
            return _0x46ee40 >= _0x3fbe17;
        },
        'xiJNt': function(_0x262068, _0x272a39) {
            return _0x262068(_0x272a39);
        },
        'LBLOY': function(_0x189ea0, _0x345a02, _0x2ba085) {
            return _0x189ea0(_0x345a02, _0x2ba085);
        },
        'KTYtg': 'hwVTB',
        'dXCgy': function(_0x475073, _0x54619e, _0x43482e, _0x447aac) {
            return _0x475073(_0x54619e, _0x43482e, _0x447aac);
        },
        'ksGSq': function(_0x46ed77, _0x40a02f, _0x29428e) {
            return _0x46ed77(_0x40a02f, _0x29428e);
        }
    };
    let _0x53829c = $['info']['SceneList'];
    let _0x15d11f = [],
        _0x4f2e7a = [_0x341a20['jFbbw'], '1002', _0x341a20['hDQYA']];
    _0x15d11f = Object['keys'](_0x53829c);
    _0x15d11f = _0x4f2e7a['filter'](_0x54c4e1 => _0x15d11f['every'](_0x18952d => _0x54c4e1 !== _0x18952d));
    console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x15d11f));
    for (let _0x4dfe4e of _0x15d11f) {
        if (_0x341a20['ltjtJ'](_0x4dfe4e, _0x341a20['MMryY']) && _0x341a20['poCHh']($['info']['dwLevel'], 0xb)) await activeScene(_0x4dfe4e);
        if (_0x341a20['ltjtJ'](_0x4dfe4e, _0x341a20['hDQYA']) && _0x341a20['poCHh']($['info']['dwLevel'], 0x1a)) await _0x341a20['xiJNt'](activeScene, _0x4dfe4e);
    }
    for (const _0x4559e2 of Object['keys']($['info']['SceneList'])) {
        await $['wait'](0x7d0);
        await _0x341a20['LBLOY'](getMoney_dwSource_1, _0x4559e2, _0x53829c);
        const _0xe58531 = eval('(' + JSON['stringify'](_0x53829c[_0x4559e2]['EmployeeList']) + ')');
        if (_0xe58531 !== '') {
            for (var _0x4dd714 of Object['keys'](_0xe58531)) {
                if (_0x341a20['ltjtJ'](_0x341a20['KTYtg'], _0x341a20['KTYtg'])) {
                    await $['wait'](0x7d0);
                    await _0x341a20['dXCgy'](getMoney_dwSource_2, _0x4559e2, _0x53829c, _0x4dd714);
                } else {
                    const {
                        msg,
                        ret,
                        data: {
                            prizeInfo = ''
                        } = {}
                    } = JSON['parse'](data);
                    let _0x2b3145 = '';
                    if (_0x341a20['bXBGd'](msg['indexOf'](_0x341a20['zHbGG']), -0x1)) {
                        _0x2b3145 = _0x341a20['ySimm'];
                    } else {
                        _0x2b3145 = msg + prizeInfo ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                    }
                    $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x2b3145 + '\x0a' + ($['showLog'] ? data : ''));
                    resolve(ret === 0x0);
                }
            }
        }
        await $['wait'](0x7d0);
        if (token) await _0x341a20['ksGSq'](getMoney_dwSource_3, _0x4559e2, _0x53829c);
        await _0x341a20['xiJNt'](employeeAward, _0x4559e2);
    }
}

function getMoney_dwSource_1(_0x382665, _0x3a994c) {
    var _0x19cacf = {
        'YTpfT': function(_0xc6a312, _0x3713c7) {
            return _0xc6a312(_0x3713c7);
        },
        'TriFY': function(_0x2d5a5d, _0x4fbef0) {
            return _0x2d5a5d === _0x4fbef0;
        },
        'XiakJ': 'iDUEs',
        'VCyUE': function(_0x59cedf, _0x2ea658) {
            return _0x59cedf == _0x2ea658;
        },
        'VlWkg': 'success',
        'fuLYJ': function(_0x15d257, _0x3de15d) {
            return _0x15d257 || _0x3de15d;
        },
        'WgMBY': 'qbiPa',
        'nZYFv': function(_0x245079) {
            return _0x245079();
        },
        'sYHLL': function(_0x1054d4, _0x3b54c5, _0x1d49cf) {
            return _0x1054d4(_0x3b54c5, _0x1d49cf);
        }
    };
    return new Promise(async _0x25fc47 => {
        $['get'](_0x19cacf['sYHLL'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x382665 + '&strEmployeeId=undefined&dwSource=1'), async (_0x4cad21, _0x5aca76, _0x2a5af9) => {
            var _0x6ee260 = {
                'TLjzr': function(_0x5dbd9e, _0x41f0a0) {
                    return _0x19cacf['YTpfT'](_0x5dbd9e, _0x41f0a0);
                }
            };
            if (_0x19cacf['TriFY'](_0x19cacf['XiakJ'], 'pzrzf')) {
                const {
                    sErrMsg
                } = JSON['parse'](_0x2a5af9);
                $['log']('\x0a【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x2a5af9 : ''));
                _0x6ee260['TLjzr'](_0x25fc47, 0x0);
            } else {
                try {
                    if (_0x4cad21) {
                        console['log']('' + JSON['stringify'](_0x4cad21));
                        console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg
                        } = JSON['parse'](_0x2a5af9);
                        $['log']('\x0a【' + _0x3a994c[_0x382665]['strSceneName'] + '】🏝岛主 : ' + (_0x19cacf['VCyUE'](sErrMsg, _0x19cacf['VlWkg']) ? '获取财富值：¥ ' + _0x19cacf['fuLYJ'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2a5af9 : ''));
                    }
                } catch (_0x1875f5) {
                    $['logErr'](_0x1875f5, _0x5aca76);
                } finally {
                    if ('qbiPa' !== _0x19cacf['WgMBY']) {
                        _0x25fc47();
                    } else {
                        _0x19cacf['nZYFv'](_0x25fc47);
                    }
                }
            }
        });
    });
}

function getMoney_dwSource_2(_0x58f68f, _0x25bd23, _0x1ae882) {
    var _0x199486 = {
        'nWTWU': function(_0x222f08, _0x4242b9) {
            return _0x222f08(_0x4242b9);
        },
        'NGFaG': function(_0x42e76d, _0x3eb997) {
            return _0x42e76d === _0x3eb997;
        },
        'zwztM': function(_0x3948d2, _0x345c18) {
            return _0x3948d2 || _0x345c18;
        },
        'SAskd': function(_0x34066d, _0x73d7e4) {
            return _0x34066d !== _0x73d7e4;
        },
        'KdKgs': 'LRunL',
        'ZmYRs': function(_0x5ba17e, _0x153a42) {
            return _0x5ba17e !== _0x153a42;
        },
        'ctSQC': 'BHYUE',
        'NTHMf': 'VkOtP',
        'RkjMb': 'WTcXQ',
        'LLyOS': function(_0x36d5b7, _0x5843c6) {
            return _0x36d5b7 == _0x5843c6;
        },
        'ekymC': function(_0x2d0032, _0x5832d7) {
            return _0x2d0032 === _0x5832d7;
        },
        'PPHGU': 'dvpLH',
        'XeSfE': function(_0x3e7d7d, _0x1e1244, _0x30c788) {
            return _0x3e7d7d(_0x1e1244, _0x30c788);
        }
    };
    return new Promise(async _0x147829 => {
        var _0x2290dc = {
            'yfCEf': function(_0x13c95e, _0x1b7266) {
                return _0x199486['nWTWU'](_0x13c95e, _0x1b7266);
            },
            'rdJET': function(_0x3e1a64, _0xe09843) {
                return _0x199486['NGFaG'](_0x3e1a64, _0xe09843);
            },
            'OUZcT': function(_0x55af24, _0x13a2cb) {
                return _0x199486['zwztM'](_0x55af24, _0x13a2cb);
            },
            'zlWMJ': function(_0x297d0c, _0x3123b9) {
                return _0x199486['SAskd'](_0x297d0c, _0x3123b9);
            },
            'HRTmU': _0x199486['KdKgs'],
            'yptrE': function(_0x182df6, _0x357c93) {
                return _0x199486['ZmYRs'](_0x182df6, _0x357c93);
            },
            'jvies': _0x199486['ctSQC'],
            'hLymP': _0x199486['NTHMf'],
            'UwbTc': _0x199486['RkjMb'],
            'qcpuK': 'PJOkv',
            'EJOTb': function(_0x1158db, _0x2e5ee6) {
                return _0x199486['LLyOS'](_0x1158db, _0x2e5ee6);
            },
            'ccRCq': 'success',
            'gwPlR': function(_0x309bdc, _0x2ff30) {
                return _0x199486['ekymC'](_0x309bdc, _0x2ff30);
            },
            'nFDlO': _0x199486['PPHGU'],
            'ZOcYQ': function(_0x47e06c) {
                return _0x47e06c();
            }
        };
        $['get'](_0x199486['XeSfE'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x58f68f + '&strEmployeeId=' + _0x1ae882 + '&dwSource=2'), async (_0x4ff5f6, _0x78d99d, _0x5c7caf) => {
            var _0x33856d = {
                'VwqwZ': function(_0x3da9fe, _0x1017a5) {
                    return _0x2290dc['rdJET'](_0x3da9fe, _0x1017a5);
                },
                'hQeDZ': 'false',
                'NNcNP': function(_0x4c1872, _0x294354) {
                    return _0x4c1872 > _0x294354;
                },
                'xSNlO': 'GITHUB',
                'ZjSFU': function(_0x492ffb, _0x52a9ac) {
                    return _0x2290dc['OUZcT'](_0x492ffb, _0x52a9ac);
                },
                'FIcIO': function(_0x2cc967, _0x2b3664) {
                    return _0x2cc967(_0x2b3664);
                }
            };
            if (_0x2290dc['zlWMJ'](_0x2290dc['HRTmU'], _0x2290dc['HRTmU'])) {
                if (_0x4ff5f6) {
                    console['log']('' + JSON['stringify'](_0x4ff5f6));
                    console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg
                    } = JSON['parse'](_0x5c7caf);
                    $['log']('\x0a【' + _0x25bd23[_0x58f68f]['strSceneName'] + '】🏝岛主 : ' + (sErrMsg == 'success' ? '获取财富值：¥ ' + (dwMoney || 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5c7caf : ''));
                }
            } else {
                try {
                    if (_0x2290dc['yptrE'](_0x2290dc['jvies'], 'EpUnl')) {
                        if (_0x4ff5f6) {
                            if (_0x2290dc['rdJET'](_0x2290dc['hLymP'], _0x2290dc['UwbTc'])) {
                                Object['keys'](jdCookieNode)['forEach'](_0x108c3e => {
                                    cookiesArr['push'](jdCookieNode[_0x108c3e]);
                                });
                                if (process['env']['JD_DEBUG'] && _0x33856d['VwqwZ'](process['env']['JD_DEBUG'], _0x33856d['hQeDZ'])) console['log'] = () => {};
                                if (_0x33856d['NNcNP'](JSON['stringify'](process['env'])['indexOf'](_0x33856d['xSNlO']), -0x1)) process['exit'](0x0);
                            } else {
                                console['log']('' + JSON['stringify'](_0x4ff5f6));
                                console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x2290dc['rdJET'](_0x2290dc['qcpuK'], 'PJOkv')) {
                                const {
                                    dwMoney,
                                    iRet,
                                    sErrMsg,
                                    strPin
                                } = JSON['parse'](_0x5c7caf);
                                $['log']('\x0a【' + _0x25bd23[_0x58f68f]['strSceneName'] + '】👬好友: ' + (_0x2290dc['EJOTb'](sErrMsg, _0x2290dc['ccRCq']) ? '获取普通助力财富值：¥ ' + _0x2290dc['OUZcT'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5c7caf : ''));
                            } else {
                                _0x2290dc['yfCEf'](_0x147829, _0x5c7caf);
                            }
                        }
                    } else {
                        $['logErr'](e, _0x78d99d);
                    }
                } catch (_0x3d9a25) {
                    $['logErr'](_0x3d9a25, _0x78d99d);
                } finally {
                    if (_0x2290dc['gwPlR'](_0x2290dc['nFDlO'], _0x2290dc['nFDlO'])) {
                        _0x2290dc['ZOcYQ'](_0x147829);
                    } else {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x5c7caf);
                        $['log']('\x0a【' + place + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x33856d['ZjSFU'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x5c7caf : ''));
                        _0x33856d['FIcIO'](_0x147829, iRet);
                    }
                }
            }
        });
    });
}

function getMoney_dwSource_3(_0x345654, _0x432158) {
    var _0x3aac4a = {
        'rzIcn': function(_0x5e149e, _0x3a19e0) {
            return _0x5e149e !== _0x3a19e0;
        },
        'AEpoE': 'rIJPo',
        'arXOZ': function(_0x116ea3, _0x28cbb9) {
            return _0x116ea3 === _0x28cbb9;
        },
        'EmITq': 'jQHGH',
        'Kbzrt': function(_0x15cfb7, _0x32fe9d) {
            return _0x15cfb7 == _0x32fe9d;
        },
        'DFWKQ': 'success',
        'BdZXv': function(_0x2c3dac, _0x3d1870) {
            return _0x2c3dac !== _0x3d1870;
        },
        'hWyGV': 'XBxXS',
        'qjqqA': function(_0x1de244, _0xaeef2b) {
            return _0x1de244 !== _0xaeef2b;
        },
        'ihjDP': 'aqGmw',
        'Bylca': function(_0x132680) {
            return _0x132680();
        },
        'BAeZs': function(_0x7dbcd1, _0x5d7cd7, _0x4a4847) {
            return _0x7dbcd1(_0x5d7cd7, _0x4a4847);
        },
        'oAImj': 'timestamp',
        'rlyGw': 'phoneid'
    };
    return new Promise(async _0x5b0060 => {
        $['get'](_0x3aac4a['BAeZs'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x345654 + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x3aac4a['oAImj']] + '&strPhoneID=' + token[_0x3aac4a['rlyGw']] + '&strPgUUNum=' + token['farm_jstoken']), async (_0x507c5a, _0x1d7fdf, _0x3bf8a7) => {
            try {
                if (_0x507c5a) {
                    if (_0x3aac4a['rzIcn'](_0x3aac4a['AEpoE'], 'fdzyD')) {
                        console['log']('' + JSON['stringify'](_0x507c5a));
                        console['log']($['name'] + ' getMoney_dwSource_3 API请求失败，请检查网路重试');
                    } else {
                        $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                    }
                } else {
                    if (_0x3aac4a['arXOZ'](_0x3aac4a['EmITq'], 'mvmur')) {
                        $['logErr'](e, _0x1d7fdf);
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](_0x3bf8a7);
                        $['log']('\x0a【' + _0x432158[_0x345654]['strSceneName'] + '】👬好友: ' + (_0x3aac4a['Kbzrt'](sErrMsg, _0x3aac4a['DFWKQ']) ? '获取超级助力财富值：¥ ' + (dwMoney || 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x3bf8a7 : ''));
                    }
                }
            } catch (_0x3bef9b) {
                if (_0x3aac4a['BdZXv'](_0x3aac4a['hWyGV'], _0x3aac4a['hWyGV'])) {
                    console['log']('' + JSON['stringify'](_0x507c5a));
                    console['log']($['name'] + ' TreasureHunt API请求失败，请检查网路重试');
                } else {
                    $['logErr'](_0x3bef9b, _0x1d7fdf);
                }
            } finally {
                if (_0x3aac4a['qjqqA'](_0x3aac4a['ihjDP'], 'aqGmw')) {
                    $['logErr'](e, _0x1d7fdf);
                } else {
                    _0x3aac4a['Bylca'](_0x5b0060);
                }
            }
        });
    });
}

function employeeAward(_0x664ed2) {
    var _0x35c69f = {
        'ReAJK': '1001',
        'tHrqp': '1002',
        'fbRdW': 'strName',
        'pSQhT': function(_0x396696, _0x5f6f69) {
            return _0x396696 === _0x5f6f69;
        },
        'wvZLs': 'KCLRw',
        'nHufP': function(_0x1c97b1, _0x52215a) {
            return _0x1c97b1 !== _0x52215a;
        },
        'ZepgQ': function(_0x32b68e, _0x4152a1) {
            return _0x32b68e * _0x4152a1;
        },
        'gScgx': function(_0x28fc6a, _0xa4ea61) {
            return _0x28fc6a(_0xa4ea61);
        },
        'xenvV': function(_0xafef12) {
            return _0xafef12();
        },
        'ySodC': '*/*',
        'KGnHh': 'zh-cn',
        'mKhNu': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
    };
    return new Promise(async _0x221a90 => {
        const _0x5ab7db = {
            'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x664ed2 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
            'headers': {
                'Host': 'm.jingxi.com',
                'accept': _0x35c69f['ySodC'],
                'user-agent': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'accept-language': _0x35c69f['KGnHh'],
                'referer': _0x35c69f['mKhNu'],
                'Cookie': cookie
            }
        };
        $['get'](_0x5ab7db, async (_0x5d6386, _0x30a853, _0x2d89ed) => {
            try {
                if (_0x5d6386) {
                    console['log']('' + JSON['stringify'](_0x5d6386));
                    console['log']($['name'] + ' employeeAward API请求失败，请检查网路重试');
                } else {
                    const {
                        iRet,
                        sErrMsg,
                        strAwardDetail
                    } = JSON['parse'](_0x2d89ed);
                    if (iRet === 0x0) {
                        switch (_0x664ed2) {
                            case _0x35c69f['ReAJK']:
                                console['log']('【欢乐牧场】获得 ' + strAwardDetail['strName'] + ' 红包');
                                break;
                            case _0x35c69f['tHrqp']:
                                console['log']('【便利店】获得 ' + strAwardDetail[_0x35c69f['fbRdW']] + ' 红包');
                                break;
                            case '1003':
                                console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x35c69f['fbRdW']] + ' 红包');
                                break;
                            default:
                                console['log']('【未知场景】获得 ' + strAwardDetail[_0x35c69f['fbRdW']] + ' 红包');
                        }
                    } else {
                        if (_0x35c69f['pSQhT']('KCLRw', _0x35c69f['wvZLs'])) {
                            switch (_0x664ed2) {
                                case _0x35c69f['ReAJK']:
                                    console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                    break;
                                case _0x35c69f['tHrqp']:
                                    console['log']('【便利店领取红包】' + sErrMsg);
                                    break;
                                case '1003':
                                    console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                    break;
                                default:
                                    console['log']('【未知场景领取红包】' + sErrMsg);
                            }
                        } else {
                            console['log']('' + JSON['stringify'](_0x5d6386));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    }
                    if (_0x35c69f['nHufP'](iRet, 0x0)) {
                        return;
                    }
                    await $['wait'](_0x35c69f['ZepgQ'](0x2, 0x3e8));
                    await _0x35c69f['gScgx'](employeeAward, _0x664ed2);
                }
            } catch (_0x6385ad) {
                $['logErr'](_0x6385ad, _0x30a853);
            } finally {
                _0x35c69f['xenvV'](_0x221a90);
            }
        });
    });
}

function friendCircle() {
    var _0x275ff3 = {
        'zDHMI': function(_0x313760, _0x513acd) {
            return _0x313760 == _0x513acd;
        },
        'UBImt': 'success',
        'TkCrr': function(_0x4fa46a, _0x16950f) {
            return _0x4fa46a || _0x16950f;
        },
        'PVuOs': function(_0xe8e57c, _0xce38cd) {
            return _0xe8e57c === _0xce38cd;
        },
        'mhbQD': 'onXii',
        'dQHty': function(_0x5bc542, _0x5c9b9d) {
            return _0x5bc542 !== _0x5c9b9d;
        },
        'tydMp': function(_0x10f9c1, _0x56bc28) {
            return _0x10f9c1 > _0x56bc28;
        },
        'aKbVf': function(_0x9087f5, _0x228d7c) {
            return _0x9087f5(_0x228d7c);
        },
        'cTprF': function(_0x384dce) {
            return _0x384dce();
        },
        'fIwVs': function(_0x366743, _0x429cd8, _0x196207) {
            return _0x366743(_0x429cd8, _0x196207);
        }
    };
    return new Promise(async _0x32f341 => {
        $['get'](_0x275ff3['fIwVs'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x2c18c1, _0x4b97a2, _0x6e3365) => {
            var _0xc2ff87 = {
                'ocSXe': function(_0xa1b21d, _0x1327db) {
                    return _0x275ff3['zDHMI'](_0xa1b21d, _0x1327db);
                },
                'uqFcg': _0x275ff3['UBImt'],
                'NRJCe': function(_0x294add, _0x59aa5c) {
                    return _0x275ff3['TkCrr'](_0x294add, _0x59aa5c);
                }
            };
            try {
                if (_0x275ff3['PVuOs'](_0x275ff3['mhbQD'], 'onXii')) {
                    if (_0x2c18c1) {
                        console['log']('' + JSON['stringify'](_0x2c18c1));
                        console['log']($['name'] + ' FriendCircle API请求失败，请检查网路重试');
                    } else {
                        const {
                            MomentList = [], iRet, sErrMsg, strShareId
                        } = JSON['parse'](_0x6e3365);
                        for (moment of MomentList) {
                            if (_0x275ff3['dQHty'](moment['strShareId'], strShareId) && _0x275ff3['tydMp'](moment['dwAccessMoney'], 0x0)) {
                                await _0x275ff3['aKbVf'](queryFriendIsland, moment['strShareId']);
                                await $['wait'](0xbb8);
                            }
                        }
                    }
                } else {
                    const {
                        iRet,
                        dwMoney,
                        sErrMsg,
                        strPin
                    } = JSON['parse'](_0x6e3365);
                    $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0xc2ff87['ocSXe'](sErrMsg, _0xc2ff87['uqFcg']) ? '获取超级助力财富值：¥ ' + _0xc2ff87['NRJCe'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x6e3365 : ''));
                }
            } catch (_0x2d32f8) {
                $['logErr'](_0x2d32f8, _0x4b97a2);
            } finally {
                _0x275ff3['cTprF'](_0x32f341);
            }
        });
    });
}

function queryFriendIsland(_0x19d21d) {
    var _0x129de7 = {
        'rcyQk': function(_0x3de493, _0x1534b1) {
            return _0x3de493(_0x1534b1);
        },
        'IfLol': 'success',
        'HpyzS': function(_0x71487e) {
            return _0x71487e();
        },
        'Pmiqq': 'uauGa',
        'LImtM': 'rUscv',
        'QXyoY': 'ztGVT',
        'ziIcX': 'qVJpk',
        'njdkt': function(_0x2cc64b, _0x5a410e) {
            return _0x2cc64b !== _0x5a410e;
        },
        'MHwtQ': 'Yqkfz',
        'TrhYK': 'kePqo',
        'PYllP': function(_0x4e3667, _0x314b99) {
            return _0x4e3667 + _0x314b99;
        },
        'ElFOt': function(_0x2c3db6, _0x1f6319) {
            return _0x2c3db6 !== _0x1f6319;
        },
        'YnHWL': 'SbFLf',
        'Wroid': 'jWVCE',
        'RLbxD': function(_0x30ed81, _0x56e823, _0x14d4da, _0x23ad0d, _0x19c604) {
            return _0x30ed81(_0x56e823, _0x14d4da, _0x23ad0d, _0x19c604);
        },
        'mEOWV': 'EWDMI',
        'VcrvI': 'hKNjX',
        'JIuHK': 'IYuMb',
        'avbyt': function(_0x2b3aea, _0x4f2b4d) {
            return _0x2b3aea === _0x4f2b4d;
        },
        'XGKcO': function(_0x5c0ca1, _0x5ae2d2) {
            return _0x5c0ca1 === _0x5ae2d2;
        },
        'qTyJr': 'Xksew',
        'Puqdf': 'CXpMm'
    };
    return new Promise(async _0x332d6d => {
        var _0x3606aa = {
            'HLWqQ': function(_0x9105b8, _0x52862d) {
                return _0x129de7['avbyt'](_0x9105b8, _0x52862d);
            },
            'HOxkT': function(_0x40253f, _0x5d7a54) {
                return _0x129de7['XGKcO'](_0x40253f, _0x5d7a54);
            }
        };
        if (_0x129de7['qTyJr'] === _0x129de7['Puqdf']) {
            _0x129de7['rcyQk'](_0x332d6d, ![]);
            $['log']('\x0a' + taskName + '【做日常任务】： mission success');
            return;
        } else {
            $['get'](taskUrl('user/QueryFriendIsland', 'strShareId=' + _0x19d21d + '&sceneval=2'), async (_0x20ec76, _0x519e2f, _0x41d5c5) => {
                var _0x4aff78 = {
                    'DMUcQ': function(_0x2a5406, _0x121065) {
                        return _0x2a5406 == _0x121065;
                    },
                    'JmQWG': _0x129de7['IfLol'],
                    'WvPML': function(_0xfc6778) {
                        return _0x129de7['HpyzS'](_0xfc6778);
                    }
                };
                if (_0x129de7['Pmiqq'] !== _0x129de7['LImtM']) {
                    try {
                        if (_0x20ec76) {
                            if (_0x129de7['QXyoY'] === 'ztGVT') {
                                console['log']('' + JSON['stringify'](_0x20ec76));
                                console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
                            } else {
                                const {
                                    dwGetMoney,
                                    iRet,
                                    sErrMsg
                                } = JSON['parse'](_0x41d5c5);
                                $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x41d5c5 : ''));
                            }
                        } else {
                            if ('qVJpk' !== _0x129de7['ziIcX']) {
                                if (_0x20ec76) {
                                    console['log']('' + JSON['stringify'](_0x20ec76));
                                    console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
                                } else {
                                    const {
                                        sErrMsg,
                                        iRet
                                    } = _0x41d5c5 = JSON['parse'](_0x41d5c5);
                                    if (_0x3606aa['HLWqQ'](iRet, 0x7d5) || _0x3606aa['HOxkT'](iRet, 0x270f)) $['canHelp'] = ![];
                                    $['log']('iRet:' + iRet + ' ' + sErrMsg);
                                }
                            } else {
                                const {
                                    SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                                } = JSON['parse'](_0x41d5c5);
                                if (sErrMsg === _0x129de7['IfLol']) {
                                    if (_0x129de7['njdkt'](_0x129de7['MHwtQ'], _0x129de7['TrhYK'])) {
                                        const _0x9e37ab = eval(_0x129de7['PYllP']('(' + JSON['stringify'](SceneList), ')'));
                                        const _0x2cce1a = Object['keys'](SceneList);
                                        for (sceneId of _0x2cce1a) {
                                            if (_0x129de7['ElFOt'](_0x129de7['YnHWL'], _0x129de7['Wroid'])) {
                                                await _0x129de7['RLbxD'](stealMoney, _0x19d21d, sceneId, strFriendNick, _0x9e37ab[sceneId]['strSceneName']);
                                                await $['wait'](0xbb8);
                                            } else {
                                                $['logErr'](e, _0x519e2f);
                                            }
                                        }
                                    } else {
                                        _0x332d6d();
                                    }
                                }
                            }
                        }
                    } catch (_0x104c94) {
                        if ('EWDMI' !== _0x129de7['mEOWV']) {
                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                        } else {
                            $['logErr'](_0x104c94, _0x519e2f);
                        }
                    } finally {
                        if (_0x129de7['VcrvI'] === _0x129de7['JIuHK']) {
                            if (_0x20ec76) {
                                console['log']('' + JSON['stringify'](_0x20ec76));
                                console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                            } else {
                                const {
                                    dwMoney,
                                    iRet,
                                    sErrMsg,
                                    strPin
                                } = JSON['parse'](_0x41d5c5);
                                $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x4aff78['DMUcQ'](sErrMsg, _0x4aff78['JmQWG']) ? '获取普通助力财富值：¥ ' + (dwMoney || 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x41d5c5 : ''));
                            }
                        } else {
                            _0x129de7['HpyzS'](_0x332d6d);
                        }
                    }
                } else {
                    _0x4aff78['WvPML'](_0x332d6d);
                }
            });
        }
    });
}

function stealMoney(_0x3182b1, _0x53b55e, _0x58f75e, _0xbd19d3) {
    var _0x2da373 = {
        'IXUVo': 'rSZUU'
    };
    return new Promise(async _0x529600 => {
        var _0x4051b2 = {
            'gYkgY': _0x2da373['IXUVo'],
            'YrBsl': function(_0x219d68) {
                return _0x219d68();
            }
        };
        $['get'](taskUrl('user/StealMoney', 'strFriendId=' + _0x3182b1 + '&dwSceneId=' + _0x53b55e + '&sceneval=2'), async (_0x4a578d, _0x17bb35, _0x5f1b1e) => {
            if (_0x4051b2['gYkgY'] === 'ocDqi') {
                $['logErr'](e, _0x17bb35);
            } else {
                try {
                    if (_0x4a578d) {
                        console['log']('' + JSON['stringify'](_0x4a578d));
                        console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                    } else {
                        const {
                            dwGetMoney,
                            iRet,
                            sErrMsg
                        } = JSON['parse'](_0x5f1b1e);
                        $['log']('\x0a🤏偷取好友【' + _0x58f75e + '】【' + _0xbd19d3 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x5f1b1e : ''));
                    }
                } catch (_0x1fa331) {
                    $['logErr'](_0x1fa331, _0x17bb35);
                } finally {
                    _0x4051b2['YrBsl'](_0x529600);
                }
            }
        });
    });
}
async function treasureHunt() {
    var _0xeca65 = {
        'fUWFx': function(_0x4c7429, _0x3e65b0) {
            return _0x4c7429 === _0x3e65b0;
        },
        'yHPbw': 'rVJpa',
        'trquk': function(_0x1a9903, _0xdd7229) {
            return _0x1a9903 < _0xdd7229;
        },
        'VloMI': function(_0xd5c3ba, _0x268d21) {
            return _0xd5c3ba / _0x268d21;
        },
        'oQyOJ': function(_0x23e6b4, _0x2c89b7) {
            return _0x23e6b4 > _0x2c89b7;
        },
        'kiSqH': 'nBcaT',
        'eFigi': 'jtaMm',
        'uxrYJ': function(_0x1b535d, _0x43539d) {
            return _0x1b535d === _0x43539d;
        },
        'zecxK': 'uIHxJ'
    };
    if ($['info']['dwXBRemainCnt'] > 0x0) {
        if (_0xeca65['fUWFx'](_0xeca65['yHPbw'], 'rVJpa')) {
            const _0x215310 = $['info']['XBDetail'];
            for (let _0xaea9b = 0x0; _0xeca65['trquk'](_0xaea9b, _0x215310['length']); _0xaea9b++) {
                const {
                    ddwColdEndTm,
                    strIndex
                } = _0x215310[_0xaea9b];
                const _0x172e6e = Math['round'](_0xeca65['VloMI'](new Date(), 0x3e8));
                if (_0xeca65['oQyOJ'](_0x172e6e, ddwColdEndTm)) {
                    if (_0xeca65['kiSqH'] !== _0xeca65['eFigi']) {
                        await doTreasureHunt(strIndex);
                        await $['wait'](0xbb8);
                    } else {
                        $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...readShareCodeRes['data'] || []])];
                    }
                } else {
                    $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                }
            }
        } else {
            $['logErr'](e, resp);
        }
    } else {
        if (_0xeca65['uxrYJ'](_0xeca65['zecxK'], _0xeca65['zecxK'])) {
            $['log']('\x0a🎁寻宝：寻宝次数不足');
        } else {
            $['logErr'](e, resp);
        }
    }
}

function doTreasureHunt(_0x5e82e3) {
    var _0x59a654 = {
        'xIDky': function(_0x181112, _0x13aae1) {
            return _0x181112(_0x13aae1);
        }
    };
    return new Promise(async _0x20239d => {
        var _0x444b48 = {
            'zPdCd': function(_0xa3f351, _0x45b3be) {
                return _0x59a654['xIDky'](_0xa3f351, _0x45b3be);
            },
            'uXclC': 'rMDPa',
            'NPsFk': function(_0x1abc0c, _0x5b0dfc) {
                return _0x1abc0c(_0x5b0dfc);
            },
            'jJAAQ': 'aYReA'
        };
        $['get'](taskUrl('consume/TreasureHunt', 'strIndex=' + _0x5e82e3 + '&dwIsShare=0'), async (_0x15f7cd, _0x58443d, _0x240889) => {
            var _0x156907 = {
                'klxET': function(_0x33fb12, _0x36235f) {
                    return _0x444b48['zPdCd'](_0x33fb12, _0x36235f);
                }
            };
            if (_0x444b48['uXclC'] === _0x444b48['uXclC']) {
                try {
                    if (_0x15f7cd) {
                        console['log']('' + JSON['stringify'](_0x15f7cd));
                        console['log']($['name'] + ' TreasureHunt API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            dwExpericnce,
                            sErrMsg
                        } = JSON['parse'](_0x240889);
                        $['log']('\x0a【' + _0x5e82e3 + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + (dwExpericnce || 0x0) + ' \x0a' + ($['showLog'] ? _0x240889 : ''));
                        _0x444b48['NPsFk'](_0x20239d, iRet);
                    }
                } catch (_0x10e480) {
                    $['logErr'](_0x10e480, _0x58443d);
                } finally {
                    if (_0x444b48['jJAAQ'] === 'aYReA') {
                        _0x20239d();
                    } else {
                        str += _sym[_0x156907['klxET'](parseInt, Math['random']() * _sym['length'])];
                    }
                }
            } else {
                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
            }
        });
    });
}

function getTaskList(_0xb3ddb6) {
    var _0x5e6db8 = {
        'DtBEY': function(_0x1d4828, _0x521b3f) {
            return _0x1d4828 === _0x521b3f;
        },
        'jSaeE': 'IkMsQ',
        'FdqOO': function(_0x27574c) {
            return _0x27574c();
        },
        'tSPBD': function(_0x585d95, _0x1c31fb) {
            return _0x585d95 !== _0x1c31fb;
        },
        'MqmbS': 'vmFGw',
        'XcJNU': function(_0x2ece2a, _0x2d7095) {
            return _0x2ece2a(_0x2d7095);
        },
        'hvDGO': 'GetUserTaskStatusList',
        'wJcIP': function(_0x5b50b4, _0x549253) {
            return _0x5b50b4(_0x549253);
        },
        'YTlfm': 'consume/AchieveInfo'
    };
    return new Promise(async _0x2c8b46 => {
        var _0x25d881 = {
            'StuHo': function(_0xd8d95d) {
                return _0xd8d95d();
            }
        };
        switch (_0xb3ddb6) {
            case 0x0:
                $['get'](_0x5e6db8['XcJNU'](taskListUrl, _0x5e6db8['hvDGO']), async (_0x2b377c, _0x287dd6, _0x246a17) => {
                    try {
                        if (_0x5e6db8['DtBEY']('IkMsQ', _0x5e6db8['jSaeE'])) {
                            if (_0x2b377c) {
                                console['log']('' + JSON['stringify'](_0x2b377c));
                                console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                            } else {
                                const {
                                    ret,
                                    data: {
                                        userTaskStatusList = []
                                    } = {},
                                    msg
                                } = JSON['parse'](_0x246a17);
                                $['allTask'] = userTaskStatusList['filter'](_0x2a5ca1 => _0x2a5ca1['awardStatus'] !== 0x1);
                                $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\x0a' + ($['showLog'] ? _0x246a17 : ''));
                            }
                        } else {
                            _0x25d881['StuHo'](_0x2c8b46);
                        }
                    } catch (_0x459ee7) {
                        $['logErr'](_0x459ee7, _0x287dd6);
                    } finally {
                        _0x5e6db8['FdqOO'](_0x2c8b46);
                    }
                });
                break;
            case 0x1:
                $['get'](_0x5e6db8['wJcIP'](taskUrl, _0x5e6db8['YTlfm']), async (_0x3fca9c, _0x107b03, _0x3803e6) => {
                    try {
                        if (_0x5e6db8['tSPBD'](_0x5e6db8['MqmbS'], 'kwVzH')) {
                            if (_0x3fca9c) {
                                console['log']('' + JSON['stringify'](_0x3fca9c));
                                console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                            } else {
                                const {
                                    iRet,
                                    sErrMsg,
                                    taskinfo = []
                                } = JSON['parse'](_0x3803e6);
                                $['allTask'] = taskinfo['filter'](_0x3c7edc => _0x3c7edc['dwAwardStatus'] === 0x1);
                                $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x3803e6 : ''));
                            }
                        } else {
                            $['logErr'](e, _0x107b03);
                        }
                    } catch (_0x31da2a) {
                        $['logErr'](_0x31da2a, _0x107b03);
                    } finally {
                        _0x5e6db8['FdqOO'](_0x2c8b46);
                    }
                });
                break;
            default:
                break;
        }
    });
}

function browserTask(_0x26d762) {
    var _0x45d907 = {
        'cRcIe': function(_0x414c03, _0x5a9608) {
            return _0x414c03 === _0x5a9608;
        },
        'MQhJx': 'lBwVn',
        'ZTgqj': function(_0x4b3125, _0xa6cd5b) {
            return _0x4b3125 < _0xa6cd5b;
        },
        'MTBHL': function(_0x184a0d, _0x383677) {
            return _0x184a0d < _0x383677;
        },
        'lCaWU': 'GigNQ',
        'OzOud': function(_0x2c096e, _0x3cf2e9) {
            return _0x2c096e === _0x3cf2e9;
        },
        'HfENa': 'DsiEf',
        'nyWSF': function(_0x2a6ae8, _0x26d7cc) {
            return _0x2a6ae8(_0x26d7cc);
        },
        'vgdcW': function(_0x2d4051, _0x2d6b08, _0x53e3ce) {
            return _0x2d4051(_0x2d6b08, _0x53e3ce);
        },
        'jubQG': 'xeZvc',
        'XoIdS': function(_0xf7ee43) {
            return _0xf7ee43();
        }
    };
    return new Promise(async _0x5384e9 => {
        var _0x614c63 = {
            'PZQCN': function(_0x36c2b6) {
                return _0x36c2b6();
            }
        };
        if (_0x45d907['cRcIe'](_0x45d907['MQhJx'], _0x45d907['MQhJx'])) {
            switch (_0x26d762) {
                case 0x0:
                    const _0x255dcc = Math['max'](...[...$['allTask']]['map'](_0x3787f7 => _0x3787f7['configTargetTimes']));
                    for (let _0x53192c = 0x0; _0x45d907['ZTgqj'](_0x53192c, $['allTask']['length']); _0x53192c++) {
                        const _0x38b2b6 = $['allTask'][_0x53192c];
                        $['log']('\x0a开始第' + (_0x53192c + 0x1) + '个【📆日常任务】：' + _0x38b2b6['taskName']);
                        const _0x566f9a = [!![], !![]];
                        for (let _0x53192c = 0x0; _0x45d907['MTBHL'](_0x53192c, _0x255dcc); _0x53192c++) {
                            if (_0x45d907['cRcIe']('GigNQ', _0x45d907['lCaWU'])) {
                                await $['wait'](0xbb8);
                                if (_0x566f9a[0x0]) {
                                    if (_0x45d907['OzOud'](_0x45d907['HfENa'], _0x45d907['HfENa'])) {
                                        _0x566f9a[0x0] = await _0x45d907['nyWSF'](doTask, _0x38b2b6);
                                    } else {
                                        _0x614c63['PZQCN'](_0x5384e9);
                                    }
                                }
                                await $['wait'](0xbb8);
                                if (_0x566f9a[0x1]) {
                                    _0x566f9a[0x1] = await _0x45d907['vgdcW'](awardTask, 0x0, _0x38b2b6);
                                }
                                if (!_0x566f9a[0x0] && !_0x566f9a[0x1]) {
                                    break;
                                }
                            } else {
                                console['log']('' + JSON['stringify'](err));
                                console['log']($['name'] + ' FunCenterState API请求失败，请检查网路重试');
                            }
                        }
                        $['log']('\n结束第' + (_0x53192c + 0x1) + '个【📆日常任务】：' + _0x38b2b6['taskName'] + '\x0a');
                    }
                    break;
                case 0x1:
                    for (let _0x5cf302 = 0x0; _0x45d907['MTBHL'](_0x5cf302, $['allTask']['length']); _0x5cf302++) {
                        if (_0x45d907['jubQG'] !== 'xeZvc') {
                            console['log']('普通助力(招工)结果:' + data);
                            const {
                                iRet
                            } = JSON['parse'](data);
                            if (_0x45d907['cRcIe'](iRet, 0x7d5) || _0x45d907['cRcIe'](iRet, 0x270f)) $['canHelp'] = ![];
                        } else {
                            const _0x38b2b6 = $['allTask'][_0x5cf302];
                            $['log']('\n开始第' + (_0x5cf302 + 0x1) + '个【🎖成就任务】：' + _0x38b2b6['strTaskDescr']);
                            if (_0x38b2b6['dwAwardStatus'] === '0') {
                                $['log']('\x0a' + _0x38b2b6['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                            } else {
                                await $['wait'](0xbb8);
                                await _0x45d907['vgdcW'](awardTask, 0x1, _0x38b2b6);
                            }
                            $['log']('\n结束第' + (_0x5cf302 + 0x1) + '个【🎖成就任务】：' + _0x38b2b6['strTaskDescr'] + '\x0a');
                        }
                    }
                    break;
                default:
                    break;
            }
            _0x45d907['XoIdS'](_0x5384e9);
        } else {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
        }
    });
}

function doTask(_0x2fdc65) {
    var _0x4209a7 = {
        'GXpEV': function(_0x3da3d4, _0x2da433) {
            return _0x3da3d4 === _0x2da433;
        },
        'WRFWw': 'KTgUn',
        'vdcqT': 'zIhBb',
        'JTHss': '活动太火爆了',
        'LahZm': '任务进行中或者未到任务时间',
        'iypYe': function(_0x3e7c2e, _0x59f0ad) {
            return _0x3e7c2e === _0x59f0ad;
        },
        'tUGuK': 'RAUpR',
        'wMpKG': 'YYsYt',
        'NPxSm': 'GDSpJ',
        'DCeGX': function(_0x1f9ae8, _0x35602d) {
            return _0x1f9ae8 >= _0x35602d;
        },
        'NAknU': function(_0x33e1cf, _0x591298) {
            return _0x33e1cf(_0x591298);
        },
        'Krtdw': function(_0xa8c56a, _0x2f352e) {
            return _0xa8c56a(_0x2f352e);
        },
        'kIfeg': function(_0x458247, _0x30c174, _0x34003a) {
            return _0x458247(_0x30c174, _0x34003a);
        }
    };
    return new Promise(async _0x1a485c => {
        var _0x9442d5 = {
            'DcwEL': function(_0x4874c3, _0x151793) {
                return _0x4874c3(_0x151793);
            },
            'UVzkw': function(_0x22cc53, _0x317126) {
                return _0x22cc53 * _0x317126;
            }
        };
        const {
            taskId,
            completedTimes,
            configTargetTimes,
            taskName
        } = _0x2fdc65;
        if (_0x4209a7['DCeGX'](_0x4209a7['NAknU'](parseInt, completedTimes), parseInt(configTargetTimes))) {
            _0x4209a7['Krtdw'](_0x1a485c, ![]);
            $['log']('\x0a' + taskName + '【做日常任务】： mission success');
            return;
        }
        $['get'](_0x4209a7['kIfeg'](taskListUrl, 'DoTask', 'taskId=' + taskId), (_0x2055ef, _0x5a85d1, _0x528a78) => {
            if ('RQgst' === 'RQgst') {
                try {
                    if (_0x2055ef) {
                        console['log']('' + JSON['stringify'](_0x2055ef));
                        console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                    } else {
                        if (_0x4209a7['GXpEV'](_0x4209a7['WRFWw'], _0x4209a7['vdcqT'])) {
                            const _0x47566c = _0x9442d5['DcwEL'](require, 'tunnel');
                            const _0xd7a41e = {
                                'https': _0x47566c['httpsOverHttp']({
                                    'proxy': {
                                        'host': process['env']['TG_PROXY_HOST'],
                                        'port': _0x9442d5['UVzkw'](process['env']['TG_PROXY_PORT'], 0x1)
                                    }
                                })
                            };
                            Object['assign'](options, {
                                'agent': _0xd7a41e
                            });
                        } else {
                            const {
                                msg,
                                ret
                            } = JSON['parse'](_0x528a78);
                            $['log']('\x0a' + taskName + '【做日常任务】：' + (msg['indexOf'](_0x4209a7['JTHss']) !== -0x1 ? _0x4209a7['LahZm'] : msg) + '\x0a' + ($['showLog'] ? _0x528a78 : ''));
                            _0x1a485c(_0x4209a7['iypYe'](ret, 0x0));
                        }
                    }
                } catch (_0x29b92f) {
                    if (_0x4209a7['tUGuK'] === _0x4209a7['wMpKG']) {
                        console['log']('' + JSON['stringify'](_0x2055ef));
                        console['log']($['name'] + ' Award API请求失败，请检查网路重试');
                    } else {
                        $['logErr'](_0x29b92f, _0x5a85d1);
                    }
                } finally {
                    if (_0x4209a7['NPxSm'] !== _0x4209a7['NPxSm']) {
                        console['log']('' + JSON['stringify'](_0x2055ef));
                        console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
                    } else {
                        _0x1a485c();
                    }
                }
            } else {
                $['log']('\n📌签到：你今日已签到过啦，请明天再来');
            }
        });
    });
}

function awardTask(_0x141bbc, _0x5e56f1) {
    var _0x2e3944 = {
        'ARIdU': 'HkayX',
        'UykCJ': 'EFVRv',
        'Khlgf': function(_0x5bb650) {
            return _0x5bb650();
        },
        'iEbKa': function(_0x5cc492, _0x3798c8) {
            return _0x5cc492 === _0x3798c8;
        },
        'VxDxP': 'sMcZU',
        'QcPFM': 'ymKnD',
        'MKaPK': function(_0x450198, _0x58b1e0, _0x280929) {
            return _0x450198(_0x58b1e0, _0x280929);
        }
    };
    return new Promise(_0x148bbc => {
        var _0x12bc3a = {
            'zqfPt': _0x2e3944['ARIdU'],
            'DmnbS': _0x2e3944['UykCJ'],
            'DjnwA': '任务为成就任务或者未到任务时间',
            'rklNQ': function(_0x1b1378, _0xca3ec8) {
                return _0x1b1378 === _0xca3ec8;
            },
            'OoCnR': function(_0x13721f) {
                return _0x2e3944['Khlgf'](_0x13721f);
            },
            'TnPiF': function(_0x180f9f, _0x146fca) {
                return _0x2e3944['iEbKa'](_0x180f9f, _0x146fca);
            },
            'LClzr': _0x2e3944['VxDxP'],
            'NlVuh': _0x2e3944['QcPFM'],
            'jbesd': function(_0x50b8da, _0x43608c) {
                return _0x50b8da !== _0x43608c;
            }
        };
        switch (_0x141bbc) {
            case 0x0:
                const {
                    taskId, taskName
                } = _0x5e56f1;
                $['get'](taskListUrl('Award', 'taskId=' + taskId), (_0x41173b, _0x4f2809, _0x2274b3) => {
                    try {
                        if (_0x41173b) {
                            console['log']('' + JSON['stringify'](_0x41173b));
                            console['log']($['name'] + ' Award API请求失败，请检查网路重试');
                        } else {
                            const {
                                msg,
                                ret,
                                data: {
                                    prizeInfo = ''
                                } = {}
                            } = JSON['parse'](_0x2274b3);
                            let _0x2651c8 = '';
                            if (msg['indexOf']('活动太火爆了') !== -0x1) {
                                if (_0x12bc3a['zqfPt'] === _0x12bc3a['DmnbS']) {
                                    console['log']('' + JSON['stringify'](_0x41173b));
                                    console['log']($['name'] + ' employeeAward API请求失败，请检查网路重试');
                                } else {
                                    _0x2651c8 = _0x12bc3a['DjnwA'];
                                }
                            } else {
                                _0x2651c8 = msg + prizeInfo ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                            }
                            $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x2651c8 + '\x0a' + ($['showLog'] ? _0x2274b3 : ''));
                            _0x148bbc(_0x12bc3a['rklNQ'](ret, 0x0));
                        }
                    } catch (_0x308879) {
                        $['logErr'](_0x308879, _0x4f2809);
                    } finally {
                        _0x12bc3a['OoCnR'](_0x148bbc);
                    }
                });
                break;
            case 0x1:
                const {
                    strTaskIndex, strTaskDescr
                } = _0x5e56f1;
                $['get'](_0x2e3944['MKaPK'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x4c9439, _0x11fbaf, _0x5633f2) => {
                    if (_0x12bc3a['TnPiF'](_0x12bc3a['LClzr'], _0x12bc3a['NlVuh'])) {
                        $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                        _0x12bc3a['OoCnR'](_0x148bbc);
                    } else {
                        try {
                            if (_0x4c9439) {
                                console['log']('' + JSON['stringify'](_0x4c9439));
                                console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                            } else {
                                if (_0x12bc3a['jbesd']('kqYTu', 'JkCcz')) {
                                    const {
                                        iRet,
                                        sErrMsg,
                                        dwExpericnce
                                    } = JSON['parse'](_0x5633f2);
                                    $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x5633f2 : ''));
                                } else {
                                    _0x12bc3a['OoCnR'](_0x148bbc);
                                }
                            }
                        } catch (_0x19f5f1) {
                            $['logErr'](_0x19f5f1, _0x11fbaf);
                        } finally {
                            _0x148bbc();
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
}

function funCenterState() {
    var _0x38c911 = {
        'JgiTG': '未中奖',
        'blqVP': function(_0x286247, _0x4d8f55) {
            return _0x286247 !== _0x4d8f55;
        },
        'CCxcq': 'spkqG',
        'RFqLF': function(_0x199320, _0x4aeebb) {
            return _0x199320 !== _0x4aeebb;
        },
        'YxflB': 'IRIRK',
        'QZPZc': function(_0x15575f, _0x1f08e2) {
            return _0x15575f === _0x1f08e2;
        },
        'qAeRI': 'MOuiM',
        'CROfn': function(_0x248010, _0x6fac2a, _0x55d82d, _0xd99fe3) {
            return _0x248010(_0x6fac2a, _0x55d82d, _0xd99fe3);
        },
        'Ubguo': function(_0x261b51, _0x45bbd7) {
            return _0x261b51 !== _0x45bbd7;
        },
        'QgDbJ': 'hizmo',
        'IknzQ': function(_0x2b1866) {
            return _0x2b1866();
        },
        'nriDS': function(_0x44e7b5, _0x2b7bab) {
            return _0x44e7b5(_0x2b7bab);
        },
        'BnlBs': 'TGWaX',
        'bQkzk': 'Tqpjo',
        'LdSzq': function(_0x4a78e3, _0x154b40, _0x322c8f) {
            return _0x4a78e3(_0x154b40, _0x322c8f);
        }
    };
    return new Promise(_0x3fd98b => {
        var _0x3bef7f = {
            'NWtKw': function(_0x47f6ba, _0x3095ad) {
                return _0x38c911['nriDS'](_0x47f6ba, _0x3095ad);
            },
            'fwTjD': function(_0x185106, _0x26da39) {
                return _0x38c911['nriDS'](_0x185106, _0x26da39);
            }
        };
        if (_0x38c911['QZPZc'](_0x38c911['BnlBs'], _0x38c911['bQkzk'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
        } else {
            $['get'](_0x38c911['LdSzq'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0xcca918, _0x19e301, _0xa59838) => {
                var _0x234a63 = {
                    'ccsAL': _0x38c911['JgiTG']
                };
                try {
                    if (_0x38c911['blqVP']('spkqG', _0x38c911['CCxcq'])) {
                        if (_0xcca918) {
                            console['log']('' + JSON['stringify'](_0xcca918));
                            console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                        } else {
                            const {
                                dwGetMoney,
                                iRet,
                                sErrMsg
                            } = JSON['parse'](_0xa59838);
                            $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0xa59838 : ''));
                        }
                    } else {
                        if (_0xcca918) {
                            if (_0x38c911['RFqLF']('IRIRK', _0x38c911['YxflB'])) {
                                shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                            } else {
                                console['log']('' + JSON['stringify'](_0xcca918));
                                console['log']($['name'] + ' FunCenterState API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x38c911['QZPZc'](_0x38c911['qAeRI'], _0x38c911['qAeRI'])) {
                                const {
                                    SlotMachine: {
                                        ddwConfVersion,
                                        dwFreeCount,
                                        strCouponPool,
                                        strGoodsPool
                                    } = {},
                                    iRet,
                                    sErrMsg
                                } = JSON['parse'](_0xa59838);
                                if (dwFreeCount == 0x1) {
                                    await $['wait'](0xbb8);
                                    await _0x38c911['CROfn'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                                }
                            } else {
                                let _0x31cacc = _0x3bef7f['NWtKw'](uuid, 0x28);
                                let _0x3592f8 = (+new Date())['toString']();
                                if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
                                    console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\x0a');
                                    _0x3fd98b(null);
                                }
                                let _0x35da42 = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
                                let _0x5c2610 = $['md5']('' + _0x3bef7f['NWtKw'](decodeURIComponent, _0x35da42) + _0x3592f8 + _0x31cacc + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
                                _0x3bef7f['fwTjD'](_0x3fd98b, {
                                    'timestamp': _0x3592f8,
                                    'phoneid': _0x31cacc,
                                    'farm_jstoken': _0x5c2610
                                });
                            }
                        }
                    }
                } catch (_0x304417) {
                    if (_0x38c911['Ubguo'](_0x38c911['QgDbJ'], 'VrtgH')) {
                        $['logErr'](_0x304417, _0x19e301);
                    } else {
                        if (_0xcca918) {
                            console['log']('' + JSON['stringify'](_0xcca918));
                            console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                        } else {
                            const {
                                iRet,
                                sErrMsg,
                                strAwardPoolName
                            } = JSON['parse'](_0xa59838);
                            $['log']('\n【抽奖结果】🎰 ' + (strAwardPoolName != '' ? _0x234a63['ccsAL'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0xa59838 : ''));
                        }
                    }
                } finally {
                    _0x38c911['IknzQ'](_0x3fd98b);
                }
            });
        }
    });
}

function soltMachine(_0x46d85b, _0x2cc304, _0x162e7b) {
    var _0x438a1a = {
        'TSxxr': function(_0x2ae07e, _0xcbbe8b) {
            return _0x2ae07e !== _0xcbbe8b;
        },
        'tcEnA': 'nDRRy',
        'ZWqlB': function(_0x5bbefb, _0x1f4c6b) {
            return _0x5bbefb != _0x1f4c6b;
        },
        'xZCVF': function(_0x13ab91, _0x5ad4b2) {
            return _0x13ab91 === _0x5ad4b2;
        },
        'tKILI': 'aDWDS',
        'rayUh': 'FOUfM',
        'CxgRB': function(_0x3ac58e) {
            return _0x3ac58e();
        },
        'YnLrD': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'WyPzM': function(_0x1df6cb, _0x1974f3) {
            return _0x1df6cb * _0x1974f3;
        },
        'uEyIZ': function(_0x3fcb02, _0x567191) {
            return _0x3fcb02 !== _0x567191;
        },
        'mukNe': 'kbBiK',
        'CGkCD': 'AOpGA'
    };
    return new Promise(_0x2407ee => {
        var _0xe01401 = {
            'qQZRH': _0x438a1a['YnLrD'],
            'SqSaO': function(_0x151613, _0x568069) {
                return _0x151613 < _0x568069;
            },
            'PXCEa': function(_0x5cb057, _0x414d25) {
                return _0x5cb057(_0x414d25);
            },
            'ZtQvW': function(_0x522b0c, _0x506c20) {
                return _0x438a1a['WyPzM'](_0x522b0c, _0x506c20);
            }
        };
        if (_0x438a1a['uEyIZ'](_0x438a1a['mukNe'], _0x438a1a['CGkCD'])) {
            $['get'](taskUrl('consume/SlotMachine', 'strCouponPool=' + _0x46d85b + '&strGoodsPool=' + _0x2cc304 + '&ddwConfVersion=' + _0x162e7b), async (_0x23b1a5, _0x1b15d8, _0x28e30b) => {
                try {
                    if (_0x438a1a['TSxxr'](_0x438a1a['tcEnA'], 'nDRRy')) {
                        _0x2407ee();
                    } else {
                        if (_0x23b1a5) {
                            console['log']('' + JSON['stringify'](_0x23b1a5));
                            console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                        } else {
                            const {
                                iRet,
                                sErrMsg,
                                strAwardPoolName
                            } = JSON['parse'](_0x28e30b);
                            $['log']('\n【抽奖结果】🎰 ' + (_0x438a1a['ZWqlB'](strAwardPoolName, '') ? '未中奖' : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x28e30b : ''));
                        }
                    }
                } catch (_0xf1c322) {
                    if (_0x438a1a['xZCVF'](_0x438a1a['tKILI'], _0x438a1a['rayUh'])) {
                        $['logErr'](_0xf1c322, _0x1b15d8);
                    } else {
                        $['logErr'](_0xf1c322, _0x1b15d8);
                    }
                } finally {
                    if ('zCXPx' !== 'zCXPx') {
                        if (_0x28e30b) {
                            console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                            _0x28e30b = JSON['parse'](_0x28e30b);
                        }
                    } else {
                        _0x438a1a['CxgRB'](_0x2407ee);
                    }
                }
            });
        } else {
            let _0x293f18 = _0xe01401['qQZRH'];
            let _0x117281 = '';
            for (let _0x334767 = 0x0; _0xe01401['SqSaO'](_0x334767, count); _0x334767++) {
                _0x117281 += _0x293f18[_0xe01401['PXCEa'](parseInt, _0xe01401['ZtQvW'](Math['random'](), _0x293f18['length']))];
            }
            return _0x117281;
        }
    });
}

function createAssistUser(_0x138da7) {
    var _0x131b57 = {
        'rDyul': 'sFksf',
        'FyUXk': function(_0x5124f8, _0x21902d) {
            return _0x5124f8 === _0x21902d;
        },
        'fIxRz': function(_0x577670) {
            return _0x577670();
        },
        'IlLAz': function(_0x18a863, _0xce850c, _0xd9a0c9) {
            return _0x18a863(_0xce850c, _0xd9a0c9);
        },
        'bDnoQ': 'user/JoinScene',
        'uAtsA': function(_0x588226, _0x42f7c6) {
            return _0x588226(_0x42f7c6);
        }
    };
    return new Promise(_0x414847 => {
        var _0x232c31 = {
            'itWdj': function(_0x21d113, _0x166d92) {
                return _0x21d113(_0x166d92);
            },
            'QOmxb': 'QYnQT',
            'gEXhB': _0x131b57['rDyul'],
            'eUxoy': function(_0x3afae8, _0x189930) {
                return _0x131b57['FyUXk'](_0x3afae8, _0x189930);
            },
            'PqesY': function(_0x3762a4, _0x4bf5d6) {
                return _0x3762a4 === _0x4bf5d6;
            },
            'DnCUJ': function(_0x412a24) {
                return _0x131b57['fIxRz'](_0x412a24);
            }
        };
        if ('yQILT' !== 'yQILT') {
            $['log']('\x0a🎁寻宝：宝藏冷却中，请等待冷却完毕');
        } else {
            $['get'](_0x131b57['IlLAz'](taskUrl, _0x131b57['bDnoQ'], 'strShareId=' + _0x131b57['uAtsA'](escape, _0x138da7) + '&dwSceneId=1001'), async (_0x2cd82e, _0x2ecee9, _0x16d686) => {
                var _0x489d8e = {
                    'AoSIx': function(_0xf4be21, _0x5dbc73) {
                        return _0x232c31['itWdj'](_0xf4be21, _0x5dbc73);
                    }
                };
                if (_0x232c31['QOmxb'] === _0x232c31['gEXhB']) {
                    if (_0x2cd82e) {
                        console['log']('' + JSON['stringify'](_0x2cd82e));
                        console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                    } else {
                        const {
                            sErrMsg
                        } = JSON['parse'](_0x16d686);
                        $['log']('\x0a【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x16d686 : ''));
                        _0x489d8e['AoSIx'](_0x414847, 0x0);
                    }
                } else {
                    try {
                        if (_0x2cd82e) {
                            console['log']('' + JSON['stringify'](_0x2cd82e));
                            console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
                        } else {
                            console['log']('普通助力(招工)结果:' + _0x16d686);
                            const {
                                iRet
                            } = JSON['parse'](_0x16d686);
                            if (_0x232c31['eUxoy'](iRet, 0x7d5) || _0x232c31['PqesY'](iRet, 0x270f)) $['canHelp'] = ![];
                        }
                    } catch (_0x1b3f2e) {} finally {
                        _0x232c31['DnCUJ'](_0x414847);
                    }
                }
            });
        }
    });
}

function createSuperAssistUser(_0x474047) {
    var _0x5d6bd0 = {
        'oNAOT': function(_0x4f1c7c) {
            return _0x4f1c7c();
        },
        'sUEnu': function(_0x573748, _0x3436c4) {
            return _0x573748 !== _0x3436c4;
        },
        'lcwyA': 'Ibhkw',
        'YTAIc': function(_0x1740a2, _0x4c5272) {
            return _0x1740a2 !== _0x4c5272;
        },
        'VATWl': 'mFtRV',
        'ifixd': 'user/JoinScene',
        'dgsBW': 'timestamp',
        'OwWQJ': 'farm_jstoken'
    };
    return new Promise(_0xe814b6 => {
        var _0x18c889 = {
            'qJLuj': function(_0x29f026) {
                return _0x5d6bd0['oNAOT'](_0x29f026);
            },
            'BoIux': function(_0x24c6f6, _0x5cee28) {
                return _0x5d6bd0['sUEnu'](_0x24c6f6, _0x5cee28);
            },
            'Hebxe': 'ouegM',
            'nzpuy': _0x5d6bd0['lcwyA'],
            'PJaMV': function(_0xa15086, _0x5c02bb) {
                return _0xa15086 === _0x5c02bb;
            }
        };
        if (_0x5d6bd0['YTAIc']('Rjfpg', _0x5d6bd0['VATWl'])) {
            $['get'](taskUrl(_0x5d6bd0['ifixd'], 'strPgtimestamp=' + token[_0x5d6bd0['dgsBW']] + '&strPhoneID=' + token['phoneid'] + '&strPgUUNum=' + token[_0x5d6bd0['OwWQJ']] + '&strShareId=' + escape(_0x474047) + '&dwSceneId=1001&dwType=2'), async (_0x2c1043, _0x4b6606, _0x4e9ee6) => {
                var _0x325078 = {
                    'JrlpC': function(_0xc02ea6) {
                        return _0x18c889['qJLuj'](_0xc02ea6);
                    }
                };
                try {
                    if (_0x18c889['BoIux'](_0x18c889['Hebxe'], _0x18c889['nzpuy'])) {
                        if (_0x2c1043) {
                            console['log']('' + JSON['stringify'](_0x2c1043));
                            console['log']($['name'] + ' createSuperAssistUser JoinScene API请求失败，请检查网路重试');
                        } else {
                            console['log']('超级助力(超级工人)结果:' + _0x4e9ee6);
                            const {
                                sErrMsg,
                                iRet
                            } = JSON['parse'](_0x4e9ee6);
                            if (_0x18c889['PJaMV'](iRet, 0x7d5) || _0x18c889['PJaMV'](iRet, 0x270f)) $['canHelp'] = ![];
                        }
                    } else {
                        $['logErr'](e, _0x4b6606);
                    }
                } catch (_0x2b3175) {
                    if (_0x18c889['BoIux']('lSBLA', 'lSBLA')) {
                        _0x325078['JrlpC'](_0xe814b6);
                    } else {
                        $['logErr'](_0x2b3175, _0x4b6606);
                    }
                } finally {
                    _0xe814b6();
                }
            });
        } else {
            _0xe814b6();
        }
    });
}

function joinGroup(_0x2f5ee5) {
    var _0x6ac43b = {
        'dtqCq': function(_0x414758, _0x4330a6) {
            return _0x414758 === _0x4330a6;
        },
        'FXvlp': 'HkgHj',
        'VxpAr': function(_0x4aaa2f, _0x417a93) {
            return _0x4aaa2f === _0x417a93;
        },
        'bitHA': 'OSQGx',
        'GwWMw': 'PLhHc',
        'ImQYX': function(_0x790360, _0x231624, _0x4b37a7) {
            return _0x790360(_0x231624, _0x4b37a7);
        },
        'jKjuI': 'timestamp',
        'XCcvw': 'phoneid',
        'rbKrD': 'farm_jstoken'
    };
    return new Promise(async _0x5c1c56 => {
        var _0x164a3b = {
            'QknWK': function(_0x520c03, _0x49dcfc) {
                return _0x6ac43b['dtqCq'](_0x520c03, _0x49dcfc);
            },
            'qeshN': _0x6ac43b['FXvlp'],
            'DOSxg': function(_0x72bce3, _0x521ba4) {
                return _0x6ac43b['VxpAr'](_0x72bce3, _0x521ba4);
            },
            'XAKsi': _0x6ac43b['bitHA'],
            'BqBOw': _0x6ac43b['GwWMw'],
            'ZRbMc': function(_0x590692, _0x9e886b) {
                return _0x590692 || _0x9e886b;
            }
        };
        $['get'](_0x6ac43b['ImQYX'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x2f5ee5 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x6ac43b['jKjuI']] + '&phoneID=' + token[_0x6ac43b['XCcvw']] + '&pgUUNum=' + token[_0x6ac43b['rbKrD']]), (_0x352c42, _0x1447a3, _0x4a8169) => {
            try {
                if (_0x352c42) {
                    if (_0x164a3b['QknWK']('HkgHj', _0x164a3b['qeshN'])) {
                        console['log']('' + JSON['stringify'](_0x352c42));
                        console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
                    } else {
                        _0x5c1c56();
                    }
                } else {
                    const {
                        sErrMsg,
                        iRet
                    } = _0x4a8169 = JSON['parse'](_0x4a8169);
                    if (_0x164a3b['QknWK'](iRet, 0x7d5) || _0x164a3b['QknWK'](iRet, 0x270f)) $['canHelp'] = ![];
                    $['log']('iRet:' + iRet + ' ' + sErrMsg);
                }
            } catch (_0xb99de3) {
                if (_0x164a3b['DOSxg'](_0x164a3b['XAKsi'], _0x164a3b['BqBOw'])) {
                    console['log']('' + JSON['stringify'](_0x352c42));
                    console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                } else {
                    $['logErr'](_0xb99de3, _0x1447a3);
                }
            } finally {
                _0x5c1c56(_0x164a3b['ZRbMc'](_0x4a8169, {}));
            }
        });
    });
}

function submitGroupId() {
    var _0xa53720 = {
        'bRcqm': function(_0x5c7371, _0x482c61) {
            return _0x5c7371(_0x482c61);
        },
        'LlAyE': 'CookiesJD',
        'dHvpw': function(_0x1102ce, _0xa7839d) {
            return _0x1102ce !== _0xa7839d;
        },
        'AXzCG': 'fZgxa',
        'nTkUa': 'XObFC',
        'CfBtO': function(_0x2c44e3) {
            return _0x2c44e3();
        },
        'CIVLP': function(_0x31ada9, _0x344fbd) {
            return _0x31ada9 === _0x344fbd;
        },
        'gGlEJ': function(_0x3d3dd3, _0x263f85) {
            return _0x3d3dd3 !== _0x263f85;
        },
        'FMAeh': 'zAnlC',
        'slSpI': function(_0x3c6d78) {
            return _0x3c6d78();
        },
        'LlUCq': 'aDAhO',
        'syxiP': function(_0x142105, _0x53b671) {
            return _0x142105 + _0x53b671;
        },
        'bxpWt': '\x0a\x0a你的【🏝寻宝大作战】互助码: ',
        'jfjNP': '(每天都变化,旧的不可用)\n\n'
    };
    return new Promise(_0x572a8f => {
        var _0x7eb549 = {
            'MgvfL': function(_0x14b155) {
                return _0xa53720['slSpI'](_0x14b155);
            }
        };
        $['get'](taskUrl('user/GatherForture'), async (_0x3596aa, _0x481a9b, _0x4626b3) => {
            var _0xf41433 = {
                'FBoeV': function(_0x593c42, _0x349a5c) {
                    return _0xa53720['bRcqm'](_0x593c42, _0x349a5c);
                },
                'xWasf': _0xa53720['LlAyE']
            };
            try {
                if (_0x3596aa) {
                    console['log']('' + JSON['stringify'](_0x3596aa));
                    console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                } else {
                    if (_0xa53720['dHvpw'](_0xa53720['AXzCG'], _0xa53720['AXzCG'])) {
                        console['log']('' + JSON['stringify'](_0x3596aa));
                        console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                    } else {
                        const {
                            GroupInfo: {
                                strGroupId
                            },
                            strPin
                        } = JSON['parse'](_0x4626b3);
                        if (!strGroupId) {
                            if ('XObFC' === _0xa53720['nTkUa']) {
                                const _0x565399 = await _0xa53720['CfBtO'](openGroup);
                                if (_0xa53720['CIVLP'](_0x565399, 0x0)) {
                                    if (_0xa53720['gGlEJ'](_0xa53720['FMAeh'], 'dRAXn')) {
                                        await _0xa53720['CfBtO'](submitGroupId);
                                    } else {
                                        cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ..._0xf41433['FBoeV'](jsonParse, $['getdata'](_0xf41433['xWasf']) || '[]')['map'](_0x34b6a1 => _0x34b6a1['cookie'])]['filter'](_0x486f53 => !!_0x486f53);
                                    }
                                } else {
                                    _0xa53720['slSpI'](_0x572a8f);
                                }
                            } else {
                                $['logErr'](e, _0x481a9b);
                            }
                        } else {
                            if (_0xa53720['CIVLP']('aDAhO', _0xa53720['LlUCq'])) {
                                $['log'](_0xa53720['syxiP'](_0xa53720['bxpWt'] + strGroupId, _0xa53720['jfjNP']));
                                $['shareCodes']['push'](strGroupId);
                            } else {
                                _0x7eb549['MgvfL'](_0x572a8f);
                            }
                        }
                    }
                }
            } catch (_0x4de66e) {
                $['logErr'](_0x4de66e, _0x481a9b);
            } finally {
                _0x572a8f();
            }
        });
    });
}

function openGroup() {
    var _0x5f4bd7 = {
        'qumMY': function(_0x23d765, _0x42d122) {
            return _0x23d765 === _0x42d122;
        },
        'xhzUV': 'jrKFq',
        'JCeqy': 'nyDJQ',
        'PISbc': function(_0x3a8c9d, _0x5f14bf) {
            return _0x3a8c9d(_0x5f14bf);
        },
        'QrdQd': function(_0x147657) {
            return _0x147657();
        },
        'LfdkN': 'keep-alive',
        'WuBRV': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55'
    };
    return new Promise(async _0x177e57 => {
        var _0x27426d = {
            'hNsmi': _0x5f4bd7['LfdkN'],
            'wTWjP': _0x5f4bd7['WuBRV'],
            'eTmUX': 'zh-cn'
        };
        $['get'](taskUrl('user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x44d7b1, _0x23a196, _0x45a631) => {
            if (_0x5f4bd7['qumMY'](_0x5f4bd7['xhzUV'], 'jrKFq')) {
                try {
                    if (_0x44d7b1) {
                        console['log']('' + JSON['stringify'](_0x44d7b1));
                        console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                    } else {
                        if ('nyDJQ' !== _0x5f4bd7['JCeqy']) {
                            return {
                                'url': JD_API_HOST + 'jxcfd/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                                'headers': {
                                    'Cookie': cookie,
                                    'Accept': '*/*',
                                    'Connection': _0x27426d['hNsmi'],
                                    'Referer': _0x27426d['wTWjP'],
                                    'Accept-Encoding': 'gzip, deflate, br',
                                    'Host': 'm.jingxi.com',
                                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + (Math['random'] * 0x62 + 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                    'Accept-Language': _0x27426d['eTmUX']
                                },
                                'timeout': 0x2710
                            };
                        } else {
                            const {
                                sErrMsg
                            } = JSON['parse'](_0x45a631);
                            $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x45a631 : ''));
                            _0x5f4bd7['PISbc'](_0x177e57, 0x0);
                        }
                    }
                } catch (_0x595101) {
                    $['logErr'](_0x595101, _0x23a196);
                } finally {
                    _0x5f4bd7['QrdQd'](_0x177e57);
                }
            } else {
                if (_0x44d7b1) {
                    console['log']('' + JSON['stringify'](_0x44d7b1));
                    console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                } else {
                    const {
                        ret,
                        data: {
                            userTaskStatusList = []
                        } = {},
                        msg
                    } = JSON['parse'](_0x45a631);
                    $['allTask'] = userTaskStatusList['filter'](_0x370035 => _0x370035['awardStatus'] !== 0x1);
                    $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x45a631 : ''));
                }
            }
        });
    });
}

function openPeriodBox() {
    var _0x6996d4 = {
        'AMuKp': 'OdVxh',
        'EhcIc': function(_0x39c7f0, _0x558c90) {
            return _0x39c7f0 == _0x558c90;
        },
        'WeyNQ': function(_0x25b71d) {
            return _0x25b71d();
        },
        'kEllH': function(_0x4a4a11, _0xc67666) {
            return _0x4a4a11 < _0xc67666;
        },
        'wdPVz': function(_0x52c9a0, _0x16b6ec) {
            return _0x52c9a0 === _0x16b6ec;
        },
        'TlRmm': 'swYxO',
        'EsFmV': function(_0x5069be, _0x3ba97c) {
            return _0x5069be !== _0x3ba97c;
        },
        'VklEu': 'psKUH',
        'DfAJX': function(_0xb88fcb, _0x28ea58) {
            return _0xb88fcb === _0x28ea58;
        },
        'KKeSV': 'YxCUP',
        'oweHz': function(_0x62409, _0x1c75cb) {
            return _0x62409(_0x1c75cb);
        }
    };
    return new Promise(async _0x4c4c6f => {
        var _0x451476 = {
            'rcqHT': _0x6996d4['AMuKp'],
            'RNEub': 'nztNm',
            'IKxPI': function(_0x3c58cb, _0x271ef4) {
                return _0x6996d4['EhcIc'](_0x3c58cb, _0x271ef4);
            },
            'BxJjE': function(_0x526e58) {
                return _0x6996d4['WeyNQ'](_0x526e58);
            },
            'ydNdF': function(_0x4b65d6, _0x51aaa4) {
                return _0x6996d4['kEllH'](_0x4b65d6, _0x51aaa4);
            },
            'viOwg': function(_0x4ed849, _0x57e00d) {
                return _0x4ed849 == _0x57e00d;
            },
            'hzeiw': function(_0x2b93d5, _0x3fd0e8) {
                return _0x6996d4['wdPVz'](_0x2b93d5, _0x3fd0e8);
            },
            'wnQSK': _0x6996d4['TlRmm'],
            'SssVa': function(_0x33a3ae) {
                return _0x6996d4['WeyNQ'](_0x33a3ae);
            },
            'FcHrf': function(_0x457228, _0x358477) {
                return _0x6996d4['EsFmV'](_0x457228, _0x358477);
            },
            'eVpBR': _0x6996d4['VklEu']
        };
        if (_0x6996d4['DfAJX']('YxCUP', _0x6996d4['KKeSV'])) {
            $['get'](_0x6996d4['oweHz'](taskUrl, 'user/GatherForture'), async (_0x4ea1e5, _0x239db9, _0x965668) => {
                var _0xe37aff = {
                    'PATzI': _0x451476['rcqHT'],
                    'uscMK': _0x451476['RNEub'],
                    'eOyAs': function(_0x192d15, _0x4e5867) {
                        return _0x451476['IKxPI'](_0x192d15, _0x4e5867);
                    },
                    'zpnke': function(_0x126be2, _0x361cc5) {
                        return _0x126be2 === _0x361cc5;
                    },
                    'vMjen': 'ceiKv',
                    'vgpDt': function(_0x12c7c0) {
                        return _0x451476['BxJjE'](_0x12c7c0);
                    },
                    'GMOnd': function(_0x451058) {
                        return _0x451058();
                    }
                };
                try {
                    if (_0x4ea1e5) {
                        console['log']('' + JSON['stringify'](_0x4ea1e5));
                        console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                    } else {
                        const {
                            PeriodBox = [{}]
                        } = JSON['parse'](_0x965668);
                        for (var _0x717c01 = 0x0; _0x451476['ydNdF'](_0x717c01, PeriodBox['length']); _0x717c01++) {
                            const {
                                dwStatus,
                                dwSeq,
                                strBrandName
                            } = PeriodBox[_0x717c01];
                            if (_0x451476['viOwg'](dwStatus, 0x2)) {
                                await $['wait'](0x3e8);
                                await $['get'](taskUrl('user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x4ea1e5, _0x239db9, _0x965668) => {
                                    var _0x2958ed = {
                                        'NDnVx': function(_0x4774e1, _0x6dcacb) {
                                            return _0x4774e1 - _0x6dcacb;
                                        }
                                    };
                                    try {
                                        if (_0xe37aff['PATzI'] !== _0xe37aff['uscMK']) {
                                            const {
                                                dwMoney,
                                                iRet,
                                                sErrMsg
                                            } = JSON['parse'](_0x965668);
                                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0xe37aff['eOyAs'](sErrMsg, 'success') ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x965668 : ''));
                                        } else {
                                            $['newShareCodes'] = $['shareCodesArr'][_0x2958ed['NDnVx']($['index'], 0x1)]['split']('@');
                                        }
                                    } catch (_0x523f08) {
                                        if (_0xe37aff['zpnke']('ceiKv', _0xe37aff['vMjen'])) {
                                            $['logErr'](_0x523f08, _0x239db9);
                                        } else {
                                            $['log']('\n🎁寻宝：寻宝次数不足');
                                        }
                                    } finally {
                                        _0xe37aff['vgpDt'](_0x4c4c6f);
                                    }
                                });
                            } else if (dwStatus == 0x3) {
                                $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                            } else {
                                if (_0x451476['hzeiw'](_0x451476['wnQSK'], 'swYxO')) {
                                    $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                    _0x451476['SssVa'](_0x4c4c6f);
                                } else {
                                    _0xe37aff['GMOnd'](_0x4c4c6f);
                                }
                            }
                        }
                    }
                } catch (_0x26e1c8) {
                    $['logErr'](_0x26e1c8, _0x239db9);
                } finally {
                    if (_0x451476['FcHrf']('psKUH', _0x451476['eVpBR'])) {
                        $['logErr'](e, _0x239db9);
                    } else {
                        _0x451476['SssVa'](_0x4c4c6f);
                    }
                }
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function activeScene(_0x155266) {
    var _0x47ca51 = {
        'LWvLy': function(_0x2c9abf, _0xb48d76) {
            return _0x2c9abf == _0xb48d76;
        },
        'Tkann': 'success',
        'EyyWi': function(_0x1b0c43, _0x5f29e2) {
            return _0x1b0c43 > _0x5f29e2;
        },
        'LvsFD': function(_0x332b16, _0x7f6751) {
            return _0x332b16 !== _0x7f6751;
        },
        'MZGig': 'paLpg',
        'aftsH': 'zjdvH',
        'zhlHJ': 'xjkOB',
        'RuGnI': 'GUNQZ',
        'JzJRn': function(_0x5c7454, _0x4e2c2c) {
            return _0x5c7454 !== _0x4e2c2c;
        },
        'UOSQr': 'yNgUw',
        'jrvHs': function(_0x4e8a2f) {
            return _0x4e8a2f();
        },
        'nfFej': function(_0x188ea1, _0x76519b) {
            return _0x188ea1 === _0x76519b;
        },
        'cDjhc': 'AhSXt',
        'LsdaG': 'LHSGJ',
        'Wbcfm': '*/*',
        'pWoaJ': 'gzip, deflate, br',
        'LgXas': 'm.jingxi.com',
        'brYDf': function(_0x3d236d, _0x370786) {
            return _0x3d236d + _0x370786;
        },
        'XvTeT': function(_0x448805, _0x1682cd) {
            return _0x448805 * _0x1682cd;
        },
        'GfpLT': 'zh-cn'
    };
    return new Promise(_0x5a8dc1 => {
        if (_0x47ca51['nfFej'](_0x47ca51['cDjhc'], _0x47ca51['LsdaG'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
        } else {
            const _0x3c0288 = {
                'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + Number(_0x155266) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                'headers': {
                    'Cookie': cookie,
                    'Accept': _0x47ca51['Wbcfm'],
                    'Connection': 'keep-alive',
                    'Referer': 'https://st.jingxi.com/fortune_island/index.html',
                    'Accept-Encoding': _0x47ca51['pWoaJ'],
                    'Host': _0x47ca51['LgXas'],
                    'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x47ca51['brYDf'](_0x47ca51['XvTeT'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': _0x47ca51['GfpLT']
                }
            };
            $['get'](_0x3c0288, (_0x17a990, _0x251504, _0x1a3a03) => {
                var _0x3e7d2e = {
                    'AvwqB': function(_0x3fed25, _0x2f9262) {
                        return _0x47ca51['LWvLy'](_0x3fed25, _0x2f9262);
                    },
                    'fbekp': _0x47ca51['Tkann'],
                    'ZEgQW': function(_0x1a27b2, _0x3faa4b) {
                        return _0x47ca51['EyyWi'](_0x1a27b2, _0x3faa4b);
                    }
                };
                if (_0x47ca51['LvsFD'](_0x47ca51['MZGig'], _0x47ca51['MZGig'])) {
                    if (_0x17a990) {
                        console['log']('' + JSON['stringify'](_0x17a990));
                        console['log']($['name'] + ' getMoney_dwSource_3 API请求失败，请检查网路重试');
                    } else {
                        const {
                            iRet,
                            dwMoney,
                            sErrMsg,
                            strPin
                        } = JSON['parse'](_0x1a3a03);
                        $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x3e7d2e['AvwqB'](sErrMsg, _0x3e7d2e['fbekp']) ? '获取超级助力财富值：¥ ' + (dwMoney || 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x1a3a03 : ''));
                    }
                } else {
                    try {
                        if (_0x17a990) {
                            if (_0x47ca51['aftsH'] !== _0x47ca51['zhlHJ']) {
                                console['log']('' + JSON['stringify'](_0x17a990));
                                console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                            } else {
                                if (_0x3e7d2e['ZEgQW'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                                } else {
                                    shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                                }
                            }
                        } else {
                            if (_0x47ca51['LvsFD']('GUNQZ', _0x47ca51['RuGnI'])) {
                                console['log']('' + JSON['stringify'](_0x17a990));
                                console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                            } else {
                                console['log']('开通场景结果:' + _0x1a3a03 + '\x0a');
                            }
                        }
                    } catch (_0x44f5c9) {
                        $['logErr'](_0x44f5c9, _0x251504);
                    } finally {
                        if (_0x47ca51['JzJRn'](_0x47ca51['UOSQr'], _0x47ca51['UOSQr'])) {
                            if (_0x17a990) {
                                console['log']('' + JSON['stringify'](_0x17a990));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                if (_0x1a3a03) {
                                    console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                                    _0x1a3a03 = JSON['parse'](_0x1a3a03);
                                }
                            }
                        } else {
                            _0x47ca51['jrvHs'](_0x5a8dc1);
                        }
                    }
                }
            });
        }
    });
}

function taskUrl(_0x16efae, _0x37c717) {
    var _0x336a21 = {
        'Zcyny': '*/*',
        'etbDU': 'keep-alive',
        'hiJbb': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'PkbDk': 'm.jingxi.com',
        'zJjCl': function(_0x33bed2, _0x4fc7c7) {
            return _0x33bed2 + _0x4fc7c7;
        },
        'TXJln': function(_0x4597ee, _0x23c80e) {
            return _0x4597ee * _0x23c80e;
        }
    };
    return {
        'url': JD_API_HOST + 'jxcfd/' + _0x16efae + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x37c717 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x336a21['Zcyny'],
            'Connection': _0x336a21['etbDU'],
            'Referer': _0x336a21['hiJbb'],
            'Accept-Encoding': 'gzip, deflate, br',
            'Host': _0x336a21['PkbDk'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x336a21['zJjCl'](_0x336a21['TXJln'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': 'zh-cn'
        },
        'timeout': 0x2710
    };
}

function taskListUrl(_0xb0c90d, _0x567431) {
    var _0x666ef5 = {
        'AVrMU': '*/*',
        'IIkvT': 'keep-alive',
        'fywnP': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'jZRmP': 'gzip, deflate, br',
        'PPlQZ': 'm.jingxi.com',
        'KPgDL': function(_0x1014d1, _0x4bd523) {
            return _0x1014d1 + _0x4bd523;
        },
        'dqTcf': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0xb0c90d + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x567431 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': cookie,
            'Accept': _0x666ef5['AVrMU'],
            'Connection': _0x666ef5['IIkvT'],
            'Referer': _0x666ef5['fywnP'],
            'Accept-Encoding': _0x666ef5['jZRmP'],
            'Host': _0x666ef5['PPlQZ'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x666ef5['KPgDL'](Math['random'] * 0x62, 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x666ef5['dqTcf']
        },
        'timeout': 0x2710
    };
}

function showMsg() {
    var _0x2e0d28 = {
        'xqrsx': 'HH:mm',
        'ljGBr': function(_0x54b1d3, _0x13c169) {
            return _0x54b1d3 === _0x13c169;
        },
        'YdDYs': function(_0x3ad7fd) {
            return _0x3ad7fd();
        }
    };
    return new Promise(async _0x1d7e01 => {
        if ($['result']['length']) {
            if ($['notifyTime']) {
                const _0x405bd9 = $['notifyTime']['split'](',')['map'](_0x1a2977 => _0x1a2977['split'](':'));
                const _0x2423e4 = $['time'](_0x2e0d28['xqrsx'])['split'](':');
                $['log']('\x0a' + JSON['stringify'](_0x405bd9));
                $['log']('\x0a' + JSON['stringify'](_0x2423e4));
                if (_0x405bd9['some'](_0x2c6f11 => _0x2c6f11[0x0] === _0x2423e4[0x0] && (!_0x2c6f11[0x1] || _0x2c6f11[0x1] === _0x2423e4[0x1]))) {
                    if (_0x2e0d28['ljGBr']('GCnqU', 'evivf')) {
                        $['logErr'](e, resp);
                    } else {
                        $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                    }
                }
            } else {
                $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
            }
            if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
        }
        _0x2e0d28['YdDYs'](_0x1d7e01);
    });
}

function readShareCode() {
    var _0x175d09 = {
        'AHlex': function(_0x4aa401, _0x23a534) {
            return _0x4aa401 == _0x23a534;
        },
        'Ljwla': 'success',
        'Ccxiy': '\n\n你的【🏝寻宝大作战】互助码: ',
        'yAVkj': function(_0x557999, _0xf458b6) {
            return _0x557999 !== _0xf458b6;
        },
        'kPxEc': 'LSsFl',
        'FHCTs': function(_0x4ff46c, _0x38835c) {
            return _0x4ff46c === _0x38835c;
        },
        'VEAWm': 'gEpXe',
        'qLqbb': function(_0x5a1626, _0x558dac) {
            return _0x5a1626(_0x558dac);
        },
        'goiEV': 'IlYYu',
        'yNgKy': function(_0x1c42e2) {
            return _0x1c42e2();
        }
    };
    console['log']('开始');
    return new Promise(async _0x254098 => {
        var _0x465575 = {
            'GGgif': function(_0x1ce41c, _0x4187e8) {
                return _0x175d09['AHlex'](_0x1ce41c, _0x4187e8);
            },
            'vPkWg': _0x175d09['Ljwla'],
            'MykDq': _0x175d09['Ccxiy'],
            'fUdUm': function(_0x19c7f2, _0x1f7fd1) {
                return _0x175d09['yAVkj'](_0x19c7f2, _0x1f7fd1);
            },
            'GmWYq': _0x175d09['kPxEc'],
            'DeINk': function(_0x3fada7, _0x521e67) {
                return _0x175d09['FHCTs'](_0x3fada7, _0x521e67);
            },
            'ohfmK': _0x175d09['VEAWm'],
            'gndJm': function(_0x280b92, _0x4588ea) {
                return _0x175d09['qLqbb'](_0x280b92, _0x4588ea);
            }
        };
        if (_0x175d09['FHCTs']('IlYYu', _0x175d09['goiEV'])) {
            $['get']({
                'url': 'http://share.turinglabs.net/api/v3/jxcfd/query/0/',
                'timeout': 0x2710
            }, (_0x6e935a, _0x5a3c7b, _0xd5835) => {
                var _0x3e9ed1 = {
                    'muBNW': function(_0x2e93cf, _0x5597ec) {
                        return _0x2e93cf + _0x5597ec;
                    },
                    'YtaUf': _0x465575['MykDq']
                };
                try {
                    if (_0x6e935a) {
                        console['log']('' + JSON['stringify'](_0x6e935a));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0xd5835) {
                            if (_0x465575['fUdUm']('LSsFl', _0x465575['GmWYq'])) {
                                $['log'](_0x3e9ed1['muBNW'](_0x3e9ed1['YtaUf'], strGroupId) + '(每天都变化,旧的不可用)\n\n');
                                $['shareCodes']['push'](strGroupId);
                            } else {
                                console['log']('随机取0个码放到您固定的互助码后面(不影响已有固定互助)');
                                _0xd5835 = JSON['parse'](_0xd5835);
                            }
                        }
                    }
                } catch (_0x4c8be1) {
                    $['logErr'](_0x4c8be1, _0x5a3c7b);
                } finally {
                    if (_0x465575['DeINk']('gEpXe', _0x465575['ohfmK'])) {
                        _0x465575['gndJm'](_0x254098, _0xd5835);
                    } else {
                        try {
                            const {
                                dwMoney,
                                iRet,
                                sErrMsg
                            } = JSON['parse'](_0xd5835);
                            $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (_0x465575['GGgif'](sErrMsg, _0x465575['vPkWg']) ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0xd5835 : ''));
                        } catch (_0x54d8b4) {
                            $['logErr'](_0x54d8b4, _0x5a3c7b);
                        } finally {
                            _0x254098();
                        }
                    }
                }
            });
            await $['wait'](0x2710);
            _0x175d09['yNgKy'](_0x254098);
        } else {
            $['logErr'](e, resp);
        }
    });
}

function shareCodesFormat() {
    var _0x2cce58 = {
        'uwnIW': function(_0x1ec2cb, _0x58b2de) {
            return _0x1ec2cb !== _0x58b2de;
        },
        'vYlqh': 'sZTkA',
        'WSzXR': function(_0x4116cd, _0x42b7b0) {
            return _0x4116cd - _0x42b7b0;
        },
        'mwRQD': function(_0x540cb0, _0x109c94) {
            return _0x540cb0 === _0x109c94;
        },
        'Nnfut': 'iddAX',
        'gaZxu': 'HyECE',
        'zPlzs': 'C78F8838796575D1E4F040D943DE84ACF186D78EC309539F03689D0BBBC3D796',
        'EfMFZ': function(_0x2ad250) {
            return _0x2ad250();
        }
    };
    return new Promise(async _0x32587c => {
        if (_0x2cce58['uwnIW']('sZTkA', _0x2cce58['vYlqh'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
        } else {
            $['newShareCodes'] = [];
            if ($['shareCodesArr'][_0x2cce58['WSzXR']($['index'], 0x1)]) {
                if (_0x2cce58['mwRQD'](_0x2cce58['Nnfut'], _0x2cce58['gaZxu'])) {
                    $['logErr'](e);
                } else {
                    $['newShareCodes'] = $['shareCodesArr'][$['index'] - 0x1]['split']('@');
                }
            } else {
                console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                $['newShareCodes'] = [...$['strMyShareIds'], _0x2cce58['zPlzs']];
            }
            const _0x331629 = await _0x2cce58['EfMFZ'](readShareCode);
            if (_0x331629 && _0x331629['code'] === 0xc8) {
                $['newShareCodes'] = [...new Set([...$['newShareCodes'], ..._0x331629['data'] || []])];
            }
            console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
            _0x32587c();
        }
    });
}

function requireConfig() {
    var _0x2a067e = {
        'IyimO': function(_0x31a712) {
            return _0x31a712();
        },
        'YMqPm': 'CtpRK',
        'QnpQT': 'yludr',
        'bqtLS': function(_0x281c03, _0x84ff30) {
            return _0x281c03 > _0x84ff30;
        },
        'XXypS': 'bXXiT',
        'IKywj': function(_0x28a5cc, _0x11a323) {
            return _0x28a5cc !== _0x11a323;
        },
        'uedVd': 'QAKOD',
        'iAKjJ': function(_0x3874d3, _0x33b317) {
            return _0x3874d3 === _0x33b317;
        },
        'EUJvi': 'hPWAc',
        'FjCru': 'Ituzo',
        'aIgIF': 'jd_jxCFD'
    };
    return new Promise(_0x1c3297 => {
        console['log']('开始获取' + $['name'] + '配置文件\n');
        let _0x3bedef = [];
        if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
            if (_0x2a067e['YMqPm'] !== _0x2a067e['QnpQT']) {
                if (_0x2a067e['bqtLS'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                    if (_0x2a067e['XXypS'] !== _0x2a067e['XXypS']) {
                        if (_0x3bedef[item]) {
                            $['shareCodesArr']['push'](_0x3bedef[item]);
                        }
                    } else {
                        _0x3bedef = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                    }
                } else {
                    if (_0x2a067e['IKywj'](_0x2a067e['uedVd'], 'QAKOD')) {
                        _0x2a067e['IyimO'](_0x1c3297);
                    } else {
                        _0x3bedef = process['env']['JDCFD_SHARECODES']['split']('&');
                    }
                }
            } else {
                _0x3bedef = process['env']['JDCFD_SHARECODES']['split']('&');
            }
        }
        $['shareCodesArr'] = [];
        if ($['isNode']()) {
            if (_0x2a067e['iAKjJ'](_0x2a067e['EUJvi'], _0x2a067e['EUJvi'])) {
                Object['keys'](_0x3bedef)['forEach'](_0x237f5b => {
                    if (_0x3bedef[_0x237f5b]) {
                        $['shareCodesArr']['push'](_0x3bedef[_0x237f5b]);
                    }
                });
            } else {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
            }
        } else {
            if (_0x2a067e['FjCru'] === _0x2a067e['FjCru']) {
                if ($['getdata'](_0x2a067e['aIgIF'])) $['shareCodesArr'] = $['getdata']('jd_jxCFD')['split']('\x0a')['filter'](_0x8c3376 => !!_0x8c3376);
                console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x2a067e['aIgIF']) + '\x0a');
            } else {
                const {
                    ret,
                    data: {
                        userTaskStatusList = []
                    } = {},
                    msg
                } = JSON['parse'](data);
                $['allTask'] = userTaskStatusList['filter'](_0x546db5 => _0x546db5['awardStatus'] !== 0x1);
                $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\x0a' + ($['showLog'] ? data : ''));
            }
        }
        console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
        _0x2a067e['IyimO'](_0x1c3297);
    });
};
_0xodj = 'jsjiami.com.v6'

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


!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
