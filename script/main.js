/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-component.ts":
/*!********************************!*\
  !*** ./src/about-component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutComponent\": () => (/* binding */ AboutComponent)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\nvar AboutComponent = /** @class */ (function () {\r\n    function AboutComponent(container) {\r\n        this.container = container;\r\n    }\r\n    AboutComponent.prototype.render = function () {\r\n        var aboutTemplate = document.createElement(\"div\");\r\n        aboutTemplate.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Intro);\r\n        aboutTemplate.innerHTML = \"\\n        <p>Hello,<br>I'm <span style=\\\"color: aquamarine;\\\">Ibne Nahian</span>, a code freak , music lover , traveller & obviously a passionate learner. Worst thing about me is <span style=\\\"color: #6ef500; font-style:oblique;\\\">'A little stupid Bug can give me Insomnia'</span>. Well, I think that's enough introduction.\\n        </p>\\n        \";\r\n        this.container.appendChild(aboutTemplate);\r\n    };\r\n    return AboutComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/about-component.ts?");

/***/ }),

/***/ "./src/clear-component.ts":
/*!********************************!*\
  !*** ./src/clear-component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClearComponent\": () => (/* binding */ ClearComponent)\n/* harmony export */ });\nvar ClearComponent = /** @class */ (function () {\r\n    function ClearComponent(container, helperModule) {\r\n        this.container = container;\r\n        this.helperModule = helperModule;\r\n    }\r\n    ClearComponent.prototype.render = function () {\r\n        this.helperModule.clearChildFromParent();\r\n        Array.from(this.container.children).forEach(function (child) {\r\n            var _a;\r\n            (_a = child.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(child);\r\n        });\r\n    };\r\n    return ClearComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/clear-component.ts?");

/***/ }),

/***/ "./src/contact-component.ts":
/*!**********************************!*\
  !*** ./src/contact-component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactComponent\": () => (/* binding */ ContactComponent)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\nvar ContactComponent = /** @class */ (function () {\r\n    function ContactComponent(container) {\r\n        this.container = container;\r\n    }\r\n    ContactComponent.prototype.render = function () {\r\n        var contactTemplate = document.createElement(\"div\");\r\n        contactTemplate.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Contact);\r\n        contactTemplate.innerHTML = \"\\n        <p>In case you need me , drop a message via <a href=\\\"mailto:evilprince2009@gmail.com\\\">evilprince2009@gmail.com</a>. I assure you to get back to you as soon as I can.<br>Are you social ? Below are both clickable <span style=\\\"color:aqua;\\\">links</span> &amp; <span style=\\\"color:aqua;\\\">usable commands</span>.</p>\\n\\n        <ul>\\n            <li><span style=\\\"color: rgb(9, 197, 9);\\\">&rArr;</span> <a href=\\\"https://www.linkedin.com/in/evilprince2009/\\\" target=\\\"_blank\\\">LinkedIn</a></li>\\n            <li><span style=\\\"color: rgb(9, 197, 9);\\\">&rArr;</span> <a href=\\\"https://www.github.com/evilprince2009/\\\" target=\\\"_blank\\\">GitHub</a></li>\\n            <li><span style=\\\"color: rgb(9, 197, 9);\\\">&rArr;</span> <a href=\\\"https://web.facebook.com/evilprince2009/\\\" target=\\\"_blank\\\">Facebook</a></li>\\n            <li><span style=\\\"color: rgb(9, 197, 9);\\\">&rArr;</span> <a href=\\\"https://bn.quora.com/profile/%E0%A6%87%E0%A6%AC%E0%A6%A8%E0%A7%87-%E0%A6%A8%E0%A6%BE%E0%A6%B9%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8-Ibne-Nahian\\\" target=\\\"_blank\\\">Quora</a></li>\\n        <li><span style=\\\"color: rgb(9, 197, 9);\\\">&rArr; <a href=\\\"https://www.upwork.com/freelancers/~01ded0be5baccfa296\\\">Upwork</a></span></li></ul>    \\n        <p><span style = \\\"color: aqua;\\\">Just type those social media name in terminal as command &amp; it'll take you to the respective page.</span> <br/>\\n        Don't hesitate to send me a <span style = \\\"color: #ffffff;\\\">'Hello World'</span> via any of those !</p>\\n        \";\r\n        this.container.appendChild(contactTemplate);\r\n    };\r\n    return ContactComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/contact-component.ts?");

/***/ }),

/***/ "./src/css-alias-container.ts":
/*!************************************!*\
  !*** ./src/css-alias-container.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CssAliasContainer\": () => (/* binding */ CssAliasContainer)\n/* harmony export */ });\nvar CssAliasContainer;\r\n(function (CssAliasContainer) {\r\n    CssAliasContainer[\"FooterOnExit\"] = \"footer-on-exit\";\r\n    CssAliasContainer[\"VerticalCenter\"] = \"vertical-center\";\r\n    CssAliasContainer[\"Flip\"] = \"flip\";\r\n    CssAliasContainer[\"Intro\"] = \"intro\";\r\n    CssAliasContainer[\"Contact\"] = \"contact\";\r\n    CssAliasContainer[\"Exception\"] = \"exception\";\r\n    CssAliasContainer[\"Help\"] = \"help\";\r\n    CssAliasContainer[\"Arrow\"] = \"arrow\";\r\n    CssAliasContainer[\"ArrowError\"] = \"arrow-error\";\r\n    CssAliasContainer[\"RestoreButton\"] = \"restore-button\";\r\n    CssAliasContainer[\"UUID\"] = \"uuid\";\r\n})(CssAliasContainer || (CssAliasContainer = {}));\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/css-alias-container.ts?");

/***/ }),

