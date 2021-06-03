/*
京东全民开红包
Last Modified time: 2021-05-19 16:27:18
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#京东全民开红包
1 1,2,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true
===================Loon==============
[Script]
cron "1 1,2,23 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, tag=京东全民开红包
===============Surge===============
[Script]
京东全民开红包 = type=cron,cronexp="1 1,2,23 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js
====================================小火箭=============================
京东全民开红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_redPacket.js, cronexpr="1 1,2,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
$.redPacketId = [];


/*
 *Progcessed By JSDec in 3.78s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x5b5bb2 => {
        cookiesArr['push'](jdCookieNode[_0x5b5bb2]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x9c5425 => _0x9c5425['cookie'])]['filter'](_0xba127e => !!_0xba127e);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x1e5eef = {
        'LKjef': 'data',
        'UqKoG': 'discount',
        'NLyhb': 'packetSum',
        'ALJsM': 'result',
        'uQdeM': 'rewards',
        'vTkJu': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
        'LMdWF': 'https://bean.m.jd.com/bean/signIndex.action',
        'SZfWb': function(_0x4aa7a4, _0x43dbfd) {
            return _0x4aa7a4(_0x43dbfd);
        },
        'yHLbH': 'http://adguard.b.freefrp.net/jd_red.json',
        'csEdG': function(_0x4f2276, _0x394a83) {
            return _0x4f2276(_0x394a83);
        },
        'KKmnE': 'http://adguard.b.freefrp.net/jd_red.json',
        'dsslc': function(_0x284fc4, _0x62805) {
            return _0x284fc4 < _0x62805;
        },
        'Nsdeh': function(_0x4964ad, _0x5a8eac) {
            return _0x4964ad(_0x5a8eac);
        },
        'zXVXC': function(_0x157cf6, _0x48f416) {
            return _0x157cf6 + _0x48f416;
        },
        'ODnsr': function(_0x4bf28b, _0x45f988) {
            return _0x4bf28b === _0x45f988;
        },
        'JantI': 'jzHWL',
        'vmWLy': function(_0x550acd) {
            return _0x550acd();
        },
        'BRlci': function(_0x427f1b) {
            return _0x427f1b();
        },
        'VxBsn': function(_0x5e2a5d, _0x9a0e7c) {
            return _0x5e2a5d > _0x9a0e7c;
        },
        'XguVo': 'zsiwU',
        'Bjbff': 'waXfN',
        'VarnF': function(_0x584306, _0x57abc1) {
            return _0x584306 !== _0x57abc1;
        },
        'LEfKj': 'Jptcl',
        'JfOJy': 'qIaFK',
        'jPdbm': function(_0x420137, _0x1a0c8b) {
            return _0x420137(_0x1a0c8b);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x1e5eef['vTkJu'], _0x1e5eef['LMdWF'], {
            'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
        });
        return;
    }
    let _0x3d4ade = await _0x1e5eef['SZfWb'](getAuthorShareCode, _0x1e5eef['yHLbH']),
        _0x5b5b26 = await _0x1e5eef['csEdG'](getAuthorShareCode, _0x1e5eef['KKmnE']);
    if (!_0x3d4ade) _0x3d4ade = await getAuthorShareCode();
    let _0x3b18a6 = (await _0x1e5eef['csEdG'](getAuthorShareCode, 'http://adguard.b.freefrp.net/jxhb.json')) || [];
    $['authorMyShareIds'] = [..._0x3d4ade || [], ..._0x5b5b26 || []];
    for (let _0x5e78c8 = 0x0; _0x1e5eef['dsslc'](_0x5e78c8, cookiesArr['length']); _0x5e78c8++) {
        if (cookiesArr[_0x5e78c8]) {
            cookie = cookiesArr[_0x5e78c8];
            $['UserName'] = _0x1e5eef['Nsdeh'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0x1e5eef['zXVXC'](_0x5e78c8, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            await TotalBean();
            console['log']('\x0a****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': _0x1e5eef['LMdWF']
                });
                if ($['isNode']()) {
                    if (_0x1e5eef['ODnsr']('jzHWL', _0x1e5eef['JantI'])) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    } else {
                        console['log']('拆红包获得：' + data[_0x1e5eef['LKjef']]['result'][_0x1e5eef['UqKoG']] + '元');
                    }
                }
                continue;
            }
            $['discount'] = 0x0;
            await _0x1e5eef['vmWLy'](redPacket);
            await _0x1e5eef['BRlci'](showMsg);
        }
    }
    for (let _0x26b524 = 0x0; _0x1e5eef['dsslc'](_0x26b524, cookiesArr['length']); _0x26b524++) {
        cookie = cookiesArr[_0x26b524];
        $['index'] = _0x1e5eef['zXVXC'](_0x26b524, 0x1);
        $['UserName'] = _0x1e5eef['Nsdeh'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
        $['canHelp'] = !![];
        $['redPacketId'] = [...new Set($['redPacketId'])];
        if (cookiesArr && _0x1e5eef['VxBsn'](cookiesArr['length'], 0x2)) {
            if (_0x1e5eef['XguVo'] !== _0x1e5eef['Bjbff']) {
                console['log']('\x0a\x0a自己账号内部互助');
                for (let _0x2277db of $['redPacketId']) {
                    console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x2277db + ' 进行助力');
                    await _0x1e5eef['Nsdeh'](jinli_h5assist, _0x2277db);
                    if (!$['canHelp']) {
                        console['log']('次数已用完或活动火爆，跳出助力');
                        break;
                    }
                }
            } else {
                $['discount'] += item[_0x1e5eef['NLyhb']];
            }
        }
        if ($['canHelp']) {
            if (_0x1e5eef['VarnF'](_0x1e5eef['LEfKj'], _0x1e5eef['JfOJy'])) {
                console['log']('\n\n有剩余助力机会则给作者lxk0301进行助力');
                for (let _0x169092 of $['authorMyShareIds'] || []) {
                    console['log']('\x0a账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x169092 + ' 进行助力');
                    await _0x1e5eef['Nsdeh'](jinli_h5assist, _0x169092);
                    if (!$['canHelp']) {
                        console['log']('次数已用完，跳出助力');
                        break;
                    }
                }
            } else {
                const _0x620370 = $['h5activityIndex']['data'][_0x1e5eef['ALJsM']][_0x1e5eef['uQdeM']] || [];
                for (let _0x4f4eb5 of _0x620370) {
                    $['discount'] += _0x4f4eb5[_0x1e5eef['NLyhb']];
                }
                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
            }
        }
        for (let _0x46e612 of _0x3b18a6 || []) {
            if (!_0x46e612) continue;
            await _0x1e5eef['jPdbm'](enrollFriend, _0x46e612);
        }
    }
})()['catch'](_0x8c2d5a => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x8c2d5a + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0x1e13df = {
        'GpeYe': '1|5|2|3|0|4',
        'rhSNo': function(_0x5db357) {
            return _0x5db357();
        },
        'AohpW': function(_0x5a9527) {
            return _0x5a9527();
        },
        'SKSgF': function(_0x98f705) {
            return _0x98f705();
        },
        'lkueJ': function(_0x2a27ca) {
            return _0x2a27ca();
        },
        'NFfXI': function(_0x10ffa6) {
            return _0x10ffa6();
        }
    };
    try {
        var _0x57618b = _0x1e13df['GpeYe']['split']('|'),
            _0x10abf7 = 0x0;
        while (!![]) {
            switch (_0x57618b[_0x10abf7++]) {
                case '0':
                    await _0x1e13df['rhSNo'](red);
                    continue;
                case '1':
                    await doLuckDrawFun();
                    continue;
                case '2':
                    await _0x1e13df['AohpW'](doTask);
                    continue;
                case '3':
                    await _0x1e13df['SKSgF'](h5activityIndex);
                    continue;
                case '4':
                    await _0x1e13df['lkueJ'](h5activityIndex);
                    continue;
                case '5':
                    await _0x1e13df['NFfXI'](taskHomePage);
                    continue;
            }
            break;
        }
    } catch (_0x5a689b) {
        $['logErr'](_0x5a689b);
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doLuckDrawFun() {
    var _0x2f30e7 = {
        'zUoaV': function(_0x4a33e8) {
            return _0x4a33e8();
        }
    };
    for (let _0xccc233 = 0x0; _0xccc233 < 0x3; _0xccc233++) {
        await _0x2f30e7['zUoaV'](doLuckDrawEntrance);
    }
}

function doLuckDrawEntrance() {
    var _0xda1643 = {
        'LFWtu': function(_0x3cad77, _0x28ff4f) {
            return _0x3cad77(_0x28ff4f);
        },
        'rgAlC': 'YNrTV',
        'sunUj': function(_0x1cc537, _0x4d041c) {
            return _0x1cc537 === _0x4d041c;
        },
        'Eoslf': 'busiCode',
        'kAQwP': function(_0x44ee43, _0x59135d) {
            return _0x44ee43 !== _0x59135d;
        },
        'KvXpA': 'hGWDx',
        'qBism': 'burvt',
        'VkRIN': function(_0x18a947, _0x5ab507) {
            return _0x18a947 === _0x5ab507;
        },
        'wmhRC': 'ihxgN',
        'LGtaN': 'pBGfu',
        'xmRiV': function(_0x10fe6) {
            return _0x10fe6();
        },
        'EqIBj': function(_0x5bccb0) {
            return _0x5bccb0();
        },
        'SNRPp': 'https://api.m.jd.com/client.action?functionId=doLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=XPMSGC2019&client=m&clientVersion=1.0.0&area=19_1601_50258_62858&geo=%5Bobject%20Object%5D&uuid=88732f840b77821b345bf07fd71f609e6ff12f43',
        'lPSwz': 'api.m.jd.com',
        'PXhxY': 'https://h5.m.jd.com',
        'thROQ': 'application/json, text/plain, */*',
        'QVZrF': 'https://h5.m.jd.com/babelDiy/Zeus/yj8mbcm6roENn7qhNdhiekyeqtd/index.html'
    };
    return new Promise(_0x287682 => {
        var _0x347f83 = {
            'XvBtl': function(_0x304805, _0x367d53) {
                return _0xda1643['VkRIN'](_0x304805, _0x367d53);
            },
            'aUJsY': 'reportCcTask',
            'HiXdP': function(_0x347795) {
                return _0xda1643['EqIBj'](_0x347795);
            }
        };
        const _0x383da8 = {
            'url': _0xda1643['SNRPp'],
            'headers': {
                'Host': _0xda1643['lPSwz'],
                'Origin': _0xda1643['PXhxY'],
                'Cookie': cookie,
                'Content-Length': '0',
                'Connection': 'keep-alive',
                'Accept': _0xda1643['thROQ'],
                'User-Agent': 'jdapp;iPhone;9.5.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;model/iPhone11,8;addressid/2005183373;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
                'Accept-Language': 'zh-cn',
                'Referer': _0xda1643['QVZrF'],
                'Accept-Encoding': 'gzip, deflate, br'
            }
        };
        $['post'](_0x383da8, async (_0x1a6954, _0x31fa89, _0x2f531b) => {
            var _0x5b3ac5 = {
                'sbxbu': function(_0x3034f0, _0x475326) {
                    return _0xda1643['LFWtu'](_0x3034f0, _0x475326);
                }
            };
            try {
                if (_0x1a6954) {
                    if (_0xda1643['rgAlC'] !== _0xda1643['rgAlC']) {
                        console['log']('[' + item['title'] + '] 功能未开发');
                    } else {
                        console['log']('' + JSON['stringify'](_0x1a6954));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } else {
                    if (_0x2f531b) {
                        _0x2f531b = JSON['parse'](_0x2f531b);
                        if (_0xda1643['sunUj'](_0x2f531b['code'], '0') && _0x2f531b[_0xda1643['Eoslf']] === '0') {
                            if (_0x2f531b['result']['luckyDrawData']['actId']) {
                                if (_0xda1643['kAQwP'](_0xda1643['KvXpA'], 'FSGfw')) {
                                    if (_0x2f531b['result']['luckyDrawData']['redPacketId']) {
                                        if (_0xda1643['kAQwP'](_0xda1643['qBism'], 'ZlOkY')) {
                                            console['log']('券后9.9抽奖获得【红包】：' + _0x2f531b['result']['luckyDrawData']['quota'] + '元');
                                        } else {
                                            if (type === '1' && _0x347f83['XvBtl'](functionId, _0x347f83['aUJsY'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x2f531b);
                                        }
                                    } else {
                                        console['log']('券后9.9抽奖获得【优惠券】：' + _0x2f531b['result']['luckyDrawData']['discount'] + '元：' + _0x2f531b['result']['luckyDrawData']['prizeName'] + '，' + _0x2f531b['result']['luckyDrawData']['quotaDesc']);
                                    }
                                } else {
                                    _0x347f83['HiXdP'](_0x287682);
                                }
                            } else {
                                if (_0xda1643['VkRIN'](_0xda1643['wmhRC'], 'NXjUI')) {
                                    console['log']('红包领取成功，获得' + _0x2f531b['data']['result']['discount'] + '元\x0a');
                                    $['discount'] += _0x5b3ac5['sbxbu'](Number, _0x2f531b['data']['result']['discount']);
                                } else {
                                    console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\x0a');
                                }
                            }
                        }
                    }
                }
            } catch (_0x27704a) {
                $['logErr'](_0x27704a, _0x31fa89);
            } finally {
                if (_0xda1643['LGtaN'] !== 'aVFoV') {
                    _0xda1643['xmRiV'](_0x287682);
                } else {
                    console['log']('发起助力红包 失败：' + JSON['stringify'](_0x2f531b));
                }
            }
        });
    });
}
async function doTask() {
    var _0x3549d1 = {
        'wJRou': function(_0x506a09) {
            return _0x506a09();
        },
        'yHdti': function(_0x3cbecd, _0x256eb6) {
            return _0x3cbecd(_0x256eb6);
        },
        'GNeaK': function(_0x14df1d, _0x15af3d) {
            return _0x14df1d === _0x15af3d;
        },
        'Digcp': function(_0x2d2f4c, _0x4807cb) {
            return _0x2d2f4c > _0x4807cb;
        },
        'hqiUi': function(_0x2e1046, _0x13b603) {
            return _0x2e1046 === _0x13b603;
        },
        'xaAmk': function(_0x21e4b3, _0x1cb19e) {
            return _0x21e4b3 === _0x1cb19e;
        },
        'NVQbO': 'ACLPl',
        'bfJZG': function(_0x139b2f, _0x3cc824) {
            return _0x139b2f === _0x3cc824;
        },
        'MCOwk': 'MnCLf',
        'NQbOG': 'uCJcu',
        'VSFpk': function(_0xf35472, _0xaa71e8) {
            return _0xf35472 !== _0xaa71e8;
        },
        'FbRpn': function(_0x488c8f, _0x3ed458) {
            return _0x488c8f !== _0x3ed458;
        },
        'NfRBK': 'TPoNh',
        'APzPR': function(_0x28f359, _0x5e59ac) {
            return _0x28f359 === _0x5e59ac;
        },
        'Yjtzq': 'gYAGb',
        'XZmap': 'FYoUj',
        'sKklm': 'xbFWH',
        'BDyXN': function(_0x27cd66, _0x358b24) {
            return _0x27cd66 !== _0x358b24;
        },
        'brcic': function(_0x50b650, _0x391c92) {
            return _0x50b650 !== _0x391c92;
        },
        'MCYyS': function(_0x2f9917, _0x47787a) {
            return _0x2f9917(_0x47787a);
        },
        'gSVbW': function(_0x5d5155, _0x8f1a2b) {
            return _0x5d5155 === _0x8f1a2b;
        },
        'VqXUm': 'DBjgx'
    };
    if ($['taskHomePageData'] && _0x3549d1['GNeaK']($['taskHomePageData']['code'], 0x0)) {
        $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
        if ($['taskInfo'] && _0x3549d1['Digcp']($['taskInfo']['length'], 0x0)) {
            console['log']('    任务     状态  红包是否领取');
            for (let _0x1ed388 of $['taskInfo']) {
                console['log'](_0x1ed388['title']['slice'](-0x6) + '   ' + (_0x1ed388['alreadyReceivedCount'] ? _0x1ed388['alreadyReceivedCount'] : 0x0) + '/' + _0x1ed388['requireCount'] + '      ' + (_0x3549d1['GNeaK'](_0x1ed388['innerStatus'], 0x4) ? '是' : '否'));
            }
            for (let _0x3753a6 of $['taskInfo']) {
                if (_0x3549d1['hqiUi'](_0x3753a6['innerStatus'], 0x4)) {
                    console['log']('[' + _0x3753a6['title'] + '] 已经领取奖励');
                } else if (_0x3549d1['hqiUi'](_0x3753a6['innerStatus'], 0x3)) {
                    if (_0x3549d1['xaAmk']('TulQS', _0x3549d1['NVQbO'])) {
                        data = JSON['parse'](data);
                    } else {
                        await _0x3549d1['yHdti'](receiveTaskRedpacket, _0x3753a6['taskType']);
                    }
                } else if (_0x3549d1['bfJZG'](_0x3753a6['innerStatus'], 0x2)) {
                    if (_0x3549d1['bfJZG'](_0x3549d1['MCOwk'], _0x3549d1['NQbOG'])) {
                        _0x3549d1['wJRou'](resolve);
                    } else {
                        if (_0x3549d1['VSFpk'](_0x3753a6['taskType'], 0x0) && _0x3549d1['VSFpk'](_0x3753a6['taskType'], 0x1)) {
                            if (_0x3549d1['FbRpn'](_0x3549d1['NfRBK'], _0x3549d1['NfRBK'])) {
                                data = JSON['parse'](data);
                            } else {
                                console['log']('开始做【' + _0x3753a6['title'] + '】任务');
                                await _0x3549d1['yHdti'](active, _0x3753a6['taskType']);
                                console['log']('开始领取【' + _0x3753a6['title'] + '】任务所得红包奖励');
                                await _0x3549d1['yHdti'](receiveTaskRedpacket, _0x3753a6['taskType']);
                            }
                        } else if (_0x3549d1['bfJZG'](_0x3753a6['taskType'], 0x1)) {
                            if (_0x3549d1['APzPR'](_0x3549d1['Yjtzq'], _0x3549d1['Yjtzq'])) {
                                console['log']('开始做【' + _0x3753a6['title'] + '】任务');
                                await doAppTask();
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](err));
                            }
                        } else {
                            if (_0x3549d1['XZmap'] === 'FYoUj') {
                                console['log']('[' + _0x3753a6['title'] + '] 功能未开发');
                            } else {
                                $['logErr'](e, resp);
                            }
                        }
                    }
                } else if (_0x3753a6['innerStatus'] !== 0x4) {
                    if (_0x3549d1['APzPR'](_0x3549d1['sKklm'], 'xbFWH')) {
                        console['log']('\n开始领取【' + _0x3753a6['title'] + '】任务');
                        await _0x3549d1['yHdti'](startTask, _0x3753a6['taskType']);
                        if (_0x3549d1['BDyXN'](_0x3753a6['taskType'], 0x0) && _0x3549d1['brcic'](_0x3753a6['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x3753a6['title'] + '】任务');
                            await _0x3549d1['MCYyS'](active, _0x3753a6['taskType']);
                            console['log']('开始领取【' + _0x3753a6['title'] + '】任务所得红包奖励');
                            await _0x3549d1['MCYyS'](receiveTaskRedpacket, _0x3753a6['taskType']);
                        } else if (_0x3549d1['gSVbW'](_0x3753a6['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x3753a6['title'] + '】任务');
                            await doAppTask();
                        } else {
                            console['log']('[' + _0x3753a6['title'] + '] 功能未开发');
                        }
                    } else {
                        console['log']('[' + _0x3753a6['title'] + '] 已经领取奖励');
                    }
                }
            }
        }
    } else {
        if ('fkLuw' === _0x3549d1['VqXUm']) {
            _0x3549d1['yHdti'](resolve, data);
        } else {
            console['log']('\n获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
        }
    }
}
async function red() {
    var _0x510d35 = {
        'uVbBI': 'result',
        'zlTYq': 'data',
        'rthyH': 'rewards',
        'laLJJ': 'hasSendNumber',
        'mBoya': 'assistants',
        'FSgMF': function(_0x4ff0f3, _0xe223b) {
            return _0x4ff0f3 === _0xe223b;
        },
        'BWrmf': 'biz_code',
        'sSJaX': function(_0x39ae17, _0x37a27a) {
            return _0x39ae17 === _0x37a27a;
        },
        'HQLgV': 'redpacketInfo',
        'motvA': 'requireAssistNum',
        'CKFlj': function(_0x25281e, _0x230e78) {
            return _0x25281e + _0x230e78;
        },
        'WqBZe': 'remainRedpacketNumber',
        'NdyPx': 'waitOpenTimes',
        'qaFWN': function(_0x47b03e, _0x5cedfe) {
            return _0x47b03e > _0x5cedfe;
        },
        'CKzDz': 'biz_msg'
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x510d35['uVbBI']]) {
        const _0x5eb97d = $['h5activityIndex'][_0x510d35['zlTYq']][_0x510d35['uVbBI']][_0x510d35['rthyH']] || [];
        $['hasSendNumber'] = $['h5activityIndex']['data'][_0x510d35['uVbBI']][_0x510d35['laLJJ']];
        if ($['h5activityIndex']['data']['result'][_0x510d35['mBoya']]) {
            $['assistants'] = $['h5activityIndex'][_0x510d35['zlTYq']][_0x510d35['uVbBI']]['assistants']['length'] || 0x0;
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x510d35['FSgMF']($['h5activityIndex']['data'][_0x510d35['BWrmf']], 0x2712)) {
        await h5launch();
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x510d35['sSJaX']($['h5activityIndex']['data'][_0x510d35['BWrmf']], 0x4e21)) {
        const _0x3609ac = $['h5activityIndex']['data'][_0x510d35['uVbBI']][_0x510d35['HQLgV']]['id'];
        if (_0x3609ac) $['redPacketId']['push'](_0x3609ac);
        console['log']('\n\n当前待拆红包ID:' + $['h5activityIndex'][_0x510d35['zlTYq']]['result']['redpacketInfo']['id'] + '，进度：再邀' + $['h5activityIndex']['data'][_0x510d35['uVbBI']][_0x510d35['motvA']] + '个好友，开第' + _0x510d35['CKFlj']($['hasSendNumber'], 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex'][_0x510d35['zlTYq']]['result'][_0x510d35['WqBZe']] + '个红包待开，已有' + $['assistants'] + '好友助力\n\n');
        const _0x8a6a18 = $['h5activityIndex'][_0x510d35['zlTYq']]['result'][_0x510d35['HQLgV']][_0x510d35['NdyPx']] || 0x0;
        console['log']('当前可拆红包个数：' + _0x8a6a18);
        if (_0x510d35['qaFWN'](_0x8a6a18, 0x0)) {
            for (let _0x331a9a = 0x0; _0x331a9a < new Array(_0x8a6a18)['fill']('')['length']; _0x331a9a++) {
                if (!_0x3609ac) break;
                await h5receiveRedpacket(_0x3609ac);
                await $['wait'](0x1f4);
            }
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x510d35['sSJaX']($['h5activityIndex']['data'][_0x510d35['BWrmf']], 0x4e22)) {
        console['log']('\x0a' + $['h5activityIndex']['data'][_0x510d35['CKzDz']] + '\x0a');
    }
}

function taskHomePage() {
    var _0x3d351a = {
        'COFjp': function(_0x4edee3, _0x39601f) {
            return _0x4edee3 !== _0x39601f;
        },
        'IWUtB': 'PBayn',
        'PBUxK': function(_0x31f493, _0x22f2e9) {
            return _0x31f493 === _0x22f2e9;
        },
        'CnpKM': 'GvBsl',
        'kPuCt': 'SPtoy',
        'EWcoF': 'ZuYsx',
        'tMPTd': function(_0x29bab4, _0x5aa516) {
            return _0x29bab4(_0x5aa516);
        },
        'lFXQd': function(_0x9d031, _0x5936c8, _0x1f931b) {
            return _0x9d031(_0x5936c8, _0x1f931b);
        }
    };
    return new Promise(_0x466c26 => {
        $['post'](_0x3d351a['lFXQd'](taskUrl, arguments['callee']['name']['toString'](), {
            'clientInfo': {}
        }), (_0x1f8adb, _0xc5c2f, _0x76d794) => {
            try {
                if (_0x3d351a['COFjp']('PBayn', _0x3d351a['IWUtB'])) {
                    _0x466c26(_0x76d794);
                } else {
                    if (_0x1f8adb) {
                        if (_0x3d351a['PBUxK']('GvBsl', _0x3d351a['CnpKM'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x1f8adb));
                        } else {
                            $['logErr'](e, _0xc5c2f);
                        }
                    } else {
                        $['taskHomePageData'] = JSON['parse'](_0x76d794);
                    }
                }
            } catch (_0x821ad6) {
                if (_0x3d351a['kPuCt'] !== _0x3d351a['EWcoF']) {
                    $['logErr'](_0x821ad6, _0xc5c2f);
                } else {
                    url += '&_stk=' + encodeURIComponent(stk);
                }
            } finally {
                _0x3d351a['tMPTd'](_0x466c26, _0x76d794);
            }
        });
    });
}

function startTask(_0x1fe61b) {
    var _0x411cdb = {
        'qBoJE': function(_0xa77c55, _0x69bcff) {
            return _0xa77c55 + _0x69bcff;
        },
        'dJiOd': 'wq.jd.com',
        'xssZJ': 'zh-cn',
        'xFCdY': function(_0x57299e, _0x4095d6) {
            return _0x57299e !== _0x4095d6;
        },
        'DMkFn': 'DTUCW',
        'rDlsW': 'OEkLu',
        'DfFDs': function(_0x355301, _0x1ff053) {
            return _0x355301 === _0x1ff053;
        },
        'nzKji': 'zyYJx',
        'hVhlS': 'AWBbn',
        'zYDfh': 'data',
        'ZKnyb': 'redPacketId',
        'IdXfe': 'result',
        'DngXg': function(_0x4efaec, _0x267c4c, _0x7869a7) {
            return _0x4efaec(_0x267c4c, _0x7869a7);
        },
        'tNFKO': 'token',
        'ARzKY': function(_0x40dc32, _0x29b0d7) {
            return _0x40dc32 + _0x29b0d7;
        }
    };
    let _0x3a10df = {
        'taskType': _0x1fe61b
    };
    _0x3a10df[_0x411cdb['tNFKO']] = $['md5']($['md5'](_0x411cdb['ARzKY']('j' + JSON['stringify'](_0x3a10df), 'D')));
    return new Promise(_0xbdcd41 => {
        var _0x2bca27 = {
            'PJZjk': _0x411cdb['zYDfh'],
            'wYYTK': _0x411cdb['ZKnyb'],
            'RqbdG': _0x411cdb['IdXfe']
        };
        $['post'](_0x411cdb['DngXg'](taskUrl, arguments['callee']['name']['toString'](), _0x3a10df), (_0x4d3e1f, _0x146b88, _0x3a10df) => {
            var _0x13506e = {
                'yAiqd': function(_0x520806, _0x6bd01) {
                    return _0x411cdb['qBoJE'](_0x520806, _0x6bd01);
                },
                'qQBxK': _0x411cdb['dJiOd'],
                'RoSHj': '*/*',
                'WeAcI': _0x411cdb['xssZJ']
            };
            if (_0x411cdb['xFCdY'](_0x411cdb['DMkFn'], _0x411cdb['rDlsW'])) {
                try {
                    if (_0x4d3e1f) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x4d3e1f));
                    } else {
                        if (_0x411cdb['DfFDs'](_0x411cdb['nzKji'], _0x411cdb['hVhlS'])) {
                            let _0x16cc87 = 'https://wq.jd.com/cubeactive/steprewardv3/' + functionId + '?activeId=489177&publishFlag=1&channel=7&' + body + '&sceneval=2&g_login_type=1&timestamp=' + Date['now']() + '&_=' + (Date['now']() + 0x2) + '&_ste=1';
                            const _0x40a270 = _0x13506e['yAiqd'](_0x13506e['yAiqd'](_0x13506e['yAiqd'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
                            _0x16cc87 += '&phoneid=' + _0x40a270;
                            _0x16cc87 += '&stepreward_jstoken=' + (Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
                            if (stk) {
                                _0x16cc87 += '&_stk=' + encodeURIComponent(stk);
                            }
                            return {
                                'url': _0x16cc87,
                                'headers': {
                                    'Host': _0x13506e['qQBxK'],
                                    'Cookie': cookie,
                                    'accept': _0x13506e['RoSHj'],
                                    'user-agent': 'jdpingou;iPhone;4.8.2;14.5.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                    'accept-language': _0x13506e['WeAcI'],
                                    'referer': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html?aid=489177'
                                }
                            };
                        } else {
                            console['log']('领取任务：' + _0x3a10df);
                            _0x3a10df = JSON['parse'](_0x3a10df);
                        }
                    }
                } catch (_0x2f23d2) {
                    $['logErr'](_0x2f23d2, _0x146b88);
                } finally {
                    _0xbdcd41(_0x3a10df);
                }
            } else {
                if (_0x3a10df[_0x2bca27['PJZjk']]['result'][_0x2bca27['wYYTK']]) {
                    console['log']('\x0a\x0a发起助力红包 成功：红包ID ' + _0x3a10df['data'][_0x2bca27['RqbdG']][_0x2bca27['wYYTK']]);
                    $['redPacketId']['push'](_0x3a10df[_0x2bca27['PJZjk']]['result']['redPacketId']);
                } else {
                    console['log']('\x0a\x0a发起助力红包 失败：' + _0x3a10df[_0x2bca27['PJZjk']][_0x2bca27['RqbdG']]['statusDesc']);
                }
            }
        });
    });
}
async function active(_0x4dea91) {
    var _0x434e1a = {
        'oVWhI': function(_0x3f4279, _0x3dabc7) {
            return _0x3f4279 === _0x3dabc7;
        },
        'GbDIb': function(_0x326989, _0x31531f) {
            return _0x326989 === _0x31531f;
        },
        'tTfza': 'reportCcTask',
        'AjOro': function(_0x4589be, _0x310200) {
            return _0x4589be(_0x310200);
        },
        'QGqJz': function(_0x3a7180, _0x2bc252) {
            return _0x3a7180 === _0x2bc252;
        },
        'djSFU': 'uFqtV',
        'PwVQG': 'cZgQe',
        'BuPKd': function(_0x31d390, _0x3a3dbd) {
            return _0x31d390 === _0x3a3dbd;
        },
        'wZaxN': 'aXOVL',
        'RIJWq': function(_0x225752, _0x5e027a, _0x19bb18) {
            return _0x225752(_0x5e027a, _0x19bb18);
        },
        'jbAmp': function(_0x279bc7, _0x161a34) {
            return _0x279bc7 === _0x161a34;
        },
        'PvVcM': 'NviqX',
        'OeouV': 'HjbTq'
    };
    const _0x1647f0 = await _0x434e1a['AjOro'](getTaskDetailForColor, _0x4dea91);
    if (_0x1647f0 && _0x434e1a['GbDIb'](_0x1647f0['code'], 0x0)) {
        if (_0x1647f0['data'] && _0x1647f0['data']['result']) {
            const {
                advertDetails
            } = _0x1647f0['data']['result'];
            for (let _0x21e4c5 of advertDetails) {
                if (_0x434e1a['QGqJz'](_0x434e1a['djSFU'], _0x434e1a['PwVQG'])) {
                    console['log']('券后9.9抽奖获得【优惠券】：' + data['result']['luckyDrawData']['discount'] + '元：' + data['result']['luckyDrawData']['prizeName'] + '，' + data['result']['luckyDrawData']['quotaDesc']);
                } else {
                    await $['wait'](0x3e8);
                    if (_0x21e4c5['id'] && _0x434e1a['BuPKd'](_0x21e4c5['status'], 0x0)) {
                        if ('aXOVL' !== _0x434e1a['wZaxN']) {
                            if (data) {
                                if (_0x434e1a['oVWhI'](type, '1') && _0x434e1a['GbDIb'](functionId, _0x434e1a['tTfza'])) console['log']('京东首页点击“领券”逛10s任务:' + data);
                            }
                        } else {
                            await _0x434e1a['RIJWq'](taskReportForColor, _0x4dea91, _0x21e4c5['id']);
                        }
                    }
                }
            }
        } else {
            if (_0x434e1a['jbAmp'](_0x434e1a['PvVcM'], _0x434e1a['OeouV'])) {
                $['logErr'](e, resp);
            } else {
                console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                $['msg']('' + $['name'], '', '手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
                if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            }
        }
    } else {
        console['log']('---具体任务详情---' + JSON['stringify'](_0x1647f0));
    }
}

function getTaskDetailForColor(_0x25cb14) {
    var _0x375abf = {
        'FGYVk': 'ITIlb',
        'ZmSwh': function(_0x17e67d, _0x410b92) {
            return _0x17e67d(_0x410b92);
        },
        'VhUbp': function(_0xb6a859, _0x9fd5dd, _0x3dba90) {
            return _0xb6a859(_0x9fd5dd, _0x3dba90);
        }
    };
    const _0x5a943c = {
        'clientInfo': {},
        'taskType': _0x25cb14
    };
    return new Promise(_0x436a6f => {
        $['post'](_0x375abf['VhUbp'](taskUrl, arguments['callee']['name']['toString'](), _0x5a943c), (_0xf8e6aa, _0x4e68aa, _0x5a943c) => {
            try {
                if (_0x375abf['FGYVk'] !== _0x375abf['FGYVk']) {
                    if (_0xf8e6aa) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xf8e6aa));
                    } else {
                        _0x5a943c = JSON['parse'](_0x5a943c);
                    }
                } else {
                    if (_0xf8e6aa) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xf8e6aa));
                    } else {
                        _0x5a943c = JSON['parse'](_0x5a943c);
                    }
                }
            } catch (_0x342893) {
                $['logErr'](_0x342893, _0x4e68aa);
            } finally {
                _0x375abf['ZmSwh'](_0x436a6f, _0x5a943c);
            }
        });
    });
}

function taskReportForColor(_0xf862d7, _0x28cc4d) {
    var _0x4fe049 = {
        'kIvsZ': function(_0x4b914a, _0x2ac0db) {
            return _0x4b914a !== _0x2ac0db;
        },
        'OiqYd': 'lkgVe',
        'HfJrB': 'lbfAd',
        'XfGZv': 'data',
        'goNjy': 'redPacketId',
        'azHpW': 'result',
        'UxrNf': function(_0x494dd4, _0x5c5d39, _0x2e0184) {
            return _0x494dd4(_0x5c5d39, _0x2e0184);
        },
        'LMqAP': function(_0x30f5cb, _0x4b766e) {
            return _0x30f5cb + _0x4b766e;
        }
    };
    const _0x32cfcd = {
        'taskType': _0xf862d7,
        'detailId': _0x28cc4d
    };
    _0x32cfcd['token'] = $['md5']($['md5'](_0x4fe049['LMqAP'](_0x4fe049['LMqAP']('j', JSON['stringify'](_0x32cfcd)), 'D')));
    return new Promise(_0x2c6f8d => {
        var _0x1f2865 = {
            'NQvBZ': _0x4fe049['XfGZv'],
            'amGzY': _0x4fe049['goNjy'],
            'XMVMP': _0x4fe049['azHpW']
        };
        $['post'](_0x4fe049['UxrNf'](taskUrl, arguments['callee']['name']['toString'](), _0x32cfcd), (_0x1f4050, _0x414dff, _0x32cfcd) => {
            try {
                if (_0x4fe049['kIvsZ'](_0x4fe049['OiqYd'], _0x4fe049['OiqYd'])) {
                    if (_0x32cfcd['result']['luckyDrawData']['redPacketId']) {
                        console['log']('券后9.9抽奖获得【红包】：' + _0x32cfcd['result']['luckyDrawData']['quota'] + '元');
                    } else {
                        console['log']('券后9.9抽奖获得【优惠券】：' + _0x32cfcd['result']['luckyDrawData']['discount'] + '元：' + _0x32cfcd['result']['luckyDrawData']['prizeName'] + '，' + _0x32cfcd['result']['luckyDrawData']['quotaDesc']);
                    }
                } else {
                    if (_0x1f4050) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x1f4050));
                    } else {
                        _0x32cfcd = JSON['parse'](_0x32cfcd);
                    }
                }
            } catch (_0x486fd6) {
                if (_0x4fe049['kIvsZ'](_0x4fe049['HfJrB'], _0x4fe049['HfJrB'])) {
                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console['log'](JSON['stringify'](_0x1f4050));
                } else {
                    $['logErr'](_0x486fd6, _0x414dff);
                }
            } finally {
                if (_0x4fe049['kIvsZ']('CuidH', 'eowQh')) {
                    _0x2c6f8d(_0x32cfcd);
                } else {
                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x32cfcd[_0x1f2865['NQvBZ']]['result'][_0x1f2865['amGzY']]);
                    $['redPacketId']['push'](_0x32cfcd[_0x1f2865['NQvBZ']][_0x1f2865['XMVMP']]['redPacketId']);
                }
            }
        });
    });
}

