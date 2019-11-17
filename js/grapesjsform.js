/*! grapesjs-plugin-forms - 1.0.5 */

!function(e, t) {
    "object"==typeof exports&&"object"==typeof module?module.exports=t(): "function"==typeof define&&define.amd?define([], t): "object"==typeof exports?exports["grapesjs-plugin-forms"]=t(): e["grapesjs-plugin-forms"]=t()
}

(window, function() {
    return function(e) {
        var t= {}
        ;
        function a(l) {
            if(t[l])return t[l].exports;
            var n=t[l]= {
                i:l, l:!1, exports: {}
            }
            ;
            return e[l].call(n.exports, n, n.exports, a), n.l=!0, n.exports
        }
        return a.m=e, a.c=t, a.d=function(e, t, l) {
            a.o(e, t)||Object.defineProperty(e, t, {
                enumerable: !0, get: l
            }
            )
        }
        , a.r=function(e) {
            "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }
            ), Object.defineProperty(e, "__esModule", {
                value: !0
            }
            )
        }
        , a.t=function(e, t) {
            if(1&t&&(e=a(e)), 8&t)return e;
            if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
            var l=Object.create(null);
            if(a.r(l), Object.defineProperty(l, "default", {
                enumerable: !0, value: e
            }
            ), 2&t&&"string"!=typeof e)for(var n in e)a.d(l, n, function(t) {
                return e[t]
            }
            .bind(null, n));
            return l
        }
        , a.n=function(e) {
            var t=e&&e.__esModule?function() {
                return e.default
            }
            :function() {
                return e
            }
            ;
            return a.d(t, "a", t), t
        }
        , a.o=function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        , a.p="", a(a.s=2)
    }
    ([function(e, t, a) {
        var l=a(1);
        e.exports=function(e) {
            for(var t=1;
            t<arguments.length;
            t++) {
                var a=null!=arguments[t]?arguments[t]: {}
                , n=Object.keys(a);
                "function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                }
                ))), n.forEach(function(t) {
                    l(e, t, a[t])
                }
                )
            }
            return e
        }
    }
    , function(e, t) {
        e.exports=function(e, t, a) {
            return t in e?Object.defineProperty(e, t, {
                value: a, enumerable: !0, configurable: !0, writable: !0
            }
            ):e[t]=a, e
        }
    }
    , function(e, t, a) {
        "use strict";
        a.r(t);
        var l=a(0), n=a.n(l);
        t.default=function(e) {
            var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: {}
            , a=n()( {
                blocks: ["form", "input", "textarea", "select", "button", "label", "checkbox", "radio"], labelTraitMethod: "Method", labelTraitAction: "Action", labelTraitState: "State", labelTraitId: "ID", labelTraitFor: "For", labelInputName: "Input", labelTextareaName: "Textarea", labelSelectName: "Select", labelCheckboxName: "Checkbox", labelRadioName: "Radio", labelButtonName: "Button", labelTraitName: "Name", labelTraitPlaceholder: "Placeholder", labelTraitValue: "Value", labelTraitRequired: "Required", labelTraitType: "Type", labelTraitOptions: "Options", labelTraitChecked: "Checked", labelTypeText: "Text", labelTypeEmail: "Email", labelTypePassword: "Password", labelTypeNumber: "Number", labelTypeSubmit: "Submit", labelTypeReset: "Reset", labelTypeButton: "Button", labelNameLabel: "Label", labelForm: "Form", labelSelectOption: "- Select option -", labelOption: "Option", labelStateNormal: "Normal", labelStateSuccess: "Success", labelStateError: "Error", category: "Forms"
            }
            , t);
            !function(e) {
                var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: {}
                , a=e.DomComponents, l=a.getType("default"), o=a.getType("text"), s=l.model, r=l.view, c=o.model, i=o.view, p= {
                    name: "id", label: t.labelTraitId
                }
                , b= {
                    name: "for", label: t.labelTraitFor
                }
                , u= {
                    name: "name", label: t.labelTraitName
                }
                , d= {
                    name: "placeholder", label: t.labelTraitPlaceholder
                }
                , g= {
                    name: "value", label: t.labelTraitValue
                }
                , m= {
                    type: "checkbox", name: "required", label: t.labelTraitRequired
                }
                , h= {
                    label: t.labelTraitChecked, type: "checkbox", name: "checked"
                }
                ;
                a.addType("form", {
                    model:s.extend( {
                        defaults:n()( {}
                        , s.prototype.defaults, {
                            droppable:":not(form)", draggable:":not(form)", traits:[ {
                                type:"select", label:t.labelTraitMethod, name:"method", options:[ {
                                    value: "get", name: "GET"
                                }
                                , {
                                    value: "post", name: "POST"
                                }
                                ]
                            }
                            , {
                                label: t.labelTraitAction, name: "action"
                            }
                            ]
                        }
                        ), init:function() {
                            this.listenTo(this, "change:formState", this.updateFormState)
                        }
                        , updateFormState:function() {
                            switch(this.get("formState")) {
                                case"success": this.showState("success");
                                break;
                                case"error": this.showState("error");
                                break;
                                default: this.showState("normal")
                            }
                        }
                        , showState:function(e) {
                            var t, a, l=e||"normal";
                            "success"==l?(t="none", a="block"): "error"==l?(t="block", a="none"): (t="none", a="none");
                            var n=this.getStateModel("success"), o=this.getStateModel("error"), s=n.getStyle(), r=o.getStyle();
                            s.display=a, r.display=t, n.setStyle(s), o.setStyle(r)
                        }
                        , getStateModel:function(e) {
                            for(var t, a=e||"success", l=this.get("components"), n=0;
                            n<l.length;
                            n++) {
                                var o=l.models[n];
                                if(o.get("form-state-type")==a) {
                                    t=o;
                                    break
                                }
                            }
                            if(!t) {
                                var s=formMsgSuccess;
                                "error"==a&&(s=formMsgError), t=l.add( {
                                    "form-state-type":a, type:"text", removable:!1, copyable:!1, draggable:!1, attributes: {
                                        "data-form-state": a
                                    }
                                    , content:s
                                }
                                )
                            }
                            return t
                        }
                    }
                    , {
                        isComponent:function(e) {
                            if("FORM"==e.tagName)return {
                                type: "form"
                            }
                        }
                    }
                    ), view:r.extend( {
                        events: {
                            submit:function(e) {
                                e.preventDefault()
                            }
                        }
                    }
                    )
                }
                ), a.addType("input", {
                    model:s.extend( {
                        defaults:n()( {}
                        , s.prototype.defaults, {
                            name:t.labelInputName, tagName:"input", draggable:"form, form *", droppable:!1, traits:[u, d, {
                                label:t.labelTraitType, type:"select", name:"type", options:[ {
                                    value: "text", name: t.labelTypeText
                                }
                                , {
                                    value: "email", name: t.labelTypeEmail
                                }
                                , {
                                    value: "password", name: t.labelTypePassword
                                }
                                , {
                                    value: "number", name: t.labelTypeNumber
                                }
                                ]
                            }
                            , m]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("INPUT"==e.tagName)return {
                                type: "input"
                            }
                        }
                    }
                    ), view:r
                }
                );
                var f=a.getType("input"), v=f.model;
                a.addType("textarea", {
                    model:f.model.extend( {
                        defaults:n()( {}
                        , v.prototype.defaults, {
                            name: t.labelTextareaName, tagName: "textarea", traits: [u, d, m]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("TEXTAREA"==e.tagName)return {
                                type: "textarea"
                            }
                        }
                    }
                    ), view:r
                }
                ), a.addType("select", {
                    model:s.extend( {
                        defaults:n()( {}
                        , v.prototype.defaults, {
                            name:t.labelSelectName, tagName:"select", traits:[u, {
                                label: t.labelTraitOptions, type: "select-options"
                            }
                            , m]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("SELECT"==e.tagName)return {
                                type: "select"
                            }
                        }
                    }
                    ), view:l.view.extend( {
                        events: {
                            mousedown: "handleClick"
                        }
                        , handleClick:function(e) {
                            e.preventDefault()
                        }
                    }
                    )
                }
                ), a.addType("checkbox", {
                    model:s.extend( {
                        defaults:n()( {}
                        , v.prototype.defaults, {
                            name:t.labelCheckboxName, copyable:!1, attributes: {
                                type: "checkbox"
                            }
                            , traits:[p, u, g, m, h]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("INPUT"==e.tagName&&"checkbox"==e.type)return {
                                type: "checkbox"
                            }
                        }
                    }
                    ), view:r.extend( {
                        events: {
                            click: "handleClick"
                        }
                        , handleClick:function(e) {
                            e.preventDefault()
                        }
                        , init:function() {
                            this.listenTo(this.model, "change:attributes:checked", this.handleChecked)
                        }
                        , handleChecked:function() {
                            this.el.checked=!!this.model.get("attributes").checked
                        }
                    }
                    )
                }
                );
                var y=a.getType("checkbox");
                a.addType("radio", {
                    model:y.model.extend( {
                        defaults:n()( {}
                        , y.model.prototype.defaults, {
                            name:t.labelRadioName, attributes: {
                                type: "radio"
                            }
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("INPUT"==e.tagName&&"radio"==e.type)return {
                                type: "radio"
                            }
                        }
                    }
                    ), view:y.view
                }
                ), a.addType("button", {
                    model:s.extend( {
                        defaults:n()( {}
                        , v.prototype.defaults, {
                            name:t.labelButtonName, tagName:"button", traits:[ {
                                type: "content", label: "Text"
                            }
                            , {
                                label:t.labelTraitType, type:"select", name:"type", options:[ {
                                    value: "submit", name: t.labelTypeSubmit
                                }
                                , {
                                    value: "reset", name: t.labelTypeReset
                                }
                                , {
                                    value: "button", name: t.labelTypeButton
                                }
                                ]
                            }
                            ]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("BUTTON"==e.tagName)return {
                                type: "button"
                            }
                        }
                    }
                    ), view:r.extend( {
                        events: {
                            click: "handleClick"
                        }
                        , init:function() {
                            this.listenTo(this.model, "change:content", this.updateContent)
                        }
                        , updateContent:function() {
                            this.el.innerHTML=this.model.get("content")
                        }
                        , handleClick:function(e) {
                            e.preventDefault()
                        }
                    }
                    )
                }
                ), a.addType("label", {
                    model:c.extend( {
                        defaults:n()( {}
                        , c.prototype.defaults, {
                            name: t.labelNameLabel, tagName: "label", traits: [b]
                        }
                        )
                    }
                    , {
                        isComponent:function(e) {
                            if("LABEL"==e.tagName)return {
                                type: "label"
                            }
                        }
                    }
                    ), view:i
                }
                )
            }
            (e, a), function(e) {
                arguments.length>1&&void 0!==arguments[1]&&arguments[1];
                var t=e.TraitManager, a=t.getType("text");
                t.addType("content", {
                    events: {
                        keyup: "onChange"
                    }
                    , onValueChange:function() {
                        var e=this.model;
                        e.target.set("content", e.get("value"))
                    }
                    , getInputEl:function() {
                        return this.inputEl||(this.inputEl=a.prototype.getInputEl.bind(this)(), this.inputEl.value=this.target.get("content")), this.inputEl
                    }
                }
                ), t.addType("select-options", {
                    events: {
                        keyup: "onChange"
                    }
                    , onValueChange:function() {
                        for(var e=this.model.get("value").trim().split("\n"), t=[], a=0;
                        a<e.length;
                        a++) {
                            var l=e[a].split("::"), n= {
                                tagName:"option", attributes: {}
                            }
                            ;
                            l[1]?(n.content=l[1], n.attributes.value=l[0]):(n.content=l[0], n.attributes.value=l[0]), t.push(n)
                        }
                        this.target.get("components").reset(t), this.target.view.render()
                    }
                    , getInputEl:function() {
                        if(!this.$input) {
                            for(var e=this.model, t=this.target, a=(e.get("name"), ""), l=t.get("components"), n=0;
                            n<l.length;
                            n++) {
                                var o=l.models[n], s=o.get("attributes").value||"";
                                a+="".concat(s, "::").concat(o.get("content"), "\n")
                            }
                            this.$input=document.createElement("textarea"), this.$input.value=a
                        }
                        return this.$input
                    }
                }
                )
            }
            (e, a), function(e) {
                var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: {}
                , a=e.BlockManager;
                t.blocks.indexOf("form")>=0&&a.add("form", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z" fill-rule="nonzero"></path>\n        <path class="gjs-block-svg-path" d="M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z" fill-rule="nonzero"></path>\n        <rect class="gjs-block-svg-path" x="2" y="15" width="10" height="3" rx="0.5"></rect>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelForm, "</div>"), category: t.category, content: '\n        <form class="form">\n          <div class="form-group">\n            <label class="label">Name</label>\n            <input placeholder="Type here your name" class="input"/>\n          </div>\n          <div class="form-group">\n            <label class="label">Email</label>\n            <input type="email" placeholder="Type here your email" class="input"/>\n          </div>\n          <div class="form-group">\n            <label class="label">Gender</label>\n            <input type="checkbox" class="checkbox" value="M">\n            <label class="checkbox-label">M</label>\n            <input type="checkbox" class="checkbox" value="F">\n            <label class="checkbox-label">F</label>\n          </div>\n          <div class="form-group">\n            <label class="label">Message</label>\n            <textarea class="textarea"></textarea>\n          </div>\n          <div class="form-group">\n            <button type="submit" class="button">Send</button>\n          </div>\n        </form>\n      '
                }
                ), t.blocks.indexOf("input")>=0&&a.add("input", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>\n        <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelInputName, "</div>"), category: t.category, content: '<input class="input"/>'
                }
                ), t.blocks.indexOf("textarea")>=0&&a.add("textarea", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>\n        <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>\n        <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>\n        <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>\n        <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelTextareaName, "</div>"), category: t.category, content: '<textarea class="textarea"></textarea>'
                }
                ), t.blocks.indexOf("select")>=0&&a.add("select", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n        <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>\n        <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelSelectName, "</div>"), category: t.category, content: '<select class="select">\n        '.concat(t.labelSelectOption?'<option value="">'.concat(t.labelSelectOption, "</option>"): "", '\n        <option value="1">').concat(t.labelOption, " 1</option>\n        </select>")
                }
                ), t.blocks.indexOf("button")>=0&&a.add("button", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelButtonName, "</div>"), category: t.category, content: '<button class="button">Send</button>'
                }
                ), t.blocks.indexOf("label")>=0&&a.add("label", {
                    label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path class="gjs-block-svg-path" d="M22,11.875 C22,11.35 21.5,11 20.75,11 L3.25,11 C2.5,11 2,11.35 2,11.875 L2,17.125 C2,17.65 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.65 22,17.125 L22,11.875 Z M21,17 L3,17 L3,12 L21,12 L21,17 Z" fill-rule="nonzero"></path>\n        <rect class="gjs-block-svg-path" x="2" y="5" width="14" height="5" rx="0.5"></rect>\n        <polygon class="gjs-block-svg-path" fill-rule="nonzero" points="4 13 5 13 5 16 4 16"></polygon>\n      </svg>\n      <div class="gjs-block-label">'.concat(t.labelNameLabel, "</div>"), category: t.category, content: '<label class="label">Label</label>'
                }
                ), t.blocks.indexOf("checkbox")>=0&&a.add("checkbox", {
                    label:t.labelCheckboxName, attributes: {
                        class: "fa fa-check-square"
                    }
                    , category:t.category, content:'<input type="checkbox" class="checkbox"/>'
                }
                ), t.blocks.indexOf("radio")>=0&&a.add("radio", {
                    label:t.labelRadioName, attributes: {
                        class: "fa fa-dot-circle-o"
                    }
                    , category:t.category, content:'<input type="radio" class="radio"/>'
                }
                )
            }
            (e, a)
        }
    }
    ])
}

);
//# sourceMappingURL=grapesjs-plugin-forms.min.js.map