/***/ "./src/exception-component.ts":
/*!************************************!*\
  !*** ./src/exception-component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExceptionComponent\": () => (/* binding */ ExceptionComponent)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\nvar ExceptionComponent = /** @class */ (function () {\r\n    function ExceptionComponent(container) {\r\n        this.container = container;\r\n    }\r\n    ExceptionComponent.prototype.render = function (input) {\r\n        var errorTemplate = document.createElement(\"div\");\r\n        errorTemplate.id = _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Exception;\r\n        errorTemplate.innerHTML = \"<p>\\n    <span style=\\\"color: #e70347;\\\"> Error thrown : InvalidCommandException !</span>\\n    <br>\\n    <span style = \\\"color: #fce283;\\\">The term \\n    <span style=\\\"color: #f5084f;\\\">'\" + input + \"'\\n    </span> is not recognized as the name of\\n    <br>\\n    a cmdlet, function, script file, or operable program.\\n    </span>\\n    <br>\\n    <span style=\\\"color: #fce26e;\\\">Type \\n    <span style=\\\"color: aquamarine;\\\">\\\"help\\\"\\n    </span> or \\n    <span style=\\\"color: aquamarine;\\\">\\\"cls\\\"\\n    </span> for assistance.</span></p>\";\r\n        this.container.appendChild(errorTemplate);\r\n    };\r\n    return ExceptionComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/exception-component.ts?");

/***/ }),

/***/ "./src/fake-dependency.ts":
/*!********************************!*\
  !*** ./src/fake-dependency.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FakeDependency\": () => (/* binding */ FakeDependency)\n/* harmony export */ });\n/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell-component */ \"./src/shell-component.ts\");\n/* harmony import */ var _uuid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uuid-component */ \"./src/uuid-component.ts\");\n\r\n\r\nvar FakeDependency = /** @class */ (function () {\r\n    function FakeDependency() {\r\n    }\r\n    Object.defineProperty(FakeDependency.prototype, \"footer\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"container\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"quit\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"terminal\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"hide\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"maximizeBox\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"mainBody\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"message\", {\r\n        get: function () {\r\n            return document.querySelector(\".fake\");\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"userid\", {\r\n        get: function () {\r\n            return new _uuid_component__WEBPACK_IMPORTED_MODULE_1__.UUIDComponent(this.container);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(FakeDependency.prototype, \"shell\", {\r\n        get: function () {\r\n            return new _shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent(this.container);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return FakeDependency;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/fake-dependency.ts?");