function receiveTaskRedpacket(_0xf66c5a) {
    var _0x116d97 = {
        'JKZNl': 'HYUmj',
        'rppyy': function(_0x5bc52d, _0x16dac0) {
            return _0x5bc52d !== _0x16dac0;
        },
        'dTkBL': 'vSkif',
        'RjXvl': function(_0x4676e9, _0x104b27) {
            return _0x4676e9 === _0x104b27;
        },
        'GcvGx': function(_0x407cbe, _0x58f758) {
            return _0x407cbe(_0x58f758);
        },
        'yfGKv': 'pfvTI',
        'UArKn': 'yJgtM',
        'Pcdqo': function(_0x5777c6, _0x281737, _0x2a9ba4) {
            return _0x5777c6(_0x281737, _0x2a9ba4);
        }
    };
    const _0x498235 = {
        'clientInfo': {},
        'taskType': _0xf66c5a
    };
    return new Promise(_0x45615d => {
        $['post'](_0x116d97['Pcdqo'](taskUrl, arguments['callee']['name']['toString'](), _0x498235), (_0x3b70db, _0xf7371f, _0x1fbba8) => {
            if ('HYUmj' !== _0x116d97['JKZNl']) {
                console['log']('\x0a获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
            } else {
                try {
                    if (_0x3b70db) {
                        if (_0x116d97['rppyy'](_0x116d97['dTkBL'], 'vSkif')) {
                            console['log']('助力异常：' + JSON['stringify'](_0x1fbba8));
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x3b70db));
                        }
                    } else {
                        if ('seEQm' !== 'seEQm') {
                            if (_0x3b70db) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x3b70db));
                            } else {
                                console['log']('领取任务：' + _0x1fbba8);
                                _0x1fbba8 = JSON['parse'](_0x1fbba8);
                            }
                        } else {
                            _0x1fbba8 = JSON['parse'](_0x1fbba8);
                            if (_0x1fbba8['data']['success'] && _0x116d97['RjXvl'](_0x1fbba8['data']['biz_code'], 0x0)) {
                                console['log']('红包领取成功，获得' + _0x1fbba8['data']['result']['discount'] + '元\x0a');
                                $['discount'] += _0x116d97['GcvGx'](Number, _0x1fbba8['data']['result']['discount']);
                            }
                        }
                    }
                } catch (_0x177dff) {
                    if (_0x116d97['RjXvl'](_0x116d97['yfGKv'], _0x116d97['yfGKv'])) {
                        $['logErr'](_0x177dff, _0xf7371f);
                    } else {
                        console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\x0a');
                    }
                } finally {
                    if (_0x116d97['RjXvl'](_0x116d97['UArKn'], _0x116d97['UArKn'])) {
                        _0x116d97['GcvGx'](_0x45615d, _0x1fbba8);
                    } else {
                        console['log']('' + JSON['stringify'](_0x3b70db));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                }
            }
        });
    });
}

