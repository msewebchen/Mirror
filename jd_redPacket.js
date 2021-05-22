/*
 * @Author: LXK9301
 * @Date: 2020-11-03 18:12:38
 * @Last Modified by: LXK9301
 * @Last Modified time: 2021-05-19 16:27:18
*/
/*
京东全民开红包
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
 *Progcessed By JSDec in 0.94s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x1ac0da => {
        cookiesArr['push'](jdCookieNode[_0x1ac0da]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x56a765 => _0x56a765['cookie'])]['filter'](_0x55aa41 => !!_0x55aa41);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0x305e31 = {
        'JKjdz': function(_0x9a1823, _0x506081) {
            return _0x9a1823 === _0x506081;
        },
        'BmLtR': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'EhkQZ': 'https://bean.m.jd.com/bean/signIndex.action',
        'ovuaD': function(_0x563fb4, _0xd4d152) {
            return _0x563fb4(_0xd4d152);
        },
        'tVjNS': 'http://adguard.b.freefrp.net/jd_red.json',
        'tYtYG': function(_0x27a9d1, _0x119e90) {
            return _0x27a9d1(_0x119e90);
        },
        'anEOK': 'http://adguard.b.freefrp.net/jd_red.json',
        'tvpTI': function(_0x556b08) {
            return _0x556b08();
        },
        'mzMvR': function(_0x46a817, _0xa1648b) {
            return _0x46a817 < _0xa1648b;
        },
        'TEMMd': 'OJiHs',
        'xHxzG': function(_0x572ea9, _0x4a931b) {
            return _0x572ea9 + _0x4a931b;
        },
        'IaiUb': function(_0x2cb637) {
            return _0x2cb637();
        },
        'fPdaF': function(_0xea2e16, _0x5f5cb7) {
            return _0xea2e16 < _0x5f5cb7;
        },
        'WFTud': function(_0x126a92, _0x5a280b) {
            return _0x126a92 === _0x5a280b;
        },
        'tfCXq': 'MzLEG',
        'RUZCX': 'hATJN',
        'qfKMF': function(_0x27ce94, _0x3a6b7a) {
            return _0x27ce94(_0x3a6b7a);
        },
        'YCQDi': function(_0x2c3966, _0x290963) {
            return _0x2c3966(_0x290963);
        },
        'RFsuc': function(_0x44c5c2, _0x28cbb1) {
            return _0x44c5c2 !== _0x28cbb1;
        },
        'tLMbd': 'TYNau',
        'qjXOG': function(_0x1d8056, _0x11010f) {
            return _0x1d8056(_0x11010f);
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x305e31['BmLtR'], 'https://bean.m.jd.com/bean/signIndex.action', {
            'open-url': _0x305e31['EhkQZ']
        });
        return;
    }
    let _0x105637 = await _0x305e31['ovuaD'](getAuthorShareCode, _0x305e31['tVjNS']),
        _0x3f8085 = await _0x305e31['tYtYG'](getAuthorShareCode, _0x305e31['anEOK']);
    if (!_0x105637) _0x105637 = await _0x305e31['tvpTI'](getAuthorShareCode);
    $['authorMyShareIds'] = [..._0x105637 || [], ..._0x3f8085 || []];
    for (let _0x10b90d = 0x0; _0x305e31['mzMvR'](_0x10b90d, cookiesArr['length']); _0x10b90d++) {
        if (_0x305e31['TEMMd'] !== _0x305e31['TEMMd']) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            if (cookiesArr[_0x10b90d]) {
                cookie = cookiesArr[_0x10b90d];
                $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $['index'] = _0x305e31['xHxzG'](_0x10b90d, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await TotalBean();
                console['log']('\n****开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '****\n');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                $['discount'] = 0x0;
                await _0x305e31['IaiUb'](redPacket);
                await _0x305e31['IaiUb'](showMsg);
            }
        }
    }
    for (let _0x2903bc = 0x0; _0x305e31['fPdaF'](_0x2903bc, cookiesArr['length']); _0x2903bc++) {
        if (_0x305e31['WFTud'](_0x305e31['tfCXq'], _0x305e31['RUZCX'])) {
            $['logErr'](e, resp);
        } else {
            cookie = cookiesArr[_0x2903bc];
            $['index'] = _0x2903bc + 0x1;
            $['UserName'] = _0x305e31['qfKMF'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['canHelp'] = !![];
            $['redPacketId'] = [...new Set($['redPacketId'])];
            if (cookiesArr && cookiesArr['length'] > 0x2) {
                console['log']('\x0a\x0a自己账号内部互助');
                for (let _0x35080c of $['redPacketId']) {
                    if ('ctCYy' !== 'ctCYy') {
                        console['log']('[' + _0x35080c['title'] + '] 功能未开发');
                    } else {
                        console['log']('账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给 ' + _0x35080c + ' 进行助力');
                        await _0x305e31['YCQDi'](jinli_h5assist, _0x35080c);
                        if (!$['canHelp']) {
                            console['log']('次数已用完或活动火爆，跳出助力');
                            break;
                        }
                    }
                }
            }
            if ($['canHelp']) {
                if (_0x305e31['RFsuc'](_0x305e31['tLMbd'], 'TYNau')) {
                    console['log'](item['title']['slice'](-0x6) + '   ' + (item['alreadyReceivedCount'] ? item['alreadyReceivedCount'] : 0x0) + '/' + item['requireCount'] + '      ' + (_0x305e31['JKjdz'](item['innerStatus'], 0x4) ? '是' : '否'));
                } else {
                    console['log']('\n\n有剩余助力机会则给作者lxk0301进行助力');
                    for (let _0x5c7de5 of $['authorMyShareIds'] || []) {
                        console['log']('\n账号 ' + $['index'] + ' ' + $['UserName'] + ' 开始给作者lxk0301 ' + _0x5c7de5 + ' 进行助力');
                        await _0x305e31['qjXOG'](jinli_h5assist, _0x5c7de5);
                        if (!$['canHelp']) {
                            console['log']('次数已用完，跳出助力');
                            break;
                        }
                    }
                }
            }
        }
    }
})()['catch'](_0x35fbe7 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x35fbe7 + '!', '');
})['finally'](() => {
    $['done']();
});
async function redPacket() {
    var _0xb3c524 = {
        'nOCzo': function(_0x1b41dc, _0x5ec1ce) {
            return _0x1b41dc(_0x5ec1ce);
        },
        'wtQdD': 'oJgtK',
        'BSNQE': '1|3|5|0|4|2',
        'WqElW': function(_0x5f0959) {
            return _0x5f0959();
        }
    };
    try {
        if (_0xb3c524['wtQdD'] !== 'oJgtK') {
            _0xb3c524['nOCzo'](resolve, data);
        } else {
            var _0x23926a = _0xb3c524['BSNQE']['split']('|'),
                _0x37ea8d = 0x0;
            while (!![]) {
                switch (_0x23926a[_0x37ea8d++]) {
                    case '0':
                        await _0xb3c524['WqElW'](h5activityIndex);
                        continue;
                    case '1':
                        await _0xb3c524['WqElW'](doLuckDrawFun);
                        continue;
                    case '2':
                        await h5activityIndex();
                        continue;
                    case '3':
                        await _0xb3c524['WqElW'](taskHomePage);
                        continue;
                    case '4':
                        await red();
                        continue;
                    case '5':
                        await _0xb3c524['WqElW'](doTask);
                        continue;
                }
                break;
            }
        }
    } catch (_0x514f11) {
        $['logErr'](_0x514f11);
    }
}

function showMsg() {
    console['log']('\x0a\x0a' + $['name'] + '获得红包：' + $['discount'] + '元\n\n');
}
async function doLuckDrawFun() {
    var _0x3e5f37 = {
        'JCknY': function(_0x586437, _0x133c12) {
            return _0x586437 < _0x133c12;
        },
        'KSdag': function(_0x3943fc) {
            return _0x3943fc();
        }
    };
    for (let _0x37e65b = 0x0; _0x3e5f37['JCknY'](_0x37e65b, 0x3); _0x37e65b++) {
        await _0x3e5f37['KSdag'](doLuckDrawEntrance);
    }
}

function doLuckDrawEntrance() {
    var _0x216ef9 = {
        'GyPsG': 'discount',
        'TftGB': function(_0x24bdad, _0x30b417) {
            return _0x24bdad > _0x30b417;
        },
        'Xrqpp': 'rewards',
        'AUsSl': function(_0x3c3616, _0x29e345) {
            return _0x3c3616 === _0x29e345;
        },
        'KGafr': 'RaenG',
        'ueepx': function(_0x58d5ce, _0x1676f6) {
            return _0x58d5ce !== _0x1676f6;
        },
        'XZEJd': 'AIqGe',
        'nQmlp': 'iHysE',
        'DaXIX': function(_0x760cdb, _0x289ad8) {
            return _0x760cdb === _0x289ad8;
        },
        'fYXLs': 'busiCode',
        'KMngd': 'lUWdY',
        'wETwe': 'CbHgy',
        'RSlZs': function(_0x49ed7a, _0x28af2f) {
            return _0x49ed7a !== _0x28af2f;
        },
        'eeFie': 'PbDWj',
        'gDZNx': 'mNLhz',
        'EWoAu': function(_0xe78bc) {
            return _0xe78bc();
        },
        'ExgJK': 'https://h5.m.jd.com',
        'mWZbZ': 'keep-alive',
        'xdCQJ': 'application/json, text/plain, */*',
        'mRYLf': 'jdapp;iPhone;9.5.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;model/iPhone11,8;addressid/2005183373;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'LTABO': 'https://h5.m.jd.com/babelDiy/Zeus/yj8mbcm6roENn7qhNdhiekyeqtd/index.html'
    };
    return new Promise(_0x4955e5 => {
        const _0x256314 = {
            'url': 'https://api.m.jd.com/client.action?functionId=doLuckDrawEntrance&body=%7B%22platformType%22%3A%221%22%7D&appid=XPMSGC2019&client=m&clientVersion=1.0.0&area=19_1601_50258_62858&geo=%5Bobject%20Object%5D&uuid=88732f840b77821b345bf07fd71f609e6ff12f43',
            'headers': {
                'Host': 'api.m.jd.com',
                'Origin': _0x216ef9['ExgJK'],
                'Cookie': cookie,
                'Content-Length': '0',
                'Connection': _0x216ef9['mWZbZ'],
                'Accept': _0x216ef9['xdCQJ'],
                'User-Agent': _0x216ef9['mRYLf'],
                'Accept-Language': 'zh-cn',
                'Referer': _0x216ef9['LTABO'],
                'Accept-Encoding': 'gzip, deflate, br'
            }
        };
        $['post'](_0x256314, async (_0x40d315, _0x238ae5, _0x48b5f3) => {
            var _0x5119d0 = {
                'OnUYL': function(_0x2539d7, _0x35ffb0) {
                    return _0x2539d7 === _0x35ffb0;
                },
                'LoFtY': 'data',
                'zjXnL': 'result',
                'LRcki': _0x216ef9['GyPsG'],
                'iGUsc': function(_0x3e3fa4) {
                    return _0x3e3fa4();
                },
                'XqEcn': 'false',
                'dqawM': function(_0xe09914, _0x471e63) {
                    return _0x216ef9['TftGB'](_0xe09914, _0x471e63);
                },
                'qGkSX': _0x216ef9['Xrqpp'],
                'sZAfY': 'packetSum'
            };
            if (_0x216ef9['AUsSl'](_0x216ef9['KGafr'], _0x216ef9['KGafr'])) {
                try {
                    if (_0x40d315) {
                        if (_0x216ef9['ueepx'](_0x216ef9['XZEJd'], _0x216ef9['nQmlp'])) {
                            console['log']('' + JSON['stringify'](_0x40d315));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            _0x48b5f3 = JSON['parse'](_0x48b5f3);
                            if (_0x48b5f3 && _0x48b5f3['data'] && _0x5119d0['OnUYL'](_0x48b5f3['data']['biz_code'], 0x0)) {
                                console['log']('拆红包获得：' + _0x48b5f3[_0x5119d0['LoFtY']][_0x5119d0['zjXnL']][_0x5119d0['LRcki']] + '元');
                            } else {
                                console['log']('领红包失败：' + JSON['stringify'](_0x48b5f3));
                            }
                        }
                    } else {
                        if (_0x48b5f3) {
                            _0x48b5f3 = JSON['parse'](_0x48b5f3);
                            if (_0x48b5f3['code'] === '0' && _0x216ef9['DaXIX'](_0x48b5f3[_0x216ef9['fYXLs']], '0')) {
                                if (_0x48b5f3['result']['luckyDrawData']['actId']) {
                                    if (_0x48b5f3['result']['luckyDrawData']['redPacketId']) {
                                        if (_0x216ef9['ueepx'](_0x216ef9['KMngd'], _0x216ef9['wETwe'])) {
                                            console['log']('券后9.9抽奖获得【红包】：' + _0x48b5f3['result']['luckyDrawData']['quota'] + '元');
                                        } else {
                                            _0x5119d0['iGUsc'](_0x4955e5);
                                        }
                                    } else {
                                        if (_0x216ef9['RSlZs'](_0x216ef9['eeFie'], _0x216ef9['eeFie'])) {
                                            $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
                                        } else {
                                            console['log']('券后9.9抽奖获得【优惠券】：' + _0x48b5f3['result']['luckyDrawData']['discount'] + '元：' + _0x48b5f3['result']['luckyDrawData']['prizeName'] + '，' + _0x48b5f3['result']['luckyDrawData']['quotaDesc']);
                                        }
                                    }
                                } else {
                                    if ('lVsWm' === 'lVsWm') {
                                        console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\n');
                                    } else {
                                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                        console['log'](JSON['stringify'](_0x40d315));
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x4e1f05) {
                    if (_0x216ef9['RSlZs'](_0x216ef9['gDZNx'], _0x216ef9['gDZNx'])) {
                        Object['keys'](jdCookieNode)['forEach'](_0xd4875d => {
                            cookiesArr['push'](jdCookieNode[_0xd4875d]);
                        });
                        if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === _0x5119d0['XqEcn']) console['log'] = () => {};
                        if (_0x5119d0['dqawM'](JSON['stringify'](process['env'])['indexOf']('GITHUB'), -0x1)) process['exit'](0x0);
                    } else {
                        $['logErr'](_0x4e1f05, _0x238ae5);
                    }
                } finally {
                    _0x216ef9['EWoAu'](_0x4955e5);
                }
            } else {
                const _0x5cb5c1 = $['h5activityIndex'][_0x5119d0['LoFtY']]['result'][_0x5119d0['qGkSX']] || [];
                for (let _0x1e6a92 of _0x5cb5c1) {
                    $['discount'] += _0x1e6a92[_0x5119d0['sZAfY']];
                }
                if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
            }
        });
    });
}
async function doTask() {
    var _0x1a9c0f = {
        'epVjQ': function(_0x3e9711, _0x10e8ab) {
            return _0x3e9711 === _0x10e8ab;
        },
        'eRNAV': 'kNXdp',
        'sSUsy': function(_0x1d07be, _0x372f69) {
            return _0x1d07be > _0x372f69;
        },
        'hATRx': function(_0x3bc8cc, _0x4d7b1e) {
            return _0x3bc8cc === _0x4d7b1e;
        },
        'JfLfU': function(_0x3a361c, _0x173078) {
            return _0x3a361c(_0x173078);
        },
        'VVCLz': function(_0xe575c, _0x175fb7) {
            return _0xe575c !== _0x175fb7;
        },
        'aZnkv': 'IpSSj',
        'yKaVV': function(_0x2b10d1, _0x2a44a6) {
            return _0x2b10d1 !== _0x2a44a6;
        },
        'bYSeK': function(_0x56f23b, _0x706e46) {
            return _0x56f23b(_0x706e46);
        },
        'HnYhH': function(_0x42e8e9, _0x4251d5) {
            return _0x42e8e9(_0x4251d5);
        },
        'HnApn': function(_0x451918, _0x31bb1c) {
            return _0x451918(_0x31bb1c);
        },
        'qAqnF': function(_0x368d63, _0x10ef0c) {
            return _0x368d63 === _0x10ef0c;
        },
        'GvXcu': function(_0x1c105c) {
            return _0x1c105c();
        }
    };
    if ($['taskHomePageData'] && _0x1a9c0f['epVjQ']($['taskHomePageData']['code'], 0x0)) {
        if (_0x1a9c0f['eRNAV'] === _0x1a9c0f['eRNAV']) {
            $['taskInfo'] = $['taskHomePageData']['data']['result']['taskInfos'];
            if ($['taskInfo'] && _0x1a9c0f['sSUsy']($['taskInfo']['length'], 0x0)) {
                console['log']('    任务     状态  红包是否领取');
                for (let _0x1f2c85 of $['taskInfo']) {
                    console['log'](_0x1f2c85['title']['slice'](-0x6) + '   ' + (_0x1f2c85['alreadyReceivedCount'] ? _0x1f2c85['alreadyReceivedCount'] : 0x0) + '/' + _0x1f2c85['requireCount'] + '      ' + (_0x1a9c0f['epVjQ'](_0x1f2c85['innerStatus'], 0x4) ? '是' : '否'));
                }
                for (let _0x237b9e of $['taskInfo']) {
                    if (_0x237b9e['innerStatus'] === 0x4) {
                        console['log']('[' + _0x237b9e['title'] + '] 已经领取奖励');
                    } else if (_0x1a9c0f['hATRx'](_0x237b9e['innerStatus'], 0x3)) {
                        await _0x1a9c0f['JfLfU'](receiveTaskRedpacket, _0x237b9e['taskType']);
                    } else if (_0x1a9c0f['hATRx'](_0x237b9e['innerStatus'], 0x2)) {
                        if (_0x1a9c0f['VVCLz'](_0x1a9c0f['aZnkv'], _0x1a9c0f['aZnkv'])) {
                            console['log']('[' + _0x237b9e['title'] + '] 已经领取奖励');
                        } else {
                            if (_0x1a9c0f['yKaVV'](_0x237b9e['taskType'], 0x0) && _0x1a9c0f['yKaVV'](_0x237b9e['taskType'], 0x1)) {
                                console['log']('开始做【' + _0x237b9e['title'] + '】任务');
                                await _0x1a9c0f['bYSeK'](active, _0x237b9e['taskType']);
                                console['log']('开始领取【' + _0x237b9e['title'] + '】任务所得红包奖励');
                                await receiveTaskRedpacket(_0x237b9e['taskType']);
                            } else if (_0x1a9c0f['hATRx'](_0x237b9e['taskType'], 0x1)) {
                                console['log']('开始做【' + _0x237b9e['title'] + '】任务');
                                await doAppTask();
                            } else {
                                console['log']('[' + _0x237b9e['title'] + '] 功能未开发');
                            }
                        }
                    } else if (_0x1a9c0f['yKaVV'](_0x237b9e['innerStatus'], 0x4)) {
                        console['log']('\n开始领取【' + _0x237b9e['title'] + '】任务');
                        await _0x1a9c0f['HnYhH'](startTask, _0x237b9e['taskType']);
                        if (_0x1a9c0f['yKaVV'](_0x237b9e['taskType'], 0x0) && _0x1a9c0f['yKaVV'](_0x237b9e['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x237b9e['title'] + '】任务');
                            await active(_0x237b9e['taskType']);
                            console['log']('开始领取【' + _0x237b9e['title'] + '】任务所得红包奖励');
                            await _0x1a9c0f['HnApn'](receiveTaskRedpacket, _0x237b9e['taskType']);
                        } else if (_0x1a9c0f['qAqnF'](_0x237b9e['taskType'], 0x1)) {
                            console['log']('开始做【' + _0x237b9e['title'] + '】任务');
                            await _0x1a9c0f['GvXcu'](doAppTask);
                        } else {
                            console['log']('[' + _0x237b9e['title'] + '] 功能未开发');
                        }
                    }
                }
            }
        } else {
            console['log']('领红包失败：' + JSON['stringify'](data));
        }
    } else {
        console['log']('\x0a获取任务列表异常：' + JSON['stringify']($['taskHomePageData']) + '\x0a');
    }
}
async function red() {
    var _0x137a64 = {
        'gOxfX': 'biz_msg',
        'UVQdA': 'result',
        'TRiAN': 'data',
        'jLQtp': 'rewards',
        'GhrSB': 'assistants',
        'uDZcn': 'gKdZH',
        'Omvit': function(_0x1a2ec3, _0x4d4bf0) {
            return _0x1a2ec3 === _0x4d4bf0;
        },
        'rgGRI': 'biz_code',
        'ylKbk': function(_0x598d29) {
            return _0x598d29();
        },
        'oKHKJ': function(_0x3bd602, _0x5d0abc) {
            return _0x3bd602 !== _0x5d0abc;
        },
        'DTvGz': 'qwXyO',
        'mUeKC': 'redpacketInfo',
        'cJEne': 'requireAssistNum',
        'gMsQJ': function(_0x430c2a, _0x499ed9) {
            return _0x430c2a + _0x499ed9;
        },
        'FSPLG': 'waitOpenTimes',
        'DUcje': function(_0x21f93a, _0x29d312) {
            return _0x21f93a > _0x29d312;
        },
        'SlVvy': 'HUqtE',
        'srmEk': function(_0x1080c0, _0x5c6947) {
            return _0x1080c0(_0x5c6947);
        }
    };
    $['hasSendNumber'] = 0x0;
    $['assistants'] = 0x0;
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x137a64['UVQdA']]) {
        const _0x3124dd = $['h5activityIndex'][_0x137a64['TRiAN']][_0x137a64['UVQdA']][_0x137a64['jLQtp']] || [];
        $['hasSendNumber'] = $['h5activityIndex'][_0x137a64['TRiAN']]['result']['hasSendNumber'];
        if ($['h5activityIndex'][_0x137a64['TRiAN']][_0x137a64['UVQdA']][_0x137a64['GhrSB']]) {
            if ('EniQI' === _0x137a64['uDZcn']) {
                console['log']('\x0a' + $['h5activityIndex']['data'][_0x137a64['gOxfX']] + '\x0a');
            } else {
                $['assistants'] = $['h5activityIndex'][_0x137a64['TRiAN']][_0x137a64['UVQdA']][_0x137a64['GhrSB']]['length'] || 0x0;
            }
        }
    }
    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x137a64['Omvit']($['h5activityIndex']['data'][_0x137a64['rgGRI']], 0x2712)) {
        await _0x137a64['ylKbk'](h5launch);
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && _0x137a64['Omvit']($['h5activityIndex']['data'][_0x137a64['rgGRI']], 0x4e21)) {
        if (_0x137a64['oKHKJ']('jieNB', _0x137a64['DTvGz'])) {
            const _0x597502 = $['h5activityIndex'][_0x137a64['TRiAN']][_0x137a64['UVQdA']][_0x137a64['mUeKC']]['id'];
            if (_0x597502) $['redPacketId']['push'](_0x597502);
            console['log']('\x0a\x0a当前待拆红包ID:' + $['h5activityIndex'][_0x137a64['TRiAN']]['result'][_0x137a64['mUeKC']]['id'] + '，进度：再邀' + $['h5activityIndex'][_0x137a64['TRiAN']][_0x137a64['UVQdA']][_0x137a64['cJEne']] + '个好友，开第' + _0x137a64['gMsQJ']($['hasSendNumber'], 0x1) + '个红包。当前已拆红包：' + $['hasSendNumber'] + '个，剩余' + $['h5activityIndex']['data']['result']['remainRedpacketNumber'] + '个红包待开，已有' + $['assistants'] + '好友助力\n\n');
            const _0x4ee041 = $['h5activityIndex'][_0x137a64['TRiAN']]['result'][_0x137a64['mUeKC']][_0x137a64['FSPLG']] || 0x0;
            console['log']('当前可拆红包个数：' + _0x4ee041);
            if (_0x137a64['DUcje'](_0x4ee041, 0x0)) {
                for (let _0x84b2e1 = 0x0; _0x84b2e1 < new Array(_0x4ee041)['fill']('')['length']; _0x84b2e1++) {
                    if (_0x137a64['Omvit'](_0x137a64['SlVvy'], 'HUqtE')) {
                        if (!_0x597502) break;
                        await _0x137a64['srmEk'](h5receiveRedpacket, _0x597502);
                        await $['wait'](0x1f4);
                    } else {
                        console['log']('领取任务：' + data);
                        data = JSON['parse'](data);
                    }
                }
            }
        } else {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        }
    } else if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data'][_0x137a64['rgGRI']] === 0x4e22) {
        console['log']('\x0a' + $['h5activityIndex']['data']['biz_msg'] + '\x0a');
    }
}

function taskHomePage() {
    var _0x2fe688 = {
        'ShgZE': function(_0x306ac9, _0x52868f) {
            return _0x306ac9 === _0x52868f;
        },
        'nukFf': function(_0x53fadf, _0x5144ba) {
            return _0x53fadf(_0x5144ba);
        }
    };
    return new Promise(_0x539717 => {
        $['post'](taskUrl(arguments['callee']['name']['toString'](), {
            'clientInfo': {}
        }), (_0x397d59, _0x20dd0d, _0x3224b2) => {
            try {
                if (_0x2fe688['ShgZE']('psTRt', 'jQllN')) {
                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console['log'](JSON['stringify'](_0x397d59));
                } else {
                    if (_0x397d59) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x397d59));
                    } else {
                        $['taskHomePageData'] = JSON['parse'](_0x3224b2);
                    }
                }
            } catch (_0x481862) {
                $['logErr'](_0x481862, _0x20dd0d);
            } finally {
                _0x2fe688['nukFf'](_0x539717, _0x3224b2);
            }
        });
    });
}

