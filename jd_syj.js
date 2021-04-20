/*
 * @Author: lxk0301 https://gitee.com/lxk0301
 * @Date: 2020-11-27 09:19:21
 * @Last Modified by: lxk0301
 * @Last Modified time: 2021-4-20 16:58:02
 */
/*
赚京豆脚本，一：签到(一周签到可获得30京豆)，二：做任务 天天领京豆(加速领京豆)、三：赚京豆-瓜分京豆
活动入口：赚京豆(微信小程序)-赚京豆-签到领京豆
更新地址：https://gitee.com/lxk0301/jd_scripts/raw/master/jd_syj.js
签到(一周签到可获得30京豆)参考github@jidesheng6修改而来
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#赚京豆
10 0,7,23 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_syj.js, tag=赚京豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_syj.png, enabled=true

================Loon==============
[Script]
cron "10 0,7,23 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_syj.js, tag=赚京豆

===============Surge=================
赚京豆 = type=cron,cronexp="10 0,7,23 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_syj.js

============小火箭=========
赚京豆 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_syj.js, cronexpr="10 0,7,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('赚京豆');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;


/*
 *Progcessed By JSDec in 4.45s
 *JSDec - JSDec.js.org
 */
$['tuanList'] = [];
$['authorTuanList'] = [];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x523fe3 => {
        cookiesArr['push'](jdCookieNode[_0x523fe3]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
    if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x31b159 => _0x31b159['cookie'])]['filter'](_0x55b363 => !!_0x55b363);
}
const JD_API_HOST = 'https://api.m.jd.com/api';
!(async () => {
    var _0xb9f636 = {
        'VYUwY': 'success',
        'oreDp': 'data',
        'xXiWj': 'rewardBeanAmount',
        'KFgOf': function(_0x1f3d01) {
            return _0x1f3d01();
        },
        'ppMIB': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'toGxh': 'https://bean.m.jd.com/bean/signIndex.action',
        'Irioi': function(_0x33ef2e, _0x3114d6) {
            return _0x33ef2e(_0x3114d6);
        },
        'qkyRc': 'http://adguard.b.freefrp.net/jd_zz.json',
        'gLPmT': 'http://adguard.b.freefrp.net/jd_zz.json',
        'DrnaM': function(_0x774da9, _0x248ec7) {
            return _0x774da9 < _0x248ec7;
        },
        'NlYvs': function(_0x54e0f2, _0x68f584) {
            return _0x54e0f2 + _0x68f584;
        },
        'HKfMg': function(_0x4cb802) {
            return _0x4cb802();
        },
        'YOOpA': function(_0x3aca28, _0x5ce0f7) {
            return _0x3aca28 !== _0x5ce0f7;
        },
        'MOsJC': 'tBJpo',
        'vCstg': function(_0x420bab) {
            return _0x420bab();
        },
        'vvxSG': function(_0x5174e2, _0xa77a55) {
            return _0x5174e2 !== _0xa77a55;
        },
        'PQzSZ': 'JNpPn',
        'Djlsu': function(_0x2c4aac, _0x2ce95c) {
            return _0x2c4aac(_0x2ce95c);
        },
        'BqKHr': function(_0x19e18f, _0x4f4bee) {
            return _0x19e18f > _0x4f4bee;
        },
        'UigLV': function(_0x4003c6, _0x5bf1bc) {
            return _0x4003c6 !== _0x5bf1bc;
        },
        'wEzgb': 'NpjKt',
        'asJvA': function(_0x5571c1, _0x57810a) {
            return _0x5571c1 < _0x57810a;
        },
        'JvWFn': 'assistedPinEncrypted',
        'OxzzB': function(_0x506453, _0x358ef) {
            return _0x506453(_0x358ef);
        },
        'DHisR': function(_0xc21848, _0x421519) {
            return _0xc21848 < _0x421519;
        },
        'UcrUx': function(_0x51242e, _0x36f745) {
            return _0x51242e !== _0x36f745;
        },
        'KktSg': 'dmqiL'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0xb9f636['ppMIB'], _0xb9f636['toGxh'], {
            'open-url': _0xb9f636['toGxh']
        });
        return;
    }
    await _0xb9f636['Irioi'](getAuthorShareCode, _0xb9f636['qkyRc']);
    await _0xb9f636['Irioi'](getAuthorShareCode, _0xb9f636['gLPmT']);
    for (let _0x9dd7d2 = 0x0; _0xb9f636['DrnaM'](_0x9dd7d2, cookiesArr['length']); _0x9dd7d2++) {
        if (cookiesArr[_0x9dd7d2]) {
            cookie = cookiesArr[_0x9dd7d2];
            $['UserName'] = _0xb9f636['Irioi'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $['index'] = _0xb9f636['NlYvs'](_0x9dd7d2, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            message = '';
            await _0xb9f636['HKfMg'](TotalBean);
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            if (!$['isLogin']) {
                if (_0xb9f636['YOOpA'](_0xb9f636['MOsJC'], _0xb9f636['MOsJC'])) {
                    data = JSON['parse'](data);
                    if (data[_0xb9f636['VYUwY']]) {
                        console['log'](data[_0xb9f636['oreDp']][_0xb9f636['xXiWj']] + '京豆领取成功');
                        $['rewardBeanNum'] += data[_0xb9f636['oreDp']][_0xb9f636['xXiWj']];
                        message += (message ? '\x0a' : '') + '【做任务 天天领京豆】' + $['rewardBeanNum'] + '京豆';
                    } else {
                        console['log'](data['message']);
                    }
                } else {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0xb9f636['toGxh']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
            }
            await _0xb9f636['vCstg'](userSignIn);
            await _0xb9f636['vCstg'](vvipTask);
            await _0xb9f636['vCstg'](distributeBeanActivity);
            await _0xb9f636['vCstg'](showMsg);
        }
    }
    console['log']('\n\n内部互助 【赚京豆(微信小程序)-瓜分京豆】活动(优先内部账号互助(需内部cookie数量大于' + ($['assistNum'] || 0x4) + '个)，如有剩余助力次数则给作者lxk0301助力)\n');
    for (let _0x4540a6 = 0x0; _0xb9f636['DrnaM'](_0x4540a6, cookiesArr['length']); _0x4540a6++) {
        if (_0xb9f636['vvxSG'](_0xb9f636['PQzSZ'], _0xb9f636['PQzSZ'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            $['canHelp'] = !![];
            if (cookiesArr[_0x4540a6]) {
                cookie = cookiesArr[_0x4540a6];
                $['UserName'] = _0xb9f636['Djlsu'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                if ($['canHelp'] && _0xb9f636['BqKHr'](cookiesArr['length'], $['assistNum'])) {
                    if (_0xb9f636['UigLV'](_0xb9f636['wEzgb'], _0xb9f636['wEzgb'])) {
                        return new Promise(_0x11ef74 => {
                            if (message) $['msg']($['name'], '', '【京东账号' + $['index'] + '】' + $['nickName'] + '\x0a' + message);
                            _0xb9f636['KFgOf'](_0x11ef74);
                        });
                    } else {
                        if ($['tuanList']['length']) console['log']('开始账号内部互助 赚京豆-瓜分京豆 活动，优先内部账号互助');
                        for (let _0x47cec8 = 0x0; _0xb9f636['asJvA'](_0x47cec8, $['tuanList']['length']); ++_0x47cec8) {
                            console['log']('账号 ' + $['UserName'] + ' 开始给 【' + $['tuanList'][_0x47cec8][_0xb9f636['JvWFn']] + '】助力');
                            await _0xb9f636['OxzzB'](helpFriendTuan, $['tuanList'][_0x47cec8]);
                            if (!$['canHelp']) break;
                        }
                    }
                }
                if ($['canHelp']) {
                    if ($['authorTuanList']['length']) console['log']('开始账号内部互助 赚京豆-瓜分京豆 活动，如有剩余则给作者lxk0301助力');
                    for (let _0x1c3d0a = 0x0; _0xb9f636['DHisR'](_0x1c3d0a, $['authorTuanList']['length']); ++_0x1c3d0a) {
                        if (_0xb9f636['UcrUx'](_0xb9f636['KktSg'], _0xb9f636['KktSg'])) {
                            if (err) {} else {
                                $['authorTuanList'] = $['authorTuanList']['concat'](JSON['parse'](data));
                            }
                        } else {
                            console['log']('账号 ' + $['UserName'] + ' 开始给作者lxk0301 ' + $['authorTuanList'][_0x1c3d0a][_0xb9f636['JvWFn']] + '助力');
                            await _0xb9f636['OxzzB'](helpFriendTuan, $['authorTuanList'][_0x1c3d0a]);
                            if (!$['canHelp']) break;
                        }
                    }
                }
            }
        }
    }
})()['catch'](_0x1abc18 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x1abc18 + '!', '');
})['finally'](() => {
    $['done']();
});

function showMsg() {
    var _0x5d4175 = {
        'wWFAF': function(_0x28ee81) {
            return _0x28ee81();
        }
    };
    return new Promise(_0x59a4f6 => {
        if (message) $['msg']($['name'], '', '【京东账号' + $['index'] + '】' + $['nickName'] + '\x0a' + message);
        _0x5d4175['wWFAF'](_0x59a4f6);
    });
}
let signFlag = 0x0;

function userSignIn() {
    var _0x13edbc = {
        'qVmYS': function(_0x19942d) {
            return _0x19942d();
        },
        'aXuSf': function(_0x32fa4d) {
            return _0x32fa4d();
        },
        'ZvPBX': function(_0x65b61b, _0x5e2b89) {
            return _0x65b61b !== _0x5e2b89;
        },
        'ebYXc': 'PlJZr',
        'mMCzg': function(_0x3aba90, _0x252720) {
            return _0x3aba90 !== _0x252720;
        },
        'pWaHK': 'CjYIE',
        'BnwFo': 'OvUnU',
        'IBaHX': function(_0x210b0a, _0xecf1e4) {
            return _0x210b0a !== _0xecf1e4;
        },
        'rBlKw': 'PywkW',
        'chrVH': function(_0x3df04f, _0x4ad511) {
            return _0x3df04f !== _0x4ad511;
        },
        'lQdJd': 'XJapE',
        'NHHUv': 'uWjlq',
        'SvbGw': function(_0x3a3cad, _0x533938) {
            return _0x3a3cad(_0x533938);
        },
        'AFnsy': function(_0x519553, _0x3ddd1f) {
            return _0x519553 === _0x3ddd1f;
        },
        'IhPVU': 'bRINo',
        'nriEC': function(_0x3b36b7, _0x5c3b6a) {
            return _0x3b36b7 === _0x5c3b6a;
        },
        'gPfEF': function(_0x14a007, _0x1ccd30) {
            return _0x14a007 < _0x1ccd30;
        },
        'DCoBQ': function(_0x4281a2) {
            return _0x4281a2();
        },
        'qNMGb': function(_0x5d6f97, _0x51c906) {
            return _0x5d6f97 !== _0x51c906;
        },
        'hZAzu': 'WHuRo',
        'cpVfx': function(_0x8f391a) {
            return _0x8f391a();
        },
        'IWzoL': 'koFQH',
        'yqMIe': 'NWSCQ',
        'SHmbX': 'ccd8067defcd4787871b7f0c96fcbf5c',
        'SnSPq': 'MiniProgram',
        'wYUUx': function(_0x12c5d1, _0x1419e2, _0x136cfb) {
            return _0x12c5d1(_0x1419e2, _0x136cfb);
        },
        'NenCR': 'userSignIn'
    };
    return new Promise(_0x4efd08 => {
        if (_0x13edbc['nriEC'](_0x13edbc['IWzoL'], _0x13edbc['yqMIe'])) {
            _0x13edbc['qVmYS'](_0x4efd08);
        } else {
            const _0x3c8b95 = {
                'activityId': _0x13edbc['SHmbX'],
                'inviterId': '',
                'channel': _0x13edbc['SnSPq']
            };
            $['get'](_0x13edbc['wYUUx'](taskUrl, _0x13edbc['NenCR'], _0x3c8b95), async (_0x436763, _0x13e4fa, _0x54a266) => {
                var _0x4c9631 = {
                    'VksaL': function(_0x2ac237) {
                        return _0x13edbc['aXuSf'](_0x2ac237);
                    }
                };
                if (_0x13edbc['ZvPBX'](_0x13edbc['ebYXc'], _0x13edbc['ebYXc'])) {
                    $['done']();
                } else {
                    try {
                        if (_0x13edbc['mMCzg'](_0x13edbc['pWaHK'], _0x13edbc['BnwFo'])) {
                            if (_0x436763) {
                                if (_0x13edbc['IBaHX'](_0x13edbc['rBlKw'], _0x13edbc['rBlKw'])) {
                                    if (_0x436763) {
                                        console['log']('' + JSON['stringify'](_0x436763));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {}
                                } else {
                                    console['log']('' + JSON['stringify'](_0x436763));
                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                }
                            } else {
                                if (_0x13edbc['chrVH'](_0x13edbc['lQdJd'], _0x13edbc['NHHUv'])) {
                                    if (_0x13edbc['SvbGw'](safeGet, _0x54a266)) {
                                        _0x54a266 = JSON['parse'](_0x54a266);
                                        if (_0x13edbc['AFnsy'](_0x54a266['code'], 0x0)) {
                                            if (_0x13edbc['chrVH'](_0x13edbc['IhPVU'], _0x13edbc['IhPVU'])) {
                                                console['log']('已开团(未达上限)，但团成员人未满\n\n');
                                            } else {
                                                signFlag = 0x0;
                                                console['log']($['name'] + '今日签到成功');
                                                if (_0x54a266['data']) {
                                                    let {
                                                        alreadySignDays,
                                                        beanTotalNum,
                                                        todayPrize,
                                                        eachDayPrize
                                                    } = _0x54a266['data'];
                                                    message += '【第' + alreadySignDays + '日签到】成功，获得' + todayPrize['beanAmount'] + '京豆 🐶\n';
                                                    if (_0x13edbc['nriEC'](alreadySignDays, 0x7)) alreadySignDays = 0x0;
                                                    message += '【明日签到】可获得' + eachDayPrize[alreadySignDays]['beanAmount'] + '京豆 🐶\n';
                                                    message += '【累计获得】' + beanTotalNum + '京豆 🐶';
                                                }
                                            }
                                        } else if (_0x13edbc['nriEC'](_0x54a266['code'], 0x51)) {
                                            console['log']('【签到】失败，今日已签到');
                                        } else if (_0x13edbc['nriEC'](_0x54a266['code'], 0x6)) {
                                            $['log']($['name'] + '签到失败' + signFlag + ':' + _0x54a266['msg']);
                                            if (_0x13edbc['gPfEF'](signFlag, 0x3)) {
                                                signFlag++;
                                                await _0x13edbc['DCoBQ'](userSignIn);
                                            }
                                        } else if (_0x13edbc['nriEC'](_0x54a266['code'], 0x42)) {
                                            $['log']($['name'] + '签到失败:' + _0x54a266['msg']);
                                            message += '【签到】失败，' + _0x54a266['msg'];
                                        } else {
                                            console['log']('异常：' + JSON['stringify'](_0x54a266));
                                        }
                                    }
                                } else {
                                    _0x4c9631['VksaL'](_0x4efd08);
                                }
                            }
                        } else {
                            console['log'](_0x54a266['message']);
                        }
                    } catch (_0x45ef80) {
                        if (_0x13edbc['qNMGb'](_0x13edbc['hZAzu'], _0x13edbc['hZAzu'])) {
                            $['logErr'](_0x45ef80, _0x13e4fa);
                        } else {
                            $['logErr'](_0x45ef80, _0x13e4fa);
                        }
                    } finally {
                        _0x13edbc['cpVfx'](_0x4efd08);
                    }
                }
            });
        }
    });
}
async function vvipTask() {
    var _0x262ca7 = {
        'vqwXR': '5|1|2|3|0|6|7|4',
        'oWrUG': function(_0x48bcc1) {
            return _0x48bcc1();
        },
        'QzPGC': function(_0x3490d0) {
            return _0x3490d0();
        },
        'iygDz': function(_0x3d72b4) {
            return _0x3d72b4();
        },
        'CWHWG': function(_0x3b3dc3) {
            return _0x3b3dc3();
        },
        'iBoZP': function(_0x3c0dab, _0x46db15) {
            return _0x3c0dab !== _0x46db15;
        },
        'TouUx': 'FrEAs'
    };
    try {
        var _0x3039fe = _0x262ca7['vqwXR']['split']('|'),
            _0x21341c = 0x0;
        while (!![]) {
            switch (_0x3039fe[_0x21341c++]) {
                case '0':
                    if (!$['vvipFlag']) return;
                    continue;
                case '1':
                    $['rewardBeanNum'] = 0x0;
                    continue;
                case '2':
                    await _0x262ca7['oWrUG'](vvipscdp_raffle_auto_send_bean);
                    continue;
                case '3':
                    await _0x262ca7['QzPGC'](pg_channel_page_data);
                    continue;
                case '4':
                    await _0x262ca7['iygDz'](pg_channel_page_data);
                    continue;
                case '5':
                    $['vvipFlag'] = ![];
                    continue;
                case '6':
                    await _0x262ca7['CWHWG'](vviptask_receive_list);
                    continue;
                case '7':
                    await $['wait'](0x3e8);
                    continue;
            }
            break;
        }
    } catch (_0xa504b8) {
        if (_0x262ca7['iBoZP'](_0x262ca7['TouUx'], _0x262ca7['TouUx'])) {
            $['logErr'](_0xa504b8, resp);
        } else {
            $['logErr'](_0xa504b8);
        }
    }
}

function pg_channel_page_data() {
    var _0x2cf527 = {
        'BuTUq': 'sendBeanAmount',
        'DrRLO': function(_0x20e6bc, _0x472dd7) {
            return _0x20e6bc !== _0x472dd7;
        },
        'RkhLA': 'xpxKL',
        'JddrX': function(_0x553b32, _0x2deb55) {
            return _0x553b32(_0x2deb55);
        },
        'UaQpl': 'success',
        'ovYms': function(_0x587994, _0x2de32b) {
            return _0x587994 === _0x2de32b;
        },
        'fLxHs': 'KHNth',
        'mlGGM': 'data',
        'EuTve': 'floorInfoList',
        'tzPPX': function(_0xf1ca93, _0x4aea0d) {
            return _0xf1ca93 === _0x4aea0d;
        },
        'EtAfj': 'ourxk',
        'zXujn': 'ndIqN',
        'tsoCV': 'token',
        'ivWdQ': 'floorData',
        'WVhtE': 'userActivityInfo',
        'MmWer': function(_0x1333be, _0x522b1a) {
            return _0x1333be < _0x522b1a;
        },
        'bdhzX': 'LSDrV',
        'Gphpe': 'rHmuE',
        'jEdmn': 'vBQVT',
        'jwrUz': function(_0x3e9bca, _0x4214d2) {
            return _0x3e9bca(_0x4214d2);
        },
        'fxOwr': 'CvcmO',
        'YeVkx': function(_0x1dffb3, _0x46b6b1) {
            return _0x1dffb3 !== _0x46b6b1;
        },
        'KBZkr': 'MJiAj',
        'hpZjV': function(_0x4165ab) {
            return _0x4165ab();
        },
        'IwEUP': function(_0x251ebb, _0x1d3c11) {
            return _0x251ebb + _0x1d3c11;
        },
        'EtDBv': '【做任务 天天领京豆】 ',
        'xfjDe': '3b9f3e0d-7a67-4be3-a05f-9b076cb8ed6a',
        'vGKKR': function(_0x4673f2, _0x1152fa, _0x2caa3e) {
            return _0x4673f2(_0x1152fa, _0x2caa3e);
        },
        'LkZaH': 'pg_channel_page_data'
    };
    return new Promise(_0x1c97e2 => {
        var _0x2ca99a = {
            'iyJRs': _0x2cf527['UaQpl'],
            'dkFLf': _0x2cf527['BuTUq'],
            'YJpVD': function(_0x431a02, _0x358223) {
                return _0x2cf527['IwEUP'](_0x431a02, _0x358223);
            },
            'AOWwq': _0x2cf527['EtDBv']
        };
        const _0x44930b = {
            'paramData': {
                'token': _0x2cf527['xfjDe']
            }
        };
        $['get'](_0x2cf527['vGKKR'](taskUrl, _0x2cf527['LkZaH'], _0x44930b), async (_0x2dfdf5, _0x13886c, _0x4acad2) => {
            var _0x45741f = {
                'YYRes': _0x2cf527['BuTUq']
            };
            try {
                if (_0x2dfdf5) {
                    console['log']('' + JSON['stringify'](_0x2dfdf5));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x2cf527['DrRLO'](_0x2cf527['RkhLA'], _0x2cf527['RkhLA'])) {
                        console['log']('获得' + _0x4acad2['data'][_0x45741f['YYRes']] + '京豆');
                        $['rewardBeanNum'] += _0x4acad2['data'][_0x45741f['YYRes']];
                    } else {
                        if (_0x2cf527['JddrX'](safeGet, _0x4acad2)) {
                            _0x4acad2 = JSON['parse'](_0x4acad2);
                            if (_0x4acad2[_0x2cf527['UaQpl']]) {
                                if (_0x2cf527['ovYms'](_0x2cf527['fLxHs'], _0x2cf527['fLxHs'])) {
                                    if (_0x4acad2[_0x2cf527['mlGGM']] && _0x4acad2[_0x2cf527['mlGGM']][_0x2cf527['EuTve']]) {
                                        if (_0x2cf527['tzPPX'](_0x2cf527['EtAfj'], _0x2cf527['zXujn'])) {
                                            console['log']('200京豆活动已下线');
                                        } else {
                                            const _0xd1041b = _0x4acad2[_0x2cf527['mlGGM']][_0x2cf527['EuTve']]['filter'](_0x4e9e24 => !!_0x4e9e24 && _0x4e9e24['code'] === 'SWAT_RED_PACKET_ACT_INFO')[0x0];
                                            if (_0xd1041b['hasOwnProperty'](_0x2cf527['tsoCV']) && _0xd1041b[_0x2cf527['ivWdQ']]['hasOwnProperty'](_0x2cf527['WVhtE'])) {
                                                $['token'] = _0xd1041b[_0x2cf527['tsoCV']];
                                                const {
                                                    activityExistFlag,
                                                    redPacketOpenFlag,
                                                    redPacketRewardTakeFlag,
                                                    beanAmountTakeMinLimit,
                                                    currActivityBeanAmount
                                                } = _0xd1041b[_0x2cf527['ivWdQ']][_0x2cf527['WVhtE']];
                                                if (activityExistFlag) {
                                                    if (!redPacketOpenFlag) {
                                                        console['log']('做任务 天天领京豆 活动未开启，现在去开启此活动\n');
                                                        await _0x2cf527['JddrX'](openRedPacket, $['token']);
                                                    } else {
                                                        console['log']('做任务 天天领京豆 累计到' + beanAmountTakeMinLimit + '京豆可领取到京东账户 ' + currActivityBeanAmount + '/' + beanAmountTakeMinLimit);
                                                        if (_0x2cf527['MmWer'](currActivityBeanAmount, beanAmountTakeMinLimit)) $['vvipFlag'] = !![];
                                                        if (redPacketRewardTakeFlag) {
                                                            if (_0x2cf527['DrRLO'](_0x2cf527['bdhzX'], _0x2cf527['Gphpe'])) {
                                                                console['log']('做任务 天天领京豆 200京豆已领取');
                                                            } else {
                                                                $['logErr'](e, _0x13886c);
                                                            }
                                                        } else {
                                                            if (_0x2cf527['tzPPX'](_0x2cf527['jEdmn'], _0x2cf527['jEdmn'])) {
                                                                await _0x2cf527['jwrUz'](pg_interact_interface_invoke, $['token']);
                                                            } else {
                                                                $['logErr'](e, _0x13886c);
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    if (_0x2cf527['DrRLO'](_0x2cf527['fxOwr'], _0x2cf527['fxOwr'])) {
                                                        _0x4acad2 = JSON['parse'](_0x4acad2);
                                                        if (_0x4acad2[_0x2ca99a['iyJRs']]) {
                                                            if (_0x4acad2['data'] && _0x4acad2['data'][_0x2ca99a['dkFLf']]) {
                                                                console['log']('获得' + _0x4acad2['data'][_0x2ca99a['dkFLf']] + '京豆');
                                                                $['rewardBeanNum'] += _0x4acad2['data'][_0x2ca99a['dkFLf']];
                                                            }
                                                        } else {
                                                            console['log'](_0x2ca99a['YJpVD'](_0x2ca99a['AOWwq'], _0x4acad2['message']));
                                                        }
                                                    } else {
                                                        console['log']('200京豆活动已下线');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (_0x2dfdf5) {
                                        console['log']('' + JSON['stringify'](_0x2dfdf5));
                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                    } else {}
                                }
                            } else {
                                console['log'](_0x4acad2['message']);
                            }
                        }
                    }
                }
            } catch (_0xa86ac0) {
                $['logErr'](_0xa86ac0, _0x13886c);
            } finally {
                if (_0x2cf527['YeVkx'](_0x2cf527['KBZkr'], _0x2cf527['KBZkr'])) {
                    console['log']('\n开团失败：' + JSON['stringify'](_0x4acad2) + '\x0a');
                } else {
                    _0x2cf527['hpZjV'](_0x1c97e2);
                }
            }
        });
    });
}

function vvipscdp_raffle_auto_send_bean() {
    var _0x4c1420 = {
        'FgmUI': function(_0x405837, _0x364024) {
            return _0x405837 + _0x364024;
        },
        'LMBST': '【做任务 天天领京豆】 ',
        'iWAIa': function(_0x50f424) {
            return _0x50f424();
        },
        'imbek': 'sendBeanAmount',
        'AVBrg': function(_0x39bc20, _0x56e107) {
            return _0x39bc20 !== _0x56e107;
        },
        'FJezf': 'JpSGo',
        'cydeN': 'jlUXd',
        'uvHlw': function(_0x3ff23f, _0x53e2f0) {
            return _0x3ff23f === _0x53e2f0;
        },
        'WmTDl': 'Vhvum',
        'mhECD': 'ThvMf',
        'mPEYI': function(_0x4e78ca, _0xd3ae65) {
            return _0x4e78ca === _0xd3ae65;
        },
        'ldMUc': 'SiiFF',
        'hArpt': 'lMaMs',
        'eTOYH': function(_0x34757d, _0x298e9b) {
            return _0x34757d(_0x298e9b);
        },
        'eSJmc': 'success',
        'PRPLC': function(_0x2cced4, _0x20e2d7) {
            return _0x2cced4 !== _0x20e2d7;
        },
        'RyoYN': 'ABShR',
        'RzZFB': 'exRbr',
        'rRwZl': 'lPnOt',
        'MoCno': 'JOVJu',
        'oucuf': 'MQOIH',
        'swPdT': function(_0x594820) {
            return _0x594820();
        },
        'zruPV': 'swat_system_id',
        'wrJdy': function(_0xd47ffc, _0x2be19c) {
            return _0xd47ffc(_0x2be19c);
        },
        'QLMKU': function(_0x1af1de, _0x17ef8b) {
            return _0x1af1de + _0x17ef8b;
        },
        'DGmGs': function(_0x4d32ad, _0x46796a) {
            return _0x4d32ad * _0x46796a;
        },
        'rLPTk': function(_0x245601, _0x5c3df4) {
            return _0x245601 * _0x5c3df4;
        },
        'sIrdT': function(_0x4a781a, _0x20d7ed) {
            return _0x4a781a * _0x20d7ed;
        },
        'iKCgw': '*/*',
        'plWlt': 'gzip, deflate, br',
        'MNgGT': 'zh-cn',
        'fXSeh': 'keep-alive',
        'HpMJu': 'application/x-www-form-urlencoded',
        'zidUr': 'api.m.jd.com',
        'YKoBG': 'https://lottery.m.jd.com/',
        'ymKGw': function(_0x23fd1e, _0x3d41d5) {
            return _0x23fd1e(_0x3d41d5);
        },
        'bVvZy': './USER_AGENTS',
        'FZsPQ': 'JDUA',
        'AQwDL': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x2e7762 = {
        'channelCode': _0x4c1420['zruPV']
    };
    const _0x54484e = {
        'url': JD_API_HOST + 'api?functionId=vvipscdp_raffle_auto_send_bean&body=' + _0x4c1420['wrJdy'](escape, JSON['stringify'](_0x2e7762)) + '&appid=lottery_drew&t=' + _0x4c1420['QLMKU'](_0x4c1420['QLMKU'](new Date()['getTime'](), _0x4c1420['DGmGs'](_0x4c1420['rLPTk'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x4c1420['rLPTk'](_0x4c1420['sIrdT'](_0x4c1420['sIrdT'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x4c1420['iKCgw'],
            'Accept-Encoding': _0x4c1420['plWlt'],
            'Accept-Language': _0x4c1420['MNgGT'],
            'Connection': _0x4c1420['fXSeh'],
            'Content-Type': _0x4c1420['HpMJu'],
            'Host': _0x4c1420['zidUr'],
            'Referer': _0x4c1420['YKoBG'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x4c1420['ymKGw'](require, _0x4c1420['bVvZy'])['USER_AGENT'] : $['getdata'](_0x4c1420['FZsPQ']) ? $['getdata'](_0x4c1420['FZsPQ']) : _0x4c1420['AQwDL']
        }
    };
    return new Promise(_0xf83999 => {
        var _0x7e82cf = {
            'RyzGL': function(_0x599015, _0x4c886f) {
                return _0x4c1420['FgmUI'](_0x599015, _0x4c886f);
            },
            'dfgvV': _0x4c1420['LMBST'],
            'MNXVy': function(_0x2c2dff) {
                return _0x4c1420['iWAIa'](_0x2c2dff);
            },
            'HKYtH': _0x4c1420['imbek'],
            'HaKDs': function(_0x1a9404, _0x21a185) {
                return _0x4c1420['AVBrg'](_0x1a9404, _0x21a185);
            },
            'ieVFm': _0x4c1420['FJezf'],
            'IBnhn': function(_0x552113, _0x7e3176) {
                return _0x4c1420['AVBrg'](_0x552113, _0x7e3176);
            },
            'CMmUp': _0x4c1420['cydeN'],
            'IKjGg': function(_0x4902c6, _0x2135e3) {
                return _0x4c1420['uvHlw'](_0x4902c6, _0x2135e3);
            },
            'xsIyp': _0x4c1420['WmTDl'],
            'qZpdG': _0x4c1420['mhECD'],
            'AeGNe': function(_0x2598ae, _0x49c00a) {
                return _0x4c1420['mPEYI'](_0x2598ae, _0x49c00a);
            },
            'mLnik': _0x4c1420['ldMUc'],
            'UuVMW': _0x4c1420['hArpt'],
            'GFloD': function(_0xbf4837, _0x53fcc2) {
                return _0x4c1420['eTOYH'](_0xbf4837, _0x53fcc2);
            },
            'kVMHA': _0x4c1420['eSJmc'],
            'huGup': function(_0x977060, _0x6afd2e) {
                return _0x4c1420['PRPLC'](_0x977060, _0x6afd2e);
            },
            'iUkpE': _0x4c1420['RyoYN'],
            'Sgzbb': function(_0x37e9c9, _0x1bb71f) {
                return _0x4c1420['PRPLC'](_0x37e9c9, _0x1bb71f);
            },
            'xUulf': _0x4c1420['RzZFB'],
            'UKQxS': function(_0x949455, _0x11df3e) {
                return _0x4c1420['FgmUI'](_0x949455, _0x11df3e);
            },
            'duJLd': _0x4c1420['rRwZl'],
            'WrTky': _0x4c1420['MoCno'],
            'MZgij': _0x4c1420['oucuf'],
            'fEfzI': function(_0x575832) {
                return _0x4c1420['swPdT'](_0x575832);
            }
        };
        $['post'](_0x54484e, async (_0x23b299, _0x4045e9, _0x5ade62) => {
            var _0x1a3015 = {
                'JKrUe': _0x7e82cf['HKYtH']
            };
            if (_0x7e82cf['HaKDs'](_0x7e82cf['ieVFm'], _0x7e82cf['ieVFm'])) {
                console['log']('已开团(未达上限)，团成员人已满\n\n');
            } else {
                try {
                    if (_0x7e82cf['IBnhn'](_0x7e82cf['CMmUp'], _0x7e82cf['CMmUp'])) {
                        console['log']('' + JSON['stringify'](_0x23b299));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x23b299) {
                            if (_0x7e82cf['IKjGg'](_0x7e82cf['xsIyp'], _0x7e82cf['qZpdG'])) {
                                console['log'](_0x7e82cf['RyzGL'](_0x7e82cf['dfgvV'], _0x5ade62['message']));
                            } else {
                                console['log']('' + JSON['stringify'](_0x23b299));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x7e82cf['AeGNe'](_0x7e82cf['mLnik'], _0x7e82cf['UuVMW'])) {
                                _0x7e82cf['MNXVy'](_0xf83999);
                            } else {
                                if (_0x7e82cf['GFloD'](safeGet, _0x5ade62)) {
                                    _0x5ade62 = JSON['parse'](_0x5ade62);
                                    if (_0x5ade62[_0x7e82cf['kVMHA']]) {
                                        if (_0x7e82cf['huGup'](_0x7e82cf['iUkpE'], _0x7e82cf['iUkpE'])) {
                                            console['log'](_0x5ade62['message']);
                                        } else {
                                            if (_0x5ade62['data'] && _0x5ade62['data'][_0x7e82cf['HKYtH']]) {
                                                console['log']('获得' + _0x5ade62['data'][_0x7e82cf['HKYtH']] + '京豆');
                                                $['rewardBeanNum'] += _0x5ade62['data'][_0x7e82cf['HKYtH']];
                                            }
                                        }
                                    } else {
                                        if (_0x7e82cf['Sgzbb'](_0x7e82cf['xUulf'], _0x7e82cf['xUulf'])) {
                                            console['log']('异常：' + JSON['stringify'](_0x5ade62));
                                        } else {
                                            console['log'](_0x7e82cf['UKQxS'](_0x7e82cf['dfgvV'], _0x5ade62['message']));
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x32721c) {
                    if (_0x7e82cf['Sgzbb'](_0x7e82cf['duJLd'], _0x7e82cf['WrTky'])) {
                        $['logErr'](_0x32721c, _0x4045e9);
                    } else {
                        console['log']('' + JSON['stringify'](_0x23b299));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    }
                } finally {
                    if (_0x7e82cf['AeGNe'](_0x7e82cf['MZgij'], _0x7e82cf['MZgij'])) {
                        _0x7e82cf['fEfzI'](_0xf83999);
                    } else {
                        if (_0x5ade62['data'] && _0x5ade62['data'][_0x1a3015['JKrUe']]) {
                            console['log']('获得' + _0x5ade62['data'][_0x1a3015['JKrUe']] + '京豆');
                            $['rewardBeanNum'] += _0x5ade62['data'][_0x1a3015['JKrUe']];
                        }
                    }
                }
            }
        });
    });
}

function vviptask_receive_list() {
    var _0x380204 = {
        'tldpY': 'success',
        'PwJfd': 'activityBeanInitAmount',
        'dVHnd': function(_0x11045f, _0x554bdb) {
            return _0x11045f === _0x554bdb;
        },
        'fDrbW': function(_0x3364e9, _0x20c42d) {
            return _0x3364e9 !== _0x20c42d;
        },
        'LVAQh': 'qkTvt',
        'njImQ': 'tkJuB',
        'fgzCQ': 'mMLkv',
        'FxxDr': function(_0x1c3673, _0x58a94c) {
            return _0x1c3673(_0x58a94c);
        },
        'lPNxs': 'xYLQD',
        'QqGAw': 'data',
        'juFOj': 'wdvbC',
        'QpQrl': 'CuPnJ',
        'uGTIU': '2|0|5|1|4|6|3',
        'wwDKM': 'title',
        'itzwA': function(_0x6909fd, _0x4de553) {
            return _0x6909fd(_0x4de553);
        },
        'dOfqk': function(_0x59330c) {
            return _0x59330c();
        },
        'hBTOT': 'SWAT_RED_PACKET',
        'LQdvt': function(_0x3cec29, _0x230a41) {
            return _0x3cec29 + _0x230a41;
        },
        'IaLEa': function(_0x579ab9, _0x501a8b) {
            return _0x579ab9 * _0x501a8b;
        },
        'SWdZX': function(_0x463c31, _0x55ff02) {
            return _0x463c31 * _0x55ff02;
        },
        'WCoQw': function(_0x509289, _0x260632) {
            return _0x509289 * _0x260632;
        },
        'PuslP': function(_0x98733d, _0x24f203) {
            return _0x98733d * _0x24f203;
        },
        'IFelc': '*/*',
        'XsDZe': 'gzip, deflate, br',
        'LOBIR': 'zh-cn',
        'rmVPe': 'keep-alive',
        'XvSan': 'application/x-www-form-urlencoded',
        'bIKlV': 'api.m.jd.com',
        'iPYVG': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'lmymk': function(_0x3ec48b, _0x3aafde) {
            return _0x3ec48b(_0x3aafde);
        },
        'YrKjI': './USER_AGENTS',
        'OwXhJ': 'JDUA',
        'lyaus': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    $['taskData'] = [];
    const _0x419a1d = {
        'channel': _0x380204['hBTOT'],
        'systemId': '19',
        'withAutoAward': 0x1
    };
    const _0xb857c1 = {
        'url': JD_API_HOST + '?functionId=vviptask_receive_list&body=' + _0x380204['itzwA'](escape, JSON['stringify'](_0x419a1d)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x380204['LQdvt'](_0x380204['LQdvt'](new Date()['getTime'](), _0x380204['IaLEa'](_0x380204['SWdZX'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x380204['WCoQw'](_0x380204['PuslP'](_0x380204['PuslP'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x380204['IFelc'],
            'Accept-Encoding': _0x380204['XsDZe'],
            'Accept-Language': _0x380204['LOBIR'],
            'Connection': _0x380204['rmVPe'],
            'Content-Type': _0x380204['XvSan'],
            'Host': _0x380204['bIKlV'],
            'Referer': _0x380204['iPYVG'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x380204['lmymk'](require, _0x380204['YrKjI'])['USER_AGENT'] : $['getdata'](_0x380204['OwXhJ']) ? $['getdata'](_0x380204['OwXhJ']) : _0x380204['lyaus']
        }
    };
    return new Promise(_0x1f56a1 => {
        var _0x281db8 = {
            'xzyDW': _0x380204['tldpY'],
            'DPwqj': _0x380204['PwJfd'],
            'PeIJv': function(_0x5d132e, _0x196443) {
                return _0x380204['dVHnd'](_0x5d132e, _0x196443);
            },
            'EhHiz': function(_0x475b21, _0x33a281) {
                return _0x380204['fDrbW'](_0x475b21, _0x33a281);
            },
            'SRRDy': _0x380204['LVAQh'],
            'Nnotz': _0x380204['njImQ'],
            'uJGzb': _0x380204['fgzCQ'],
            'HzZty': function(_0x1670de, _0x351251) {
                return _0x380204['FxxDr'](_0x1670de, _0x351251);
            },
            'LPrtY': _0x380204['lPNxs'],
            'vxoGQ': _0x380204['QqGAw'],
            'yJGIk': function(_0x211dcb, _0x44aa2c) {
                return _0x380204['fDrbW'](_0x211dcb, _0x44aa2c);
            },
            'lTSuD': _0x380204['juFOj'],
            'zQKdy': _0x380204['QpQrl'],
            'uqSGh': _0x380204['uGTIU'],
            'AqcuC': _0x380204['wwDKM'],
            'mbWav': function(_0x324396, _0x17a0ec) {
                return _0x380204['itzwA'](_0x324396, _0x17a0ec);
            },
            'EFqKB': function(_0x48fb3d, _0x4d95b3) {
                return _0x380204['itzwA'](_0x48fb3d, _0x4d95b3);
            },
            'cEpmg': function(_0x17b665) {
                return _0x380204['dOfqk'](_0x17b665);
            }
        };
        $['post'](_0xb857c1, async (_0x57937a, _0x145aa3, _0xf1b845) => {
            try {
                if (_0x281db8['EhHiz'](_0x281db8['SRRDy'], _0x281db8['SRRDy'])) {
                    console['log']('' + JSON['stringify'](_0x57937a));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {
                    if (_0x57937a) {
                        console['log']('' + JSON['stringify'](_0x57937a));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0x281db8['PeIJv'](_0x281db8['Nnotz'], _0x281db8['uJGzb'])) {
                            console['log']('' + JSON['stringify'](_0x57937a));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x281db8['HzZty'](safeGet, _0xf1b845)) {
                                if (_0x281db8['PeIJv'](_0x281db8['LPrtY'], _0x281db8['LPrtY'])) {
                                    _0xf1b845 = JSON['parse'](_0xf1b845);
                                    if (_0xf1b845[_0x281db8['xzyDW']]) {
                                        $['taskData'] = _0xf1b845[_0x281db8['vxoGQ']]['filter'](_0xe6f424 => !!_0xe6f424 && _0xe6f424['taskDataStatus'] !== 0x3);
                                        for (let _0xb622e3 of $['taskData']) {
                                            if (_0x281db8['yJGIk'](_0x281db8['lTSuD'], _0x281db8['zQKdy'])) {
                                                var _0x370c95 = _0x281db8['uqSGh']['split']('|'),
                                                    _0x585db7 = 0x0;
                                                while (!![]) {
                                                    switch (_0x370c95[_0x585db7++]) {
                                                        case '0':
                                                            await _0x281db8['HzZty'](vviptask_receive_getone, _0xb622e3['id']);
                                                            continue;
                                                        case '1':
                                                            console['log']('去完成 ' + _0xb622e3[_0x281db8['AqcuC']] + ' 任务');
                                                            continue;
                                                        case '2':
                                                            console['log']('\n领取 ' + _0xb622e3[_0x281db8['AqcuC']] + ' 任务');
                                                            continue;
                                                        case '3':
                                                            await _0x281db8['mbWav'](vviptask_reward_receive, _0xb622e3['id']);
                                                            continue;
                                                        case '4':
                                                            await _0x281db8['EFqKB'](vviptask_reach_task, _0xb622e3['id']);
                                                            continue;
                                                        case '5':
                                                            await $['wait'](0x3e8);
                                                            continue;
                                                        case '6':
                                                            console['log']('领取 ' + _0xb622e3[_0x281db8['AqcuC']] + ' 任务奖励\n');
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            } else {
                                                _0xf1b845 = JSON['parse'](_0xf1b845);
                                                if (_0xf1b845[_0x281db8['xzyDW']]) {
                                                    console['log']('活动开启成功，初始：' + (_0xf1b845['data'] && _0xf1b845['data'][_0x281db8['DPwqj']]) + '京豆');
                                                    $['vvipFlag'] = !![];
                                                } else {
                                                    console['log'](_0xf1b845['message']);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    signFlag = 0x0;
                                    console['log']($['name'] + '今日签到成功');
                                    if (_0xf1b845['data']) {
                                        let {
                                            alreadySignDays,
                                            beanTotalNum,
                                            todayPrize,
                                            eachDayPrize
                                        } = _0xf1b845['data'];
                                        message += '【第' + alreadySignDays + '日签到】成功，获得' + todayPrize['beanAmount'] + '京豆 🐶\n';
                                        if (_0x281db8['PeIJv'](alreadySignDays, 0x7)) alreadySignDays = 0x0;
                                        message += '【明日签到】可获得' + eachDayPrize[alreadySignDays]['beanAmount'] + '京豆 🐶\n';
                                        message += '【累计获得】' + beanTotalNum + '京豆 🐶';
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (_0x4e6200) {
                $['logErr'](_0x4e6200, _0x145aa3);
            } finally {
                _0x281db8['cEpmg'](_0x1f56a1);
            }
        });
    });
}

function vviptask_receive_getone(_0x2cb260) {
    var _0x1b0ec3 = {
        'NFUPK': 'success',
        'qnbGZ': function(_0x3bc328, _0x5c2f8f) {
            return _0x3bc328 === _0x5c2f8f;
        },
        'lEBig': 'DlaVE',
        'eewUo': 'wWRAp',
        'yQkhs': function(_0x554516, _0x4ee70b) {
            return _0x554516 !== _0x4ee70b;
        },
        'mDjkS': 'Lzleb',
        'qetwR': 'SYZuo',
        'huqGV': function(_0x19a7b1) {
            return _0x19a7b1();
        },
        'FNZrb': 'VBDQU',
        'qxDWf': 'SWAT_RED_PACKET',
        'Izxsg': function(_0x36305f, _0x3bb5a4) {
            return _0x36305f(_0x3bb5a4);
        },
        'EoanU': function(_0x5ebb52, _0x4156b8) {
            return _0x5ebb52 + _0x4156b8;
        },
        'fIQxF': function(_0x327649, _0x35454c) {
            return _0x327649 * _0x35454c;
        },
        'QjLwY': function(_0x413ff7, _0x2f14e3) {
            return _0x413ff7 * _0x2f14e3;
        },
        'yUBut': function(_0x350e3f, _0x181e9f) {
            return _0x350e3f * _0x181e9f;
        },
        'TxsJs': '*/*',
        'dojrj': 'gzip, deflate, br',
        'HZQIV': 'zh-cn',
        'agDqS': 'keep-alive',
        'TuaTR': 'application/x-www-form-urlencoded',
        'AGUjd': 'api.m.jd.com',
        'FIOwS': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'AIWbI': './USER_AGENTS',
        'GnYvU': 'JDUA',
        'EJyqf': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x2f5f29 = {
        'channel': _0x1b0ec3['qxDWf'],
        'systemId': '19',
        'ids': _0x2cb260
    };
    const _0x5888b9 = {
        'url': JD_API_HOST + '?functionId=vviptask_receive_getone&body=' + _0x1b0ec3['Izxsg'](escape, JSON['stringify'](_0x2f5f29)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x1b0ec3['EoanU'](_0x1b0ec3['EoanU'](new Date()['getTime'](), _0x1b0ec3['fIQxF'](_0x1b0ec3['fIQxF'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x1b0ec3['fIQxF'](_0x1b0ec3['QjLwY'](_0x1b0ec3['yUBut'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x1b0ec3['TxsJs'],
            'Accept-Encoding': _0x1b0ec3['dojrj'],
            'Accept-Language': _0x1b0ec3['HZQIV'],
            'Connection': _0x1b0ec3['agDqS'],
            'Content-Type': _0x1b0ec3['TuaTR'],
            'Host': _0x1b0ec3['AGUjd'],
            'Referer': _0x1b0ec3['FIOwS'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x1b0ec3['Izxsg'](require, _0x1b0ec3['AIWbI'])['USER_AGENT'] : $['getdata'](_0x1b0ec3['GnYvU']) ? $['getdata'](_0x1b0ec3['GnYvU']) : _0x1b0ec3['EJyqf']
        }
    };
    return new Promise(_0x1c6f35 => {
        var _0x28706c = {
            'AqTUF': _0x1b0ec3['NFUPK'],
            'zlXCj': function(_0x143cd6, _0x5ba3d7) {
                return _0x1b0ec3['qnbGZ'](_0x143cd6, _0x5ba3d7);
            },
            'TlTyq': _0x1b0ec3['lEBig'],
            'BXPGH': _0x1b0ec3['eewUo'],
            'EJMay': function(_0xb2449f, _0x3e8df8) {
                return _0x1b0ec3['yQkhs'](_0xb2449f, _0x3e8df8);
            },
            'Hcsfi': _0x1b0ec3['mDjkS'],
            'SaNfX': _0x1b0ec3['qetwR'],
            'GxnTM': function(_0xec8051) {
                return _0x1b0ec3['huqGV'](_0xec8051);
            }
        };
        if (_0x1b0ec3['yQkhs'](_0x1b0ec3['FNZrb'], _0x1b0ec3['FNZrb'])) {
            console['log']('' + JSON['stringify'](err));
            console['log']($['name'] + ' API请求失败，请检查网路重试');
        } else {
            $['post'](_0x5888b9, async (_0x320f41, _0x52ed48, _0x1d6390) => {
                try {
                    if (_0x28706c['zlXCj'](_0x28706c['TlTyq'], _0x28706c['BXPGH'])) {
                        _0x1d6390 = JSON['parse'](_0x1d6390);
                        if (_0x1d6390[_0x28706c['AqTUF']]) {
                            console['log']('【赚京豆(微信小程序)-瓜分京豆】开团成功');
                            $['hasOpen'] = !![];
                        } else {
                            console['log']('\n开团失败：' + JSON['stringify'](_0x1d6390) + '\x0a');
                        }
                    } else {
                        if (_0x320f41) {
                            console['log']('' + JSON['stringify'](_0x320f41));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {}
                    }
                } catch (_0x1b5dca) {
                    if (_0x28706c['EJMay'](_0x28706c['Hcsfi'], _0x28706c['SaNfX'])) {
                        $['logErr'](_0x1b5dca, _0x52ed48);
                    } else {
                        $['logErr'](_0x1b5dca, _0x52ed48);
                    }
                } finally {
                    _0x28706c['GxnTM'](_0x1c6f35);
                }
            });
        }
    });
}

function vviptask_reach_task(_0x396582) {
    var _0x61bc8a = {
        'piHdm': function(_0x3110a5) {
            return _0x3110a5();
        },
        'nihDk': function(_0x354bae, _0x2d9d4c) {
            return _0x354bae === _0x2d9d4c;
        },
        'anDUT': 'CgGLf',
        'ROAtY': 'nPoxi',
        'GJZrU': 'DMMpI',
        'PzNIS': function(_0x1e0dab) {
            return _0x1e0dab();
        },
        'XrUfJ': 'SWAT_RED_PACKET',
        'aGmjX': function(_0x119d25, _0x42e40e) {
            return _0x119d25(_0x42e40e);
        },
        'drZaK': function(_0x405430, _0xc0bf93) {
            return _0x405430 + _0xc0bf93;
        },
        'gNIXo': function(_0x2db3fa, _0x17246b) {
            return _0x2db3fa * _0x17246b;
        },
        'mVnTN': function(_0x4f866f, _0x18caef) {
            return _0x4f866f * _0x18caef;
        },
        'xwSRi': function(_0x5a5808, _0x16d114) {
            return _0x5a5808 * _0x16d114;
        },
        'XjpcD': function(_0x12d760, _0x11d605) {
            return _0x12d760 * _0x11d605;
        },
        'TDabq': '*/*',
        'BauzY': 'gzip, deflate, br',
        'WnkCe': 'zh-cn',
        'qtBkB': 'keep-alive',
        'kcSuh': 'application/x-www-form-urlencoded',
        'wgmJx': 'api.m.jd.com',
        'weMzX': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'VVKrC': './USER_AGENTS',
        'VFGgu': 'JDUA',
        'BIkit': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x2321e6 = {
        'channel': _0x61bc8a['XrUfJ'],
        'systemId': '19',
        'taskIdEncrypted': _0x396582
    };
    const _0x1fa4a2 = {
        'url': JD_API_HOST + '?functionId=vviptask_reach_task&body=' + _0x61bc8a['aGmjX'](escape, JSON['stringify'](_0x2321e6)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x61bc8a['drZaK'](_0x61bc8a['drZaK'](new Date()['getTime'](), _0x61bc8a['gNIXo'](_0x61bc8a['gNIXo'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x61bc8a['mVnTN'](_0x61bc8a['xwSRi'](_0x61bc8a['XjpcD'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x61bc8a['TDabq'],
            'Accept-Encoding': _0x61bc8a['BauzY'],
            'Accept-Language': _0x61bc8a['WnkCe'],
            'Connection': _0x61bc8a['qtBkB'],
            'Content-Type': _0x61bc8a['kcSuh'],
            'Host': _0x61bc8a['wgmJx'],
            'Referer': _0x61bc8a['weMzX'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x61bc8a['aGmjX'](require, _0x61bc8a['VVKrC'])['USER_AGENT'] : $['getdata'](_0x61bc8a['VFGgu']) ? $['getdata'](_0x61bc8a['VFGgu']) : _0x61bc8a['BIkit']
        }
    };
    return new Promise(_0x35a0a4 => {
        $['post'](_0x1fa4a2, (_0x540631, _0x281caa, _0x24c9f1) => {
            var _0x4a7f8c = {
                'oxnNk': function(_0x3013ca) {
                    return _0x61bc8a['piHdm'](_0x3013ca);
                }
            };
            try {
                if (_0x540631) {
                    if (_0x61bc8a['nihDk'](_0x61bc8a['anDUT'], _0x61bc8a['anDUT'])) {
                        console['log']('' + JSON['stringify'](_0x540631));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        _0x4a7f8c['oxnNk'](_0x35a0a4);
                    }
                } else {}
            } catch (_0x1bf40b) {
                if (_0x61bc8a['nihDk'](_0x61bc8a['ROAtY'], _0x61bc8a['GJZrU'])) {
                    console['log']('【赚京豆(微信小程序)-瓜分京豆】开团成功');
                    $['hasOpen'] = !![];
                } else {
                    $['logErr'](_0x1bf40b, _0x281caa);
                }
            } finally {
                _0x61bc8a['PzNIS'](_0x35a0a4);
            }
        });
    });
}

function vviptask_reward_receive(_0x40e363) {
    var _0x2ea252 = {
        'XoPft': function(_0x542172) {
            return _0x542172();
        },
        'BvpzR': 'SWAT_RED_PACKET',
        'yGNtP': function(_0x365534, _0x61ff51) {
            return _0x365534(_0x61ff51);
        },
        'sfehM': function(_0x5b6b0a, _0x5edc59) {
            return _0x5b6b0a + _0x5edc59;
        },
        'tHQIY': function(_0x52f8db, _0x178f05) {
            return _0x52f8db * _0x178f05;
        },
        'syscV': function(_0x3ad731, _0x388751) {
            return _0x3ad731 * _0x388751;
        },
        'nlTMN': function(_0x594e6f, _0x5f2b2a) {
            return _0x594e6f * _0x5f2b2a;
        },
        'Lshoh': function(_0x58279c, _0x226a28) {
            return _0x58279c * _0x226a28;
        },
        'HfiSl': function(_0x198a0f, _0x147cce) {
            return _0x198a0f * _0x147cce;
        },
        'ORvXA': '*/*',
        'YBNXZ': 'gzip, deflate, br',
        'Koxpg': 'zh-cn',
        'JARQI': 'keep-alive',
        'FGEOb': 'application/x-www-form-urlencoded',
        'BnQTg': 'api.m.jd.com',
        'ktmXz': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'DlIME': function(_0x2594d0, _0x21e7c4) {
            return _0x2594d0(_0x21e7c4);
        },
        'xkWvc': './USER_AGENTS',
        'Obaua': 'JDUA',
        'OONjO': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x1b96a4 = {
        'channel': _0x2ea252['BvpzR'],
        'systemId': '19',
        'idEncKey': _0x40e363
    };
    const _0x1d0304 = {
        'url': JD_API_HOST + '?functionId=vviptask_reward_receive&body=' + _0x2ea252['yGNtP'](escape, JSON['stringify'](_0x1b96a4)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x2ea252['sfehM'](_0x2ea252['sfehM'](new Date()['getTime'](), _0x2ea252['tHQIY'](_0x2ea252['syscV'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x2ea252['nlTMN'](_0x2ea252['Lshoh'](_0x2ea252['HfiSl'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x2ea252['ORvXA'],
            'Accept-Encoding': _0x2ea252['YBNXZ'],
            'Accept-Language': _0x2ea252['Koxpg'],
            'Connection': _0x2ea252['JARQI'],
            'Content-Type': _0x2ea252['FGEOb'],
            'Host': _0x2ea252['BnQTg'],
            'Referer': _0x2ea252['ktmXz'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x2ea252['DlIME'](require, _0x2ea252['xkWvc'])['USER_AGENT'] : $['getdata'](_0x2ea252['Obaua']) ? $['getdata'](_0x2ea252['Obaua']) : _0x2ea252['OONjO']
        }
    };
    return new Promise(_0x2533d9 => {
        $['post'](_0x1d0304, (_0xf8cd4, _0x44980e, _0x38fd19) => {
            try {
                if (_0xf8cd4) {
                    console['log']('' + JSON['stringify'](_0xf8cd4));
                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                } else {}
            } catch (_0x5961ec) {
                $['logErr'](_0x5961ec, _0x44980e);
            } finally {
                _0x2ea252['XoPft'](_0x2533d9);
            }
        });
    });
}

function pg_interact_interface_invoke(_0x11f548) {
    var _0x5e7aef = {
        'LDnrk': function(_0x5e5b33, _0x28dcea) {
            return _0x5e5b33 === _0x28dcea;
        },
        'Fagcx': 'ijIok',
        'FbJAv': function(_0x5da9f4, _0xa99130) {
            return _0x5da9f4(_0xa99130);
        },
        'QBZLt': 'success',
        'PGwEr': 'data',
        'QfRpa': 'rewardBeanAmount',
        'THRld': function(_0x46bd80, _0x1d9b22) {
            return _0x46bd80 !== _0x1d9b22;
        },
        'Jshzb': 'iCboX',
        'aUaVC': 'EowKg',
        'BIYtr': function(_0x3db5c3) {
            return _0x3db5c3();
        },
        'WxbjA': '9200008',
        'oMzGJ': '助力结果：不能助力自己\n',
        'caToT': '9200011',
        'nQlWm': '助力结果：已经助力过\n',
        'ETzJa': '2400205',
        'efrGy': '助力结果：团已满\n',
        'ScuJF': '2400203',
        'AYWsM': '助力结果：助力次数已耗尽\n',
        'GxeHq': 'FISSION_BEAN',
        'CRFHQ': function(_0x336964, _0x2a6359) {
            return _0x336964(_0x2a6359);
        },
        'dKvDu': 'activityBeanInitAmount',
        'gLIqI': 'MGxpA',
        'QLzUP': 'Emfnx',
        'hjiEG': 'takeReward',
        'rknaJ': function(_0xd69ac3, _0x41e6c3) {
            return _0xd69ac3 + _0x41e6c3;
        },
        'TiiSU': function(_0x163e71, _0x66f5e) {
            return _0x163e71 * _0x66f5e;
        },
        'NXQGb': function(_0x3c554e, _0x2b0882) {
            return _0x3c554e * _0x2b0882;
        },
        'RHCSc': '*/*',
        'jzSRU': 'gzip, deflate, br',
        'VcBwr': 'zh-cn',
        'MmWIv': 'keep-alive',
        'YvGeC': 'application/x-www-form-urlencoded',
        'rwmHF': 'api.m.jd.com',
        'HTbkv': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'TeUGL': './USER_AGENTS',
        'TlFGh': 'JDUA',
        'sVIxg': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x1e6344 = {
        'floorToken': _0x11f548,
        'dataSourceCode': _0x5e7aef['hjiEG'],
        'argMap': {}
    };
    const _0xbb4a5e = {
        'url': JD_API_HOST + '?functionId=pg_interact_interface_invoke&body=' + _0x5e7aef['CRFHQ'](escape, JSON['stringify'](_0x1e6344)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x5e7aef['rknaJ'](_0x5e7aef['rknaJ'](new Date()['getTime'](), _0x5e7aef['TiiSU'](_0x5e7aef['TiiSU'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x5e7aef['TiiSU'](_0x5e7aef['NXQGb'](_0x5e7aef['NXQGb'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x5e7aef['RHCSc'],
            'Accept-Encoding': _0x5e7aef['jzSRU'],
            'Accept-Language': _0x5e7aef['VcBwr'],
            'Connection': _0x5e7aef['MmWIv'],
            'Content-Type': _0x5e7aef['YvGeC'],
            'Host': _0x5e7aef['rwmHF'],
            'Referer': _0x5e7aef['HTbkv'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x5e7aef['CRFHQ'](require, _0x5e7aef['TeUGL'])['USER_AGENT'] : $['getdata'](_0x5e7aef['TlFGh']) ? $['getdata'](_0x5e7aef['TlFGh']) : _0x5e7aef['sVIxg']
        }
    };
    return new Promise(_0xb21329 => {
        var _0x96a2e0 = {
            'inakJ': function(_0x16a516, _0x3e067b) {
                return _0x5e7aef['LDnrk'](_0x16a516, _0x3e067b);
            },
            'oniuE': _0x5e7aef['WxbjA'],
            'CUpNk': _0x5e7aef['oMzGJ'],
            'SJcLj': function(_0x14ecb1, _0x2ce2cf) {
                return _0x5e7aef['LDnrk'](_0x14ecb1, _0x2ce2cf);
            },
            'JdcSm': _0x5e7aef['caToT'],
            'afSZq': _0x5e7aef['nQlWm'],
            'GRxzV': _0x5e7aef['ETzJa'],
            'SotRJ': _0x5e7aef['efrGy'],
            'vosXj': function(_0x4679ac, _0x122afe) {
                return _0x5e7aef['LDnrk'](_0x4679ac, _0x122afe);
            },
            'xXXbg': _0x5e7aef['ScuJF'],
            'ANCrS': _0x5e7aef['AYWsM'],
            'hkneY': _0x5e7aef['GxeHq'],
            'ojFrj': function(_0x4ac438, _0x34cb4d) {
                return _0x5e7aef['CRFHQ'](_0x4ac438, _0x34cb4d);
            },
            'LIVyn': _0x5e7aef['QBZLt'],
            'uIfGa': _0x5e7aef['dKvDu']
        };
        if (_0x5e7aef['THRld'](_0x5e7aef['gLIqI'], _0x5e7aef['QLzUP'])) {
            $['post'](_0xbb4a5e, (_0x223011, _0x345e72, _0x231b31) => {
                if (_0x5e7aef['LDnrk'](_0x5e7aef['Fagcx'], _0x5e7aef['Fagcx'])) {
                    try {
                        if (_0x223011) {
                            console['log']('' + JSON['stringify'](_0x223011));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x5e7aef['FbJAv'](safeGet, _0x231b31)) {
                                _0x231b31 = JSON['parse'](_0x231b31);
                                if (_0x231b31[_0x5e7aef['QBZLt']]) {
                                    console['log'](_0x231b31[_0x5e7aef['PGwEr']][_0x5e7aef['QfRpa']] + '京豆领取成功');
                                    $['rewardBeanNum'] += _0x231b31[_0x5e7aef['PGwEr']][_0x5e7aef['QfRpa']];
                                    message += (message ? '\x0a' : '') + '【做任务 天天领京豆】' + $['rewardBeanNum'] + '京豆';
                                } else {
                                    if (_0x5e7aef['THRld'](_0x5e7aef['Jshzb'], _0x5e7aef['aUaVC'])) {
                                        console['log'](_0x231b31['message']);
                                    } else {
                                        if (_0x96a2e0['inakJ'](_0x231b31['resultCode'], _0x96a2e0['oniuE'])) console['log'](_0x96a2e0['CUpNk']);
                                        else if (_0x96a2e0['SJcLj'](_0x231b31['resultCode'], _0x96a2e0['JdcSm'])) console['log'](_0x96a2e0['afSZq']);
                                        else if (_0x96a2e0['SJcLj'](_0x231b31['resultCode'], _0x96a2e0['GRxzV'])) console['log'](_0x96a2e0['SotRJ']);
                                        else if (_0x96a2e0['vosXj'](_0x231b31['resultCode'], _0x96a2e0['xXXbg'])) {
                                            console['log'](_0x96a2e0['ANCrS']);
                                            $['canHelp'] = ![];
                                        } else console['log']('助力结果：未知错误\n');
                                    }
                                }
                            }
                        }
                    } catch (_0xe3ba2a) {
                        $['logErr'](_0xe3ba2a, _0x345e72);
                    } finally {
                        _0x5e7aef['BIYtr'](_0xb21329);
                    }
                } else {
                    $['tuan'] = {
                        'activityIdEncrypted': _0x231b31['data']['id'],
                        'assistStartRecordId': _0x231b31['data']['assistStartRecordId'],
                        'assistedPinEncrypted': _0x231b31['data']['encPin'],
                        'channel': _0x96a2e0['hkneY']
                    };
                }
            });
        } else {
            if (_0x96a2e0['ojFrj'](safeGet, data)) {
                data = JSON['parse'](data);
                if (data[_0x96a2e0['LIVyn']]) {
                    console['log']('活动开启成功，初始：' + (data['data'] && data['data'][_0x96a2e0['uIfGa']]) + '京豆');
                    $['vvipFlag'] = !![];
                } else {
                    console['log'](data['message']);
                }
            }
        }
    });
}

function openRedPacket(_0x4c3bc5) {
    var _0x287212 = {
        'PYaqX': function(_0x258efa, _0x4e2700) {
            return _0x258efa !== _0x4e2700;
        },
        'AVsQf': 'zMZvc',
        'OwnXq': 'bzUQq',
        'sPmkH': function(_0x28ca17, _0x37fc23) {
            return _0x28ca17(_0x37fc23);
        },
        'ZOagx': function(_0x42a701, _0x32e1b4) {
            return _0x42a701 === _0x32e1b4;
        },
        'ZdFHP': 'tEOJC',
        'OWwiH': 'success',
        'pCSnC': function(_0x13f1eb, _0x3a2627) {
            return _0x13f1eb === _0x3a2627;
        },
        'FRqiG': 'bfBRK',
        'izUFX': 'activityBeanInitAmount',
        'RyYQi': function(_0xeb8b60) {
            return _0xeb8b60();
        },
        'StzhQ': function(_0x2c542a) {
            return _0x2c542a();
        },
        'KqOAm': function(_0x388b68, _0x24e59c) {
            return _0x388b68(_0x24e59c);
        },
        'BXpPY': 'data',
        'OAnEC': 'rewardBeanAmount',
        'GwrUg': function(_0x224b4b, _0x386d2a) {
            return _0x224b4b !== _0x386d2a;
        },
        'OUeYI': 'AFFWO',
        'yuoHO': 'RrhZF',
        'WlTtc': 'openRedPacket',
        'bwzfb': function(_0x166a98, _0x384643) {
            return _0x166a98 + _0x384643;
        },
        'MxlZZ': function(_0x4005bb, _0x508a10) {
            return _0x4005bb * _0x508a10;
        },
        'qgRdr': function(_0x5a0110, _0x14baca) {
            return _0x5a0110 * _0x14baca;
        },
        'Bappt': function(_0x3dabd6, _0x6572c0) {
            return _0x3dabd6 * _0x6572c0;
        },
        'PUnJF': '*/*',
        'RIGTz': 'gzip, deflate, br',
        'seEzI': 'zh-cn',
        'JlmQt': 'keep-alive',
        'oqytu': 'application/x-www-form-urlencoded',
        'CcvOW': 'api.m.jd.com',
        'vUNvy': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'XGzuu': './USER_AGENTS',
        'dFakk': 'JDUA',
        'UuFaO': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    const _0x26fcb2 = {
        'floorToken': _0x4c3bc5,
        'dataSourceCode': _0x287212['WlTtc'],
        'argMap': {}
    };
    const _0x2e0f08 = {
        'url': JD_API_HOST + '?functionId=pg_interact_interface_invoke&body=' + _0x287212['KqOAm'](escape, JSON['stringify'](_0x26fcb2)) + '&appid=swat_miniprogram&fromType=wxapp&timestamp=' + _0x287212['bwzfb'](_0x287212['bwzfb'](new Date()['getTime'](), _0x287212['MxlZZ'](_0x287212['MxlZZ'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x287212['MxlZZ'](_0x287212['qgRdr'](_0x287212['Bappt'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x287212['PUnJF'],
            'Accept-Encoding': _0x287212['RIGTz'],
            'Accept-Language': _0x287212['seEzI'],
            'Connection': _0x287212['JlmQt'],
            'Content-Type': _0x287212['oqytu'],
            'Host': _0x287212['CcvOW'],
            'Referer': _0x287212['vUNvy'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x287212['KqOAm'](require, _0x287212['XGzuu'])['USER_AGENT'] : $['getdata'](_0x287212['dFakk']) ? $['getdata'](_0x287212['dFakk']) : _0x287212['UuFaO']
        }
    };
    return new Promise(_0x51a895 => {
        var _0x1880ff = {
            'kKOpO': function(_0x35048d, _0x28ef37) {
                return _0x287212['KqOAm'](_0x35048d, _0x28ef37);
            },
            'dMNym': _0x287212['OWwiH'],
            'wqHZK': _0x287212['BXpPY'],
            'pzZWD': _0x287212['OAnEC']
        };
        if (_0x287212['GwrUg'](_0x287212['OUeYI'], _0x287212['yuoHO'])) {
            $['post'](_0x2e0f08, (_0x1224ba, _0x32e673, _0x28482d) => {
                if (_0x287212['PYaqX'](_0x287212['AVsQf'], _0x287212['OwnXq'])) {
                    try {
                        if (_0x1224ba) {
                            console['log']('' + JSON['stringify'](_0x1224ba));
                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                        } else {
                            if (_0x287212['sPmkH'](safeGet, _0x28482d)) {
                                if (_0x287212['ZOagx'](_0x287212['ZdFHP'], _0x287212['ZdFHP'])) {
                                    _0x28482d = JSON['parse'](_0x28482d);
                                    if (_0x28482d[_0x287212['OWwiH']]) {
                                        if (_0x287212['pCSnC'](_0x287212['FRqiG'], _0x287212['FRqiG'])) {
                                            console['log']('活动开启成功，初始：' + (_0x28482d['data'] && _0x28482d['data'][_0x287212['izUFX']]) + '京豆');
                                            $['vvipFlag'] = !![];
                                        } else {
                                            console['log']('' + JSON['stringify'](_0x1224ba));
                                            console['log']($['name'] + ' API请求失败，请检查网路重试');
                                        }
                                    } else {
                                        console['log'](_0x28482d['message']);
                                    }
                                } else {
                                    console['log'](_0x28482d['message']);
                                }
                            }
                        }
                    } catch (_0x364408) {
                        $['logErr'](_0x364408, _0x32e673);
                    } finally {
                        _0x287212['RyYQi'](_0x51a895);
                    }
                } else {
                    if (_0x1880ff['kKOpO'](safeGet, _0x28482d)) {
                        _0x28482d = JSON['parse'](_0x28482d);
                        if (_0x28482d[_0x1880ff['dMNym']]) {
                            console['log'](_0x28482d[_0x1880ff['wqHZK']][_0x1880ff['pzZWD']] + '京豆领取成功');
                            $['rewardBeanNum'] += _0x28482d[_0x1880ff['wqHZK']][_0x1880ff['pzZWD']];
                            message += (message ? '\x0a' : '') + '【做任务 天天领京豆】' + $['rewardBeanNum'] + '京豆';
                        } else {
                            console['log'](_0x28482d['message']);
                        }
                    }
                }
            });
        } else {
            _0x287212['StzhQ'](_0x51a895);
        }
    });
}
async function distributeBeanActivity() {
    var _0x249e5c = {
        'frdXt': function(_0x2737c8) {
            return _0x2737c8();
        },
        'HGSZu': function(_0x5d9848, _0x5e1f8a) {
            return _0x5d9848 === _0x5e1f8a;
        },
        'RosZV': function(_0x57ec1f, _0x52f3d0) {
            return _0x57ec1f === _0x52f3d0;
        },
        'oLNuT': function(_0x55514a, _0x3f4195) {
            return _0x55514a === _0x3f4195;
        },
        'xSGuB': 'PnMKw',
        'ilNbP': function(_0x161315) {
            return _0x161315();
        },
        'LZxkA': function(_0x31c539) {
            return _0x31c539();
        },
        'FjXOy': 'assistedPinEncrypted',
        'DrLvc': function(_0x1fb077, _0x1240c4) {
            return _0x1fb077 !== _0x1240c4;
        },
        'zyKNT': 'pdePc',
        'bGkXX': 'CVRHk'
    };
    try {
        $['tuan'] = null;
        $['hasOpen'] = ![];
        $['assistStatus'] = 0x0;
        await _0x249e5c['frdXt'](getUserTuanInfo);
        if (!$['tuan'] && (_0x249e5c['HGSZu']($['assistStatus'], 0x3) || _0x249e5c['RosZV']($['assistStatus'], 0x2)) && $['canStartNewAssist']) {
            if (_0x249e5c['oLNuT'](_0x249e5c['xSGuB'], _0x249e5c['xSGuB'])) {
                console['log']('准备再次开团');
                await _0x249e5c['ilNbP'](openTuan);
                if ($['hasOpen']) await _0x249e5c['LZxkA'](getUserTuanInfo);
            } else {
                $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
            }
        }
        if ($['tuan'] && $['tuan']['hasOwnProperty'](_0x249e5c['FjXOy']) && _0x249e5c['DrLvc']($['assistStatus'], 0x3)) $['tuanList']['push']($['tuan']);
    } catch (_0x2abc37) {
        if (_0x249e5c['oLNuT'](_0x249e5c['zyKNT'], _0x249e5c['bGkXX'])) {
            _0x249e5c['frdXt'](resolve);
        } else {
            $['logErr'](_0x2abc37);
        }
    }
}

function helpFriendTuan(_0x22b145) {
    var _0x2758d9 = {
        'gFEQG': 'data',
        'gguOP': 'rewardBeanAmount',
        'qExYP': '助力结果：助力成功\n',
        'AXQqE': 'activityBeanInitAmount',
        'ZaAvB': '助力结果：助力次数已耗尽\n',
        'dJjwz': function(_0x2846bb, _0x59b60c) {
            return _0x2846bb === _0x59b60c;
        },
        'fqPFk': 'nFazv',
        'rZOLr': function(_0x1bc621, _0x24f0f2) {
            return _0x1bc621(_0x24f0f2);
        },
        'PzKlQ': function(_0x128068, _0x5a3b1b) {
            return _0x128068 === _0x5a3b1b;
        },
        'NHpGm': '9200008',
        'nFZXw': '助力结果：不能助力自己\n',
        'hnYOc': '9200011',
        'HLsjv': '助力结果：已经助力过\n',
        'sCQGv': '2400205',
        'mqTyj': '助力结果：团已满\n',
        'KQNma': '2400203',
        'ZLKEe': function(_0x3ac13e, _0x5b94cd) {
            return _0x3ac13e !== _0x5b94cd;
        },
        'jkuXT': 'MGBVM',
        'EHimV': 'SpECt',
        'YGyFM': 'zPzfF',
        'SBDPn': function(_0x3c939c, _0x4420a6) {
            return _0x3c939c === _0x4420a6;
        },
        'UBspz': 'FHOHt',
        'iypTg': 'HEfoK',
        'eGTik': function(_0x281e37, _0x38016b, _0x399039) {
            return _0x281e37(_0x38016b, _0x399039);
        },
        'NBfhY': 'vvipclub_distributeBean_assist'
    };
    return new Promise(_0x59fd65 => {
        var _0xed8710 = {
            'CFQiv': _0x2758d9['gFEQG'],
            'Mojle': _0x2758d9['gguOP'],
            'AdcBL': _0x2758d9['qExYP'],
            'cYACN': _0x2758d9['AXQqE'],
            'gFQfr': _0x2758d9['ZaAvB'],
            'hXWWZ': function(_0x20c27b, _0x118dfa) {
                return _0x2758d9['dJjwz'](_0x20c27b, _0x118dfa);
            },
            'yxcru': _0x2758d9['fqPFk'],
            'XeiMc': function(_0xa87390, _0x2a1967) {
                return _0x2758d9['rZOLr'](_0xa87390, _0x2a1967);
            },
            'CZgBX': function(_0x309e55, _0x1c834a) {
                return _0x2758d9['PzKlQ'](_0x309e55, _0x1c834a);
            },
            'AtknQ': _0x2758d9['NHpGm'],
            'CTGvb': _0x2758d9['nFZXw'],
            'zKdQf': _0x2758d9['hnYOc'],
            'OHrPB': _0x2758d9['HLsjv'],
            'YoznY': _0x2758d9['sCQGv'],
            'eLAsR': _0x2758d9['mqTyj'],
            'CjwCQ': function(_0x5ec567, _0x108204) {
                return _0x2758d9['PzKlQ'](_0x5ec567, _0x108204);
            },
            'zzmBh': _0x2758d9['KQNma'],
            'AwSRD': function(_0x157de3, _0x58f17d) {
                return _0x2758d9['ZLKEe'](_0x157de3, _0x58f17d);
            },
            'jScKT': _0x2758d9['jkuXT'],
            'FoawV': _0x2758d9['EHimV'],
            'NVVPg': _0x2758d9['YGyFM'],
            'HEISh': function(_0x11fa8f, _0x229ecb) {
                return _0x2758d9['SBDPn'](_0x11fa8f, _0x229ecb);
            },
            'GSpPx': _0x2758d9['UBspz'],
            'mMVTT': _0x2758d9['iypTg']
        };
        $['get'](_0x2758d9['eGTik'](taskUrl, _0x2758d9['NBfhY'], _0x22b145), async (_0x3607a9, _0x1e69ef, _0x2be941) => {
            var _0x99f6be = {
                'cwnuz': _0xed8710['AdcBL'],
                'dDKSU': _0xed8710['cYACN'],
                'VpEZZ': _0xed8710['gFQfr']
            };
            if (_0xed8710['hXWWZ'](_0xed8710['yxcru'], _0xed8710['yxcru'])) {
                try {
                    if (_0x3607a9) {
                        console['log']('' + JSON['stringify'](_0x3607a9));
                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                    } else {
                        if (_0xed8710['XeiMc'](safeGet, _0x2be941)) {
                            _0x2be941 = JSON['parse'](_0x2be941);
                            if (_0x2be941['success']) {
                                console['log'](_0xed8710['AdcBL']);
                            } else {
                                if (_0xed8710['CZgBX'](_0x2be941['resultCode'], _0xed8710['AtknQ'])) console['log'](_0xed8710['CTGvb']);
                                else if (_0xed8710['CZgBX'](_0x2be941['resultCode'], _0xed8710['zKdQf'])) console['log'](_0xed8710['OHrPB']);
                                else if (_0xed8710['CZgBX'](_0x2be941['resultCode'], _0xed8710['YoznY'])) console['log'](_0xed8710['eLAsR']);
                                else if (_0xed8710['CjwCQ'](_0x2be941['resultCode'], _0xed8710['zzmBh'])) {
                                    if (_0xed8710['AwSRD'](_0xed8710['jScKT'], _0xed8710['jScKT'])) {
                                        console['log'](_0x99f6be['cwnuz']);
                                    } else {
                                        console['log'](_0xed8710['gFQfr']);
                                        $['canHelp'] = ![];
                                    }
                                } else console['log']('助力结果：未知错误\n');
                            }
                        }
                    }
                } catch (_0x262bd7) {
                    if (_0xed8710['AwSRD'](_0xed8710['FoawV'], _0xed8710['NVVPg'])) {
                        $['logErr'](_0x262bd7, _0x1e69ef);
                    } else {
                        console['log']('活动开启成功，初始：' + (_0x2be941['data'] && _0x2be941['data'][_0x99f6be['dDKSU']]) + '京豆');
                        $['vvipFlag'] = !![];
                    }
                } finally {
                    if (_0xed8710['HEISh'](_0xed8710['GSpPx'], _0xed8710['mMVTT'])) {
                        console['log'](_0x99f6be['VpEZZ']);
                        $['canHelp'] = ![];
                    } else {
                        _0xed8710['XeiMc'](_0x59fd65, _0x2be941);
                    }
                }
            } else {
                console['log'](_0x2be941[_0xed8710['CFQiv']][_0xed8710['Mojle']] + '京豆领取成功');
                $['rewardBeanNum'] += _0x2be941[_0xed8710['CFQiv']][_0xed8710['Mojle']];
                message += (message ? '\x0a' : '') + '【做任务 天天领京豆】' + $['rewardBeanNum'] + '京豆';
            }
        });
    });
}

function getUserTuanInfo() {
    var _0x227c82 = {
        'eMjDP': 'CookieJD',
        'eSfBl': 'CookieJD2',
        'fbtaO': function(_0x19d641, _0x464908) {
            return _0x19d641(_0x464908);
        },
        'cHZXa': 'CookiesJD',
        'WZCyA': function(_0x35f489) {
            return _0x35f489();
        },
        'LqkuK': function(_0x2baff8, _0x1fd52e) {
            return _0x2baff8 === _0x1fd52e;
        },
        'BwoTO': 'fMXsI',
        'XDlge': 'RncfP',
        'mDGRk': 'tUCMt',
        'VQmog': 'mKOmT',
        'Avoyw': function(_0x4ea59a, _0x3c7fce) {
            return _0x4ea59a !== _0x3c7fce;
        },
        'nFAUs': 'TrEGM',
        'deggw': 'success',
        'bCGkX': function(_0x178eaa, _0x4a5f92) {
            return _0x178eaa !== _0x4a5f92;
        },
        'EYJjE': 'NMYHq',
        'YaJoy': 'tLAMu',
        'aDQnd': 'ujgrP',
        'fRBPS': 'ZYLEP',
        'VnjtK': 'FISSION_BEAN',
        'GwhjZ': 'data',
        'NLSQM': 'assistNum',
        'nBxuk': 'assistStatus',
        'QGiXN': 'canStartNewAssist',
        'DZdpe': 'gjSmC',
        'VbOxX': 'xvtWh',
        'iUfLi': function(_0x93dd89, _0x38c983) {
            return _0x93dd89 === _0x38c983;
        },
        'IANXo': 'YMtEl',
        'snACh': 'wisuE',
        'wiwFp': function(_0x4da504, _0x51c6b0, _0x484bbc) {
            return _0x4da504(_0x51c6b0, _0x484bbc);
        },
        'llbQs': 'distributeBeanActivityInfo'
    };
    let _0x27bd45 = {
        'paramData': {
            'channel': _0x227c82['VnjtK']
        }
    };
    return new Promise(_0x3fae5d => {
        var _0x2bb81c = {
            'mmpoT': _0x227c82['eMjDP'],
            'XvPcL': _0x227c82['eSfBl'],
            'vYgDt': function(_0x158c04, _0xe31fae) {
                return _0x227c82['fbtaO'](_0x158c04, _0xe31fae);
            },
            'tdzti': _0x227c82['cHZXa'],
            'fCgTP': function(_0x4f4908, _0x569184) {
                return _0x227c82['fbtaO'](_0x4f4908, _0x569184);
            },
            'uelLQ': function(_0x352750) {
                return _0x227c82['WZCyA'](_0x352750);
            },
            'PbnOA': function(_0x291c4e, _0x5a282a) {
                return _0x227c82['LqkuK'](_0x291c4e, _0x5a282a);
            },
            'IloPj': _0x227c82['BwoTO'],
            'YobyZ': _0x227c82['XDlge'],
            'XjWMt': function(_0x17ef6e, _0x5dee80) {
                return _0x227c82['LqkuK'](_0x17ef6e, _0x5dee80);
            },
            'eqSKT': _0x227c82['mDGRk'],
            'DqgTz': _0x227c82['VQmog'],
            'yfRua': function(_0x5d620e, _0x238c0a) {
                return _0x227c82['Avoyw'](_0x5d620e, _0x238c0a);
            },
            'bJHKb': _0x227c82['nFAUs'],
            'ttmmE': _0x227c82['deggw'],
            'uXeeL': function(_0x4ad7c2, _0x406b21) {
                return _0x227c82['bCGkX'](_0x4ad7c2, _0x406b21);
            },
            'GLonE': _0x227c82['EYJjE'],
            'qrPjW': _0x227c82['YaJoy'],
            'cSONM': _0x227c82['aDQnd'],
            'HEKOB': function(_0x4348b2, _0x32e31d) {
                return _0x227c82['LqkuK'](_0x4348b2, _0x32e31d);
            },
            'dYzqv': _0x227c82['fRBPS'],
            'hTwBW': _0x227c82['VnjtK'],
            'QupNk': _0x227c82['GwhjZ'],
            'haUJn': _0x227c82['NLSQM'],
            'pGOXt': _0x227c82['nBxuk'],
            'ZdLUy': _0x227c82['QGiXN'],
            'hUnpt': _0x227c82['DZdpe'],
            'LYOAH': _0x227c82['VbOxX']
        };
        if (_0x227c82['iUfLi'](_0x227c82['IANXo'], _0x227c82['snACh'])) {
            $['logErr'](e, resp);
        } else {
            $['get'](_0x227c82['wiwFp'](taskUrl, _0x227c82['llbQs'], _0x27bd45), async (_0xb31644, _0x393138, _0x31cead) => {
                var _0x19b2b0 = {
                    'RdFmX': function(_0x38afd2, _0x579f58) {
                        return _0x2bb81c['fCgTP'](_0x38afd2, _0x579f58);
                    },
                    'Oflch': function(_0x55f6d4) {
                        return _0x2bb81c['uelLQ'](_0x55f6d4);
                    }
                };
                try {
                    if (_0x2bb81c['PbnOA'](_0x2bb81c['IloPj'], _0x2bb81c['YobyZ'])) {
                        $['authorTuanList'] = $['authorTuanList']['concat'](JSON['parse'](_0x31cead));
                    } else {
                        if (_0xb31644) {
                            if (_0x2bb81c['XjWMt'](_0x2bb81c['eqSKT'], _0x2bb81c['DqgTz'])) {
                                cookiesArr = [$['getdata'](_0x2bb81c['mmpoT']), $['getdata'](_0x2bb81c['XvPcL']), ..._0x2bb81c['vYgDt'](jsonParse, $['getdata'](_0x2bb81c['tdzti']) || '[]')['map'](_0xc1a84 => _0xc1a84['cookie'])]['filter'](_0x5497fa => !!_0x5497fa);
                            } else {
                                console['log']('' + JSON['stringify'](_0xb31644));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x2bb81c['yfRua'](_0x2bb81c['bJHKb'], _0x2bb81c['bJHKb'])) {
                                _0x19b2b0['RdFmX'](_0x3fae5d, _0x31cead);
                            } else {
                                if (_0x2bb81c['fCgTP'](safeGet, _0x31cead)) {
                                    _0x31cead = JSON['parse'](_0x31cead);
                                    if (_0x31cead[_0x2bb81c['ttmmE']]) {
                                        if (_0x2bb81c['uXeeL'](_0x2bb81c['GLonE'], _0x2bb81c['qrPjW'])) {
                                            $['log']('\n\n当前【赚京豆(微信小程序)-瓜分京豆】能否再次开团: ' + (_0x31cead['data']['canStartNewAssist'] ? '可以' : '否'));
                                            console['log']('assistStatus ' + _0x31cead['data']['assistStatus']);
                                            if (_0x2bb81c['XjWMt'](_0x31cead['data']['assistStatus'], 0x1) && !_0x31cead['data']['canStartNewAssist']) {
                                                if (_0x2bb81c['uXeeL'](_0x2bb81c['cSONM'], _0x2bb81c['cSONM'])) {
                                                    console['log']('' + JSON['stringify'](_0xb31644));
                                                    console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                } else {
                                                    console['log']('已开团(未达上限)，但团成员人未满\n\n');
                                                }
                                            } else if (_0x2bb81c['HEKOB'](_0x31cead['data']['assistStatus'], 0x3) && _0x31cead['data']['canStartNewAssist']) {
                                                console['log']('已开团(未达上限)，团成员人已满\n\n');
                                            } else if (_0x2bb81c['HEKOB'](_0x31cead['data']['assistStatus'], 0x3) && !_0x31cead['data']['canStartNewAssist']) {
                                                console['log']('今日开团已达上限，且当前团成员人已满\n\n');
                                            }
                                            if (_0x31cead['data'] && !_0x31cead['data']['canStartNewAssist']) {
                                                if (_0x2bb81c['HEKOB'](_0x2bb81c['dYzqv'], _0x2bb81c['dYzqv'])) {
                                                    $['tuan'] = {
                                                        'activityIdEncrypted': _0x31cead['data']['id'],
                                                        'assistStartRecordId': _0x31cead['data']['assistStartRecordId'],
                                                        'assistedPinEncrypted': _0x31cead['data']['encPin'],
                                                        'channel': _0x2bb81c['hTwBW']
                                                    };
                                                } else {
                                                    if (_0xb31644) {
                                                        console['log']('' + JSON['stringify'](_0xb31644));
                                                        console['log']($['name'] + ' API请求失败，请检查网路重试');
                                                    } else {}
                                                }
                                            }
                                            $['tuanActId'] = _0x31cead['data']['id'];
                                            $['assistNum'] = _0x31cead[_0x2bb81c['QupNk']][_0x2bb81c['haUJn']] || 0x4;
                                            $['assistStatus'] = _0x31cead[_0x2bb81c['QupNk']][_0x2bb81c['pGOXt']];
                                            $['canStartNewAssist'] = _0x31cead[_0x2bb81c['QupNk']][_0x2bb81c['ZdLUy']];
                                        } else {
                                            cookiesArr['push'](jdCookieNode[item]);
                                        }
                                    } else {
                                        $['tuan'] = !![];
                                        console['log']('获取【赚京豆(微信小程序)-瓜分京豆】活动信息失败 ' + JSON['stringify'](_0x31cead) + '\x0a');
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x23d1a6) {
                    if (_0x2bb81c['uXeeL'](_0x2bb81c['hUnpt'], _0x2bb81c['LYOAH'])) {
                        $['logErr'](_0x23d1a6, _0x393138);
                    } else {
                        _0x19b2b0['Oflch'](_0x3fae5d);
                    }
                } finally {
                    _0x2bb81c['fCgTP'](_0x3fae5d, _0x31cead);
                }
            });
        }
    });
}

function openTuan() {
    var _0x3b16d1 = {
        'uyfxz': function(_0xff1896, _0x125246) {
            return _0xff1896(_0x125246);
        },
        'jTBcv': function(_0x4c6cb7, _0x15a49f) {
            return _0x4c6cb7 === _0x15a49f;
        },
        'EStQL': function(_0x30f114) {
            return _0x30f114();
        },
        'ABovS': function(_0x294e57, _0x10f870) {
            return _0x294e57 === _0x10f870;
        },
        'ZAdDP': 'Vliif',
        'sjLsa': function(_0x5e2aef, _0xc4a8f2) {
            return _0x5e2aef !== _0xc4a8f2;
        },
        'lQqQB': 'jNKwD',
        'mgpYm': 'tMdIC',
        'YEfZq': 'zXTbF',
        'SyVAQ': 'success',
        'mGsff': function(_0x3244f9, _0x44be40) {
            return _0x3244f9 === _0x44be40;
        },
        'MMsiD': 'ZYlPP',
        'wsHcZ': function(_0x58ab33, _0x7fd7cd) {
            return _0x58ab33 !== _0x7fd7cd;
        },
        'wOXuW': 'gcxZp',
        'yLbQt': 'PcLrR',
        'HVjpS': function(_0x251920, _0x184dc3) {
            return _0x251920 !== _0x184dc3;
        },
        'EadSB': 'WndUL',
        'Mxofy': function(_0x1888b5, _0x2cc8b9, _0x4afa36) {
            return _0x1888b5(_0x2cc8b9, _0x4afa36);
        },
        'kppua': 'vvipclub_distributeBean_startAssist',
        'tQrSI': 'FISSION_BEAN'
    };
    let _0x1719e9 = {
        'activityIdEncrypted': $['tuanActId'],
        'channel': _0x3b16d1['tQrSI']
    };
    return new Promise(_0x112f9a => {
        var _0x354ce4 = {
            'rKVON': function(_0x1b7128, _0x46c6f7) {
                return _0x3b16d1['uyfxz'](_0x1b7128, _0x46c6f7);
            },
            'JzCHt': function(_0x4d29ef, _0x37edbe) {
                return _0x3b16d1['jTBcv'](_0x4d29ef, _0x37edbe);
            },
            'nAhQT': function(_0x3e2fa0) {
                return _0x3b16d1['EStQL'](_0x3e2fa0);
            },
            'CEYwl': function(_0x5d6469, _0x337c49) {
                return _0x3b16d1['ABovS'](_0x5d6469, _0x337c49);
            },
            'AwoCa': _0x3b16d1['ZAdDP'],
            'AcWKB': function(_0x4e70df, _0x55e839) {
                return _0x3b16d1['sjLsa'](_0x4e70df, _0x55e839);
            },
            'FpRWG': _0x3b16d1['lQqQB'],
            'OUoQc': _0x3b16d1['mgpYm'],
            'LTsKW': function(_0x8282e0, _0x5dc2d5) {
                return _0x3b16d1['sjLsa'](_0x8282e0, _0x5dc2d5);
            },
            'syzdS': _0x3b16d1['YEfZq'],
            'nMtAR': _0x3b16d1['SyVAQ'],
            'nVAAU': function(_0x59f4fa, _0x549e05) {
                return _0x3b16d1['mGsff'](_0x59f4fa, _0x549e05);
            },
            'tbRSb': _0x3b16d1['MMsiD'],
            'cRUmJ': function(_0x25391f, _0x399f8b) {
                return _0x3b16d1['wsHcZ'](_0x25391f, _0x399f8b);
            },
            'vGKwk': _0x3b16d1['wOXuW'],
            'DQMFc': _0x3b16d1['yLbQt'],
            'EQvdx': function(_0x2b2c1b, _0xa951e2) {
                return _0x3b16d1['HVjpS'](_0x2b2c1b, _0xa951e2);
            },
            'FYTRU': _0x3b16d1['EadSB']
        };
        $['get'](_0x3b16d1['Mxofy'](taskUrl, _0x3b16d1['kppua'], _0x1719e9), async (_0x8b7bae, _0x1e5f6f, _0x586bb7) => {
            var _0x207434 = {
                'KRwez': function(_0x4491dd) {
                    return _0x354ce4['nAhQT'](_0x4491dd);
                }
            };
            if (_0x354ce4['CEYwl'](_0x354ce4['AwoCa'], _0x354ce4['AwoCa'])) {
                try {
                    if (_0x354ce4['AcWKB'](_0x354ce4['FpRWG'], _0x354ce4['FpRWG'])) {
                        _0x207434['KRwez'](_0x112f9a);
                    } else {
                        if (_0x8b7bae) {
                            if (_0x354ce4['AcWKB'](_0x354ce4['OUoQc'], _0x354ce4['OUoQc'])) {
                                console['log']('' + JSON['stringify'](_0x8b7bae));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            } else {
                                console['log']('' + JSON['stringify'](_0x8b7bae));
                                console['log']($['name'] + ' API请求失败，请检查网路重试');
                            }
                        } else {
                            if (_0x354ce4['LTsKW'](_0x354ce4['syzdS'], _0x354ce4['syzdS'])) {
                                _0x354ce4['rKVON'](_0x112f9a, _0x586bb7);
                            } else {
                                if (_0x354ce4['rKVON'](safeGet, _0x586bb7)) {
                                    _0x586bb7 = JSON['parse'](_0x586bb7);
                                    if (_0x586bb7[_0x354ce4['nMtAR']]) {
                                        if (_0x354ce4['nVAAU'](_0x354ce4['tbRSb'], _0x354ce4['tbRSb'])) {
                                            console['log']('【赚京豆(微信小程序)-瓜分京豆】开团成功');
                                            $['hasOpen'] = !![];
                                        } else {
                                            console['log']('今日开团已达上限，且当前团成员人已满\n\n');
                                        }
                                    } else {
                                        if (_0x354ce4['cRUmJ'](_0x354ce4['vGKwk'], _0x354ce4['DQMFc'])) {
                                            console['log']('\n开团失败：' + JSON['stringify'](_0x586bb7) + '\x0a');
                                        } else {
                                            $['logErr'](e, _0x1e5f6f);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (_0x479481) {
                    if (_0x354ce4['EQvdx'](_0x354ce4['FYTRU'], _0x354ce4['FYTRU'])) {
                        $['tuan'] = !![];
                        console['log']('获取【赚京豆(微信小程序)-瓜分京豆】活动信息失败 ' + JSON['stringify'](_0x586bb7) + '\x0a');
                    } else {
                        $['logErr'](_0x479481, _0x1e5f6f);
                    }
                } finally {
                    _0x354ce4['rKVON'](_0x112f9a, _0x586bb7);
                }
            } else {
                let {
                    alreadySignDays,
                    beanTotalNum,
                    todayPrize,
                    eachDayPrize
                } = _0x586bb7['data'];
                message += '【第' + alreadySignDays + '日签到】成功，获得' + todayPrize['beanAmount'] + '京豆 🐶\n';
                if (_0x354ce4['JzCHt'](alreadySignDays, 0x7)) alreadySignDays = 0x0;
                message += '【明日签到】可获得' + eachDayPrize[alreadySignDays]['beanAmount'] + '京豆 🐶\n';
                message += '【累计获得】' + beanTotalNum + '京豆 🐶';
            }
        });
    });
}

function getAuthorShareCode(_0x488b3b) {
    var _0x2e804f = {
        'wNyDT': function(_0x248748, _0x572c04) {
            return _0x248748(_0x572c04);
        },
        'lwmMo': function(_0x5be0b4, _0xe914d5) {
            return _0x5be0b4 + _0xe914d5;
        },
        'jCawk': function(_0x4ef7f2, _0x4f4575) {
            return _0x4ef7f2 * _0x4f4575;
        },
        'QVnqs': function(_0x1d4e6b, _0x2b6efa) {
            return _0x1d4e6b * _0x2b6efa;
        },
        'SPYpR': '*/*',
        'TYYqc': 'gzip, deflate, br',
        'yoRsE': 'zh-cn',
        'TVWfT': 'keep-alive',
        'mSCNE': 'application/x-www-form-urlencoded',
        'DdJhq': 'api.m.jd.com',
        'KKpAp': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'Fruid': './USER_AGENTS',
        'vNury': 'JDUA',
        'dhGZO': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'OEIhH': function(_0x4fc167, _0x310f73) {
            return _0x4fc167(_0x310f73);
        },
        'wXSjC': 'tunnel',
        'kyLaT': function(_0x555247, _0x2204f4) {
            return _0x555247 !== _0x2204f4;
        },
        'SluPM': 'sEEPg',
        'mIMPB': 'ZJtUN',
        'XKzFg': 'cDoST',
        'nFLUZ': function(_0x5d6198) {
            return _0x5d6198();
        },
        'wUjLS': function(_0x1dcbcc, _0x3b7de3) {
            return _0x1dcbcc !== _0x3b7de3;
        },
        'IxBbi': 'DLYrM',
        'Iuuay': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
        'tnKIc': function(_0x242a42, _0x544bf6) {
            return _0x242a42 === _0x544bf6;
        },
        'SQBRx': 'nuOKC'
    };
    return new Promise(_0x440a4e => {
        var _0x2235ae = {
            'eYdUm': function(_0x5895c8, _0x304531) {
                return _0x2e804f['wNyDT'](_0x5895c8, _0x304531);
            },
            'VeCRi': function(_0x1a3157, _0x2941b8) {
                return _0x2e804f['lwmMo'](_0x1a3157, _0x2941b8);
            },
            'ZKKgx': function(_0x4d975a, _0x124ab8) {
                return _0x2e804f['jCawk'](_0x4d975a, _0x124ab8);
            },
            'rzUPS': function(_0x364da2, _0x2f1300) {
                return _0x2e804f['jCawk'](_0x364da2, _0x2f1300);
            },
            'lAhFq': function(_0x4d4e4e, _0x400cab) {
                return _0x2e804f['jCawk'](_0x4d4e4e, _0x400cab);
            },
            'cUTKa': function(_0x271703, _0x41162f) {
                return _0x2e804f['QVnqs'](_0x271703, _0x41162f);
            },
            'PBFDi': _0x2e804f['SPYpR'],
            'blvkM': _0x2e804f['TYYqc'],
            'Aymgl': _0x2e804f['yoRsE'],
            'zURjs': _0x2e804f['TVWfT'],
            'kJQnu': _0x2e804f['mSCNE'],
            'ixsjO': _0x2e804f['DdJhq'],
            'IRInW': _0x2e804f['KKpAp'],
            'qVAVS': _0x2e804f['Fruid'],
            'vHTxW': _0x2e804f['vNury'],
            'puKzU': _0x2e804f['dhGZO'],
            'aqiPj': function(_0xc127f1, _0x5609fc) {
                return _0x2e804f['OEIhH'](_0xc127f1, _0x5609fc);
            },
            'CmYnR': _0x2e804f['wXSjC'],
            'KtIlp': function(_0x47e276, _0x5dfd3f) {
                return _0x2e804f['QVnqs'](_0x47e276, _0x5dfd3f);
            },
            'JDnAA': function(_0x23ae96, _0x3d6101) {
                return _0x2e804f['kyLaT'](_0x23ae96, _0x3d6101);
            },
            'MbUIO': _0x2e804f['SluPM'],
            'tNROA': _0x2e804f['mIMPB'],
            'rRXst': _0x2e804f['XKzFg'],
            'hBEQO': function(_0x43e2e3) {
                return _0x2e804f['nFLUZ'](_0x43e2e3);
            }
        };
        if (_0x2e804f['wUjLS'](_0x2e804f['IxBbi'], _0x2e804f['IxBbi'])) {
            return {
                'url': JD_API_HOST + '?functionId=' + function_id + '&body=' + _0x2235ae['eYdUm'](escape, JSON['stringify'](body)) + '&appid=swat_miniprogram&osVersion=5.0.0&clientVersion=3.1.3&fromType=wxapp&timestamp=' + _0x2235ae['VeCRi'](_0x2235ae['VeCRi'](new Date()['getTime'](), _0x2235ae['ZKKgx'](_0x2235ae['rzUPS'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x2235ae['rzUPS'](_0x2235ae['lAhFq'](_0x2235ae['cUTKa'](0x8, 0x3c), 0x3c), 0x3e8)),
                'headers': {
                    'Accept': _0x2235ae['PBFDi'],
                    'Accept-Encoding': _0x2235ae['blvkM'],
                    'Accept-Language': _0x2235ae['Aymgl'],
                    'Connection': _0x2235ae['zURjs'],
                    'Content-Type': _0x2235ae['kJQnu'],
                    'Host': _0x2235ae['ixsjO'],
                    'Referer': _0x2235ae['IRInW'],
                    'Cookie': cookie,
                    'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x2235ae['eYdUm'](require, _0x2235ae['qVAVS'])['USER_AGENT'] : $['getdata'](_0x2235ae['vHTxW']) ? $['getdata'](_0x2235ae['vHTxW']) : _0x2235ae['puKzU']
                }
            };
        } else {
            const _0x416eba = {
                'url': _0x488b3b + '?' + new Date(),
                'timeout': 0x2710,
                'headers': {
                    'User-Agent': _0x2e804f['Iuuay']
                }
            };
            if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
                if (_0x2e804f['tnKIc'](_0x2e804f['SQBRx'], _0x2e804f['SQBRx'])) {
                    const _0x3af486 = _0x2e804f['OEIhH'](require, _0x2e804f['wXSjC']);
                    const _0x1f3ba6 = {
                        'https': _0x3af486['httpsOverHttp']({
                            'proxy': {
                                'host': process['env']['TG_PROXY_HOST'],
                                'port': _0x2e804f['QVnqs'](process['env']['TG_PROXY_PORT'], 0x1)
                            }
                        })
                    };
                    Object['assign'](_0x416eba, {
                        'agent': _0x1f3ba6
                    });
                } else {
                    $['logErr'](e, resp);
                }
            }
            $['get'](_0x416eba, async (_0x7d4ce2, _0x54cc1a, _0x4935a1) => {
                var _0x2a040d = {
                    'wpPCo': function(_0x3be0cc, _0x356fa7) {
                        return _0x2235ae['aqiPj'](_0x3be0cc, _0x356fa7);
                    },
                    'tbxUG': _0x2235ae['CmYnR'],
                    'HaBUJ': function(_0x2cde9d, _0x3ead63) {
                        return _0x2235ae['KtIlp'](_0x2cde9d, _0x3ead63);
                    }
                };
                try {
                    if (_0x7d4ce2) {} else {
                        if (_0x2235ae['JDnAA'](_0x2235ae['MbUIO'], _0x2235ae['tNROA'])) {
                            $['authorTuanList'] = $['authorTuanList']['concat'](JSON['parse'](_0x4935a1));
                        } else {
                            const _0x31b8ad = _0x2a040d['wpPCo'](require, _0x2a040d['tbxUG']);
                            const _0x29748e = {
                                'https': _0x31b8ad['httpsOverHttp']({
                                    'proxy': {
                                        'host': process['env']['TG_PROXY_HOST'],
                                        'port': _0x2a040d['HaBUJ'](process['env']['TG_PROXY_PORT'], 0x1)
                                    }
                                })
                            };
                            Object['assign'](_0x416eba, {
                                'agent': _0x29748e
                            });
                        }
                    }
                } catch (_0x116f0c) {
                    $['logErr'](_0x116f0c, _0x54cc1a);
                } finally {
                    if (_0x2235ae['JDnAA'](_0x2235ae['rRXst'], _0x2235ae['rRXst'])) {
                        _0x2a040d['wpPCo'](_0x440a4e, _0x4935a1);
                    } else {
                        _0x2235ae['hBEQO'](_0x440a4e);
                    }
                }
            });
        }
    });
}

function taskUrl(_0x5ba722, _0x5b4c3e = {}) {
    var _0x495a09 = {
        'RohaJ': function(_0x3b7889, _0x240b2e) {
            return _0x3b7889(_0x240b2e);
        },
        'VyQPS': function(_0x3b8f9c, _0x4d1231) {
            return _0x3b8f9c + _0x4d1231;
        },
        'ZVTsh': function(_0x1f7c05, _0x514bd6) {
            return _0x1f7c05 + _0x514bd6;
        },
        'KsDjY': function(_0x255267, _0x3b47bb) {
            return _0x255267 * _0x3b47bb;
        },
        'DVSsU': function(_0x5d8a03, _0x57ef3f) {
            return _0x5d8a03 * _0x57ef3f;
        },
        'EqYPP': '*/*',
        'drlwq': 'gzip, deflate, br',
        'oMWGA': 'zh-cn',
        'mXpNx': 'keep-alive',
        'RkXQm': 'application/x-www-form-urlencoded',
        'ZyzNs': 'api.m.jd.com',
        'KofFX': 'https://servicewechat.com/wxa5bf5ee667d91626/108/page-frame.html',
        'kPLpj': function(_0x5119f9, _0x3da6f8) {
            return _0x5119f9(_0x3da6f8);
        },
        'tqYHv': './USER_AGENTS',
        'nMKuK': 'JDUA',
        'XVuMU': 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
    };
    return {
        'url': JD_API_HOST + '?functionId=' + _0x5ba722 + '&body=' + _0x495a09['RohaJ'](escape, JSON['stringify'](_0x5b4c3e)) + '&appid=swat_miniprogram&osVersion=5.0.0&clientVersion=3.1.3&fromType=wxapp&timestamp=' + _0x495a09['VyQPS'](_0x495a09['ZVTsh'](new Date()['getTime'](), _0x495a09['KsDjY'](_0x495a09['KsDjY'](new Date()['getTimezoneOffset'](), 0x3c), 0x3e8)), _0x495a09['DVSsU'](_0x495a09['DVSsU'](_0x495a09['DVSsU'](0x8, 0x3c), 0x3c), 0x3e8)),
        'headers': {
            'Accept': _0x495a09['EqYPP'],
            'Accept-Encoding': _0x495a09['drlwq'],
            'Accept-Language': _0x495a09['oMWGA'],
            'Connection': _0x495a09['mXpNx'],
            'Content-Type': _0x495a09['RkXQm'],
            'Host': _0x495a09['ZyzNs'],
            'Referer': _0x495a09['KofFX'],
            'Cookie': cookie,
            'User-Agent': $['isNode']() ? process['env']['JD_USER_AGENT'] ? process['env']['JD_USER_AGENT'] : _0x495a09['kPLpj'](require, _0x495a09['tqYHv'])['USER_AGENT'] : $['getdata'](_0x495a09['nMKuK']) ? $['getdata'](_0x495a09['nMKuK']) : _0x495a09['XVuMU']
        }
    };
};
_0xodf = 'jsjiami.com.v6'


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