/***/ }),

/***/ "./src/help-component.ts":
/*!*******************************!*\
  !*** ./src/help-component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelpComponent\": () => (/* binding */ HelpComponent)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\nvar HelpComponent = /** @class */ (function () {\r\n    function HelpComponent(container) {\r\n        this.container = container;\r\n    }\r\n    HelpComponent.prototype.render = function () {\r\n        var helpTemplate = document.createElement(\"div\");\r\n        helpTemplate.id = _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Help;\r\n        var firstPara = document.createElement(\"p\");\r\n        firstPara.innerHTML = \"\\n        <span style=\\\"color: rgb(9, 197, 9);\\\">&rArr;</span> Available commands listed below. Type <span\\n                            style=\\\"font-weight: 300; color: aquamarine;\\\">\\\"cls\\\"</span> or <span\\n                            style=\\\"font-weight: 300; color: aquamarine;\\\">\\\"clear\\\"</span> to clear & <span\\n                            style=\\\"font-weight: 300; color: aquamarine;\\\">\\\"exit\\\"</span> to close terminal.\\n        \";\r\n        var list = document.createElement(\"ul\");\r\n        list.innerHTML = \"\\n        <li><span style = \\\"color: #fce26e;\\\">&GreaterGreater;</span> About</li>\\n        <li><span style = \\\"color: #fce26e;\\\">&GreaterGreater;</span> Skills</li>\\n        <li><span style = \\\"color: #fce26e;\\\">&GreaterGreater;</span> Contact</li>\\n        \";\r\n        var secondPara = document.createElement(\"p\");\r\n        secondPara.innerHTML = \"\\n        <span style=\\\"color: #af0437;\\\">&CircleTimes;</span> Never do a <span\\n                            style=\\\"font-weight: 300; color: #cf0240;\\\">\\\"sudo rm -rf\\\"</span> , cause it will mess our\\n                        entire internal system !\\n        \";\r\n        helpTemplate.appendChild(firstPara);\r\n        helpTemplate.appendChild(list);\r\n        helpTemplate.appendChild(secondPara);\r\n        this.container.appendChild(helpTemplate);\r\n    };\r\n    return HelpComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/help-component.ts?");

/***/ }),

/***/ "./src/helper-module.ts":
/*!******************************!*\
  !*** ./src/helper-module.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelperModule\": () => (/* binding */ HelperModule)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell-component */ \"./src/shell-component.ts\");\n\r\n\r\nvar HelperModule = /** @class */ (function () {\r\n    function HelperModule(container, footer, quit, terminal, hide, maximizeBox, mainBody, message, userid, shell) {\r\n        var _this = this;\r\n        this.container = container;\r\n        this.footer = footer;\r\n        this.quit = quit;\r\n        this.terminal = terminal;\r\n        this.hide = hide;\r\n        this.maximizeBox = maximizeBox;\r\n        this.mainBody = mainBody;\r\n        this.message = message;\r\n        this.userid = userid;\r\n        this.shell = shell;\r\n        this.quitTerminal = function () {\r\n            var _a;\r\n            (_a = _this.terminal.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(_this.terminal);\r\n            _this.footer.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.FooterOnExit, _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.VerticalCenter);\r\n        };\r\n    }\r\n    HelperModule.prototype.loadWindow = function (sessionId, mark) {\r\n        var _this = this;\r\n        this.shell = new _shell_component__WEBPACK_IMPORTED_MODULE_1__.ShellComponent(this.container);\r\n        window.addEventListener(\"DOMContentLoaded\", function () {\r\n            _this.maximizeBox.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Flip);\r\n            _this.userid.render(sessionId);\r\n            _this.shell.render();\r\n            _this.renderSign(mark, _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Arrow);\r\n        });\r\n    };\r\n    HelperModule.prototype.renderSign = function (mark, color) {\r\n        this.arrowSelector(mark).classList.add(color);\r\n    };\r\n    HelperModule.prototype.exit = function () {\r\n        var _this = this;\r\n        this.quit.addEventListener(\"click\", function (e) {\r\n            e.preventDefault();\r\n            _this.quitTerminal();\r\n        });\r\n    };\r\n    HelperModule.prototype.hideTerminal = function () {\r\n        var _this = this;\r\n        this.hide.addEventListener(\"click\", function (e) {\r\n            e.preventDefault();\r\n            _this.terminal.classList.add(\"flip\");\r\n            _this.maximizeBox.classList.remove(\"flip\");\r\n        });\r\n    };\r\n    HelperModule.prototype.maximize = function (shell) {\r\n        var _this = this;\r\n        this.maximizeBox.addEventListener(\"click\", function () {\r\n            _this.maximizeBox.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Flip);\r\n            _this.terminal.classList.remove(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.Flip);\r\n            shell.shellFocus();\r\n        });\r\n    };\r\n    HelperModule.prototype.userIdGenerator = function () {\r\n        var dummyText = \"2xxx  x0xx xx0x xxx9 : x5xx : 1xx9\";\r\n        return dummyText.replace(/[xy]/g, function (char) {\r\n            var random = (Math.random() * 16) | 0;\r\n            var variable = char == \"x\" ? random : (random & 0x3) | 0x8;\r\n            return variable.toString(16);\r\n        });\r\n    };\r\n    HelperModule.prototype.restore = function () {\r\n        var _this = this;\r\n        this.mainBody.addEventListener(\"click\", function (e) {\r\n            var _a;\r\n            var targetButton = e.target;\r\n            if (targetButton.className === _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.RestoreButton) {\r\n                (_a = targetButton.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(targetButton);\r\n                _this.footer.classList.remove(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.FooterOnExit, _css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.VerticalCenter);\r\n                location.reload();\r\n            }\r\n        });\r\n    };\r\n    HelperModule.prototype.isWhitespace = function (input_string) {\r\n        if (input_string === \"\" ||\r\n            input_string === \"\\t\" ||\r\n            input_string === \"\\n\" ||\r\n            input_string === \"\\r\") {\r\n            return true;\r\n        }\r\n        for (var i = 0; i < input_string.length; i++) {\r\n            if (input_string[i] !== \" \")\r\n                return false;\r\n        }\r\n        return true;\r\n    };\r\n    HelperModule.prototype.openSocialProfile = function (siteName) {\r\n        var url = \"https://www.\" + siteName + \".com/evilprince2009\";\r\n        window.open(url, \"_blank\");\r\n    };\r\n    HelperModule.prototype.arrowSelector = function (messageMark) {\r\n        var arrows = document.querySelectorAll(\".arrow\");\r\n        var targetArrow = arrows[document.querySelectorAll(\".arrow\").length - 1];\r\n        targetArrow.innerHTML = messageMark;\r\n        return targetArrow;\r\n    };\r\n    HelperModule.prototype.clearChildFromParent = function () {\r\n        var parent = this.terminal;\r\n        var child = this.message;\r\n        if (parent !== null && child !== null) {\r\n            Array.from(parent.children).forEach(function (ch) {\r\n                if (ch === child) {\r\n                    parent.removeChild(ch);\r\n                }\r\n            });\r\n        }\r\n    };\r\n    return HelperModule;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/helper-module.ts?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-module */ \"./src/helper-module.ts\");\n/* harmony import */ var _uuid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uuid-component */ \"./src/uuid-component.ts\");\n/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-component */ \"./src/about-component.ts\");\n/* harmony import */ var _clear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear-component */ \"./src/clear-component.ts\");\n/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-component */ \"./src/contact-component.ts\");\n/* harmony import */ var _exception_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exception-component */ \"./src/exception-component.ts\");\n/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-component */ \"./src/help-component.ts\");\n/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell-component */ \"./src/shell-component.ts\");\n/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills-component */ \"./src/skills-component.ts\");\n/* harmony import */ var _sudo_rm_rf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sudo-rm-rf-component */ \"./src/sudo-rm-rf-component.ts\");\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar userIdHolder = document.querySelector(\".session-userid\");\r\nvar terminal = document.querySelector(\"#terminal\");\r\nvar container = document.querySelector(\"#insert\");\r\nvar quit = document.querySelector(\"#quit\");\r\nvar footer = document.querySelector(\".footer\");\r\nvar hide = document.querySelector(\"#hide\");\r\nvar mainBody = document.querySelector(\".container\");\r\nvar maximizeBox = document.querySelector(\".maximize-terminal\");\r\nvar message = document.querySelector(\".message\");\r\nvar userid = new _uuid_component__WEBPACK_IMPORTED_MODULE_1__.UUIDComponent(userIdHolder);\r\nvar shell = new _shell_component__WEBPACK_IMPORTED_MODULE_7__.ShellComponent(container);\r\nvar helperModule = new _helper_module__WEBPACK_IMPORTED_MODULE_0__.HelperModule(container, footer, quit, terminal, hide, maximizeBox, mainBody, message, userid, shell);\r\nvar help = new _help_component__WEBPACK_IMPORTED_MODULE_6__.HelpComponent(container);\r\nvar clear = new _clear_component__WEBPACK_IMPORTED_MODULE_3__.ClearComponent(container, helperModule);\r\nvar exception = new _exception_component__WEBPACK_IMPORTED_MODULE_5__.ExceptionComponent(container);\r\nvar about = new _about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent(container);\r\nvar skills = new _skills_component__WEBPACK_IMPORTED_MODULE_8__.SkillsComponent(container);\r\nvar contact = new _contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent(container);\r\nvar destroy = new _sudo_rm_rf_component__WEBPACK_IMPORTED_MODULE_9__.SudoRmRfComponent(terminal);\r\nvar sessionId = helperModule.userIdGenerator();\r\nvar successMark = \"&check;\";\r\nvar errorMark = \"&cross;\";\r\nhelperModule.loadWindow(sessionId, successMark);\r\nhelperModule.exit();\r\nhelperModule.hideTerminal();\r\nhelperModule.maximize(shell);\r\nhelperModule.restore();\r\ncontainer.addEventListener(\"keyup\", function (e) {\r\n    e.preventDefault();\r\n    var eventTarget = e.target;\r\n    if (eventTarget.className === \"command\" && e.key === \"Enter\") {\r\n        eventTarget.disabled = true;\r\n        var input_value = eventTarget.value\r\n            .toString()\r\n            .trim()\r\n            .toLowerCase();\r\n        if (input_value === \"help\") {\r\n            help.render();\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"about\") {\r\n            about.render();\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"skills\") {\r\n            skills.render();\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"contact\") {\r\n            contact.render();\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"facebook\") {\r\n            helperModule.openSocialProfile(input_value);\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"linkedin\") {\r\n            window.open(\"https://www.linkedin.com/in/evilprince2009\");\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"quora\") {\r\n            window.open(\"https://bn.quora.com/profile/%E0%A6%87%E0%A6%AC%E0%A6%A8%E0%A7%87-%E0%A6%A8%E0%A6%BE%E0%A6%B9%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8-Ibne-Nahian\");\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"upwork\") {\r\n            window.open(\"https://www.upwork.com/freelancers/~01ded0be5baccfa296\");\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"gh\") {\r\n            helperModule.openSocialProfile(\"github\");\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"github\") {\r\n            helperModule.openSocialProfile(input_value);\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"reload\") {\r\n            window.location.reload();\r\n        }\r\n        else if (container !== null &&\r\n            (input_value === \"cls\" || input_value === \"clear\")) {\r\n            clear.render();\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else if (input_value === \"sudo rm -rf\") {\r\n            destroy.render();\r\n        }\r\n        else if (input_value === \"exit\") {\r\n            helperModule.quitTerminal();\r\n        }\r\n        else if (helperModule.isWhitespace(input_value)) {\r\n            shell.render();\r\n            helperModule.renderSign(successMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.Arrow);\r\n        }\r\n        else {\r\n            exception.render(input_value);\r\n            shell.render();\r\n            helperModule.renderSign(errorMark, _css_alias_container__WEBPACK_IMPORTED_MODULE_10__.CssAliasContainer.ArrowError);\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/scripts.ts?");

