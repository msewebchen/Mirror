/*
京喜阶梯红包
活动日期：2021-04-22 至 2021-06-30
修改自 TG群友 @echowxsy 提供的源码

脚本只进行内循环助力，一个ID可以助力3个用户
作者的助力会psuh一个到本地助力池，介意的话请注释脚本

更新地址：https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_jxhb.js
============Quantumultx===============
[task_local]
#京喜阶梯红包
15 9 * 5,6 * https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_jxhb.js, tag=京喜阶梯红包,  enabled=true
================Loon==============
[Script]
cron "15 9 * 5,6 *" script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_jxhb.js,tag=京喜阶梯红包
===============Surge=================
京喜阶梯红包 = type=cron,cronexp="15 9 * 5,6 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_jxhb.js
============小火箭=========
京喜阶梯红包 = type=cron,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_jxhb.js, cronexpr="15 9 * 5,6 *", timeout=3600, enable=true
*/
const $ = new Env("京喜阶梯红包");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
/*
 *Progcessed By JSDec in 0.52s
 *JSDec - JSDec.js.org
 */
const cp = $['isNode']() ? require('child_process') : '';
let cookiesArr = [],
    cookie = '',
    message = '';
const shareCodeList = [];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x349373 => {
        cookiesArr['push'](jdCookieNode[_0x349373]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x1dda84 => _0x1dda84['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x395e65 => !!_0x395e65);
}!(async () => {
    var _0x1643bb = {
        'njwIG': '未能成功获取到用户信息',
        'uNsIu': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'NHfgJ': 'https://bean.m.jd.com/bean/signIndex.action',
        'iQFLn': function(_0x45d1d0, _0x3d655b) {
            return _0x45d1d0 < _0x3d655b;
        },
        'xTAHa': function(_0x26d0c8, _0x80fb07) {
            return _0x26d0c8 | _0x80fb07;
        },
        'zwGhn': function(_0x2e6d3d, _0x177955) {
            return _0x2e6d3d * _0x177955;
        },
        'DtYZt': function(_0x534151, _0x23201a) {
            return _0x534151 == _0x23201a;
        },
        'vmPxg': function(_0x4b3bcc, _0x53abc4) {
            return _0x4b3bcc | _0x53abc4;
        },
        'nZWzG': function(_0x397924, _0x1bfd27) {
            return _0x397924 & _0x1bfd27;
        },
        'CsPiV': function(_0xb40460, _0x1f37ba) {
            return _0xb40460 !== _0x1f37ba;
        },
        'LjbfV': 'kBDry',
        'LCSac': 'SreYeutyscySK-P__DC17UqljRHdD5p5WpBk9NPl6LQ',
        'qwKpr': 'SreYeutyscySK-P__DC17cZBtgy1aKLePOvlbVLGeY5QTEWXVqY3ZIchpi-74WEr',
        'PEhFI': 'SreYeutyscySK-P__DC17epgq_ZezS42hTSTXdpWD7A',
        'iXHOy': 'SreYeutyscySK-P__DC17W9DjAlBKEf99BpLEZkf93A',
        'xTlro': function(_0x3debba, _0x37e0f8, _0xf28cea) {
            return _0x3debba(_0x37e0f8, _0xf28cea);
        },
        'LvrNr': 'htFSF',
        'aDcKC': function(_0x330eae, _0x2bbc4f) {
            return _0x330eae !== _0x2bbc4f;
        },
        'IdPWE': function(_0x35f02e, _0x5654c8) {
            return _0x35f02e + _0x5654c8;
        },
        'fJiwE': function(_0x11fcd1) {
            return _0x11fcd1();
        },
        'oeFhA': function(_0x36e5e9, _0x3feb74) {
            return _0x36e5e9 !== _0x3feb74;
        },
        'VqTUt': 'JgCAw',
        'sEXoI': 'GoKnq',
        'fvLtB': function(_0x45f1c4, _0x20b95f, _0x3fc2eb) {
            return _0x45f1c4(_0x20b95f, _0x3fc2eb);
        },
        'iUCUA': function(_0x14c48e, _0x1302f4) {
            return _0x14c48e(_0x1302f4);
        },
        'Etsse': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'LMNZo': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'eGwqq': function(_0x4c34d4) {
            return _0x4c34d4();
        },
        'ObbAv': function(_0xe88684, _0x3634cb) {
            return _0xe88684 > _0x3634cb;
        },
        'iAAOY': function(_0x50db0a, _0x482416) {
            return _0x50db0a !== _0x482416;
        },
        'JUNQV': function(_0x2846f3, _0x2e196b) {
            return _0x2846f3 < _0x2e196b;
        },
        'MjaKE': 'APP_ABBR=CJHY;',
        'QHHwV': function(_0x57fef8, _0x3afb28) {
            return _0x57fef8 + _0x3afb28;
        },
        'uclcA': function(_0x119490) {
            return _0x119490();
        },
        'fNrbL': function(_0x35fcdc, _0x4a979e) {
            return _0x35fcdc !== _0x4a979e;
        },
        'HZxxJ': 'lPiYh',
        'oZKNt': function(_0x19ec04, _0x22bdad, _0x5dcd41) {
            return _0x19ec04(_0x22bdad, _0x5dcd41);
        },
        'RvDTa': function(_0x461ea9, _0x432c13) {
            return _0x461ea9(_0x432c13);
        },
        'mYKgc': function(_0xd56f31) {
            return _0xd56f31();
        },
        'FwEqN': function(_0xcfbbb3, _0x241d2f) {
            return _0xcfbbb3 !== _0x241d2f;
        },
        'OurfX': 'lvWwB',
        'FMosw': function(_0x17177c) {
            return _0x17177c();
        },
        'rKVeJ': function(_0x1c6eaf, _0x2595c4) {
            return _0x1c6eaf === _0x2595c4;
        },
        'Jiass': 'eRhDt',
        'iLIVu': function(_0x892bca, _0x492925, _0x848e53) {
            return _0x892bca(_0x492925, _0x848e53);
        },
        'glyhE': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'elpOQ': 'mgWpz',
        'sSCon': '遇见你是一种福气'
    };
    if (!cookiesArr[0x0]) {
        if (_0x1643bb['CsPiV'](_0x1643bb['LjbfV'], 'wvblW')) {
            $['msg']($['name'], _0x1643bb['uNsIu'], _0x1643bb['NHfgJ'], {
                'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
            });
            return;
        } else {
            $['log']('当前账号没有可领取的红包');
        }
    }
    let _0xce3094 = [_0x1643bb['LCSac'], 'SreYeutyscySK-P__DC17QF1uV1m3NthcebKqdPw5KR1Ffe2U484vy5GrKcjlRVW', _0x1643bb['qwKpr'], 'SreYeutyscySK-P__DC17fuaL1Vq4ou0UHtwlIED1LHygDaL0kp9IGtG03m9SaCx', _0x1643bb['PEhFI'], 'SreYeutyscySK-P__DC17SxXqf1akme7ovfOpsRt0hNng6yV9j493oCJ0miqXTE3', 'SreYeutyscySK-P__DC17VAxaVAWO3IL-QfBnOeHRecB3czajFWB_SN5-LdTDlcT', 'SreYeutyscySK-P__DC17RkLPnz4N5Jam0S_jytl3wJDuocXhLEBl-Da26MX1Q2I', _0x1643bb['iXHOy'], 'SreYeutyscySK-P__DC17e1u7TB5AX0YPfUX56pGB6w'];
    shareCodeList['push'](_0x1643bb['xTlro'](random, 0x0, _0xce3094['length']));
    for (let _0x44b01f = 0x0; _0x1643bb['iQFLn'](_0x44b01f, cookiesArr['length']); _0x44b01f++) {
        if (_0x1643bb['CsPiV'](_0x1643bb['LvrNr'], _0x1643bb['LvrNr'])) {
            $['log'](_0x1643bb['njwIG']);
        } else {
            if (cookiesArr[_0x44b01f]) {
                if (_0x1643bb['aDcKC']('zdqKg', 'QabMo')) {
                    cookie = cookiesArr[_0x44b01f] + 'APP_ABBR=CJHY;';
                    originCookie = cookiesArr[_0x44b01f] + 'APP_ABBR=CJHY;';
                    newCookie = '';
                    $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                    $['index'] = _0x1643bb['IdPWE'](_0x44b01f, 0x1);
                    $['isLogin'] = !![];
                    $['nickName'] = '';
                    await _0x1643bb['fJiwE'](checkCookie);
                    console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
                    if (!$['isLogin']) {
                        if (_0x1643bb['oeFhA']('JgCAw', _0x1643bb['VqTUt'])) {
                            $['msg']($['name'], _0x1643bb['uNsIu'], _0x1643bb['NHfgJ'], {
                                'open-url': _0x1643bb['NHfgJ']
                            });
                            return;
                        } else {
                            $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                                'open-url': _0x1643bb['NHfgJ']
                            });
                            if ($['isNode']()) {
                                if (_0x1643bb['oeFhA'](_0x1643bb['sEXoI'], 'GoKnq')) {
                                    message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a       └ 获得 ' + $['bean'] + ' 京豆。';
                                } else {
                                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                                }
                            }
                            continue;
                        }
                    }
                    $['bean'] = 0x0;
                    $['ADID'] = _0x1643bb['fvLtB'](getUUID, 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 0x1);
                    $['UUID'] = _0x1643bb['iUCUA'](getUUID, _0x1643bb['Etsse']);
                    $['JSTOKEN'] = _0x1643bb['iUCUA'](getUUID, _0x1643bb['LMNZo']);
                    $['randomCode'] = random(0xf4240, 0x98967f);
                    await _0x1643bb['eGwqq'](getCode);
                    if (_0x1643bb['ObbAv']($['bean'], 0x0)) {
                        if (_0x1643bb['iAAOY']('USaKT', 'bAtCQ')) {
                            message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                        } else {
                            $['msg']($['name'], '遇见你是一种福气', message);
                        }
                    }
                } else {
                    uuid = v['toString'](0x24);
                }
            }
        }
    }
    for (let _0x24a218 = 0x0; _0x1643bb['JUNQV'](_0x24a218, cookiesArr['length']); _0x24a218++) {
        if (cookiesArr[_0x24a218]) {
            cookie = _0x1643bb['IdPWE'](cookiesArr[_0x24a218], _0x1643bb['MjaKE']);
            originCookie = _0x1643bb['QHHwV'](cookiesArr[_0x24a218], _0x1643bb['MjaKE']);
            newCookie = '';
            $['UserName'] = _0x1643bb['iUCUA'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x24a218 + 0x1;
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x1643bb['uclcA'](checkCookie);
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
            if (!$['isLogin']) {
                if (_0x1643bb['fNrbL']('lPiYh', _0x1643bb['HZxxJ'])) {
                    $['log']('你好：' + $['userInfo']['strNickname'] + '\x0a当前处于第【' + $['userInfo']['dwCurrentGrade'] + '】个红包的准备阶段\n你的助力码【' + $['userInfo']['strUserPin'] + '】');
                    if (_0x1643bb['iQFLn']($['index'], 0xa)) {
                        $['log']('将助力码添加到本地助力池');
                        shareCodeList['push']($['userInfo']['strUserPin']);
                    }
                } else {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x1643bb['NHfgJ']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
            }
            $['bean'] = 0x0;
            $['ADID'] = _0x1643bb['oZKNt'](getUUID, 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 0x1);
            $['UUID'] = _0x1643bb['iUCUA'](getUUID, _0x1643bb['Etsse']);
            $['JSTOKEN'] = _0x1643bb['RvDTa'](getUUID, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            $['randomCode'] = _0x1643bb['oZKNt'](random, 0xf4240, 0x98967f);
            await _0x1643bb['mYKgc'](help);
            if ($['bean'] > 0x0) {
                message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
            }
        }
    }
    for (let _0x2003a9 = 0x0; _0x2003a9 < cookiesArr['length']; _0x2003a9++) {
        if (cookiesArr[_0x2003a9]) {
            if (_0x1643bb['FwEqN'](_0x1643bb['OurfX'], _0x1643bb['OurfX'])) {
                uuid = v['toString'](0x24)['toUpperCase']();
            } else {
                cookie = cookiesArr[_0x2003a9];
                originCookie = cookiesArr[_0x2003a9];
                newCookie = '';
                $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x1643bb['QHHwV'](_0x2003a9, 0x1);
                $['isLogin'] = !![];
                $['nickName'] = '';
                await _0x1643bb['FMosw'](checkCookie);
                console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
                if (!$['isLogin']) {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x1643bb['NHfgJ']
                    });
                    if ($['isNode']()) {
                        if (_0x1643bb['rKVeJ']('pNuvr', _0x1643bb['Jiass'])) {
                            return format['replace'](/[xy]/g, function(_0x116b5b) {
                                var _0x4439de = _0x1643bb['xTAHa'](_0x1643bb['zwGhn'](Math['random'](), 0x10), 0x0),
                                    _0x5c1117 = _0x1643bb['DtYZt'](_0x116b5b, 'x') ? _0x4439de : _0x1643bb['vmPxg'](_0x1643bb['nZWzG'](_0x4439de, 0x3), 0x8);
                                if (UpperCase) {
                                    uuid = _0x5c1117['toString'](0x24)['toUpperCase']();
                                } else {
                                    uuid = _0x5c1117['toString'](0x24);
                                }
                                return uuid;
                            });
                        } else {
                            await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\x0a请重新登录获取cookie');
                        }
                    }
                    continue;
                }
                $['bean'] = 0x0;
                $['ADID'] = _0x1643bb['iLIVu'](getUUID, _0x1643bb['glyhE'], 0x1);
                $['UUID'] = _0x1643bb['RvDTa'](getUUID, _0x1643bb['Etsse']);
                $['JSTOKEN'] = _0x1643bb['RvDTa'](getUUID, _0x1643bb['LMNZo']);
                $['randomCode'] = _0x1643bb['iLIVu'](random, 0xf4240, 0x98967f);
                await getMoney();
                if ($['bean'] > 0x0) {
                    message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                }
            }
        }
    }
    if (_0x1643bb['FwEqN'](message, '')) {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'], message, '', '');
        } else {
            if (_0x1643bb['FwEqN'](_0x1643bb['elpOQ'], 'mgWpz')) {
                cookiesArr['push'](jdCookieNode[item]);
            } else {
                $['msg']($['name'], _0x1643bb['sSCon'], message);
            }
        }
    }
})()['catch'](_0x1c5904 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x1c5904 + '!', '');
})['finally'](() => {
    $['done']();
});
async function getMoney() {
    var _0x3d8265 = {
        'yPcaL': function(_0x34bc93) {
            return _0x34bc93();
        },
        'HtjbR': function(_0x481798, _0x160c05) {
            return _0x481798(_0x160c05);
        },
        'PNPJb': function(_0x3dd095, _0xab8925) {
            return _0x3dd095 === _0xab8925;
        },
        'HkJUa': 'CnXzw',
        'HajxS': '->尝试领取红包',
        'gcOSh': function(_0x3675a3, _0xc4753b) {
            return _0x3675a3 <= _0xc4753b;
        },
        'reFHK': function(_0x573488, _0x4a4af9, _0x2a37f8) {
            return _0x573488(_0x4a4af9, _0x2a37f8);
        },
        'fRYdQ': 'DoGradeDraw',
        'vRdHs': function(_0x42d974, _0x3bdd09) {
            return _0x42d974 + _0x3bdd09;
        },
        'GeIWL': 'ElUIX',
        'enncO': '未能成功获取到用户信息'
    };
    $['userInfo'] = null;
    await _0x3d8265['HtjbR'](task, 'GetUserInfo');
    if ($['userInfo']) {
        times = $['userInfo']['dwCurrentGrade'] - 0x1;
        if (times) {
            if (_0x3d8265['PNPJb'](_0x3d8265['HkJUa'], 'CnXzw')) {
                $['log'](_0x3d8265['HajxS']);
                for (let _0x3de841 = 0x0; _0x3d8265['gcOSh'](_0x3de841, times); _0x3de841++) {
                    await _0x3d8265['reFHK'](task, _0x3d8265['fRYdQ'], '&grade=' + _0x3d8265['vRdHs'](_0x3de841, 0x1) + '&strPin=' + $['userInfo']['strUserPin']);
                    await $['wait'](0x1f4);
                }
            } else {
                _0x3d8265['yPcaL'](resolve);
            }
        } else {
            if (_0x3d8265['GeIWL'] === _0x3d8265['GeIWL']) {
                $['log']('当前账号没有可领取的红包');
            } else {
                $['log']('未能成功获取到用户信息');
            }
        }
    } else {
        $['log'](_0x3d8265['enncO']);
    }
    await $['wait'](0x3e8);
}
async function help() {
    var _0x135312 = {
        'SZevy': '将助力码添加到本地助力池',
        'cnAmH': function(_0x2466c1, _0xa3e92c) {
            return _0x2466c1(_0xa3e92c);
        },
        'qKuhW': function(_0x54b02e, _0x210a7a) {
            return _0x54b02e === _0x210a7a;
        },
        'VzwMu': 'KrRVz',
        'hXavc': 'TORHC',
        'NKgsx': function(_0x1a25ab, _0x2d0b92) {
            return _0x1a25ab > _0x2d0b92;
        },
        'inCyK': function(_0x398179, _0x5b3147) {
            return _0x398179 !== _0x5b3147;
        },
        'rHwes': 'SgiIN',
        'RnqNA': '->尝试助力好友',
        'iokuq': function(_0x1ec3e4, _0x43b6f8) {
            return _0x1ec3e4 !== _0x43b6f8;
        },
        'dXyXt': 'uOLwF',
        'XuCGf': function(_0x446387, _0x3c14e3) {
            return _0x446387 > _0x3c14e3;
        },
        'JkUWv': function(_0x751bd5, _0x39fcb3, _0x3e3c9d) {
            return _0x751bd5(_0x39fcb3, _0x3e3c9d);
        },
        'dDblA': 'EnrollFriend'
    };
    $['userInfo'] = null;
    $['risk'] = ![];
    await _0x135312['cnAmH'](task, 'GetUserInfo');
    if ($['userInfo']) {
        if (_0x135312['qKuhW'](_0x135312['VzwMu'], _0x135312['hXavc'])) {
            $['nickName'] = data['data']['userInfo']['baseInfo']['nickname'];
        } else {
            if (_0x135312['NKgsx'](shareCodeList['length'], 0x0)) {
                if (_0x135312['inCyK']('SgiIN', _0x135312['rHwes'])) {
                    $['log'](_0x135312['SZevy']);
                    shareCodeList['push']($['userInfo']['strUserPin']);
                } else {
                    $['log'](_0x135312['RnqNA']);
                    for (let _0x1cb9a8 = 0x0; _0x1cb9a8 < shareCodeList['length']; _0x1cb9a8++) {
                        if ($['risk']) {
                            if (_0x135312['iokuq'](_0x135312['dXyXt'], _0x135312['dXyXt'])) {
                                $['log'](err);
                            } else {
                                break;
                            }
                        }
                        if (_0x135312['XuCGf'](_0x1cb9a8, 0x6)) {
                            break;
                        }
                        await _0x135312['JkUWv'](task, _0x135312['dDblA'], '&joinDate=' + $['userInfo']['strJoinDate'] + '&strPin=' + shareCodeList[_0x1cb9a8]);
                        await $['wait'](0x3e8);
                    }
                }
            }
        }
    } else {
        $['log']('未能成功获取到用户信息');
    }
}
async function getCode() {
    var _0x28a849 = {
        'ZOyOh': function(_0x723785, _0x55ed5a) {
            return _0x723785 == _0x55ed5a;
        },
        'oLopF': function(_0x1ad724, _0x1c7169) {
            return _0x1ad724 | _0x1c7169;
        },
        'raMjU': function(_0x533651, _0x540ce4) {
            return _0x533651 & _0x540ce4;
        },
        'OVxHV': 'JoinActive',
        'ieiJh': function(_0x3f6b0d, _0x1ac78c) {
            return _0x3f6b0d(_0x1ac78c);
        },
        'JXGVb': 'GetUserInfo',
        'XaaYB': function(_0x22e9a5, _0x44dd47) {
            return _0x22e9a5 < _0x44dd47;
        },
        'stmDW': function(_0x422423, _0x1be25b) {
            return _0x422423 === _0x1be25b;
        },
        'bHBmv': 'VJDao',
        'UVACK': function(_0x2584c3, _0xdf22d8) {
            return _0x2584c3 === _0xdf22d8;
        },
        'QhhzF': 'YIICJ',
        'ThsFD': 'UntWY',
        'NtEvR': '未能成功获取到用户信息'
    };
    $['userInfo'] = null;
    await task(_0x28a849['OVxHV']);
    await _0x28a849['ieiJh'](task, _0x28a849['JXGVb']);
    if ($['userInfo']) {
        $['log']('你好：' + $['userInfo']['strNickname'] + '\n当前处于第【' + $['userInfo']['dwCurrentGrade'] + '】个红包的准备阶段\n你的助力码【' + $['userInfo']['strUserPin'] + '】');
        if (_0x28a849['XaaYB']($['index'], 0xa)) {
            if (_0x28a849['stmDW']('VJDao', _0x28a849['bHBmv'])) {
                $['log']('将助力码添加到本地助力池');
                shareCodeList['push']($['userInfo']['strUserPin']);
            } else {
                var _0x524f12 = Math['random']() * 0x10 | 0x0,
                    _0x44c3e7 = _0x28a849['ZOyOh'](c, 'x') ? _0x524f12 : _0x28a849['oLopF'](_0x28a849['raMjU'](_0x524f12, 0x3), 0x8);
                if (UpperCase) {
                    uuid = _0x44c3e7['toString'](0x24)['toUpperCase']();
                } else {
                    uuid = _0x44c3e7['toString'](0x24);
                }
                return uuid;
            }
        }
    } else {
        if (_0x28a849['UVACK'](_0x28a849['QhhzF'], _0x28a849['ThsFD'])) {
            $['log'](error);
        } else {
            $['log'](_0x28a849['NtEvR']);
        }
    }
    await $['wait'](0x3e8);
}