function jinli_h5assist(_0x206488) {
    var _0x53935c = {
        'PNovx': 'data',
        'Nsneq': 'statusDesc',
        'yjpDD': function(_0x57f42e, _0xbe6f66) {
            return _0x57f42e !== _0xbe6f66;
        },
        'YVhix': 'SCMgL',
        'pdlrq': function(_0x266b72, _0x115c01) {
            return _0x266b72 === _0x115c01;
        },
        'fWHML': 'result',
        'WglGg': 'status',
        'kJmUh': 'MFPHs',
        'XbdJH': function(_0xffd580, _0x2e6232, _0x10ed5b) {
            return _0xffd580(_0x2e6232, _0x10ed5b);
        }
    };
    const _0x2e28ac = {
        'clientInfo': {},
        'redPacketId': _0x206488,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x4df9c7 = _0x53935c['XbdJH'](taskUrl, arguments['callee']['name']['toString'](), _0x2e28ac);
    return new Promise(_0x174ae0 => {
        var _0x45a1b8 = {
            'gAcPf': _0x53935c['PNovx'],
            'iVWeA': _0x53935c['Nsneq'],
            'QONdS': function(_0x292393, _0x12a567) {
                return _0x53935c['yjpDD'](_0x292393, _0x12a567);
            },
            'mSqIF': 'mjuVc',
            'pGrLN': _0x53935c['YVhix'],
            'wzQpv': function(_0x49d85e, _0x36b8c4) {
                return _0x53935c['pdlrq'](_0x49d85e, _0x36b8c4);
            },
            'YalAK': 'biz_code',
            'bxmeL': _0x53935c['fWHML'],
            'jNpoe': _0x53935c['WglGg'],
            'cAfEC': 'wyppl',
            'kTuKh': _0x53935c['kJmUh']
        };
        $['post'](_0x4df9c7, (_0x457b3a, _0x53e068, _0x5515f5) => {
            if (_0x45a1b8['QONdS'](_0x45a1b8['mSqIF'], _0x45a1b8['mSqIF'])) {
                cookiesArr['push'](jdCookieNode[item]);
            } else {
                try {
                    if (_0x457b3a) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x457b3a));
                    } else {
                        if (_0x45a1b8['pGrLN'] !== 'SCMgL') {
                            console['log']('---具体任务详情---' + JSON['stringify'](getTaskDetailForColorRes));
                        } else {
                            _0x5515f5 = JSON['parse'](_0x5515f5);
                            if (_0x5515f5 && _0x5515f5['data'] && _0x45a1b8['wzQpv'](_0x5515f5['data'][_0x45a1b8['YalAK']], 0x0)) {
                                console['log']('助力结果：' + _0x5515f5['data'][_0x45a1b8['bxmeL']][_0x45a1b8['iVWeA']]);
                                if (_0x5515f5[_0x45a1b8['gAcPf']]['result'][_0x45a1b8['jNpoe']] === 0x3) $['canHelp'] = ![];
                                if (_0x5515f5[_0x45a1b8['gAcPf']][_0x45a1b8['bxmeL']]['status'] === 0x9) $['canHelp'] = ![];
                            } else {
                                console['log']('助力异常：' + JSON['stringify'](_0x5515f5));
                            }
                        }
                    }
                } catch (_0x59660d) {
                    if (_0x45a1b8['cAfEC'] === _0x45a1b8['cAfEC']) {
                        $['logErr'](_0x59660d, _0x53e068);
                    } else {
                        console['log']('\n\n发起助力红包 失败：' + _0x5515f5[_0x45a1b8['gAcPf']]['result'][_0x45a1b8['iVWeA']]);
                    }
                } finally {
                    if (_0x45a1b8['QONdS'](_0x45a1b8['kTuKh'], _0x45a1b8['kTuKh'])) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x457b3a));
                    } else {
                        _0x174ae0();
                    }
                }
            }
        });
    });
}