function startTask(_0x34716e) {
    var _0x5da668 = {
        'QTTKG': function(_0x159519, _0x387792) {
            return _0x159519 === _0x387792;
        },
        'AJLMW': 'data',
        'VGmBu': 'status',
        'NPpEr': 'MktyU',
        'SSHUq': function(_0x59d51f, _0x5792cd) {
            return _0x59d51f === _0x5792cd;
        },
        'OTQzd': 'rnKrm',
        'dTIgQ': 'sBGRj',
        'UibCa': function(_0x45f372, _0x443e87, _0x4e7733) {
            return _0x45f372(_0x443e87, _0x4e7733);
        },
        'YRBfA': function(_0x47406c, _0x3f6e54) {
            return _0x47406c + _0x3f6e54;
        }
    };
    let _0x47b7dd = {
        'taskType': _0x34716e
    };
    _0x47b7dd['token'] = $['md5']($['md5'](_0x5da668['YRBfA']('j' + JSON['stringify'](_0x47b7dd), 'D')));
    return new Promise(_0x30e5e6 => {
        $['post'](_0x5da668['UibCa'](taskUrl, arguments['callee']['name']['toString'](), _0x47b7dd), (_0xe98871, _0x4b9be5, _0x47b7dd) => {
            var _0x2d5d15 = {
                'euOVB': function(_0x4c683a, _0xd60336) {
                    return _0x4c683a(_0xd60336);
                },
                'ZGSWX': function(_0x33440d, _0x19854e) {
                    return _0x5da668['QTTKG'](_0x33440d, _0x19854e);
                },
                'wuJwo': _0x5da668['AJLMW'],
                'kWUFg': 'result',
                'wGeIu': _0x5da668['VGmBu']
            };
            try {
                if (_0xe98871) {
                    if (_0x5da668['QTTKG'](_0x5da668['NPpEr'], 'GMZyP')) {
                        if (_0xe98871) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0xe98871));
                        } else {
                            _0x47b7dd = JSON['parse'](_0x47b7dd);
                            if (_0x47b7dd['data']['success'] && _0x47b7dd['data']['biz_code'] === 0x0) {
                                console['log']('红包领取成功，获得' + _0x47b7dd['data']['result']['discount'] + '元\x0a');
                                $['discount'] += _0x2d5d15['euOVB'](Number, _0x47b7dd['data']['result']['discount']);
                            }
                        }
                    } else {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xe98871));
                    }
                } else {
                    if (_0x5da668['QTTKG']('gkjkR', 'gkjkR')) {
                        console['log']('领取任务：' + _0x47b7dd);
                        _0x47b7dd = JSON['parse'](_0x47b7dd);
                    } else {
                        _0x47b7dd = JSON['parse'](_0x47b7dd);
                        if (_0x47b7dd && _0x47b7dd['data'] && _0x2d5d15['ZGSWX'](_0x47b7dd['data']['biz_code'], 0x0)) {
                            console['log']('助力结果：' + _0x47b7dd[_0x2d5d15['wuJwo']]['result']['statusDesc']);
                            if (_0x2d5d15['ZGSWX'](_0x47b7dd[_0x2d5d15['wuJwo']][_0x2d5d15['kWUFg']][_0x2d5d15['wGeIu']], 0x3)) $['canHelp'] = ![];
                            if (_0x2d5d15['ZGSWX'](_0x47b7dd[_0x2d5d15['wuJwo']][_0x2d5d15['kWUFg']][_0x2d5d15['wGeIu']], 0x9)) $['canHelp'] = ![];
                        } else {
                            console['log']('助力异常：' + JSON['stringify'](_0x47b7dd));
                        }
                    }
                }
            } catch (_0x308497) {
                $['logErr'](_0x308497, _0x4b9be5);
            } finally {
                if (_0x5da668['SSHUq'](_0x5da668['OTQzd'], _0x5da668['dTIgQ'])) {
                    console['log']('券后9.9抽奖获失败：今日3次抽奖机会已用完\x0a');
                } else {
                    _0x30e5e6(_0x47b7dd);
                }
            }
        });
    });
}
async function active(_0x6697fc) {
    var _0x140e8e = {
        'ZzHbG': function(_0x2a2ab9, _0x41324f) {
            return _0x2a2ab9 === _0x41324f;
        },
        'PwAXQ': function(_0x5e1b69, _0xaa029) {
            return _0x5e1b69(_0xaa029);
        },
        'rRDhr': function(_0xcc4bbb, _0x4b2fb2, _0x1988c5) {
            return _0xcc4bbb(_0x4b2fb2, _0x1988c5);
        },
        'vpmUr': function(_0x53c6c3, _0x3fc78d) {
            return _0x53c6c3 !== _0x3fc78d;
        },
        'sPUno': 'KjNSk',
        'hNZwt': '手动进入app内检查\x0a是否存在[从京豆首页进领券中心逛30秒]的任务\x0a如存在,请手动完成再运行脚本',
        'ZbVXx': 'qujJC'
    };
    const _0x27b9a5 = await _0x140e8e['PwAXQ'](getTaskDetailForColor, _0x6697fc);
    if (_0x27b9a5 && _0x140e8e['ZzHbG'](_0x27b9a5['code'], 0x0)) {
        if (_0x27b9a5['data'] && _0x27b9a5['data']['result']) {
            const {
                advertDetails
            } = _0x27b9a5['data']['result'];
            for (let _0x250d99 of advertDetails) {
                await $['wait'](0x3e8);
                if (_0x250d99['id'] && _0x140e8e['ZzHbG'](_0x250d99['status'], 0x0)) {
                    await _0x140e8e['rRDhr'](taskReportForColor, _0x6697fc, _0x250d99['id']);
                }
            }
        } else {
            if (_0x140e8e['vpmUr'](_0x140e8e['sPUno'], 'udFuX')) {
                console['log']('任务列表为空,手动进入app内检查 是否存在[从京豆首页进领券中心逛30秒]的任务,如存在,请手动完成再运行脚本');
                $['msg']('' + $['name'], '', _0x140e8e['hNZwt']);
                if ($['isNode']()) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '执行脚本出现异常\n请手动进入app内检查\n是否存在[从京豆首页进领券中心逛30秒]的任务\n如存在,请手动完成再运行脚本');
            } else {
                console['log']('券后9.9抽奖获得【红包】：' + data['result']['luckyDrawData']['quota'] + '元');
            }
        }
    } else {
        if (_0x140e8e['ZzHbG'](_0x140e8e['ZbVXx'], 'qujJC')) {
            console['log']('---具体任务详情---' + JSON['stringify'](_0x27b9a5));
        } else {
            if (type === '1' && _0x140e8e['ZzHbG'](functionId, 'reportCcTask')) console['log']('京东首页点击“领券”逛10s任务:' + data);
        }
    }
}

