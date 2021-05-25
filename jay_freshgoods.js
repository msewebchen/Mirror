const $ = new Env("抽盲盒赢千万京豆");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', message = '';
/*
 *Progcessed By JSDec in 0.18s
 *JSDec - JSDec.js.org
 */
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x16b42f => {
        cookiesArr['push'](jdCookieNode[_0x16b42f]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    let cookiesData = $['getdata']('CookiesJD') || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x39d1a0 => _0x39d1a0['cookie']);
    cookiesArr['reverse']();
    cookiesArr['push'](...[$['getdata']('CookieJD2'), $['getdata']('CookieJD')]);
    cookiesArr['reverse']();
    cookiesArr = cookiesArr['filter'](_0x57e01b => !!_0x57e01b);
}!(async () => {
    var _0x753352 = {
        'WTCDs': function(_0x32cba2, _0x510e38) {
            return _0x32cba2 * _0x510e38;
        },
        'BOGEQ': 'https://bean.m.jd.com/bean/signIndex.action',
        'XUByw': function(_0x28c2d5, _0x703992) {
            return _0x28c2d5 < _0x703992;
        },
        'gpBqE': function(_0x115aff, _0x59719b) {
            return _0x115aff(_0x59719b);
        },
        'rETqk': function(_0x51d395, _0x292829) {
            return _0x51d395 + _0x292829;
        },
        'gqncR': function(_0x1cf9f7, _0x547dfd) {
            return _0x1cf9f7 !== _0x547dfd;
        },
        'MPBXh': 'hDOzB',
        'smvja': '6COHxyUoXeJ3EQZ0aeXdXg==',
        'IyaDi': function(_0xd31d60, _0x245dc6, _0x521ba2) {
            return _0xd31d60(_0x245dc6, _0x521ba2);
        },
        'SnkUv': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'rBTxR': function(_0x1c96c7, _0x5b9599) {
            return _0x1c96c7(_0x5b9599);
        },
        'xDKjM': function(_0x3295e6) {
            return _0x3295e6();
        },
        'xnlTl': function(_0x22f9ea, _0x368ac) {
            return _0x22f9ea !== _0x368ac;
        },
        'DsVOG': function(_0x3653f5, _0x4d6903) {
            return _0x3653f5 === _0x4d6903;
        },
        'XYxeO': 'uRToC',
        'KoIUh': 'jcIki',
        'NODMq': '有点儿收获'
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {
            'open-url': _0x753352['BOGEQ']
        });
        return;
    }
    for (let _0x53d09a = 0x0; _0x753352['XUByw'](_0x53d09a, cookiesArr['length']); _0x53d09a++) {
        if (cookiesArr[_0x53d09a]) {
            cookie = cookiesArr[_0x53d09a];
            originCookie = cookiesArr[_0x53d09a];
            newCookie = '';
            $['UserName'] = _0x753352['gpBqE'](decodeURIComponent, cookie['match'](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x753352['rETqk'](_0x53d09a, 0x1);
            $['isLogin'] = !![];
            $['nickName'] = '';
            await checkCookie();
            console['log']('\n******开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '*********\x0a');
            if (!$['isLogin']) {
                if (_0x753352['gqncR'](_0x753352['MPBXh'], _0x753352['MPBXh'])) {
                    var _0x1566bd = _0x753352['WTCDs'](Math['random'](), 0x10) | 0x0,
                        _0x160437 = c == 'x' ? _0x1566bd : _0x1566bd & 0x3 | 0x8;
                    if (UpperCase) {
                        uuid = _0x160437['toString'](0x24)['toUpperCase']();
                    } else {
                        uuid = _0x160437['toString'](0x24);
                    }
                    return uuid;
                } else {
                    $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {
                        'open-url': _0x753352['BOGEQ']
                    });
                    if ($['isNode']()) {
                        await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                    }
                    continue;
                }
            }
            authorList = [_0x753352['smvja']];
            $['authorPin'] = authorList[_0x753352['IyaDi'](random, 0x0, authorList['length'])];
            $['bean'] = 0x0;
            $['ADID'] = _0x753352['IyaDi'](getUUID, _0x753352['SnkUv'], 0x1);
            $['UUID'] = _0x753352['rBTxR'](getUUID, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            await _0x753352['xDKjM'](freshgoods);
            if ($['bean'] > 0x0) {
                message += '\n【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + ' \n       └ 获得 ' + $['bean'] + ' 京豆。';
            }
        }
    }
    if (_0x753352['xnlTl'](message, '')) {
        if ($['isNode']()) {
            if ('RylxZ' !== 'kSHKP') {
                await notify['sendNotify']($['name'], message, '', '\x0a');
            } else {
                $['log']('   获得' + data['data']['rewardBeans'] + '京豆');
                $['bean'] += data['data']['rewardBeans'];
            }
        } else {
            if (_0x753352['DsVOG'](_0x753352['XYxeO'], _0x753352['KoIUh'])) {
                $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + e + '!', '');
            } else {
                $['msg']($['name'], _0x753352['NODMq'], message);
            }
        }
    }
})()['catch'](_0x1ed0cf => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x1ed0cf + '!', '');
})['finally'](() => {
    $['done']();
});
async function freshgoods() {
    var _0x5b1154 = {
        'hRgiE': '有点儿收获',
        'aAKfy': function(_0x506235, _0x4e1574) {
            return _0x506235(_0x4e1574);
        },
        'dPqqR': 'getActivityPage',
        'XvBEa': function(_0x3de050, _0x384989) {
            return _0x3de050 !== _0x384989;
        },
        'hjCVi': 'KuuMJ',
        'meYnF': 'getMyTask',
        'osQUi': function(_0x210725, _0x533456) {
            return _0x210725(_0x533456);
        },
        'ReqaX': function(_0x33609b, _0x29b5a0) {
            return _0x33609b(_0x29b5a0);
        },
        'IHlEB': function(_0x21daa3, _0x1f188a) {
            return _0x21daa3(_0x1f188a);
        }
    };
    $['finish'] = ![];
    await _0x5b1154['aAKfy'](doGetTask, _0x5b1154['dPqqR']);
    do {
        if (_0x5b1154['XvBEa']('vCsHJ', _0x5b1154['hjCVi'])) {
            await doGetTask(_0x5b1154['meYnF']);
        } else {
            $['msg']($['name'], _0x5b1154['hRgiE'], message);
        }
    } while (!$['finish']);
    await _0x5b1154['osQUi'](doGetTask, _0x5b1154['dPqqR']);
    if ($['actInfo']) {
        times = _0x5b1154['ReqaX'](parseInt, $['actInfo']['remainPoints'] / $['actInfo']['lotteryThreshold']);
        if (times) {
            $['log']('当前账户可抽奖次数：' + times);
            for (let _0x224016 = 0x0; _0x224016 < times; _0x224016++) {
                $['log']('去抽奖');
                await _0x5b1154['IHlEB'](doGetTask, 'draw');
                await $['wait'](0x1388);
            }
        }
    }
}