function task(_0x1e3032, _0x29f43b) {
    var _0x45dd54 = {
        'GGyEO': 'CookiesJD',
        'ngTkq': 'CookieJD2',
        'yHfKk': function(_0x4a1892, _0x388371) {
            return _0x4a1892 === _0x388371;
        },
        'ruMSH': 'klujC',
        'VRpwH': 'JOJVB',
        'FFCja': 'GetUserInfo',
        'KGaTn': 'EnrollFriend',
        'rrJiL': 'JoinActive',
        'Qclaj': 'DoGradeDraw',
        'xKdwK': function(_0x2ff644, _0x5d73d3) {
            return _0x2ff644 !== _0x5d73d3;
        },
        'IGITm': 'xWocw',
        'UUhor': function(_0x5ade69) {
            return _0x5ade69();
        },
        'YNZLd': 'GOVKv',
        'dyuNo': function(_0x4d93cb, _0x4d5aa2, _0x32fdf8) {
            return _0x4d93cb(_0x4d5aa2, _0x32fdf8);
        }
    };
    return new Promise(_0x1b513e => {
        var _0x279a78 = {
            'rCeWL': '这个账号估计不能助力好友哟',
            'zbHan': function(_0x3a5057, _0x1b69ce) {
                return _0x45dd54['yHfKk'](_0x3a5057, _0x1b69ce);
            },
            'MQljl': _0x45dd54['ruMSH'],
            'Eyxun': function(_0x481524, _0x5007a0) {
                return _0x481524 === _0x5007a0;
            },
            'Mobkd': _0x45dd54['VRpwH'],
            'FBIyz': _0x45dd54['FFCja'],
            'joVaK': _0x45dd54['KGaTn'],
            'ystOq': _0x45dd54['rrJiL'],
            'IHjBS': _0x45dd54['Qclaj'],
            'BitDC': function(_0x437eac, _0x57eaf6) {
                return _0x437eac === _0x57eaf6;
            },
            'EXENY': function(_0xc535c4, _0x180d3e) {
                return _0x45dd54['xKdwK'](_0xc535c4, _0x180d3e);
            },
            'Hofls': _0x45dd54['IGITm'],
            'xSrdG': function(_0x6ce90b) {
                return _0x45dd54['UUhor'](_0x6ce90b);
            }
        };
        if (_0x45dd54['YNZLd'] === 'GOVKv') {
            $['get'](_0x45dd54['dyuNo'](taskUrl, _0x1e3032, _0x29f43b), async (_0x1edd94, _0x30d6d, _0x15017f) => {
                var _0x288e44 = {
                    'vIbml': _0x279a78['rCeWL'],
                    'bekol': function(_0x22f462, _0x3d6f1c) {
                        return _0x279a78['zbHan'](_0x22f462, _0x3d6f1c);
                    }
                };
                try {
                    if (_0x279a78['zbHan']('KMofP', _0x279a78['MQljl'])) {
                        $['isLogin'] = ![];
                        return;
                    } else {
                        if (_0x1edd94) {
                            $['log'](_0x1edd94);
                        } else {
                            if (_0x279a78['Eyxun']('JOJVB', _0x279a78['Mobkd'])) {
                                _0x15017f = JSON['parse'](_0x15017f);
                                if (!_0x15017f['iRet']) {
                                    switch (_0x1e3032) {
                                        case _0x279a78['FBIyz']:
                                            $['userInfo'] = _0x15017f['Data'];
                                            break;
                                        case _0x279a78['joVaK']:
                                            $['log']('助力结果：' + _0x15017f['sErrMsg']['split']('，')[0x0]);
                                            break;
                                        case _0x279a78['ystOq']:
                                        case _0x279a78['IHjBS']:
                                            $['log'](_0x15017f['sErrMsg']);
                                            break;
                                        default:
                                            console['log'](_0x15017f);
                                            break;
                                    }
                                } else if (_0x279a78['BitDC'](_0x15017f['iRet'], 0x7e0)) {
                                    $['log'](_0x279a78['rCeWL']);
                                    $['risk'] = !![];
                                } else {
                                    console['log'](_0x15017f['sErrMsg']);
                                }
                            } else {
                                $['log'](_0x288e44['vIbml']);
                                $['risk'] = !![];
                            }
                        }
                    }
                } catch (_0x11ac2e) {
                    if (_0x279a78['EXENY'](_0x279a78['Hofls'], _0x279a78['Hofls'])) {
                        Object['keys'](jdCookieNode)['forEach'](_0x98e97e => {
                            cookiesArr['push'](jdCookieNode[_0x98e97e]);
                        });
                        if (process['env']['JD_DEBUG'] && _0x288e44['bekol'](process['env']['JD_DEBUG'], 'false')) console['log'] = () => {};
                    } else {
                        $['log'](_0x11ac2e);
                    }
                } finally {
                    _0x279a78['xSrdG'](_0x1b513e);
                }
            });
        } else {
            let _0x1748c3 = $['getdata'](_0x45dd54['GGyEO']) || '[]';
            _0x1748c3 = JSON['parse'](_0x1748c3);
            cookiesArr = _0x1748c3['map'](_0x3c5058 => _0x3c5058['cookie']);
            cookiesArr['reverse']();
            cookiesArr['push'](...[$['getdata'](_0x45dd54['ngTkq']), $['getdata']('CookieJD')]);
            cookiesArr['reverse']();
            cookiesArr = cookiesArr['filter'](_0x18783b => !!_0x18783b);
        }
    });
}