/***/ }),

/***/ "./src/shell-component.ts":
/*!********************************!*\
  !*** ./src/shell-component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShellComponent\": () => (/* binding */ ShellComponent)\n/* harmony export */ });\nvar ShellComponent = /** @class */ (function () {\r\n    function ShellComponent(container) {\r\n        this.container = container;\r\n    }\r\n    ShellComponent.prototype.render = function () {\r\n        var shellTemplate = document.createElement(\"div\");\r\n        shellTemplate.classList.add(\"shell\");\r\n        var shellTitle = document.createElement(\"label\");\r\n        shellTitle.classList.add(\"title\");\r\n        shellTitle.htmlFor = \"command-input\";\r\n        shellTitle.innerHTML = \"\\n        <span style=\\\"color: #FF5101;\\\"><span class=\\\"arrow\\\"></span> root</span>@evilprince2009 $ \";\r\n        var shellInput = document.createElement(\"input\");\r\n        shellInput.id = \"command-input\";\r\n        shellInput.classList.add(\"command\");\r\n        shellInput.setAttribute(\"type\", \"text\");\r\n        shellTemplate.appendChild(shellTitle);\r\n        shellTemplate.appendChild(shellInput);\r\n        this.container.appendChild(shellTemplate);\r\n        this.shellFocus();\r\n    };\r\n    ShellComponent.prototype.shellFocus = function () {\r\n        var target = document.querySelectorAll(\".command\");\r\n        var lastInput = target[document.querySelectorAll(\".command\").length - 1];\r\n        lastInput.focus();\r\n    };\r\n    return ShellComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/shell-component.ts?");

/***/ }),

/***/ "./src/skills-component.ts":
/*!*********************************!*\
  !*** ./src/skills-component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SkillsComponent\": () => (/* binding */ SkillsComponent)\n/* harmony export */ });\nvar SkillsComponent = /** @class */ (function () {\r\n    function SkillsComponent(container) {\r\n        this.container = container;\r\n    }\r\n    SkillsComponent.prototype.render = function () {\r\n        var skillsTemplate = document.createElement(\"div\");\r\n        skillsTemplate.classList.add(\"skills\");\r\n        skillsTemplate.innerHTML = \"\\n        <p>I can assist you with</p>\\n        <ul>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> Vanilla / ES6 / TypeScript</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> Angular / React</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> Node / Express</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> .NET / C# / Entity Framework</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> MSSQL / MYSQL / MongoDB</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> Git / TFS</li>\\n            <li><span style=\\\"color: #f5084f;\\\">&starf;</span> MSTEST / NUnit / xUnit / Selenium</li>\\n        </ul>\\n        <p style=\\\"color: #64f105;\\\"><span style=\\\"color: #fec304;\\\">&rArr;</span> Available for freelance , remote or contact based oppertunities.</p>\\n        \";\r\n        this.container.appendChild(skillsTemplate);\r\n    };\r\n    return SkillsComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/skills-component.ts?");

/***/ }),

/***/ "./src/sudo-rm-rf-component.ts":
/*!*************************************!*\
  !*** ./src/sudo-rm-rf-component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SudoRmRfComponent\": () => (/* binding */ SudoRmRfComponent)\n/* harmony export */ });\n/* harmony import */ var _clear_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-component */ \"./src/clear-component.ts\");\n/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-module */ \"./src/helper-module.ts\");\n/* harmony import */ var _fake_dependency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-dependency */ \"./src/fake-dependency.ts\");\n\r\n\r\n\r\nvar SudoRmRfComponent = /** @class */ (function () {\r\n    function SudoRmRfComponent(container) {\r\n        this.container = container;\r\n    }\r\n    SudoRmRfComponent.prototype.render = function () {\r\n        var fakeDependency = new _fake_dependency__WEBPACK_IMPORTED_MODULE_2__.FakeDependency();\r\n        var helperModule = new _helper_module__WEBPACK_IMPORTED_MODULE_1__.HelperModule(fakeDependency.container, fakeDependency.footer, fakeDependency.quit, fakeDependency.terminal, fakeDependency.hide, fakeDependency.maximizeBox, fakeDependency.mainBody, fakeDependency.message, fakeDependency.userid, fakeDependency.shell);\r\n        var clearTerminal = new _clear_component__WEBPACK_IMPORTED_MODULE_0__.ClearComponent(this.container, helperModule);\r\n        clearTerminal.render();\r\n        var destroyTemplate = document.createElement(\"div\");\r\n        destroyTemplate.classList.add(\"message\", \"problem\");\r\n        var headingTemplate = document.createElement(\"h3\");\r\n        headingTemplate.innerHTML = \"dpc_watch_dog_violation <span>&frown;</span>\";\r\n        var detailsTemplate = document.createElement(\"p\");\r\n        detailsTemplate.innerHTML = \"We just ran into a problem.<br /><span>Error Code: (0 x EA1LPR1Z6ES009)</span><br />Probably you did something you were not meant to. Now we have to go through a long maintainance process to make is up and running.<br/>Take a look at the StackTrace below.\";\r\n        var codeTemplate = document.createElement(\"div\");\r\n        codeTemplate.innerHTML = \"<code>global _start\\n    <br />\\n    section .text<br />\\n    _start:\\n    <br />\\n    <span> mov rax, 1 ; write(</span><br />\\n    <span>mov rdi, 1 ; STDOUT_FILENO</span>\\n    <br />\\n    <span>mov rsi, msg ; \\\"0 x EA1LPR1Z6ES009\\\"</span>\\n    <br />\\n    <span>mov rdx, msglen ; sizeof(\\\"0 x EA1LPR1Z6ES009\\\")</span>\\n    <br />\\n    <span>mov rax, 60(</span>\\n    <br />\\n    <span>mov rdi, 0</span>\\n    <br />\\n    <span>syscall</span>\\n    <br />\\n    EXIT_STATUS, -092716653543 x 7</code>\";\r\n        destroyTemplate.appendChild(headingTemplate);\r\n        destroyTemplate.appendChild(detailsTemplate);\r\n        destroyTemplate.appendChild(codeTemplate);\r\n        this.container.appendChild(destroyTemplate);\r\n    };\r\n    return SudoRmRfComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/sudo-rm-rf-component.ts?");

/***/ }),

/***/ "./src/uuid-component.ts":
/*!*******************************!*\
  !*** ./src/uuid-component.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UUIDComponent\": () => (/* binding */ UUIDComponent)\n/* harmony export */ });\n/* harmony import */ var _css_alias_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-alias-container */ \"./src/css-alias-container.ts\");\n\r\nvar UUIDComponent = /** @class */ (function () {\r\n    function UUIDComponent(container) {\r\n        this.container = container;\r\n    }\r\n    UUIDComponent.prototype.render = function (uuid) {\r\n        var uuidTemplate = document.createElement(\"span\");\r\n        uuidTemplate.classList.add(_css_alias_container__WEBPACK_IMPORTED_MODULE_0__.CssAliasContainer.UUID);\r\n        uuidTemplate.innerHTML = \"\" + uuid;\r\n        this.container.appendChild(uuidTemplate);\r\n    };\r\n    return UUIDComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ShellFolio/./src/uuid-component.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.ts");
/******/ 	
/******/ })()
;