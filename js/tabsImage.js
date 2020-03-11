/*! grapesjs-tabs-image - 0.2.1 */ ! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["grapesjs-tabs-image"] = e() : t["grapesjs-tabs-image"] = e()
}(window, (function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 3)
    }([function(t, e) {
        t.exports = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(2);
        t.exports = function(t, e) {
            if (null == t) return {};
            var n, o, a = r(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (o = 0; o < i.length; o++) n = i[o], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
            }
            return a
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            if (null == t) return {};
            var n, r, o = {},
                a = Object.keys(t);
            for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0),
            o = n.n(r),
            a = n(1),
            i = n.n(a);

        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var l = function(t, e) {
            var n = e.linkModel,
                r = e.linkView,
                a = i()(e, ["linkModel", "linkView"]),
                c = a.attrTab,
                l = a.classTab,
                b = a.selectorTab;
            t.addType("tab", {
                model: n.extend({
                    defaults: s({}, n.prototype.defaults, {

                        name: "Tab",
                        draggable: "[".concat(a.attrTabContainer, "]"),
                        resizable: {
                            tl: 0, // Top left
                            tc: 0, // Top center
                            tr: 0, // Top right
                            cl: 0, // Center left
                            bl: 0, // Bottom left
                      },
                        droppable: !1
                    }, a.tabProps),
                    init: function() {
                        var t = this.getAttributes();
                        t[c] = 1, this.setAttributes(t), l && this.addClass(l)
                    },
                    clone: function() {
                        var t = n.prototype.clone.apply(this, arguments);
                        return t.addAttributes(o()({}, b, "")), t
                    }
                }, {
                    isComponent: function(t) {
                        if (t.hasAttribute && t.hasAttribute(c)) return {
                            type: "tab"
                        }
                    }
                }),
                view: r
            })
        };

        function b(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? b(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var p = function(t, e) {
            var n = e.defaultModel,
                r = e.defaultView,
                o = i()(e, ["defaultModel", "defaultView"]),
                a = o.attrTabs;
            t.addType("tabs", {
                model: n.extend({
                    defaults: u({}, n.prototype.defaults, {
                        name: "Tabs",
                        "ty":'tabs',
                        "property" :'absolute',
                        "attr-tabs": o.attrTabs,
                        ".attr-tabs":o.ty,
                        "attr-tab": o.attrTab,
                        "attr-tab-content": o.attrTabContent,
                        "class-tab-active": o.classTabActive,
                        "selector-tab": o.selectorTab,
                        script: function() {
                            var t, e = this,
                                n = "[{[ attr-tab ]}]",
                                r = document.body,
                                o = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector,
                                a = function(r) {
                                    var o = e.querySelectorAll(n) || [];
                                    for (t = 0; t < o.length; t++) {
                                        var a = o[t],
                                            i = a.className.replace("{[ class-tab-active ]}", "").trim();
                                        a.className = i
                                    }! function() {
                                        var n = e.querySelectorAll("[{[ attr-tab-content ]}]") || [];
                                        for (t = 0; t < n.length; t++) n[t].style.display = "none"
                                    }(), r.className += " {[ class-tab-active ]}";
                                    var c = r.getAttribute("{[ selector-tab ]}"),
                                        s = e.querySelector(c);
                                    s && (s.style.display = "")
                                },
                                i = e.querySelector(".{[ class-tab-active ]}" + n);
                            (i = i || e.querySelector(n)) && a(i), e.addEventListener("click", (function(t) {
                                var e = t.target;
                                o.call(e, n) && a(e)
                            }))
                        }
                    }, o.tabsProps),
                    init: function() {
                        var t = this.getAttributes();
                        t[o.attrTabs] = 1, this.setAttributes(t)
                    }
                }, {
                    isComponent: function(t) {
                        if (t.hasAttribute && t.hasAttribute(a)) return {
                            type: "tabs"
                        }
                    }
                }),
                view: r.extend({
                    init: function() {
                        var t = this.model.components();
                        !t.length && t.add(o.template)
                    },
                    onRender: function() {
                        var t = this.model.find("[".concat(o.attrTabContainer, "]"))[0];
                        t && t.components().each((function(e) {
                            t.onAdd(e)
                        }))
                    }
                })
            })
        };

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var y = function(t, e) {
            var n = e.defaultModel,
                r = e.defaultView,
                o = i()(e, ["defaultModel", "defaultView"]),
                a = o.attrTabContent,
                c = o.classTabContent;
            t.addType("tab-content", {
                model: n.extend({
                    defaults: d({}, n.prototype.defaults, {
                        name: "Tab Content",
                        draggable: !1,
                        resizable: {
                            tl: 0, // Top left
                            tc: 0, // Top center
                            tr: 0, // Top right
                            cl: 0, // Center left
                            bl: 0, // Bottom left
                      },
                        copyable: !1,
                        removable: !1
                    }, o.tabContentProps),
                    init: function() {
                        var t = this.getAttributes();
                        t[a] = 1, this.setAttributes(t), c && this.addClass(c)
                    }
                }, {
                    isComponent: function(t) {
                        if (t.hasAttribute && t.hasAttribute(a)) return {
                            type: "tab-content"
                        }
                    }
                }),
                view: r
            })
        };

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function O(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var g = function(t, e) {
            var n = e.defaultModel,
                r = e.defaultView,
                a = i()(e, ["defaultModel", "defaultView"]),
                c = "tab-container",
                s = a.attrTabs,
                l = a.attrTabContainer,
                b = a.classTabContainer,
                u = a.selectorTab;
            t.addType(c, {
                model: n.extend({
                    defaults: O({}, n.prototype.defaults, {
                        name: "Tab Container",
                        draggable: "[".concat(s, "]"),
                        droppable: "[".concat(a.attrTab, "]"),
                        resizable: {
                            tl: 0, // Top left
                            tc: 0, // Top center
                            tr: 0, // Top right
                            cl: 0, // Center left
                            bl: 0, // Bottom left
                      },
                      
                        copyable: !1,
                        removable: !1
                    }, a.tabContainerProps),
                    init: function() {
                        var t = this.getAttributes();
                        t[l] = 1, this.setAttributes(t), b && this.addClass(b);
                        var e = this.components();
                        this.listenTo(e, "add", this.onAdd), this.listenTo(e, "remove", this.onRemove)
                    },
                    onRemove: function(t, e) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        var n = t.tabContent;
                        n && setTimeout((function() {
                            var e = t.collection,
                                r = n.collection;
                            !e && r && r.remove(n)
                        }), 0)
                    },
                    onAdd: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.getAttributes();
                        if (!t.tabContent && !n.avoidStore) {
                            var i = r[u],
                                c = this.closest("[".concat(s, "]")),
                                l = i && c.view.$el.find(i);
                            if (l && l.length) t.tabContent = l.data("model");
                            else {
                                var b = c.components().add({
                                        type: "tab-content",
                                        components: a.templateTabContent
                                    }),
                                    p = b.getId();
                                b.addAttributes({
                                    id: p
                                }), t.addAttributes(o()({}, u, "#".concat(p))), t.tabContent = b, b.getEl().style.display = "none"
                            }
                        }
                    }
                }, {
                    isComponent: function(t) {
                        if (t.hasAttribute && t.hasAttribute(l)) return {
                            type: c
                        }
                    }
                }),
                view: r
            })
        };

        function h(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function j(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var m = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.DomComponents,
                r = n.getType("default"),
                o = n.getType("link"),
                a = r.model,
                i = r.view,
                c = o.model,
                s = o.view,
                b = j({}, e, {
                    defaultModel: a,
                    defaultView: i,
                    linkModel: c,
                    linkView: s
                });
            l(n, b), p(n, b), y(n, b), g(n, b)
        };

        function w(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function P(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? w(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var T = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.BlockManager,
                r = e.tabsBlock,
                o = e.style,
                a = "tabs",
                i = '<div ty="tabs" data-gjs-type="'.concat(a, '"></div>\n    ').concat(o ? "<style>".concat(o, "</style>") : "");
            r && n.add(a, P({
                label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <g fill-rule="evenodd">\n          <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>\n        </g>\n      </svg>\n      <div class="gjs-block-label">Tab with Images</div>\n    ',
                content: i
            }, r))
        };

        function C(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function x(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? C(n, !0).forEach((function(e) {
                    o()(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : C(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var S = "data-tab";
        var prop = "ty=tabs"
        e.default = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = x({}, {
                    tabsBlock: {},
                    tabsProps: {},
                    tabProps: {},
                    tabContentProps: {},
                    tabContainerProps: {},
                    attrTabs: "data-tabs",
                    attrTab: S,
                    attrTabContent: "data-tab-content",
                    attrTabContainer: "data-tab-container",
                    classTab: "tab",
                    classTabActive: "tab-active",
                    classTabContent: "tab-content",
                    classTabContainer: "tab-container",
                    selectorTab: "href",
                    template: "\n      <nav ty='tabs'".concat("data-tab-container", '>\n        <a href="#tab1" ').concat(S, ' ' ).concat(prop, '>Tab 1</a>\n        <a href="#tab2" ').concat(S, ' ' ).concat(prop, '>Tab 2</a>\n        <a href="#tab3" ').concat(S, ' ' ).concat(prop, '>Tab 3</a>\n      </nav>\n      <div ty="tabs" id="tab1"  ').concat("data-tab-content", '>\n        <div ty="tabs" ><img src="images/placeholder.jpg" ty="tabs"></div>\n      </div>\n      <div ty="tabs" id="tab2" ').concat("data-tab-content", '>\n        <div ty="tabs" ><img src="images/placeholder.jpg" ty="tabs"></div>\n      </div>\n      <div  ty="tabs" id="tab3" ').concat("data-tab-content", ">\n        <div ty='tabs'><img src='images/placeholder.jpg' ty='tabs'></div>\n      </div>\n    "),

                    templateTabContent: "<div property='absolute' ty='tabs'>New Tab Content</div>",

                    style: "\n      .tab {\n        text-decoration: none;\n        color: inherit;\n        padding: 7px 14px;\n        transition: opacity 0.3s;\n        display: inline-block;\n        border-radius: 3px;\n        margin-right: 10px;\n      }\n\n      .tab.tab-active {\n        background-color: #0d94e6;\n        color: white;\n      }\n\n      .tab-content {position:absolute;\n z-index:1\n        padding: 6px 12px;\n        min-height: 100px;\n        animation: fadeEffect 1s;\n      }\n\n      @keyframes fadeEffect {\n        from {opacity: 0;}\n        to {opacity: 1;}\n      }\n    "
                }, {}, e);
            m(t, n), T(t, n)
        }
    }])
}));
//# sourceMappingURL=grapesjs-tabs-image.min.js.map