function taskUrl(_0x5ee4dc, _0x345a34 = '') {
    var _0x4cf9d9 = {
        'OUMUZ': function(_0x4dc6e1, _0x2f2975) {
            return _0x4dc6e1 - _0x2f2975;
        },
        'avpbS': function(_0xe223cb, _0x267817, _0x337291) {
            return _0xe223cb(_0x267817, _0x337291);
        },
        'YlnNS': 'wq.jd.com',
        'EAvHH': 'zh-cn',
        'Wulpy': 'gzip, deflate, br'
    };
    return {
        'url': 'https://wq.jd.com/cubeactive/steprewardv3/' + _0x5ee4dc + '?activeId=489177&publishFlag=1&channel=7&stepreward_jstoken=' + $['JSTOKEN'] + '&timestamp=' + _0x4cf9d9['OUMUZ'](new Date()['getTime'](), _0x4cf9d9['avpbS'](random, 0x64, 0x1f4)) + '&phoneid=' + $['UUID'] + '&_=' + new Date()['getTime']() + '&sceneval=2&g_login_type=1' + _0x345a34,
        'headers': {
            'Host': _0x4cf9d9['YlnNS'],
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'jdpingou;iPhone;4.9.0;14.3;' + $['UUID'] + ';network/wifi;model/iPhone12,1;appBuild/100567;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/1;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x4cf9d9['EAvHH'],
            'Referer': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html',
            'Accept-Encoding': _0x4cf9d9['Wulpy']
        }
    };
}