function h5receiveRedpacket(_0x309e93) {
    var _0x2a640f = {
        'FMThz': function(_0x23e3fc, _0x85040c) {
            return _0x23e3fc(_0x85040c);
        },
        'pCQWz': 'dplFM',
        'wcmzg': 'MmNhq',
        'CdDwo': function(_0x389be4, _0x403660) {
            return _0x389be4 === _0x403660;
        },
        'rtkhZ': 'YGEpq',
        'eolPb': 'qLuPM',
        'rXGTE': 'biz_code',
        'CTaSg': function(_0x336bd8, _0x534a61) {
            return _0x336bd8 === _0x534a61;
        },
        'RiiuN': 'jabjH',
        'fBHxc': 'data',
        'YdIas': 'result',
        'MHBwG': function(_0x30a35e, _0x318dd9) {
            return _0x30a35e !== _0x318dd9;
        },
        'JZtyj': 'HJhUs',
        'sFYpX': function(_0xf2484e, _0x5b3af3) {
            return _0xf2484e !== _0x5b3af3;
        },
        'sAztf': 'zwGHt',
        'PtMFp': function(_0x73f474, _0x496550) {
            return _0x73f474 + _0x496550;
        },
        'fEZTK': function(_0xe51b77, _0xdd979c) {
            return _0xe51b77 + _0xdd979c;
        },
        'kRBeh': function(_0x2bd974, _0x29798a, _0x247bbd) {
            return _0x2bd974(_0x29798a, _0x247bbd);
        }
    };
    const _0x1418a8 = {
        'redPacketId': _0x309e93
    };
    _0x1418a8['token'] = $['md5']($['md5'](_0x2a640f['PtMFp'](_0x2a640f['fEZTK']('j', JSON['stringify'](_0x1418a8)), 'D')));
    const _0x33f206 = _0x2a640f['kRBeh'](taskUrl, arguments['callee']['name']['toString'](), _0x1418a8);
    return new Promise(_0x5bcd37 => {
        if (_0x2a640f['sFYpX'](_0x2a640f['sAztf'], _0x2a640f['sAztf'])) {
            url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x2a640f['FMThz'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
        } else {
            $['post'](_0x33f206, (_0xa162ec, _0x4900fc, _0x1418a8) => {
                try {
                    if (_0xa162ec) {
                        if (_0x2a640f['pCQWz'] !== _0x2a640f['wcmzg']) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0xa162ec));
                        } else {
                            $['logErr'](e, _0x4900fc);
                        }
                    } else {
                        if (_0x2a640f['CdDwo'](_0x2a640f['rtkhZ'], _0x2a640f['eolPb'])) {
                            _0x5bcd37(_0x1418a8);
                        } else {
                            _0x1418a8 = JSON['parse'](_0x1418a8);
                            if (_0x1418a8 && _0x1418a8['data'] && _0x1418a8['data'][_0x2a640f['rXGTE']] === 0x0) {
                                if (_0x2a640f['CTaSg'](_0x2a640f['RiiuN'], _0x2a640f['RiiuN'])) {
                                    console['log']('拆红包获得：' + _0x1418a8[_0x2a640f['fBHxc']][_0x2a640f['YdIas']]['discount'] + '元');
                                } else {
                                    $['logErr'](e, _0x4900fc);
                                }
                            } else {
                                console['log']('领红包失败：' + JSON['stringify'](_0x1418a8));
                            }
                        }
                    }
                } catch (_0x6d8cc9) {
                    $['logErr'](_0x6d8cc9, _0x4900fc);
                } finally {
                    if (_0x2a640f['MHBwG']('HJhUs', _0x2a640f['JZtyj'])) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xa162ec));
                    } else {
                        _0x5bcd37(_0x1418a8);
                    }
                }
            });
        }
    });
}