function getTaskDetailForColor(_0x378db5) {
    var _0x5d8004 = {
        'JmACV': 'yqcjA',
        'JWcGn': 'Pttzr',
        'GgNnm': 'PywAn',
        'kZztj': function(_0x52d591, _0x5f63f2, _0x226878) {
            return _0x52d591(_0x5f63f2, _0x226878);
        }
    };
    const _0x2e19f3 = {
        'clientInfo': {},
        'taskType': _0x378db5
    };
    return new Promise(_0xf74d17 => {
        var _0x3cee80 = {
            'OukZx': 'QSmYh',
            'siLsm': function(_0xcb6d41, _0x2290d7) {
                return _0xcb6d41 === _0x2290d7;
            },
            'cuXtQ': _0x5d8004['JmACV'],
            'OsSMN': function(_0x556118, _0xfcd0e6) {
                return _0x556118 !== _0xfcd0e6;
            },
            'tdXiP': _0x5d8004['JWcGn'],
            'FyzIB': _0x5d8004['GgNnm']
        };
        $['post'](_0x5d8004['kZztj'](taskUrl, arguments['callee']['name']['toString'](), _0x2e19f3), (_0xaa3ba3, _0x3c991b, _0x2e19f3) => {
            try {
                if (_0x3cee80['OukZx'] !== 'QSmYh') {
                    _0xf74d17(_0x2e19f3);
                } else {
                    if (_0xaa3ba3) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0xaa3ba3));
                    } else {
                        if (_0x3cee80['siLsm']('yqcjA', _0x3cee80['cuXtQ'])) {
                            _0x2e19f3 = JSON['parse'](_0x2e19f3);
                        } else {
                            _0xf74d17();
                        }
                    }
                }
            } catch (_0x3e7eba) {
                if (_0x3cee80['OsSMN'](_0x3cee80['tdXiP'], _0x3cee80['FyzIB'])) {
                    $['logErr'](_0x3e7eba, _0x3c991b);
                } else {
                    $['taskHomePageData'] = JSON['parse'](_0x2e19f3);
                }
            } finally {
                _0xf74d17(_0x2e19f3);
            }
        });
    });
}