function random(_0x5c9108, _0x49082b) {
    var _0x31c9a2 = {
        'pIfEF': function(_0x40ea14, _0x2f5259) {
            return _0x40ea14 + _0x2f5259;
        },
        'mOist': function(_0x2b2ee1, _0x5cf715) {
            return _0x2b2ee1 * _0x5cf715;
        },
        'UsUYY': function(_0x82c762, _0x21c4c6) {
            return _0x82c762 - _0x21c4c6;
        }
    };
    return _0x31c9a2['pIfEF'](Math['floor'](_0x31c9a2['mOist'](Math['random'](), _0x31c9a2['UsUYY'](_0x49082b, _0x5c9108))), _0x5c9108);
}

function getUUID(_0x36198a = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', _0xbb6d9b = 0x0) {
    var _0x21ca49 = {
        'qVTJe': function(_0x455dd7, _0x57d36b) {
            return _0x455dd7 + _0x57d36b;
        },
        'DlVki': function(_0x543174, _0x5b4921) {
            return _0x543174 * _0x5b4921;
        },
        'FCWDk': function(_0x17c13c, _0x5ce668) {
            return _0x17c13c - _0x5ce668;
        },
        'asTmn': function(_0x54b00d, _0x144baf) {
            return _0x54b00d !== _0x144baf;
        },
        'ueXqp': 'wjMPz',
        'jFcHd': 'YdcxE',
        'UvkEH': function(_0x3f6371, _0x754e45) {
            return _0x3f6371 | _0x754e45;
        },
        'IvepO': function(_0x53090b, _0x1067e7) {
            return _0x53090b == _0x1067e7;
        },
        'McWWF': function(_0x25d4ee, _0x14d5cc) {
            return _0x25d4ee | _0x14d5cc;
        },
        'mDnWx': function(_0x1549b3, _0x12b32a) {
            return _0x1549b3 & _0x12b32a;
        }
    };
    return _0x36198a['replace'](/[xy]/g, function(_0x1f96c7) {
        if (_0x21ca49['asTmn'](_0x21ca49['ueXqp'], _0x21ca49['jFcHd'])) {
            var _0x1509cd = _0x21ca49['UvkEH'](Math['random']() * 0x10, 0x0),
                _0x5a7eec = _0x21ca49['IvepO'](_0x1f96c7, 'x') ? _0x1509cd : _0x21ca49['McWWF'](_0x21ca49['mDnWx'](_0x1509cd, 0x3), 0x8);
            if (_0xbb6d9b) {
                uuid = _0x5a7eec['toString'](0x24)['toUpperCase']();
            } else {
                uuid = _0x5a7eec['toString'](0x24);
            }
            return uuid;
        } else {
            return _0x21ca49['qVTJe'](Math['floor'](_0x21ca49['DlVki'](Math['random'](), _0x21ca49['FCWDk'](max, min))), min);
        }
    });
}