function h5launch() {
    var _0x473368 = {
        'OBZnO': 'yyyyMMdd',
        'DqdEH': 'JqeCa',
        'aaUQe': function(_0x32509d, _0x637f9d) {
            return _0x32509d === _0x637f9d;
        },
        'kwsLr': 'OpoET',
        'DfnCj': 'redPacketId',
        'QpowE': function(_0x9a098, _0x55fd1b) {
            return _0x9a098 !== _0x55fd1b;
        },
        'jIyrx': 'xRqms',
        'bziBO': 'fapVA'
    };
    const _0x49b330 = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x44d382 = taskUrl(arguments['callee']['name']['toString'](), _0x49b330);
    return new Promise(_0x52707e => {
        var _0x338d65 = {
            'eWxTU': _0x473368['OBZnO'],
            'XBMvH': function(_0x54029e, _0x4daee0) {
                return _0x54029e === _0x4daee0;
            },
            'SCuxa': _0x473368['DqdEH'],
            'FAKdl': function(_0x1d28ee, _0x41a2b0) {
                return _0x473368['aaUQe'](_0x1d28ee, _0x41a2b0);
            },
            'rMaQk': 'data',
            'TXCql': function(_0x223a23, _0x4f6d22) {
                return _0x223a23 !== _0x4f6d22;
            },
            'czBuD': _0x473368['kwsLr'],
            'VNhfB': 'result',
            'PiDDx': _0x473368['DfnCj'],
            'imjlY': function(_0x150b05, _0x9c8d58) {
                return _0x473368['QpowE'](_0x150b05, _0x9c8d58);
            },
            'oyMIt': _0x473368['jIyrx'],
            'HsEgK': _0x473368['bziBO'],
            'knPFU': function(_0x24a8f2, _0xc94c0) {
                return _0x24a8f2(_0xc94c0);
            }
        };
        $['post'](_0x44d382, (_0x109403, _0xbeedba, _0x32541a) => {
            var _0x2137e2 = {
                'oCrbW': function(_0x3748ad) {
                    return _0x3748ad();
                },
                'kyGhi': _0x338d65['eWxTU'],
                'CjheA': 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp'
            };
            try {
                if (_0x338d65['XBMvH']('JqeCa', _0x338d65['SCuxa'])) {
                    if (_0x109403) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x109403));
                    } else {
                        _0x32541a = JSON['parse'](_0x32541a);
                        if (_0x32541a && _0x32541a['data'] && _0x338d65['FAKdl'](_0x32541a['data']['biz_code'], 0x0)) {
                            if (_0x32541a[_0x338d65['rMaQk']]['result']['redPacketId']) {
                                if (_0x338d65['TXCql']('OpoET', _0x338d65['czBuD'])) {
                                    console['log']('领取任务：' + _0x32541a);
                                    _0x32541a = JSON['parse'](_0x32541a);
                                } else {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x32541a[_0x338d65['rMaQk']][_0x338d65['VNhfB']]['redPacketId']);
                                    $['redPacketId']['push'](_0x32541a[_0x338d65['rMaQk']][_0x338d65['VNhfB']][_0x338d65['PiDDx']]);
                                }
                            } else {
                                console['log']('\x0a\x0a发起助力红包 失败：' + _0x32541a[_0x338d65['rMaQk']][_0x338d65['VNhfB']]['statusDesc']);
                            }
                        } else {
                            console['log']('发起助力红包 失败：' + JSON['stringify'](_0x32541a));
                        }
                    }
                } else {
                    const _0x49d895 = 'strPin=' + strPin + '&joinDate=' + $['time'](_0x2137e2['kyGhi']);
                    const _0x293629 = taskCubeactiveUrl('EnrollFriend', _0x49d895, _0x2137e2['CjheA']);
                    $['get'](_0x293629, (_0x4711ba, _0x15e623, _0x884871) => {
                        _0x2137e2['oCrbW'](_0x52707e);
                    });
                }
            } catch (_0x1f4f19) {
                if (_0x338d65['imjlY'](_0x338d65['oyMIt'], _0x338d65['HsEgK'])) {
                    $['logErr'](_0x1f4f19, _0xbeedba);
                } else {
                    $['taskHomePageData'] = JSON['parse'](_0x32541a);
                }
            } finally {
                _0x338d65['knPFU'](_0x52707e, _0x32541a);
            }
        });
    });
}