function doPostTask(_0x4de795) {
    var _0x3744ca = {
        'CUdUj': function(_0x3f941f, _0x21958a) {
            return _0x3f941f !== _0x21958a;
        },
        'JvLEG': 'lMTri',
        'YYbdC': function(_0x4082ce, _0x3361f0) {
            return _0x4082ce === _0x3361f0;
        },
        'WDrZt': 'goGBT',
        'RfZkT': function(_0x41ef75, _0x800fe4) {
            return _0x41ef75 === _0x800fe4;
        },
        'aBohl': 'eMQaA',
        'VamSM': '   完成任务',
        'dkwZi': function(_0x3da959, _0x6cdf4c) {
            return _0x3da959 === _0x6cdf4c;
        },
        'oWBZH': 'vdPwn',
        'gQxxn': function(_0x4dedc8, _0x504579) {
            return _0x4dedc8 === _0x504579;
        },
        'LsEeu': 'iyrfw',
        'NxJZW': '京东没有返回数据',
        'fBfIM': function(_0x3f5806) {
            return _0x3f5806();
        },
        'LcukT': 'CookieJD2',
        'mjbzo': 'CookieJD',
        'cTAwd': 'jdjoy.jd.com',
        'RKhii': 'application/x-www-form-urlencoded',
        'xjZqv': 'keep-alive',
        'zJfsv': 'https://h5.m.jd.com/babelDiy/Zeus/42CC2AdvzUnXheP1CmTXrm7vHYSp/index.html?code=ddf17a4eb05b4773ad392f76c2b28a90',
        'cywqa': 'zh-cn'
    };
    let _0x1a3a75 = {
        'url': 'https://jdjoy.jd.com/module/freshgoods/doTask',
        'headers': {
            'Host': _0x3744ca['cTAwd'],
            'Content-Type': _0x3744ca['RKhii'],
            'Origin': 'https://h5.m.jd.com',
            'Accept-Encoding': 'gzip, deflate, br',
            'Cookie': cookie,
            'Connection': _0x3744ca['xjZqv'],
            'Accept': '*/*',
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Referer': _0x3744ca['zJfsv'],
            'Accept-Language': _0x3744ca['cywqa']
        },
        'body': _0x4de795
    };
    return new Promise(_0x47c1d9 => {
        var _0x309232 = {
            'JlSqx': _0x3744ca['LcukT'],
            'kgogz': _0x3744ca['mjbzo'],
            'HaHJI': 'false'
        };
        $['post'](_0x1a3a75, (_0x5aa909, _0x5e5a5a, _0x2bce3c) => {
            try {
                if (_0x5aa909) {
                    if (_0x3744ca['CUdUj'](_0x3744ca['JvLEG'], 'lMTri')) {
                        $['nickName'] = _0x2bce3c['data']['userInfo']['baseInfo']['nickname'];
                    } else {
                        $['log'](_0x5aa909);
                    }
                } else {
                    if (_0x2bce3c) {
                        if (_0x3744ca['YYbdC'](_0x3744ca['WDrZt'], _0x3744ca['WDrZt'])) {
                            _0x2bce3c = JSON['parse'](_0x2bce3c);
                            if (_0x2bce3c['success']) {
                                if (_0x3744ca['RfZkT']('eMQaA', _0x3744ca['aBohl'])) {
                                    $['log'](_0x3744ca['VamSM']);
                                    if (_0x2bce3c['data']['rewardBeans']) {
                                        if (_0x3744ca['dkwZi'](_0x3744ca['oWBZH'], _0x3744ca['oWBZH'])) {
                                            $['log']('   获得' + _0x2bce3c['data']['rewardBeans'] + '京豆');
                                            $['bean'] += _0x2bce3c['data']['rewardBeans'];
                                        } else {
                                            $['log']('京东没有返回数据');
                                        }
                                    }
                                    if (_0x2bce3c['data']['rewardPoints']) {
                                        $['log']('   获得' + _0x2bce3c['data']['rewardPoints'] + '积分');
                                    }
                                } else {
                                    let _0x526ec3 = $['getdata']('CookiesJD') || '[]';
                                    _0x526ec3 = JSON['parse'](_0x526ec3);
                                    cookiesArr = _0x526ec3['map'](_0x2cccc0 => _0x2cccc0['cookie']);
                                    cookiesArr['reverse']();
                                    cookiesArr['push'](...[$['getdata'](_0x309232['JlSqx']), $['getdata'](_0x309232['kgogz'])]);
                                    cookiesArr['reverse']();
                                    cookiesArr = cookiesArr['filter'](_0x6a6fd1 => !!_0x6a6fd1);
                                }
                            } else {
                                $['log'](_0x2bce3c['errorMessage']);
                            }
                        } else {
                            $['log']('京东返回了空数据');
                        }
                    } else {
                        if (_0x3744ca['gQxxn'](_0x3744ca['LsEeu'], _0x3744ca['LsEeu'])) {
                            $['log'](_0x3744ca['NxJZW']);
                        } else {
                            Object['keys'](jdCookieNode)['forEach'](_0x18478e => {
                                cookiesArr['push'](jdCookieNode[_0x18478e]);
                            });
                            if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === _0x309232['HaHJI']) console['log'] = () => {};
                        }
                    }
                }
            } catch (_0x2d56a0) {
                $['log'](_0x2d56a0);
            } finally {
                _0x3744ca['fBfIM'](_0x47c1d9);
            }
        });
    });
}