function checkCookie() {
    var _0x44efda = {
        'afgmS': function(_0x40ad37) {
            return _0x40ad37();
        },
        'QGDdF': function(_0x421f11, _0x4ebd0f) {
            return _0x421f11 === _0x4ebd0f;
        },
        'ssvvP': function(_0x261785, _0x596ad0) {
            return _0x261785 === _0x596ad0;
        },
        'nVKmF': 'zh-cn',
        'glPSu': 'gzip, deflate, br',
        'Sdbbw': 'YrYRR',
        'AXMSV': 'BOdYD',
        'faszV': 'LWPHV',
        'sUBBz': 'XIpia',
        'XbwSI': function(_0x59ffa7, _0x305c10) {
            return _0x59ffa7 === _0x305c10;
        },
        'YVchI': 'MuLNR',
        'gSUvB': function(_0x2d7930, _0x4ac05e) {
            return _0x2d7930 === _0x4ac05e;
        },
        'BKnze': 'zGYXn',
        'uuteK': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'rnCWm': '*/*',
        'SMdvl': 'keep-alive',
        'tUVzV': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'
    };
    const _0x3c4daa = {
        'url': _0x44efda['uuteK'],
        'headers': {
            'Host': 'me-api.jd.com',
            'Accept': _0x44efda['rnCWm'],
            'Connection': _0x44efda['SMdvl'],
            'Cookie': cookie,
            'User-Agent': _0x44efda['tUVzV'],
            'Accept-Language': _0x44efda['nVKmF'],
            'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
            'Accept-Encoding': _0x44efda['glPSu']
        }
    };
    return new Promise(_0x5d5920 => {
        var _0x8cd8c = {
            'XrADn': function(_0x181bd4) {
                return _0x44efda['afgmS'](_0x181bd4);
            },
            'ijZVg': function(_0x3af968, _0x10dd85) {
                return _0x44efda['QGDdF'](_0x3af968, _0x10dd85);
            },
            'bgGiy': '1001',
            'FZkHe': function(_0x19f4bc, _0xbd6f18) {
                return _0x44efda['ssvvP'](_0x19f4bc, _0xbd6f18);
            },
            'vWUrH': function(_0x22674a, _0x3fa49c) {
                return _0x22674a - _0x3fa49c;
            },
            'hTBGI': 'wq.jd.com',
            'hQehk': '*/*',
            'lvpcD': 'keep-alive',
            'LnVJp': _0x44efda['nVKmF'],
            'ybgat': _0x44efda['glPSu'],
            'fwtMa': _0x44efda['Sdbbw'],
            'QrRvm': 'nvsBY',
            'UtyLm': function(_0x3a9dfe, _0x55ac92) {
                return _0x3a9dfe === _0x55ac92;
            },
            'vUCrM': _0x44efda['AXMSV'],
            'Luzrh': 'oUQkI',
            'SdOWf': 'userInfo',
            'HVASn': function(_0x1b13ff, _0x534d60) {
                return _0x1b13ff !== _0x534d60;
            },
            'kqHye': _0x44efda['faszV'],
            'CIYxh': _0x44efda['sUBBz'],
            'JeUOm': function(_0x28d86f, _0x18ebd6) {
                return _0x44efda['XbwSI'](_0x28d86f, _0x18ebd6);
            },
            'gGvTT': _0x44efda['YVchI']
        };
        if (_0x44efda['gSUvB'](_0x44efda['BKnze'], _0x44efda['BKnze'])) {
            $['get'](_0x3c4daa, (_0x2cfd36, _0x116d92, _0x59a546) => {
                var _0x2aae82 = {
                    'wsWNY': function(_0x36dc94, _0x15d192) {
                        return _0x8cd8c['vWUrH'](_0x36dc94, _0x15d192);
                    },
                    'fhuKq': function(_0x294b11, _0x47bc80, _0x50bbe2) {
                        return _0x294b11(_0x47bc80, _0x50bbe2);
                    },
                    'oJNSL': _0x8cd8c['hTBGI'],
                    'wQNsO': _0x8cd8c['hQehk'],
                    'Cllcw': _0x8cd8c['lvpcD'],
                    'tYNjp': _0x8cd8c['LnVJp'],
                    'cquXA': _0x8cd8c['ybgat']
                };
                if (_0x8cd8c['fwtMa'] !== _0x8cd8c['QrRvm']) {
                    try {
                        if (_0x2cfd36) {
                            $['logErr'](_0x2cfd36);
                        } else {
                            if (_0x59a546) {
                                if (_0x8cd8c['UtyLm'](_0x8cd8c['vUCrM'], _0x8cd8c['vUCrM'])) {
                                    _0x59a546 = JSON['parse'](_0x59a546);
                                    if (_0x59a546['retcode'] === _0x8cd8c['bgGiy']) {
                                        if (_0x8cd8c['Luzrh'] === 'oUQkI') {
                                            $['isLogin'] = ![];
                                            return;
                                        } else {
                                            return {
                                                'url': 'https://wq.jd.com/cubeactive/steprewardv3/' + function_id + '?activeId=489177&publishFlag=1&channel=7&stepreward_jstoken=' + $['JSTOKEN'] + '&timestamp=' + _0x2aae82['wsWNY'](new Date()['getTime'](), _0x2aae82['fhuKq'](random, 0x64, 0x1f4)) + '&phoneid=' + $['UUID'] + '&_=' + new Date()['getTime']() + '&sceneval=2&g_login_type=1' + args,
                                                'headers': {
                                                    'Host': _0x2aae82['oJNSL'],
                                                    'Accept': _0x2aae82['wQNsO'],
                                                    'Connection': _0x2aae82['Cllcw'],
                                                    'Cookie': cookie,
                                                    'User-Agent': 'jdpingou;iPhone;4.9.0;14.3;' + $['UUID'] + ';network/wifi;model/iPhone12,1;appBuild/100567;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/1;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                                    'Accept-Language': _0x2aae82['tYNjp'],
                                                    'Referer': 'https://wqactive.jd.com/cube/front/activePublish/step_reward/489177.html',
                                                    'Accept-Encoding': _0x2aae82['cquXA']
                                                }
                                            };
                                        }
                                    }
                                    if (_0x8cd8c['UtyLm'](_0x59a546['retcode'], '0') && _0x59a546['data']['hasOwnProperty'](_0x8cd8c['SdOWf'])) {
                                        if (_0x8cd8c['HVASn'](_0x8cd8c['kqHye'], _0x8cd8c['CIYxh'])) {
                                            $['nickName'] = _0x59a546['data']['userInfo']['baseInfo']['nickname'];
                                        } else {
                                            message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                                        }
                                    }
                                } else {
                                    $['logErr'](e);
                                }
                            } else {
                                if (_0x8cd8c['JeUOm'](_0x8cd8c['gGvTT'], 'MuLNR')) {
                                    $['log']('京东返回了空数据');
                                } else {
                                    _0x8cd8c['XrADn'](_0x5d5920);
                                }
                            }
                        }
                    } catch (_0x4cdf01) {
                        $['logErr'](_0x4cdf01);
                    } finally {
                        if (_0x8cd8c['HVASn']('LObCe', 'LObCe')) {
                            _0x59a546 = JSON['parse'](_0x59a546);
                            if (_0x8cd8c['ijZVg'](_0x59a546['retcode'], _0x8cd8c['bgGiy'])) {
                                $['isLogin'] = ![];
                                return;
                            }
                            if (_0x8cd8c['FZkHe'](_0x59a546['retcode'], '0') && _0x59a546['data']['hasOwnProperty']('userInfo')) {
                                $['nickName'] = _0x59a546['data']['userInfo']['baseInfo']['nickname'];
                            }
                        } else {
                            _0x8cd8c['XrADn'](_0x5d5920);
                        }
                    }
                } else {
                    message += '\x0a【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
                }
            });
        } else {
            $['logErr'](err);
        }
    });
};
_0xodO = 'jsjiami.com.v6'
// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