function taskReportForColor(_0x5d6fa6, _0x2a3ca9) {
    var _0x5d1e2f = {
        'SuBjO': function(_0x38f4fc, _0x41e1d8) {
            return _0x38f4fc(_0x41e1d8);
        },
        'tPIkz': function(_0xc44d9c, _0x3b3acf) {
            return _0xc44d9c !== _0x3b3acf;
        },
        'nCZta': 'iiDQz',
        'slXSy': 'kzhNl'
    };
    const _0x5e54ab = {
        'taskType': _0x5d6fa6,
        'detailId': _0x2a3ca9
    };
    _0x5e54ab['token'] = $['md5']($['md5']('j' + JSON['stringify'](_0x5e54ab) + 'D'));
    return new Promise(_0x2ea75d => {
        var _0xfa67e8 = {
            'TkdPE': function(_0x1c8520, _0x1df17d) {
                return _0x5d1e2f['SuBjO'](_0x1c8520, _0x1df17d);
            },
            'nHhmn': function(_0xd632a5, _0x293207) {
                return _0x5d1e2f['tPIkz'](_0xd632a5, _0x293207);
            },
            'XHIJA': 'gCSHR',
            'WIpSR': _0x5d1e2f['nCZta'],
            'SRryp': function(_0x51066d, _0x37c2b5) {
                return _0x51066d !== _0x37c2b5;
            },
            'tNUpC': _0x5d1e2f['slXSy'],
            'sxueH': function(_0x3cf84f, _0x14b6a9) {
                return _0x5d1e2f['SuBjO'](_0x3cf84f, _0x14b6a9);
            }
        };
        $['post'](taskUrl(arguments['callee']['name']['toString'](), _0x5e54ab), (_0x2f6d36, _0x3be1b1, _0x5e54ab) => {
            var _0x2e7bd2 = {
                'LdNoK': function(_0x165b7d, _0x509349) {
                    return _0xfa67e8['TkdPE'](_0x165b7d, _0x509349);
                }
            };
            if (_0xfa67e8['nHhmn']('DzRqZ', 'DzRqZ')) {
                $['logErr'](e, _0x3be1b1);
            } else {
                try {
                    if (_0x2f6d36) {
                        if (_0xfa67e8['XHIJA'] === _0xfa67e8['WIpSR']) {
                            if (_0x2f6d36) {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x2f6d36));
                            } else {
                                console['log']('领取任务：' + _0x5e54ab);
                                _0x5e54ab = JSON['parse'](_0x5e54ab);
                            }
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x2f6d36));
                        }
                    } else {
                        _0x5e54ab = JSON['parse'](_0x5e54ab);
                    }
                } catch (_0x1594eb) {
                    if (_0xfa67e8['SRryp']('kzhNl', _0xfa67e8['tNUpC'])) {
                        _0x2e7bd2['LdNoK'](_0x2ea75d, _0x5e54ab);
                    } else {
                        $['logErr'](_0x1594eb, _0x3be1b1);
                    }
                } finally {
                    _0xfa67e8['sxueH'](_0x2ea75d, _0x5e54ab);
                }
            }
        });
    });
}