function doGetTask(_0x211460) {
    var _0x4e53e1 = {
        'BByOf': function(_0x2dd0ae, _0x22ef30) {
            return _0x2dd0ae !== _0x22ef30;
        },
        'hFbiF': 'kBGqX',
        'DtFsE': 'getActivityPage',
        'cNGfi': 'getMyTask',
        'ArjQf': 'zdYov',
        'pVhQM': 'JVcXr',
        'RLPdI': function(_0x1ed8e2, _0x1b4745) {
            return _0x1ed8e2 * _0x1b4745;
        },
        'IYXaA': function(_0x19b2fb, _0x2aef7c) {
            return _0x19b2fb(_0x2aef7c);
        },
        'fcUiU': function(_0x46bb79, _0x8be3f0) {
            return _0x46bb79 === _0x8be3f0;
        },
        'kYmwq': 'hNqNb',
        'PWZqd': '已经完成任务',
        'NUbeb': 'draw',
        'KWlaL': '京东没有返回数据',
        'YKkwG': 'HuxED',
        'mamoc': 'CWBuc',
        'slUQb': 'cADvR',
        'vZxuU': function(_0x36247c, _0x2b0fe1) {
            return _0x36247c + _0x2b0fe1;
        },
        'NxNZy': function(_0x41f070, _0x4c1932) {
            return _0x41f070 * _0x4c1932;
        },
        'UDtae': function(_0x13a438, _0x5f5545) {
            return _0x13a438 - _0x5f5545;
        },
        'FqglF': 'orxVU',
        'rnPXm': 'qabQD',
        'mxtzb': 'jdjoy.jd.com',
        'hlxYD': 'keep-alive',
        'vBcjJ': '*/*',
        'KsWqu': 'gzip, deflate, br '
    };
    let _0x4cae13 = {
        'url': 'https://jdjoy.jd.com/module/freshgoods/' + _0x211460 + '?code=ddf17a4eb05b4773ad392f76c2b28a90',
        'headers': {
            'Host': _0x4e53e1['mxtzb'],
            'Origin': 'https://h5.m.jd.com',
            'Cookie': cookie,
            'Connection': _0x4e53e1['hlxYD'],
            'Accept': _0x4e53e1['vBcjJ'],
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $['UUID'] + ';network/wifi;ADID/' + $['ADID'] + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Accept-Language': 'zh-cn',
            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/42CC2AdvzUnXheP1CmTXrm7vHYSp/index.html?code=ddf17a4eb05b4773ad392f76c2b28a90',
            'Accept-Encoding': _0x4e53e1['KsWqu']
        }
    };
    return new Promise(_0x3eb18a => {
        var _0x25a060 = {
            'vGTAb': _0x4e53e1['PWZqd'],
            'PjRji': function(_0x6689db, _0xf9f094) {
                return _0x4e53e1['vZxuU'](_0x6689db, _0xf9f094);
            },
            'TqomP': function(_0x59af4d, _0x3a0fb0) {
                return _0x4e53e1['NxNZy'](_0x59af4d, _0x3a0fb0);
            },
            'RcNmz': function(_0x2da45a, _0x588ad5) {
                return _0x4e53e1['UDtae'](_0x2da45a, _0x588ad5);
            }
        };
        if (_0x4e53e1['fcUiU'](_0x4e53e1['FqglF'], _0x4e53e1['rnPXm'])) {
            $['log'](_0x25a060['vGTAb']);
            $['finish'] = !![];
        } else {
            $['get'](_0x4cae13, async (_0x51c3ba, _0x2f788c, _0x3bda75) => {
                if (_0x4e53e1['BByOf'](_0x4e53e1['hFbiF'], 'wXdqz')) {
                    try {
                        if (_0x51c3ba) {
                            console['log'](_0x51c3ba);
                        } else {
                            if (_0x3bda75) {
                                _0x3bda75 = JSON['parse'](_0x3bda75);
                                if (_0x3bda75['success']) {
                                    switch (_0x211460) {
                                        case _0x4e53e1['DtFsE']:
                                            $['log']('当前账户积分' + _0x3bda75['data']['remainPoints']);
                                            $['log']('--------------------------');
                                            $['actInfo'] = _0x3bda75['data'];
                                            break;
                                        case _0x4e53e1['cNGfi']:
                                            if (_0x3bda75['data']) {
                                                if (_0x3bda75['data']['myTasks']) {
                                                    if (_0x4e53e1['BByOf'](_0x4e53e1['ArjQf'], _0x4e53e1['pVhQM'])) {
                                                        done = 0x0;
                                                        for (const _0x5d6ec8 of _0x3bda75['data']['myTasks']) {
                                                            switch (_0x5d6ec8['taskId']) {
                                                                case 0x17:
                                                                case 0x2:
                                                                    break;
                                                                default:
                                                                    if (!_0x5d6ec8['hasFinish']) {
                                                                        if (_0x5d6ec8['taskItem']) {
                                                                            $['log'](_0x5d6ec8['taskItem']['itemName']);
                                                                            await $['wait'](_0x4e53e1['RLPdI'](_0x5d6ec8['viewTime'], 0x3e8));
                                                                            await _0x4e53e1['IYXaA'](doPostTask, 'code=ddf17a4eb05b4773ad392f76c2b28a90&taskType=' + _0x5d6ec8['taskType'] + '&taskId=' + _0x5d6ec8['taskId'] + '&itemId=' + (_0x5d6ec8['taskItem']['itemId'] ? _0x5d6ec8['taskItem']['itemId'] : ''));
                                                                        }
                                                                    } else {
                                                                        if (_0x4e53e1['fcUiU'](_0x4e53e1['kYmwq'], _0x4e53e1['kYmwq'])) {
                                                                            done += 0x1;
                                                                            if (done === 0x3) {
                                                                                $['log'](_0x4e53e1['PWZqd']);
                                                                                $['finish'] = !![];
                                                                            }
                                                                        } else {
                                                                            uuid = v['toString'](0x24);
                                                                        }
                                                                    }
                                                                    break;
                                                            }
                                                        }
                                                    } else {
                                                        $['log']('京东没有返回数据');
                                                    }
                                                }
                                            }
                                            break;
                                        case _0x4e53e1['NUbeb']:
                                            switch (_0x3bda75['data']['rewadType']) {
                                                case 0x1:
                                                    $['bean'] += _0x3bda75['data']['rewardNum'];
                                                    break;
                                                default:
                                                    break;
                                            }
                                            $['log'](' -抽到了' + _0x3bda75['data']['rewardName']);
                                            break;
                                        default:
                                            console['log'](_0x3bda75);
                                            break;
                                    }
                                } else {
                                    $['log'](_0x3bda75['errorMessage']);
                                }
                            } else {
                                $['log'](_0x4e53e1['KWlaL']);
                            }
                        }
                    } catch (_0x685c0f) {
                        if ('HuxED' !== _0x4e53e1['YKkwG']) {
                            $['logErr'](_0x51c3ba);
                        } else {
                            console['log'](_0x685c0f);
                        }
                    } finally {
                        if (_0x4e53e1['mamoc'] === _0x4e53e1['slUQb']) {
                            uuid = v['toString'](0x24)['toUpperCase']();
                        } else {
                            _0x3eb18a();
                        }
                    }
                } else {
                    return _0x25a060['PjRji'](Math['floor'](_0x25a060['TqomP'](Math['random'](), _0x25a060['RcNmz'](max, min))), min);
                }
            });
        }
    });
}