function h5activityIndex() {
    var _0x277a0f = {
        'tXTYq': 'tunnel',
        'jSfJf': 'fxJbl',
        'UdHhC': function(_0x265376, _0x53b012) {
            return _0x265376 !== _0x53b012;
        },
        'wodQb': 'cOsqf',
        'NnseK': 'result',
        'bAffj': 'packetSum',
        'NZXSA': function(_0x52dc0f, _0x4f97ca) {
            return _0x52dc0f === _0x4f97ca;
        },
        'GceYq': 'XOVBo',
        'iBesi': 'xuPQv',
        'XQXpg': 'JUrne',
        'WbrmS': function(_0x5681e9) {
            return _0x5681e9();
        }
    };
    const _0x3b18fe = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x166463 = taskUrl(arguments['callee']['name']['toString'](), _0x3b18fe);
    return new Promise(_0x16829f => {
        var _0x1c59cf = {
            'ckAki': _0x277a0f['tXTYq'],
            'ATcQP': _0x277a0f['jSfJf'],
            'cjVbh': function(_0x444beb, _0x5084cb) {
                return _0x277a0f['UdHhC'](_0x444beb, _0x5084cb);
            },
            'mscBG': 'rRqPN',
            'wHJxI': _0x277a0f['wodQb'],
            'fjvXO': _0x277a0f['NnseK'],
            'CJUrc': 'data',
            'ltUVN': _0x277a0f['bAffj'],
            'JTsou': function(_0x30efb6, _0xce936a) {
                return _0x277a0f['NZXSA'](_0x30efb6, _0xce936a);
            },
            'MaFVZ': _0x277a0f['GceYq'],
            'QtUtP': _0x277a0f['iBesi'],
            'fTPgY': _0x277a0f['XQXpg'],
            'AHNaH': function(_0x5a6070) {
                return _0x277a0f['WbrmS'](_0x5a6070);
            }
        };
        $['post'](_0x166463, async (_0x329bb5, _0x2f2aec, _0x36c5b0) => {
            var _0xac536b = {
                'WgYUS': 'result',
                'pqKJf': 'assistants',
                'GgbqX': function(_0x3664f9, _0x11464d) {
                    return _0x3664f9(_0x11464d);
                },
                'IRusV': _0x1c59cf['ckAki']
            };
            try {
                if (_0x1c59cf['ATcQP'] === _0x1c59cf['ATcQP']) {
                    if (_0x329bb5) {
                        if (_0x1c59cf['cjVbh'](_0x1c59cf['mscBG'], _0x1c59cf['wHJxI'])) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x329bb5));
                        } else {
                            console['log']('' + JSON['stringify'](_0x329bb5));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        }
                    } else {
                        _0x36c5b0 = JSON['parse'](_0x36c5b0);
                        $['h5activityIndex'] = _0x36c5b0;
                        $['discount'] = 0x0;
                        if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x1c59cf['fjvXO']]) {
                            const _0x1f95a2 = $['h5activityIndex'][_0x1c59cf['CJUrc']]['result']['rewards'] || [];
                            for (let _0xbc936a of _0x1f95a2) {
                                $['discount'] += _0xbc936a[_0x1c59cf['ltUVN']];
                            }
                            if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                        }
                    }
                } else {
                    $['assistants'] = $['h5activityIndex']['data'][_0xac536b['WgYUS']][_0xac536b['pqKJf']]['length'] || 0x0;
                }
            } catch (_0xd3e00b) {
                if (_0x1c59cf['JTsou'](_0x1c59cf['MaFVZ'], _0x1c59cf['QtUtP'])) {
                    if (_0x329bb5) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x329bb5));
                    } else {
                        _0x36c5b0 = JSON['parse'](_0x36c5b0);
                    }
                } else {
                    $['logErr'](_0xd3e00b, _0x2f2aec);
                }
            } finally {
                if (_0x1c59cf['fTPgY'] === _0x1c59cf['fTPgY']) {
                    _0x1c59cf['AHNaH'](_0x16829f);
                } else {
                    const _0x170ed3 = _0xac536b['GgbqX'](require, _0xac536b['IRusV']);
                    const _0x10e14b = {
                        'https': _0x170ed3['httpsOverHttp']({
                            'proxy': {
                                'host': process['env']['TG_PROXY_HOST'],
                                'port': process['env']['TG_PROXY_PORT'] * 0x1
                            }
                        })
                    };
                    Object['assign'](_0x166463, {
                        'agent': _0x10e14b
                    });
                }
            }
        });
    });
}
async function doAppTask(_0x59ba47 = '1') {
    var _0x1e7c75 = {
        'aKFvw': 'CouponCenter',
        'lUtID': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'GtMJR': function(_0x11e1c0, _0x1ddce9, _0x54ef06, _0x1c297f) {
            return _0x11e1c0(_0x1ddce9, _0x54ef06, _0x1c297f);
        },
        'VadNx': 'ccgroup_ios_index_task',
        'ZrmtW': '727'
    };
    let _0x369918 = {
        'pageClickKey': _0x1e7c75['aKFvw'],
        'childActivityUrl': _0x1e7c75['lUtID'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x1e7c75['GtMJR'](getCcTaskList, 'getCcTaskList', _0x369918, _0x59ba47);
    _0x369918 = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': _0x1e7c75['VadNx'],
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'pageClickKey': 'CouponCenter',
        'lat': '',
        'taskId': _0x1e7c75['ZrmtW'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await _0x1e7c75['GtMJR'](getCcTaskList, 'reportCcTask', _0x369918, _0x59ba47);
}

function getCcTaskList(_0x51646c, _0x51ad8f, _0x40920b = '1') {
    var _0x18e71a = {
        'uVeBS': function(_0x2b243e, _0x4956fa) {
            return _0x2b243e(_0x4956fa);
        },
        'HfsIT': function(_0x265e21, _0x52e4d8) {
            return _0x265e21 === _0x52e4d8;
        },
        'ZQqxn': 'reportCcTask',
        'EBgdB': 'ScoCX',
        'msIlN': function(_0x540faf, _0x3db949) {
            return _0x540faf === _0x3db949;
        },
        'PIksd': 'ySqze',
        'GKMzl': 'VtUyW',
        'fTcVi': 'gzip, deflate, br',
        'KpBgi': 'zh-cn',
        'vhdAS': 'api.m.jd.com',
        'BCvYp': 'https://h5.m.jd.com',
        'kaEHJ': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'KhCDd': function(_0xd3d8f6, _0x292c92) {
            return _0xd3d8f6(_0x292c92);
        },
        'WHxyf': 'JDUA',
        'pkcEh': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    let _0x193f05 = '';
    return new Promise(_0x4e5392 => {
        var _0x17b8d9 = {
            'CFSrk': function(_0x3fc9e2, _0x142ce5) {
                return _0x18e71a['uVeBS'](_0x3fc9e2, _0x142ce5);
            },
            'IavyQ': function(_0x25757a, _0x1b6d0a) {
                return _0x18e71a['HfsIT'](_0x25757a, _0x1b6d0a);
            },
            'TeWkV': _0x18e71a['ZQqxn'],
            'XgRVt': _0x18e71a['EBgdB'],
            'cjgvG': function(_0x4f4926, _0x359f88) {
                return _0x18e71a['msIlN'](_0x4f4926, _0x359f88);
            },
            'zPSWr': _0x18e71a['PIksd'],
            'ZKRma': _0x18e71a['GKMzl']
        };
        if (_0x51646c === 'getCcTaskList') {
            _0x193f05 = 'https://api.m.jd.com/client.action?functionId=' + _0x51646c + '&body=' + escape(JSON['stringify'](_0x51ad8f)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
        } else if (_0x18e71a['msIlN'](_0x51646c, _0x18e71a['ZQqxn'])) {
            _0x193f05 = 'https://api.m.jd.com/client.action?functionId=' + _0x51646c + '&body=' + _0x18e71a['uVeBS'](escape, JSON['stringify'](_0x51ad8f)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
        }
        const _0x3034be = {
            'url': _0x193f05,
            'body': 'body=' + escape(JSON['stringify'](_0x51ad8f)),
            'headers': {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': _0x18e71a['fTcVi'],
                'Accept-Language': _0x18e71a['KpBgi'],
                'Connection': 'keep-alive',
                'Content-Length': '63',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': _0x18e71a['vhdAS'],
                'Origin': _0x18e71a['BCvYp'],
                'Cookie': cookie,
                'Referer': _0x18e71a['kaEHJ'],
                'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x18e71a['KhCDd'](require, './USER_AGENTS')['USER_AGENT'] : $['getdata']('JDUA') ? $['getdata'](_0x18e71a['WHxyf']) : _0x18e71a['pkcEh']
            }
        };
        $['post'](_0x3034be, async (_0x44cde4, _0x1b5ab2, _0x191d17) => {
            var _0xd3cc98 = {
                'xcJqW': function(_0x44513b, _0x5930a5) {
                    return _0x17b8d9['CFSrk'](_0x44513b, _0x5930a5);
                }
            };
            try {
                if (_0x44cde4) {
                    console['log']('' + JSON['stringify'](_0x44cde4));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x191d17) {
                        if (_0x40920b === '1' && _0x17b8d9['IavyQ'](_0x51646c, _0x17b8d9['TeWkV'])) console['log']('京东首页点击“领券”逛10s任务:' + _0x191d17);
                    }
                }
            } catch (_0x3b614a) {
                if ('ScoCX' !== _0x17b8d9['XgRVt']) {
                    _0xd3cc98['xcJqW'](_0x4e5392, _0x191d17);
                } else {
                    $['logErr'](_0x3b614a, _0x1b5ab2);
                }
            } finally {
                if (_0x17b8d9['cjgvG'](_0x17b8d9['zPSWr'], _0x17b8d9['ZKRma'])) {
                    if (_0x191d17) _0x191d17 = JSON['parse'](_0x191d17);
                } else {
                    _0x4e5392();
                }
            }
        });
    });
}

function getAuthorShareCode(_0x37e686 = 'http://adguard.b.freefrp.net/jd_red.json') {
    var _0x1b5404 = {
        'umeFj': function(_0x2800ec, _0xf5bbfa) {
            return _0x2800ec !== _0xf5bbfa;
        },
        'bwEfD': 'ZsMVT',
        'ffBiu': 'ilFZB',
        'onUCT': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x15cdb0 => {
        const _0x24e68e = {
            'url': _0x37e686 + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': _0x1b5404['onUCT']
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            const _0x236f62 = require('tunnel');
            const _0x3f7f80 = {
                'https': _0x236f62['httpsOverHttp']({
                    'proxy': {
                        'host': process['env']['TG_PROXY_HOST'],
                        'port': process['env']['TG_PROXY_PORT'] * 0x1
                    }
                })
            };
            Object['assign'](_0x24e68e, {
                'agent': _0x3f7f80
            });
        }
        $['get'](_0x24e68e, async (_0x105c03, _0x33ffd0, _0x3d1723) => {
            if (_0x1b5404['umeFj']('zxytq', _0x1b5404['bwEfD'])) {
                try {
                    if (_0x105c03) {} else {
                        if (_0x1b5404['umeFj'](_0x1b5404['ffBiu'], _0x1b5404['ffBiu'])) {
                            if (_0x105c03) {} else {
                                if (_0x3d1723) _0x3d1723 = JSON['parse'](_0x3d1723);
                            }
                        } else {
                            if (_0x3d1723) _0x3d1723 = JSON['parse'](_0x3d1723);
                        }
                    }
                } catch (_0x2a4fb0) {} finally {
                    _0x15cdb0(_0x3d1723);
                }
            } else {
                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                console['log'](JSON['stringify'](_0x105c03));
            }
        });
    });
}

function enrollFriend(_0x32ecf3 = 'KQSQrUhLbZ96UjqxmNNf4q69ZYAu-H_T6ib4RnThhaE') {
    var _0x4870e5 = {
        'rdTjB': function(_0x123f84, _0x324c80) {
            return _0x123f84 !== _0x324c80;
        },
        'OWRJX': 'aPTpC',
        'cMbHG': 'cPTfS',
        'Jifca': function(_0x40b382, _0x4dba76, _0x569324, _0xbcf8ba) {
            return _0x40b382(_0x4dba76, _0x569324, _0xbcf8ba);
        },
        'RJVvr': 'EnrollFriend',
        'UNQuS': 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp'
    };
    return new Promise(_0x56aa64 => {
        var _0x104d1b = {
            'MYhoD': function(_0x3b2c59) {
                return _0x3b2c59();
            }
        };
        if (_0x4870e5['rdTjB'](_0x4870e5['OWRJX'], _0x4870e5['cMbHG'])) {
            const _0xe7a3bd = 'strPin=' + _0x32ecf3 + '&joinDate=' + $['time']('yyyyMMdd');
            const _0xf67f2 = _0x4870e5['Jifca'](taskCubeactiveUrl, _0x4870e5['RJVvr'], _0xe7a3bd, _0x4870e5['UNQuS']);
            $['get'](_0xf67f2, (_0x4f9833, _0x4ce3eb, _0x55a3c2) => {
                _0x104d1b['MYhoD'](_0x56aa64);
            });
        } else {
            $['logErr'](e, resp);
        }
    });
}

function taskCubeactiveUrl(_0x318f12, _0x1fd205 = '', _0x4ed0df) {
    var _0x50318e = {
        'TSnqa': function(_0x1471a3, _0x1577c4) {
            return _0x1471a3 + _0x1577c4;
        },
        'LnDca': function(_0x4e2638, _0x143611) {
            return _0x4e2638 + _0x143611;
        },
        'PFavU': function(_0x38c788, _0x1c2c31) {
            return _0x38c788 + _0x1c2c31;
        },
        'wfZNg': function(_0x4a1c91, _0x38be57) {
            return _0x4a1c91 === _0x38be57;
        },
        'vtjcJ': 'dRVTy',
        'ZJtEY': function(_0x46b594, _0x472bf2) {
            return _0x46b594(_0x472bf2);
        },
        'Vdjou': '*/*',
        'xLvZx': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html?aid=489177'
    };
    let _0x3a1d6c = 'https://wq.jd.com/cubeactive/steprewardv3/' + _0x318f12 + '?activeId=489177&publishFlag=1&channel=7&' + _0x1fd205 + '&sceneval=2&g_login_type=1&timestamp=' + Date['now']() + '&_=' + _0x50318e['TSnqa'](Date['now'](), 0x2) + '&_ste=1';
    const _0xe8fdef = _0x50318e['TSnqa'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa) + Math['random']()['toString'](0x24)['slice'](0x2, 0xa);
    _0x3a1d6c += '&phoneid=' + _0xe8fdef;
    _0x3a1d6c += '&stepreward_jstoken=' + _0x50318e['LnDca'](_0x50318e['LnDca'](_0x50318e['PFavU'](Math['random']()['toString'](0x24)['slice'](0x2, 0xa), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa)), Math['random']()['toString'](0x24)['slice'](0x2, 0xa));
    if (_0x4ed0df) {
        if (_0x50318e['wfZNg'](_0x50318e['vtjcJ'], 'dRVTy')) {
            _0x3a1d6c += '&_stk=' + _0x50318e['ZJtEY'](encodeURIComponent, _0x4ed0df);
        } else {
            console['log']('领红包失败：' + JSON['stringify'](data));
        }
    }
    return {
        'url': _0x3a1d6c,
        'headers': {
            'Host': 'wq.jd.com',
            'Cookie': cookie,
            'accept': _0x50318e['Vdjou'],
            'user-agent': 'jdpingou;iPhone;4.8.2;14.5.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'accept-language': 'zh-cn',
            'referer': _0x50318e['xLvZx']
        }
    };
}

function taskUrl(_0x46c892, _0x41854d) {
    var _0x26664f = {
        'YjPVF': function(_0x5b89f8, _0xe3c9c1) {
            return _0x5b89f8 * _0xe3c9c1;
        },
        'GVBTd': 'api.m.jd.com',
        'PuVkd': 'application/x-www-form-urlencoded',
        'wOgOH': 'https://happy.m.jd.com',
        'cAzRG': 'gzip, deflate, br',
        'KEqfR': '*/*',
        'UzGor': 'JDUA',
        'Rzfxd': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'EHEYj': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x46c892 + '&loginType=2&client=jd_mp_h5&t=' + _0x26664f['YjPVF'](new Date()['getTime'](), 0x3e8),
        'body': 'body=' + JSON['stringify'](_0x41854d),
        'headers': {
            'Host': _0x26664f['GVBTd'],
            'Content-Type': _0x26664f['PuVkd'],
            'Origin': _0x26664f['wOgOH'],
            'Accept-Encoding': _0x26664f['cAzRG'],
            'Cookie': cookie,
            'Connection': 'keep-alive',
            'Accept': _0x26664f['KEqfR'],
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : require('./USER_AGENTS')['USER_AGENT'] : $['getdata'](_0x26664f['UzGor']) ? $['getdata']('JDUA') : _0x26664f['Rzfxd'],
            'Referer': _0x26664f['EHEYj'],
            'Content-Length': '36',
            'Accept-Language': 'zh-cn'
        }
    };
};
_0xod3 = 'jsjiami.com.v6'

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
// prettier-ignore
// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
