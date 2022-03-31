(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f2b7093c"], {
    "042a": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "layer-seting"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("\n    图片设置\n  ")]), i("div", {
                staticClass: "rotate"
            }, [i("div", {
                staticClass: "rotate-icon-box",
                on: {
                    click: function(t) {
                        return e.layerFlip("x")
                    }
                }
            }, [i("svg-icon", {
                staticClass: "rotate-icon",
                attrs: {
                    "icon-class": "flipHorizontal"
                }
            }), i("div", [e._v("水平翻转")])], 1), i("div", {
                staticClass: "rotate-icon-box",
                on: {
                    click: function(t) {
                        return e.layerFlip("y")
                    }
                }
            }, [i("svg-icon", {
                staticClass: "rotate-icon",
                attrs: {
                    "icon-class": "flipVertical"
                }
            }), i("div", [e._v("垂直翻转")])], 1)]), i("div", {
                staticClass: "rotate-input-box"
            }, [i("div", [e._v("旋转角度")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.rotateInput,
                    expression: "rotateInput",
                    modifiers: {
                        number: !0
                    }
                }],
                staticClass: "rotate-input",
                domProps: {
                    value: e.rotateInput
                },
                on: {
                    blur: [e.inputBlured, function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: [function(t) {
                        t.target.composing || (e.rotateInput = e._n(t.target.value))
                    }
                    , function(t) {
                        e.rotateInput = e.onlyNumber(e.rotateInput)
                    }
                    ],
                    keydown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.inputBlured(t)
                    }
                }
            })]), i("el-slider", {
                staticClass: "rotate-slider",
                style: {
                    "--left": (e.controlFrom.rotate < 0 ? 50 - Math.abs(100 / 180 * e.controlFrom.rotate / 2) : 50) + "%",
                    "--right": (e.controlFrom.rotate > 0 ? 50 - 100 / 180 * e.controlFrom.rotate / 2 : 50) + "%"
                },
                attrs: {
                    "show-tooltip": !1,
                    "show-input-controls": !1,
                    min: -180,
                    max: 180,
                    "input-size": "small"
                },
                on: {
                    change: e.imageRotate
                },
                model: {
                    value: e.controlFrom.rotate,
                    callback: function(t) {
                        e.$set(e.controlFrom, "rotate", t)
                    },
                    expression: "controlFrom.rotate"
                }
            })], 1)
        }
          , s = []
          , n = i("2b0e")
          , o = i("47ce")
          , h = n["default"].extend({
            data() {
                return {
                    flipX: !1,
                    flipY: !1,
                    rotateInput: 0
                }
            },
            computed: {
                store() {
                    return o["a"]
                },
                controlFrom() {
                    return o["a"].controlFrom
                },
                angle() {
                    return o["a"].workspaceOptions.layerList[0] ? Math.round(o["a"].workspaceOptions.layerList[0].angle) : 0
                },
                rotateFrom() {
                    return this.controlFrom.rotate
                }
            },
            watch: {
                angle(e) {
                    this.controlFrom.rotate = e,
                    this.rotateInput = e
                },
                rotateFrom() {
                    this.imageRotate()
                }
            },
            methods: {
                onlyNumber(e) {
                    let t = String(e);
                    const i = t.charAt(0);
                    return t = t.replace(/[^\d\.]/g, ""),
                    "-" === i && (t = "-" + t),
                    t
                },
                layerFlip(e) {
                    this.$track("zjzsj_subfunction_tick", {
                        class: "set_up",
                        value: "rotate"
                    }),
                    this.addAction("rotate"),
                    "x" === e ? this.flipX = !this.flipX : "y" === e && (this.flipY = !this.flipY),
                    this.store.getWorkspace().dispatch({
                        type: "LayerFlip",
                        layerId: this.store.workspaceOptions.layerList[0].id,
                        flipX: this.flipX,
                        flipY: this.flipY
                    })
                },
                inputBlured() {
                    let e = 0;
                    const t = parseInt("" + this.rotateInput);
                    isNaN(t) ? e = this.controlFrom.rotate : (e = t % 360,
                    e < -180 && (e += 360),
                    e > 180 && (e -= 360)),
                    this.rotateInput = e,
                    this.controlFrom.rotate = e
                },
                imageRotate() {
                    this.$track("zjzsj_subfunction_tick", {
                        class: "set_up",
                        value: "angle"
                    }),
                    this.addAction("angle"),
                    this.store.getWorkspace().dispatch({
                        type: "LayerRotationUpdate",
                        layerId: this.store.workspaceOptions.layerList[0].id,
                        angle: this.controlFrom.rotate
                    })
                },
                addAction(e) {
                    this.store.config.imageLayer.setActionList.some(t=>t === e) || this.store.config.imageLayer.setActionList.push(e)
                }
            }
        })
          , r = h
          , m = (i("8679"),
        i("2877"))
          , d = Object(m["a"])(r, a, s, !1, null, "e2cd6f7c", null);
        t["default"] = d.exports
    },
    "0544": function(e, t, i) {
        "use strict";
        i("b80c")
    },
    "0d93": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "download"
            }, [i("div", {
                staticClass: "button",
                class: e.store.uploadUrl ? "" : "no-allow",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.openModal(t)
                    }
                }
            }, [i("svg-icon", {
                staticClass: "icon",
                attrs: {
                    "icon-class": "download"
                }
            }), i("span", {
                staticClass: "text"
            }, [e._v("下载")])], 1), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }]
            }, [i("div", {
                staticClass: "modal",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [i("div", {
                staticClass: "modal-content"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("\n          下载设置\n        ")]), i("el-select", {
                staticClass: "select",
                attrs: {
                    "popper-class": "new-select-v1"
                },
                model: {
                    value: e.downLoadFrom.type,
                    callback: function(t) {
                        e.$set(e.downLoadFrom, "type", t)
                    },
                    expression: "downLoadFrom.type"
                }
            }, [i("el-option", {
                attrs: {
                    label: "JPG",
                    value: "image/jpeg"
                }
            }), i("el-option", {
                attrs: {
                    label: "PNG",
                    value: "image/png"
                }
            })], 1), i("el-select", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "image/jpeg" === e.downLoadFrom.type,
                    expression: "downLoadFrom.type === 'image/jpeg'"
                }],
                staticClass: "select",
                attrs: {
                    "popper-class": "new-select-v1"
                },
                model: {
                    value: e.downLoadFrom.compressionRatio,
                    callback: function(t) {
                        e.$set(e.downLoadFrom, "compressionRatio", t)
                    },
                    expression: "downLoadFrom.compressionRatio"
                }
            }, [e._l(e.compressionRatioList, (function(e, t) {
                return i("el-option", {
                    key: t,
                    attrs: {
                        label: e.name,
                        value: e.value
                    }
                })
            }
            )), i("el-option", {
                attrs: {
                    label: "自定义大小",
                    value: 0
                }
            })], 2), 0 === e.downLoadFrom.compressionRatio ? i("div", {
                staticClass: "custom-box"
            }, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.downLoadFrom.freeCompressionRatio,
                    expression: "downLoadFrom.freeCompressionRatio",
                    modifiers: {
                        number: !0
                    }
                }],
                staticClass: "input",
                attrs: {
                    placeholder: "输入限定大小"
                },
                domProps: {
                    value: e.downLoadFrom.freeCompressionRatio
                },
                on: {
                    blur: [e.freeCompressionRatioBlured, function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: [function(t) {
                        t.target.composing || e.$set(e.downLoadFrom, "freeCompressionRatio", e._n(t.target.value))
                    }
                    , e.freeCompressionRatioInputed]
                }
            }), i("el-select", {
                attrs: {
                    "popper-class": "new-select-v1"
                },
                model: {
                    value: e.downLoadFrom.freeCompressionRatioUnit,
                    callback: function(t) {
                        e.$set(e.downLoadFrom, "freeCompressionRatioUnit", t)
                    },
                    expression: "downLoadFrom.freeCompressionRatioUnit"
                }
            }, [i("el-option", {
                attrs: {
                    label: "KB内",
                    value: "kb"
                }
            }), i("el-option", {
                attrs: {
                    label: "MB内",
                    value: "mb"
                }
            })], 1)], 1) : e._e(), i("div", {
                staticClass: "tip-box"
            }, [i("div", {
                staticClass: "tip"
            }, [i("div", {
                staticClass: "name"
            }, [e._v("\n              尺寸\n            ")]), i("div", [e._v(e._s(e.sizeMmlabel))])]), i("div", {
                staticClass: "tip"
            }, [i("div", {
                staticClass: "name"
            }, [e._v("\n              像素大小\n            ")]), i("div", [e._v(e._s(e.page.width) + "*" + e._s(e.page.height) + "px")])]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "image/png" === e.downLoadFrom.type,
                    expression: "downLoadFrom.type === 'image/png'"
                }],
                staticClass: "tip"
            }, [i("div", {
                staticClass: "name"
            }, [e._v("\n              文件大小\n            ")]), i("div", [e._v(e._s(e.fileOriginalSizePng.toFixed(2)) + "kb")])]), i("div", {
                staticClass: "tip"
            }, [i("div", {
                staticClass: "name"
            }, [e._v("\n              背景颜色\n            ")]), i("div", [e._v("\n              " + e._s(e.backgroundColorName) + "\n              "), e.store.config.backgroundLayer.backgroundColor.value ? e._e() : i("span", [e._v("\n                " + e._s("image/jpeg" === e.downLoadFrom.type ? "（JPG格式不支持透明背景，文件体积较大）" : "（PNG格式支持透明背景，文件体积较大）") + "\n              ")])])])]), i("div", {
                staticClass: "save-button",
                on: {
                    click: e.downloadIamge
                }
            }, [e._v("\n          确认保存\n        ")])], 1)]), i("div", {
                staticClass: "modal-bg",
                on: {
                    click: e.closeModal
                }
            })]), e.tipVisible ? i("TipModal", {
                attrs: {
                    text: "您使用了会员专属功能，开通会员可下载当前作品",
                    cancelButtonText: "取消",
                    confirmButtonText: "马上开通",
                    cancelFunction: e.tipCancelFunction,
                    confirmFunction: e.tipConfirmFunction
                }
            }) : e._e()], 1)
        }
          , s = []
          , n = i("2b0e")
          , o = i("47ce")
          , h = i("af26")
          , r = n["default"].extend({
            components: {
                TipModal: i("cda5").default
            },
            data() {
                return {
                    visible: !1,
                    tipVisible: !1,
                    downLoadFrom: {
                        type: "image/png",
                        compressionRatio: 1,
                        freeCompressionRatio: "",
                        freeCompressionRatioUnit: "kb"
                    },
                    fileOriginalSizePng: 0,
                    fileOriginalSizeJpg: 0,
                    compressionRatioList: [{
                        name: "100%（无压缩，约xxKB）",
                        value: 1
                    }, {
                        name: "90%（约xxKB）",
                        value: .9
                    }, {
                        name: "80%（约xxKB）",
                        value: .8
                    }, {
                        name: "70%（约xxKB）",
                        value: .7
                    }, {
                        name: "60%（约xxKB）",
                        value: .6
                    }]
                }
            },
            computed: {
                store() {
                    return o["a"]
                },
                page() {
                    return o["a"].workspaceOptions.page
                },
                sizeMmlabel() {
                    const e = `${o["a"].workspaceOptions.page.widthLabel}*${o["a"].workspaceOptions.page.heightLabel}`;
                    return "" + e.replace("mm", "")
                },
                isJpgBgNoColor() {
                    return "image/jpeg" === this.downLoadFrom.type && !o["a"].config.backgroundLayer.backgroundColor.value
                },
                backgroundColorName() {
                    return this.isJpgBgNoColor ? "白色" : o["a"].config.backgroundLayer.backgroundColor.name || "自选颜色"
                }
            },
            methods: {
                closeModal() {
                    this.visible = !1,
                    this.reset()
                },
                openModal() {
                    this.store.uploadUrl && (this.$track("picture_download_icon_click", {
                        source: "zjzsj"
                    }),
                    this.visible = !0,
                    this.$track("picture_download_show", {
                        source: "zjzsj"
                    }),
                    this.initSize())
                },
                reset() {
                    this.downLoadFrom = {
                        type: "image/png",
                        compressionRatio: 1,
                        freeCompressionRatio: "",
                        freeCompressionRatioUnit: "kb"
                    },
                    this.fileOriginalSizePng = 0,
                    this.fileOriginalSizeJpg = 0,
                    this.compressionRatioList = [{
                        name: "100%（无压缩，约xxKB）",
                        value: 1
                    }, {
                        name: "90%（约xxKB）",
                        value: .9
                    }, {
                        name: "80%（约xxKB）",
                        value: .8
                    }, {
                        name: "70%（约xxKB）",
                        value: .7
                    }, {
                        name: "60%（约xxKB）",
                        value: .6
                    }]
                },
                freeCompressionRatioBlured() {
                    "" !== this.downLoadFrom.freeCompressionRatio && (this.downLoadFrom.freeCompressionRatio < 1 ? this.downLoadFrom.freeCompressionRatio = 1 : this.downLoadFrom.freeCompressionRatio = Math.floor(this.downLoadFrom.freeCompressionRatio))
                },
                freeCompressionRatioInputed() {
                    const e = this.downLoadFrom.freeCompressionRatio.toString().replace(/[^\d.]/g, "");
                    this.downLoadFrom.freeCompressionRatio = e ? Number(e) : ""
                },
                initSize() {
                    this.fileOriginalSizePng = this.getImgSize(1, "image/png"),
                    this.compressionRatioList.forEach(e=>{
                        setTimeout(()=>{
                            const t = this.getImgSize(e.value, "image/jpeg");
                            1 === e.value && (this.fileOriginalSizeJpg = t),
                            e.name = e.name.replace("xx", t.toFixed(2))
                        }
                        )
                    }
                    )
                },
                getImgSize(e, t) {
                    const i = this.store.getWorkspace().extractImage({
                        imageType: t,
                        quality: e
                    })
                      , a = i.src.split(",")[1].split("=")[0]
                      , s = Number(a.length)
                      , n = Math.floor(s - s / 8 * 2);
                    return n / 1024
                },
                async downloadIamgeBefore() {
                    if (this.$track("zjzsj_download_confirm_click", this.downloadTrackParams()),
                    !window.userInfo.id)
                        return void window.openLogin();
                    const {data: e} = await Object(h["k"])();
                    if (!e.is_vip)
                        return this.$track("novip_download_show", {
                            source: "zjzsj"
                        }),
                        void (this.tipVisible = !0);
                    this.downloadIamge()
                },
                tipConfirmFunction() {
                    this.$track("novip_download_click", {
                        source: "zjzsj",
                        class: "1"
                    }),
                    this.tipVisible = !1,
                    this.$nextTick(()=>{
                        window.openVip(e=>{
                            e.success && this.downloadIamge()
                        }
                        , "save")
                    }
                    )
                },
                tipCancelFunction(e) {
                    this.tipVisible = !1,
                    this.$track("novip_download_click", {
                        source: "zjzsj",
                        class: "cancel" === e ? "0" : "2"
                    }),
                    console.info("取消购买")
                },
                downloadIamge() {
                    let e = 1;
                    if ("image/jpeg" === this.downLoadFrom.type)
                        if (0 === this.downLoadFrom.compressionRatio) {
                            let t = 0;
                            t = "kb" === this.downLoadFrom.freeCompressionRatioUnit ? Number(this.downLoadFrom.freeCompressionRatio) : 1024 * Number(this.downLoadFrom.freeCompressionRatio);
                            const i = parseInt("" + this.fileOriginalSizeJpg);
                            e = t < i ? t / i : 1
                        } else
                            e = this.downLoadFrom.compressionRatio;
                    this.isJpgBgNoColor && this.store.getWorkspace().dispatch({
                        type: "PageBackgroundColorUpdate",
                        colorList: ["#FFFFFF"]
                    });
                    const t = this.store.getWorkspace().extractImage({
                        imageType: this.downLoadFrom.type,
                        quality: e
                    });
                    this.isJpgBgNoColor && this.store.getWorkspace().dispatch({
                        type: "PageBackgroundColorUpdate",
                        colorList: []
                    }),
                    t.onload = ()=>{
                        const e = document.createElement("a");
                        document.body.appendChild(e);
                        const i = "image/jpeg" === this.downLoadFrom.type ? "jpg" : "png";
                        e.download = "screenshot." + i,
                        e.href = t.src,
                        e.click(),
                        document.body.removeChild(e),
                        this.$track("zjzsj_download_succeed", this.downloadTrackParams())
                    }
                },
                downloadTrackParams() {
                    return {
                        format: "image/jpeg" === this.downLoadFrom.type ? "JPG" : "PNG",
                        compress: "image/jpeg" === this.downLoadFrom.type ? "" + (100 * this.downLoadFrom.compressionRatio || "x") : "",
                        background: this.store.config.backgroundLayer.backgroundColor.id,
                        size: `${this.store.config.backgroundLayer.sizeIdStr}_${this.sizeMmlabel}`,
                        set_up: this.store.config.imageLayer.setActionList.join("_")
                    }
                }
            }
        })
          , m = r
          , d = (i("a7f9"),
        i("2877"))
          , l = Object(d["a"])(m, a, s, !1, null, "a0e161f0", null);
        t["default"] = l.exports
    },
    "0e68": function(e, t, i) {
        "use strict";
        i("6187")
    },
    "186c": function(e, t, i) {},
    "1a51": function(e, t, i) {},
    2421: function(e, t, i) {},
    2716: function(e, t, i) {},
    "33fb": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return l
        }
        ));
        var a = i("22a2");
        let s = 0;
        const n = 8430591
          , o = 1
          , h = 2;
        class r {
            constructor(e, t) {
                this.name = "",
                this.imageURL = "",
                this.focused = !1,
                this.locked = !1,
                this.isAlive = !1,
                this.flipX = !1,
                this.flipY = !1,
                this.target = "",
                this.layerOptions = t;
                s += 1,
                this.id = s,
                this.name = "图层" + this.id,
                this.isAlive = !0,
                this.pageEntity = e,
                this.layerContainer = new a["e"],
                this.pageEntity.contentContainer.addChild(this.layerContainer),
                this.layerContainer.position.set(t.x || 0, t.y || 0),
                this.imageContainer = new a["e"],
                this.layerContainer.addChild(this.imageContainer),
                this.imageContainer.x = 0,
                this.imageContainer.y = 0
            }
            getWidth() {
                return this.imageContainer.width
            }
            getHeight() {
                return this.imageContainer.height
            }
            syncToModel() {
                const e = this.pageEntity.workspace.workspaceOptions.layerList.find(e=>e.id === this.id);
                e && Object.assign(e, this.getLayerInfo())
            }
            takeSnapshot() {
                this.prevLayerInfo = this.getLayerInfo()
            }
            async createImage() {
                const e = this.layerOptions;
                this.imageURL = e.spriteURL;
                const t = await this.pageEntity.workspace.getTexture(e.spriteURL)
                  , i = new a["m"](t);
                this.imageContainer.addChild(i),
                this.image = i,
                this.updateImageSettings();
                this.createFrameContainer(),
                this.focusOff(),
                this.enableDragging(this.layerContainer),
                this.prevLayerInfo = this.getLayerInfo()
            }
            updateImageSettings() {
                this.flipX && this.flipY ? (this.image.anchor.x = .5,
                this.image.anchor.y = 1,
                this.image.x = 0,
                this.image.y = -this.image.height / 2,
                this.image.scale.x = -1,
                this.image.scale.y = -1) : !0 === this.flipX ? (this.image.anchor.set(.5),
                this.image.x = 0,
                this.image.y = 0,
                this.image.scale.x = -1,
                this.image.scale.y = 1) : !0 === this.flipY ? (this.image.anchor.x = .5,
                this.image.anchor.y = 1,
                this.image.x = 0,
                this.image.y = -this.image.height / 2,
                this.image.scale.x = 1,
                this.image.scale.y = -1) : (this.image.anchor.set(.5),
                this.image.x = 0,
                this.image.y = 0,
                this.image.scale.x = 1,
                this.image.scale.y = 1)
            }
            getLayerInfo() {
                return {
                    id: this.id,
                    name: this.name,
                    width: this.imageContainer.width,
                    height: this.imageContainer.height,
                    imageURL: this.imageURL,
                    position: {
                        x: this.layerContainer.position.x,
                        y: this.layerContainer.position.y
                    },
                    scale: {
                        x: this.imageContainer.scale.x,
                        y: this.imageContainer.scale.y
                    },
                    angle: this.imageContainer.angle,
                    flipX: this.flipX,
                    flipY: this.flipY
                }
            }
            createRectangle() {
                const e = new a["f"];
                this.rectangle = e,
                this.frameContainer.addChild(e),
                this.updateRectangle()
            }
            createRotater() {
                const e = a["o"].from(i("c41d"))
                  , t = new a["m"](e)
                  , {width: s, height: n} = this.image;
                this.rotater = t,
                t.anchor.set(.5),
                t.width = 32,
                t.height = 32,
                this.updateRotater(),
                this.frameContainer.addChild(t),
                t.interactive = !0,
                t.buttonMode = !0,
                t.on("pointerdown", p).on("pointerup", u).on("pointerupoutside", u).on("pointermove", w);
                const o = this;
                let h = 0
                  , r = 0
                  , m = 0
                  , d = null
                  , l = !1;
                function c(e, t) {
                    const i = Math.atan2(e.y - t.y, e.x - t.x)
                      , a = 180 / Math.PI * i;
                    return a
                }
                function g(e, t) {
                    const i = e - t;
                    return i < 0 ? 360 + i : i
                }
                function p(e) {
                    o.target = "rotater",
                    e.stopPropagation();
                    l = !0,
                    h = o.imageContainer.angle,
                    d = o.imageContainer.toGlobal({
                        x: 0,
                        y: 0
                    }),
                    r = c(e.data.global, d),
                    o.takeSnapshot()
                }
                function u(e) {
                    "rotater" === o.target && (e.stopPropagation(),
                    l = !1,
                    o.target = "",
                    o.pageEntity.workspace.dispatch({
                        type: "LayerRotationUpdate",
                        layerId: o.id,
                        angle: o.imageContainer.angle
                    }))
                }
                function w(e) {
                    if ("rotater" === o.target) {
                        e.stopPropagation();
                        if (l) {
                            m = c(e.data.global, d);
                            const t = g(m, r)
                              , i = h + t;
                            o.updateRotation(i)
                        }
                    }
                }
            }
            updateRotater() {
                this.rotater.x = 0,
                this.rotater.y = this.imageContainer.height / 2 * this.getScale().y + 8 + this.rotater.height / 2
            }
            focusOn() {
                this.pageEntity.unfocusAllLayers();
                const e = this;
                e.focused = !0,
                e.rectangle.visible = !0,
                e.rotater.visible = !0,
                e.leftTopDot.visible = !0,
                e.leftBottomDot.visible = !0,
                e.rightTopDot.visible = !0,
                e.rightBottomDot.visible = !0,
                this.updateFrameContainer(),
                this.pageEntity.workspace.onLayerSelectedCallback && this.pageEntity.workspace.onLayerSelectedCallback(e),
                this.pageEntity.workspace.workspaceOptions.selectedLayerId = this.id
            }
            focusOff() {
                this.focused = !1,
                this.rectangle.visible = !1,
                this.rotater.visible = !1,
                this.leftTopDot.visible = !1,
                this.leftBottomDot.visible = !1,
                this.rightTopDot.visible = !1,
                this.rightBottomDot.visible = !1
            }
            createFrameContainer() {
                const e = new a["e"];
                this.frameContainer = e;
                const {width: t, height: i} = this.image;
                e.width = t,
                e.height = i,
                this.pageEntity.workspace.toolsContainer.addChild(e),
                this.createRectangle(),
                this.createDots(),
                this.createRotater()
            }
            createDots() {
                this.leftTopDot = this.createOneDot("left", "leftTop"),
                this.leftBottomDot = this.createOneDot("left", "leftBottom"),
                this.rightTopDot = this.createOneDot("right", "rightTop"),
                this.rightBottomDot = this.createOneDot("right", "rightBottom"),
                this.updateDotsPosition()
            }
            createOneDot(e, t) {
                const s = a["o"].from(i("5feb"))
                  , n = new a["m"](s);
                return n.anchor.set(.5),
                n.width = 20,
                n.height = 20,
                n.$$side = e,
                this.frameContainer.addChild(n),
                this.enableDotDragging(e, t, n, this.layerContainer, this.image),
                n
            }
            updateDotsPosition() {
                const e = this;
                e.leftTopDot.x = -e.rectangle.width / 2 + 2,
                e.leftTopDot.y = -e.rectangle.height / 2 + 2,
                e.leftBottomDot.x = -e.rectangle.width / 2 + 2,
                e.leftBottomDot.y = e.rectangle.height / 2 + 2,
                e.rightTopDot.x = e.rectangle.width / 2 - 2,
                e.rightTopDot.y = -e.rectangle.height / 2 + 2,
                e.rightBottomDot.x = e.rectangle.width / 2 - 2,
                e.rightBottomDot.y = e.rectangle.height / 2 + 2
            }
            enableDotDragging(e, t, i, a, s) {
                i.interactive = !0,
                "leftTop" !== t && "rightBottom" !== t || (i.cursor = "nwse-resize"),
                "leftBottom" !== t && "rightTop" !== t || (i.cursor = "nesw-resize");
                const n = this;
                function o(e) {
                    n.dotData = {
                        target: "",
                        dragging: !1,
                        currentX: 0
                    },
                    n.target = "dot",
                    e.stopPropagation();
                    n.dotData.dragging = !0,
                    n.dotData.target = t,
                    n.takeSnapshot()
                }
                function h(e) {
                    "dot" === n.target && (e.stopPropagation(),
                    n.dotData.dragging = !1,
                    n.target = "",
                    n.pageEntity.workspace.dispatch({
                        type: "LayerWidthUpdate",
                        layerId: n.id,
                        width: n.imageContainer.width
                    }))
                }
                i.on("pointerdown", o).on("pointerup", h).on("pointerupoutside", h).on("pointermove", (function(e) {
                    if ("dot" === n.target && n.dotData.target === t) {
                        const t = this;
                        if (n.dotData.dragging) {
                            const i = e.data.getLocalPosition(t.parent).x
                              , a = e.currentTarget.$$side;
                            if ("left" === a && i < 0 || "right" === a && i > 0) {
                                const e = Math.abs(2 * i) / n.getScale().x;
                                n.updateWidth(e)
                            }
                        }
                    }
                }
                ))
            }
            updateRectangle() {
                this.rectangle.clear(),
                this.rectangle.lineStyle(this.focused ? h : o, n);
                const {width: e, height: t} = this.imageContainer
                  , i = this.getScale();
                this.rectangle.drawRect(-e / 2 * i.x, -t / 2 * i.y, e * i.x, t * i.y)
            }
            showTools() {
                this.rectangle.visible = !0
            }
            hideTools() {
                this.rectangle.visible = !1
            }
            enableDragging(e) {
                const t = this;
                e.interactive = !0,
                e.buttonMode = !0,
                e.on("mouseover", (function() {
                    !1 === t.focused && (t.updateRectangle(),
                    t.rectangle.visible = !0)
                }
                )).on("mouseout", (function() {
                    !1 === t.focused && (t.rectangle.visible = !1)
                }
                )).on("pointerdown", o).on("pointerup", h).on("pointerupoutside", h).on("pointermove", r);
                let i = 0
                  , a = 0
                  , s = 0
                  , n = 0;
                function o(e) {
                    t.target = "sprite",
                    t.frameContainer.visible = !0,
                    t.focusOn();
                    const o = this;
                    s = this.x,
                    n = this.y;
                    const h = e.data.getLocalPosition(o);
                    i = h.x,
                    a = h.y,
                    t.prevLayerInfo = t.getLayerInfo(),
                    this.dragging = !0
                }
                function h() {
                    this.dragging = !1,
                    this.x === s && this.y === n || t.pageEntity.workspace.dispatch({
                        type: "LayerMove",
                        layerId: t.id,
                        x: t.layerContainer.x,
                        y: t.layerContainer.y
                    })
                }
                function r(e) {
                    const s = this;
                    if (s.dragging) {
                        const n = e.data.getLocalPosition(s.parent)
                          , o = {
                            x: n.x - i,
                            y: n.y - a
                        };
                        t.detectMagnetic(s, o)
                    }
                }
            }
            updateLayerPosition(e, t) {
                this.layerContainer.x = e,
                this.layerContainer.y = t,
                this.updateFrameContainer(),
                this.syncToModel()
            }
            updateWidth(e) {
                const t = this
                  , i = t.image.width / t.image.height;
                t.imageContainer.width = e,
                t.imageContainer.height = e / i,
                t.updateRectangle(),
                t.updateDotsPosition(),
                t.updateRotater(),
                t.syncToModel()
            }
            updateScale(e) {}
            updateRotation(e) {
                const t = this;
                let i = e;
                i > 180 && (i -= 360);
                let a = i;
                t.imageContainer.angle = a,
                t.frameContainer.angle = a,
                this.syncToModel()
            }
            flipImage(e, t) {
                "boolean" === typeof e && (this.flipX = e),
                "boolean" === typeof t && (this.flipY = t),
                this.updateImageSettings(),
                this.syncToModel()
            }
            async updateImage(e) {
                this.imageURL = e;
                const t = this.imageContainer.width
                  , i = await this.pageEntity.workspace.getTexture(e);
                this.image.texture = i,
                this.updateWidth(t),
                this.updateImageSettings(),
                this.updateFrameContainer(),
                this.syncToModel()
            }
            getScale() {
                return this.pageEntity.pageContainer.scale
            }
            detectMagnetic(e, t) {
                let i = t.x
                  , a = t.y;
                this.updateLayerPosition(i, a)
            }
            withinThreshold(e) {
                return e > -10 && e < 10
            }
            updateFrameContainer() {
                const e = this;
                e.frameContainer.x = e.layerContainer.x * e.getScale().x,
                e.frameContainer.y = e.layerContainer.y * e.getScale().y,
                e.updateRectangle(),
                e.updateDotsPosition(),
                e.updateRotater()
            }
        }
        class m {
            constructor(e, t) {
                this.width = 0,
                this.height = 0,
                this.widthLabel = "",
                this.heightLabel = "",
                this.pageBackgroundColor = ["#ffffff"],
                this.layerList = [],
                this.workspace = e,
                this.width = t.width,
                this.height = t.height,
                this.createPageWrapper(),
                this.createPageBackground(),
                this.createPageMask(),
                this.createContentContainer(),
                this.createWatermarkSprite()
            }
            getPageInfo() {
                return {
                    width: this.width,
                    height: this.height,
                    widthLabel: this.widthLabel,
                    heightLabel: this.heightLabel,
                    backgroundColorList: this.pageBackgroundColor
                }
            }
            getWidth() {
                return this.width
            }
            getHeight() {
                return this.height
            }
            getPageScale() {
                return this.pageContainer.scale.x
            }
            syncToModel() {
                const e = this.workspace.workspaceOptions.page;
                Object.assign(e, this.getPageInfo())
            }
            updateBackgroundColor(e) {
                this.pageBackgroundColor = e,
                this.updatePageBackground(),
                this.syncToModel()
            }
            updatePageSize(e, t, i, a) {
                this.width = e,
                this.height = t,
                this.widthLabel = i,
                this.heightLabel = a,
                this.updatePageBackground(),
                this.updatePageMask(),
                this._updateTransparentSprite(),
                this._updateWatermarkSprite(),
                this.workspace.updateToolsContainer(),
                this.syncToModel()
            }
            getLayer(e) {
                let t = null;
                return this.layerList.forEach(i=>{
                    i.id === e && (t = i)
                }
                ),
                t
            }
            createPageWrapper() {
                this.pageWrapper = new a["e"],
                this.workspace.globalContainer.addChild(this.pageWrapper);
                const e = new a["f"];
                e.beginFill(16119285).drawRect(0, 0, 8, 8).drawRect(8, 8, 8, 8).beginFill(15132137).drawRect(8, 0, 8, 8).drawRect(0, 8, 8, 8).endFill();
                const t = this.workspace.app.renderer.generateTexture(e, a["l"].LINEAR, 256);
                this.transparentSprite = new a["p"](t,200,200),
                this.pageWrapper.addChild(this.transparentSprite),
                this.pageContainer = new a["e"],
                this.pageWrapper.addChild(this.pageContainer),
                this.pageContainer.x = 0,
                this.pageContainer.y = 0,
                this._updateTransparentSprite()
            }
            createWatermarkSprite() {
                const e = a["o"].from(i("3d6b"));
                this.watermarkSprite = new a["p"](e,200,200),
                this.watermarkSprite.tileScale.x = .5,
                this.watermarkSprite.tileScale.y = .5,
                this.pageContainer.addChild(this.watermarkSprite),
                setTimeout(()=>{
                    this._updateWatermarkSprite()
                }
                , 1e3)
            }
            _updateWatermarkSprite() {
                const e = this.getWidth()
                  , t = this.getHeight();
                this.watermarkSprite.x = -e / 2,
                this.watermarkSprite.y = -t / 2,
                this.watermarkSprite.width = e,
                this.watermarkSprite.height = t
            }
            _updateTransparentSprite() {
                const e = this.getWidth() * this.pageContainer.scale.x
                  , t = this.getHeight() * this.pageContainer.scale.y;
                this.transparentSprite.x = -e / 2,
                this.transparentSprite.y = -t / 2,
                this.transparentSprite.width = e,
                this.transparentSprite.height = t
            }
            hide(e) {
                "watermark" === e && (this.watermarkSprite.visible = !1)
            }
            show(e) {
                "watermark" === e && (this.watermarkSprite.visible = !0)
            }
            createPageBackground() {
                this.pageBackground = new a["f"],
                this.pageContainer.addChild(this.pageBackground),
                this.updatePageBackground()
            }
            updatePageBackground() {
                if (this.pageBackground.x = 0,
                this.pageBackground.y = 0,
                0 === this.pageBackgroundColor.length)
                    this.pageBackground.clear();
                else if (1 === this.pageBackgroundColor.length)
                    this.pageBackground.clear().beginFill(parseInt(this.pageBackgroundColor[0].replace(/#/, ""), 16)).drawRect(-this.width / 2, -this.height / 2, this.width, this.height).endFill();
                else if (2 === this.pageBackgroundColor.length) {
                    const e = document.createElement("canvas");
                    e.width = this.width,
                    e.height = this.height;
                    const t = e.getContext("2d")
                      , i = t.createLinearGradient(0, 0, 0, this.height);
                    i.addColorStop(0, this.pageBackgroundColor[0]),
                    i.addColorStop(1, this.pageBackgroundColor[1]),
                    t.fillStyle = i,
                    t.fillRect(0, 0, this.width, this.height);
                    const s = a["o"].from(e);
                    this.pageBackground.clear().beginTextureFill({
                        texture: s,
                        matrix: new a["i"](1,0,0,1,this.width / 2,this.height / 2)
                    }).drawRect(-this.width / 2, -this.height / 2, this.width, this.height).endFill()
                }
            }
            createPageMask() {
                this.pageMask = new a["f"],
                this.pageContainer.addChild(this.pageMask),
                this.updatePageMask()
            }
            updatePageMask() {
                this.pageMask.clear().beginFill(16777215).drawRect(-this.width / 2, -this.height / 2, this.width, this.height).endFill(),
                this.pageContainer.mask = this.pageMask
            }
            createContentContainer() {
                this.contentContainer = new a["e"],
                this.pageContainer.addChild(this.contentContainer)
            }
            async createLayer(e) {
                const t = new r(this,e);
                return await t.createImage(),
                this.workspace.workspaceOptions.layerList.push(t.getLayerInfo()),
                this.layerList.push(t),
                t
            }
            unfocusAllLayers() {
                this.layerList.forEach(e=>{
                    e.focusOff()
                }
                ),
                this.workspace.workspaceOptions.selectedLayerId = -1
            }
            changeScale(e, t) {
                this.pageContainer.scale.set(e, t),
                this._updateTransparentSprite(),
                this._updateWatermarkSprite(),
                this.updatePageBackground(),
                this.layerList.forEach(e=>{
                    e.updateFrameContainer()
                }
                ),
                this.workspace.updateToolsContainer()
            }
            zoomIn() {
                let e = this.getPageScale() + .05;
                this.changeScale(e, e)
            }
            zoomOut() {
                let e = this.getPageScale() - .05;
                e < 0 && (e = 0),
                this.changeScale(e, e)
            }
        }
        class d {
            constructor(e) {
                function t() {
                    return {
                        fontSize: 12,
                        fill: d.DIMENSION_TEXT_COLOR,
                        align: "center"
                    }
                }
                this.workspace = e,
                this.dimensionsContainer,
                this.dimensionsContainer = new a["e"],
                this.workspace.toolsContainer.addChild(this.dimensionsContainer),
                this.topDimensionContainer = new a["e"],
                this.dimensionsContainer.addChild(this.topDimensionContainer),
                this.topDimensionGraphics = new a["f"],
                this.topDimensionLabel = new a["n"]("",t()),
                this.topDimensionContainer.addChild(this.topDimensionGraphics, this.topDimensionLabel),
                this.bottomDimensionContainer = new a["e"],
                this.dimensionsContainer.addChild(this.bottomDimensionContainer),
                this.bottomDimensionGraphics = new a["f"],
                this.bottomDimensionLabel = new a["n"]("",t()),
                this.bottomDimensionContainer.addChild(this.bottomDimensionGraphics, this.bottomDimensionLabel),
                this.leftDimensionContainer = new a["e"],
                this.dimensionsContainer.addChild(this.leftDimensionContainer),
                this.leftDimensionGraphics = new a["f"],
                this.leftDimensionLabel = new a["n"]("",t()),
                this.leftDimensionContainer.addChild(this.leftDimensionGraphics, this.leftDimensionLabel),
                this.rightDimensionContainer = new a["e"],
                this.dimensionsContainer.addChild(this.rightDimensionContainer),
                this.rightDimensionGraphics = new a["f"],
                this.rightDimensionLabel = new a["n"]("",t()),
                this.rightDimensionContainer.addChild(this.rightDimensionGraphics, this.rightDimensionLabel),
                this.updateDimensions()
            }
            updateDimensions() {
                const e = this.workspace.pageEntity.getWidth()
                  , t = this.workspace.pageEntity.getHeight()
                  , i = e * this.workspace.pageEntity.pageContainer.scale.x
                  , a = t * this.workspace.pageEntity.pageContainer.scale.y;
                this.topDimensionContainer.x = 0,
                this.topDimensionContainer.y = -a / 2 - 16,
                this.topDimensionGraphics.clear().lineStyle(1, d.DIMENSION_COLOR).moveTo(-i / 2, 0).lineTo(i / 2, 0).moveTo(-i / 2, -4.5).lineTo(-i / 2, 4.5).moveTo(i / 2, -4.5).lineTo(i / 2, 4.5),
                this.topDimensionLabel.text = this.workspace.pageEntity.getPageInfo().widthLabel,
                this.topDimensionLabel.x = -this.topDimensionLabel.width / 2,
                this.topDimensionLabel.y = -14,
                this.bottomDimensionContainer.x = 0,
                this.bottomDimensionContainer.y = a / 2 + 16,
                this.bottomDimensionGraphics.clear().lineStyle(1, d.DIMENSION_COLOR).moveTo(-i / 2, 0).lineTo(i / 2, 0).moveTo(-i / 2, -4.5).lineTo(-i / 2, 4.5).moveTo(i / 2, -4.5).lineTo(i / 2, 4.5),
                this.bottomDimensionLabel.text = e + "px",
                this.bottomDimensionLabel.x = -this.bottomDimensionLabel.width / 2,
                this.bottomDimensionLabel.y = 4,
                this.leftDimensionContainer.x = -i / 2 - 16,
                this.leftDimensionContainer.y = 0,
                this.leftDimensionGraphics.clear().lineStyle(1, d.DIMENSION_COLOR).moveTo(0, -a / 2).lineTo(0, a / 2).moveTo(-4.5, -a / 2).lineTo(4.5, -a / 2).moveTo(-4.5, a / 2).lineTo(4.5, a / 2),
                this.leftDimensionLabel.text = this.workspace.pageEntity.getPageInfo().heightLabel,
                this.leftDimensionLabel.x = -(this.leftDimensionLabel.width + 4),
                this.leftDimensionLabel.y = -8,
                this.rightDimensionContainer.x = i / 2 + 16,
                this.rightDimensionContainer.y = 0,
                this.rightDimensionGraphics.clear().lineStyle(1, d.DIMENSION_COLOR).moveTo(0, -a / 2).lineTo(0, a / 2).moveTo(-4.5, -a / 2).lineTo(4.5, -a / 2).moveTo(-4.5, a / 2).lineTo(4.5, a / 2),
                this.rightDimensionLabel.text = t + "px",
                this.rightDimensionLabel.x = 4,
                this.rightDimensionLabel.y = -8
            }
        }
        d.DIMENSION_COLOR = 11711154,
        d.DIMENSION_TEXT_COLOR = 6710886;
        class l {
            constructor(e, t) {
                this.loader = new a["h"],
                this.htmlElementContainer = e,
                e.onwheel = e=>{
                    e.preventDefault();
                    const t = e.wheelDelta;
                    t > 0 && this.pageEntity.zoomIn(),
                    t < 0 && this.pageEntity.zoomOut()
                }
                ,
                this.workspaceOptions = t,
                this.init(t),
                this.createWorkspaceBackground(),
                this.createGlobalContainer(),
                this.updateGlobalContainer(),
                this.pageEntity = new m(this,{
                    width: 0,
                    height: 0
                }),
                this.createContentAndTools(),
                window.addEventListener("resize", ()=>{
                    this.app.view && this.updateCanvasSize()
                }
                )
            }
            createGlobalContainer() {
                this.globalContainer = new a["e"],
                this.app.stage.addChild(this.globalContainer)
            }
            updateCanvasSize() {
                const e = Number(document.defaultView.getComputedStyle(this.htmlElementContainer).width.replace(/px/, ""))
                  , t = Number(document.defaultView.getComputedStyle(this.htmlElementContainer).height.replace(/px/, ""));
                this.resize(e, t)
            }
            updateGlobalContainer() {
                this.globalContainer.x = this.app.screen.width / 2,
                this.globalContainer.y = this.app.screen.height / 2
            }
            init(e) {
                const t = Number(document.defaultView.getComputedStyle(this.htmlElementContainer).width.replace(/px/, ""))
                  , i = Number(document.defaultView.getComputedStyle(this.htmlElementContainer).height.replace(/px/, ""))
                  , s = new a["b"]({
                    width: t,
                    height: i,
                    antialias: !0,
                    transparent: !0
                });
                this.app = s,
                this.htmlElementContainer.appendChild(s.view)
            }
            resize(e, t) {
                this.app.renderer.resize(e, t),
                this.updateBackground(),
                this.updateGlobalContainer(),
                this.updateAxis(),
                this.updateToolsContainer(),
                this.pageEntity.pageContainer.x = 0,
                this.pageEntity.pageContainer.y = 0
            }
            createWorkspaceBackground() {
                const e = this
                  , t = new a["f"];
                this.background = t,
                this.app.stage.addChild(t),
                this.updateBackground(),
                t.interactive = !0;
                let i = 0
                  , s = 0
                  , n = 0
                  , o = 0
                  , h = !1;
                t.on("pointerdown", (function(t) {
                    e.pageEntity.unfocusAllLayers(),
                    i = t.data.global.x,
                    s = t.data.global.y,
                    h = !0
                }
                )).on("pointermove", (function(t) {
                    if (h) {
                        n = t.data.global.x;
                        const a = n - i
                          , h = e.globalContainer.x + a;
                        h > 0 && h < e.app.screen.width && (e.globalContainer.x = h,
                        i = n),
                        o = t.data.global.y;
                        const r = o - s
                          , m = e.globalContainer.y + r;
                        m > 0 && m < e.app.screen.height && (e.globalContainer.y = m,
                        s = o)
                    }
                }
                )).on("pointeroutside", (function(e) {
                    h = !1
                }
                )).on("pointerup", (function(e) {
                    h = !1
                }
                )),
                window.addEventListener("mouseup", ()=>{
                    h = !1
                }
                )
            }
            updateBackground() {
                if (this.background) {
                    const e = this.app.screen.width
                      , t = this.app.screen.height;
                    this.background.x = this.app.screen.width / 2,
                    this.background.y = this.app.screen.height / 2,
                    this.background.clear(),
                    this.background.beginFill(this.workspaceOptions.background).drawRect(-e / 2, -t / 2, e, t).endFill()
                }
            }
            createAxis() {
                const e = new a["f"];
                this.globalContainer.addChild(e),
                this.axis = e,
                this.updateAxis()
            }
            updateAxis() {
                this.axis && (this.axis.clear(),
                this.axis.lineStyle(1, 16777215),
                this.axis.moveTo(0, 0),
                this.axis.lineTo(0, this.app.screen.height))
            }
            createContentAndTools() {
                this.toolsContainer = new a["e"],
                this.globalContainer.addChild(this.toolsContainer),
                this.dimensionsManager = new d(this),
                this.updateToolsContainer()
            }
            updateToolsContainer() {
                this.toolsContainer.x = 0,
                this.toolsContainer.y = 0,
                this.dimensionsManager.updateDimensions()
            }
            onLayerSelected(e) {
                this.onLayerSelectedCallback = e
            }
            onActionDispatched(e) {
                this.onActionDispatchedCallback = e
            }
            getSelectedLayer() {
                let e = null;
                return this.pageEntity.layerList.forEach(t=>{
                    t.focused && (e = t)
                }
                ),
                e
            }
            async dispatch(e) {
                const t = {
                    action: e
                };
                if ("Initialize" === e.type)
                    return this.pageEntity.updateBackgroundColor(e.model.page.backgroundColorList),
                    void this.pageEntity.updatePageSize(e.model.page.width, e.model.page.height, e.model.page.widthLabel, e.model.page.heightLabel);
                if ("PageBackgroundColorUpdate" === e.type) {
                    const i = this.pageEntity.getPageInfo();
                    t.undoAction = ()=>{
                        this.pageEntity.updateBackgroundColor(i.backgroundColorList)
                    }
                    ,
                    this.pageEntity.updateBackgroundColor(e.colorList)
                }
                if ("PageSizeUpdate" === e.type) {
                    const i = this.pageEntity.getPageInfo();
                    t.undoAction = ()=>{
                        this.pageEntity.updatePageSize(i.width, i.height, i.widthLabel, i.heightLabel)
                    }
                    ,
                    this.pageEntity.updatePageSize(e.width, e.height, e.widthLabel, e.heightLabel)
                }
                if ("LayerCreate" === e.type && !e.layerId) {
                    const t = await this.pageEntity.createLayer({
                        spriteURL: e.spriteURL
                    });
                    e.layerId = t.id
                }
                if ("LayerSelect" === e.type) {
                    const t = this.pageEntity.getLayer(e.layerId);
                    t && t.focusOn()
                }
                if ("LayerMove" === e.type) {
                    const i = this.pageEntity.getLayer(e.layerId);
                    if (i) {
                        const a = i.prevLayerInfo.position.x
                          , s = i.prevLayerInfo.position.y;
                        t.undoAction = ()=>{
                            i.updateLayerPosition(a, s)
                        }
                        ,
                        i.updateLayerPosition(e.x, e.y)
                    }
                }
                if ("LayerWidthUpdate" === e.type) {
                    const i = this.pageEntity.getLayer(e.layerId);
                    if (i) {
                        const a = i.prevLayerInfo.width;
                        t.undoAction = ()=>{
                            i.updateWidth(a)
                        }
                        ,
                        i.updateWidth(e.width)
                    }
                }
                if ("LayerRotationUpdate" === e.type) {
                    const i = this.pageEntity.getLayer(e.layerId);
                    if (i) {
                        const a = i.prevLayerInfo.angle;
                        t.undoAction = ()=>{
                            i.updateRotation(a)
                        }
                        ,
                        i.updateRotation(e.angle)
                    }
                }
                if ("LayerFlip" === e.type) {
                    const i = this.pageEntity.getLayer(e.layerId);
                    if (i) {
                        const a = i.getLayerInfo().flipX
                          , s = i.getLayerInfo().flipY;
                        t.undoAction = ()=>{
                            i.flipImage(a, s)
                        }
                        ,
                        i.flipImage(e.flipX, e.flipY)
                    }
                }
                if ("LayerSpriteUpate" === e.type) {
                    const i = this.pageEntity.getLayer(e.layerId);
                    if (i) {
                        const a = i.getLayerInfo().imageURL;
                        t.undoAction = async()=>{
                            await i.updateImage(a)
                        }
                        ,
                        await i.updateImage(e.spriteURL)
                    }
                }
                if ("LayerFlip" === e.type) {
                    const e = this.getSelectedLayer();
                    e && e.flipImage()
                }
                const i = this.workspaceOptions.actionList.map(e=>e.action).indexOf(e);
                i > -1 || (this.workspaceOptions.actionCursor !== this.workspaceOptions.actionList.length - 1 && (this.workspaceOptions.actionList.length = this.workspaceOptions.actionCursor + 1),
                this.workspaceOptions.actionList.push(t),
                this.workspaceOptions.actionCursor = this.workspaceOptions.actionList.length - 1)
            }
            redoNextStep() {
                if (this.workspaceOptions.actionList[this.workspaceOptions.actionCursor + 1]) {
                    this.workspaceOptions.actionCursor += 1;
                    const e = this.workspaceOptions.actionList[this.workspaceOptions.actionCursor];
                    this.dispatch(e.action)
                } else
                    console.warn("No next step")
            }
            undoStep() {
                if (this.workspaceOptions.actionCursor > -1) {
                    const e = this.workspaceOptions.actionList[this.workspaceOptions.actionCursor];
                    e.undoAction && e.undoAction(),
                    this.workspaceOptions.actionCursor -= 1
                } else
                    console.warn("No prev step")
            }
            recordAction(e) {}
            extractImage({imageType: e, quality: t}) {
                const i = new a["d"]({
                    width: this.pageEntity.getWidth(),
                    height: this.pageEntity.getHeight()
                })
                  , s = new a["k"](i);
                this.app.renderer.render(this.pageEntity.pageContainer, s, !1, new a["i"](1 / this.pageEntity.getPageScale(),0,0,1 / this.pageEntity.getPageScale(),this.pageEntity.getWidth() / 2,this.pageEntity.getHeight() / 2));
                const n = this.app.renderer.plugins.extract.image(s, e, t);
                return n
            }
            load(e) {
                return this.loader.resources[e] && this.loader.resources[e].isComplete ? Promise.resolve() : new Promise(t=>{
                    this.loader.add(e).load(()=>{
                        t()
                    }
                    )
                }
                )
            }
            async getTexture(e) {
                return await this.load(e),
                a["o"].from(e)
            }
        }
    },
    "3c92": function(e, t, i) {},
    "3d6b": function(e, t, i) {
        e.exports = i.p + "img/watermark.png"
    },
    "3d8a": function(e, t, i) {
        "use strict";
        i("5024")
    },
    4605: function(e, t, i) {
        e.exports = i.p + "img/bear.7f395cb7.png"
    },
    "46e4": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                ref: "container",
                staticClass: "LicensePhoto"
            })
        }
          , s = []
          , n = i("2b0e")
          , o = i("33fb")
          , h = i("47ce")
          , r = n["default"].extend({
            computed: {
                store() {
                    return h["a"]
                }
            },
            mounted() {
                const e = new Image;
                e.src = this.store.uploadUrl,
                e.onload = async()=>{
                    const {width: t, height: i} = e
                      , a = {
                        id: "2",
                        value: "#FFFFFF",
                        name: "白"
                    };
                    this.store.config.backgroundLayer.backgroundColor = a,
                    this.$track("zjzsj_subfunction_tick", {
                        class: "background",
                        value: a.id
                    }),
                    this.store.config.imageLayer.originalWidth = t,
                    this.store.config.imageLayer.originalHeight = i;
                    const s = new o["a"](this.$refs.container,this.store.workspaceOptions);
                    this.store.workspace = s,
                    s.dispatch({
                        type: "Initialize",
                        model: {
                            page: {
                                width: t,
                                height: i,
                                widthLabel: Math.ceil(t / this.store.dpi * this.store.conversionUnitMap.mm) + "mm",
                                heightLabel: Math.ceil(i / this.store.dpi * this.store.conversionUnitMap.mm) + "mm",
                                backgroundColorList: [a.value]
                            },
                            layerList: []
                        }
                    }),
                    await s.dispatch({
                        type: "LayerCreate",
                        spriteURL: this.store.uploadUrl
                    }),
                    await s.dispatch({
                        type: "LayerSelect",
                        layerId: this.store.workspaceOptions.layerList[0].id
                    }),
                    this.store.changeWatermark()
                }
            }
        })
          , m = r
          , d = (i("3d8a"),
        i("2877"))
          , l = Object(d["a"])(m, a, s, !1, null, "1cc93c06", null);
        t["default"] = l.exports
    },
    "47ce": function(e, t, i) {
        "use strict";
        var a = i("2b0e");
        const s = [{
            id: "a",
            name: "普通寸照",
            type: 1,
            detailList: [{
                name: "一寸",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "二寸",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "大一寸",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "小一寸",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "大二寸",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "小二寸",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "三寸",
                size: "55*84mm",
                width: 650,
                height: 992
            }, {
                name: "四寸",
                size: "76*100mm",
                width: 898,
                height: 1181
            }, {
                name: "五寸",
                size: "89*127mm",
                width: 1050,
                height: 1500
            }]
        }, {
            id: "c",
            name: "学历考试",
            detailList: [{
                name: "英语专业四八级考试",
                size: "25*35mm",
                width: 295,
                height: 423
            }, {
                name: "英语四六级考试",
                size: "10*14mm",
                width: 144,
                height: 192
            }, {
                name: "全国计算机等级考试",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "专升本报名电子照",
                size: "40*54mm",
                width: 480,
                height: 640
            }, {
                name: "研究生网报照",
                size: "45*60mm",
                width: 531,
                height: 709
            }, {
                name: "毕业生图像信息采集",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "毕业学历照片",
                size: "26*34mm",
                width: 480,
                height: 640
            }, {
                name: "在职研究生考试",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "自考专升本（河南）",
                size: "15*20mm",
                width: 180,
                height: 240
            }, {
                name: "自考专升本（甘肃）",
                size: "30*40mm",
                width: 320,
                height: 480
            }, {
                name: "自考专升本（陕西）",
                size: "30*40mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（青海）",
                size: "35*46mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（宁夏）",
                size: "35*46mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（新疆）",
                size: "33*43mm",
                width: 384,
                height: 512
            }, {
                name: "自考专升本（北京）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "自考专升本（天津）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "自考专升本（河北）",
                size: "33*48mm",
                width: 455,
                height: 661
            }, {
                name: "自考专升本（山西）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "自考专升本（辽宁）",
                size: "33*48mm",
                width: 455,
                height: 661
            }, {
                name: "自考专升本（吉林）",
                size: "30*40mm",
                width: 413,
                height: 551
            }, {
                name: "自考专升本（黑龙江）",
                size: "28*37mm",
                width: 384,
                height: 512
            }, {
                name: "自考专升本（上海）",
                size: "76*100mm",
                width: 650,
                height: 850
            }, {
                name: "自考专升本（江苏）",
                size: "30*40mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（浙江）",
                size: "35*53mm",
                width: 400,
                height: 600
            }, {
                name: "自考专升本（安徽）",
                size: "11*14mm",
                width: 144,
                height: 192
            }, {
                name: "自考专升本（福建）",
                size: "26*35mm",
                width: 360,
                height: 480
            }, {
                name: "自考专升本（江西）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "自考专升本（山东）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "自考专升本（湖南）",
                size: "24*33mm",
                width: 288,
                height: 384
            }, {
                name: "自考专升本（湖北）",
                size: "11*15mm",
                width: 151,
                height: 201
            }, {
                name: "自考专升本（广东）",
                size: "42*48mm",
                width: 579,
                height: 661
            }, {
                name: "自考专升本（广西）",
                size: "24*33mm",
                width: 288,
                height: 384
            }, {
                name: "自考专升本（重庆）",
                size: "30*40mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（四川）",
                size: "30*40mm",
                width: 360,
                height: 480
            }, {
                name: "自考专升本（贵州）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "自考专升本（云南）",
                size: "40*54mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（西藏）",
                size: "30*40mm",
                width: 480,
                height: 640
            }, {
                name: "自考专升本（384x512px） ",
                size: "33*43mm",
                width: 384,
                height: 512
            }, {
                name: "研究生考试（宽高比例3:4）",
                size: "40*54mm",
                width: 480,
                height: 640
            }, {
                name: "学历提升网报照片（384*512px）",
                size: "32*43mm",
                width: 384,
                height: 512
            }, {
                name: "厦大研究生图像采集（150*210px）",
                size: "33*48mm",
                width: 150,
                height: 210
            }, {
                name: "成人高考（413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "成人高考（河南）",
                size: "30*40mm",
                width: 360,
                height: 480
            }, {
                name: "成人高考（482*730px）",
                size: "35*53mm",
                width: 482,
                height: 730
            }, {
                name: "毕业学历照片",
                size: "26*35mm",
                width: 480,
                height: 640
            }, {
                name: "高考报名照片",
                size: "48*33mm",
                width: 640,
                height: 480
            }, {
                name: "学历证书照",
                size: "33*48mm",
                width: 389,
                height: 566
            }, {
                name: "毕业证（中小学）",
                size: "23*30mm",
                width: 272,
                height: 354
            }, {
                name: "毕业证（成人教学）",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "毕业照（大学）",
                size: "35*49mm",
                width: 413,
                height: 578
            }, {
                name: "毕业照（高中）",
                size: "35*49mm",
                width: 413,
                height: 578
            }, {
                name: "毕业照（初中）",
                size: "35*49mm",
                width: 413,
                height: 578
            }, {
                name: "学生照（中小学）",
                size: "26*32mm",
                width: 307,
                height: 377
            }, {
                name: "幼升小报名",
                size: "23*30mm",
                width: 272,
                height: 354
            }, {
                name: "自主招生考试",
                size: "32*43mm",
                width: 383,
                height: 512
            }, {
                name: "艺考报名照片",
                size: "35*49mm",
                width: 413,
                height: 625
            }]
        }, {
            id: "d",
            name: "职业资格",
            detailList: [{
                name: "护士执业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "初级会计资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "初中级经济师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国计算机等级考试（413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "全国计算机等级考试（144*192px）",
                size: "33*49mm",
                width: 144,
                height: 192
            }, {
                name: "保安员证",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "教师资格认定（湖南）",
                size: "26*37mm",
                width: 307,
                height: 437
            }, {
                name: "在职教师定期注册",
                size: "25*35mm",
                width: 300,
                height: 418
            }, {
                name: "中小学教师资格证",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国导游资格",
                size: "25*35mm",
                width: 285,
                height: 413
            }, {
                name: "一级注册消防工程师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "事业单位考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "执业兽医资格考试报名",
                size: "33*48mm",
                width: 230,
                height: 334
            }, {
                name: "大数据工程师报名",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "全国医用设备使用人员业务能力考评",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "中小学教师资格证（北京）",
                size: "15*20mm",
                width: 150,
                height: 200
            }, {
                name: "社会工作者职业水平考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册城乡规划师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国勘察设计注册工程师职业资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "出版专业技术人员职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册设备监理师执业资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "出租车驾驶员从业资格考试（网约车）",
                size: "22*27mm",
                width: 250,
                height: 307
            }, {
                name: "全国房地产经纪人职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "中小学教师资格证（河北）",
                size: "13*17mm",
                width: 150,
                height: 200
            }, {
                name: "法律职业资格考试（法考：413*626px）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "演出经纪人资格证",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "律师专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "档案专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "计算机技术与转件专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "医药行业中初级专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "通信考试（辽宁）",
                size: "11*13mm",
                width: 130,
                height: 160
            }, {
                name: "注册土木工程师（道路工程）资格证",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册土木工程师（港口与航道工程）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册土木工程师（水利水电工程）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "银行从业资格考试网报照片",
                size: "25*35mm",
                width: 591,
                height: 827
            }, {
                name: "健康管理证",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "健康管理证（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "注册环保工程资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "招标师职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "经济专业技术资格（初、中级）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "通信专业技术人员职业水平考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册建筑师资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册核安全工程师职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册化工工程师资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册公用设备工程师资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册电气工程师资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "警官证",
                size: "34*45mm",
                width: 401,
                height: 531
            }, {
                name: "人力资源管理师",
                size: "35*49mm",
                width: 413,
                height: 578
            }, {
                name: "人力资源资格证",
                size: "14*18mm",
                width: 160,
                height: 210
            }, {
                name: "法律资格证",
                size: "35*53mm",
                width: 413,
                height: 625
            }, {
                name: "幼师资格证",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "特岗教师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "军队文职",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "一级消防工程师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "导游证",
                size: "23*33mm",
                width: 285,
                height: 385
            }, {
                name: "国家司法考试",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "证券从业资格证",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "保险从业资格证",
                size: "18*31mm",
                width: 210,
                height: 370
            }, {
                name: "云南特岗教师报名",
                size: "12*14mm",
                width: 142,
                height: 171
            }, {
                name: "义工证",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "保健按摩师",
                size: "10*12mm",
                width: 118,
                height: 146
            }, {
                name: "摄影师",
                size: "10*12mm",
                width: 118,
                height: 146
            }, {
                name: "制图员",
                size: "33*661mm",
                width: 455,
                height: 661
            }, {
                name: "高速公路管理局",
                size: "11*14mm",
                width: 126,
                height: 168
            }, {
                name: "事业单位招聘",
                size: "10*13mm",
                width: 120,
                height: 160
            }, {
                name: "工商银行网申",
                size: "8*12mm",
                width: 100,
                height: 140
            }, {
                name: "交通银行网申",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "建设银行网申",
                size: "10*13mm",
                width: 120,
                height: 160
            }, {
                name: "中国人民银行网申",
                size: "17*22mm",
                width: 200,
                height: 260
            }, {
                name: "工商银行网申（240*370px）",
                size: "20*31mm",
                width: 240,
                height: 370
            }, {
                name: "中国移动网上报名",
                size: "8*10mm",
                width: 96,
                height: 120
            }, {
                name: "网申国企",
                size: "6*8mm",
                width: 70,
                height: 100
            }, {
                name: "农业银行网申",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "社会工作者资格证（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "营销师考试报名",
                size: "8*12mm",
                width: 100,
                height: 140
            }, {
                name: "注册计量师考试",
                size: "18*25mm",
                width: 215,
                height: 300
            }, {
                name: "大数据工程师报名",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "养老护理员（二寸）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "全国林业执法证",
                size: "22*33mm",
                width: 260,
                height: 390
            }, {
                name: "秘书证",
                size: "14*20mm",
                width: 160,
                height: 240
            }, {
                name: "营养配餐员",
                size: "10*12mm",
                width: 118,
                height: 146
            }]
        }, {
            id: "e",
            name: "财务会计",
            detailList: [{
                name: "初级会计资格考试（2022）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "中级会计资格考试（2021）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "高级会计资格考试（2021）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "税务师职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册会计师CPA（102*126px）",
                size: "9*11mm",
                width: 102,
                height: 126
            }, {
                name: "注册会计师CPA（178*220px）",
                size: "15*19mm",
                width: 178,
                height: 220
            }, {
                name: "注册会计师CPA（安徽）",
                size: "12*14mm",
                width: 138,
                height: 170
            }, {
                name: "注册会计师CPA（四川）",
                size: "12*14mm",
                width: 178,
                height: 220
            }, {
                name: "会计人员信息采集（114*156px）",
                size: "8*11mm",
                width: 114,
                height: 156
            }, {
                name: "高级经济师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "统计专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "审计专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "中级会计职称考试（240*320px）",
                size: "20*27mm",
                width: 240,
                height: 320
            }, {
                name: "中级会计职称考试（114*156px）",
                size: "10*13mm",
                width: 114,
                height: 156
            }, {
                name: "会计师换证（144*192px）",
                size: "12*16mm",
                width: 144,
                height: 192
            }, {
                name: "注册会计师证",
                size: "15*19mm",
                width: 178,
                height: 220
            }, {
                name: "湖北会计师资格证（114*156px）",
                size: "10*13mm",
                width: 114,
                height: 156
            }, {
                name: "深圳会计师从业资格证（358*441px）",
                size: "30*40mm",
                width: 358,
                height: 441
            }, {
                name: "黑龙江会计上岗证（120*160px）",
                size: "10*13mm",
                width: 120,
                height: 160
            }, {
                name: "河北唐山初级会计助理（480*540px）",
                size: "41*54mm",
                width: 480,
                height: 540
            }]
        }, {
            id: "f",
            name: "金融类",
            detailList: [{
                name: "银行专业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国房地产经济从业职业资格证",
                size: "18*25mm",
                width: 215,
                height: 300
            }, {
                name: "金融服务师",
                size: "8*12mm",
                width: 100,
                height: 140
            }]
        }, {
            id: "g",
            name: "医药卫生",
            detailList: [{
                name: "护士电子化注册（354*472px）",
                size: "35*46mm",
                width: 354,
                height: 472
            }, {
                name: "卫生资格考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "卫生资格考试（一寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "医师电子化注册",
                size: "35*46mm",
                width: 354,
                height: 472
            }, {
                name: "执业药师职业资格（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "执业药师职业资格（二寸413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "初级护师考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "初级护师（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "医用设备业务能力考评",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "电子医生注册",
                size: "39*52mm",
                width: 354,
                height: 472
            }, {
                name: "主管护师（一寸照）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "规培结业考试（二寸）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "规培结业考试（413*626px）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "规培结业考试（小一寸）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "卫生专业技术资格考试",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "护士执业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "卫生人才评价考试",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "医护英语水平考试（METS）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "医护英语水平考试",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "医师资格考试（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "护士证（电子）",
                size: "30*40mm",
                width: 354,
                height: 472
            }, {
                name: "护士证（资格证）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "护士考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "康复治疗师（一寸）",
                size: "14*18mm",
                width: 296,
                height: 413
            }, {
                name: "国家医学考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "生殖健康医疗师",
                size: "8*10mm",
                width: 90,
                height: 120
            }, {
                name: "中医调剂员",
                size: "10*12mm",
                width: 118,
                height: 146
            }, {
                name: "职业兽医资格证",
                size: "20*29mm",
                width: 230,
                height: 334
            }, {
                name: "育婴师考试报名",
                size: "20*27mm",
                width: 240,
                height: 320
            }, {
                name: "全国医用设备使用人员业务能力考评",
                size: "25*35mm",
                width: 296,
                height: 413
            }]
        }, {
            id: "h",
            name: "公务员",
            detailList: [{
                name: "国家公务员考试（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "国家公务员考试（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "广东公务员考试（二寸413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "贵州公务员考试（二寸413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "江西公务员考试",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "重庆公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "黑龙江公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "云南公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "湖北公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "四川公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "广西公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "山西公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "河北公务员考试（小二寸295*413px）",
                size: "35*45mm",
                width: 295,
                height: 413
            }, {
                name: "江西公务员考试（小二寸295*413px）",
                size: "35*45mm",
                width: 295,
                height: 413
            }, {
                name: "上海公务员考试（150*210px）",
                size: "35*45mm",
                width: 150,
                height: 210
            }, {
                name: "宁夏公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "山东公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "福建公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "天津公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "陕西公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "河南公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "内蒙古公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "辽宁公务员考试（二寸413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "安徽公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "江苏公务员考试（二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "吉林公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "湖南公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "北京公务员考试（大二寸413*626px）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "成都公务员考试（一寸295*413px）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "海南公务员考试（二寸413*579px）",
                size: "35*49mm",
                width: 295,
                height: 413
            }, {
                name: "甘肃公务员考试（二寸413*579px）",
                size: "35*49mm",
                width: 295,
                height: 413
            }, {
                name: "青海公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "新疆公务员考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "西藏公务员考试（小二寸413*531px）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "国家公务员考试",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "国家公务员考试（二寸，413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "山西省省直事业单位考试报名",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "法院书记员（内蒙古）",
                size: "13*17mm",
                width: 150,
                height: 200
            }, {
                name: "三支一扶（山东）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "区直事业单位网报照片（内蒙古）",
                size: "25*35mm",
                width: 295,
                height: 413
            }]
        }, {
            id: "i",
            name: "IT认证",
            detailList: [{
                name: "全国计算机等级考试（413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "全国计算机等级考试（144*192px）",
                size: "33*48mm",
                width: 144,
                height: 192
            }, {
                name: "全国计算机等级考试（390*567px）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "全国计算机等级考试（150*210px）",
                size: "13*18mm",
                width: 150,
                height: 210
            }, {
                name: "计算机二级（413*579px）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "计算机应用能力考试报名（广东省直考区）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "青少年软件编程等级考试",
                size: "35*53mm",
                width: 482,
                height: 730
            }, {
                name: "青少年机器人技术等级考试",
                size: "35*53mm",
                width: 482,
                height: 730
            }, {
                name: "青少年三维创意设计等级考试",
                size: "35*53mm",
                width: 482,
                height: 730
            }, {
                name: "青少年电子信息等级考试",
                size: "35*53mm",
                width: 482,
                height: 730
            }, {
                name: "计算机技术与软件专业技术资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "计算机中级操作员（ATA）",
                size: "36*48mm",
                width: 144,
                height: 192
            }]
        }, {
            id: "j",
            name: "语言",
            detailList: [{
                name: "普通话水平测试",
                size: "35*49mm",
                width: 390,
                height: 567
            }, {
                name: "英语专业四八级考试",
                size: "25*35mm",
                width: 295,
                height: 423
            }, {
                name: "英语四六级考试",
                size: "10*14mm",
                width: 144,
                height: 192
            }, {
                name: "成人学士学位外语考试",
                size: "33*48mm",
                width: 390,
                height: 575
            }, {
                name: "英语AB级考试（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "英语AB级考试（小一寸）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "翻译专业资格（水平）考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国普通话水平测试报名（390*567px）",
                size: "35*49mm",
                width: 390,
                height: 567
            }, {
                name: "英语四六级考试（144*172px）",
                size: "10*12mm",
                width: 144,
                height: 172
            }, {
                name: "英语四六级考试（150*200px）",
                size: "11*14mm",
                width: 150,
                height: 200
            }, {
                name: "学位英语考试网报照片（413*626px）",
                size: "30*45mm",
                width: 413,
                height: 626
            }, {
                name: "雅思",
                size: "33*48mm",
                width: 389,
                height: 566
            }, {
                name: "韩语考试",
                size: "30*40mm",
                width: 354,
                height: 472
            }, {
                name: "日语考试",
                size: "30*40mm",
                width: 354,
                height: 472
            }, {
                name: "医护英语",
                size: "25*38mm",
                width: 295,
                height: 448
            }, {
                name: "商务英语",
                size: "25*34mm",
                width: 295,
                height: 401
            }, {
                name: "学位英语",
                size: "33*48mm",
                width: 389,
                height: 556
            }, {
                name: "英语三级",
                size: "33*48mm",
                width: 389,
                height: 556
            }, {
                name: "全国公共英语考试你",
                size: "12*16mm",
                width: 144,
                height: 193
            }, {
                name: "中高级口译",
                size: "35*53mm",
                width: 413,
                height: 626
            }]
        }, {
            id: "k",
            name: "建筑工程",
            detailList: [{
                name: "一级建造师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "二级建造师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "二级建造师（重庆）",
                size: "14*15mm",
                width: 160,
                height: 180
            }, {
                name: "二级建造师（河南）",
                size: "18*25mm",
                width: 220,
                height: 300
            }, {
                name: "二级建造师（陕西）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "注册计量师职业资格考试",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "二级造价师工程师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "监理工程师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "注册建筑师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "环境影响评价工程师职业资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "咨询工程师（投资）职业资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "中级注册安全工程师职业资格",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "一级造价工程师",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "全国注册测绘师资格网报照片",
                size: "25*35mm",
                width: 295,
                height: 413
            }]
        }, {
            id: "l",
            name: "图像采集",
            detailList: [{
                name: "健康证电子照片",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "简历照片（电子版）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "驾驶证",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "身份证(无回执）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "社保卡（无回执）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "结婚登记照",
                size: "53*35mm",
                width: 626,
                height: 413
            }, {
                name: "兵役登记（全国征兵网）",
                size: "26*32mm",
                width: 354,
                height: 441
            }, {
                name: "士兵证",
                size: "85*119mm",
                width: 1e3,
                height: 1400
            }, {
                name: "党员证",
                size: "34*51mm",
                width: 400,
                height: 600
            }, {
                name: "团员证",
                size: "22*32mm",
                width: 254,
                height: 372
            }, {
                name: "校园一卡通",
                size: "51*68mm",
                width: 600,
                height: 800
            }, {
                name: "厦门大学毕业证",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "大学个人档案",
                size: "35*49mm",
                width: 160,
                height: 160
            }, {
                name: "学信网",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "厦门医保卡",
                size: "22*26mm",
                width: 164,
                height: 308
            }, {
                name: "居住证",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "进博会证照",
                size: "34*51mm",
                width: 400,
                height: 600
            }, {
                name: "国企单位存档",
                size: "7*10mm",
                width: 85,
                height: 120
            }, {
                name: "网约车运营证",
                size: "30*38mm",
                width: 358,
                height: 448
            }, {
                name: "中国人事网报名",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "江西吉安公务员照片采集",
                size: "41*51mm",
                width: 480,
                height: 600
            }, {
                name: "微信头像",
                size: "25*25mm",
                width: 300,
                height: 300
            }, {
                name: "微商注册",
                size: "12*12mm",
                width: 140,
                height: 140
            }, {
                name: "记者照片",
                size: "33*41mm",
                width: 388,
                height: 480
            }, {
                name: "金蝶认证",
                size: "30*37mm",
                width: 358,
                height: 441
            }, {
                name: "网约车照片（二寸）",
                size: "39*56mm",
                width: 461,
                height: 661
            }, {
                name: "医保证",
                size: "26*32mm",
                width: 307,
                height: 378
            }, {
                name: "毕业生图像信息采集",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "大学生图像信息采集",
                size: "41*54mm",
                width: 480,
                height: 640
            }, {
                name: "学籍照片（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "学籍照片（大一寸）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "学籍照片（小一寸）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "学籍照片（大二寸）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "学籍照片（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "学籍网（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "学籍网（大一寸）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "学籍网（小一寸）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "学籍网（大二寸）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "学籍网（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "驾驶证（无回执）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "医保证（电子版，无回执）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "居住证（无回执）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "毕业学历照片",
                size: "26*35mm",
                width: 480,
                height: 640
            }, {
                name: "幼儿园入学照片（二寸）",
                size: "35*49mm",
                width: 413,
                height: 579
            }, {
                name: "幼儿园入学照片（大一寸）",
                size: "33*48mm",
                width: 390,
                height: 575
            }, {
                name: "幼儿园入学照片（大二寸）",
                size: "35*53mm",
                width: 413,
                height: 626
            }, {
                name: "幼儿园入学照片（小一寸）",
                size: "22*32mm",
                width: 260,
                height: 378
            }, {
                name: "幼儿园入学照片（小二寸）",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "幼儿园入学照片（一寸）",
                size: "25*35mm",
                width: 295,
                height: 413
            }, {
                name: "大一新生入学电子照（240*320px）",
                size: "20*27mm",
                width: 240,
                height: 320
            }, {
                name: "全国军队征兵报名电子照",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "新生办理学生卡电子照（279*386px）",
                size: "25*35mm",
                width: 276,
                height: 386
            }, {
                name: "上海大学学生证电子照（390*567px）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "椰城民警通图像采集（358*441px）",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "驾驶证图像采集",
                size: "22*32mm",
                width: 780,
                height: 1134
            }, {
                name: "全国中小学图像采集",
                size: "26*32mm",
                width: 358,
                height: 441
            }, {
                name: "新生学籍图像采集",
                size: "13*16mm",
                width: 179,
                height: 220
            }, {
                name: "驾驶证（交管12123）北京",
                size: "76*105mm",
                width: 1047,
                height: 1447
            }, {
                name: "上海小学入学图像采集（272*354pxpx）",
                size: "11*15mm",
                width: 272,
                height: 354
            }, {
                name: "奖学金申请",
                size: "11*14mm",
                width: 126,
                height: 160
            }, {
                name: "反假证（一寸）",
                size: "13*18mm",
                width: 150,
                height: 210
            }]
        }, {
            id: "m",
            name: "各国签证",
            detailList: [{
                name: "中国护照（冲印尺寸33*48无回执）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "中国护照（冲印尺寸30*40无回执）",
                size: "30*40mm",
                width: 354,
                height: 472
            }, {
                name: "台湾通行证（无回执）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "港澳通行证（无回执）",
                size: "33*48mm",
                width: 390,
                height: 567
            }, {
                name: "中国签证",
                size: "34*48mm",
                width: 391,
                height: 567
            }, {
                name: "入台证",
                size: "35*48mm",
                width: 413,
                height: 531
            }, {
                name: "出入境申请",
                size: "30*40mm",
                width: 360,
                height: 480
            }, {
                name: "澳门居留证申请",
                size: "38*46mm",
                width: 450,
                height: 540
            }, {
                name: "美国签证",
                size: "51*51mm",
                width: 602,
                height: 602
            }, {
                name: "墨西哥签证",
                size: "31*39mm",
                width: 366,
                height: 461
            }, {
                name: "澳大利亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "新西兰签证",
                size: "76*102mm",
                width: 897,
                height: 1204
            }, {
                name: "法国签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "新加坡签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "加拿大签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "日本护照",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "日本签证",
                size: "45*45mm",
                width: 531,
                height: 531
            }, {
                name: "泰国签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "马来西亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "越南签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "迪拜签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "菲律宾签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "俄罗斯签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "印度签证",
                size: "50*50mm",
                width: 591,
                height: 591
            }, {
                name: "韩国签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "尼泊尔签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "蒙古签证",
                size: "33*45mm",
                width: 414,
                height: 531
            }, {
                name: "奥地利签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "冰岛签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "巴基斯坦签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "老挝签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "柬埔寨签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "缅甸签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "越南签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "比利时签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "肯尼亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "文莱签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "芬兰签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "捷克签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "土库曼斯坦",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "叙利亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "阿富汗签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "吉尔吉斯斯坦签...",
                size: "25*35mm",
                width: 413,
                height: 531
            }, {
                name: "哈萨克斯坦签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "孟加拉签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "伊朗签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "挪威签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "意大利签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "瑞士签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "英国签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "希腊签证",
                size: "36*45mm",
                width: 414,
                height: 531
            }, {
                name: "西班牙签证",
                size: "30*40mm",
                width: 354,
                height: 472
            }, {
                name: "以色列签证",
                size: "50*50mm",
                width: 591,
                height: 591
            }, {
                name: "古巴签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "罗马尼亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "克罗地亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "赞比亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "沙特阿拉伯签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "马达加斯加签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "智利签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "波兰签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "乌克兰签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "印度尼西亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "匈牙利签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "爱尔兰签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "丹麦签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "阿根廷签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "葡萄牙签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "瑞典签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "埃及签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "巴西签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "比利亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "阿联酋签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "荷兰签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "德国签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "纳米比亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "尼日利亚签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "巴林签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }, {
                name: "乌兹别克斯坦签证",
                size: "35*45mm",
                width: 413,
                height: 531
            }]
        }];
        var n = i("af26");
        t["a"] = new a["default"]({
            data() {
                return {
                    licensePhotoSizeList: s,
                    loadData: {
                        loading: !1,
                        loadingText: ""
                    },
                    workspace: {},
                    workspaceOptions: {
                        background: 16119285,
                        actionList: [],
                        actionCursor: -1,
                        page: {
                            width: 0,
                            height: 0,
                            widthLabel: "",
                            heightLabel: "",
                            backgroundColorList: []
                        },
                        layerList: [],
                        selectedLayerId: 0
                    },
                    faceRectangle: {
                        height: 0,
                        left: 0,
                        top: 0,
                        width: 0
                    },
                    config: {
                        backgroundLayer: {
                            sizeIdStr: "",
                            backgroundColor: {
                                id: "2",
                                value: "#FFFFFF",
                                name: "白"
                            }
                        },
                        imageLayer: {
                            originalWidth: 0,
                            originalHeight: 0,
                            setActionList: []
                        }
                    },
                    controlFrom: {
                        name: "小一寸",
                        width: 0,
                        height: 0,
                        unit: "px",
                        size: 100,
                        rotate: 0
                    },
                    conversionUnitMap: {
                        mm: 25.4,
                        cm: 2.54,
                        inch: 1
                    },
                    dpi: 300,
                    uploadUrl: "",
                    isVip: !1
                }
            },
            created() {},
            methods: {
                getWorkspace() {
                    return this.workspace
                },
                async setVipstate() {
                    await Object(n["k"])().then(e=>{
                        const {data: t} = e;
                        this.isVip = t.is_vip
                    }
                    ).catch(()=>{
                        this.isVip = !1
                    }
                    )
                },
                changeWatermark() {
                    this.getWorkspace().pageEntity && (this.isVip ? this.getWorkspace().pageEntity.hide("watermark") : this.getWorkspace().pageEntity.show("watermark"))
                }
            }
        })
    },
    "4a8d": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "ratio-free"
            }, [i("el-form", {
                ref: "controlFrom",
                staticClass: "custom",
                attrs: {
                    model: e.controlFrom,
                    rules: e.controlRules
                }
            }, [i("el-form-item", {
                attrs: {
                    prop: "width"
                }
            }, [i("el-input", {
                on: {
                    change: e.customSizeChange
                },
                model: {
                    value: e.controlFrom.width,
                    callback: function(t) {
                        e.$set(e.controlFrom, "width", t)
                    },
                    expression: "controlFrom.width"
                }
            }), i("div", {
                staticClass: "label"
            }, [e._v("\n        宽\n      ")])], 1), i("el-form-item", {
                staticClass: "height",
                attrs: {
                    prop: "height"
                }
            }, [i("el-input", {
                on: {
                    change: e.customSizeChange
                },
                model: {
                    value: e.controlFrom.height,
                    callback: function(t) {
                        e.$set(e.controlFrom, "height", t)
                    },
                    expression: "controlFrom.height"
                }
            }), i("div", {
                staticClass: "label"
            }, [e._v("\n        高\n      ")])], 1), i("el-form-item", [i("el-select", {
                staticClass: "select",
                attrs: {
                    "popper-class": "new-select-v1"
                },
                on: {
                    change: e.customSizeChange
                },
                model: {
                    value: e.controlFrom.unit,
                    callback: function(t) {
                        e.$set(e.controlFrom, "unit", t)
                    },
                    expression: "controlFrom.unit"
                }
            }, [i("el-option", {
                attrs: {
                    label: "像素",
                    value: "px"
                }
            }), i("el-option", {
                attrs: {
                    label: "毫米",
                    value: "mm"
                }
            }), i("el-option", {
                attrs: {
                    label: "厘米",
                    value: "cm"
                }
            }), i("el-option", {
                attrs: {
                    label: "英寸",
                    value: "inch"
                }
            })], 1)], 1)], 1), i("div", {
                staticClass: "size"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("\n      尺寸模板\n    ")]), i("div", {
                staticClass: "size-list",
                class: e.moreSizeVisible ? "" : "more"
            }, [e._l(e.store.licensePhotoSizeList.filter((function(t, i) {
                return !!e.moreSizeVisible || i < 5
            }
            )), (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "size-item",
                    class: e.sizeActiveIndex === a ? "size-active" : "",
                    on: {
                        click: function(t) {
                            return e.sizeClicked(a)
                        }
                    }
                }, [e._v("\n        " + e._s(t.name) + "\n      ")])
            }
            )), i("div", {
                staticClass: "size-item",
                staticStyle: {
                    color: "#6c8ee5"
                },
                on: {
                    click: function(t) {
                        e.moreSizeVisible = !e.moreSizeVisible
                    }
                }
            }, [e._v("\n        " + e._s(e.moreSizeVisible ? "收起" : "更多") + "\n      ")])], 2), i("div", {
                ref: "scrollBox",
                staticClass: "scroll-box"
            }, [i("div", {
                staticClass: "detail-list"
            }, [0 === e.sizeActiveIndex ? i("div", {
                staticClass: "detail-item",
                class: -1 === e.detailSizeActiveIndex ? "detail-active" : "",
                style: {
                    width: "112px"
                }
            }, [i("div", {
                staticClass: "detail-item-content",
                on: {
                    click: e.originalSizeSelected
                }
            }, [i("div", [e._v("原尺寸")])])]) : e._e(), e._l(e.store.licensePhotoSizeList[e.sizeActiveIndex].detailList, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "detail-item",
                    class: e.detailSizeActiveIndex === a ? "detail-active" : "",
                    style: {
                        width: 1 === e.store.licensePhotoSizeList[e.sizeActiveIndex].type ? "116px" : "100%"
                    }
                }, [i("div", {
                    staticClass: "detail-item-content",
                    on: {
                        click: function(t) {
                            return e.sizeChange(e.sizeActiveIndex, a)
                        }
                    }
                }, [i("div", [e._v(e._s(t.name.split("（")[0]))]), t.name.split("（")[1] ? i("div", [e._v("（" + e._s(t.name.split("（")[1]))]) : e._e(), t.size ? i("div", {
                    staticClass: "detail-size"
                }, [e._v("\n              " + e._s(t.size) + "\n            ")]) : e._e()])])
            }
            ))], 2)])])], 1)
        }
          , s = []
          , n = i("2b0e")
          , o = i("47ce")
          , h = n["default"].extend({
            data() {
                return {
                    controlRules: {
                        width: [{
                            pattern: /^[0-9]+$/,
                            message: "请输入数值",
                            trigger: "blur"
                        }],
                        height: [{
                            pattern: /^[0-9]+$/,
                            message: "请输入数值",
                            trigger: "blur"
                        }]
                    },
                    sizeActiveIndex: 0,
                    detailSizeActiveIndex: "",
                    moreSizeVisible: !1
                }
            },
            computed: {
                store() {
                    return o["a"]
                },
                controlFrom() {
                    return o["a"].controlFrom
                },
                imageUrl() {
                    return o["a"].workspaceOptions.layerList[0] ? o["a"].workspaceOptions.layerList[0].imageURL : ""
                }
            },
            watch: {
                imageUrl(e, t) {
                    t ? -1 === this.detailSizeActiveIndex && this.originalSizeSelected(!1) : this.originalSizeSelected(!0)
                }
            },
            methods: {
                sizeClicked(e) {
                    this.sizeChange(e, 0),
                    this.$nextTick(()=>{
                        this.$refs.scrollBox.scrollTo(0, 0)
                    }
                    )
                },
                sizeChange(e, t) {
                    this.sizeActiveIndex = e;
                    const i = this.store.licensePhotoSizeList[this.sizeActiveIndex];
                    this.detailSizeActiveIndex = t,
                    this.store.config.backgroundLayer.sizeIdStr = i.id;
                    const a = i.detailList[this.detailSizeActiveIndex];
                    if (a) {
                        const {width: e, height: t, size: i} = a;
                        this.store.controlFrom.width = e,
                        this.store.controlFrom.height = t,
                        this.store.controlFrom.unit = "px",
                        this.drawPhotoFrame(e, t, i || "", !0)
                    }
                },
                customSizeChange() {
                    this.$refs.controlFrom.validate(e=>{
                        if (e) {
                            const e = this.controlFrom.unit
                              , {width: t, height: i} = this.controlFrom;
                            let a = t
                              , s = i;
                            if ("px" !== e && (a = t / this.store.conversionUnitMap[e] * this.store.dpi,
                            s = i / this.store.conversionUnitMap[e] * this.store.dpi),
                            a > 2e3 || s > 2e3)
                                return void this.$message.error("图片尺寸过大，请重新修改图片尺寸大小");
                            let n = "";
                            "mm" === e && (n = `${t}*${i}mm`),
                            "cm" === e && (n = `${Math.ceil(10 * t)}*${Math.ceil(10 * i)}mm`),
                            this.detailSizeActiveIndex = "",
                            this.store.config.backgroundLayer.sizeIdStr = "custom",
                            this.drawPhotoFrame(a, s, n, !0)
                        }
                    }
                    )
                },
                originalSizeSelected(e) {
                    this.detailSizeActiveIndex = -1,
                    this.store.config.backgroundLayer.sizeIdStr = "a";
                    const {originalWidth: t, originalHeight: i} = this.store.config.imageLayer;
                    this.store.controlFrom.width = t,
                    this.store.controlFrom.height = i,
                    this.store.controlFrom.unit = "px",
                    this.drawPhotoFrame(t, i, "", e)
                },
                async drawPhotoFrame(e, t, i, a) {
                    let s = ""
                      , n = "";
                    if (i) {
                        const e = i.replace("mm", "").split("*");
                        s = "" + e[0],
                        n = e[1]
                    } else {
                        const i = this.store.conversionUnitMap.mm;
                        s = "" + Math.ceil(e / this.store.dpi * i),
                        n = "" + Math.ceil(t / this.store.dpi * i)
                    }
                    a && this.$track("zjzsj_subfunction_tick", {
                        class: "size",
                        value: `${this.store.config.backgroundLayer.sizeIdStr}_${s}*${n}mm`
                    }),
                    this.store.getWorkspace().dispatch({
                        type: "PageSizeUpdate",
                        width: Math.ceil(e),
                        height: Math.ceil(t),
                        widthLabel: s + "mm",
                        heightLabel: n + "mm"
                    });
                    const o = 413
                      , h = 295
                      , r = 626
                      , m = 413;
                    let d = 1;
                    const l = Math.min(r / t, o / e);
                    e < h && (d = h / e),
                    e > o && (d = o / e),
                    t < m && (d = m / t),
                    t > r && (d = r / t),
                    d = d > 1 ? Math.min(d, l) : d,
                    this.store.getWorkspace().pageEntity.changeScale(d, d);
                    const {originalWidth: c, originalHeight: g} = this.store.config.imageLayer;
                    let p = c
                      , u = g;
                    {
                        const i = e / p;
                        if (p *= i,
                        u *= i,
                        u > t) {
                            const e = t / u;
                            p *= e,
                            u *= e
                        }
                    }
                    if (e <= t) {
                        const t = e / p;
                        p = e,
                        u *= t
                    }
                    const w = this.store.workspaceOptions.layerList[0].id;
                    this.store.getWorkspace().dispatch({
                        type: "LayerWidthUpdate",
                        layerId: w,
                        width: p
                    });
                    const f = Math.abs((t - u) / 2);
                    this.store.getWorkspace().dispatch({
                        type: "LayerMove",
                        layerId: w,
                        x: 0,
                        y: f
                    })
                }
            }
        })
          , r = h
          , m = (i("6ab7"),
        i("2877"))
          , d = Object(m["a"])(r, a, s, !1, null, "8019e86a", null);
        t["default"] = d.exports
    },
    5024: function(e, t, i) {},
    "5feb": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVxSURBVHgB7VjNT2NVFL/v9eO1nbZYbPkaZBjFWeBGxcSFC4ixumRc8C8QWLIAEoLAVoNRY2LUhSZuWLBVE+OOBEKCiBI+EhICbDB8hQxflkJ7/Z3bc9s7HWDKtG9ioie5fc17757zu79z7jnnPiH+ayKltMS/SCweNoaXh6+jo4OunrGxMZufl2Xg1u+DJWFZlgd//dFoNHB0dBSAOKlUynIch55JjPTfkNbW1nRNTU0KoLOjo6NZpcRyh2SL3NfV1eWpra29EwqF6js7O99eXV39+vDwcP7s7OwvyXJxcXFM9+bm5j4dGhpKBoPBxkQiEe7u7vZpPZUOBaWwpaXFCYfDieHh4XcB4DdZomxtbf2IOe/V1dUloMvH4MoDSG7UK6VYInC43bCwsPDJ5eXlkbylEKs0F2zehR7HAPnMQHXw24gjPyleXl7+RpYpFBIIjwaEir8sJvXktrY2XyQSiS8uLn4sKyTEJEKlhnb7M4HUk2hDUHAPDAwkyUWyQkK6+vv734dnwpySSgOJucJ4Wbk2Fos1bW5u/iQrLLTJEDYvkQ2RC6XSWGSQNIHyXGRwcPAD6ZIkk8l3yAbbKgmgWRl8lFJmZ2c/ky7J0tLSt7CTIDc/tepII6UQQE4r9/b29hakS3JwcLCACtTEtuyrXO3NU4fyZDBonZ6eelC2nKqqqleFS4IYrAPOgIaQ40kyHCsfa3nhh+onm81a5+fnXp/Pd0e4JAzQS2QwQIsl/45tgMs/Qe6zdnZ29KpcFb/fL1CZbMShQFoT7P0nATI2iZes+fl5gYaAJmfQBOwKlwTATpATM16vN3t8fGwxjrx7i8Xs63z19fUhhODLbm6S/f3932HrPkaQbIpcurGl0enYVwCVSJ7U12URg6nt7e154ZKsra1NoS6nGhsbBVwsMTSLmrAnAdJLKysrimLU4PO+vr4fhEsyMTHxKzZhCqlGuRhllezmdqoZiEypzTmQaCa6HarDYPIVyleywrKxsfEz6SYbZKv4mKDdbDOlUiOmnUSC5CkQfxm4+dHIyMhHCOZTUSEhXePj419hEz6iDUK29CYBQKExFc/LdzC8GiriTjwej8AF92ZmZj6XFRIqn6Szuro6ChsBtqUYFDd0NvqBBqjcjAAONjU1xeCOB+jjvpNlCumArhZUqBj0h8gG9ZwEsJRToE41Hl4RrYxSAMXJixgPpqenv0in0yfylkJzaC7pwOYjXXdYt2bPbF6tmwAqNxsAqZCHKJhJMQV2b2/vw/X19V9KBUe5FCe6h5RXeaFhZi/AnlLsyRJOe/mjpcGiw4pIYQTn4Gpc7yLAX+vp6flwamrqy93d3T9MVk9OTlApd/5ERfq+vb09iXdb6ZiKeTQ3QsfW5uZmHXsqQZfCXr7l4pdtIxaVq0mxyDWYVRhxjHoE+30CgHz2OkC8ietbGG/QPTwnxhrYpVHacKwjyAtX4JiQW9V9s3H1cFvusGJiklwUxXGAgL7ArMbpIERNLv1nUDFejAInCnHniELs6Y1xpXvta5hUg3OSRGWhTxZqwDX6fwbniixSRRafPjIAewHXnoO9NJ5dIL9d4noJYFmwlsH9DM3hudSUZDBUc6JtXpf7bmSRFExOTgqDUVF0pRKlVo/irw1YAKW+w9i2LT0ej6RyBrdLLqP5QZI3eE0XI54GUhTa8eLdHTBGkDogkXNhkPIn3ad2nobOdWZJK2XX3gqgUas1UB8PFVO8Mx0+Y/j1VRQ+zakNYSRkHXuiHNErtPSqi9KQBqn+M1NqaLaMYTYCZQN7TIrylG4q88xq0HQ1FuARBeYfAyfcEB0vsugLhDSOq6KQNswYs8z5z0U0SMPoVexYRdf/5bnLP1OHhTUl214yAAAAAElFTkSuQmCC"
    },
    6187: function(e, t, i) {},
    "651b": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "certifiedV2"
            }, [i("el-container", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.store.loadData.loading,
                    expression: "store.loadData.loading"
                }],
                staticClass: "container",
                staticStyle: {
                    height: "100%",
                    outline: "0"
                },
                attrs: {
                    "element-loading-text": e.store.loadData.loadingText
                }
            }, [i("div", {
                staticClass: "header"
            }, [i("LayoutHeader", [i("div", {
                staticClass: "header-content"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("\n            证件照设计\n          ")]), i("div", {
                staticClass: "button upload"
            }, [i("svg-icon", {
                staticClass: "icon",
                attrs: {
                    "icon-class": "upload"
                }
            }), i("span", {
                staticClass: "text"
            }, [e._v(e._s(e.store.uploadUrl ? "重新上传" : "上传"))]), i("Uploader", {
                attrs: {
                    drag: !1,
                    way: "top_bar"
                }
            })], 1), i("DownloadButton")], 1)])], 1), i("div", {
                ref: "content",
                staticClass: "content"
            }, [i("LeftCard", {
                attrs: {
                    disabled: !e.store.uploadUrl
                }
            }, [i("BackgroundColor", {
                attrs: {
                    slot: "background"
                },
                slot: "background"
            }), i("LicensePhotoSize", {
                attrs: {
                    slot: "ratioFree"
                },
                slot: "ratioFree"
            })], 1), i("div", {
                staticClass: "center"
            }, [e.editorTestingFieldExists ? i("LicensePhotoTest", {
                staticStyle: {
                    "z-index": "10000"
                }
            }) : e._e(), e.store.uploadUrl ? i("LicensePhoto") : i("div", {
                staticClass: "tip-box"
            }, [i("div", {
                staticClass: "tip-bg"
            }, [i("Uploader", {
                staticClass: "uploader-drag",
                attrs: {
                    drag: !0,
                    way: "drag"
                }
            }), i("div", {
                staticClass: "upload-button"
            }, [e._v("\n              打开图片\n              "), i("Uploader", {
                attrs: {
                    drag: !1,
                    way: "canvas"
                }
            })], 1), i("div", {
                staticClass: "tip-text"
            }, [e._v("\n              您也可以拖拽图片至此页面打开\n            ")])], 1)])], 1), e.store.uploadUrl ? i("div", {
                staticClass: "right"
            }, [i("LayerSeting")], 1) : e._e()], 1)])], 1)
        }
          , s = []
          , n = i("2b0e")
          , o = i("47ce")
          , h = i("f6db")
          , r = n["default"].extend({
            components: {
                LayoutHeader: i("9dff").default,
                BackgroundColor: i("c650").default,
                LicensePhotoSize: i("4a8d").default,
                LayerSeting: i("042a").default,
                DownloadButton: i("0d93").default,
                Uploader: i("b185").default,
                LeftCard: i("dd29").default,
                LicensePhoto: i("46e4").default,
                LicensePhotoTest: i("c724").default
            },
            computed: {
                editorTestingFieldExists() {
                    return /editorTestingFieldExists/.test(window.location.href)
                },
                store() {
                    return o["a"]
                }
            },
            async created() {
                this.$track("zjzsj_enter", {
                    source: "" + (this.$route.query.from || "other")
                }),
                window.userInfo.id && await this.store.setVipstate()
            },
            mounted() {
                Object(h["a"])(async()=>{
                    await this.store.setVipstate(),
                    this.store.changeWatermark()
                }
                ),
                Object(h["c"])(async()=>{
                    await this.store.setVipstate(),
                    this.store.changeWatermark()
                }
                ),
                Object(h["b"])(()=>{
                    this.store.isVip = !1,
                    this.store.changeWatermark()
                }
                )
            }
        })
          , m = r
          , d = (i("9185"),
        i("d651"),
        i("2877"))
          , l = Object(d["a"])(m, a, s, !1, null, "a0d138da", null);
        t["default"] = l.exports
    },
    "6ab7": function(e, t, i) {
        "use strict";
        i("6fd3")
    },
    "6fd3": function(e, t, i) {},
    8618: function(e, t, i) {},
    8679: function(e, t, i) {
        "use strict";
        i("1a51")
    },
    "876a": function(e, t, i) {
        e.exports = i.p + "img/panda.2712375b.png"
    },
    9185: function(e, t, i) {
        "use strict";
        i("2421")
    },
    "9dff": function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "header"
            }, [i("router-link", {
                attrs: {
                    to: "/",
                    target: "_blank"
                }
            }, [i("div", {
                staticClass: "logo"
            })]), e._t("default"), i("div", {
                staticClass: "user-box"
            }, [i("div", {
                staticClass: "user-con",
                domProps: {
                    innerHTML: e._s(e.userHtml)
                }
            })])], 2)
        }
          , s = []
          , n = i("2b0e")
          , o = i("f6db")
          , h = i("af26")
          , r = n["default"].extend({
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
                Object(o["g"])(),
                Object(o["d"])(),
                Object(o["h"])(),
                this.getUserInfo()
            },
            methods: {
                getUserInfo() {
                    Object(h["n"])().then(e=>{
                        const {data: t, html: i} = e;
                        window.userInfo = t.userInfo,
                        window.vipInfo = t.vipInfo,
                        this.userHtml = i,
                        Object(o["i"])(i)
                    }
                    ).catch(e=>{
                        this.userHtml = e.html || document.getElementById("j-hidUser").value,
                        window.localStorage.removeItem("access_token"),
                        window.localStorage.removeItem("uid")
                    }
                    )
                }
            }
        })
          , m = r
          , d = (i("0e68"),
        i("2877"))
          , l = Object(d["a"])(m, a, s, !1, null, "9f3b5f30", null);
        t["default"] = l.exports
    },
    a24e: function(e, t, i) {
        "use strict";
        i("186c")
    },
    a7f9: function(e, t, i) {
        "use strict";
        i("8618")
    },
    b185: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "Uploader"
            }, [e.drag ? i("div", {
                staticClass: "upload drag",
                on: {
                    click: function(e) {
                        if (e.preventDefault(),
                        e.target !== e.currentTarget)
                            return null
                    }
                }
            }, [i("ImageUpload", {
                staticClass: "upload-input",
                attrs: {
                    accept: "image/png,image/jpeg,image/jpg,image/bmp",
                    type: "matting",
                    size: 20971520,
                    open: !0,
                    drag: !0,
                    "hidden-success-tip": !0
                },
                on: {
                    loading: e.uploadImageLoading,
                    finish: e.uploadImageFinish
                }
            }, [i("div")])], 1) : i("div", {
                staticClass: "upload"
            }, [i("ImageUpload", {
                staticClass: "upload-input",
                attrs: {
                    accept: "image/png,image/jpeg,image/jpg,image/bmp",
                    type: "matting",
                    size: 20971520,
                    open: !0,
                    drag: !1,
                    "hidden-success-tip": !0
                },
                on: {
                    loading: e.uploadImageLoading,
                    finish: e.uploadImageFinish
                }
            }, [i("div", {
                staticClass: "upload-slot",
                on: {
                    click: e.uploadClicked
                }
            })])], 1)])
        }
          , s = []
          , n = i("2b0e")
          , o = i("bcb9")
          , h = i("af26")
          , r = i("47ce")
          , m = n["default"].extend({
            components: {
                ImageUpload: i("50f2").default
            },
            props: {
                drag: {
                    type: Boolean,
                    required: !0
                },
                way: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                store() {
                    return r["a"]
                },
                config() {
                    return r["a"].config
                }
            },
            methods: {
                uploadClicked() {
                    this.$track("upload_picture_click", {
                        source: "zjzsj",
                        wey: this.way,
                        status: this.store.uploadUrl ? "1" : "0"
                    })
                },
                uploadImageLoading(e) {
                    e && (this.drag && this.$track("upload_picture_click", {
                        source: "zjzsj",
                        wey: "drag",
                        status: this.store.uploadUrl ? "1" : "0"
                    }),
                    this.store.loadData.loading = !0,
                    this.store.loadData.loadingText = "图片上传")
                },
                uploadImageFinish(e) {
                    if (this.store.loadData.loading = !1,
                    e && e.length > 0) {
                        const t = e[e.length - 1];
                        this.callAlgorithm(t.url)
                    }
                },
                updateSprite(e) {
                    this.store.getWorkspace().dispatch({
                        type: "LayerSpriteUpate",
                        layerId: this.store.workspaceOptions.layerList[0].id,
                        spriteURL: e
                    })
                },
                async callAlgorithm(e) {
                    this.store.loadData.loading = !0,
                    this.store.loadData.loadingText = "图片处理中";
                    try {
                        const t = "cpcG!8%@8yS1!wBT"
                          , i = await Object(h["f"])({
                            parameter: {
                                mode: "3",
                                rsp_media_type: "url",
                                SegmentMode: "2"
                            },
                            media_info_list: [{
                                media_data: e,
                                media_extra: {},
                                media_profiles: {
                                    media_data_type: "url"
                                }
                            }]
                        });
                        Object(h["h"])({
                            parameter: {
                                rsp_media_type: "jpg"
                            },
                            media_info_list: [{
                                media_data: i.data.url ? Object(o["a"])(i.data.url, Object(o["b"])(i.data.key, t)) : e,
                                media_extra: {},
                                media_profiles: {
                                    media_data_type: "url"
                                }
                            }]
                        }).then(e=>{
                            this.$track("upload_picture_succeed", {
                                source: "zjzsj",
                                wey: this.way,
                                status: this.store.uploadUrl ? "1" : "0"
                            });
                            const i = "data:image/jpg;base64," + Object(o["a"])(e.data.url, Object(o["b"])(e.data.key, t));
                            if (this.store.loadData.loading = !1,
                            this.store.uploadUrl) {
                                this.updateSprite(i);
                                const e = new Image;
                                e.src = i,
                                e.onload = ()=>{
                                    const {width: t, height: a} = e;
                                    this.config.imageLayer.originalWidth = t,
                                    this.config.imageLayer.originalHeight = a,
                                    this.store.uploadUrl = i
                                }
                            } else
                                this.store.uploadUrl = i
                        }
                        ).catch(e=>{
                            this.store.loadData.loading = !1,
                            console.error("AlgorithmMatting", e)
                        }
                        )
                    } catch (t) {
                        this.store.loadData.loading = !1
                    }
                }
            }
        })
          , d = m
          , l = (i("0544"),
        i("2877"))
          , c = Object(l["a"])(d, a, s, !1, null, "652e2130", null);
        t["default"] = c.exports
    },
    b80c: function(e, t, i) {},
    c06b: function(e, t, i) {},
    c41d: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAstSURBVHgB7Vvpb1PZFb/PduzsJClJIAREmQzTCTCtSqX2AwI6CDoVg1Crwge+IVGWIiQWUZaqBVS1UP4AaEel7VQCJKRKlQIFgdhpEQLKFgLTScU+hEUs2SCLfef8rs9xrh3biZ/txBrNT7p6z8/v+Z5z7tnvs1JfY2ihtXbo4PBHJ+ZrRw0xhmpChxhXCxcu9EyaNEmfOnXK09bWZua+fPmymjp1qiopKdGVlZUa32/ZskU7Dh7Rio4qm8j4rwvRWGlgwYIFvvPnz3s7Ojr8PT09gWAw6H/z5o0vEAh4LRp0V1dXiI49xcXF3T6fr/vVq1ddJJjeefPmBbdu3RpSWULGBMCMO3z0jB49OtDe3l5ITBfPnj171KZNm2ZXVVXVFxYWjikvL3/X6/WW5OXlFcnzJJSWt2/fPn7+/PlnT58+bTp69Oh/du7c2UzX2mpra9/U1dX1nDx5MsgaoVWOAYw7M2fO9NF5MY3R8+fP//6tW7f+SAz9V7tEa2vr/4hpUoCtH9Jv1lRXVxdhDvrswXzsT4YVxqGBoPHjx+eT+laRyv7g2rVrf+7u7m7XGcTDhw8bNm/ePJvmG0XaVUim5R02AdDEwjyAVS+lUdfY2PgJqXybziKampo+If9RR/OVkY/IYzrsyDIkwGQesssAVn3NmjUfQV31EIH8xReYk2ioAg2KTVAPgUY4MhlUvqCgYMy5c+d+ne1VjwfM2dDQsBY0gBYsCNOmsgKWsAghUFFRUXvz5s0/6WEGzI6EMBY0wRepbJgDGNdh9cIEAUgdE+scwfXr1yGEMaANNOrobDNtyI+B+TzY/MGDB9fpHMOZM2d+Q/RVxjhGWbi0BeBB2KFj2bp16348HDY/EEDT+vXrPxoxYkQ5mQIiU8acoonziL0Uft6FB9Y5CopEn3OILOAFc28Kus+OoPp+GjW5ZPeJAMdMtI6ikce0JxWALwHzkSqMJOkcP348f+nSpZOpUvu5ygAodKr79++bAZDaqilTpqhp06apdDFx4sRFc+fO/ZQKsM5Zs2Z1HDhwAKHLSbWGiKx+fX09Vr/2wYMHB3UauHfvnt64caMeN26cJobjDhKCXrFihbk3HSAVp6Krhml3FxVg97CjkSNHlhDhc3Qa2LVrVxTjwuj27dvNWLRokabVjxIGrrsFHCJqEmKjRHyBTsUh8s140FdUVFR97Nix32oXoJreMCdMgemzZ88mvB8rj3vkfjyL33AD9gXVHBYH9AUCh7Mps/pUhxfQ+YTXr19/rl1AmMeKJ2M8FrgXz4gQ3ODZs2dXifZ3aOTzYoopJF15IwSWmJdaVMUbNmz4kXYBqLAw78am8QyexXCLOXPmTKeUvVQEYGl3YtXnGzxQndLS0orTp09v0SkCxIsap7Ly8X7HrQkAaKZQr/EbKhztvPFMwROl/xQqtm3bhj6eQ81Kp7e3N1BTU/O+ShE7duwwR1LftEIbOU4TIt2Ckrd64kEqRTj2pPdLqPByayuQn58//sWLF4Nqae3du9cMQOw33XCWLh49enSOePimCvsBn5UdJhUCpOVDjU1p5UTq5rYMZjI7fOGIsCbnIpihBmgnXt5DGs+LaneiDTwxzBuQ/TuU86Pn5qOEoloNAhS+zFHU/8aNG5HzdIHfKSsrU7t3707pOeo6F/v9ft/jx48Nb6QB8Z0gLtrhj2MnHk7JBVMK2i+7SyehAUSLMJBMpWpW4EGFO9XgSRqpcc3ACAGqYgngg1QmA3F2xpdJ5mVAyKmAeJiMdjrzJJHA04953dfxwU1+5AB0nJxqextpbyaYh99IVDOgphgsSAD1EIAKV7Q+lSgrlNwfGoAiAg/Rw9/q7OwclBPMNEQAEKTUCbZGDAZwguTIjROEANgRJswIzerzTX5pgFAV+G89jJCkSjJCO9wOBOxK0bMTRADQAKtx2t8HsPp72WEUUAwdd/v27QN6GCHFEY6pArSDB/CSyAQ8FvMwA9M8IBNwqBBStDHZTVtSt5VLUBEVaXq4ARon+/btM+dk9ypVkPZ+Rpuw3XRqdpdJu5Peb5wgm0AebzZUUFflh9olpJhJpxhKx6GuXLnyY9QzKtwuj2iAjvUB2ur/wRFyJyWASABH+OTJk2vaBYazHCbtayba30dDB4tphcGk3SGTBuNm7LnBeWDX5erVq3u0C8RriCTTBjCeqYbIoUOHthMvY8EDL+iAApBs0HSCWG0KaCOk8kNCOtvdsQkNwhqYk5YYmJYVl4wP+UQ6WL169VxWf9sBxi2JxQyMELhisv1AKcLhxYsXP9VpQNpdNqOxA4wjyUm3irx79+6/iOYJUH+iP581wBdPA+K9pWXvB3j4wWJatSknTpz4p/1ai1vAu6NYQpQAUPdjZKItDtDW+cd79uy50NbW1kkfgyocBbR1TNgeFzOI+AE6z+e20jvUJPmrznGARqIVPQDQDPUPILKxZidvjuq+XWBjBiIApMVoLdHqf5ucUrPOUVDa/pjo/Q5o5fwfJmzUP9FWWb+WmL2D0tzcbFSGwqAmm+qmfvtzapL+ko4dKscAmtauXfsLOn1GbbxuWixb3c37h2oA9Y99D8AkRbYWYOcVLaYjR478TucY9u/fvxm0laFzohRy/8jq0/AmqwHiwZHqUIXjp8kJuESuQHJ05cqVv+gcAWghut4T1ef9jADTnrQCTKQJdiQw1SFLtJBDSyWN+lxwimAeGR8xP5IXCKsf4MzPrL52sTcYMQNbC1gIRYgKSJCgCVSs/CrT7wQOBpgT2R6Yx1srKuz14fhM4mMJQF6eSk0AOloLIkJg9cJEpWQWI/FCwpIlS3462O5xJoA8f/HixT9DgoaVLy8vH2ExH6X6Kk77a9DQlkPkHxRNwETFPDHSzbHkdb936dKlv+ksAquOOWi+71KNUsu7Pmbl49m96ov7ab0qE6kRpFvEkUE0AT6hnMZo7CMsW7Zs/p07dw7rDAKMX7hw4e/Tp0+fQ/NMpB3rUTxnCcf7KOalw60y8d6gjgmL0i9QliawEMpQfOB1NQhi1apV8xoaGv7w8uXL/2uXQBkORztjxgy8I1wvq86aV6LiqL1kfLrvvcaMIKIF0jhVHBmgerwKxXCOTBxUcxQKEjp+sHz58p8cPnz4942Njf9oaWm53t7e/sRmtKurqwPXqIg5j3twL1YbmSc9X4e3PcA4x/hSjkQ289LwjMR7Hf0+c2LG1OAQ+xcXh7ysh3aPnKamJmNj5BA9vAMjduchjfCEQiEvMecj2gN0f4CY9RNj5l0+yt7EQYXoEv4LECR176KEppvOe9DO8ng8wdbWVpPVEeMhanTaRQ0KHU3Mx/7bROjOnArovqggJXOkbKYRQOlsRQgxCzioMh5wltAM5BAIW1V4+4SO1XysQjhjx1aBrJOOI/g3Svg3EeML2AdFqb39mqzO1kvTOjo0xkYHP/cPMAqYWBFECVeUYiJmsEqD0TK+XsbXxMajGLeYlw5PpMnh1uZTipH4R4yyCgy+HJJBNhyyPgdJI6CivfhM2+zmOql1CKqMc5/PJ98HyVniepCqzV55RoVVXOr5EDU2gqQZ9hyaO9nmT1bZ/oNVFETaVsixQ2UeZ2ISMkUrZGBFC1Ff8KaFfV4ATbK0SdJae8Vj09sh5NyCeFptvVqjOFKoMLGy0ernIcIQG84XZplhuW7uH4DxtBOcTCFCDLTBckYee7+RPts5hM2cCCfPZth6oSGyo2sJWWXN0aWJKGEoFoKyTET1RQ9zLsKRyIKjFWVi09mcZDoRYlXVNpPYSBIlqDjJTNYYH1KJav5zpf1ZhaOJw/821U5/V55zf5L8Gl8lfAkoZ8msIowkpQAAAABJRU5ErkJggg=="
    },
    c650: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "background-color"
            }, [i("div", {
                staticClass: "color",
                style: {
                    borderColor: "" === e.store.config.backgroundLayer.backgroundColor.value ? "#6C8EE5" : "transparent"
                }
            }, [i("div", {
                staticClass: "background transparent",
                on: {
                    click: function(t) {
                        return e.colorSelected({
                            id: "1",
                            value: "",
                            name: "透明"
                        })
                    }
                }
            })]), e._l(e.colorList, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "color",
                    style: {
                        borderColor: t.value === e.store.config.backgroundLayer.backgroundColor.value ? "#6C8EE5" : "transparent"
                    }
                }, [i("div", {
                    staticClass: "background",
                    style: {
                        background: "gradient" === t.type ? "linear-gradient(" + t.value + ")" : t.value
                    },
                    on: {
                        click: function(i) {
                            return e.colorSelected(t)
                        }
                    }
                })])
            }
            )), i("div", {
                staticClass: "color"
            }, [i("div", {
                staticClass: "background selector"
            }, [i("el-color-picker", {
                staticClass: "color-picker",
                on: {
                    change: e.backgroundColor
                },
                model: {
                    value: e.bgcolor,
                    callback: function(t) {
                        e.bgcolor = t
                    },
                    expression: "bgcolor"
                }
            })], 1)])], 2)
        }
          , s = []
          , n = i("2b0e")
          , o = i("47ce")
          , h = n["default"].extend({
            data() {
                return {
                    bgcolor: "",
                    colorList: [{
                        id: "2",
                        value: "#FFFFFF",
                        name: "白"
                    }, {
                        id: "3",
                        value: "#2287F4",
                        name: "天空蓝"
                    }, {
                        id: "4",
                        value: "#2254F4",
                        name: "深蓝"
                    }, {
                        id: "5",
                        value: "#FF0000",
                        name: "正红"
                    }, {
                        id: "6",
                        value: "#C80002",
                        name: "深红"
                    }, {
                        id: "7",
                        value: "#BFBBBB",
                        name: "灰色"
                    }, {
                        id: "8",
                        type: "gradient",
                        value: ["#357ec2", "#FFFFFF"].join(","),
                        name: "渐变蓝白"
                    }, {
                        id: "9",
                        type: "gradient",
                        value: ["#C80002", "#FFFFFF"].join(","),
                        name: "渐变红"
                    }, {
                        id: "10",
                        type: "gradient",
                        value: ["#989898", "#FFFFFF"].join(","),
                        name: "渐变灰"
                    }]
                }
            },
            computed: {
                store() {
                    return o["a"]
                }
            },
            methods: {
                colorSelected(e) {
                    this.store.config.backgroundLayer.backgroundColor = {
                        id: e.id,
                        value: e.value,
                        name: e.name
                    },
                    this.$track("zjzsj_subfunction_tick", {
                        class: "background",
                        value: e.id
                    }),
                    this.store.getWorkspace().dispatch({
                        type: "PageBackgroundColorUpdate",
                        colorList: e.value ? e.value.split(",") : []
                    })
                },
                backgroundColor(e) {
                    const t = {
                        id: "0",
                        value: e,
                        name: "自选颜色"
                    };
                    this.colorList.some(t=>t.value === e) || this.colorList.push(t),
                    this.colorSelected(t)
                }
            }
        })
          , r = h
          , m = (i("a24e"),
        i("2877"))
          , d = Object(m["a"])(r, a, s, !1, null, "a496999c", null);
        t["default"] = d.exports
    },
    c724: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticStyle: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                }
            }, [i("div", {
                ref: "container",
                staticStyle: {
                    position: "relative",
                    display: "flex",
                    "align-items": "center",
                    width: "100%",
                    height: "100%"
                }
            }), i("div", {
                staticStyle: {
                    position: "absolute",
                    top: "0",
                    left: "0"
                }
            }, [i("div", [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.scale,
                    expression: "scale"
                }],
                domProps: {
                    value: e.scale
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.scale = t.target.value)
                    }
                }
            })]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().dispatch({
                            type: "PageSizeUpdate",
                            width: 500,
                            height: 500,
                            widthLabel: "100mm",
                            heightLabel: "100mm"
                        })
                    }
                }
            }, [e._v("\n        页面尺寸\n      ")]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().extractImage({
                            imageType: "image/jpeg",
                            quality: 1
                        })
                    }
                }
            }, [e._v("\n        导出\n      ")]), i("div", {
                on: {
                    click: e.updateSprite
                }
            }, [e._v("\n        换图\n      ")]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().dispatch({
                            type: "PageBackgroundColorUpdate",
                            colorList: ["#ffffff", "#000000"]
                        })
                    }
                }
            }, [e._v("\n        背景色\n      ")]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().dispatch({
                            type: "PageBackgroundColorUpdate",
                            colorList: []
                        })
                    }
                }
            }, [e._v("\n        透明背景色\n      ")]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().dispatch({
                            type: "LayerFlip",
                            layerId: e.workspaceOptions.selectedLayerId,
                            flipX: !1,
                            flipY: !0
                        })
                    }
                }
            }, [e._v("\n        镜像\n      ")]), e._l(e.workspaceOptions.actionList, (function(t, a) {
                return i("div", {
                    key: a,
                    style: {
                        color: a === e.workspaceOptions.actionCursor ? "red" : ""
                    }
                }, [e._v("\n        " + e._s(t.action.type) + "\n      ")])
            }
            )), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().undoStep()
                    }
                }
            }, [e._v("\n        撤销\n      ")]), i("div", {
                on: {
                    click: function(t) {
                        e.getWorkspace().redoNextStep()
                    }
                }
            }, [e._v("\n        ==>\n      ")])], 2), i("div", {
                staticStyle: {
                    position: "absolute",
                    top: "0",
                    right: "0"
                }
            }, e._l(e.workspaceOptions.layerList, (function(t, a) {
                return i("div", {
                    key: a,
                    style: {
                        color: e.workspaceOptions.selectedLayerId === t.id ? "red" : ""
                    },
                    on: {
                        click: function(i) {
                            e.getWorkspace().dispatch({
                                type: "LayerSelect",
                                layerId: t.id
                            })
                        }
                    }
                }, [e._v("\n        " + e._s(t.name) + "\n      ")])
            }
            )), 0)])
        }
          , s = []
          , n = i("2b0e")
          , o = i("33fb")
          , h = n["default"].extend({
            data() {
                return {
                    scale: 1,
                    workspaceOptions: {
                        background: 16119285,
                        actionList: [],
                        actionCursor: -1,
                        page: {
                            width: 0,
                            height: 0,
                            widthLabel: "",
                            heightLabel: "",
                            backgroundColorList: []
                        },
                        layerList: [],
                        selectedLayerId: 0
                    }
                }
            },
            watch: {
                scale(e) {}
            },
            async mounted() {
                const e = new o["a"](this.$refs.container,this.workspaceOptions);
                this.workspace = e,
                e.dispatch({
                    type: "Initialize",
                    model: {
                        page: {
                            width: 500,
                            height: 700,
                            widthLabel: "200cm",
                            heightLabel: "300cm",
                            backgroundColorList: []
                        },
                        layerList: []
                    }
                }),
                await e.dispatch({
                    type: "LayerCreate",
                    spriteURL: i("4605")
                }),
                await e.dispatch({
                    type: "LayerCreate",
                    spriteURL: i("4605")
                }),
                e.onLayerSelected(e=>{}
                )
            },
            methods: {
                getWorkspace() {
                    return this.workspace
                },
                updateSprite() {
                    this.getWorkspace().dispatch({
                        type: "LayerSpriteUpate",
                        layerId: this.getWorkspace().getSelectedLayer().id,
                        spriteURL: i("876a")
                    })
                }
            }
        })
          , r = h
          , m = i("2877")
          , d = Object(m["a"])(r, a, s, !1, null, null, null);
        t["default"] = d.exports
    },
    cda5: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "TipModal showMask"
            }, [i("div", {
                staticClass: "content"
            }, [i("div", {
                staticClass: "close",
                on: {
                    click: function(t) {
                        return e.cancelFunction("close")
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
            }, [e._v("\n      " + e._s(e.title) + "\n    ")]), i("div", {
                staticClass: "text"
            }, [e._v("\n      " + e._s(e.text) + "\n    ")]), i("div", {
                staticClass: "button-box"
            }, [i("div", {
                staticClass: "button cancel-button",
                on: {
                    click: function(t) {
                        return e.cancelFunction("cancel")
                    }
                }
            }, [e._v("\n        " + e._s(e.cancelButtonText) + "\n      ")]), i("div", {
                staticClass: "button confirm-button",
                on: {
                    click: e.confirmFunction
                }
            }, [e._v("\n        " + e._s(e.confirmButtonText) + "\n      ")])])])])
        }
          , s = []
          , n = i("2b0e")
          , o = n["default"].extend({
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
          , h = o
          , r = (i("df8e"),
        i("2877"))
          , m = Object(r["a"])(h, a, s, !1, null, "edcc3d22", null);
        t["default"] = m.exports
    },
    d651: function(e, t, i) {
        "use strict";
        i("c06b")
    },
    dd29: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                ref: "left",
                staticClass: "left",
                on: {
                    "!click": function(t) {
                        return e.leftCardClicked(t)
                    }
                }
            }, [e.disabled ? i("div", {
                staticClass: "prohibit-tip",
                style: {
                    opacity: e.disabledTipVisible ? 1 : 0
                }
            }, [i("svg-icon", {
                staticClass: "slash-circle-bold",
                attrs: {
                    "icon-class": "slashCircleBold"
                }
            }), e._v("\n    先打开图片，再开始操作吧\n  ")], 1) : e._e(), i("div", {
                staticClass: "left-content",
                style: {
                    opacity: e.disabled ? .5 : 1
                },
                on: {
                    mouseover: function(t) {
                        return e.disabledTipVisibleChange(!0)
                    },
                    mouseout: function(t) {
                        return e.disabledTipVisibleChange(!1)
                    }
                }
            }, e._l(e.leftMenuList, (function(t, a) {
                return i("div", {
                    key: a,
                    class: t.iconClass
                }, [0 !== a ? i("div", {
                    staticClass: "menu-line"
                }) : e._e(), i("div", {
                    staticClass: "left-header"
                }, [i("svg-icon", {
                    staticClass: "background",
                    attrs: {
                        "icon-class": t.iconClass
                    }
                }), i("div", {
                    staticClass: "title"
                }, [e._v("\n          " + e._s(t.name) + "\n        ")]), i("div", {
                    on: {
                        click: function(t) {
                            return e.changeHidden(a)
                        }
                    }
                }, [i("svg-icon", {
                    staticClass: "chevron-up-bold",
                    style: {
                        transform: "rotate(" + (t.isHidden ? 180 : 0) + "deg)"
                    },
                    attrs: {
                        "icon-class": "chevronUpBold"
                    }
                })], 1)], 1), i("div", {
                    staticStyle: {
                        flex: "1",
                        overflow: "hidden"
                    }
                }, [i("div", {
                    ref: "transition",
                    refInFor: !0,
                    staticClass: "transition",
                    style: {
                        maxHeight: t.isHidden ? "0" : "" + t.maxHeight
                    }
                }, [e._t(t.iconClass)], 2)])])
            }
            )), 0)])
        }
          , s = []
          , n = i("2b0e")
          , o = n["default"].extend({
            props: {
                disabled: {
                    type: Boolean,
                    required: !0
                }
            },
            data() {
                return {
                    disabledTipVisible: !1,
                    leftMenuList: [{
                        name: "照片底色",
                        iconClass: "background",
                        maxHeight: "134px",
                        isHidden: !1
                    }, {
                        name: "照片尺寸",
                        iconClass: "ratioFree",
                        maxHeight: "100%",
                        isHidden: !1
                    }]
                }
            },
            methods: {
                changeHidden(e) {
                    const t = this.leftMenuList[e];
                    this.$nextTick(()=>{
                        t.isHidden = !t.isHidden
                    }
                    )
                },
                leftCardClicked(e) {
                    this.disabled && e.stopPropagation()
                },
                disabledTipVisibleChange(e) {
                    this.disabled && (this.disabledTipVisible = e)
                }
            }
        })
          , h = o
          , r = (i("e2b4"),
        i("2877"))
          , m = Object(r["a"])(h, a, s, !1, null, "b842028c", null);
        t["default"] = m.exports
    },
    df8e: function(e, t, i) {
        "use strict";
        i("3c92")
    },
    e2b4: function(e, t, i) {
        "use strict";
        i("2716")
    }
}]);
//# sourceMappingURL=chunk-f2b7093c.8e964ded.js.map
