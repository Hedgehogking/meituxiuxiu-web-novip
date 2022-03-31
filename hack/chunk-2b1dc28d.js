(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2b1dc28d"], {
    "03b6": function(t, e, i) {},
    "0ddb": function(t, e, i) {
        "use strict";
        i("aed2")
    },
    "0e68": function(t, e, i) {
        "use strict";
        i("6187")
    },
    "1a74": function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return c
        }
        )),
        i.d(e, "b", (function() {
            return l
        }
        ));
        i("2fdb"),
        i("6762");
        var n = i("d225")
          , a = i("b0b4")
          , o = (i("ac6a"),
        {})
          , r = []
          , s = function(t) {
            var e = c.getKey(t).join("+");
            Array.isArray(o[e]) && (o[e].forEach((function(t) {
                t.delay ? (clearTimeout(t.timer),
                t.timer = setTimeout(t, t.delay)) : t()
            }
            )),
            t.preventDefault())
        }
          , c = function() {
            function t() {
                Object(n["a"])(this, t)
            }
            return Object(a["a"])(t, null, [{
                key: "checkKey",
                value: function(t) {
                    return !r.includes(t) && !!t
                }
            }, {
                key: "add",
                value: function(e, i, n) {
                    return e = (e || "").toUpperCase(),
                    !!t.checkKey(e) && (o[e] = o[e] || [],
                    !o[e].includes(i) && (i.timer = null,
                    i.delay = n,
                    o[e].push(i),
                    !0))
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    t = (t || "").toUpperCase(),
                    Array.isArray(o[t]) && o[t].includes(e) && o[t].splice(o[t].indexOf(e), 1)
                }
            }, {
                key: "getKey",
                value: function(t) {
                    var e = [];
                    t.ctrlKey && e.push("CTRL"),
                    t.altKey && e.push("ALT"),
                    t.shiftKey && e.push("SHIFT"),
                    t.metaKey && e.push("META");
                    var i = t.key.toUpperCase();
                    return " " === i ? i = "SPACE" : "CONTROL" === i && (i = ""),
                    i && !e.includes(i) && e.push(i),
                    e
                }
            }, {
                key: "startWatch",
                value: function(t) {
                    (t || document.body).addEventListener("keydown", s)
                }
            }, {
                key: "stopWatch",
                value: function(t) {
                    (t || document.body).removeEventListener("keydown", s),
                    o = {}
                }
            }]),
            t
        }()
          , l = {
            general: {
                save: {
                    name: "save",
                    title: "保存",
                    key: "Ctrl+S"
                },
                copy: {
                    name: "copy",
                    title: "复制",
                    key: "Ctrl+C"
                },
                paste: {
                    name: "paste",
                    title: "粘贴",
                    key: "Ctrl+V"
                },
                cut: {
                    name: "cut",
                    title: "剪切",
                    key: "Ctrl+X"
                },
                delete: {
                    name: "delete",
                    title: "删除",
                    key: "Delete"
                },
                backspace: {
                    name: "delete",
                    title: "删除",
                    key: "Backspace"
                },
                space: {
                    name: "spance",
                    title: "空格",
                    key: "Space"
                },
                undo: {
                    name: "undo",
                    title: "撤销",
                    key: "Ctrl+Z"
                },
                redo: {
                    name: "redo",
                    title: "重做",
                    key: "Ctrl+Y"
                },
                arrowUp: {
                    name: "arrowUp",
                    title: "上移",
                    key: "ArrowUp"
                },
                arrowDown: {
                    name: "arrowDown",
                    title: "下移",
                    key: "ArrowDown"
                },
                arrowLeft: {
                    name: "arrowLeft",
                    title: "左移",
                    key: "ArrowLeft"
                },
                arrowRight: {
                    name: "arrowRight",
                    title: "右移",
                    key: "ArrowRight"
                },
                arrowUpShift: {
                    name: "arrowUpShift",
                    title: "快速上移",
                    key: "Shift+ArrowUp"
                },
                arrowDownShift: {
                    name: "arrowDownShift",
                    title: "快速下移",
                    key: "Shift+ArrowDown"
                },
                arrowLeftShift: {
                    name: "arrowLeftShift",
                    title: "快速左移",
                    key: "Shift+ArrowLeft"
                },
                arrowRightShift: {
                    name: "arrowRightShift",
                    title: "快速右移",
                    key: "Shift+ArrowRight"
                }
            }
        }
    },
    "1c4c": function(t, e, i) {
        "use strict";
        var n = i("9b43")
          , a = i("5ca1")
          , o = i("4bf8")
          , r = i("1fa8")
          , s = i("33a4")
          , c = i("9def")
          , l = i("f1ae")
          , u = i("27ee");
        a(a.S + a.F * !i("5cc5")((function(t) {
            Array.from(t)
        }
        )), "Array", {
            from: function(t) {
                var e, i, a, h, d = o(t), f = "function" == typeof this ? this : Array, g = arguments.length, m = g > 1 ? arguments[1] : void 0, p = void 0 !== m, w = 0, v = u(d);
                if (p && (m = n(m, g > 2 ? arguments[2] : void 0, 2)),
                void 0 == v || f == Array && s(v))
                    for (e = c(d.length),
                    i = new f(e); e > w; w++)
                        l(i, w, p ? m(d[w], w) : d[w]);
                else
                    for (h = v.call(d),
                    i = new f; !(a = h.next()).done; w++)
                        l(i, w, p ? r(h, m, [a.value, w], !0) : a.value);
                return i.length = w,
                i
            }
        })
    },
    "37c8": function(t, e, i) {
        e.f = i("2b4c")
    },
    "3a72": function(t, e, i) {
        var n = i("7726")
          , a = i("8378")
          , o = i("2d00")
          , r = i("37c8")
          , s = i("86cc").f;
        t.exports = function(t) {
            var e = a.Symbol || (a.Symbol = o ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: r.f(t)
            })
        }
    },
    "3c92": function(t, e, i) {},
    4111: function(t, e, i) {},
    4519: function(t, e, i) {
        "use strict";
        i("a70a")
    },
    "4df1": function(t, e, i) {},
    "521e": function(t, e) {
        t.exports = ""
        // t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4ESURBVHgB7Z1rbBTlHsbf3W63l93tvaWUW8uBQqFSCnJT4EC5NOdIomgUExND/GC8S4zxEqJRE4PwAYwkJip+wCgxRhQV0WoRpKKIAQlQUGp0USiltNiW0htt9/yf2Zk6XaYLBzTsTJ9fMtndmdntZZ59/9f3HaUIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCiAMIhUIueXDJoyIkKhDL1KlT4z/55JNhY8aMSZBdLkVIFCAQ37lz5+Zv2LBh1Lx58zyKxCRuFQM899xzrjlz5iT7/X7fsGHDUnfu3BkTvxeJTTC6eFetWjVGTNOSU6dO/Vte+1SMiJn0J05dW/DzEydMmJD2wgsv5GdmZibEx8d7EhISLuzYsaNLjoX0jRDl3rRp0xCMKBhZIreOjo5FlZWVhXCGFYkZrumwHwwGu0UYHc3NzV2Rx1paWjrFCe7Zt2+fchCM/q4SzSTJlrFnz56ZGFnOnz//3+Li4hGyz++waAlfTq9s8eLk0z+7SuLXrl07GoL5+eef5wwZMgROr2O+jXpS0vfrr79O379/f4mysVMfK790z8cff9yCJ7///nvT6dOnLygHObsul8t77Nix4oKCgpzS0tIRu3btGie7k5QNRRMrv3BIci9tZ86caamtrW2W1z3KQdx1110JeXl5KcZryTnlGaKhebpyPNu2bctWYTvvNOfQs3z58tzW1tZF5khQRDNFMed0xbhMmxPxPPDAA5ai0X02ioZcRLzdRXOtM72DjV6h8+jRo+ckZZDp9Xq1tMGoUaMCkkqIe+edd2Lef6Ng/j5cUuLwZmdnxz344INw4i2jPMls9/7www8dTU1NrWbRjBkzJtXn83WePHmyVZx/Rzn95GJgSvzIsxw6dGiSCofMl/LFNPMkwllsmCYxVYvLy8szFP0ZR+NC05fkWWYYF/7bb78tlf3J6hKiQZ1MQu7hUh35j/HeLVu2TJBDMVs/o5IvD1x4XESE/HER+z0zZsxIGDp0aLKxc9asWcP27t1bKE+T9CyvJVIn6xa/5aw4vWeMfePGjUvNz8+PWVeBgrk8vCtXrsyFuUlLSwvIa/gd+N8ly76i1NTU5Ntuu61aiqhtxhumTZs2XEaacZLljSYa+DkX4LcYO/x+f0J7ezsEE5PpBQrmEsBsrF69OvuZZ56RQKY4t6qqakIgEEhNT08PHDly5DrZN1LqYNeJWXLfcsstB82iMUYaEU1U83T8+PFe82spjbAPyMbEywWcZc6bfP/993Okuj7bvC8YDMJv8S5dujRTHNky8zERzWQ5lmxRBtCKkhJm933+wYMHZ6lwBZ/YlDhELpEiMG8NDQ1lMrqkqbAA4hYsWHCRaHRHGOZMa2+4/fbbYXaSV6xYMdp83saNG+H7sAnezqAvRwqG2XV1dQsjxYJ9OKb6O8OWovnxxx9vEIHky/EsREdfffXVVPT/mMLqRXIMRUq6CnZGNyVpkWYI2+7du+fKsSx1cRLUbSWagTaE1vfcc09erLeksmXw0uB/hDxLydixY7OtTjhw4MCfpaWl1fL0nOqf2neLOUtbt25dYVFRUdZAP0BGmc5Vq1Yde/HFF+vkpdH8HpNw6BsYCAX/H/fDDz/szcnJ8RkHamtrO8QR7jBeT548OV3CayTcYE7MI01vRUVFk5QMDq1fv/6onNPY2dmpCQqPYs7OSZngxM0337z/ww8/PKViXCxkYLSEnGwpW7duHZ2VlRUQPyYL5gWzM+GzLF68OMfKR5H3pMGhjZgjDuHB1CC8TpUtXfI5cJJ9+tRgfnFtjuazyLf/RlOjUwpaEMTPQKSDUcRjFT2JaG7Ee/UGdi1qQhZYnNwUfZ9b/TV60SVwAnA8kTu5jO44zwDREESDImKSZIHTJcE3E/OsHn300SGKIbMj8URWkk2i6VeJhvmxGmkkkTf/o48+Kv3jjz/mmSfnYaRRNEGOxHv33XcPG0g0EfUhz6WSe0YW1+7tmFT6XxgLGhl9xRfeeuut+scee+yweWam3vFflJeXZx5pulNSUpqXLVsmEfaBs1Yfjukzc+fOPSoboqteRWyJ4XzGDx8+HALw65sWvehJtAQk1CJHmgF6XuCfBJDeR30I5giPr7766mjs18sBxKZoU1fhtO7YsaMYF1ZqQgsaGxvL4X9IhDQdszFVuP6THMU8RYrGCKETdREm6cJjRGRX9FS/T9L6xeZuN6sNowTEIuf7rURzud11TmEwqh5iSZILXYh+lct5A7KylZWVwSVLlpwQ0aS88sorEyVc9hrHq6qqauGfiIA6XC6XozO1g82manWhLVu2FCxcuHCUsbOtra133759DWKazkjO5E+pG7V5PJ74zMxMrRAoz92FhYUZ48ePb3722Wcb6uvrtWkiiYmJ2v8P00TEtCXOnj27qaWlhR3/DsKN5JlEPeWGSYGJufPOO7XlRWRL0LeMzZs3zzSbHpz3+OOP56jwl8wy5NYbpbgAkoNIhKNqXGA4uOhLUeGL7NJ9G7/5HEMsOE/PoXj1aMcbGT1JcfF6FRYccQAwRymY+2Nc4Pfff9/ssLqzs7P9cGKtxCLHU1euXDkK7Zrqr2xvPESDxicRyw16QZGhs0Nwo8psFoMe/eACayPLQGJBtVrMUQEiKmzp6emoOLv1JB9aLtHr4lMUi3OAGYFAzIKQ7CwKhEi2+azMkC6oRImOsszhN3I3qn+W3MmrTvRj0JQGJk6cGJKopl9KXiIabY1ghNhI+Rv7UQp45JFHqqU0gAlmF5KSkhKEvtGjp6cnUhycFuJAtB5b8yiCxaRlf6p5+Q3TyOLVneCEN954o8jce6sGcaO2U/9oV8Qj6N2+fXsHlkUzdtx6661D5cGNflr01WIzRhYRh1FwTFy0aFGu8R4Zlc7LA9bgYwHRARhzoJMQ8ahwbgURjbHUad9qneZ6EHwZ9L/cdNNN6So8fxrnxuEzIn2bioqK8YpNUI4AF9EPQaCQCDOD/hSsNP7BBx8UqXAvLcQQiFx9HL24RuisCy0wbdq03O+++26G+Tx8ZkZGxqBugHKEZ49qsGxZzz//fGFubm7A6hypB3U+9dRTNS+//HKD5E5SRFjF5noQOHHiRGtXV1e3z+dLkCRdkvkYHOEnnnji0Ouvvw5HuFsNUpyQN4i74447MtesWTNJvv3JA50k9SDP/Pnz0X/b/tprrzVjedeysrK+ehAQ0+SVHEui3+/vl96Hb7NixYrqDRs2NKhBLBZgd8G48vPzvevWrUMHXN/IgpHi008/PSkmpVFGi5Ak3jQhoYioN223SeRz9qWXXjpVVFTUO2LEiGSzcAxQpZbPqLvvvvt+ErP2pwo7u8TGuFEQNPsZX3zxxfV6JtarNy75MOHdPIcZofH9998/Wl8ECCslpKxfv77g66+/vg7Z3srKyknwhfQEHecNOQQX5vlIPWhsRI4EFzlylahEI7VvPvehhx4qwDFjNQV8ni4yj/4Z7JJzAMasxERELG+++WaJuTtOhVsqXRbviSoaRXE4Ei10hvmoqamZifDY3NtSV1e3wCgMWryXovkbsI3TC1OxdOnSLHFmiyXaGYGICOvBmWs8iG5EBO3Hjx9vPXv2rFXnW4/4KO2ST+mSz8iAE2w4wvLYtnPnTmRxmcGNgl0Eo4XOEtWUpKWlJUc7URJu6adPn27bvXs31pqzKgj27Nmzp10ipU5dKG69BTP+888/P8VFlaNjB8Fofbhvv/32eHNSzgidDx8+3CTV45Ac0xJtuPhSec6SkaatqqqqXVmPGD179+7tG2nErHVIprca+xSrzrZH68ONDJ317jZkarFcu3/Tpk0TQxErOj355JMjo6zopPk0Tz/9dLZESPB72PzkEDzvvvtuobn9QIVXRjBfYG3qyHvvvTfBSjRq4HswGX28zLM4iH5Lb+g3QkeB0DJ0RqEximjIVWKLMn0wGOwSZ1Z77nK5zIvymP0N0UeoU9L8we7ubpeYGUxzVYiipCg5Ec9Xr15trCFHrhBbOL3l5eVJU6ZMwWI8Wugs9aG2L7/8Esut93NoRRhocEL9p7WgoCAkdSKYrj5HOC4u7nxOTs75I0eO0LF1MBhJ/OYeFkwVuffee9EtN9Akd+xL2rp1az/zpM8b4kSzq8AWI4xEOiGv1xuaPn06Zh4qeR5XVlaGRQqxCmWnGiDfsmvXrr6RBuu2lJSU/CSmqpMjjMPR5/8kffbZZ5MiOuAWo7UyynIamiO8efNmdNPBUbZb6Oz0G6f+cxhLdET22BrmCaIJWd9mpm+9XWUvtFsCSqoAi0mzh/gK0aazYo1+q5FGOcs/idu4cePI+vp6LE3vC0W5UReJAkYaTIq3GmkcJhovGrrwt2GKr8Wtc8j/gTYXOnKkwbKm6MDTF1C2LfpogpuOzsHftWbNmn9x2bOrx9Knqampwbpzdh1lXLrYA+K/jDTaSr/55puZKnzHFPTssOZ1FfQTDeYh6bfxteU/FaMI7m0QOW/KMLm//fbbjLVr117T2xTb3S4i09u+bNmyn0Q01cuXL99fUVER83eXH4hAIBCSbHQ8Jv9HHpPsthfzpXJzc5l4/BvQbgKh7P8F0Cb/y5YiTm6hYZIk0ThXRh9ktpPt7p+RfwbN1BqmCatM6LfJueZOL0O12ASmtru6uhqT59S2bduaf/nlF0yiu+YlDQomRpGaV3cwGGxubGw0Wk1Z/yJRwZc5cfv27VjciI4uuSx45zZCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQR/E/hSnsOv02G8cAAAAASUVORK5CYII="
    },
    "599d": function(t, e, i) {
        "use strict";
        i("4df1")
    },
    "5df3": function(t, e, i) {
        "use strict";
        var n = i("02f4")(!0);
        i("01f9")(String, "String", (function(t) {
            this._t = String(t),
            this._i = 0
        }
        ), (function() {
            var t, e = this._t, i = this._i;
            return i >= e.length ? {
                value: void 0,
                done: !0
            } : (t = n(e, i),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        }
        ))
    },
    6187: function(t, e, i) {},
    "67ab": function(t, e, i) {
        var n = i("ca5a")("meta")
          , a = i("d3f4")
          , o = i("69a8")
          , r = i("86cc").f
          , s = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , l = !i("79e5")((function() {
            return c(Object.preventExtensions({}))
        }
        ))
          , u = function(t) {
            r(t, n, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
          , h = function(t, e) {
            if (!a(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, n)) {
                if (!c(t))
                    return "F";
                if (!e)
                    return "E";
                u(t)
            }
            return t[n].i
        }
          , d = function(t, e) {
            if (!o(t, n)) {
                if (!c(t))
                    return !0;
                if (!e)
                    return !1;
                u(t)
            }
            return t[n].w
        }
          , f = function(t) {
            return l && g.NEED && c(t) && !o(t, n) && u(t),
            t
        }
          , g = t.exports = {
            KEY: n,
            NEED: !1,
            fastKey: h,
            getWeak: d,
            onFreeze: f
        }
    },
    "6c7b": function(t, e, i) {
        var n = i("5ca1");
        n(n.P, "Array", {
            fill: i("36bd")
        }),
        i("9c6c")("fill")
    },
    "7a3b": function(t, e, i) {
        "use strict";
        i("4111")
    },
    "7bbc": function(t, e, i) {
        var n = i("6821")
          , a = i("9093").f
          , o = {}.toString
          , r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , s = function(t) {
            try {
                return a(t)
            } catch (e) {
                return r.slice()
            }
        };
        t.exports.f = function(t) {
            return r && "[object Window]" == o.call(t) ? s(t) : a(n(t))
        }
    },
    "81d3": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("el-container", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading || t.drawLoading,
                    expression: "loading || drawLoading"
                }],
                ref: "matting",
                staticClass: "koutu",
                staticStyle: {
                    height: "100%",
                    outline: "0"
                },
                attrs: {
                    tabindex: "0",
                    "element-loading-text": t.loadingText
                }
            }, [i("el-header", {
                staticStyle: {
                    "background-color": "#fff",
                    padding: "0"
                }
            }, [i("LayoutHeader", [i("div", {
                staticClass: "header-center-tools",
                attrs: {
                    tabindex: "-1"
                }
            }, t._l(t.tools.center, (function(e, n) {
                return i("el-link", {
                    key: n,
                    staticClass: "tools-center-btn",
                    attrs: {
                        type: "text",
                        disabled: t.isDisabled(e) || !t.config.image.url
                    },
                    on: {
                        click: function(i) {
                            return t.handleTools({
                                tool: e,
                                activeKey: n,
                                position: "center"
                            })
                        }
                    }
                }, [i("svg-icon", {
                    attrs: {
                        "icon-class": e.icon
                    }
                })], 1)
            }
            )), 1)])], 1), i("ToolsSection", {
                ref: "tools",
                attrs: {
                    tools: t.tools,
                    "tools-on-click": t.handleTools,
                    "on-upload-image-button-click": t.uploadImageButtonClicked,
                    "uploading-image-handler": t.uploadImageLoading,
                    "upload-finish-image-handler": t.uploadImageFinish,
                    "download-iamge-handler": t.downloadIamge,
                    "download-button-disabled": !t.config.image.url
                }
            }, [i("ToolsTypeModal", {
                attrs: {
                    "has-data": !!t.config.image.url,
                    "show-type-modal": "type" === t.action && t.tools.left.type.showPanel,
                    "active-type": t.mattingTypeToolInfo.activeType,
                    "is-selected": t.mattingTypeToolInfo.isSelected,
                    "item-change-handler": t.mattingTypeChangeHandler
                }
            }), i("ToolsPanelModal", {
                attrs: {
                    "show-panel-modal": ("daub" === t.action || "erase" === t.action) && t.tools.left[t.action].showPanel && !t.painting,
                    "active-tool": t.activeTool,
                    "draw-info": t.config.draw,
                    "size-change-handler": t.circleSizeChange,
                    "blur-change-handler": t.circleBlurChange
                }
            })], 1), i("div", {
                ref: "edit",
                staticClass: "edit"
            }, [t.showTipModal ? i("TipModal", {
                attrs: {
                    text: t.tipConfig.text,
                    "confirm-button-text": t.tipConfig.confirmButtonText,
                    "cancel-function": t.tipConfig.cancelFunction,
                    "confirm-function": t.tipConfig.confirmFunction
                }
            }) : t._e(), i("el-main", {
                staticClass: "source"
            }, [i("canvas", {
                ref: "source",
                style: {
                    cursor: "drag" === t.action ? t.mouse.down ? "grabbing" : "grab" : {
                        keep: "crosshair",
                        drop: "crosshair",
                        daub: "crosshair",
                        erase: "crosshair"
                    }[t.action]
                },
                attrs: {
                    width: t.config.edit.width,
                    height: t.config.edit.height
                },
                on: {
                    click: t.canvasClick,
                    mousemove: t.canvasMousemove,
                    mousedown: function(e) {
                        return t.canvasMousedown(e, "source")
                    },
                    mouseup: function(e) {
                        return t.cnavasMouseup(e)
                    },
                    mousewheel: function(e) {
                        return e.preventDefault(),
                        t.canvasMousewheel(e)
                    }
                }
            })]), i("div", [t.config.image.url ? i("div", {
                staticClass: "line"
            }) : i("div", {
                staticClass: "upload-image"
            }, [i("div", {
                staticClass: "upload-image-button"
            }, [i("image-upload", {
                attrs: {
                    accept: "image/png,image/jpeg,image/jpg,image/bmp",
                    type: "matting",
                    size: t.imageSize,
                    open: !0
                },
                on: {
                    loading: t.uploadImageLoading,
                    finish: t.uploadImageFinish
                }
            }, [i("div", {
                attrs: {
                    type: "text"
                },
                on: {
                    click: function(e) {
                        return t.uploadImageButtonClicked("canvas")
                    }
                }
            }, [t._v("\n              上传图片\n            ")])])], 1), i("p", {
                staticClass: "upload-image-text"
            }, [t._v("\n          请上传图片\n        ")])])]), i("el-main", {
                staticClass: "result"
            }, [i("canvas", {
                ref: "result",
                style: {
                    cursor: "drag" === t.action ? t.mouse.down ? "grabbing" : "grab" : "auto"
                },
                attrs: {
                    width: t.config.edit.width,
                    height: t.config.edit.height
                },
                on: {
                    mousedown: function(e) {
                        return t.canvasMousedown(e, "result")
                    },
                    mousewheel: function(e) {
                        return e.preventDefault(),
                        t.canvasMousewheel(e)
                    }
                }
            })]), i("div", {
                staticClass: "bg"
            }, [i("canvas", {
                ref: "bg",
                attrs: {
                    width: "140",
                    height: "140"
                }
            })]), i("div", {
                staticClass: "zoom-panel"
            }, [i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "抓手",
                    placement: "top"
                }
            }, [i("div", {
                staticClass: "zoom-panel-button zoom-thumb",
                on: {
                    click: function(e) {
                        return t.actionChange("drag")
                    }
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-zoom-thumb"
                }
            })], 1)]), i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "缩小",
                    placement: "top"
                }
            }, [i("div", {
                staticClass: "zoom-panel-button",
                class: {
                    disabled: !t.config.image.url
                },
                on: {
                    click: function(e) {
                        return t.imageResize("out")
                    }
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-zoom-minus"
                }
            })], 1)]), i("div", {
                staticClass: "zoom-size",
                on: {
                    mouseover: function(e) {
                        t.hover = !0
                    },
                    mouseout: function(e) {
                        t.hover = !1
                    }
                }
            }, [t.hover ? i("div", {
                staticClass: "zoom-panel-button",
                class: {
                    disabled: !t.config.image.url
                },
                on: {
                    click: t.initResize
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-zoom-restore"
                }
            })], 1) : i("span", [t._v(t._s((100 * t.config.image.ratio).toFixed(0)) + "%")])]), i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "放大",
                    placement: "top"
                }
            }, [i("div", {
                staticClass: "zoom-panel-button",
                class: {
                    disabled: !t.config.image.url
                },
                on: {
                    click: function(e) {
                        return t.imageResize("in")
                    }
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-zoom-plus"
                }
            })], 1)])], 1)], 1), i("div", {
                ref: "temp",
                staticClass: "temp"
            }), i("div", {
                staticClass: "mask"
            }, [i("canvas", {
                ref: "brush",
                attrs: {
                    width: t.config.mask.width,
                    height: t.config.mask.height
                }
            }), i("canvas", {
                ref: "aimask",
                attrs: {
                    width: t.config.mask.width,
                    height: t.config.mask.height
                }
            }), i("canvas", {
                ref: "composite",
                attrs: {
                    width: t.config.mask.width,
                    height: t.config.mask.height
                }
            }), i("canvas", {
                ref: "redMask",
                attrs: {
                    width: t.config.mask.width,
                    height: t.config.mask.height
                }
            }), i("img", {
                attrs: {
                    src: t.testUrl,
                    alt: ""
                }
            })])], 1)
        }
          , a = []
          , o = (i("456d"),
        i("ac6a"),
        i("96cf"),
        i("3b8d"))
          , r = i("c848")
          , s = (i("6c7b"),
        i("6762"),
        i("2fdb"),
        i("1a74"))
          , c = i("bcb9")
          , l = i("af26")
          , u = i("521e")
          , h = function(t, e) {
            var i = !0;
            return function() {
                var n = arguments
                  , a = this;
                i && (i = !1,
                setTimeout((function() {
                    t.apply(a, n),
                    i = !0
                }
                ), e))
            }
        }
          , d = {
            data: function() {
                return {
                    testUrl: "",
                    from: "",
                    isVip: !1,
                    hotkeyConfig: s["b"],
                    hover: !1,
                    key: "cpcG!8%@8yS1!wBT",
                    loading: !1,
                    loadingText: "",
                    painting: !1,
                    tools: {
                        left: {
                            type: {
                                text: "识别类型",
                                icon: "kt-type",
                                active: !1,
                                action: "type",
                                positonLeft: 0,
                                statsLogClass: "distinguish",
                                isUsed: !1,
                                showPanel: !1
                            },
                            keep: {
                                text: "添加选区",
                                icon: "kt-add",
                                active: !1,
                                action: "keep",
                                positonLeft: 0,
                                statsLogClass: "add_area",
                                isUsed: !1,
                                showPanel: !1
                            },
                            drop: {
                                text: "删除选区",
                                icon: "kt-del",
                                active: !1,
                                action: "drop",
                                positonLeft: 0,
                                statsLogClass: "delete_area",
                                isUsed: !1,
                                showPanel: !1
                            },
                            daub: {
                                text: "涂抹",
                                icon: "kt-edit",
                                active: !1,
                                action: "daub",
                                popover: !0,
                                positonLeft: 0,
                                statsLogClass: "tm",
                                isUsed: !1,
                                showPanel: !1
                            },
                            erase: {
                                text: "擦除",
                                icon: "kt-clear",
                                active: !1,
                                action: "erase",
                                popover: !0,
                                positonLeft: 0,
                                statsLogClass: "cc",
                                isUsed: !1,
                                showPanel: !1
                            }
                        },
                        center: {
                            undo: {
                                text: "撤销",
                                icon: "kt-undo",
                                fun: "undo",
                                statsLogClass: "revoke",
                                isUsed: !1
                            },
                            redo: {
                                text: "重做",
                                icon: "kt-redo",
                                fun: "redo",
                                statsLogClass: "redo",
                                isUsed: !1
                            },
                            reset: {
                                text: "原图",
                                icon: "kt-image",
                                fun: "reset",
                                statsLogClass: "original",
                                isUsed: !1
                            }
                        },
                        right: {
                            upload: {
                                text: "上传图片",
                                icon: "kt-upload"
                            },
                            download: {
                                text: "下载图片",
                                icon: "kt-download"
                            }
                        }
                    },
                    action: "drag",
                    sourceImageObj: null,
                    resultImageObj: null,
                    mouse: {
                        down: !1,
                        x: 0,
                        y: 0
                    },
                    config: {
                        edit: {
                            height: 0,
                            width: 0,
                            top: 0,
                            left: 0
                        },
                        mask: {
                            width: 0,
                            height: 0
                        },
                        image: {
                            url: "",
                            source: null,
                            x: 0,
                            y: 0,
                            ratio: 1,
                            original_width: 0,
                            original_height: 0,
                            resize_width: 0,
                            resize_height: 0,
                            key: null,
                            openWey: ""
                        },
                        draw: {
                            blur: 0,
                            size: 18,
                            color: 250,
                            drag: {
                                color: "",
                                size: 18,
                                blur: 0
                            },
                            keep: {
                                color: "rgba(255, 190, 94, .75)",
                                colorA: "rgba(255, 190, 94, .75)",
                                size: 18,
                                blur: 0
                            },
                            drop: {
                                color: "rgba(73, 114, 223, 0.75)",
                                colorA: "rgba(73, 114, 223, 0.75)",
                                size: 18,
                                blur: 0
                            },
                            daub: {
                                color: "rgba(255, 255, 255, 1)",
                                colorA: "rgba(255, 255, 255, .5)",
                                size: 18,
                                blur: 0
                            },
                            erase: {
                                color: "rgba(0, 0, 0, 1)",
                                colorA: "rgba(0, 0, 0, .5)",
                                size: 18,
                                blur: 0
                            }
                        }
                    },
                    step: -1,
                    history: [],
                    current: [],
                    drawLoading: !1,
                    downloadCount: 0,
                    isLogin: !1,
                    imageSize: 20971520,
                    mattingTypeToolInfo: {
                        isSelected: !1,
                        activeType: ""
                    },
                    showTipModal: !1,
                    tipConfig: {
                        hasMask: !0,
                        text: "",
                        confirmButtonText: "",
                        cancelFunction: null,
                        confirmFunction: null
                    },
                    initMaskData: {
                        baseAIMaskImg: "",
                        baseMaskImg: "",
                        blankMaskImg: "",
                        mattingType: ""
                    }
                }
            },
            methods: {
                mattingSod: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a, r = this, s = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = s.length > 0 && void 0 !== s[0] ? s[0] : {},
                                    i = e.usePortrait,
                                    n = e.isFirst,
                                    this.drawLoading = !0,
                                    this.loadingText = "图片智能识别中...",
                                    this.config.image.url) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.loading = !1,
                                    t.abrupt("return");
                                case 7:
                                    return a = {
                                        parameter: {
                                            rsp_media_type: "url",
                                            nMask: !0,
                                            use_portrait: i
                                        },
                                        media_info_list: [{
                                            media_data: "".concat(this.config.image.url),
                                            media_profiles: {
                                                media_data_type: "url"
                                            }
                                        }]
                                    },
                                    t.prev = 8,
                                    t.next = 11,
                                    Object(l["o"])(a).then(function() {
                                        var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                                            var i, a, o, s, c;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return r.clearMask(),
                                                        r.action = "",
                                                        i = e.data,
                                                        a = i.url,
                                                        o = i.isExistSalient,
                                                        s = i.isPortrait,
                                                        i.rspMediaType,
                                                        c = "",
                                                        n || r.canvasHistory({
                                                            brush: r.initMaskData.blankMaskImg
                                                        }),
                                                        o && a ? (c = a,
                                                        r.mattingTypeToolInfo.activeType = s ? "people" : "item",
                                                        "type" !== r.action && (r.tools.left.type.showPanel = !1,
                                                        r.handleTools({
                                                            tool: r.tools.left.type,
                                                            activeKey: "type",
                                                            position: "left"
                                                        }, !0)),
                                                        r.$track("kt_cutout_succeed")) : (r.mattingTypeToolInfo.activeType = "",
                                                        r.$message.error("未识别到物品、人像，试试自定义抠图吧"),
                                                        r.$track("kt_fail_show", {
                                                            class: 0
                                                        }),
                                                        r.handleTools({
                                                            tool: r.tools.left.keep,
                                                            activeKey: "keep",
                                                            position: "left"
                                                        }, !0)),
                                                        n && (r.initMaskData.mattingType = r.mattingTypeToolInfo.activeType),
                                                        r.initMaskData.baseAIMaskImg = c || r.initMaskData.blankMaskImg,
                                                        t.next = 10,
                                                        r.handleAIMaskImage(c);
                                                    case 10:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }());
                                case 11:
                                    t.next = 24;
                                    break;
                                case 13:
                                    return t.prev = 13,
                                    t.t0 = t["catch"](8),
                                    console.log(t.t0),
                                    this.$track("kt_fail_show", {
                                        class: 1
                                    }),
                                    this.$message.error("未识别到物品、人像，试试自定义抠图吧"),
                                    this.initMaskData.baseAIMaskImg = this.initMaskData.blankMaskImg,
                                    this.initMaskData.baseMaskImg = this.initMaskData.blankMaskImg,
                                    t.next = 22,
                                    this.handleAIMaskImage("");
                                case 22:
                                    this.drawLoading = !1,
                                    this.loading = !1;
                                case 24:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[8, 13]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                callAlgorithm: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a, o, r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.config.image.url) {
                                        t.next = 3;
                                        break
                                    }
                                    return this.loading = !1,
                                    t.abrupt("return");
                                case 3:
                                    for (this.drawLoading = !0,
                                    this.loadingText = "图片智能识别中...",
                                    e = [],
                                    i = this.config.image,
                                    n = this.current,
                                    a = 0; a < n.length; a++)
                                        e.push(["keep" === n[a].action ? 1 : 0, n[a].y / i.original_height, n[a].x / i.original_width]);
                                    o = {
                                        parameter: {
                                            rsp_media_type: "jpg",
                                            click_list: e,
                                            mask_type: 2
                                        },
                                        media_info_list: [{
                                            media_data: "".concat(this.config.image.url, "?x-image-process=image/resize,m_lfit,h_1080,w_1080/auto-orient,0"),
                                            media_extra: {},
                                            media_profiles: {
                                                media_data_type: "url"
                                            }
                                        }, {
                                            media_data: this.initMaskData.baseAIMaskImg,
                                            media_extra: {},
                                            media_profiles: {
                                                media_data_type: "url"
                                            }
                                        }]
                                    },
                                    Object(l["g"])(o).then((function(t) {
                                        var e = t.data
                                          , i = e.url
                                          , n = e.key
                                          , a = Object(c["b"])(n, r.key)
                                          , o = Object(c["a"])(i, a)
                                          , s = "data:image/jpg;base64,".concat(o);
                                        r.testUrl = s,
                                        r.clearMask("brush"),
                                        r.handleAIMaskImage(s)
                                    }
                                    )).catch((function(t) {
                                        if (r.drawLoading = !1,
                                        r.current.length) {
                                            r.current.pop();
                                            var e = r.config.image;
                                            r.mergeMask(e.x, e.y)
                                        }
                                        console.error("callAlgorithm", t)
                                    }
                                    ));
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                handleAIMaskImage: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var i, n, a, o, r, s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.loading = !0,
                                    i = this.config,
                                    n = i.image,
                                    i.draw,
                                    a = this.getCtx("aimask"),
                                    o = a.c,
                                    r = a.ctx,
                                    r.clearRect(0, 0, o.width, o.height),
                                    r.fillStyle = "#000",
                                    r.fillRect(0, 0, o.width, o.height),
                                    !e) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 9,
                                    this.getMaskObj(e);
                                case 9:
                                    s = t.sent,
                                    r.drawImage(s, 0, 0, o.width, o.height);
                                case 11:
                                    this.history.length > 0 ? (this.history[this.history.length - 1].mask = o.toDataURL(),
                                    this.history[this.history.length - 1].mattingType = this.mattingTypeToolInfo.activeType) : this.initMaskData.baseMaskImg = o.toDataURL(),
                                    this.mergeMask(n.x, n.y),
                                    this.loading = !1;
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                mattingTypeChangeHandler: function(t) {
                    var e = this;
                    if (this.config.image.url)
                        return this.step > -1 ? (this.tipConfig.text = "切换识别类型将清空当前效果，是否确认切换？",
                        this.tipConfig.confirmButtonText = "确定",
                        this.tipConfig.cancelFunction = function() {
                            e.showTipModal = !1
                        }
                        ,
                        this.tipConfig.confirmFunction = function() {
                            e.selecteConfirmHandler(t),
                            e.showTipModal = !1
                        }
                        ,
                        void (this.showTipModal = !0)) : void this.selecteConfirmHandler(t)
                },
                selecteConfirmHandler: function(t) {
                    var e;
                    t ? (this.mattingTypeToolInfo.activeType = t,
                    this.mattingTypeToolInfo.isSelected = !0,
                    e = "people" === t) : (this.mattingTypeToolInfo.isSelected = !this.mattingTypeToolInfo.isSelected,
                    this.mattingTypeToolInfo.activeType = ""),
                    this.triggerTypeSelecteHandler(e)
                },
                triggerTypeSelecteHandler: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (i = this.config.image,
                                    !this.mattingTypeToolInfo.isSelected) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 4,
                                    this.mattingSod({
                                        usePortrait: e
                                    });
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    this.clearMask(),
                                    this.canvasHistory({
                                        brush: this.initMaskData.blankMaskImg,
                                        mask: this.initMaskData.blankMaskImg,
                                        mattingType: ""
                                    }),
                                    this.mergeMask(i.x, i.y);
                                case 9:
                                    this.toolsUsedStatsLogHandler();
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                initResize: function() {
                    var t = this.config
                      , e = t.image
                      , i = t.edit
                      , n = this.initImageSize(e.original_width, e.original_height, i.width, i.height)
                      , a = n.ratio;
                    this.config.image.ratio = this.numberFormat(a),
                    this.config.image.resize_height = this.numberFormat(e.original_height * a),
                    this.config.image.resize_width = this.numberFormat(e.original_width * a),
                    this.imageResizeCenter(),
                    this.rewrite()
                },
                isDisabled: function(t) {
                    return "undo" === t.fun ? this.step < 0 : "redo" === t.fun && this.history.length === this.step + 1
                },
                initMask: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e, i) {
                        var n, a, o, r, s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.config.image,
                                    a = this.getCtx(e),
                                    o = a.c,
                                    r = a.ctx,
                                    r.clearRect(0, 0, o.width, o.height),
                                    !i) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6,
                                    this.getMaskObj(i);
                                case 6:
                                    s = t.sent,
                                    r.drawImage(s, 0, 0, n.resize_width, n.resize_height);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, i) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                initBg: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e = this.getCtx("bg"),
                                    i = e.c,
                                    n = e.ctx,
                                    n.clearRect(0, 0, i.width, i.height),
                                    a = new Image,
                                    a.src = u,
                                    a.onload = function() {
                                        n.drawImage(a, 0, 0, i.width, i.height)
                                    }
                                    ;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                canvasMousedown: function(t, e) {
                    if (this.painting = !0,
                    this.painting && ["daub", "erase"].includes(this.action)) {
                        this.tools.left[this.action].showPanel = !1;
                        var i = this.config
                          , n = i.image
                          , a = i.draw
                          , o = i.edit
                          , r = i.mask;
                        if (!n.url)
                            return;
                        var s = t.clientX - o.left
                          , c = t.clientY - o.top
                          , l = r.width / n.resize_width
                          , u = r.height / n.resize_height
                          , h = {
                            x: this.numberFormat((s - n.x) * l),
                            y: this.numberFormat((c - n.y) * u),
                            size: this.numberFormat(a[this.action].size),
                            action: this.action
                        };
                        this.drawLine(h.x, h.y)
                    }
                    "source" !== e && "result" !== e || (this.mouse.x = t.clientX,
                    this.mouse.y = t.clientY,
                    this.mouse.down = !0)
                },
                canvasMousemove: h((function(t) {
                    var e = this.config
                      , i = e.image
                      , n = e.draw
                      , a = e.edit
                      , o = e.mask;
                    if (["keep", "drop", "daub", "erase"].includes(this.action) && this.sourceImageObj && i.url) {
                        var r = t.clientX - a.left
                          , s = t.clientY - a.top
                          , c = o.width / i.resize_width
                          , l = o.height / i.resize_height;
                        if (this.painting && ["daub", "erase"].includes(this.action)) {
                            var u = {
                                x: this.numberFormat((r - i.x) * c),
                                y: this.numberFormat((s - i.y) * l),
                                size: this.numberFormat(n[this.action].size),
                                action: this.action
                            };
                            this.drawLine(u.x, u.y)
                        } else if (this.painting && ["keep", "drop"].includes(this.action))
                            return this.isInImageArea({
                                x: r,
                                y: s,
                                ix: i.x,
                                iy: i.y,
                                iWidth: i.resize_width,
                                iHeight: i.resize_height
                            }) ? void 0 : void h((function(t) {
                                this.$message.error("不在图片选区内，请点击要抠出的人或物！")
                            }
                            ), 10);
                        this.mergeMask(i.x, i.y, r, s)
                    }
                }
                ), 10),
                cnavasMouseup: function(t) {
                    var e = this.config
                      , i = e.image
                      , n = e.edit;
                    this.painting = !1;
                    var a = t.clientX - n.left
                      , o = t.clientY - n.top;
                    if (["daub", "erase"].includes(this.action)) {
                        this.isInImageArea({
                            x: a,
                            y: o,
                            ix: i.x,
                            iy: i.y,
                            iWidth: i.resize_width,
                            iHeight: i.resize_height
                        }) && (this.toolsUsedStatsLogHandler(),
                        this.canvasHistory());
                        var r = this.getCtx("brush")
                          , s = (r.c,
                        r.ctx);
                        s.beginPath()
                    }
                },
                canvasClick: function(t) {
                    if (["keep", "drop"].includes(this.action)) {
                        var e = this.config
                          , i = e.edit
                          , n = e.image
                          , a = e.draw
                          , o = t.clientX - i.left
                          , r = t.clientY - i.top;
                        this.isInImageArea({
                            x: o,
                            y: r,
                            ix: n.x,
                            iy: n.y,
                            iWidth: n.resize_width,
                            iHeight: n.resize_height
                        }) ? (this.current.push({
                            x: this.numberFormat((o - n.x) / n.ratio),
                            y: this.numberFormat((r - n.y) / n.ratio),
                            size: this.numberFormat(a[this.action].size / n.ratio),
                            action: this.action
                        }),
                        this.toolsUsedStatsLogHandler(),
                        this.canvasHistory(),
                        this.loading = !0,
                        this.callAlgorithm()) : this.$message.error("不在图片选区内，请点击要抠出的人或物！")
                    }
                },
                circleSizeChange: function(t) {
                    var e = ["daub", "erase"];
                    if (e.includes(this.action)) {
                        this.config.image;
                        this.config.draw[this.action].size = t
                    }
                },
                circleBlurChange: function(t) {
                    var e = ["daub", "erase"];
                    if (e.includes(this.action)) {
                        this.config.image;
                        this.config.draw[this.action].blur = t
                    }
                },
                drawLine: function(t, e) {
                    if (this.painting) {
                        var i = this.getCtx("brush")
                          , n = (i.c,
                        i.ctx)
                          , a = this.config
                          , o = a.draw
                          , r = a.image
                          , s = a.mask
                          , c = s.width / r.resize_width
                          , l = s.height / r.resize_height
                          , u = (c + l) / 2;
                        n.strokeStyle = o[this.action].color,
                        n.fillStyle = o[this.action].color,
                        n.lineWidth = o[this.action].size * u,
                        n.shadowBlur = o[this.action].blur,
                        n.shadowColor = o[this.action].color,
                        n.lineCap = "round",
                        n.lineJoin = "round",
                        n.lineTo(t, e),
                        n.stroke(),
                        n.beginPath(),
                        n.arc(t, e, o[this.action].size * u / 2, 0, 2 * Math.PI, !0),
                        n.fill(),
                        n.beginPath(),
                        n.moveTo(t, e),
                        n.stroke(),
                        this.mergeMask(r.x, r.y)
                    }
                },
                mergeMask: function(t, e, i, n) {
                    this.mergeSource(t, e, i, n),
                    this.mergeResult(t, e, i, n),
                    this.drawRedMask(t, e),
                    this.drawLoading = !1,
                    this.loading = !1
                },
                drawRedMask: function(t, e) {
                    var i = this.getCtx("source")
                      , n = (i.c,
                    i.ctx)
                      , a = this.getRedMask()
                      , o = this.config
                      , r = o.image
                      , s = o.mask;
                    n.drawImage(a, 0, 0, s.width, s.height, t, e, r.resize_width, r.resize_height)
                },
                mergeSource: function(t, e, i, n) {
                    var a = this.getCtx("source")
                      , o = a.c
                      , r = a.ctx
                      , s = this.config
                      , c = s.image
                      , l = s.draw;
                    s.mask;
                    r.clearRect(0, 0, o.width, o.height),
                    r.drawImage(this.sourceImageObj, t, e, c.resize_width, c.resize_height),
                    r.globalCompositeOperation = "source-over",
                    i && n && this.drawDot(r, {
                        x: i,
                        y: n,
                        r: l[this.action].size / 2 + l[this.action].blur,
                        color: l[this.action].colorA
                    })
                },
                mergeResult: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e, i, n, a) {
                        var o, r, s, c, l, u, h, d, f;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (o = this.getCtx("result"),
                                    r = o.c,
                                    s = o.ctx,
                                    c = this.config,
                                    l = c.image,
                                    u = c.draw,
                                    c.edit,
                                    h = c.mask,
                                    d = this.resultImageObj,
                                    d) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (s.clearRect(0, 0, r.width, r.height),
                                    f = this.compositeMask(),
                                    s.drawImage(f, 0, 0, h.width, h.height, e, i, l.resize_width, l.resize_height),
                                    s.globalCompositeOperation = "source-out",
                                    s.drawImage(d, e + 1, i + 1, l.resize_width - 2, l.resize_height - 2),
                                    s.globalCompositeOperation = "lighter",
                                    this.isVip || this.drawText(this.config.edit),
                                    n && a) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 14:
                                    this.drawDot(s, {
                                        x: n,
                                        y: a,
                                        r: u[this.action].size / 2 + u[this.action].blur,
                                        color: u[this.action].colorA
                                    });
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, i, n, a) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                rewrite: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    i = JSON.parse(JSON.stringify(this.config.image)),
                                    this.mergeMask(i.x, i.y);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                initResult: function(t, e) {
                    var i = this.getCtx("result")
                      , n = i.c
                      , a = i.ctx
                      , o = this.resultImageObj
                      , r = this.config.image;
                    o && (a.clearRect(0, 0, n.width, n.height),
                    a.drawImage(o, t, e, r.resize_width, r.resize_height),
                    a.globalCompositeOperation = "lighter",
                    this.isVip || this.drawText(this.config.edit))
                },
                getCtx: function(t) {
                    var e = this.$refs[t];
                    return {
                        ctx: e.getContext("2d"),
                        c: e
                    }
                },
                initSource: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a, o, r, s, c, l;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = this.getCtx("source"),
                                    i = e.ctx,
                                    n = e.c,
                                    this.config.image.source = "".concat(this.config.image.url, "?x-image-process=image/auto-orient,0"),
                                    t.next = 4,
                                    this.getImageObj();
                                case 4:
                                    return a = t.sent,
                                    o = this.config.edit,
                                    r = this.initImageSize(a.width, a.height, o.width, o.height),
                                    s = this.config.image = Object.assign(this.config.image, {
                                        ratio: r.ratio,
                                        original_width: a.width,
                                        original_height: a.height,
                                        resize_width: r.width,
                                        resize_height: r.height,
                                        x: this.numberFormat((o.width - r.width) / 2),
                                        y: this.numberFormat((o.height - r.height) / 2)
                                    }),
                                    this.config.mask = {
                                        height: parseInt(s.resize_height),
                                        width: parseInt(s.resize_width)
                                    },
                                    i.clearRect(0, 0, n.width, n.height),
                                    i.drawImage(a, s.x, s.y, s.resize_width, s.resize_height),
                                    this.resultImageObj = a,
                                    this.isVip || this.drawText(this.config.edit),
                                    t.next = 15,
                                    this.initMask("brush");
                                case 15:
                                    c = this.getCtx("brush"),
                                    l = c.c,
                                    this.initMaskData.blankMaskImg = l.toDataURL();
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getMaskObj: function(t) {
                    return new Promise((function(e, i) {
                        var n = new Image;
                        n.setAttribute("crossOrigin", "anonymous"),
                        n.src = t,
                        n.onload = function() {
                            e(n)
                        }
                    }
                    ))
                },
                getImageObj: function() {
                    var t = this;
                    return new Promise((function(e, i) {
                        if (t.sourceImageObj)
                            e(t.sourceImageObj);
                        else if (t.config.image.source) {
                            var n = new Image;
                            n.setAttribute("crossOrigin", "anonymous"),
                            n.src = t.config.image.source,
                            n.onload = function() {
                                t.sourceImageObj = n,
                                e(n)
                            }
                        }
                    }
                    ))
                },
                imageResize: function(t) {
                    var e = this.config.image
                      , i = this.getNextRatio(t, e.ratio);
                    this.config.image.ratio = i,
                    this.config.image.resize_height = e.original_height * i,
                    this.config.image.resize_width = e.original_width * i,
                    this.imageResizeCenter(),
                    this.rewrite()
                },
                imageResizeCenter: function() {
                    var t = this.config
                      , e = t.image
                      , i = t.edit;
                    this.config.image.x = i.width / 2 - e.resize_width / 2,
                    this.config.image.y = i.height / 2 - e.resize_height / 2
                },
                uploadImageButtonClicked: function(t) {
                    this.config.image.openWey = t,
                    this.$track("upload_picture_click", {
                        source: "kt",
                        wey: t,
                        status: this.config.image.url ? 1 : 0
                    })
                },
                uploadImageLoading: function(t) {
                    t && (this.loadingText = "图片上传"),
                    this.loading = !!t
                },
                uploadImageFinish: function(t) {
                    var e = this;
                    this.$track("upload_picture_succeed", {
                        source: "kt",
                        wey: this.config.image.openWey,
                        status: this.config.image.url ? 1 : 0
                    }),
                    this.loadingText = "图片智能识别中",
                    this.drawLoading = !0,
                    Object.keys(this.tools.left).forEach((function(t) {
                        e.tools.left[t].isUsed = !1
                    }
                    )),
                    Object.keys(this.tools.center).forEach((function(t) {
                        e.tools.center[t].isUsed = !1
                    }
                    )),
                    this.uploadImage(t)
                },
                uploadImage: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!(e && e.length > 0)) {
                                        t.next = 14;
                                        break
                                    }
                                    return i = e[e.length - 1],
                                    this.config.image.url = i.url,
                                    this.config.image.key = i.key,
                                    this.sourceImageObj = null,
                                    this.resultImageObj = null,
                                    this.step = -1,
                                    this.history = [],
                                    this.current = [],
                                    this.clearMask(),
                                    t.next = 12,
                                    this.initSource();
                                case 12:
                                    this.initBg(),
                                    this.mattingSod({
                                        isFirst: !0
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                clearMask: function() {
                    for (var t = ["brush", "aimask", "composite", "redMask"], e = 0; e < t.length; e++) {
                        var i = this.getCtx(t[e])
                          , n = i.c
                          , a = i.ctx;
                        a.clearRect(0, 0, n.width, n.height)
                    }
                },
                canvasMousewheel: h((function(t) {
                    var e = this.config.image;
                    if (e.url) {
                        var i = Math.max(-1, Math.min(1, t.wheelDelta || -t.detail))
                          , n = (100 * e.ratio + i) / 100;
                        n < .1 || n > 10 || (this.config.image.ratio = this.numberFormat(n),
                        this.config.image.resize_height = this.numberFormat(e.original_height * n),
                        this.config.image.resize_width = this.numberFormat(e.original_width * n),
                        this.imageResizeCenter(),
                        this.rewrite())
                    }
                }
                ), 10),
                compositeMask: function() {
                    this.config.image;
                    var t = this.getCtx("composite")
                      , e = t.c
                      , i = t.ctx
                      , n = this.$refs.brush
                      , a = this.$refs.aimask;
                    i.clearRect(0, 0, e.width, e.height),
                    i.drawImage(a, 0, 0, e.width, e.height),
                    i.drawImage(n, 0, 0, e.width, e.height);
                    var o = i.getImageData(0, 0, e.width, e.height);
                    return this.filter(o.data),
                    i.putImageData(o, 0, 0),
                    this.testUrl = e.toDataURL(),
                    e
                },
                getRedMask: function() {
                    var t = this.getCtx("composite")
                      , e = t.c
                      , i = (t.ctx,
                    this.getCtx("redMask"))
                      , n = i.c
                      , a = i.ctx;
                    return a.clearRect(0, 0, n.width, n.height),
                    a.drawImage(e, 0, 0),
                    a.globalCompositeOperation = "source-out",
                    a.fillStyle = "rgba(253, 93, 125, 0.6)",
                    a.fillRect(0, 0, n.width, n.height),
                    n
                },
                downloadIamgeBefore: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.$track("picture_download_icon_click", {
                                        source: "kt"
                                    }),
                                    this.config.image,
                                    window.userInfo.id) {
                                        t.next = 5;
                                        break
                                    }
                                    return window.openLogin(),
                                    t.abrupt("return");
                                case 5:
                                    return t.next = 7,
                                    Object(l["k"])();
                                case 7:
                                    if (e = t.sent,
                                    i = e.data,
                                    i.is_vip) {
                                        t.next = 17;
                                        break
                                    }
                                    return this.$track("novip_download_show", {
                                        source: "kt"
                                    }),
                                    this.tipConfig.text = "您使用了会员专属功能，开通会员可下载当前作品",
                                    this.tipConfig.confirmButtonText = "马上开通",
                                    this.tipConfig.cancelFunction = function(t) {
                                        n.showTipModal = !1,
                                        n.$track("novip_download_click", {
                                            source: "kt",
                                            class: "close" === t ? 2 : 0
                                        })
                                    }
                                    ,
                                    this.tipConfig.confirmFunction = function() {
                                        n.$track("novip_download_click", {
                                            source: "kt",
                                            class: 1
                                        }),
                                        window.openVip((function(t) {
                                            t.success && (n.isVip = !0,
                                            n.downloadIamge())
                                        }
                                        )),
                                        n.showTipModal = !1
                                    }
                                    ,
                                    this.showTipModal = !0,
                                    t.abrupt("return");
                                case 17:
                                    this.downloadIamge();
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                downloadIamge: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a, o, r, s, c, l, u, h;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = this.$refs.temp,
                                    i = document.createElement("canvas"),
                                    e.appendChild(i),
                                    n = this.config.image,
                                    i.width = n.original_width,
                                    i.height = n.original_height,
                                    a = i.getContext("2d"),
                                    o = this.resultImageObj,
                                    a.clearRect(0, 0, i.width, i.height),
                                    r = this.compositeMask(),
                                    a.drawImage(r, 0, 0, n.original_width, n.original_height),
                                    a.globalCompositeOperation = "source-out",
                                    a.drawImage(o, 0, 0, n.original_width, n.original_height),
                                    s = i.toDataURL("image/png"),
                                    t.next = 16,
                                    fetch(s);
                                case 16:
                                    return c = t.sent,
                                    t.next = 19,
                                    c.blob();
                                case 19:
                                    l = t.sent,
                                    u = window.URL.createObjectURL(l),
                                    h = document.createElement("a"),
                                    e.appendChild(h),
                                    h.href = u,
                                    h.download = "meitu-".concat((new Date).getTime()),
                                    h.target = "_blank",
                                    h.click(),
                                    e.textContent = "",
                                    this.$track("kt_download_succeed", Object.assign({
                                        source: this.from
                                    }, this.getDownloadStatsLogHandler()));
                                case 29:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getDownloadStatsLogHandler: function() {
                    var t = this
                      , e = {};
                    return Object.keys(this.tools.left).forEach((function(i) {
                        var n = t.tools.left[i];
                        e[n.statsLogClass] = n.isUsed ? 1 : 0
                    }
                    )),
                    Object.keys(this.tools.center).forEach((function(i) {
                        var n = t.tools.center[i];
                        e[n.statsLogClass] = n.isUsed ? 1 : 0
                    }
                    )),
                    e
                },
                handleTools: function(t, e) {
                    var i = this
                      , n = t.tool
                      , a = t.activeKey
                      , o = t.position;
                    "left" === o ? (e || this.$track("kt_subfunction_click", {
                        class: n.statsLogClass
                    }),
                    n.showPanel = !n.showPanel,
                    Object.keys(this.tools.left).forEach((function(t, e) {
                        t === a ? (i.tools.left[t].active = !0,
                        i.action = i.tools.left[t].action,
                        "daub" !== i.action && "erase" !== i.action || (i.config.draw.size = i.config.draw[i.action].size,
                        i.config.draw.blur = i.config.draw[i.action].blur)) : (i.tools.left[t].active = !1,
                        i.tools.left[t].showPanel = !1)
                    }
                    ))) : "center" === o && this[n.fun]()
                },
                actionChange: function(t) {
                    var e = this;
                    this.action = t,
                    Object.keys(this.tools.left).forEach((function(t) {
                        e.tools.left[t].active = !1,
                        e.tools.left[t].showPanel = !1
                    }
                    ))
                },
                canvasHistory: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.step += 1,
                    this.step < this.history.length && (this.history.length = this.step);
                    var e = this.getCtx("brush")
                      , i = e.c
                      , n = i.toDataURL()
                      , a = this.step > 0 ? this.history[this.step - 1].mattingType : this.initMaskData.mattingType
                      , o = {
                        brush: t.brush || n,
                        current: JSON.parse(JSON.stringify(this.current)),
                        mask: t.mask || (this.step > 0 ? this.history[this.step - 1].mask : this.initMaskData.baseMaskImg),
                        mattingType: void 0 !== t.mattingType ? t.mattingType : a
                    };
                    this.history.push(o)
                },
                toolsUsedStatsLogHandler: function() {
                    if (Object.keys(this.tools.left).includes(this.action)) {
                        var t = this.config.draw;
                        if (this.action) {
                            var e = this.tools.left[this.action];
                            e.isUsed = !0;
                            var i = {
                                class: e.statsLogClass,
                                value: ""
                            };
                            if (["daub", "erase"].includes(this.action) && (i.value = "".concat(Math.floor(t[this.action].size), "_").concat(Math.floor(t[this.action].blur))),
                            "type" === this.action) {
                                var n = "";
                                n = this.history.length > 0 && this.step > 0 ? "people" === this.history[this.step - 1].mattingType ? 0 : 1 : "people" === this.initMaskData.mattingType ? 0 : 1;
                                var a = this.mattingTypeToolInfo.isSelected ? 1 : 0;
                                n = this.mattingTypeToolInfo.activeType ? "people" === this.mattingTypeToolInfo.activeType ? 0 : 1 : n,
                                i.value = "".concat(a, "_").concat(n)
                            }
                            this.$track("kt_subfunction_tick", i)
                        }
                    }
                },
                initAIMask: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e = this.getCtx("aimask"),
                                    i = e.c,
                                    n = e.ctx,
                                    n.clearRect(0, 0, i.width, i.height),
                                    n.fillStyle = "#000",
                                    n.fillRect(0, 0, i.width, i.height);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                drawHistoryMask: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, a, o, r, s, c, l, u;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = this.getCtx("brush"),
                                    i = e.c,
                                    n = e.ctx,
                                    a = this.getCtx("aimask"),
                                    o = a.c,
                                    r = a.ctx,
                                    s = this.config.image,
                                    c = {},
                                    this.step < 0 ? (c.mattingType = this.initMaskData.mattingType,
                                    c.mask = this.initMaskData.baseMaskImg,
                                    c.brush = this.initMaskData.blankMaskImg) : (c = this.history[this.step],
                                    c.current.length > 0 && (this.current = c.current)),
                                    this.testUrl = c.mask,
                                    this.mattingTypeToolInfo.activeType = c.mattingType || "",
                                    r.clearRect(0, 0, o.width, o.height),
                                    n.clearRect(0, 0, i.width, i.height),
                                    t.next = 11,
                                    this.getMaskObj(c.mask);
                                case 11:
                                    return l = t.sent,
                                    t.next = 14,
                                    this.getMaskObj(c.brush);
                                case 14:
                                    u = t.sent,
                                    r.drawImage(l, 0, 0, o.width, o.height),
                                    n.drawImage(u, 0, 0, i.width, i.height),
                                    this.mergeMask(s.x, s.y);
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                redo: function() {
                    this.step < this.history.length ? (this.step += 1,
                    this.drawHistoryMask()) : this.$message.error("已经是最新的记录了，无法再继续重做！"),
                    this.$track("revoke_click", {
                        source: "kt",
                        class: "redo"
                    }),
                    this.tools.center.redo.isUsed = !0
                },
                undo: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    this.step -= 1,
                                    this.drawHistoryMask(),
                                    this.$track("revoke_click", {
                                        source: "kt",
                                        class: "revoke"
                                    }),
                                    this.tools.center.undo.isUsed = !0;
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                reset: function() {
                    var t = this
                      , e = this.config.image;
                    this.tipConfig.text = "恢复原图后将清空所有操作记录",
                    this.tipConfig.confirmButtonText = "确定",
                    this.tipConfig.cancelFunction = function(e) {
                        t.showTipModal = !1,
                        t.$track("restore_picture_winclick", {
                            source: "kt",
                            class: "close" === e ? 2 : 0
                        })
                    }
                    ,
                    this.tipConfig.confirmFunction = function() {
                        t.step = -1,
                        t.history = [],
                        t.current = [],
                        t.initMaskData.baseAIMaskImg = t.initMaskData.blankMaskImg,
                        t.initMaskData.baseMaskImg = t.initMaskData.blankMaskImg,
                        t.initMaskData.mattingType = "",
                        t.mattingTypeToolInfo.activeType = "",
                        t.action = "drag",
                        Object.keys(t.tools.left).forEach((function(e) {
                            t.tools.left[e].active = !1,
                            t.tools.left[e].showPanel = !1
                        }
                        )),
                        t.$track("restore_picture_winclick", {
                            source: "kt",
                            class: 1
                        }),
                        t.clearMask(),
                        t.mergeMask(e.x, e.y),
                        t.tools.center.reset.isUsed = !0,
                        t.showTipModal = !1
                    }
                    ,
                    this.$track("revoke_click", {
                        source: "kt",
                        class: "original"
                    }),
                    this.showTipModal = !0,
                    this.$track("restore_picture_winshow ", {
                        source: "kt"
                    })
                },
                initHotKey: function() {
                    var t = this;
                    s["a"].startWatch(this.$refs.matting.$el),
                    s["a"].add(s["b"].general.undo.key, (function() {
                        t.undo()
                    }
                    )),
                    s["a"].add(s["b"].general.redo.key, (function() {
                        t.redo()
                    }
                    ))
                },
                initMouse: function() {
                    var t = this;
                    window.addEventListener("mouseup", (function(e) {
                        if (t.mouse.down && "drag" === t.action) {
                            var i = e.clientX - t.mouse.x
                              , n = e.clientY - t.mouse.y;
                            t.config.image.x = t.numberFormat(t.config.image.x + i),
                            t.config.image.y = t.numberFormat(t.config.image.y + n),
                            t.mouse.y = 0,
                            t.mouse.x = 0
                        }
                        t.mouse.down = !1,
                        t.painting = !1
                    }
                    )),
                    window.addEventListener("mousemove", function() {
                        var e = Object(o["a"])(regeneratorRuntime.mark((function e(i) {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t.mouse.down && "drag" === t.action && t.config.image.url && (n = t.config.image,
                                        a = n.x + (i.clientX - t.mouse.x),
                                        o = n.y + (i.clientY - t.mouse.y),
                                        t.mergeMask(a, o));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }());
                    var e = null
                      , i = !1;
                    window.addEventListener("keydown", (function(n) {
                        "Space" !== n.code || t.mouse.down || i || (i = !0,
                        e = t.action,
                        t.action = "drag",
                        t.rewrite())
                    }
                    )),
                    window.addEventListener("keyup", (function(n) {
                        "Space" === n.code && e && (t.action = e,
                        e = null,
                        i = !1)
                    }
                    ))
                },
                resize: function() {
                    var t = this
                      , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , i = this.$refs.edit;
                    if (this.config.edit = {
                        height: i.offsetHeight,
                        width: (i.offsetWidth - 2) / 2,
                        top: i.offsetTop,
                        left: i.offsetLeft
                    },
                    this.config.image.url)
                        var n = setTimeout((function() {
                            e && t.rewrite(e),
                            clearTimeout(n)
                        }
                        ), 30)
                },
                updateOnlineStatus: function() {
                    navigator.onLine ? this.$message.success("网络已重新连接") : (this.loading = !1,
                    this.drawLoading = !1,
                    this.$message.error("当前网络不可用"))
                }
            }
        }
          , f = i("9dff")
          , g = i("50f2")
          , m = i("cda5")
          , p = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "ToolsPanelModal",
                class: {
                    "show-control-panel": t.showPanelModal
                },
                style: {
                    left: "erase" === t.activeTool.action ? "320px" : "240px"
                }
            }, [i("el-form", {
                attrs: {
                    "label-width": "64px"
                }
            }, [i("el-form-item", {
                staticClass: "control-item",
                attrs: {
                    label: "画笔大小"
                }
            }, [i("el-slider", {
                attrs: {
                    min: 1,
                    max: 100,
                    "show-input": "",
                    "show-input-controls": !1,
                    "show-tooltip": !1,
                    "input-size": "mini"
                },
                on: {
                    change: t.sizeChangeHandler
                },
                model: {
                    value: t.drawInfo.size,
                    callback: function(e) {
                        t.$set(t.drawInfo, "size", e)
                    },
                    expression: "drawInfo.size"
                }
            })], 1), i("el-form-item", {
                staticClass: "control-item",
                attrs: {
                    label: "边缘羽化"
                }
            }, [i("el-slider", {
                attrs: {
                    min: 0,
                    max: 30,
                    "show-input": "",
                    "show-input-controls": !1,
                    "show-tooltip": !1,
                    "input-size": "mini"
                },
                on: {
                    change: t.blurChangeHandler
                },
                model: {
                    value: t.drawInfo.blur,
                    callback: function(e) {
                        t.$set(t.drawInfo, "blur", e)
                    },
                    expression: "drawInfo.blur"
                }
            })], 1)], 1)], 1)
        }
          , w = []
          , v = i("2b0e")
          , b = v["default"].extend({
            props: {
                showPanelModal: {
                    type: Boolean,
                    required: !0
                },
                activeTool: {
                    type: Object,
                    required: !0
                },
                drawInfo: {
                    type: Object,
                    required: !0
                },
                sizeChangeHandler: {
                    type: Function,
                    required: !0
                },
                blurChangeHandler: {
                    type: Function,
                    required: !0
                }
            },
            data() {
                return {}
            }
        })
          , y = b
          , k = (i("4519"),
        i("2877"))
          , x = Object(k["a"])(y, p, w, !1, null, null, null)
          , C = x.exports
          , I = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "ToolsTypeModal",
                class: {
                    "show-modal": t.showTypeModal,
                    disabled: !t.hasData
                }
            }, [i("div", {
                staticClass: "select-title"
            }, [i("div", {
                staticClass: "button",
                class: {
                    selected: t.isSelected
                },
                on: {
                    click: function(e) {
                        return t.itemClicked("")
                    }
                }
            }), i("div", {
                staticClass: "title"
            }, [t._v("自动识别")])]), i("div", {
                staticClass: "select-content"
            }, t._l(t.mattingTypeList, (function(e, n) {
                return i("div", {
                    key: n,
                    staticClass: "select-item",
                    class: {
                        active: e.type === t.activeType
                    },
                    on: {
                        click: function(i) {
                            return t.itemClicked(e.type)
                        }
                    }
                }, [i("div", {
                    staticClass: "select-icon"
                }, [i("svg-icon", {
                    attrs: {
                        "icon-class": e.icon
                    }
                })], 1), i("div", {
                    staticClass: "select-text"
                }, [t._v("\n        " + t._s(e.text) + "\n      ")])])
            }
            )), 0)])
        }
          , T = []
          , M = v["default"].extend({
            data() {
                return {
                    mattingTypeList: [{
                        icon: "kt-portrait",
                        text: "人像",
                        type: "people"
                    }, {
                        icon: "kt-item",
                        text: "物品",
                        type: "item"
                    }]
                }
            },
            props: {
                showTypeModal: {
                    type: Boolean,
                    required: !0
                },
                hasData: {
                    type: Boolean,
                    required: !0
                },
                activeType: {
                    type: String,
                    required: !0
                },
                isSelected: {
                    type: Boolean,
                    required: !0
                },
                itemChangeHandler: {
                    type: Function,
                    required: !0
                }
            },
            methods: {
                async itemClicked(t) {
                    await this.itemChangeHandler(t)
                }
            }
        })
          , z = M
          , O = (i("adad"),
        Object(k["a"])(z, I, T, !1, null, "55db3678", null))
          , S = O.exports
          , R = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "ToolsSection"
            }, [i("div", {
                staticClass: "tools-left"
            }, [i("ul", t._l(t.tools.left, (function(e, n) {
                return i("el-tooltip", {
                    key: n,
                    attrs: {
                        effect: "dark",
                        content: "点击" + e.text,
                        disabled: "daub" === e.action || "erase" === e.action,
                        placement: "bottom"
                    }
                }, [i("li", {
                    ref: n,
                    refInFor: !0,
                    class: e.active && "active",
                    on: {
                        click: function(i) {
                            return t.toolsOnClick({
                                tool: e,
                                activeKey: n,
                                position: "left"
                            })
                        }
                    }
                }, [i("div", {
                    staticClass: "tool-icon-box"
                }, [i("svg-icon", {
                    attrs: {
                        "icon-class": e.icon
                    }
                })], 1), i("span", [t._v(t._s(e.text))])])])
            }
            )), 1)]), i("div", {
                staticClass: "tools-right"
            }, [i("el-link", {
                staticClass: "tools-right-btn",
                attrs: {
                    type: "text"
                }
            }, [i("image-upload", {
                ref: "upload",
                attrs: {
                    accept: "image/png,image/jpeg,image/jpg,image/bmp",
                    type: "matting",
                    size: t.imageLimitSize,
                    open: !0
                },
                on: {
                    loading: t.uploadingImageHandler,
                    finish: t.uploadFinishImageHandler
                }
            }, [i("div", {
                on: {
                    click: function(e) {
                        return t.onUploadImageButtonClick("top_bar")
                    }
                }
            }, [i("p", {
                staticStyle: {
                    height: "36px"
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-upload"
                }
            })], 1), i("span", {
                attrs: {
                    type: "text"
                }
            }, [t._v("上传图片")])])])], 1), i("el-link", {
                staticClass: "tools-right-btn",
                attrs: {
                    type: "text",
                    disabled: t.downloadButtonDisabled
                },
                on: {
                    click: t.downloadIamgeHandler
                }
            }, [i("p", {
                staticStyle: {
                    height: "36px"
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-download"
                }
            })], 1), i("span", [t._v("下载图片")])])], 1), t._t("default")], 2)
        }
          , _ = []
          , j = v["default"].extend({
            components: {
                ImageUpload: g["default"]
            },
            props: {
                tools: {
                    type: Object,
                    required: !0
                },
                toolsOnClick: {
                    type: Function,
                    required: !0
                },
                onUploadImageButtonClick: {
                    type: Function,
                    required: !0
                },
                uploadingImageHandler: {
                    type: Function,
                    required: !0
                },
                uploadFinishImageHandler: {
                    type: Function,
                    required: !0
                },
                downloadIamgeHandler: {
                    type: Function,
                    required: !0
                },
                downloadButtonDisabled: {
                    type: Boolean,
                    required: !0
                }
            },
            data() {
                return {
                    imageLimitSize: 20971520
                }
            },
            methods: {}
        })
          , L = j
          , E = (i("7a3b"),
        Object(k["a"])(L, R, _, !1, null, null, null))
          , A = E.exports
          , F = i("f6db")
          , U = {
            name: "Koutu",
            components: {
                LayoutHeader: f["default"],
                ImageUpload: g["default"],
                TipModal: m["default"],
                ToolsPanelModal: C,
                ToolsTypeModal: S,
                ToolsSection: A
            },
            mixins: [r["a"], d],
            data: function() {
                return {}
            },
            computed: {
                showTypeModal: function() {
                    return "type" === this.action
                },
                activeTool: function() {
                    return this.tools.left[this.action] || {}
                }
            },
            watch: {
                "mattingTypeToolInfo.activeType": function(t) {
                    this.mattingTypeToolInfo.isSelected = !!t
                }
            },
            destroyed: function() {
                window.removeEventListener("resize", this.resize, !1),
                window.onbeforeunload = null
            },
            created: function() {
                var t = this
                  , e = this.$route.query.from;
                this.from = e || "other",
                this.$track("kt_enter", {
                    source: e || "other"
                }),
                window.history.replaceState({}, "", "".concat(window.location.origin).concat(window.location.pathname, "?from=").concat(e || "other", "&current=koutu")),
                window.userInfo.id && Object(l["k"])().then((function(e) {
                    var i = e.data;
                    t.isVip = i.is_vip
                }
                )).catch((function(e) {
                    t.isVip = !1
                }
                )),
                this.$nextTick((function() {
                    window.addEventListener("resize", t.resize),
                    t.resize(!1),
                    t.initBg(t.bg)
                }
                )),
                this.initMouse(),
                window.userInfo.id && (this.isLogin = !0),
                window.onbeforeunload = function(t) {
                    return "此操作将清空所有操作记录，确定离开此页吗？"
                }
                ,
                window.addEventListener("online", this.updateOnlineStatus),
                window.addEventListener("offline", this.updateOnlineStatus)
            },
            mounted: function() {
                var t = this
                  , e = this.config.image;
                this.initHotKey(),
                Object(F["a"])(Object(o["a"])(regeneratorRuntime.mark((function i() {
                    return regeneratorRuntime.wrap((function(i) {
                        while (1)
                            switch (i.prev = i.next) {
                            case 0:
                                return i.next = 2,
                                Object(l["k"])().then((function(e) {
                                    var i = e.data;
                                    t.isVip = i.is_vip,
                                    mtstat.track("account_longinsucess", {
                                        "一级来源": "抠图"
                                    })
                                }
                                )).catch((function(e) {
                                    t.isVip = !1
                                }
                                ));
                            case 2:
                                t.mergeMask(e.x, e.y);
                            case 3:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i)
                }
                )))),
                Object(F["c"])(Object(o["a"])(regeneratorRuntime.mark((function i() {
                    return regeneratorRuntime.wrap((function(i) {
                        while (1)
                            switch (i.prev = i.next) {
                            case 0:
                                return i.next = 2,
                                Object(l["k"])().then((function(e) {
                                    var i = e.data;
                                    t.isVip = i.is_vip
                                }
                                )).catch((function(e) {
                                    t.isVip = !1
                                }
                                ));
                            case 2:
                                t.mergeMask(e.x, e.y);
                            case 3:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i)
                }
                )))),
                Object(F["b"])((function() {
                    t.isVip = !1,
                    t.mergeMask(e.x, e.y)
                }
                ))
            },
            methods: {
                setToolsPostionLeft: function() {
                    var t = this;
                    Object.keys(this.tools.left).forEach((function(e) {
                        t.tools.left[e].positionLeft = t.$refs.tools.$refs[e][0].offsetLeft
                    }
                    ))
                }
            }
        }
          , H = U
          , P = (i("0ddb"),
        i("599d"),
        Object(k["a"])(H, n, a, !1, null, "c13cbb02", null));
        e["default"] = P.exports
    },
    "8a81": function(t, e, i) {
        "use strict";
        var n = i("7726")
          , a = i("69a8")
          , o = i("9e1e")
          , r = i("5ca1")
          , s = i("2aba")
          , c = i("67ab").KEY
          , l = i("79e5")
          , u = i("5537")
          , h = i("7f20")
          , d = i("ca5a")
          , f = i("2b4c")
          , g = i("37c8")
          , m = i("3a72")
          , p = i("d4c0")
          , w = i("1169")
          , v = i("cb7c")
          , b = i("d3f4")
          , y = i("4bf8")
          , k = i("6821")
          , x = i("6a99")
          , C = i("4630")
          , I = i("2aeb")
          , T = i("7bbc")
          , M = i("11e9")
          , z = i("2621")
          , O = i("86cc")
          , S = i("0d58")
          , R = M.f
          , _ = O.f
          , j = T.f
          , L = n.Symbol
          , E = n.JSON
          , A = E && E.stringify
          , F = "prototype"
          , U = f("_hidden")
          , H = f("toPrimitive")
          , P = {}.propertyIsEnumerable
          , D = u("symbol-registry")
          , G = u("symbols")
          , N = u("op-symbols")
          , B = Object[F]
          , W = "function" == typeof L && !!z.f
          , Y = n.QObject
          , q = !Y || !Y[F] || !Y[F].findChild
          , J = o && l((function() {
            return 7 != I(_({}, "a", {
                get: function() {
                    return _(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? function(t, e, i) {
            var n = R(B, e);
            n && delete B[e],
            _(t, e, i),
            n && t !== B && _(B, e, n)
        }
        : _
          , K = function(t) {
            var e = G[t] = I(L[F]);
            return e._k = t,
            e
        }
          , Q = W && "symbol" == typeof L.iterator ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            return t instanceof L
        }
          , X = function(t, e, i) {
            return t === B && X(N, e, i),
            v(t),
            e = x(e, !0),
            v(i),
            a(G, e) ? (i.enumerable ? (a(t, U) && t[U][e] && (t[U][e] = !1),
            i = I(i, {
                enumerable: C(0, !1)
            })) : (a(t, U) || _(t, U, C(1, {})),
            t[U][e] = !0),
            J(t, e, i)) : _(t, e, i)
        }
          , Z = function(t, e) {
            v(t);
            var i, n = p(e = k(e)), a = 0, o = n.length;
            while (o > a)
                X(t, i = n[a++], e[i]);
            return t
        }
          , V = function(t, e) {
            return void 0 === e ? I(t) : Z(I(t), e)
        }
          , $ = function(t) {
            var e = P.call(this, t = x(t, !0));
            return !(this === B && a(G, t) && !a(N, t)) && (!(e || !a(this, t) || !a(G, t) || a(this, U) && this[U][t]) || e)
        }
          , tt = function(t, e) {
            if (t = k(t),
            e = x(e, !0),
            t !== B || !a(G, e) || a(N, e)) {
                var i = R(t, e);
                return !i || !a(G, e) || a(t, U) && t[U][e] || (i.enumerable = !0),
                i
            }
        }
          , et = function(t) {
            var e, i = j(k(t)), n = [], o = 0;
            while (i.length > o)
                a(G, e = i[o++]) || e == U || e == c || n.push(e);
            return n
        }
          , it = function(t) {
            var e, i = t === B, n = j(i ? N : k(t)), o = [], r = 0;
            while (n.length > r)
                !a(G, e = n[r++]) || i && !a(B, e) || o.push(G[e]);
            return o
        };
        W || (L = function() {
            if (this instanceof L)
                throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0)
              , e = function(i) {
                this === B && e.call(N, i),
                a(this, U) && a(this[U], t) && (this[U][t] = !1),
                J(this, t, C(1, i))
            };
            return o && q && J(B, t, {
                configurable: !0,
                set: e
            }),
            K(t)
        }
        ,
        s(L[F], "toString", (function() {
            return this._k
        }
        )),
        M.f = tt,
        O.f = X,
        i("9093").f = T.f = et,
        i("52a7").f = $,
        z.f = it,
        o && !i("2d00") && s(B, "propertyIsEnumerable", $, !0),
        g.f = function(t) {
            return K(f(t))
        }
        ),
        r(r.G + r.W + r.F * !W, {
            Symbol: L
        });
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), at = 0; nt.length > at; )
            f(nt[at++]);
        for (var ot = S(f.store), rt = 0; ot.length > rt; )
            m(ot[rt++]);
        r(r.S + r.F * !W, "Symbol", {
            for: function(t) {
                return a(D, t += "") ? D[t] : D[t] = L(t)
            },
            keyFor: function(t) {
                if (!Q(t))
                    throw TypeError(t + " is not a symbol!");
                for (var e in D)
                    if (D[e] === t)
                        return e
            },
            useSetter: function() {
                q = !0
            },
            useSimple: function() {
                q = !1
            }
        }),
        r(r.S + r.F * !W, "Object", {
            create: V,
            defineProperty: X,
            defineProperties: Z,
            getOwnPropertyDescriptor: tt,
            getOwnPropertyNames: et,
            getOwnPropertySymbols: it
        });
        var st = l((function() {
            z.f(1)
        }
        ));
        r(r.S + r.F * st, "Object", {
            getOwnPropertySymbols: function(t) {
                return z.f(y(t))
            }
        }),
        E && r(r.S + r.F * (!W || l((function() {
            var t = L();
            return "[null]" != A([t]) || "{}" != A({
                a: t
            }) || "{}" != A(Object(t))
        }
        ))), "JSON", {
            stringify: function(t) {
                var e, i, n = [t], a = 1;
                while (arguments.length > a)
                    n.push(arguments[a++]);
                if (i = e = n[1],
                (b(e) || void 0 !== t) && !Q(t))
                    return w(e) || (e = function(t, e) {
                        if ("function" == typeof i && (e = i.call(this, t, e)),
                        !Q(e))
                            return e
                    }
                    ),
                    n[1] = e,
                    A.apply(E, n)
            }
        }),
        L[F][H] || i("32e9")(L[F], H, L[F].valueOf),
        h(L, "Symbol"),
        h(Math, "Math", !0),
        h(n.JSON, "JSON", !0)
    },
    "9dff": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "header"
            }, [i("router-link", {
                attrs: {
                    to: "/",
                    target: "_blank"
                }
            }, [i("div", {
                staticClass: "logo"
            })]), t._t("default"), i("div", {
                staticClass: "user-box"
            }, [i("div", {
                staticClass: "user-con",
                domProps: {
                    innerHTML: t._s(t.userHtml)
                }
            })])], 2)
        }
          , a = []
          , o = i("2b0e")
          , r = i("f6db")
          , s = i("af26")
          , c = o["default"].extend({
            name: "LayoutToolsHead",
            data() {
                return {
                    userHtml: "",
                    userInfo: {
                        avatar: "",
                        isVip: !1
                    }
                }
            },
            mounted() {
                Object(r["g"])(),
                Object(r["d"])(),
                Object(r["h"])(),
                this.getUserInfo()
            },
            methods: {
                getUserInfo() {
                    Object(s["n"])().then(t=>{
                        const {data: e, html: i} = t;
                        window.userInfo = e.userInfo,
                        window.vipInfo = e.vipInfo,
                        this.userHtml = i,
                        Object(r["i"])(i)
                    }
                    ).catch(t=>{
                        this.userHtml = t.html || document.getElementById("j-hidUser").value,
                        window.localStorage.removeItem("access_token"),
                        window.localStorage.removeItem("uid")
                    }
                    )
                }
            }
        })
          , l = c
          , u = (i("0e68"),
        i("2877"))
          , h = Object(u["a"])(l, n, a, !1, null, "9f3b5f30", null);
        e["default"] = h.exports
    },
    a70a: function(t, e, i) {},
    ac4d: function(t, e, i) {
        i("3a72")("asyncIterator")
    },
    adad: function(t, e, i) {
        "use strict";
        i("03b6")
    },
    aed2: function(t, e, i) {},
    c848: function(t, e, i) {
        "use strict";
        i("ac4d"),
        i("8a81"),
        i("5df3"),
        i("1c4c"),
        i("7f7f"),
        i("6b54"),
        i("ac6a"),
        i("6c7b"),
        i("c5f6");
        function n(t, e) {
            var i;
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = a(t)) || e && t && "number" === typeof t.length) {
                    i && (t = i);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, s = !0, c = !1;
            return {
                s: function() {
                    i = t[Symbol.iterator]()
                },
                n: function() {
                    var t = i.next();
                    return s = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    r = t
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (c)
                            throw r
                    }
                }
            }
        }
        function a(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return o(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(t, e) : void 0
            }
        }
        function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        e["a"] = {
            methods: {
                numberFormat: function(t) {
                    return Number(t.toFixed(4))
                },
                getNextRatio: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "in"
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = 100 * e
                      , a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1e3];
                    if ("in" === t) {
                        var o, r = n(a);
                        try {
                            for (r.s(); !(o = r.n()).done; ) {
                                var s = o.value;
                                if (s > i)
                                    return i = s / 100,
                                    i
                            }
                        } catch (h) {
                            r.e(h)
                        } finally {
                            r.f()
                        }
                    } else if ("out" === t) {
                        var c, l = n(a.reverse());
                        try {
                            for (l.s(); !(c = l.n()).done; ) {
                                var u = c.value;
                                if (u < i)
                                    return i = u / 100,
                                    i
                            }
                        } catch (h) {
                            l.e(h)
                        } finally {
                            l.f()
                        }
                    }
                    return i / 100
                },
                initImageSize: function(t, e, i, n) {
                    var a = 1;
                    if (t >= i && e <= n && (a = i / t),
                    t <= i && e >= n && (a = n / e),
                    t > i && e > n) {
                        var o = i / t
                          , r = n / e;
                        a = o < r ? o : r
                    }
                    return a = Math.floor(100 * a) / 100,
                    {
                        width: this.numberFormat(t * a),
                        height: this.numberFormat(e * a),
                        ratio: a
                    }
                },
                drawDot: function(t, e) {
                    var i = e.color
                      , n = void 0 === i ? "" : i
                      , a = e.x
                      , o = void 0 === a ? 0 : a
                      , r = e.y
                      , s = void 0 === r ? 0 : r
                      , c = e.r
                      , l = void 0 === c ? 0 : c
                      , u = e.pi
                      , h = void 0 === u ? 2 * Math.PI : u;
                    t.beginPath(),
                    t.fillStyle = n,
                    t.lineWidth = 2,
                    t.strokeStyle = "rgba(255, 255, 255, 0.75)",
                    t.arc(o, s, l, 0, h),
                    t.fill(),
                    t.stroke()
                },
                drawText: function(t) {
                    var e = this.$refs.bg
                      , i = this.$refs.result
                      , n = i.getContext("2d")
                      , a = n.createPattern(e, "repeat");
                    n.rect(0, 0, t.width, t.height),
                    n.fillStyle = a,
                    n.fill()
                },
                drawClickDots: function(t, e, i, n) {
                    n.forEach((function(n) {
                        var a = n.size * i.ratio;
                        t.beginPath(),
                        t.fillStyle = e[n.action].color,
                        t.arc(i.x + n.x * i.ratio, i.y + n.y * i.ratio, a / 2, 0, 2 * Math.PI),
                        t.fill()
                    }
                    ))
                },
                filter: function(t) {
                    for (var e = 0; e < t.length; e += 4) {
                        var i = t[e]
                          , n = t[e + 1]
                          , a = t[e + 2];
                        [i, n, a].every((function(t) {
                            return t < 256 && t > 250
                        }
                        )) ? t[e + 3] = 0 : a > 0 && (t[e + 3] = 1.3 * (255 - a))
                    }
                },
                filterIAMask: function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250, i = 0; i < t.length; i += 4) {
                        var n = t[i]
                          , a = t[i + 1]
                          , o = t[i + 2];
                        [n, a, o].every((function(t) {
                            return t < 256 && t > e
                        }
                        )) ? t[i + 3] = 0 : t[i + 3] = 255 - o
                    }
                },
                isInImageArea: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        x: 0,
                        y: 0,
                        ix: 0,
                        iy: 0,
                        iWidth: 0,
                        iHeight: 0
                    };
                    return !(t.x < t.ix || t.y < t.iy || t.x > t.ix + t.iWidth || t.y > t.iy + t.iHeight)
                }
            }
        }
    },
    cda5: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "TipModal showMask"
            }, [i("div", {
                staticClass: "content"
            }, [i("div", {
                staticClass: "close",
                on: {
                    click: function(e) {
                        return t.cancelFunction("close")
                    }
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "tip-modal-close"
                }
            })], 1), i("div", {
                staticClass: "icon"
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "tip-modal-icon"
                }
            })], 1), i("div", {
                staticClass: "title"
            }, [t._v("\n      " + t._s(t.title) + "\n    ")]), i("div", {
                staticClass: "text"
            }, [t._v("\n      " + t._s(t.text) + "\n    ")]), i("div", {
                staticClass: "button-box"
            }, [i("div", {
                staticClass: "button cancel-button",
                on: {
                    click: function(e) {
                        return t.cancelFunction("cancel")
                    }
                }
            }, [t._v("\n        " + t._s(t.cancelButtonText) + "\n      ")]), i("div", {
                staticClass: "button confirm-button",
                on: {
                    click: t.confirmFunction
                }
            }, [t._v("\n        " + t._s(t.confirmButtonText) + "\n      ")])])])])
        }
          , a = []
          , o = i("2b0e")
          , r = o["default"].extend({
            props: {
                title: {
                    type: String,
                    default: "温馨提示"
                },
                text: {
                    type: String,
                    required: !0
                },
                confirmButtonText: {
                    type: String,
                    default: "确定"
                },
                cancelButtonText: {
                    type: String,
                    default: "取消"
                },
                cancelFunction: {
                    type: Function,
                    required: !0
                },
                confirmFunction: {
                    type: Function,
                    required: !0
                }
            }
        })
          , s = r
          , c = (i("df8e"),
        i("2877"))
          , l = Object(c["a"])(s, n, a, !1, null, "edcc3d22", null);
        e["default"] = l.exports
    },
    d4c0: function(t, e, i) {
        var n = i("0d58")
          , a = i("2621")
          , o = i("52a7");
        t.exports = function(t) {
            var e = n(t)
              , i = a.f;
            if (i) {
                var r, s = i(t), c = o.f, l = 0;
                while (s.length > l)
                    c.call(t, r = s[l++]) && e.push(r)
            }
            return e
        }
    },
    df8e: function(t, e, i) {
        "use strict";
        i("3c92")
    },
    f1ae: function(t, e, i) {
        "use strict";
        var n = i("86cc")
          , a = i("4630");
        t.exports = function(t, e, i) {
            e in t ? n.f(t, e, a(0, i)) : t[e] = i
        }
    }
}]);
//# sourceMappingURL=chunk-2b1dc28d.189cc1e9.js.map
