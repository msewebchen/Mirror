/**
 * Author:Panda
 * Date:2021-06-03
 * Version:1.0
 * 
 * 宝洁消消乐
 * 活动地址：https://lzdz1-isv.isvjcloud.com/dingzhi/xiaoxiaole/game/activity?activityId=dz2105100000406402
 * 活动时间：2021-05-25至2021-06-18
 * 
 * Note: 默认开通宝洁VIP会员卡
 * 
 * 推荐cron: 18 9 1-18 6 * 
 * 环境变量:
 *     - export ZOO_OPENCAD="false" //默认开通会员(如不开通会员请勿运行该脚本)
 *     - export ZOO_ADD2CART="true" //默认不加购商品
 */
 const $ = new Env("宝洁消消乐");
 const ZOO_OPENCAD = $.isNode() ? process.env.ZOO_OPENCAD || 'true' : 'true'
 const ZOO_ADD2CART = $.isNode() ? process.env.ZOO_ADD2CART || 'false' : 'false'
 /*
 *Progcessed By JSDec in 0.75s
 *JSDec - JSDec.js.org
 */
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
const notify = $['isNode']() ? require('./sendNotify') : '';
const cp = $['isNode']() ? require('child_process') : '';
let cookiesArr = [],
    cookie = '',
    message = '';