function receiveTaskRedpacket(_0x3ea2b7) {
    var _0x91a395 = {
        'yRdlz': 'EhknJ',
        'oaEIh': function(_0xd2f60, _0x3580bd) {
            return _0xd2f60 !== _0x3580bd;
        },
        'tgXEH': function(_0x136066, _0x536db1) {
            return _0x136066(_0x536db1);
        },
        'PCHYD': function(_0x232949, _0x553b1e) {
            return _0x232949 === _0x553b1e;
        },
        'exalm': 'evMqz'
    };
    const _0x6fe442 = {
        'clientInfo': {},
        'taskType': _0x3ea2b7
    };
    return new Promise(_0x61195 => {
        var _0x5a6444 = {
            'KSHkZ': 'data',
            'PUUOW': function(_0x4f70d4, _0x4b5c62) {
                return _0x4f70d4 === _0x4b5c62;
            },
            'BFltu': _0x91a395['yRdlz'],
            'BUSbV': function(_0x581f7b, _0x46ccef) {
                return _0x91a395['oaEIh'](_0x581f7b, _0x46ccef);
            },
            'Tytxk': 'Ddhku',
            'NFgPz': function(_0x1c86b7, _0x311adf) {
                return _0x91a395['tgXEH'](_0x1c86b7, _0x311adf);
            },
            'smJIg': 'CoXav',
            'awMrG': function(_0x122f0a, _0x3a4655) {
                return _0x122f0a(_0x3a4655);
            }
        };
        if (_0x91a395['PCHYD']('evMqz', _0x91a395['exalm'])) {
            $['post'](taskUrl(arguments['callee']['name']['toString'](), _0x6fe442), (_0x195b0f, _0x29c10b, _0x20a294) => {
                var _0xa0a000 = {
                    'wCXii': _0x5a6444['KSHkZ'],
                    'oiPLl': 'result'
                };
                if (_0x5a6444['PUUOW'](_0x5a6444['BFltu'], _0x5a6444['BFltu'])) {
                    try {
                        if (_0x195b0f) {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x195b0f));
                        } else {
                            _0x20a294 = JSON['parse'](_0x20a294);
                            if (_0x20a294['data']['success'] && _0x20a294['data']['biz_code'] === 0x0) {
                                if (_0x5a6444['BUSbV']('Ddhku', _0x5a6444['Tytxk'])) {
                                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console['log'](JSON['stringify'](_0x195b0f));
                                } else {
                                    console['log']('红包领取成功，获得' + _0x20a294['data']['result']['discount'] + '元\x0a');
                                    $['discount'] += _0x5a6444['NFgPz'](Number, _0x20a294['data']['result']['discount']);
                                }
                            }
                        }
                    } catch (_0x20ba70) {
                        if ('evJSv' !== 'evJSv') {
                            if (_0x20a294) _0x20a294 = JSON['parse'](_0x20a294);
                        } else {
                            $['logErr'](_0x20ba70, _0x29c10b);
                        }
                    } finally {
                        if (_0x5a6444['smJIg'] === 'CoXav') {
                            _0x5a6444['awMrG'](_0x61195, _0x20a294);
                        } else {
                            console['log']('助力异常：' + JSON['stringify'](_0x20a294));
                        }
                    }
                } else {
                    $['assistants'] = $['h5activityIndex'][_0xa0a000['wCXii']][_0xa0a000['oiPLl']]['assistants']['length'] || 0x0;
                }
            });
        } else {
            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
            console['log'](JSON['stringify'](err));
        }
    });
}