function random(_0x5d7957, _0xcd57b7) {
    var _0x1fe45c = {
        'SiZUx': function(_0x5a4f0f, _0x2f8ab7) {
            return _0x5a4f0f + _0x2f8ab7;
        },
        'BJjJv': function(_0x2f880a, _0x38075f) {
            return _0x2f880a - _0x38075f;
        }
    };
    return _0x1fe45c['SiZUx'](Math['floor'](Math['random']() * _0x1fe45c['BJjJv'](_0xcd57b7, _0x5d7957)), _0x5d7957);
}

function getUUID(_0x3891b4 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', _0x3cd7b0 = 0x0) {
    var _0x2b28a8 = {
        'FZShs': 'hyUjc',
        'GZOLV': function(_0x10d414, _0x5b919a) {
            return _0x10d414 | _0x5b919a;
        },
        'shwpq': function(_0x241ec9, _0x3c8ba) {
            return _0x241ec9 * _0x3c8ba;
        },
        'sRFSp': function(_0x277946, _0x26f122) {
            return _0x277946 & _0x26f122;
        }
    };
    return _0x3891b4['replace'](/[xy]/g, function(_0x1a22a6) {
        if (_0x2b28a8['FZShs'] !== 'QqwJT') {
            var _0x19bf3c = _0x2b28a8['GZOLV'](_0x2b28a8['shwpq'](Math['random'](), 0x10), 0x0),
                _0x49a909 = _0x1a22a6 == 'x' ? _0x19bf3c : _0x2b28a8['sRFSp'](_0x19bf3c, 0x3) | 0x8;
            if (_0x3cd7b0) {
                uuid = _0x49a909['toString'](0x24)['toUpperCase']();
            } else {
                uuid = _0x49a909['toString'](0x24);
            }
            return uuid;
        } else {
            resolve();
        }
    });
}

