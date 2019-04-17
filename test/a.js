! function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(o, r, function (t) {
        return e[t]
      }.bind(null, r));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 1)
}([function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  t.getVersion = function () {
    return "2.0.3"
  }, t.stringfy = function (e) {
    if (e && "object" === (void 0 === e ? "undefined" : o(e))) {
      var t = encodeURIComponent;
      return Object.keys(e).map(function (n) {
        return n + "=" + t(e[n])
      }).join("&")
    }
  }, t.extend = function (e) {
    var t = arguments;
    if (t.length >= 2)
      for (var n = 1, o = t.length; n < o; n++)
        for (var r in t[n]) e[r] = t[n][r];
    return e
  }, t.filterParam = function (e) {
    var t = arguments;
    if (t.length >= 2)
      for (var n = 1, o = t.length; n < o; n++) delete e[t[n]]
  }
}, function (e, t, n) {
  "use strict";
  var o, r = n(2);
  ((o = r) && o.__esModule ? o : {
    default: o
  }).default.init({
    url: "https://hunter-report.dui88.com/report"
  })
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(0),
    r = d(n(3)),
    u = d(n(4)),
    i = d(n(5));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.default = {
    init: function (e) {
      if (u.default) {
        var t = (0, o.extend)(r.default, u.default, i.default);
        n = {}, t = (0, o.extend)(t, n), (new Image).src = e.url + "?" + (0, o.stringfy)(t)
      }
      var n
    }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(0),
    r = {
      client: "",
      pageId: "",
      appId: window.CFG ? window.CFG.appId : "",
      version: (0, o.getVersion)(),
      url: location.href
    };
  r = (0, o.extend)(r, window.HUNTER_CONFIG), t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function () {
    var e = {
        cache: ["domainLookupStart", "fetchStart"],
        dns: ["domainLookupEnd", "domainLookupStart"],
        tcp: ["connectEnd", "connectStart"],
        req: ["responseStart", "requestStart"],
        res: ["responseEnd", "responseStart"],
        dom: ["domContentLoadedEventStart", "domLoading"],
        readycb: ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
        fasrt: ["domComplete", "domContentLoadedEventEnd"],
        loadcb: ["loadEventEnd", "loadEventStart"],
        ready: ["domContentLoadedEventEnd", "fetchStart"],
        load: ["loadEventEnd", "fetchStart"]
      },
      t = {},
      n = window.performance || window.msPerformance || window.webkitPerformance;
    if (!n || !n.timing) return null;
    var o = n.timing;
    return Object.keys(e).map(function (n) {
      var r = o[e[n][0]],
        u = o[e[n][1]],
        i = Math.round(r - u);
      i >= 0 && i < 36e5 && (t[n] = i)
    }), t
  }()
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o, r, u = (o = navigator.connection ? navigator.connection.effectiveType : "", r = window.screen || {}, {
    network: o,
    width: r.width,
    height: r.height
  });
  t.default = u
}]);
//# sourceMappingURL=hunter.js.map