function jinli_h5assist(_0x3c3f91) {
    var _0x55bd3d = {
        'XNMAH': 'rVSak',
        'hZUyF': 'biz_code',
        'LaKGl': 'result',
        'ooOyQ': 'statusDesc',
        'sfsRL': 'data',
        'UOPHk': 'status',
        'JmcrV': function(_0x3dc236, _0x572c89) {
            return _0x3dc236 === _0x572c89;
        }
    };
    const _0x525c41 = {
        'clientInfo': {},
        'redPacketId': _0x3c3f91,
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x175f23 = taskUrl(arguments['callee']['name']['toString'](), _0x525c41);
    return new Promise(_0x140e84 => {
        var _0x7ed51c = {
            'LvvyI': function(_0x2a0c77, _0x31cee2) {
                return _0x2a0c77 !== _0x31cee2;
            },
            'zkdjo': _0x55bd3d['XNMAH'],
            'jqZTh': _0x55bd3d['hZUyF'],
            'NAoor': _0x55bd3d['LaKGl'],
            'PuWIU': _0x55bd3d['ooOyQ'],
            'GPqWV': _0x55bd3d['sfsRL'],
            'rHklh': _0x55bd3d['UOPHk'],
            'uenfr': function(_0x2b9c74, _0x3e0d8c) {
                return _0x2b9c74 === _0x3e0d8c;
            }
        };
        if (_0x55bd3d['JmcrV']('uedXz', 'uedXz')) {
            $['post'](_0x175f23, (_0x135a76, _0x526a5b, _0x193b60) => {
                try {
                    if (_0x135a76) {
                        if (_0x7ed51c['LvvyI'](_0x7ed51c['zkdjo'], 'rVSak')) {
                            console['log']('发起助力红包 失败：' + JSON['stringify'](_0x193b60));
                        } else {
                            console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                            console['log'](JSON['stringify'](_0x135a76));
                        }
                    } else {
                        _0x193b60 = JSON['parse'](_0x193b60);
                        if (_0x193b60 && _0x193b60['data'] && _0x193b60['data'][_0x7ed51c['jqZTh']] === 0x0) {
                            console['log']('助力结果：' + _0x193b60['data'][_0x7ed51c['NAoor']][_0x7ed51c['PuWIU']]);
                            if (_0x193b60[_0x7ed51c['GPqWV']][_0x7ed51c['NAoor']][_0x7ed51c['rHklh']] === 0x3) $['canHelp'] = ![];
                            if (_0x7ed51c['uenfr'](_0x193b60[_0x7ed51c['GPqWV']][_0x7ed51c['NAoor']]['status'], 0x9)) $['canHelp'] = ![];
                        } else {
                            console['log']('助力异常：' + JSON['stringify'](_0x193b60));
                        }
                    }
                } catch (_0x100b76) {
                    $['logErr'](_0x100b76, _0x526a5b);
                } finally {
                    _0x140e84();
                }
            });
        } else {
            $['discount'] += item['packetSum'];
        }
    });
}

function h5receiveRedpacket(_0x16b99f) {
    var _0x267b1b = {
        'tVdeO': 'data',
        'eAeci': function(_0x4aa090, _0x3f0e43) {
            return _0x4aa090(_0x3f0e43);
        },
        'LaUJy': 'KTccr',
        'zxzyR': function(_0x458ffd, _0x39e41f) {
            return _0x458ffd === _0x39e41f;
        },
        'kbTQo': 'biz_code',
        'lYYuY': 'dmSSf',
        'SxtOq': 'viqhI',
        'psSQJ': 'token',
        'ZfiaL': function(_0x5c2735, _0x1078fb) {
            return _0x5c2735 + _0x1078fb;
        }
    };
    const _0x2f04ad = {
        'redPacketId': _0x16b99f
    };
    _0x2f04ad[_0x267b1b['psSQJ']] = $['md5']($['md5'](_0x267b1b['ZfiaL'](_0x267b1b['ZfiaL']('j', JSON['stringify'](_0x2f04ad)), 'D')));
    const _0x1ec154 = taskUrl(arguments['callee']['name']['toString'](), _0x2f04ad);
    return new Promise(_0x264fcc => {
        var _0x472ba6 = {
            'IzOju': _0x267b1b['tVdeO'],
            'DdPqW': 'result',
            'DIDvw': function(_0x4344ae, _0x325f0c) {
                return _0x267b1b['eAeci'](_0x4344ae, _0x325f0c);
            },
            'YXsPe': _0x267b1b['LaUJy'],
            'SwOXz': 'sgFXS',
            'WrlBj': function(_0x42af0a, _0x580cfc) {
                return _0x267b1b['zxzyR'](_0x42af0a, _0x580cfc);
            },
            'mLCJc': _0x267b1b['kbTQo'],
            'EwewR': _0x267b1b['lYYuY'],
            'kfKzS': _0x267b1b['SxtOq']
        };
        if ('jtlxH' !== 'jtlxH') {
            console['log']('[' + item['title'] + '] 功能未开发');
        } else {
            $['post'](_0x1ec154, (_0x58c024, _0x1af89d, _0x2f04ad) => {
                if ('KTccr' === _0x472ba6['YXsPe']) {
                    try {
                        if (_0x58c024) {
                            if (_0x472ba6['SwOXz'] !== _0x472ba6['SwOXz']) {
                                if (_0x58c024) {
                                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                    console['log'](JSON['stringify'](_0x58c024));
                                } else {
                                    _0x2f04ad = JSON['parse'](_0x2f04ad);
                                }
                            } else {
                                console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                                console['log'](JSON['stringify'](_0x58c024));
                            }
                        } else {
                            _0x2f04ad = JSON['parse'](_0x2f04ad);
                            if (_0x2f04ad && _0x2f04ad['data'] && _0x472ba6['WrlBj'](_0x2f04ad['data'][_0x472ba6['mLCJc']], 0x0)) {
                                console['log']('拆红包获得：' + _0x2f04ad['data'][_0x472ba6['DdPqW']]['discount'] + '元');
                            } else {
                                console['log']('领红包失败：' + JSON['stringify'](_0x2f04ad));
                            }
                        }
                    } catch (_0x3ac991) {
                        if (_0x472ba6['EwewR'] === _0x472ba6['kfKzS']) {
                            const _0x1e4b8e = $['h5activityIndex'][_0x472ba6['IzOju']][_0x472ba6['DdPqW']]['rewards'] || [];
                            $['hasSendNumber'] = $['h5activityIndex'][_0x472ba6['IzOju']]['result']['hasSendNumber'];
                            if ($['h5activityIndex'][_0x472ba6['IzOju']][_0x472ba6['DdPqW']]['assistants']) {
                                $['assistants'] = $['h5activityIndex'][_0x472ba6['IzOju']]['result']['assistants']['length'] || 0x0;
                            }
                        } else {
                            $['logErr'](_0x3ac991, _0x1af89d);
                        }
                    } finally {
                        if (_0x472ba6['WrlBj']('tPlEM', 'tPlEM')) {
                            _0x472ba6['DIDvw'](_0x264fcc, _0x2f04ad);
                        } else {
                            _0x264fcc(_0x2f04ad);
                        }
                    }
                } else {
                    url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x472ba6['DIDvw'](escape, JSON['stringify'](body)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                }
            });
        }
    });
}

function h5launch() {
    var _0x24d36a = {
        'RaRPm': function(_0x4de989) {
            return _0x4de989();
        },
        'lIORE': 'GpHYE',
        'YEloV': function(_0x1d8213, _0xb34b93) {
            return _0x1d8213 !== _0xb34b93;
        },
        'kcwbk': 'data',
        'CAjny': 'result',
        'wAmso': 'uuIOz'
    };
    const _0x21754d = {
        'clientInfo': {},
        'followShop': 0x0,
        'promUserState': ''
    };
    const _0x5c522d = taskUrl(arguments['callee']['name']['toString'](), _0x21754d);
    return new Promise(_0x5d0066 => {
        var _0x360a55 = {
            'nrxQg': function(_0x2d3350) {
                return _0x24d36a['RaRPm'](_0x2d3350);
            },
            'pWAoF': _0x24d36a['lIORE'],
            'plkik': function(_0x972917, _0x56963f) {
                return _0x972917 === _0x56963f;
            },
            'uxKwG': 'biz_code',
            'FwBqz': function(_0x23b4ae, _0x2f0828) {
                return _0x24d36a['YEloV'](_0x23b4ae, _0x2f0828);
            },
            'qPZxV': _0x24d36a['kcwbk'],
            'AqCKN': _0x24d36a['CAjny'],
            'Dphqt': 'redPacketId',
            'UHFcG': function(_0x40e210, _0xb01874) {
                return _0x24d36a['YEloV'](_0x40e210, _0xb01874);
            },
            'MGYCf': _0x24d36a['wAmso'],
            'jZOvH': 'rSbeR',
            'nQHvU': function(_0x284deb, _0x5e9d18) {
                return _0x284deb(_0x5e9d18);
            }
        };
        $['post'](_0x5c522d, (_0x4718e8, _0x453bd5, _0x700d2b) => {
            var _0xc77b63 = {
                'iIHBQ': function(_0x18104d) {
                    return _0x18104d();
                }
            };
            try {
                if ('rPeFE' === _0x360a55['pWAoF']) {
                    _0x700d2b = JSON['parse'](_0x700d2b);
                } else {
                    if (_0x4718e8) {
                        console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                        console['log'](JSON['stringify'](_0x4718e8));
                    } else {
                        _0x700d2b = JSON['parse'](_0x700d2b);
                        if (_0x700d2b && _0x700d2b['data'] && _0x360a55['plkik'](_0x700d2b['data'][_0x360a55['uxKwG']], 0x0)) {
                            if (_0x360a55['FwBqz']('eqlYA', 'ldsLA')) {
                                if (_0x700d2b[_0x360a55['qPZxV']][_0x360a55['AqCKN']][_0x360a55['Dphqt']]) {
                                    console['log']('\n\n发起助力红包 成功：红包ID ' + _0x700d2b[_0x360a55['qPZxV']][_0x360a55['AqCKN']][_0x360a55['Dphqt']]);
                                    $['redPacketId']['push'](_0x700d2b['data'][_0x360a55['AqCKN']]['redPacketId']);
                                } else {
                                    console['log']('\n\n发起助力红包 失败：' + _0x700d2b[_0x360a55['qPZxV']]['result']['statusDesc']);
                                }
                            } else {
                                $['logErr'](e, _0x453bd5);
                            }
                        } else {
                            if (_0x360a55['UHFcG'](_0x360a55['MGYCf'], _0x360a55['MGYCf'])) {
                                _0x360a55['nrxQg'](_0x5d0066);
                            } else {
                                console['log']('发起助力红包 失败：' + JSON['stringify'](_0x700d2b));
                            }
                        }
                    }
                }
            } catch (_0x5792cf) {
                if (_0x360a55['plkik'](_0x360a55['jZOvH'], _0x360a55['jZOvH'])) {
                    $['logErr'](_0x5792cf, _0x453bd5);
                } else {
                    _0xc77b63['iIHBQ'](_0x5d0066);
                }
            } finally {
                _0x360a55['nQHvU'](_0x5d0066, _0x700d2b);
            }
        });
    });
}

function h5activityIndex() {
    var _0x16269f = {
        'giwSy': function(_0x1a67a0, _0x9db54a) {
            return _0x1a67a0(_0x9db54a);
        },
        'WYrMi': 'data',
        'mMHBB': 'result',
        'HvZiw': 'rewards',
        'lPXSL': 'tQwSl',
        'MTUCa': 'ZEoSP',
        'EjrUg': function(_0x740767) {
            return _0x740767();
        },
        'uDJrH': function(_0x228d93, _0x248276, _0x376b13) {
            return _0x228d93(_0x248276, _0x376b13);
        }
    };
    const _0x4cc6bc = {
        'clientInfo': {},
        'isjdapp': 0x1
    };
    const _0x4edac4 = _0x16269f['uDJrH'](taskUrl, arguments['callee']['name']['toString'](), _0x4cc6bc);
    return new Promise(_0x29e93e => {
        var _0x3c7e17 = {
            'kEhmn': function(_0xe29ef6, _0x54c7b3) {
                return _0x16269f['giwSy'](_0xe29ef6, _0x54c7b3);
            },
            'oEEOl': _0x16269f['WYrMi'],
            'irPUY': _0x16269f['mMHBB'],
            'wwnwA': _0x16269f['HvZiw'],
            'MKHud': _0x16269f['lPXSL'],
            'BIMtB': _0x16269f['MTUCa'],
            'EJDce': function(_0x2cb78e) {
                return _0x16269f['EjrUg'](_0x2cb78e);
            }
        };
        $['post'](_0x4edac4, async (_0x48ac43, _0x27bd90, _0x3c1a68) => {
            try {
                if (_0x48ac43) {
                    console['log']('\x0a' + $['name'] + ': API查询请求失败 ‼️‼️');
                    console['log'](JSON['stringify'](_0x48ac43));
                } else {
                    _0x3c1a68 = JSON['parse'](_0x3c1a68);
                    $['h5activityIndex'] = _0x3c1a68;
                    $['discount'] = 0x0;
                    if ($['h5activityIndex'] && $['h5activityIndex']['data'] && $['h5activityIndex']['data']['result']) {
                        const _0xec808 = $['h5activityIndex'][_0x3c7e17['oEEOl']][_0x3c7e17['irPUY']][_0x3c7e17['wwnwA']] || [];
                        for (let _0x3c7b1d of _0xec808) {
                            if (_0x3c7e17['MKHud'] === _0x3c7e17['MKHud']) {
                                $['discount'] += _0x3c7b1d['packetSum'];
                            } else {
                                _0x3c1a68 = JSON['parse'](_0x3c1a68);
                            }
                        }
                        if ($['discount']) $['discount'] = $['discount']['toFixed'](0x2);
                    }
                }
            } catch (_0x468a69) {
                $['logErr'](_0x468a69, _0x27bd90);
            } finally {
                if ('KhEGP' === _0x3c7e17['BIMtB']) {
                    url = 'https://api.m.jd.com/client.action?functionId=' + functionId + '&body=' + _0x3c7e17['kEhmn'](escape, JSON['stringify'](_0x4cc6bc)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
                } else {
                    _0x3c7e17['EJDce'](_0x29e93e);
                }
            }
        });
    });
}
async function doAppTask(_0x548f22 = '1') {
    var _0x670575 = {
        'hVgKj': 'CouponCenter',
        'XZimn': 'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d',
        'RQdVr': function(_0x545a09, _0x2a4453, _0x36477e, _0x1c3550) {
            return _0x545a09(_0x2a4453, _0x36477e, _0x1c3550);
        },
        'uLUdy': 'getCcTaskList',
        'MoirF': 'ccgroup_ios_index_task',
        'KDQRM': '727',
        'wTrVK': 'reportCcTask'
    };
    let _0x10f323 = {
        'pageClickKey': _0x670575['hVgKj'],
        'childActivityUrl': _0x670575['XZimn'],
        'lat': '',
        'globalLat': '',
        'lng': '',
        'globalLng': ''
    };
    await _0x670575['RQdVr'](getCcTaskList, _0x670575['uLUdy'], _0x10f323, _0x548f22);
    _0x10f323 = {
        'globalLng': '',
        'globalLat': '',
        'monitorSource': _0x670575['MoirF'],
        'monitorRefer': '',
        'taskType': '1',
        'childActivityUrl': _0x670575['XZimn'],
        'pageClickKey': _0x670575['hVgKj'],
        'lat': '',
        'taskId': _0x670575['KDQRM'],
        'lng': ''
    };
    await $['wait'](0x2904);
    await getCcTaskList(_0x670575['wTrVK'], _0x10f323, _0x548f22);
}

function getCcTaskList(_0x42bfb1, _0x301047, _0x2fea44 = '1') {
    var _0x2d0483 = {
        'WqXHq': function(_0x308015, _0xbd4fd9) {
            return _0x308015(_0xbd4fd9);
        },
        'xVeLQ': function(_0x2a3225, _0x416882) {
            return _0x2a3225 === _0x416882;
        },
        'cLUco': 'mefwu',
        'WMUuG': 'KjORc',
        'IXsMn': 'qOvKK',
        'URVvH': 'getCcTaskList',
        'msUJE': function(_0x260f5d, _0x21c5a7) {
            return _0x260f5d === _0x21c5a7;
        },
        'uIiWM': 'jbYdU',
        'YQrcn': 'indCL',
        'sScWh': function(_0x54f094, _0x53dca3) {
            return _0x54f094(_0x53dca3);
        },
        'DwcGc': 'application/json, text/plain, */*',
        'TatcX': 'gzip, deflate, br',
        'yPVPu': 'keep-alive',
        'ldRMi': 'application/x-www-form-urlencoded',
        'mYDKF': 'https://h5.m.jd.com',
        'MpeUs': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'aQOuG': function(_0x2cc80c, _0xdf755d) {
            return _0x2cc80c(_0xdf755d);
        },
        'trdlO': './USER_AGENTS',
        'LiTtP': 'JDUA'
    };
    let _0x3d5810 = '';
    return new Promise(_0xa29b72 => {
        var _0x21494f = {
            'pDoIi': function(_0x13b13f, _0x25da3f) {
                return _0x2d0483['WqXHq'](_0x13b13f, _0x25da3f);
            },
            'PAwsT': function(_0x4ef91d, _0xf101ac) {
                return _0x2d0483['xVeLQ'](_0x4ef91d, _0xf101ac);
            },
            'uyLan': function(_0x2ddbeb, _0x36fbc2) {
                return _0x2d0483['xVeLQ'](_0x2ddbeb, _0x36fbc2);
            },
            'vNXVI': _0x2d0483['cLUco'],
            'Dsqyh': function(_0x2d54b6) {
                return _0x2d54b6();
            }
        };
        if (_0x2d0483['WMUuG'] === _0x2d0483['IXsMn']) {
            _0xa29b72(data);
        } else {
            if (_0x42bfb1 === _0x2d0483['URVvH']) {
                if (_0x2d0483['msUJE'](_0x2d0483['uIiWM'], _0x2d0483['YQrcn'])) {
                    _0x21494f['pDoIi'](_0xa29b72, data);
                } else {
                    _0x3d5810 = 'https://api.m.jd.com/client.action?functionId=' + _0x42bfb1 + '&body=' + escape(JSON['stringify'](_0x301047)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158358007&sign=a15f78e5846f9b0178dcabb1093a6a7f&sv=100';
                }
            } else if (_0x42bfb1 === 'reportCcTask') {
                _0x3d5810 = 'https://api.m.jd.com/client.action?functionId=' + _0x42bfb1 + '&body=' + _0x2d0483['sScWh'](escape, JSON['stringify'](_0x301047)) + '&uuid=8888888&client=apple&clientVersion=9.4.1&st=1617158435079&sign=7eff07437dd817dbfa348c209fd5c129&sv=120';
            }
            const _0x1ed734 = {
                'url': _0x3d5810,
                'body': 'body=' + _0x2d0483['sScWh'](escape, JSON['stringify'](_0x301047)),
                'headers': {
                    'Accept': _0x2d0483['DwcGc'],
                    'Accept-Encoding': _0x2d0483['TatcX'],
                    'Accept-Language': 'zh-cn',
                    'Connection': _0x2d0483['yPVPu'],
                    'Content-Length': '63',
                    'Content-Type': _0x2d0483['ldRMi'],
                    'Host': 'api.m.jd.com',
                    'Origin': _0x2d0483['mYDKF'],
                    'Cookie': cookie,
                    'Referer': _0x2d0483['MpeUs'],
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x2d0483['aQOuG'](require, _0x2d0483['trdlO'])['USER_AGENT'] : $['getdata']('JDUA') ? $['getdata'](_0x2d0483['LiTtP']) : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
                }
            };
            $['post'](_0x1ed734, async (_0x62e410, _0x4371db, _0x469f0c) => {
                try {
                    if (_0x62e410) {
                        console['log']('' + JSON['stringify'](_0x62e410));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x469f0c) {
                            if (_0x21494f['PAwsT'](_0x2fea44, '1') && _0x21494f['uyLan'](_0x42bfb1, 'reportCcTask')) console['log']('京东首页点击“领券”逛10s任务:' + _0x469f0c);
                        }
                    }
                } catch (_0x2b3215) {
                    if (_0x21494f['vNXVI'] !== 'mefwu') {
                        console['log']('券后9.9抽奖获得【优惠券】：' + _0x469f0c['result']['luckyDrawData']['discount'] + '元：' + _0x469f0c['result']['luckyDrawData']['prizeName'] + '，' + _0x469f0c['result']['luckyDrawData']['quotaDesc']);
                    } else {
                        $['logErr'](_0x2b3215, _0x4371db);
                    }
                } finally {
                    _0x21494f['Dsqyh'](_0xa29b72);
                }
            });
        }
    });
}

function getAuthorShareCode(_0x129b62 = 'http://adguard.b.freefrp.net/jd_red.json') {
    var _0xd03397 = {
        'mGQKF': function(_0x29963e, _0x159bc1) {
            return _0x29963e(_0x159bc1);
        },
        'gcDSP': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'XcDAm': function(_0x39fb1a, _0x2fa346) {
            return _0x39fb1a !== _0x2fa346;
        },
        'eKbAK': 'IKQyp'
    };
    return new Promise(_0x1a576d => {
        const _0x377644 = {
            'url': _0x129b62 + '?' + new Date(),
            'timeout': 0x2710,
            'headers': {
                'User-Agent': _0xd03397['gcDSP']
            }
        };
        if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
            if (_0xd03397['XcDAm']('SjNOb', _0xd03397['eKbAK'])) {
                const _0x376a2a = require('tunnel');
                const _0x33a463 = {
                    'https': _0x376a2a['httpsOverHttp']({
                        'proxy': {
                            'host': process['env']['TG_PROXY_HOST'],
                            'port': process['env']['TG_PROXY_PORT'] * 0x1
                        }
                    })
                };
                Object['assign'](_0x377644, {
                    'agent': _0x33a463
                });
            } else {
                console['log']('' + JSON['stringify'](err));
                console['log']($['name'] + ' API请求失败，请检查网路重试');
            }
        }
        $['get'](_0x377644, async (_0x53c70b, _0x1ad81a, _0x5d2266) => {
            try {
                if (_0x53c70b) {} else {
                    if (_0x5d2266) _0x5d2266 = JSON['parse'](_0x5d2266);
                }
            } catch (_0x2965f9) {} finally {
                _0xd03397['mGQKF'](_0x1a576d, _0x5d2266);
            }
        });
    });
}

function taskUrl(_0x59457e, _0x47f51d) {
    var _0x2f6677 = {
        'leFzy': 'api.m.jd.com',
        'EgQPc': 'https://happy.m.jd.com',
        'qhCKF': 'gzip, deflate, br',
        'DlCuh': 'keep-alive',
        'Bimud': function(_0xab0b33, _0x12bdd5) {
            return _0xab0b33(_0x12bdd5);
        },
        'ZUVNB': './USER_AGENTS',
        'uUULl': 'JDUA',
        'zNByb': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'RKSfP': 'https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
        'oGoox': 'zh-cn'
    };
    return {
        'url': JD_API_HOST + '?appid=jd_mp_h5&functionId=' + _0x59457e + '&loginType=2&client=jd_mp_h5&t=' + new Date()['getTime']() * 0x3e8,
        'body': 'body=' + JSON['stringify'](_0x47f51d),
        'headers': {
            'Host': _0x2f6677['leFzy'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': _0x2f6677['EgQPc'],
            'Accept-Encoding': _0x2f6677['qhCKF'],
            'Cookie': cookie,
            'Connection': _0x2f6677['DlCuh'],
            'Accept': '*/*',
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x2f6677['Bimud'](require, _0x2f6677['ZUVNB'])['USER_AGENT'] : $['getdata'](_0x2f6677['uUULl']) ? $['getdata'](_0x2f6677['uUULl']) : _0x2f6677['zNByb'],
            'Referer': _0x2f6677['RKSfP'],
            'Content-Length': '36',
            'Accept-Language': _0x2f6677['oGoox']
        }
    };
};
_0xode = 'jsjiami.com.v6'

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