function checkCookie() {
    var _0x37e40d = {
        'GWmrK': 'NJLYz',
        'Txslu': 'vHMCD',
        'lAEbD': 'BRxKr',
        'IrGcg': 'MNYeo',
        'ColLD': 'HOgGv',
        'AjzRX': '京东返回了空数据',
        'TWBLz': function(_0x391627, _0x11faee) {
            return _0x391627 === _0x11faee;
        },
        'LBfBX': 'auazH',
        'gWIOp': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'nyyTA': 'me-api.jd.com',
        'saaCI': 'keep-alive',
        'SNeED': 'zh-cn',
        'MPFKk': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&'
    };
    const _0x1ea1ad = {
        'url': _0x37e40d['gWIOp'],
        'headers': {
            'Host': _0x37e40d['nyyTA'],
            'Accept': '*/*',
            'Connection': _0x37e40d['saaCI'],
            'Cookie': cookie,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
            'Accept-Language': _0x37e40d['SNeED'],
            'Referer': _0x37e40d['MPFKk'],
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(_0x38e827 => {
        var _0x1a601f = {
            'DsJGK': '   完成任务',
            'xASSu': function(_0x5f1947, _0x5c166c) {
                return _0x5f1947 === _0x5c166c;
            },
            'nPGLp': '1001',
            'xleUY': function(_0x56c3a4, _0x541d04) {
                return _0x56c3a4 === _0x541d04;
            },
            'PpQGR': 'yNJzs',
            'cTPuh': _0x37e40d['GWmrK'],
            'QkZam': _0x37e40d['Txslu'],
            'JsROd': function(_0x7437d6, _0x5391a1) {
                return _0x7437d6 === _0x5391a1;
            },
            'TYQcf': _0x37e40d['lAEbD'],
            'IUaMp': _0x37e40d['IrGcg'],
            'eDadi': _0x37e40d['ColLD'],
            'jNyhH': _0x37e40d['AjzRX']
        };
        if (_0x37e40d['TWBLz'](_0x37e40d['LBfBX'], 'sZxiQ')) {
            cookiesArr['push'](jdCookieNode[item]);
        } else {
            $['get'](_0x1ea1ad, (_0x10dfb0, _0x1d5454, _0x2ee6ce) => {
                var _0x314257 = {
                    'waYKo': function(_0x44166c, _0x4e47ae) {
                        return _0x1a601f['xASSu'](_0x44166c, _0x4e47ae);
                    },
                    'jgJNt': _0x1a601f['nPGLp']
                };
                if (_0x1a601f['xleUY'](_0x1a601f['PpQGR'], 'HXwsC')) {
                    $['log'](_0x1a601f['DsJGK']);
                    if (_0x2ee6ce['data']['rewardBeans']) {
                        $['log']('   获得' + _0x2ee6ce['data']['rewardBeans'] + '京豆');
                        $['bean'] += _0x2ee6ce['data']['rewardBeans'];
                    }
                    if (_0x2ee6ce['data']['rewardPoints']) {
                        $['log']('   获得' + _0x2ee6ce['data']['rewardPoints'] + '积分');
                    }
                } else {
                    try {
                        if (_0x10dfb0) {
                            $['logErr'](_0x10dfb0);
                        } else {
                            if (_0x1a601f['cTPuh'] !== _0x1a601f['QkZam']) {
                                if (_0x2ee6ce) {
                                    _0x2ee6ce = JSON['parse'](_0x2ee6ce);
                                    if (_0x1a601f['JsROd'](_0x2ee6ce['retcode'], _0x1a601f['nPGLp'])) {
                                        if (_0x1a601f['TYQcf'] !== _0x1a601f['TYQcf']) {
                                            _0x2ee6ce = JSON['parse'](_0x2ee6ce);
                                            if (_0x314257['waYKo'](_0x2ee6ce['retcode'], _0x314257['jgJNt'])) {
                                                $['isLogin'] = ![];
                                                return;
                                            }
                                            if (_0x314257['waYKo'](_0x2ee6ce['retcode'], '0') && _0x2ee6ce['data']['hasOwnProperty']('userInfo')) {
                                                $['nickName'] = _0x2ee6ce['data']['userInfo']['baseInfo']['nickname'];
                                            }
                                        } else {
                                            $['isLogin'] = ![];
                                            return;
                                        }
                                    }
                                    if (_0x2ee6ce['retcode'] === '0' && _0x2ee6ce['data']['hasOwnProperty']('userInfo')) {
                                        $['nickName'] = _0x2ee6ce['data']['userInfo']['baseInfo']['nickname'];
                                    }
                                } else {
                                    if (_0x1a601f['IUaMp'] !== _0x1a601f['eDadi']) {
                                        $['log'](_0x1a601f['jNyhH']);
                                    } else {
                                        $['log'](_0x2ee6ce['errorMessage']);
                                    }
                                }
                            } else {
                                $['logErr'](e);
                            }
                        }
                    } catch (_0x2d7f04) {
                        $['logErr'](_0x2d7f04);
                    } finally {
                        _0x38e827();
                    }
                }
            });
        }
    });
};
_0xodI = 'jsjiami.com.v6'

// prettier-ignore
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
