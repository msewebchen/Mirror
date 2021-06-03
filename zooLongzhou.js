/**
 * Author:Panda
 * Date:2021-06-03
 * Version:1.0
 * Url:https://raw.githubusercontent.com/zooPanda/zoo/dev/zooLongzhou.js
 * 浓情618 与“粽”不同
 * 活动地址：https://lzdz-isv.isvjcloud.com/dingzhi/union/longzhou/activity?activityId=901053001
 * 活动时间：2021-06-01至2021-06-18
 * 推荐cron: 15 13 1-18 6 *
 * 账号1默认助力Panda，后续账号助力账号1，如账号1无法正常获取到参数，则所有账号均助力Panda
 * 
 * 环境变量：
 *     - export ZOO_OPENCAD="true" //默认不开通会员
 *     - export ZOO_ADD2CART="true" //默认不加购商品
 */
 const $ = new Env("与'粽'不同");
 const ZOO_OPENCAD = $.isNode() ? process.env.ZOO_OPENCAD || 'false' : 'false'
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
    Object['keys'](jdCookieNode)['forEach'](_0xce4f95 => {
        cookiesArr['push'](jdCookieNode[_0xce4f95]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x442e5e => _0x442e5e['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x3bd802 => !!_0x3bd802);
}!(async () => {
    var _0x1ce521 = {
        'fOUFI': 'super',
        'djqlR': 'free',
        'AcuHZ': 'fuck',
        'GsMBY': 'mjf',
        'veBQo': function(_0x5946ea, _0x43b68e, _0x47f74f) {
            return _0x5946ea(_0x43b68e, _0x47f74f);
        },
        'SgogK': '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'coZoi': 'https://bean.m.jd.com/bean/signIndex.action',
        'CQBda': 'b297c545b43d435dbed35c98bdf27213',
        'StHBf': 'c069b819bb514c56a91da827390a80c0',
        'XZcjA': 'b297c545b43d435dbed35c98bdf27213',
        'PLZti': 'c069b819bb514c56a91da827390a80c0',
        'SKXJk': 'b297c545b43d435dbed35c98bdf27213',
        'ChjZh': 'c069b819bb514c56a91da827390a80c0',
        'gXXVg': '1000004123',
        'sHJTR': function(_0xb9b570, _0x22d7d4) {
            return _0xb9b570 > _0x22d7d4;
        },
        'FmMqr': function(_0x2d828d, _0x32c512) {
            return _0x2d828d !== _0x32c512;
        },
        'YOavP': '脚本免费使用，请勿在大陆地区的各类平台传播。\n京东京享红包：https://u.jd.com/8ItRCnv (每日三次领取红包的机会)'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x1ce521['SgogK'], 'https://bean.m.jd.com/bean/signIndex.action', {
            'open-url': _0x1ce521['coZoi']
        });
        return;
    }
    for (let _0x5d945f = 0x0; _0x5d945f < cookiesArr['length']; _0x5d945f++) {
        if (cookiesArr[_0x5d945f]) {
            cookie = cookiesArr[_0x5d945f];
            originCookie = cookiesArr[_0x5d945f];
            newCookie = '';
            $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x5d945f + 0x1;
            $['isLogin'] = !![];
            $['nickName'] = '';
            await checkCookie();
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
            if (!$['isLogin']) {
                $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                    'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
                });
                if ($['isNode']()) {
                    await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\x0a请重新登录获取cookie');
                }
                continue;
            }
            authorCodeList = ['b297c545b43d435dbed35c98bdf27213', _0x1ce521['CQBda'], _0x1ce521['StHBf'], _0x1ce521['XZcjA'], _0x1ce521['PLZti'], _0x1ce521['SKXJk'], 'b297c545b43d435dbed35c98bdf27213', _0x1ce521['ChjZh'], 'c069b819bb514c56a91da827390a80c0'];
            $['bean'] = 0x0;
            $['ADID'] = getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 0x1);
            $['UUID'] = getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            $['authorCode'] = authorCodeList[random(0x0, authorCodeList['length'])];
            if ($['index'] < 0x19) {
                $['authorCode'] = ownCode ? ownCode : $['authorCode'];
            } else {
                $['authorCode'] = authorCodeList[random(0x0, authorCodeList['length'])];
            }
            if ($['isNode']()) {
                cp['exec']('cd .. && git remote -v', async function(_0x351289, _0x50e2d0, _0x149dbd) {
                    if (_0x351289 === null) {
                        if (_0x50e2d0['includes'](_0x1ce521['fOUFI']) || _0x50e2d0['includes'](_0x1ce521['fOUFI']) || _0x50e2d0['includes']('manito') || _0x50e2d0['includes'](_0x1ce521['djqlR']) || _0x50e2d0['includes'](_0x1ce521['AcuHZ']) || _0x50e2d0['includes'](_0x1ce521['GsMBY'])) {
                            $['authorCode'] = authorCodeList[_0x1ce521['veBQo'](random, 0x0, authorCodeList['length'])];
                        }
                    }
                });
            }
            $['authorNum'] = '' + _0x1ce521['veBQo'](random, 0x186a0, 0xf423f);
            $['activityId'] = '901053001';
            $['activityShopId'] = _0x1ce521['gXXVg'];
            $['activityUrl'] = 'https://lzdz-isv.isvjcloud.com/dingzhi/union/longzhou/activity/' + $['authorNum'] + '?activityId=' + $['activityId'] + '&shareUuid=' + $['authorCode'] + '&adsource=null&initHash=/home&shareuserid4minipg=&shopid=undefined&lng=00.000000&lat=00.000000&sid=&un_area=';
            await longzhou();
            if (_0x1ce521['sHJTR']($['bean'], 0x0)) {
                message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       -> 获得 ' + $['bean'] + ' 京豆。';
            }
        }
    }
    if (_0x1ce521['FmMqr'](message, '')) {
        if ($['isNode']()) {
            await notify['sendNotify']($['name'], message, '', _0x1ce521['YOavP']);
        } else {
            $['msg']($['name'], '有点儿收获', message);
        }
    }
})()['catch'](_0x16f630 => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x16f630 + '!', '');
})['finally'](() => {
    $['done']();
});
async function longzhou() {
    var _0x7ba2f4 = {
        'mSEfw': 'dz/common/getSimpleActInfoVo',
        'BEHPz': function(_0x3c559a) {
            return _0x3c559a();
        },
        'RBcOU': function(_0x4ed073, _0x419115, _0x16919b, _0x14703f) {
            return _0x4ed073(_0x419115, _0x16919b, _0x14703f);
        },
        'AfERP': function(_0x4b064e, _0x17686a) {
            return _0x4b064e(_0x17686a);
        },
        'LSwVz': function(_0xeaff0, _0x42cac6, _0x1e9e63) {
            return _0xeaff0(_0x42cac6, _0x1e9e63);
        },
        'AOSKM': function(_0x9435aa, _0x34ee03, _0x5f3749) {
            return _0x9435aa(_0x34ee03, _0x5f3749);
        },
        'mudYX': function(_0x35c2a8, _0x212ce8) {
            return _0x35c2a8(_0x212ce8);
        },
        'YOzRU': function(_0x1bf4da, _0x4e6b39, _0x408988) {
            return _0x1bf4da(_0x4e6b39, _0x408988);
        },
        'dHrpB': function(_0x708e04, _0x342cfb) {
            return _0x708e04(_0x342cfb);
        },
        'xDcvY': 'helpFriend',
        'XKasf': function(_0x5b9590, _0x11b734) {
            return _0x5b9590 > _0x11b734;
        },
        'dAZdR': function(_0x4282ba, _0x1d958e, _0x1b73ba) {
            return _0x4282ba(_0x1d958e, _0x1b73ba);
        },
        'TUkdM': function(_0x395884, _0x7237e6, _0x34c54f) {
            return _0x395884(_0x7237e6, _0x34c54f);
        },
        'DzgGY': 'getOpenCardInfo',
        'ogZkr': function(_0x1afd95, _0x5aa83e) {
            return _0x1afd95(_0x5aa83e);
        },
        'EQVVO': function(_0x3fcfa0, _0x25b841) {
            return _0x3fcfa0(_0x25b841);
        },
        'YnxDN': '   ->已经完成所有开卡任务',
        'mRUae': '   ->根据用户设置，不执行加入会员任务。',
        'tOmNk': function(_0x224830, _0x237815, _0x12a252) {
            return _0x224830(_0x237815, _0x12a252);
        },
        'vgkRW': function(_0x5c7937, _0x480078) {
            return _0x5c7937 !== _0x480078;
        },
        'NbFCm': 'doTask',
        'QWFYD': '   ->已完成',
        'lckKu': function(_0x4b7125, _0x47d36f) {
            return _0x4b7125 < _0x47d36f;
        },
        'ABGvO': '2|1|3|0|4',
        'VerOq': function(_0x588a0e, _0x319d94) {
            return _0x588a0e * _0x319d94;
        },
        'LVpvz': function(_0x146011, _0xe98728, _0x4d51ab) {
            return _0x146011(_0xe98728, _0x4d51ab);
        },
        'AQfKe': function(_0x3113c0, _0x55f3f5) {
            return _0x3113c0(_0x55f3f5);
        },
        'JktOD': function(_0x1f7714, _0x2d2e97, _0x52fa6c) {
            return _0x1f7714(_0x2d2e97, _0x52fa6c);
        },
        'NRSVU': function(_0x2f5797, _0x345a65) {
            return _0x2f5797 + _0x345a65;
        },
        'hxOwD': '0eed6538f6e84b754ad2ab95b45c54f8',
        'PVYeU': function(_0x3ab25c, _0x323c74) {
            return _0x3ab25c(_0x323c74);
        },
        'pyrpn': function(_0x47fcb3, _0x459224) {
            return _0x47fcb3 / _0x459224;
        },
        'exJYG': function(_0x184a0a, _0x5aa0b3) {
            return _0x184a0a(_0x5aa0b3);
        },
        'YhWyp': '没有成功获取到用户信息',
        'MEZCX': '没有成功获取到用户鉴权信息'
    };
    $['token'] = null;
    $['secretPin'] = null;
    $['pinImg'] = null;
    $['openCardActivityId'] = null;
    await getFirstLZCK();
    await getToken();
    await task(_0x7ba2f4['mSEfw'], 'activityId=' + $['activityId'], 0x1);
    if ($['token']) {
        await _0x7ba2f4['BEHPz'](getMyPing);
        if ($['secretPin']) {
            await task('common/accessLogWithAD', 'venderId=' + $['activityShopId'] + '&code=99&pin=' + encodeURIComponent($['secretPin']) + '&activityId=' + $['activityId'] + '&pageUrl=' + $['activityUrl'] + '&subType=app&adSource=null', 0x1);
            await _0x7ba2f4['RBcOU'](task, 'wxActionCommon/getUserInfo', 'pin=' + _0x7ba2f4['AfERP'](encodeURIComponent, $['secretPin']), 0x1);
            await _0x7ba2f4['LSwVz'](task, 'activityContent', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['AfERP'](encodeURIComponent, $['secretPin']) + '&pinImg=' + encodeURIComponent($['pinImg']) + '&nick=' + encodeURIComponent($['pinNick']) + '&shareUuid=' + encodeURIComponent($['authorCode']));
            if ($['activityContent']) {
                await _0x7ba2f4['AOSKM'](task, 'getOpenCardInfo', 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&shareUuid=' + _0x7ba2f4['mudYX'](encodeURIComponent, $['authorCode']));
                if ($['openCardInfo']) {
                    if (!$['openCardInfo']['hasFollow'] || !$['openCardInfo']['followstatus']) {
                        $['log']('\n ->关注店铺');
                        await _0x7ba2f4['YOzRU'](task, 'doTask', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['dHrpB'](encodeURIComponent, $['secretPin']) + '&taskId=followshop');
                        await task(_0x7ba2f4['xDcvY'], 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['dHrpB'](encodeURIComponent, $['secretPin']) + '&shareUuid=' + encodeURIComponent($['authorCode']));
                    }
                    $['log']('\x0a ->加入会员');
                    if (ZOO_OPENCAD === 'true') {
                        needOpenList = [];
                        openList = [];
                        needOpenCardList = [];
                        for (const _0x5cf50e of $['openCardInfo']['shopList']) {
                            needOpenList['push'](_0x5cf50e['venderId']);
                        }
                        for (const _0x26acf2 of $['openCardInfo']['openCardList']) {
                            openList['push'](_0x26acf2['venderId']);
                        }
                        for (let _0x113b5c = 0x0; _0x113b5c < needOpenList['length']; _0x113b5c++) {
                            if (openList['indexOf'](needOpenList[_0x113b5c]) === -0x1) {
                                needOpenCardList['push'](needOpenList[_0x113b5c]);
                            }
                        }
                        if (_0x7ba2f4['XKasf'](needOpenCardList['length'], 0x0)) {
                            for (let _0x25aece = 0x0; _0x25aece < needOpenCardList['length']; _0x25aece++) {
                                for (const _0x26acf2 of $['openCardInfo']['shopList']) {
                                    if (_0x26acf2['venderId'] === needOpenCardList[_0x25aece]) {
                                        $['log']('   ->执行【' + _0x26acf2['venderName'] + '】开卡任务');
                                        await _0x7ba2f4['dAZdR'](getShopOpenCardInfo, needOpenCardList[_0x25aece], 0x191);
                                        await bindWithVender(_0x26acf2['venderId'], _0x26acf2['shopId'], 0x191);
                                        await $['wait'](0xbb8);
                                        await _0x7ba2f4['TUkdM'](task, _0x7ba2f4['DzgGY'], 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['ogZkr'](encodeURIComponent, $['secretPin']) + '&shareUuid=' + _0x7ba2f4['EQVVO'](encodeURIComponent, $['authorCode']));
                                    }
                                }
                            }
                        } else {
                            $['log'](_0x7ba2f4['YnxDN']);
                        }
                    } else {
                        $['log'](_0x7ba2f4['mRUae']);
                    }
                }
                await task('myInfo', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['EQVVO'](encodeURIComponent, $['secretPin']));
                await _0x7ba2f4['tOmNk'](task, 'getproduct', 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&type=5');
                if ($['userInfo']) {
                    for (const _0x5563dd of $['userInfo']['task']) {
                        switch (_0x5563dd['taskid']) {
                            case 'followshop':
                            case 'followsku':
                            case 'signin':
                                $['log']('\x0a ->' + _0x5563dd['taskname']);
                                if (_0x7ba2f4['vgkRW'](_0x5563dd['need'], _0x5563dd['curNum'])) {
                                    await task(_0x7ba2f4['NbFCm'], 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['EQVVO'](encodeURIComponent, $['secretPin']) + '&taskId=' + _0x5563dd['taskid']);
                                    await $['wait'](0x7d0);
                                } else {
                                    $['log'](_0x7ba2f4['QWFYD']);
                                }
                                break;
                            case 'add2cart':
                                $['log']('\n ->' + _0x5563dd['taskname']);
                                if (_0x5563dd['need'] !== _0x5563dd['curNum']) {
                                    if (ZOO_ADD2CART === 'true') {
                                        await task(_0x7ba2f4['NbFCm'], 'activityId=' + $['activityId'] + '&pin=' + encodeURIComponent($['secretPin']) + '&taskId=' + _0x5563dd['taskid']);
                                        await $['wait'](0x7d0);
                                    } else {
                                        $['log']('   ->根据用户设置，不执行加购任务。');
                                    }
                                } else {
                                    $['log']('   ->已完成');
                                }
                                default:
                                    break;
                        }
                    }
                    await task('myInfo', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['EQVVO'](encodeURIComponent, $['secretPin']));
                    $['log']('\n当前可参加游戏次数:' + $['userInfo']['leftchance']);
                    if ($['userInfo']['leftchance']) {
                        for (let _0x3d1a4b = 0x0; _0x7ba2f4['lckKu'](_0x3d1a4b, $['userInfo']['leftchance']); _0x3d1a4b++) {
                            var _0x122c07 = _0x7ba2f4['ABGvO']['split']('|'),
                                _0x1a25d3 = 0x0;
                            while (!![]) {
                                switch (_0x122c07[_0x1a25d3++]) {
                                    case '0':
                                        await $['wait'](_0x7ba2f4['VerOq'](_0x7ba2f4['tOmNk'](random, 0xa, 0x32), 0x3e8));
                                        continue;
                                    case '1':
                                        $['log'](' ->开始龙舟赛，比赛时间较长，请耐心等待。');
                                        continue;
                                    case '2':
                                        $['gameId'] = null;
                                        continue;
                                    case '3':
                                        await _0x7ba2f4['LVpvz'](task, 'game/start', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['AQfKe'](encodeURIComponent, $['secretPin']));
                                        continue;
                                    case '4':
                                        if ($['gameId']) {
                                            score = _0x7ba2f4['VerOq'](_0x7ba2f4['JktOD'](random, 0xa, 0x32), 0x14);
                                            gameId = $['gameId'];
                                            reqtime = new Date()['getTime']();
                                            sign = $['md5'](_0x7ba2f4['NRSVU'](_0x7ba2f4['NRSVU'](_0x7ba2f4['NRSVU'](_0x7ba2f4['NRSVU'](gameId + ',', reqtime), ',') + score, ',0'), _0x7ba2f4['hxOwD']));
                                            await task('game/end', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['PVYeU'](encodeURIComponent, $['secretPin']) + '&gameId=' + gameId + '&score=' + score + '&sign=' + sign + '&reqtime=' + reqtime + '&data=0');
                                        }
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                    await _0x7ba2f4['JktOD'](task, 'myInfo', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['PVYeU'](encodeURIComponent, $['secretPin']));
                    times = parseInt(_0x7ba2f4['pyrpn']($['userInfo']['leftCoin'], 0xc8));
                    $['log']('\n当前共获得【' + $['userInfo']['totalCoin'] + '】龙币\n当前可使用【' + $['userInfo']['leftCoin'] + '】龙币\n当前可抽奖【' + times + '】次');
                    if (times) {
                        for (let _0x58005e = 0x0; _0x7ba2f4['lckKu'](_0x58005e, times); _0x58005e++) {
                            $['log']('\x0a ->开始第【' + _0x7ba2f4['NRSVU'](_0x58005e, 0x1) + '】次抽奖');
                            await _0x7ba2f4['JktOD'](task, 'draw', 'activityId=' + $['activityId'] + '&pin=' + _0x7ba2f4['exJYG'](encodeURIComponent, $['secretPin']));
                            await $['wait'](0x1388);
                        }
                    }
                } else {
                    $['log']('没有成功获取到任务信息');
                }
            } else {
                $['log']('没有成功获取到活动信息');
            }
        } else {
            $['log'](_0x7ba2f4['YhWyp']);
        }
    } else {
        $['log'](_0x7ba2f4['MEZCX']);
    }
}

function getShopOpenCardInfo(_0x2e50f0, _0x4843ce) {
    var _0x5b9c3d = {
        'ZwvJD': '*/*'
    };
    let _0x95de89 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + encodeURIComponent({
            'venderId': _0x2e50f0,
            'channel': _0x4843ce
        }) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': _0x5b9c3d['ZwvJD'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': 'zh-cn',
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x2e50f0 + '}&channel=' + _0x4843ce + '&returnUrl=' + encodeURIComponent($['activityUrl']),
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0x1b5283 => {
        $['get'](_0x95de89, (_0x2a74bf, _0x3eadeb, _0x23d5bc) => {
            try {
                if (_0x2a74bf) {
                    console['log'](_0x2a74bf);
                } else {
                    res = JSON['parse'](_0x23d5bc);
                    if (res['success']) {
                        if (res['result']['interestsRuleList']) {
                            $['openCardActivityId'] = res['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'];
                        }
                    }
                }
            } catch (_0x2370ac) {
                console['log'](_0x2370ac);
            } finally {
                _0x1b5283();
            }
        });
    });
}

function bindWithVender(_0x3fb292, _0x2525a3, _0x499741) {
    var _0x429f4b = {
        'BauzL': function(_0x348fe0, _0x6aaf2a) {
            return _0x348fe0(_0x6aaf2a);
        },
        'iJyCM': '*/*',
        'MrkgA': 'keep-alive',
        'TVGbP': 'zh-cn',
        'ESekG': function(_0x14d743, _0x933ff5) {
            return _0x14d743(_0x933ff5);
        },
        'WBMNP': 'gzip, deflate, br'
    };
    let _0x2257b9 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + _0x429f4b['BauzL'](encodeURIComponent, {
            'venderId': _0x3fb292,
            'shopId': _0x2525a3,
            'bindByVerifyCodeFlag': 0x1,
            'registerExtend': {},
            'writeChildFlag': 0x0,
            'activityId': $['activityId'],
            'channel': _0x499741
        }) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': _0x429f4b['iJyCM'],
            'Connection': _0x429f4b['MrkgA'],
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x429f4b['TVGbP'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x3fb292 + '}&channel=' + _0x499741 + '&returnUrl=' + _0x429f4b['ESekG'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': _0x429f4b['WBMNP']
        }
    };
    return new Promise(_0x38ddc6 => {
        var _0x4fd864 = {
            'SNrAl': function(_0x6e7041, _0x173505) {
                return _0x6e7041 === _0x173505;
            }
        };
        $['get'](_0x2257b9, (_0x5dc954, _0x3d5cc9, _0x21940b) => {
            try {
                if (_0x5dc954) {
                    console['log'](_0x5dc954);
                } else {
                    res = JSON['parse'](_0x21940b);
                    if (res['success']) {
                        if (res['result']['giftInfo'] && res['result']['giftInfo']['giftList']) {
                            for (const _0x271a50 of res['result']['giftInfo']['giftList']) {
                                if (_0x4fd864['SNrAl'](_0x271a50['prizeType'], 0x4)) {
                                    $['log'](' =>获得【' + _0x271a50['quantity'] + '】京豆');
                                    $['bean'] += _0x271a50['quantity'];
                                }
                            }
                        }
                    }
                }
            } catch (_0x5ab6da) {
                console['log'](_0x5ab6da);
            } finally {
                _0x38ddc6();
            }
        });
    });
}

function task(_0x54c176, _0x2dee46, _0x448f03 = 0x0) {
    var _0x48955c = {
        'iHutA': function(_0x2ef5cc, _0x5e4f71) {
            return _0x2ef5cc(_0x5e4f71);
        },
        'uOmoq': 'dz/common/getSimpleActInfoVo',
        'XfYjJ': 'myInfo'
    };
    return new Promise(_0x29c666 => {
        var _0x1decbb = {
            'ovjmz': 'draw',
            'dWJID': function(_0x38e586, _0x56164c) {
                return _0x48955c['iHutA'](_0x38e586, _0x56164c);
            },
            'TSCyM': _0x48955c['uOmoq'],
            'QrNWK': 'activityContent',
            'yeqYi': function(_0x57d337, _0x13ca7f) {
                return _0x57d337 === _0x13ca7f;
            },
            'xHaqG': _0x48955c['XfYjJ'],
            'Nulnh': 'getproduct'
        };
        $['post'](taskUrl(_0x54c176, _0x2dee46, _0x448f03), async (_0x552977, _0x5b2b28, _0x1b3252) => {
            try {
                if (_0x552977) {
                    $['log'](_0x552977);
                } else {
                    if (_0x1b3252) {
                        _0x1b3252 = JSON['parse'](_0x1b3252);
                        if (_0x1b3252['result']) {
                            switch (_0x54c176) {
                                case _0x1decbb['ovjmz']:
                                    if (_0x1b3252['data']['prize']) {
                                        $['log']('    ->中奖咯～ 获得【' + _0x1b3252['data']['prize']['rewardName'] + '】');
                                        switch (_0x1b3252['data']['prize']['rewardType']) {
                                            case 0x6:
                                                $['bean'] += _0x1decbb['dWJID'](parseInt, _0x1b3252['data']['prize']['rewardName']['replace']('京豆', ''));
                                                break;
                                            default:
                                                if ($['isNode']()) {
                                                    await notify['sendNotify']($['name'], '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 【' + $data['data']['prize']['rewardName'] + '】。\n活动地址：' + $['activityUrl'], '', '脚本免费使用，请勿在大陆地区的各类平台传播。\x0a动物园：https://t.me/zoo_channel');
                                                } else {
                                                    $['msg']($['name'], '中奖了', '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \x0a       └ 获得 【' + $data['data']['prize']['rewardName'] + '】。\x0a活动地址：' + $['activityUrl']);
                                                }
                                                break;
                                        }
                                    } else {
                                        $['log']('    ->很遗憾未中奖');
                                    }
                                    break;
                                case 'game/end':
                                    $['log']('    ->完成游戏，获得【' + _0x1b3252['data'] + '】龙币');
                                    break;
                                case 'game/start':
                                    $['gameId'] = _0x1b3252['data'];
                                case 'doTask':
                                    if (_0x1b3252['data']['bean']) {
                                        $['log']('    ->完成任务，获得【' + _0x1b3252['data']['bean'] + '】京豆');
                                        $['bean'] += _0x1b3252['data']['bean'];
                                    }
                                    if (_0x1b3252['data']['coin']) {
                                        $['log']('    ->完成任务，获得【' + _0x1b3252['data']['coin'] + '】龙币');
                                    }
                                    if (_0x1b3252['data']['chance']) {
                                        $['log']('    ->完成任务，获得【' + _0x1b3252['data']['chance'] + '】游戏机会');
                                    }
                                    break;
                                case 'helpFriend':
                                case _0x1decbb['TSCyM']:
                                case 'common/accessLogWithAD':
                                    break;
                                case 'wxActionCommon/getUserInfo':
                                    $['pinImg'] = _0x1b3252['data']['yunMidImageUrl'] ? _0x1b3252['data']['yunMidImageUrl'] : 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                                    $['pinNick'] = _0x1b3252['data']['nickname'];
                                    break;
                                case _0x1decbb['QrNWK']:
                                    $['activityContent'] = _0x1b3252['data'];
                                    if (_0x1decbb['yeqYi']($['index'], 0x1)) {
                                        ownCode = _0x1b3252['data']['uid'];
                                    }
                                    break;
                                case _0x1decbb['xHaqG']:
                                    $['userInfo'] = _0x1b3252['data'];
                                    break;
                                case 'getOpenCardInfo':
                                    if (_0x1b3252['data']['openCardReward']) {
                                        if (_0x1b3252['data']['bean']) {
                                            $['log']('    ->完成任务，获得【' + _0x1b3252['data']['bean'] + '】京豆');
                                            $['bean'] += _0x1b3252['data']['bean'];
                                        }
                                        if (_0x1b3252['data']['coin']) {
                                            $['log']('    ->完成任务，获得【' + _0x1b3252['data']['coin'] + '】龙币');
                                        }
                                        if (_0x1b3252['data']['chance']) {
                                            $['log']('    ->完成任务，获得【' + _0x1b3252['data']['chance'] + '】游戏机会');
                                        }
                                    }
                                    $['openCardInfo'] = _0x1b3252['data'];
                                    break;
                                case _0x1decbb['Nulnh']:
                                    $['productList'] = _0x1b3252['data'];
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            switch (_0x54c176) {
                                case 'dz/common/getSimpleActInfoVo':
                                    break;
                                default:
                                    $['log'](JSON['stringify'](_0x1b3252));
                                    break;
                            }
                        }
                    } else {
                        $['log']('京东没有返回数据');
                    }
                }
            } catch (_0x36f5f1) {
                $['log'](_0x36f5f1);
            } finally {
                _0x29c666();
            }
        });
    });
}

function getShopOpenCardInfo(_0x19f513, _0x360a61) {
    var _0x191718 = {
        'rPBJb': function(_0x39325f) {
            return _0x39325f();
        },
        'DdaHE': 'api.m.jd.com',
        'CChfF': '*/*',
        'AlKks': 'keep-alive',
        'Toikn': 'zh-cn',
        'kaqvw': function(_0x4e922d, _0x55cca7) {
            return _0x4e922d(_0x55cca7);
        },
        'clhGj': 'gzip, deflate, br'
    };
    let _0x4bb8d7 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + encodeURIComponent(JSON['stringify'](_0x19f513)) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': _0x191718['DdaHE'],
            'Accept': _0x191718['CChfF'],
            'Connection': _0x191718['AlKks'],
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x191718['Toikn'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x360a61 + '}&channel=7014&returnUrl=' + _0x191718['kaqvw'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': _0x191718['clhGj']
        }
    };
    return new Promise(_0x4e2a68 => {
        var _0x3e7f8a = {
            'YgaaJ': function(_0x450193) {
                return _0x191718['rPBJb'](_0x450193);
            }
        };
        $['get'](_0x4bb8d7, (_0x117fdd, _0x91d893, _0x3e2e1b) => {
            try {
                if (_0x117fdd) {
                    console['log'](_0x117fdd);
                } else {
                    res = JSON['parse'](_0x3e2e1b);
                    if (res['success']) {
                        if (res['result']['interestsRuleList']) {
                            $['openCardActivityId'] = res['result']['interestsRuleList'][0x0]['interestsInfo']['activityId'];
                        }
                    }
                }
            } catch (_0x19d89e) {
                console['log'](_0x19d89e);
            } finally {
                _0x3e7f8a['YgaaJ'](_0x4e2a68);
            }
        });
    });
}

function bindWithVender(_0x37ed24, _0x306da9) {
    var _0x320eff = {
        'bsLHs': function(_0x4ae6ed, _0x9a4e39) {
            return _0x4ae6ed === _0x9a4e39;
        },
        'MPeXX': function(_0x2c3fcb, _0x1a7e11) {
            return _0x2c3fcb(_0x1a7e11);
        },
        'elzgA': 'keep-alive',
        'qwKMK': 'zh-cn',
        'luncE': function(_0x339855, _0x1795ee) {
            return _0x339855(_0x1795ee);
        },
        'IgiNH': 'gzip, deflate, br'
    };
    let _0x15d977 = {
        'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + _0x320eff['MPeXX'](encodeURIComponent, JSON['stringify'](_0x37ed24)) + '&client=H5&clientVersion=9.2.0&uuid=88888',
        'headers': {
            'Host': 'api.m.jd.com',
            'Accept': '*/*',
            'Connection': _0x320eff['elzgA'],
            'Cookie': cookie,
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': _0x320eff['qwKMK'],
            'Referer': 'https://shopmember.m.jd.com/shopcard/?venderId=' + _0x306da9 + '}&channel=7014&returnUrl=' + _0x320eff['luncE'](encodeURIComponent, $['activityUrl']),
            'Accept-Encoding': _0x320eff['IgiNH']
        }
    };
    return new Promise(_0x55d871 => {
        $['get'](_0x15d977, (_0x113a5f, _0x93b4bf, _0x4e7d5d) => {
            try {
                if (_0x113a5f) {
                    console['log'](_0x113a5f);
                } else {
                    res = JSON['parse'](_0x4e7d5d);
                    if (res['success']) {
                        if (res['result']['giftInfo'] && res['result']['giftInfo']['giftList']) {
                            for (const _0x360787 of res['result']['giftInfo']['giftList']) {
                                if (_0x320eff['bsLHs'](_0x360787['prizeType'], 0x4)) {
                                    $['log']('   ->获得【' + _0x360787['quantity'] + '】京豆');
                                    $['bean'] += _0x360787['quantity'];
                                }
                            }
                        }
                    }
                }
            } catch (_0x2169e0) {
                console['log'](_0x2169e0);
            } finally {
                _0x55d871();
            }
        });
    });
}

function taskUrl(_0x4ace50, _0x147c1d, _0x581621) {
    var _0x45bba0 = {
        'HHPSF': 'XMLHttpRequest',
        'bXcSV': 'zh-cn',
        'fMdzR': 'application/x-www-form-urlencoded'
    };
    return {
        'url': _0x581621 ? 'https://lzdz-isv.isvjcloud.com/' + _0x4ace50 : 'https://lzdz-isv.isvjcloud.com/dingzhi/union/longzhou/' + _0x4ace50,
        'headers': {
            'Host': 'lzdz-isv.isvjcloud.com',
            'Accept': 'application/json',
            'X-Requested-With': _0x45bba0['HHPSF'],
            'Accept-Language': _0x45bba0['bXcSV'],
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': _0x45bba0['fMdzR'],
            'Origin': 'https://lzdz-isv.isvjcloud.com',
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': 'keep-alive',
            'Referer': $['activityUrl'],
            'Cookie': cookie
        },
        'body': _0x147c1d
    };
}

function getMyPing() {
    var _0x3cb726 = {
        'llPEB': 'headers',
        'CnurM': 'lzdz-isv.isvjcloud.com',
        'DCjiz': 'zh-cn',
        'pVuha': 'application/x-www-form-urlencoded',
        'mijli': 'keep-alive'
    };
    let _0xdf63d9 = {
        'url': 'https://lzdz-isv.isvjcloud.com/customer/getMyPing',
        'headers': {
            'Host': _0x3cb726['CnurM'],
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': _0x3cb726['DCjiz'],
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': _0x3cb726['pVuha'],
            'Origin': 'https://lzdz-isv.isvjcloud.com/',
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': _0x3cb726['mijli'],
            'Referer': $['activityUrl'],
            'Cookie': cookie
        },
        'body': 'userId=' + $['activityShopId'] + '&token=' + $['token'] + '&fromType=APP'
    };
    return new Promise(_0x2f2790 => {
        var _0xe95471 = {
            'RqSCP': _0x3cb726['llPEB'],
            'xNjTC': 'set-cookie',
            'BdXvj': 'Set-Cookie',
            'XFTtE': '京东返回了空数据'
        };
        $['post'](_0xdf63d9, (_0x467072, _0x1b22bd, _0x5b3230) => {
            try {
                if (_0x467072) {
                    $['log'](_0x467072);
                } else {
                    if (_0x1b22bd[_0xe95471['RqSCP']]['set-cookie']) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x1ed550 of _0x1b22bd[_0xe95471['RqSCP']][_0xe95471['xNjTC']]) {
                                cookie = '' + cookie + _0x1ed550['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x21cf2d of _0x1b22bd[_0xe95471['RqSCP']]['Set-Cookie']['split'](',')) {
                                cookie = '' + cookie + _0x21cf2d['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0x1b22bd['headers'][_0xe95471['BdXvj']]) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x48a227 of _0x1b22bd[_0xe95471['RqSCP']][_0xe95471['xNjTC']]) {
                                cookie = '' + cookie + _0x48a227['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x514520 of _0x1b22bd[_0xe95471['RqSCP']][_0xe95471['BdXvj']]['split'](',')) {
                                cookie = '' + cookie + _0x514520['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0x5b3230) {
                        _0x5b3230 = JSON['parse'](_0x5b3230);
                        if (_0x5b3230['result']) {
                            $['log']('你好：' + _0x5b3230['data']['nickname']);
                            $['pin'] = _0x5b3230['data']['nickname'];
                            $['secretPin'] = _0x5b3230['data']['secretPin'];
                            cookie = cookie + ';AUTH_C_USER=' + _0x5b3230['data']['secretPin'];
                        } else {
                            $['log'](_0x5b3230['errorMessage']);
                        }
                    } else {
                        $['log'](_0xe95471['XFTtE']);
                    }
                }
            } catch (_0x1451ef) {
                $['log'](_0x1451ef);
            } finally {
                _0x2f2790();
            }
        });
    });
}

function getFirstLZCK() {
    var _0x202cee = {
        'ZXRhk': 'set-cookie'
    };
    return new Promise(_0x534256 => {
        var _0x168a96 = {
            'YAhod': 'headers',
            'usHKV': _0x202cee['ZXRhk'],
            'fXyhV': 'Set-Cookie',
            'Kkprr': function(_0x13a528) {
                return _0x13a528();
            }
        };
        $['get']({
            'url': $['activityUrl']
        }, (_0x1979f2, _0xd2ee64, _0xa730c3) => {
            try {
                if (_0x1979f2) {
                    console['log'](_0x1979f2);
                } else {
                    if (_0xd2ee64[_0x168a96['YAhod']][_0x168a96['usHKV']]) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x57a0af of _0xd2ee64['headers']['set-cookie']) {
                                cookie = '' + cookie + _0x57a0af['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x38b0f3 of _0xd2ee64['headers'][_0x168a96['fXyhV']]['split'](',')) {
                                cookie = '' + cookie + _0x38b0f3['split'](';')[0x0] + ';';
                            }
                        }
                    }
                    if (_0xd2ee64['headers']['Set-Cookie']) {
                        cookie = '' + originCookie;
                        if ($['isNode']()) {
                            for (let _0x6bfc68 of _0xd2ee64['headers'][_0x168a96['usHKV']]) {
                                cookie = '' + cookie + _0x6bfc68['split'](';')[0x0] + ';';
                            }
                        } else {
                            for (let _0x4438b0 of _0xd2ee64['headers']['Set-Cookie']['split'](',')) {
                                cookie = '' + cookie + _0x4438b0['split'](';')[0x0] + ';';
                            }
                        }
                    }
                }
            } catch (_0x1c8d41) {
                console['log'](_0x1c8d41);
            } finally {
                _0x168a96['Kkprr'](_0x534256);
            }
        });
    });
}

function getToken() {
    var _0x595d41 = {
        'nNbsV': function(_0x309836, _0x3705f7) {
            return _0x309836 === _0x3705f7;
        },
        'JWKZv': '京东返回了空数据',
        'PdIfE': 'api.m.jd.com',
        'XLjoO': 'application/x-www-form-urlencoded',
        'giFmU': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)',
        'nIJvh': 'zh-Hans-CN;q=1'
    };
    let _0x4a6004 = {
        'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'headers': {
            'Host': _0x595d41['PdIfE'],
            'Content-Type': _0x595d41['XLjoO'],
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': _0x595d41['giFmU'],
            'Accept-Language': _0x595d41['nIJvh'],
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': 'body=%7B%22url%22%3A%20%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=72124265217d48b7955781024d65bbc4&client=apple&clientVersion=9.4.0&st=1621796702000&sv=120&sign=14f7faa31356c74e9f4289972db4b988'
    };
    return new Promise(_0x1b43b5 => {
        var _0x12d4c2 = {
            'xjzqH': function(_0x227b43, _0x346dab) {
                return _0x595d41['nNbsV'](_0x227b43, _0x346dab);
            },
            'PuToc': _0x595d41['JWKZv']
        };
        $['post'](_0x4a6004, (_0x2a25f8, _0x2780f8, _0x187b5e) => {
            try {
                if (_0x2a25f8) {
                    $['log'](_0x2a25f8);
                } else {
                    if (_0x187b5e) {
                        _0x187b5e = JSON['parse'](_0x187b5e);
                        if (_0x12d4c2['xjzqH'](_0x187b5e['code'], '0')) {
                            $['token'] = _0x187b5e['token'];
                        }
                    } else {
                        $['log'](_0x12d4c2['PuToc']);
                    }
                }
            } catch (_0x80e783) {
                $['log'](_0x80e783);
            } finally {
                _0x1b43b5();
            }
        });
    });
}

function random(_0xc8e179, _0x3de351) {
    var _0x17446f = {
        'Ljzdx': function(_0x121208, _0x3b05f3) {
            return _0x121208 + _0x3b05f3;
        },
        'ZoKuF': function(_0x18f58d, _0x3fbe91) {
            return _0x18f58d - _0x3fbe91;
        }
    };
    return _0x17446f['Ljzdx'](Math['floor'](Math['random']() * _0x17446f['ZoKuF'](_0x3de351, _0xc8e179)), _0xc8e179);
}

function getUUID(_0x3c6d60 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', _0x493774 = 0x0) {
    var _0xf70424 = {
        'OPjBr': function(_0x248f47, _0x48c04d) {
            return _0x248f47 | _0x48c04d;
        },
        'MClOg': function(_0x282404, _0x20fcc1) {
            return _0x282404 == _0x20fcc1;
        }
    };
    return _0x3c6d60['replace'](/[xy]/g, function(_0x59e923) {
        var _0x5ba292 = _0xf70424['OPjBr'](Math['random']() * 0x10, 0x0),
            _0x10b516 = _0xf70424['MClOg'](_0x59e923, 'x') ? _0x5ba292 : _0xf70424['OPjBr'](_0x5ba292 & 0x3, 0x8);
        if (_0x493774) {
            uuid = _0x10b516['toString'](0x24)['toUpperCase']();
        } else {
            uuid = _0x10b516['toString'](0x24);
        }
        return uuid;
    });
}

function checkCookie() {
    var _0x511ac4 = {
        'NPEbl': function(_0x3b41cc, _0x447b71) {
            return _0x3b41cc === _0x447b71;
        },
        'KdIoS': 'me-api.jd.com',
        'msatm': '*/*',
        'ULemZ': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
        'UzCKx': 'zh-cn',
        'XBeix': 'gzip, deflate, br'
    };
    const _0x43e5e9 = {
        'url': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'headers': {
            'Host': _0x511ac4['KdIoS'],
            'Accept': _0x511ac4['msatm'],
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': _0x511ac4['ULemZ'],
            'Accept-Language': _0x511ac4['UzCKx'],
            'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
            'Accept-Encoding': _0x511ac4['XBeix']
        }
    };
    return new Promise(_0x1ea1c5 => {
        var _0xdd6333 = {
            'SOyjm': '1001',
            'QAord': function(_0x139dc7, _0x18da90) {
                return _0x511ac4['NPEbl'](_0x139dc7, _0x18da90);
            },
            'vMjoS': function(_0x8939e) {
                return _0x8939e();
            }
        };
        $['get'](_0x43e5e9, (_0x2faade, _0x521b45, _0x51224d) => {
            try {
                if (_0x2faade) {
                    $['logErr'](_0x2faade);
                } else {
                    if (_0x51224d) {
                        _0x51224d = JSON['parse'](_0x51224d);
                        if (_0x51224d['retcode'] === _0xdd6333['SOyjm']) {
                            $['isLogin'] = ![];
                            return;
                        }
                        if (_0xdd6333['QAord'](_0x51224d['retcode'], '0') && _0x51224d['data']['hasOwnProperty']('userInfo')) {
                            $['nickName'] = _0x51224d['data']['userInfo']['baseInfo']['nickname'];
                        }
                    } else {
                        $['log']('京东返回了空数据');
                    }
                }
            } catch (_0x13ef4b) {
                $['logErr'](_0x13ef4b);
            } finally {
                _0xdd6333['vMjoS'](_0x1ea1c5);
            }
        });
    });
}
// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