let ownCode = null;
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x8a7cf3 => {
        cookiesArr['push'](jdCookieNode[_0x8a7cf3]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x591568 => _0x591568['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x2bd232 => !!_0x2bd232);
}!(async () => {
    var _0x2bf942 = {
        'bozHE': function(_0x515bef, _0x26c289) {
            return _0x515bef === _0x26c289;
        },
        'jAjzg': 'super',
        'kORsh': 'manito',
        'mnicj': 'free',
        'zGiPa': 'fuck',
        'NaXMT': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'xfvwr': 'https://bean.m.jd.com/bean/signIndex.action',
        'pwKBT': function(_0x50c1cd) {
            return _0x50c1cd();
        },
        'tBSaq': '5df25337e58e45f897a622a0cbdbaf18',
        'zxTJL': function(_0x289e63, _0x48e92d) {
            return _0x289e63(_0x48e92d);
        },
        'vMktM': function(_0xf7d45c, _0x49ce96, _0x4c9e0d) {
            return _0xf7d45c(_0x49ce96, _0x4c9e0d);
        },
        'TzYhj': function(_0x4b26c5, _0x1ac115, _0x3d5be8) {
            return _0x4b26c5(_0x1ac115, _0x3d5be8);
        },
        'bbmKw': function(_0x470e41, _0x9b8663) {
            return _0x470e41 !== _0x9b8663;
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x2bf942['NaXMT'], _0x2bf942['xfvwr'], {
            'open-url': _0x2bf942['xfvwr']
        });
        return;
    }
    for (let _0x52408d = 0x0; _0x52408d < cookiesArr['length']; _0x52408d++) {
        if (cookiesArr[_0x52408d]) {
            cookie = cookiesArr[_0x52408d];
            originCookie = cookiesArr[_0x52408d];
            newCookie = '';
            $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x52408d + 0x1;
            $['isLogin'] = !![];
            $['nickName'] = '';
            await _0x2bf942['pwKBT'](checkCookie);
            console['log']('\x0a******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\n');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\x0a请重新登录获取cookie');
                }
                continue;
            }
            authorCodeList = [_0x2bf942['tBSaq']];
            $['bean'] = 0x0;
            $['ADID'] = getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 0x1);
            $['UUID'] = _0x2bf942['zxTJL'](getUUID, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            $['authorCode'] = authorCodeList[_0x2bf942['vMktM'](random, 0x0, authorCodeList['length'])];
            if ($['index'] < 0x19) {
                $['authorCode'] = ownCode ? ownCode : $['authorCode'];
            } else {
                $['authorCode'] = authorCodeList[random(0x0, authorCodeList['length'])];
            }
            if ($['isNode']()) {
                cp['exec']('cd .. && git remote -v', async function(_0x2767ff, _0x56955a, _0x4df525) {
                    if (_0x2bf942['bozHE'](_0x2767ff, null)) {
                        if (_0x56955a['includes'](_0x2bf942['jAjzg']) || _0x56955a['includes'](_0x2bf942['jAjzg']) || _0x56955a['includes'](_0x2bf942['kORsh']) || _0x56955a['includes'](_0x2bf942['mnicj']) || _0x56955a['includes'](_0x2bf942['zGiPa']) || _0x56955a['includes']('mjf')) {
                            $['authorCode'] = authorCodeList[random(0x0, authorCodeList['length'])];
                        }
                    }
                });
            }
            $['authorNum'] = '' + _0x2bf942['TzYhj'](random, 0x186a0, 0xf423f);
            $['activityId'] = 'dz2105100000406402';
            $['activityShopId'] = '1000004064';
            $['activityUrl'] = 'https://lzdz1-isv.isvjcloud.com/dingzhi/xiaoxiaole/game/activity/' + $['authorNum'] + '?activityId=' + $['activityId'] + '&shareUuid=' + $['authorCode'] + '&adsource=null&initHash=/home&shareuserid4minipg=&shopid=undefined&lng=00.000000&lat=00.000000&sid=&un_area=';
            await baojiexiaoxiaole();
            if ($['bean'] > 0x0) {
                message += '\x0a【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
            }
        }
    }
    if (_0x2bf942['bbmKw'](message, '')) {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'], message, '', '\x0a脚本免费使用，请勿在大陆地区的各类平台传播。\x0a京东京享红包：https://u.jd.com/8ItRCnv (每日三次领取红包的机会)');
        } else {
            $['msg']($['name'], '有点儿收获', message);
        }
    }
})()['catch'](_0x543b34 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x543b34 + '!', '');
})['finally'](() => {
    $['done']();
});
async function baojiexiaoxiaole() {
    var _0x52be5f = {
        'SWxas': function(_0x560380, _0x293ca6, _0x350011, _0x1e95ff) {
            return _0x560380(_0x293ca6, _0x350011, _0x1e95ff);
        },
        'QjLDf': function(_0x52c501) {
            return _0x52c501();
        },
        'KhTrS': 'wxActionCommon/getUserInfo',
        'WgVnr': function(_0x1da686, _0x158e8d) {
            return _0x1da686(_0x158e8d);
        },
        'GLrRF': function(_0x252c24, _0x150381, _0x4c11a2) {
            return _0x252c24(_0x150381, _0x4c11a2);
        },
        'IdrGY': 'xiaoxiaole/game/activityContent',
        'VfKCA': function(_0x1a7e79, _0x2cebb5) {
            return _0x1a7e79(_0x2cebb5);
        },
        'PosgU': function(_0x47b017, _0xf540b1) {
            return _0x47b017(_0xf540b1);
        },
        'YZpgD': function(_0x137afc, _0x28c712) {
            return _0x137afc(_0x28c712);
        },
        'DXSca': '开通宝洁VIP',
        'wfzvT': '这一活动必须开通会员才可以进行，遂终止运行。',
        'tsuXn': 'sign',
        'HDzCj': 'xiaoxiaole/game/saveTask',
        'RlURh': function(_0x3ab035, _0x4c1da9) {
            return _0x3ab035(_0x4c1da9);
        },
        'jXwrg': function(_0x29f5d5, _0x30f42c) {
            return _0x29f5d5(_0x30f42c);
        },
        'wdRqM': '   =>根据用户设置，不执行加购任务。',
        'bAJCt': function(_0x2eb75c, _0x5ba494) {
            return _0x2eb75c(_0x5ba494);
        },
        'DNtQE': function(_0x22d3ee, _0x3612bf) {
            return _0x22d3ee(_0x3612bf);
        },
        'cetCZ': function(_0x4f471a, _0x27720a) {
            return _0x4f471a(_0x27720a);
        },
        'hAwpa': function(_0x48c735) {
            return _0x48c735();
        },
        'DVZzi': function(_0x375ea8, _0x45d721) {
            return _0x375ea8(_0x45d721);
        },
        'ZdeGa': function(_0x1102d7, _0x3311f9) {
            return _0x1102d7 * _0x3311f9;
        },
        'dwRAb': 'xiaoxiaole/game/start'
    };
    $['token'] = null;
    $['secretPin'] = null;
    $['pinImg'] = null;
    $['openCardActivityId'] = null;
    await getFirstLZCK();
    await getToken();
    await _0x52be5f['SWxas'](task, 'dz/common/getSimpleActInfoVo', 'activityId=' + $['activityId'], 0x1);
    if ($['token']) {
        await _0x52be5f['QjLDf'](getMyPing);
        if ($['secretPin']) {
            await task('common/accessLogWithAD', 'venderId=' + $['activityShopId'] + '&code=99&pin=' + encodeURIComponent($['secretPin']) + '&activityId=' + $['activityId'] + '&pageUrl=' + $['activityUrl'] + '&subType=app&adSource=null', 0x1);
            await _0x52be5f['SWxas'](task, _0x52be5f['KhTrS'], 'pin=' + _0x52be5f['WgVnr'](encodeURIComponent, $['secretPin']), 0x1);
            await _0x52be5f['GLrRF'](task, _0x52be5f['IdrGY'], 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&pinImg=' + _0x52be5f['VfKCA'](encodeURIComponent, $['pinImg']) + '&nick=' + _0x52be5f['PosgU'](encodeURIComponent, $['pinNick']) + '&shareUuid=' + _0x52be5f['YZpgD'](encodeURIComponent, $['authorCode']));
            await task('taskact/common/drawContent', 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']));
            if ($['activityContent']) {
                $['log']('获取活动信息成功\x0a开启活动：' + $['activityContent']['activityName']);
                if (!$['activityContent']['isOpenCard']) {
                    $['log']('还未开通宝洁VIP');
                    if (ZOO_OPENCAD === 'true') {
                        $['log'](_0x52be5f['DXSca']);
                        await getShopOpenCardInfo(0x3b9ad9e0, 0x191);
                        await bindWithVender(0x3b9ad9e0, 0x3b9ad9e0, 0x191);
                        await $['wait'](0x3e8);
                    } else {
                        $['log'](_0x52be5f['wfzvT']);
                        return;
                    }
                }
                await task('xiaoxiaole/game/activityContent', 'activityId=' + $['activityId'] + '&pin=' + _0x52be5f['YZpgD'](encodeURIComponent, $['secretPin']) + '&pinImg=' + encodeURIComponent($['pinImg']) + '&nick=' + encodeURIComponent($['pinNick']) + '&shareUuid=' + encodeURIComponent($['authorCode']));
                for (const _0x4d6fc5 of [_0x52be5f['tsuXn'], 'mainActive']) {
                    $['log']('\x0a' + $['activityContent'][_0x4d6fc5]['settings'][0x0]['name']);
                    if (!$['activityContent'][_0x4d6fc5]['allStatus']) {
                        await _0x52be5f['GLrRF'](task, _0x52be5f['HDzCj'], 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&actorUuid=' + encodeURIComponent($['actorUuid']) + '&taskType=' + $['activityContent'][_0x4d6fc5]['settings'][0x0]['type'] + '&taskValue=' + $['activityContent'][_0x4d6fc5]['settings'][0x0]['value']);
                        await $['wait'](0xbb8);
                    } else {
                        $['log']('已经完成');
                    }
                }
                $['log']('\n加购商品');
                if (ZOO_ADD2CART === 'true') {
                    if (!$['activityContent']['addSku']['allStatus']) {
                        await _0x52be5f['GLrRF'](task, _0x52be5f['HDzCj'], 'activityId=' + $['activityId'] + '&pin=' + _0x52be5f['RlURh'](encodeURIComponent, $['secretPin']) + '&actorUuid=' + _0x52be5f['jXwrg'](encodeURIComponent, $['actorUuid']) + '&taskType=21&taskValue=21');
                        await $['wait'](0xbb8);
                    } else {
                        $['log']('已经完成');
                    }
                } else {
                    $['log'](_0x52be5f['wdRqM']);
                }
                await task('xiaoxiaole/game/activityContent', 'activityId=' + $['activityId'] + '&pin=' + _0x52be5f['bAJCt'](encodeURIComponent, $['secretPin']) + '&pinImg=' + encodeURIComponent($['pinImg']) + '&nick=' + _0x52be5f['DNtQE'](encodeURIComponent, $['pinNick']) + '&shareUuid=' + _0x52be5f['cetCZ'](encodeURIComponent, $['authorCode']));
                $['log']('当前可参与游戏次数：' + $['activityContent']['gameNum']);
                if ($['activityContent']['gameNum']) {
                    for (let _0x380e6b = 0x0; _0x380e6b < $['activityContent']['gameNum']; _0x380e6b++) {
                        $['log']('开始游戏，游戏时间较长，请耐心等待。');
                        $['gameId'] = null;
                        await _0x52be5f['hAwpa'](keepToken);
                        await $['wait'](0x1f4);
                        await task('xiaoxiaole/game/playGameStart', 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&actorUuid=' + _0x52be5f['DVZzi'](encodeURIComponent, $['actorUuid']));
                        await $['wait'](random(0xa, 0x14) * 0x3e8);
                        if ($['gameId']) {
                            await keepToken();
                            await $['wait'](0x1f4);
                            await task('xiaoxiaole/game/playGameEnd', 'activityId=' + $['activityId'] + '&pin=' + _0x52be5f['DVZzi'](encodeURIComponent, $['secretPin']) + '&actorUuid=' + encodeURIComponent($['actorUuid']) + '&taskType=17&taskValue=' + $['gameId'] + '&score=' + _0x52be5f['ZdeGa'](random(0x96, 0xc8), 0xa) + '&cutStep=0');
                            await $['wait'](0x1f4);
                            await keepToken();
                            await $['wait'](0x1f4);
                            await task(_0x52be5f['dwRAb'], 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&actorUuid=' + _0x52be5f['DVZzi'](encodeURIComponent, $['actorUuid']));
                        }
                        await $['wait'](0x7d0);
                    }
                }
            } else {
                $['log']('没有成功获取到活动信息');
            }
        } else {
            $['log']('没有成功获取到用户信息');
        }
    } else {
        $['log']('没有成功获取到用户鉴权信息');
    }
}

function keepToken() {
    var _0x2b0bec = {
        'kGUzX': ' -token保活成功',
        'aoSST': '*/*',
        'raRwB': 'keep-alive',
        'VaSUc': 'zh-cn',
        'IQEIn': function(_0x5485aa, _0x191fb6) {
            return _0x5485aa(_0x191fb6);
        }
    };
    let _0x3a51a6 = {
        'url': 'https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token',
        'headers': {
            'Host': 'lzdz1-isv.isvjcloud.com',
            'Accept': _0x2b0bec['aoSST'],
            'Connection': _0x2b0bec['raRwB'],
            'Cookie': cookie,
            'User-Agent': '',
            'Accept-Language': _0x2b0bec['VaSUc'],
            'Referer': 'https://lzdz1-isv.isvjcloud.com/lzclient/dzgames/xmxpMerge/index.html?activityId=' + $['activityId'] + '&uuid=' + $['actorUuid'] + '&pin=' + _0x2b0bec['IQEIn'](encodeURIComponent, $['secretPin']),
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0xec7946 => {
        $['get'](_0x3a51a6, (_0x398139, _0x1243ef, _0x1e2d00) => {
            try {
                if (_0x398139) {
                    console['log'](_0x398139);
                } else {
                    if (_0x1e2d00) {
                        _0x1e2d00 = JSON['parse'](_0x1e2d00);
                        if (_0x1e2d00['result']) {
                            $['log'](_0x2b0bec['kGUzX']);
                        }
                    } else {
                        $['log'](' -token保活失败，游戏可能无法正常进行。');
                    }
                }
            } catch (_0x1eb19f) {
                console['log'](_0x1eb19f);
            } finally {
                _0xec7946();
            }
        });
    });
}

function getShopOpenCardInfo(_0x2d6c76, _0x12d65c) {
    var _0x1b0ee9 = {
        'iYXZx': function(_0x2758b4, _0x4a47ac) {
            return _0x2758b4(_0x4a47ac);
        },
        'wxbyD': '*/*',
        'pNTIa': 'keep-alive',
        'LoNix': 'zh-cn',
        'SjhIH': 'gzip, deflate, br'
    };
    let _0x336ae6 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + _0x1b0ee9['iYXZx'](encodeURIComponent, {
            'venderId': _0x2d6c76,
            'channel': _0x12d65c
        }) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': _0x1b0ee9['wxbyD'],
            'Connection': _0x1b0ee9['pNTIa'],
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x1b0ee9['LoNix'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x2d6c76 + '}&channel=' + _0x12d65c + '&returnUrl=' + _0x1b0ee9['iYXZx'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': _0x1b0ee9['SjhIH']
        }
    };
    return new Promise(_0x2c1abd => {
        $['get'](_0x336ae6, (_0x2a0ab1, _0x197aff, _0x3d1f8e) => {
            try {
                if (_0x2a0ab1) {
                    console['log'](_0x2a0ab1);
                } else {
                    res = JSON['parse'](_0x3d1f8e);
                    if (res['success']) {
                        if (res['result']['interestsRuleList']) {
                            $['openCardActivityId'] = res['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'];
                        }
                    }
                }
            } catch (_0x11b7c4) {
                console['log'](_0x11b7c4);
            } finally {
                _0x2c1abd();
            }
        });
    });
}

function bindWithVender(_0x3edd68, _0x2f312c, _0x4b5af6) {
    var _0x19ff69 = {
        'McqAs': function(_0x464326, _0x48b859) {
            return _0x464326(_0x48b859);
        },
        'IzeMP': 'api.m.jd.com',
        'QfdBp': function(_0x2c214e, _0x5f0a1c) {
            return _0x2c214e(_0x5f0a1c);
        }
    };
    let _0xa3c13c = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + _0x19ff69['McqAs'](encodeURIComponent, {
            'venderId': _0x3edd68,
            'shopId': _0x2f312c,
            'bindByVerifyCodeFlag': 0x1,
            'registerExtend': {},
            'writeChildFlag': 0x0,
            'activityId': $['activityId'],
            'channel': _0x4b5af6
        }) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': _0x19ff69['IzeMP'],
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': 'zh-cn',
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x3edd68 + '}&channel=' + _0x4b5af6 + '&returnUrl=' + _0x19ff69['QfdBp'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0x3ba921 => {
        var _0x348cb9 = {
            'geLCi': function(_0x89802d, _0x2c663e) {
                return _0x89802d === _0x2c663e;
            }
        };
        $['get'](_0xa3c13c, (_0x5308d1, _0x330102, _0x602446) => {
            try {
                if (_0x5308d1) {
                    console['log'](_0x5308d1);
                } else {
                    res = JSON['parse'](_0x602446);
                    if (res['success']) {
                        if (res['result']['giftInfo'] && res['result']['giftInfo']['giftList']) {
                            for (const _0x355001 of res['result']['giftInfo']['giftList']) {
                                if (_0x348cb9['geLCi'](_0x355001['prizeType'], 0x4)) {
                                    $['log'](' =>获得【' + _0x355001['quantity'] + '】京豆');
                                    $['bean'] += _0x355001['quantity'];
                                }
                            }
                        }
                    }
                }
            } catch (_0x2091d7) {
                console['log'](_0x2091d7);
            } finally {
                _0x3ba921();
            }
        });
    });
}

function task(_0x248738, _0x1778ab, _0x5a00c2 = 0x0) {
    var _0x5e4eb4 = {
        'geOkl': 'dz/common/getSimpleActInfoVo',
        'uPnwt': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'YXBeb': 'myInfo',
        'izgJa': function(_0x45cdec) {
            return _0x45cdec();
        },
        'iNNYl': function(_0x15f9e9, _0x108090, _0x1eefe6, _0x1be1a8) {
            return _0x15f9e9(_0x108090, _0x1eefe6, _0x1be1a8);
        }
    };
    return new Promise(_0xbde8a => {
        var _0x5cd914 = {
            'QuZNK': 'xiaoxiaole/game/start',
            'PjRDl': '    =>很遗憾未中奖',
            'MSHqw': 'xiaoxiaole/game/playGameEnd',
            'VtRCU': 'doTask',
            'kSBgg': _0x5e4eb4['geOkl'],
            'FHtFt': 'common/accessLogWithAD',
            'ZztTr': _0x5e4eb4['uPnwt'],
            'ZuwhM': 'xiaoxiaole/game/activityContent',
            'jMICR': function(_0x439434, _0x2b91f9) {
                return _0x439434 === _0x2b91f9;
            },
            'kesxN': _0x5e4eb4['YXBeb'],
            'JnXzo': 'getOpenCardInfo',
            'dkXFg': function(_0x2f582d) {
                return _0x5e4eb4['izgJa'](_0x2f582d);
            }
        };
        $['post'](_0x5e4eb4['iNNYl'](taskUrl, _0x248738, _0x1778ab, _0x5a00c2), async (_0x491737, _0x17e28b, _0x524333) => {
            try {
                if (_0x491737) {
                    $['log'](_0x491737);
                } else {
                    if (_0x524333) {
                        _0x524333 = JSON['parse'](_0x524333);
                        if (_0x524333['result']) {
                            switch (_0x248738) {
                                case _0x5cd914['QuZNK']:
                                    if (_0x524333['data']['wdsrvo']['drawOk']) {
                                        $['log']('    =>中奖咯～ 获得【' + _0x524333['data']['wdsrvo']['name'] + '】');
                                        switch (_0x524333['data']['wdsrvo']['drawInfoType']) {
                                            case 0x6:
                                                $['bean'] += parseInt(_0x524333['data']['wdsrvo']['name']['replace']('京豆', ''));
                                                break;
                                            case 0x7:
                                                if ($['isNode']()) {
                                                    await notify['sendNotify']($['name'], '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 【' + $data['data']['wdsrvo']['name'] + '】。\n活动地址：' + $['activityUrl'], '', '\n脚本免费使用，请勿在大陆地区的各类平台传播。\n京东京享红包：https://u.jd.com/8ItRCnv (每日三次领取红包的机会)');
                                                } else {
                                                    $['msg']($['name'], '中奖了', '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 【' + $data['data']['wdsrvo']['name'] + '】。\x0a活动地址：' + $['activityUrl'] + '\x0a脚本免费使用，请勿在大陆地区的各类平台传播。\x0a京东京享红包：https://u.jd.com/8ItRCnv (每日三次领取红包的机会)');
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                    } else {
                                        $['log'](_0x5cd914['PjRDl']);
                                    }
                                    break;
                                case _0x5cd914['MSHqw']:
                                    $['log']('    =>完成游戏，分数：' + _0x524333['data']['score'] + ',剩余游戏次数：' + _0x524333['data']['gameNum']);
                                    break;
                                case 'xiaoxiaole/game/playGameStart':
                                    $['gameId'] = _0x524333['data']['taskValue'];
                                case _0x5cd914['VtRCU']:
                                    if (_0x524333['data']['bean']) {
                                        $['log']('    =>完成任务，获得【' + _0x524333['data']['bean'] + '】京豆');
                                        $['bean'] += _0x524333['data']['bean'];
                                    }
                                    if (_0x524333['data']['coin']) {
                                        $['log']('    =>完成任务，获得【' + _0x524333['data']['coin'] + '】龙币');
                                    }
                                    if (_0x524333['data']['chance']) {
                                        $['log']('    =>完成任务，获得【' + _0x524333['data']['chance'] + '】游戏机会');
                                    }
                                    break;
                                case 'helpFriend':
                                case _0x5cd914['kSBgg']:
                                case _0x5cd914['FHtFt']:
                                    break;
                                case 'wxActionCommon/getUserInfo':
                                    $['pinImg'] = _0x524333['data']['yunMidImageUrl'] ? _0x524333['data']['yunMidImageUrl'] : _0x5cd914['ZztTr'];
                                    $['pinNick'] = _0x524333['data']['nickname'];
                                    break;
                                case _0x5cd914['ZuwhM']:
                                    $['activityContent'] = _0x524333['data'];
                                    $['jdActivityId'] = _0x524333['data']['jdActivityId'];
                                    $['actorUuid'] = _0x524333['data']['actorUuid'];
                                    if (_0x5cd914['jMICR']($['index'], 0x1)) {
                                        ownCode = _0x524333['data']['actorUuid'];
                                    }
                                    break;
                                case _0x5cd914['kesxN']:
                                    $['userInfo'] = _0x524333['data'];
                                    break;
                                case _0x5cd914['JnXzo']:
                                    if (_0x524333['data']['openCardReward']) {
                                        if (_0x524333['data']['bean']) {
                                            $['log']('    =>完成任务，获得【' + _0x524333['data']['bean'] + '】京豆');
                                            $['bean'] += _0x524333['data']['bean'];
                                        }
                                        if (_0x524333['data']['coin']) {
                                            $['log']('    =>完成任务，获得【' + _0x524333['data']['coin'] + '】龙币');
                                        }
                                        if (_0x524333['data']['chance']) {
                                            $['log']('    =>完成任务，获得【' + _0x524333['data']['chance'] + '】游戏机会');
                                        }
                                    }
                                    $['openCardInfo'] = _0x524333['data'];
                                    break;
                                case 'getproduct':
                                    $['productList'] = _0x524333['data'];
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            switch (_0x248738) {
                                case _0x5cd914['kSBgg']:
                                    break;
                                default:
                                    $['log'](JSON['stringify'](_0x524333));
                                    break;
                            }
                        }
                    } else {
                        $['log']('京东没有返回数据');
                    }
                }
            } catch (_0x5b28ba) {
                $['log'](_0x5b28ba);
            } finally {
                _0x5cd914['dkXFg'](_0xbde8a);
            }
        });
    });
}

function getShopOpenCardInfo(_0xebf033, _0x5472f5) {
    var _0x5b626b = {
        'InEiO': function(_0x410ca0, _0x42edf3) {
            return _0x410ca0(_0x42edf3);
        },
        'mYTUw': '*/*',
        'PgOQc': 'zh-cn'
    };
    let _0xe842da = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + _0x5b626b['InEiO'](encodeURIComponent, JSON['stringify'](_0xebf033)) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': _0x5b626b['mYTUw'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x5b626b['PgOQc'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x5472f5 + '}&channel=7014&returnUrl=' + _0x5b626b['InEiO'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0x1af17e => {
        $['get'](_0xe842da, (_0x12808b, _0x278c5c, _0x752dbe) => {
            try {
                if (_0x12808b) {
                    console['log'](_0x12808b);
                } else {
                    res = JSON['parse'](_0x752dbe);
                    if (res['success']) {
                        if (res['result']['interestsRuleList']) {
                            $['openCardActivityId'] = res['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'];
                        }
                    }
                }
            } catch (_0x1da94e) {
                console['log'](_0x1da94e);
            } finally {
                _0x1af17e();
            }
        });
    });
}

function bindWithVender(_0x4df551, _0x288459) {
    var _0x15d9af = {
        'aptLX': 'api.m.jd.com',
        'vUhkM': '*/*',
        'DKisT': 'keep-alive',
        'PubcA': 'zh-cn',
        'BYdKp': function(_0x902f18, _0x76ca91) {
            return _0x902f18(_0x76ca91);
        },
        'vZayX': 'gzip, deflate, br'
    };
    let _0x3ace85 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + encodeURIComponent(JSON['stringify'](_0x4df551)) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': _0x15d9af['aptLX'],
            'Accept': _0x15d9af['vUhkM'],
            'Connection': _0x15d9af['DKisT'],
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x15d9af['PubcA'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x288459 + '}&channel=7014&returnUrl=' + _0x15d9af['BYdKp'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': _0x15d9af['vZayX']
        }
    };
    return new Promise(_0x59b347 => {
        var _0x535cec = {
            'oWxHO': function(_0x5b6065) {
                return _0x5b6065();
            }
        };
        $['get'](_0x3ace85, (_0x318e87, _0x2588c2, _0x3d0617) => {
            try {
                if (_0x318e87) {
                    console['log'](_0x318e87);
                } else {
                    res = JSON['parse'](_0x3d0617);
                    if (res['success']) {
                        if (res['result']['giftInfo'] && res['result']['giftInfo']['giftList']) {
                            for (const _0x316882 of res['result']['giftInfo']['giftList']) {
                                if (_0x316882['prizeType'] === 0x4) {
                                    $['log']('   =>获得【' + _0x316882['quantity'] + '】京豆');
                                    $['bean'] += _0x316882['quantity'];
                                }
                            }
                        }
                    }
                }
            } catch (_0xc58f06) {
                console['log'](_0xc58f06);
            } finally {
                _0x535cec['oWxHO'](_0x59b347);
            }
        });
    });
}

function taskUrl(_0x1a909f, _0x47ffec, _0x9d003f) {
    var _0x5e2f9b = {
        'aQkGh': 'gzip, deflate, br',
        'krMqo': 'https://lzdz1-isv.isvjcloud.com'
    };
    return {
        'url': _0x9d003f ? 'https://lzdz1-isv.isvjcloud.com/' + _0x1a909f : 'https://lzdz1-isv.isvjcloud.com/dingzhi/' + _0x1a909f,
        'headers': {
            'Host': 'lzdz1-isv.isvjcloud.com',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': _0x5e2f9b['aQkGh'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': _0x5e2f9b['krMqo'],
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': 'keep-alive',
            'Referer': $['activityUrl'],
            'Cookie': cookie
        },
        'body': _0x47ffec
    };
}

function getMyPing() {
    var _0x11c783 = {
        'GZxIv': 'set-cookie',
        'yWZUb': 'headers',
        'yMhAh': function(_0x40daa9) {
            return _0x40daa9();
        },
        'bFJmC': 'lzdz1-isv.isvjcloud.com',
        'TOKPJ': 'application/json',
        'RFlkR': 'zh-cn',
        'ykRqS': 'application/x-www-form-urlencoded',
        'LvEKy': 'https://lzdz1-isv.isvjcloud.com/'
    };
    let _0x5a8743 = {
        'url': 'https://lzdz1-isv.isvjcloud.com/customer/getMyPing',
        'headers': {
            'Host': _0x11c783['bFJmC'],
            'Accept': _0x11c783['TOKPJ'],
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': _0x11c783['RFlkR'],
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': _0x11c783['ykRqS'],
            'Origin': _0x11c783['LvEKy'],
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': 'keep-alive',
            'Referer': $['activityUrl'],
            'Cookie': cookie
        },
        'body': 'userId=' + $['activityShopId'] + '&token=' + $['token'] + '&fromType=APP'
    };
    return new Promise(_0x49d3e4 => {
        $['post'](_0x5a8743, (_0x7bf3fd, _0x3b38b5, _0xa3a45e) => {
            try {
                if (_0x7bf3fd) {
                    $['log'](_0x7bf3fd);
                } else {
                    if (_0x3b38b5['headers']['set-cookie']) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x56c095 of _0x3b38b5['headers'][_0x11c783['GZxIv']]) {
                                cookie = '' + cookie + _0x56c095['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x1726f7 of _0x3b38b5[_0x11c783['yWZUb']]['Set-Cookie']['split'](',')) {
                                cookie = '' + cookie + _0x1726f7['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0x3b38b5[_0x11c783['yWZUb']]['Set-Cookie']) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x3cc409 of _0x3b38b5['headers']['set-cookie']) {
                                cookie = '' + cookie + _0x3cc409['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0xc6e5d4 of _0x3b38b5[_0x11c783['yWZUb']]['Set-Cookie']['split'](',')) {
                                cookie = '' + cookie + _0xc6e5d4['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0xa3a45e) {
                        _0xa3a45e = JSON['parse'](_0xa3a45e);
                        if (_0xa3a45e['result']) {
                            $['log']('你好：' + _0xa3a45e['data']['nickname']);
                            $['pin'] = _0xa3a45e['data']['nickname'];
                            $['secretPin'] = _0xa3a45e['data']['secretPin'];
                        } else {
                            $['log'](_0xa3a45e['errorMessage']);
                        }
                    } else {
                        $['log']('京东返回了空数据');
                    }
                }
            } catch (_0xb5832e) {
                $['log'](_0xb5832e);
            } finally {
                _0x11c783['yMhAh'](_0x49d3e4);
            }
        });
    });
}

function getFirstLZCK() {
    var _0x1fa666 = {
        'UCxwq': 'Set-Cookie'
    };
    return new Promise(_0x1bcd69 => {
        var _0x16b3fb = {
            'RosgI': 'set-cookie',
            'eWesK': _0x1fa666['UCxwq'],
            'wZyJG': 'headers',
            'LUWAW': function(_0x475894) {
                return _0x475894();
            }
        };
        $['get']({
            'url': $['activityUrl']
        }, (_0x447649, _0x174152, _0x170fb3) => {
            try {
                if (_0x447649) {
                    console['log'](_0x447649);
                } else {
                    if (_0x174152['headers'][_0x16b3fb['RosgI']]) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x416ec5 of _0x174152['headers'][_0x16b3fb['RosgI']]) {
                                cookie = '' + cookie + _0x416ec5['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x19bccf of _0x174152['headers'][_0x16b3fb['eWesK']]['split'](',')) {
                                cookie = '' + cookie + _0x19bccf['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0x174152['headers']['Set-Cookie']) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x3a6153 of _0x174152['headers']['set-cookie']) {
                                cookie = '' + cookie + _0x3a6153['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x3ce498 of _0x174152[_0x16b3fb['wZyJG']]['Set-Cookie']['split'](',')) {
                                cookie = '' + cookie + _0x3ce498['split'](';')[0x0] + ';';
                            }
                        }
                    }
                }
            } catch (_0x4b8b4a) {
                console['log'](_0x4b8b4a);
            } finally {
                _0x16b3fb['LUWAW'](_0x1bcd69);
            }
        });
    });
}

function getToken() {
    var _0x3cd7a5 = {
        'dFzbU': function(_0x2144e2) {
            return _0x2144e2();
        },
        'HmdBg': 'api.m.jd.com',
        'gaPUy': '*/*',
        'FBDJf': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)'
    };
    let _0x282df7 = {
        'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'headers': {
            'Host': _0x3cd7a5['HmdBg'],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': _0x3cd7a5['gaPUy'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': _0x3cd7a5['FBDJf'],
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': 'body=%7B%22url%22%3A%20%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=72124265217d48b7955781024d65bbc4&client=apple&clientVersion=9.4.0&st=1621796702000&sv=120&sign=14f7faa31356c74e9f4289972db4b988'
    };
    return new Promise(_0x5781f8 => {
        var _0x479a69 = {
            'YiWQL': function(_0x1e064e) {
                return _0x3cd7a5['dFzbU'](_0x1e064e);
            }
        };
        $['post'](_0x282df7, (_0x34aa51, _0x1349d5, _0xa2a25e) => {
            try {
                if (_0x34aa51) {
                    $['log'](_0x34aa51);
                } else {
                    if (_0xa2a25e) {
                        _0xa2a25e = JSON['parse'](_0xa2a25e);
                        if (_0xa2a25e['code'] === '0') {
                            $['token'] = _0xa2a25e['token'];
                        }
                    } else {
                        $['log']('京东返回了空数据');
                    }
                }
            } catch (_0x2e53c4) {
                $['log'](_0x2e53c4);
            } finally {
                _0x479a69['YiWQL'](_0x5781f8);
            }
        });
    });
}

function random(_0x492e45, _0x12f38e) {
    return Math['floor'](Math['random']() * (_0x12f38e - _0x492e45)) + _0x492e45;
}

function getUUID(_0x54f9b7 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', _0x2317c3 = 0x0) {
    var _0x376f70 = {
        'gZRMr': function(_0x5b4712, _0x4d54a5) {
            return _0x5b4712 * _0x4d54a5;
        },
        'xPkAz': function(_0x173696, _0x50f7e1) {
            return _0x173696 == _0x50f7e1;
        },
        'YZQds': function(_0x3b2bcc, _0x26e79d) {
            return _0x3b2bcc | _0x26e79d;
        },
        'Dwyyn': function(_0x2d8d1d, _0x5b75f4) {
            return _0x2d8d1d & _0x5b75f4;
        }
    };
    return _0x54f9b7['replace'](/[xy]/g, function(_0x346bb1) {
        var _0x483dcc = _0x376f70['gZRMr'](Math['random'](), 0x10) | 0x0,
            _0x10fe75 = _0x376f70['xPkAz'](_0x346bb1, 'x') ? _0x483dcc : _0x376f70['YZQds'](_0x376f70['Dwyyn'](_0x483dcc, 0x3), 0x8);
        if (_0x2317c3) {
            uuid = _0x10fe75['toString'](0x24)['toUpperCase']();
        } else {
            uuid = _0x10fe75['toString'](0x24);
        }
        return uuid;
    });
}

function checkCookie() {
    var _0x531c9f = {
        'mkRLn': '京东返回了空数据',
        'HWpsa': function(_0x1329cb) {
            return _0x1329cb();
        },
        'DzaXR': 'me-api.jd.com',
        'NtgqQ': 'zh-cn',
        'HEpym': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&'
    };
    const _0xec1c7f = {
        'url': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'headers': {
            'Host': _0x531c9f['DzaXR'],
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
            'Accept-Language': _0x531c9f['NtgqQ'],
            'Referer': _0x531c9f['HEpym'],
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0x20600b => {
        var _0x3638b7 = {
            'kXOVu': '1001',
            'dEtif': _0x531c9f['mkRLn'],
            'QrYBO': function(_0xb83b97) {
                return _0x531c9f['HWpsa'](_0xb83b97);
            }
        };
        $['get'](_0xec1c7f, (_0x13f171, _0xab0daf, _0x593867) => {
            try {
                if (_0x13f171) {
                    $['logErr'](_0x13f171);
                } else {
                    if (_0x593867) {
                        _0x593867 = JSON['parse'](_0x593867);
                        if (_0x593867['retcode'] === _0x3638b7['kXOVu']) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (_0x593867['retcode'] === '0' && _0x593867['data']['hasOwnProperty']('userInfo')) {
                            $['nickName'] = _0x593867['data']['userInfo']['baseInfo']['nickname'];
                        }
                    } else {
                        $['log'](_0x3638b7['dEtif']);
                    }
                }
            } catch (_0x5c8ae4) {
                $['logErr'](_0x5c8ae4);
            } finally {
                _0x3638b7['QrYBO'](_0x20600b);
            }
        });
    });
}
 // prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
