CryptoJS = require("crypto-js");
e = "swhrdnhjug"
K = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/\s+/g, "")
}
F = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
            , a = n.length || 24;
        if (e.length < a)
            for (var r = e.length; r < a; r++)
                e += t;
        else
            e = e.substring(0, a);
        return e
    }
}
T = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , a = t.enc
        , r = void 0 === a ? "Utf8" : a
        , c = t.mode
        , i = void 0 === c ? "ECB" : c
        , o = t.padding
        , u = void 0 === o ? "Pkcs7" : o
        , d = CryptoJS.enc[r].parse(n)
        , l = {
        mode: CryptoJS.mode[i],
        padding: CryptoJS.pad[u]
    }
        , s = CryptoJS.TripleDES.encrypt(e, d, l);
    return s.toString()
}
// var a =undefined
// var r ='Utf8'
// var d =r.init
o = {
    userName: Object(K)('87464543@163.com'),
    password: encodeURI(Object(T)(e, Object(F)(Object(K)('87464543@163.com'))))
}

console.log(o)
//https://m.ctyun.cn/wap/main/auth/login?redirect=%2Fmy