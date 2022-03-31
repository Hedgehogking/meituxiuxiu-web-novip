(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6d64e948"], {
    "11fa": function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "image-editor"
            }, [i("div", {
                staticClass: "tools"
            }, [i("div", {
                staticClass: "tools-left"
            }, [i("h2", {
                staticClass: "tools-title"
            }, [t._v("\n        " + t._s(t.title) + "\n      ")])]), i("div", {
                staticClass: "tools-right"
            }, [i("el-link", {
                staticClass: "tools-right-btn",
                attrs: {
                    type: "text"
                }
            }, [i("image-upload", {
                ref: "upload",
                attrs: {
                    accept: "image/png,image/jpeg,image/jpg",
                    type: "matting",
                    size: t.imageSize,
                    open: !0
                },
                on: {
                    loading: t.uploadImageLoading,
                    finish: t.uploadImageFinish,
                    uploadError: t.uploadImageError
                }
            }, [i("p", {
                staticStyle: {
                    padding: "20px 0"
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-upload"
                }
            }), i("span", {
                attrs: {
                    type: "text"
                }
            }, [t._v("上传图片")])], 1)])], 1), i("el-link", {
                staticClass: "tools-right-btn",
                attrs: {
                    type: "text",
                    disabled: !t.resultImageObj
                },
                on: {
                    click: t.downloadIamge
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-download"
                }
            }), i("span", [t._v("下载图片")])], 1)], 1)]), i("div", {
                staticClass: "edit-content"
            }, [i("div", {
                staticClass: "edit-panel"
            }, [t._t("default")], 2), i("div", {
                ref: "edit",
                staticClass: "edit"
            }, [i("canvas", {
                ref: "source",
                style: "cursor:" + (t.mouse.down ? "grabbing" : "grab") + ";z-index: " + (t.zIndex ? 0 : -1),
                attrs: {
                    width: t.config.edit.width,
                    height: t.config.edit.height
                },
                on: {
                    mousedown: function(e) {
                        return t.canvasMousedown(e)
                    },
                    mousewheel: function(e) {
                        return e.preventDefault(),
                        t.canvasMousewheel(e)
                    }
                }
            }), i("canvas", {
                ref: "result",
                style: "cursor:" + (t.mouse.down ? "grabbing" : "grab") + ";z-index: " + (t.zIndex ? -1 : 0),
                attrs: {
                    width: t.config.edit.width,
                    height: t.config.edit.height
                },
                on: {
                    mousedown: function(e) {
                        return t.canvasMousedown(e)
                    },
                    mousewheel: function(e) {
                        return e.preventDefault(),
                        t.canvasMousewheel(e)
                    }
                }
            }), t.resultImageObj ? t._e() : i("div", {
                staticClass: "upload-image"
            }, [i("p", [t._v("请上传图片")]), i("el-button", {
                on: {
                    click: t.handleUpload
                }
            }, [t._v("\n          上传图片\n        ")])], 1)])]), i("div", {
                staticClass: "bg"
            }, [i("canvas", {
                ref: "bg",
                attrs: {
                    width: "100",
                    height: "100"
                }
            })]), i("div", {
                staticClass: "panels"
            }, [i("div", {
                staticClass: "zoom-panel"
            }, [i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "缩小",
                    placement: "top"
                }
            }, [i("el-button", {
                attrs: {
                    icon: "el-icon-zoom-out",
                    type: "text",
                    disabled: !t.resultImageObj
                },
                on: {
                    click: function(e) {
                        return t.imageResize("out")
                    }
                }
            })], 1), i("div", {
                staticClass: "zoom-size",
                on: {
                    mouseover: function(e) {
                        t.hover = !0
                    },
                    mouseout: function(e) {
                        t.hover = !1
                    }
                }
            }, [t.hover ? i("el-button", {
                attrs: {
                    icon: "el-icon-full-screen",
                    type: "text",
                    disabled: !t.resultImageObj
                },
                on: {
                    click: t.initResize
                }
            }) : i("span", {
                staticClass: "font-size"
            }, [t._v(t._s((100 * t.config.image.ratio).toFixed(0)) + "%")])], 1), i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: "放大",
                    placement: "top"
                }
            }, [i("el-button", {
                attrs: {
                    icon: "el-icon-zoom-in",
                    type: "text",
                    disabled: !t.resultImageObj
                },
                on: {
                    click: function(e) {
                        return t.imageResize("in")
                    }
                }
            })], 1)], 1), t.diff ? i("div", {
                staticClass: "tools-panel"
            }, [i("el-tooltip", {
                attrs: {
                    effect: "dark",
                    content: t.zIndex ? "原图" : "效果图",
                    placement: "top"
                }
            }, [i("el-button", {
                attrs: {
                    type: "text",
                    disabled: !t.resultImageObj
                },
                nativeOn: {
                    mousedown: function(e) {
                        t.zIndex = !0
                    },
                    mouseup: function(e) {
                        t.zIndex = !1
                    }
                }
            }, [i("svg-icon", {
                attrs: {
                    "icon-class": "kt-diff"
                }
            }), i("span", {
                staticClass: "font-size"
            }, [t._v("对比")])], 1)], 1)], 1) : t._e()]), i("div", {
                ref: "temp",
                staticClass: "temp"
            })])
        }
          , r = []
          , o = (i("96cf"),
        i("3b8d"))
          , a = (i("28a5"),
        i("50f2"))
          , s = i("c848")
          , c = i("af26")
          , u = function(t, e) {
            var i = !0;
            return function() {
                var n = arguments
                  , r = this;
                i && (i = !1,
                setTimeout((function() {
                    t.apply(r, n),
                    i = !0
                }
                ), e))
            }
        }
          , l = {
            components: {
                ImageUpload: a["default"]
            },
            mixins: [s["a"]],
            props: {
                title: {
                    type: String,
                    default: ""
                },
                source: {
                    type: String,
                    default: ""
                },
                result: {
                    type: String,
                    default: ""
                },
                diff: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    zIndex: !1,
                    hover: !1,
                    sourceImageObj: null,
                    resultImageObj: null,
                    mouse: {
                        down: !1,
                        x: "",
                        y: ""
                    },
                    config: {
                        edit: {
                            height: "",
                            width: "",
                            top: "",
                            left: ""
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
                            key: null
                        }
                    },
                    bg: {
                        font: "20px 黑体",
                        color: "rgba(100, 100, 100, 0.3)",
                        text: "",
                        rotateAngle: "".concat(20 * Math.PI / 160),
                        x: -20,
                        y: 60
                    },
                    isLogin: !1,
                    imageSize: 20971520,
                    isVip: !1
                }
            },
            watch: {
                source: function(t) {
                    this.initSource()
                },
                result: function(t) {
                    var e = this;
                    this.resultImageObj = t.split("}{")[0],
                    window.userInfo.id ? Object(c["k"])().then((function(t) {
                        var i = t.data;
                        e.isVip = i.is_vip,
                        e.initResult()
                    }
                    )).catch((function(t) {
                        e.isVip = !1,
                        e.initResult()
                    }
                    )) : (this.isVip = !1,
                    this.initResult())
                }
            },
            destroyed: function() {
                window.removeEventListener("resize", this.resize, !1)
            },
            created: function() {
                var t = this;
                this.$nextTick((function() {
                    window.addEventListener("resize", t.resize),
                    t.resize(!1),
                    t.initBg(t.bg),
                    t.initMouse()
                }
                ))
            },
            methods: {
                initMouse: function() {
                    var t = this;
                    window.addEventListener("mouseup", (function(e) {
                        if (t.mouse.down) {
                            var i = e.clientX - t.mouse.x
                              , n = e.clientY - t.mouse.y;
                            t.config.image.x = t.numberFormat(t.config.image.x + i),
                            t.config.image.y = t.numberFormat(t.config.image.y + n),
                            t.mouse.y = 0,
                            t.mouse.x = 0
                        }
                        t.mouse.down = !1
                    }
                    )),
                    window.addEventListener("mousemove", (function(e) {
                        if (t.mouse.down && t.config.image.url) {
                            var i = t.config.image
                              , n = i.x + (e.clientX - t.mouse.x)
                              , r = i.y + (e.clientY - t.mouse.y);
                            t.imageSizeChange(n, r)
                        }
                    }
                    ))
                },
                handleUpload: function() {
                    this.$refs.upload.$refs.upload.$refs["upload-inner"].handleClick()
                },
                initResize: function() {
                    var t = this.config
                      , e = t.image
                      , i = t.edit
                      , n = this.initImageSize(e.original_width, e.original_height, i.width, i.height)
                      , r = n.ratio;
                    this.config.image.ratio = this.numberFormat(r),
                    this.config.image.resize_height = this.numberFormat(e.original_height * r),
                    this.config.image.resize_width = this.numberFormat(e.original_width * r),
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
                imageResize: function(t) {
                    var e = this.config.image
                      , i = this.getNextRatio(t, e.ratio);
                    this.config.image.ratio = i,
                    this.config.image.resize_height = e.original_height * i,
                    this.config.image.resize_width = e.original_width * i,
                    this.imageResizeCenter(),
                    this.rewrite()
                },
                getCtx: function(t) {
                    var e = this.$refs[t];
                    return {
                        ctx: e.getContext("2d"),
                        c: e
                    }
                },
                initBg: function(t) {
                    var e = this.getCtx("bg")
                      , i = e.c
                      , n = e.ctx;
                    n.clearRect(0, 0, i.width, i.height),
                    n.font = t.font,
                    n.rotate(-t.rotateAngle),
                    n.fillStyle = t.color,
                    n.fillText(t.text, t.x, t.y),
                    n.rotate(t.rotateAngle)
                },
                resize: function() {
                    var t = this
                      , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , i = this.$refs.edit;
                    if (this.config.edit = {
                        height: i.offsetHeight - 80,
                        width: i.offsetWidth,
                        top: i.offsetTop,
                        left: i.offsetLeft
                    },
                    this.config.image.url)
                        var n = setTimeout((function() {
                            t.imageResizeCenter(),
                            e && t.rewrite(e),
                            clearTimeout(n)
                        }
                        ), 30)
                },
                canvasMousewheel: u((function(t) {
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
                rewrite: function(t) {
                    var e = JSON.parse(JSON.stringify(this.config.image));
                    this.imageSizeChange(e.x, e.y)
                },
                getImageObj: function(t) {
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
                canvasMousedown: function(t) {
                    this.mouse.x = t.clientX,
                    this.mouse.y = t.clientY,
                    this.mouse.down = !0
                },
                imageSizeChange: function(t, e) {
                    this.initSource(t, e),
                    this.initResult(t, e)
                },
                imageInit: function(t, e) {
                    var i = this.config
                      , n = i.edit
                      , r = i.image
                      , o = this.initImageSize("source" === e ? t.width : r.original_width, "source" === e ? t.height : r.original_height, n.width, n.height);
                    this.config.image = Object.assign(this.config.image, {
                        ratio: o.ratio,
                        original_width: "source" === e ? t.width : r.original_width,
                        original_height: "source" === e ? t.height : r.original_height,
                        resize_width: o.width,
                        resize_height: o.height,
                        x: this.numberFormat((n.width - o.width) / 2),
                        y: this.numberFormat((n.height - o.height) / 2)
                    })
                },
                initSource: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e, i) {
                        var n, r, o, a, s, c;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.getCtx("source"),
                                    r = n.c,
                                    o = n.ctx,
                                    e || i) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 4,
                                    this.getImageObj(this.source);
                                case 4:
                                    a = this.sourceImageObj = t.sent,
                                    this.imageInit(a, "source"),
                                    s = this.config.image,
                                    o.clearRect(0, 0, r.width, r.height),
                                    o.drawImage(a, s.x, s.y, s.resize_width, s.resize_height),
                                    t.next = 14;
                                    break;
                                case 11:
                                    c = this.config.image,
                                    o.clearRect(0, 0, r.width, r.height),
                                    o.drawImage(this.sourceImageObj, e, i, c.resize_width, c.resize_height);
                                case 14:
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
                initResult: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e, i) {
                        var n, r, o, a, s, c, u, l, f, h;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.getCtx("result"),
                                    r = n.c,
                                    o = n.ctx,
                                    e || i) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 4,
                                    this.getImageObj(this.resultImageObj);
                                case 4:
                                    a = this.resultImageObj = t.sent,
                                    this.imageInit(a, this.diff ? "result" : "source"),
                                    s = this.config,
                                    c = s.image,
                                    u = s.edit,
                                    o.clearRect(0, 0, r.width, r.height),
                                    o.drawImage(a, c.x, c.y, c.resize_width, c.resize_height),
                                    o.globalCompositeOperation = "lighter",
                                    this.isVip || this.drawText(u),
                                    t.next = 18;
                                    break;
                                case 13:
                                    l = this.config,
                                    f = l.image,
                                    h = l.edit,
                                    o.clearRect(0, 0, r.width, r.height),
                                    o.drawImage(this.resultImageObj, e, i, f.resize_width, f.resize_height),
                                    o.globalCompositeOperation = "lighter",
                                    this.isVip || this.drawText(h);
                                case 18:
                                    this.$emit("loading", !1, "图片渲染");
                                case 19:
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
                uploadImageLoading: function(t) {
                    t ? this.$emit("loading", !0, "图片上传") : this.$emit("loading", !0, "图片渲染")
                },
                uploadImageFinish: function(t) {
                    this.uploadImage(t)
                },
                uploadImageError: function(t) {
                    var e = this
                      , i = setTimeout((function() {
                        e.$emit("loading", !1, "图片渲染"),
                        e.$message.error("图片处理失败"),
                        clearTimeout(i)
                    }
                    ), 500)
                },
                uploadImage: function(t) {
                    if (t && t.length > 0) {
                        var e = t[t.length - 1];
                        this.config.image.url = e.url,
                        this.config.image.key = e.key,
                        this.sourceImageObj = null,
                        this.resultImageObj = null,
                        this.$emit("change", this.config.image.url)
                    }
                },
                downloadIamgeBefore: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (window.userInfo.id) {
                                        t.next = 3;
                                        break
                                    }
                                    return window.openLogin(),
                                    t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    Object(c["k"])();
                                case 5:
                                    if (e = t.sent,
                                    i = e.data,
                                    i.is_vip) {
                                        t.next = 10;
                                        break
                                    }
                                    return this.$confirm("VIP会员功能，开通后可以下载", "提示", {
                                        confirmButtonText: "马上开通",
                                        cancelButtonText: "取消",
                                        type: "info"
                                    }).then((function() {
                                        window.openVip((function(t) {
                                            t.success && (n.isVip = !0,
                                            n.rewrite(),
                                            n.downloadIamge())
                                        }
                                        ), "save")
                                    }
                                    )).catch((function() {
                                        console.info("取消购买")
                                    }
                                    )),
                                    t.abrupt("return");
                                case 10:
                                    this.downloadIamge();
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
                downloadIamge: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, n, r, o, a, s, c, u, l;
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
                                    r = i.getContext("2d"),
                                    o = this.resultImageObj,
                                    r.clearRect(0, 0, i.width, i.height),
                                    r.drawImage(o, 0, 0, n.original_width, n.original_height),
                                    a = i.toDataURL("image/png"),
                                    t.next = 13,
                                    fetch(a);
                                case 13:
                                    return s = t.sent,
                                    t.next = 16,
                                    s.blob();
                                case 16:
                                    c = t.sent,
                                    u = window.URL.createObjectURL(c),
                                    l = document.createElement("a"),
                                    e.appendChild(l),
                                    l.href = u,
                                    l.download = "meitu-".concat((new Date).getTime()),
                                    l.target = "_blank",
                                    l.click(),
                                    e.textContent = "";
                                case 25:
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
                }()
            }
        }
          , f = l
          , h = (i("c87b"),
        i("268c"),
        i("2877"))
          , g = Object(h["a"])(f, n, r, !1, null, "fd75814e", null);
        e["a"] = g.exports
    },
    "1c4c": function(t, e, i) {
        "use strict";
        var n = i("9b43")
          , r = i("5ca1")
          , o = i("4bf8")
          , a = i("1fa8")
          , s = i("33a4")
          , c = i("9def")
          , u = i("f1ae")
          , l = i("27ee");
        r(r.S + r.F * !i("5cc5")((function(t) {
            Array.from(t)
        }
        )), "Array", {
            from: function(t) {
                var e, i, r, f, h = o(t), g = "function" == typeof this ? this : Array, d = arguments.length, m = d > 1 ? arguments[1] : void 0, v = void 0 !== m, p = 0, b = l(h);
                if (v && (m = n(m, d > 2 ? arguments[2] : void 0, 2)),
                void 0 == b || g == Array && s(b))
                    for (e = c(h.length),
                    i = new g(e); e > p; p++)
                        u(i, p, v ? m(h[p], p) : h[p]);
                else
                    for (f = b.call(h),
                    i = new g; !(r = f.next()).done; p++)
                        u(i, p, v ? a(f, m, [r.value, p], !0) : r.value);
                return i.length = p,
                i
            }
        })
    },
    2109: function(t, e, i) {},
    "268c": function(t, e, i) {
        "use strict";
        i("d067")
    },
    "37c8": function(t, e, i) {
        e.f = i("2b4c")
    },
    "3a72": function(t, e, i) {
        var n = i("7726")
          , r = i("8378")
          , o = i("2d00")
          , a = i("37c8")
          , s = i("86cc").f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = o ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            })
        }
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
    "65b2": function(t, e, i) {},
    "67ab": function(t, e, i) {
        var n = i("ca5a")("meta")
          , r = i("d3f4")
          , o = i("69a8")
          , a = i("86cc").f
          , s = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , u = !i("79e5")((function() {
            return c(Object.preventExtensions({}))
        }
        ))
          , l = function(t) {
            a(t, n, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
          , f = function(t, e) {
            if (!r(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, n)) {
                if (!c(t))
                    return "F";
                if (!e)
                    return "E";
                l(t)
            }
            return t[n].i
        }
          , h = function(t, e) {
            if (!o(t, n)) {
                if (!c(t))
                    return !0;
                if (!e)
                    return !1;
                l(t)
            }
            return t[n].w
        }
          , g = function(t) {
            return u && d.NEED && c(t) && !o(t, n) && l(t),
            t
        }
          , d = t.exports = {
            KEY: n,
            NEED: !1,
            fastKey: f,
            getWeak: h,
            onFreeze: g
        }
    },
    "6c7b": function(t, e, i) {
        var n = i("5ca1");
        n(n.P, "Array", {
            fill: i("36bd")
        }),
        i("9c6c")("fill")
    },
    "7bbc": function(t, e, i) {
        var n = i("6821")
          , r = i("9093").f
          , o = {}.toString
          , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , s = function(t) {
            try {
                return r(t)
            } catch (e) {
                return a.slice()
            }
        };
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? s(t) : r(n(t))
        }
    },
    "8a81": function(t, e, i) {
        "use strict";
        var n = i("7726")
          , r = i("69a8")
          , o = i("9e1e")
          , a = i("5ca1")
          , s = i("2aba")
          , c = i("67ab").KEY
          , u = i("79e5")
          , l = i("5537")
          , f = i("7f20")
          , h = i("ca5a")
          , g = i("2b4c")
          , d = i("37c8")
          , m = i("3a72")
          , v = i("d4c0")
          , p = i("1169")
          , b = i("cb7c")
          , w = i("d3f4")
          , y = i("4bf8")
          , x = i("6821")
          , I = i("6a99")
          , _ = i("4630")
          , O = i("2aeb")
          , z = i("7bbc")
          , S = i("11e9")
          , j = i("2621")
          , k = i("86cc")
          , C = i("0d58")
          , R = S.f
          , E = k.f
          , F = z.f
          , T = n.Symbol
          , P = n.JSON
          , $ = P && P.stringify
          , M = "prototype"
          , A = g("_hidden")
          , L = g("toPrimitive")
          , N = {}.propertyIsEnumerable
          , D = l("symbol-registry")
          , U = l("symbols")
          , H = l("op-symbols")
          , V = Object[M]
          , B = "function" == typeof T && !!j.f
          , J = n.QObject
          , W = !J || !J[M] || !J[M].findChild
          , Y = o && u((function() {
            return 7 != O(E({}, "a", {
                get: function() {
                    return E(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? function(t, e, i) {
            var n = R(V, e);
            n && delete V[e],
            E(t, e, i),
            n && t !== V && E(V, e, n)
        }
        : E
          , K = function(t) {
            var e = U[t] = O(T[M]);
            return e._k = t,
            e
        }
          , X = B && "symbol" == typeof T.iterator ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            return t instanceof T
        }
          , G = function(t, e, i) {
            return t === V && G(H, e, i),
            b(t),
            e = I(e, !0),
            b(i),
            r(U, e) ? (i.enumerable ? (r(t, A) && t[A][e] && (t[A][e] = !1),
            i = O(i, {
                enumerable: _(0, !1)
            })) : (r(t, A) || E(t, A, _(1, {})),
            t[A][e] = !0),
            Y(t, e, i)) : E(t, e, i)
        }
          , Q = function(t, e) {
            b(t);
            var i, n = v(e = x(e)), r = 0, o = n.length;
            while (o > r)
                G(t, i = n[r++], e[i]);
            return t
        }
          , q = function(t, e) {
            return void 0 === e ? O(t) : Q(O(t), e)
        }
          , Z = function(t) {
            var e = N.call(this, t = I(t, !0));
            return !(this === V && r(U, t) && !r(H, t)) && (!(e || !r(this, t) || !r(U, t) || r(this, A) && this[A][t]) || e)
        }
          , tt = function(t, e) {
            if (t = x(t),
            e = I(e, !0),
            t !== V || !r(U, e) || r(H, e)) {
                var i = R(t, e);
                return !i || !r(U, e) || r(t, A) && t[A][e] || (i.enumerable = !0),
                i
            }
        }
          , et = function(t) {
            var e, i = F(x(t)), n = [], o = 0;
            while (i.length > o)
                r(U, e = i[o++]) || e == A || e == c || n.push(e);
            return n
        }
          , it = function(t) {
            var e, i = t === V, n = F(i ? H : x(t)), o = [], a = 0;
            while (n.length > a)
                !r(U, e = n[a++]) || i && !r(V, e) || o.push(U[e]);
            return o
        };
        B || (T = function() {
            if (this instanceof T)
                throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0)
              , e = function(i) {
                this === V && e.call(H, i),
                r(this, A) && r(this[A], t) && (this[A][t] = !1),
                Y(this, t, _(1, i))
            };
            return o && W && Y(V, t, {
                configurable: !0,
                set: e
            }),
            K(t)
        }
        ,
        s(T[M], "toString", (function() {
            return this._k
        }
        )),
        S.f = tt,
        k.f = G,
        i("9093").f = z.f = et,
        i("52a7").f = Z,
        j.f = it,
        o && !i("2d00") && s(V, "propertyIsEnumerable", Z, !0),
        d.f = function(t) {
            return K(g(t))
        }
        ),
        a(a.G + a.W + a.F * !B, {
            Symbol: T
        });
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt; )
            g(nt[rt++]);
        for (var ot = C(g.store), at = 0; ot.length > at; )
            m(ot[at++]);
        a(a.S + a.F * !B, "Symbol", {
            for: function(t) {
                return r(D, t += "") ? D[t] : D[t] = T(t)
            },
            keyFor: function(t) {
                if (!X(t))
                    throw TypeError(t + " is not a symbol!");
                for (var e in D)
                    if (D[e] === t)
                        return e
            },
            useSetter: function() {
                W = !0
            },
            useSimple: function() {
                W = !1
            }
        }),
        a(a.S + a.F * !B, "Object", {
            create: q,
            defineProperty: G,
            defineProperties: Q,
            getOwnPropertyDescriptor: tt,
            getOwnPropertyNames: et,
            getOwnPropertySymbols: it
        });
        var st = u((function() {
            j.f(1)
        }
        ));
        a(a.S + a.F * st, "Object", {
            getOwnPropertySymbols: function(t) {
                return j.f(y(t))
            }
        }),
        P && a(a.S + a.F * (!B || u((function() {
            var t = T();
            return "[null]" != $([t]) || "{}" != $({
                a: t
            }) || "{}" != $(Object(t))
        }
        ))), "JSON", {
            stringify: function(t) {
                var e, i, n = [t], r = 1;
                while (arguments.length > r)
                    n.push(arguments[r++]);
                if (i = e = n[1],
                (w(e) || void 0 !== t) && !X(t))
                    return p(e) || (e = function(t, e) {
                        if ("function" == typeof i && (e = i.call(this, t, e)),
                        !X(e))
                            return e
                    }
                    ),
                    n[1] = e,
                    $.apply(P, n)
            }
        }),
        T[M][L] || i("32e9")(T[M], L, T[M].valueOf),
        f(T, "Symbol"),
        f(Math, "Math", !0),
        f(n.JSON, "JSON", !0)
    },
    "8c5b": function(t, e, i) {
        "use strict";
        i("65b2")
    },
    a8f9: function(t, e, i) {},
    ac4d: function(t, e, i) {
        i("3a72")("asyncIterator")
    },
    b0b2: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "header"
            }, [i("el-link", {
                attrs: {
                    href: "/",
                    target: "_blank",
                    "data-internal": "",
                    underline: !1
                }
            }, [i("div", {
                staticClass: "logo"
            })]), i("div", {
                staticClass: "user-box"
            }, [i("div", {
                staticClass: "user-con",
                domProps: {
                    innerHTML: t._s(t.userHtml)
                },
                on: {
                    click: t.sendTrack
                }
            })])], 1)
        }
          , r = []
          , o = i("f6db")
          , a = i("af26")
          , s = {
            name: "LayoutToolsHead",
            data: function() {
                return {
                    userHtml: ""
                }
            },
            mounted: function() {
                Object(o["g"])(),
                Object(o["d"])(),
                Object(o["h"])(),
                this.getUserInfo()
            },
            methods: {
                sendTrack: function() {
                    var t = this.$route.path;
                    -1 !== t.indexOf("/design/koutu") && mtstat.track("account_loginup", {
                        "一级来源": "抠图",
                        "分类": "账户登录"
                    })
                },
                redirectTo: function() {
                    this.$router({
                        name: ""
                    })
                },
                getUserInfo: function() {
                    var t = this;
                    Object(a["n"])().then((function(e) {
                        var i = e.data
                          , n = e.html;
                        window.userInfo = i.userInfo,
                        window.vipInfo = i.vipInfo,
                        t.userHtml = n,
                        Object(o["i"])(n)
                    }
                    )).catch((function(e) {
                        t.userHtml = e.html || document.getElementById("j-hidUser").value,
                        window.localStorage.removeItem("access_token"),
                        window.localStorage.removeItem("uid")
                    }
                    ))
                }
            }
        }
          , c = s
          , u = (i("8c5b"),
        i("bec3"),
        i("2877"))
          , l = Object(u["a"])(c, n, r, !1, null, "c67916f8", null);
        e["a"] = l.exports
    },
    bec3: function(t, e, i) {
        "use strict";
        i("a8f9")
    },
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
                if (Array.isArray(t) || (i = r(t)) || e && t && "number" === typeof t.length) {
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
            var a, s = !0, c = !1;
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
                    a = t
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (c)
                            throw a
                    }
                }
            }
        }
        function r(t, e) {
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
                      , r = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1e3];
                    if ("in" === t) {
                        var o, a = n(r);
                        try {
                            for (a.s(); !(o = a.n()).done; ) {
                                var s = o.value;
                                if (s > i)
                                    return i = s / 100,
                                    i
                            }
                        } catch (f) {
                            a.e(f)
                        } finally {
                            a.f()
                        }
                    } else if ("out" === t) {
                        var c, u = n(r.reverse());
                        try {
                            for (u.s(); !(c = u.n()).done; ) {
                                var l = c.value;
                                if (l < i)
                                    return i = l / 100,
                                    i
                            }
                        } catch (f) {
                            u.e(f)
                        } finally {
                            u.f()
                        }
                    }
                    return i / 100
                },
                initImageSize: function(t, e, i, n) {
                    var r = 1;
                    if (t >= i && e <= n && (r = i / t),
                    t <= i && e >= n && (r = n / e),
                    t > i && e > n) {
                        var o = i / t
                          , a = n / e;
                        r = o < a ? o : a
                    }
                    return r = Math.floor(100 * r) / 100,
                    {
                        width: this.numberFormat(t * r),
                        height: this.numberFormat(e * r),
                        ratio: r
                    }
                },
                drawDot: function(t, e) {
                    var i = e.color
                      , n = void 0 === i ? "" : i
                      , r = e.x
                      , o = void 0 === r ? 0 : r
                      , a = e.y
                      , s = void 0 === a ? 0 : a
                      , c = e.r
                      , u = void 0 === c ? 0 : c
                      , l = e.pi
                      , f = void 0 === l ? 2 * Math.PI : l;
                    t.beginPath(),
                    t.fillStyle = n,
                    t.lineWidth = 2,
                    t.strokeStyle = "rgba(255, 255, 255, 0.75)",
                    t.arc(o, s, u, 0, f),
                    t.fill(),
                    t.stroke()
                },
                drawText: function(t) {
                    var e = this.$refs.bg
                      , i = this.$refs.result
                      , n = i.getContext("2d")
                      , r = n.createPattern(e, "repeat");
                    n.rect(0, 0, t.width, t.height),
                    n.fillStyle = r,
                    n.fill()
                },
                drawClickDots: function(t, e, i, n) {
                    n.forEach((function(n) {
                        var r = n.size * i.ratio;
                        t.beginPath(),
                        t.fillStyle = e[n.action].color,
                        t.arc(i.x + n.x * i.ratio, i.y + n.y * i.ratio, r / 2, 0, 2 * Math.PI),
                        t.fill()
                    }
                    ))
                },
                filter: function(t) {
                    for (var e = 0; e < t.length; e += 4) {
                        var i = t[e]
                          , n = t[e + 1]
                          , r = t[e + 2];
                        [i, n, r].every((function(t) {
                            return t < 256 && t > 250
                        }
                        )) ? t[e + 3] = 0 : r > 0 && (t[e + 3] = 1.3 * (255 - r))
                    }
                },
                filterIAMask: function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250, i = 0; i < t.length; i += 4) {
                        var n = t[i]
                          , r = t[i + 1]
                          , o = t[i + 2];
                        [n, r, o].every((function(t) {
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
    c87b: function(t, e, i) {
        "use strict";
        i("2109")
    },
    d067: function(t, e, i) {},
    d4c0: function(t, e, i) {
        var n = i("0d58")
          , r = i("2621")
          , o = i("52a7");
        t.exports = function(t) {
            var e = n(t)
              , i = r.f;
            if (i) {
                var a, s = i(t), c = o.f, u = 0;
                while (s.length > u)
                    c.call(t, a = s[u++]) && e.push(a)
            }
            return e
        }
    },
    f1ae: function(t, e, i) {
        "use strict";
        var n = i("86cc")
          , r = i("4630");
        t.exports = function(t, e, i) {
            e in t ? n.f(t, e, r(0, i)) : t[e] = i
        }
    }
}]);
//# sourceMappingURL=chunk-6d64e948.c7d81ca2.js.map
