(function () {
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  ! function (r, f) {
    var e = {
        getUrlParam: function () {
          var e = [],
            t = this.getURLQueryString().replace(/^\?/, "");
          if (t) {
            var n = t.split("&"),
              i = !0,
              o = !1,
              a = void 0;
            try {
              for (var r, c = n[Symbol.iterator](); !(i = (r = c.next()).done); i = !0) {
                var s = r.value.split("=");
                e.push({
                  key: s[0],
                  val: s[1]
                })
              }
            } catch (e) {
              o = !0, a = e
            } finally {
              try {
                !i && c.return && c.return()
              } finally {
                if (o) throw a
              }
            }
          }
          return e
        },
        cookie: function (e, t, n) {
          if (void 0 === t) {
            var i = null;
            if (f.cookie && "" != f.cookie)
              for (var o = f.cookie.split(";"), a = 0; a < o.length; a++) {
                var r = o[a].replace(/(^\s*)|(\s*$)/g, "");
                if (r.substring(0, e.length + 1) == e + "=") {
                  i = decodeURIComponent(r.substring(e.length + 1));
                  break
                }
              }
            return i
          }
          n = n || {}, null === t && (t = "", (n = $.extend({}, n)).expires = -1);
          var c, s = "";
          n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (c = new Date).setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3) : c = n.expires, s = "; expires=" + c.toUTCString());
          var l = n.path ? "; path=" + n.path : "",
            u = n.domain ? "; domain=" + n.domain : "",
            d = n.secure ? "; secure" : "";
          f.cookie = [e, "=", encodeURIComponent(t), s, l, u, d].join("")
        },
        getNiceTuiSource: function () {
          return -1 !== this.getURLQueryString().indexOf("click_source") || "nicetui" === a.click_source
        },
        getURLQueryString: function () {
          return location.search ? location.search : 2 <= location.hash.split("?").length ? location.hash.split("?")[1] : ""
        },
        setCookie: function () {
          var e = this.getUrlParam();
          a = {
            referrer: f.referrer,
            originUrl: location.href
          };
          var t = "_nt_";
          if (0 < e.length)
            for (var n = 0; n < e.length; n++) a[e[n].key] = e[n].val, this.cookie(t + e[n].key, e[n].val, {
              path: "/",
              expires: 1
            });
          var i = f.cookie.split(";");
          for (n = 0; n < i.length; n++)
            if (-1 !== i[n].indexOf(t)) {
              var o = i[n].split("=")[0];
              a[o.substr(o.indexOf(t) + t.length)] = i[n].split("=")[1]
            } this.sendLandLog(this.extendObj(a, {
            type: 100
          }))
        },
        jsonpAjax: function (n) {
          if (!(n = n || {}).url || !n.callback) throw new Error("鍙傛暟涓嶅悎娉�");
          var i = ("jsonp_" + Math.random()).replace(".", ""),
            o = t.getElementsByTagName("head")[0];
          n.data[n.callback] = i;
          var e = this.formatParams(n.data),
            a = t.createElement("script");
          o.appendChild(a), r[i] = function (e) {
            o.removeChild(a), clearTimeout(a.timer), r[i] = null, n.success && n.success(e)
          }, a.src = n.url + "?" + e, n.time && (a.timer = setTimeout(function () {
            r[i] = null, o.removeChild(a), n.error && n.error({
              message: "瓒呮椂"
            })
          }, n.time))
        },
        formatParams: function (e) {
          var t = [];
          for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
          return t.join("&")
        },
        ajax: function () {
          var e = {
            type: arguments[0].type || "GET",
            url: arguments[0].url || "",
            async: arguments[0].async || "true",
            data: arguments[0].data || null,
            dataType: arguments[0].dataType || "text",
            contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
            beforeSend: arguments[0].beforeSend || function () {},
            success: arguments[0].success || function () {},
            error: arguments[0].error || function () {}
          };
          e.beforeSend();
          var t = this.createxmlHttpRequest();
          t.responseType = e.dataType, t.open(e.type, "GET" == e.type ? e.url + "?" + this.convertData(e.data) : e.url, e.async), t.setRequestHeader("Content-Type", e.contentType), t.send(this.convertData(e.data) || ""), t.onreadystatechange = function () {
            4 == t.readyState && (200 == t.status ? e.success(t.response) : e.error())
          }
        },
        createxmlHttpRequest: function () {
          return r.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : r.XMLHttpRequest ? new XMLHttpRequest : void 0
        },
        convertData: function (e) {
          if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return e;
          var t = "";
          for (var n in e) t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&";
          return t = t.substring(0, t.length - 1)
        },
        cloneObj: function (e) {
          if ("object" != (void 0 === e ? "undefined" : void 0 === e ? "undefined" : _typeof(e))) return e;
          if (null == e) return e;
          var t = new Object;
          for (var n in e) t[n] = this.cloneObj(e[n]);
          return t
        },
        extendObj: function () {
          var e = arguments;
          if (!(e.length < 2)) {
            for (var t = this.cloneObj(e[0]), n = 1; n < e.length; n++)
              for (var i in e[n]) t[i] = e[n][i];
            return t
          }
        }
      },
      o = null,
      a = null,
      c = 0,
      s = 0,
      l = 0,
      i = 0,
      u = parseInt(9999 * Math.random()) + parseInt((new Date).getTime()).toString().substr(5, 8),
      p = {
        init: function () {
          this.setCookie(), f.getElementById("send_log") && (p.countInit(), this.visibilityListen()), p.domReady(function () {
            p.setCountLog()
          })
        },
        domReady: function (e) {
          "complete" === f.readyState ? e() : f.addEventListener ? f.addEventListener("DOMContentLoaded", function () {
            f.removeEventListener("DOMContentLoaded", arguments.callee, !1), e()
          }, !1) : f.attachEvent && f.attachEvent("onreadystatechange", function () {
            "complete" == f.readyState && (f.detachEvent("onreadystatechange", arguments.callee), e())
          })
        },
        setCountLog: function () {
          if (f.querySelectorAll("[data-setting-click]"))
            for (var e = 0; e < f.querySelectorAll("[data-setting-click]").length; e++) f.querySelectorAll("[data-setting-click]")[e].addEventListener("click", function (e) {
              var t = this;
              "A" == t.tagName && t.getAttribute("href") && -1 == t.getAttribute("href").indexOf("javascript:") ? (e.preventDefault(), nicetuiLog.sendLog(function () {
                console.log("鐐瑰嚮杞寲鍙戦€丱K"), r.location.href = t.getAttribute("href")
              }, {
                location: t.getAttribute("data-setting-click")
              })) : nicetuiLog.sendLog(function () {
                console.log("鐐瑰嚮杞寲鍙戦€丱K111")
              }, {
                location: t.getAttribute("data-setting-click")
              })
            });
          if (f.querySelectorAll("[data-setting-press]"))
            for (e = 0; e < f.querySelectorAll("[data-setting-press]").length; e++) {
              var t = 0;
              f.querySelectorAll("[data-setting-press]")[e].addEventListener("touchstart", function () {
                t = new Date
              }), f.querySelectorAll("[data-setting-press]")[e].addEventListener("touchend", function () {
                self = this, 800 < new Date - t && (nicetuiLog.sendLog(function () {}, {
                  location: self.getAttribute("data-setting-press")
                }), console.log("瑙︽懜鍩嬬偣鍙戦€丱K"))
              })
            }
          if (f.querySelectorAll("[data-setting-copy]"))
            for (e = 0; e < f.querySelectorAll("[data-setting-copy]").length; e++) f.querySelectorAll("[data-setting-copy]")[e].addEventListener("click", function (e) {
              self = this;
              var t = self.getAttribute("data-setting-copy"),
                n = t.match(/\$\{(.+?)\}/g);
              if (n && n.length)
                for (var i in n) {
                  var o = n[i].replace("${", "");
                  o = o.replace("}", ""), t = t.replace(n[i], d.getparams(o))
                }
              "A" == self.tagName && self.getAttribute("href") && self.getAttribute("href").indexOf("javascript:"), p.copyBoard(t)
            })
        },
        copyBoard: function (e) {
          var t = f.createElement("textarea");
          t.style.position = "fixed", t.style.top = 0, t.style.left = 0, t.style.width = "2em", t.style.height = "2em", t.style.padding = 0, t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, f.body.appendChild(t);
          var n = t.hasAttribute("readonly");
          n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), selectedText = t.value;
          try {
            f.execCommand("copy") ? console.log("澶嶅埗鎴愬姛") : console.log("鎮ㄧ殑娴忚鍣ㄤ笉鏀寔鑷姩澶嶅埗锛岃闀挎寜澶嶅埗")
          } catch (e) {
            console.log("涓嶈兘浣跨敤杩欑鏂规硶澶嶅埗鍐呭")
          }
          f.body.removeChild(t)
        },
        countInit: function () {
          var i = startY = endX = endY = 0;
          o = setInterval(p.countTime, 1e3), f.addEventListener("touchstart", function (e) {
            c++, p.dataAnalysis("touch");
            var t = e.targetTouches[0];
            i = t.pageX, startY = t.pageY;
            var n = n || r.event;
            "input" == (n.target || n.srcElement).nodeName.toLowerCase() && (p.dataAnalysis("input"), l++)
          }), f.addEventListener("touchend", function (e) {
            endX = e.changedTouches[0].pageX, endY = e.changedTouches[0].pageY;
            var t = Math.abs(endY - startY),
              n = Math.abs(endX - i);
            0 !== endX && 0 !== endY && (5 < n || 5 < t) && (p.dataAnalysis("move"), s++, endX = 0, endY = 0)
          }, !1)
        },
        visibilityListen: function () {
          var e, n;
          void 0 !== f.hidden ? ("hidden", n = "visibilitychange", e = "visibilityState") : void 0 !== t.mozHidden ? ("mozHidden", n = "mozvisibilitychange", e = "mozVisibilityState") : void 0 !== f.msHidden ? ("msHidden", n = "msvisibilitychange", e = "msVisibilityState") : void 0 !== f.webkitHidden && ("webkitHidden", n = "webkitvisibilitychange", e = "webkitVisibilityState"), f.addEventListener(n, function () {
            "visible" !== f[e] ? clearInterval(o) : f.getElementById("send_log") && (u = parseInt(9999 * Math.random()) + parseInt((new Date).getTime()).toString().substr(5, 8), i = l = s = c = 0, o = setInterval(p.countTime, 1e3))
          }, !1)
        },
        countTime: function () {
          p.dataAnalysis("perSec"), 300 === ++i && clearInterval(o)
        },
        sendDataLog: function (e) {
          this.getNiceTuiSource() && this.ajax({
            url: '//api.nicetui.cn/niceapi/' + "landingpagelog",
            callback: "callback",
            data: e,
            time: 3e3,
            success: function (e) {},
            error: function (e) {}
          })
        },
        sendLog: function (e, t) {
          "test" == a.nicelog && alert("NiceTui EffectSave Send Success");
          try {
            this.getNiceTuiSource() ? this.ajax({
              url: '//api.nicetui.cn/niceapi/' + "saveEffect",
              callback: "callback",
              data: e,
              time: 3e3,
              success: function (e) {
                t && "function" == typeof t && t(e)
              },
              error: function (e) {
                t && "function" == typeof t && t(e)
              }
            }) : t && "function" == typeof t && t()
          } catch (e) {
            t && "function" == typeof t && t()
          }
        },
        sendLandLog: function (e, t) {
          try {
            this.getNiceTuiSource() ? this.ajax({
              url: '//api.nicetui.cn/niceapi/' + "reach",
              callback: "callback",
              data: e,
              time: 3e3,
              success: function (e) {
                t && "function" == typeof t && t(e)
              },
              error: function (e) {
                t && "function" == typeof t && t(e)
              }
            }) : t && "function" == typeof t && t()
          } catch (e) {
            console.log(e), t && "function" == typeof t && t()
          }
        },
        dataAnalysis: function (e) {
          var t = (this.getUrlParam(), {
            sessionID: u,
            action: e,
            touchNum: c,
            inputNum: l,
            moveNum: s
          });
          t = this.extendObj(t, a, {
            type: 101
          }), p.sendDataLog(t)
        },
        getparams: function (e) {
          var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.href);
          return null === t ? "" : t[1]
        }
      };
    (p = e.extendObj(p, e)).init();
    var n = {
      sendLog: function (e, t) {
        var n = p.extendObj(a, t);
        p.sendLog(n, e)
      },
      openURI: function (e) {
        this.sendLog(function () {
          r.location.href = e
        })
      },
      init: function (e, t) {
        this.sendLog(e, t)
      },
      weixin: function () {
        this.openURI("weixin://")
      }
    };
    r.nicetuiLog = n, r.countLog = n
  }(window, document);
})()