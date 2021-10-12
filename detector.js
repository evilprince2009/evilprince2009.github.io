"use strict";
/**
 * This file is here only to tag the repository language it was originally
 * written in. Do not delete, please! It also contains a little chunk
 * (logic-module.ts) from main TypeScript source code of the project.
 */
exports.__esModule = true;
exports.DetectorModule = void 0;
var DetectorModule = /** @class */ (function () {
    function DetectorModule() {
    }
    DetectorModule.prototype.userIdGenerator = function () {
        var dummyText = "2xxx  x0xx xx0x xxx9 : x5xx : 1xx9";
        return dummyText.replace(/[xy]/g, function (char) {
            var random = (Math.random() * 16) | 0;
            var variable = char == "x" ? random : (random & 0x3) | 0x8;
            return variable.toString(16);
        });
    };
    DetectorModule.prototype.isWhitespace = function (input_string) {
        if (input_string === "" ||
            input_string === "\t" ||
            input_string === "\n" ||
            input_string === "\r") {
            return true;
        }
        for (var i = 0; i < input_string.length; i++) {
            if (input_string[i] !== " ")
                return false;
        }
        return true;
    };
    DetectorModule.prototype.detectNumber = function (x) {
        return !isNaN(x);
    };
    DetectorModule.prototype.openSocialProfile = function (siteName) {
        var url = "https://www." + siteName + ".com/evilprince2009";
        window.open(url, "_blank");
    };
    return DetectorModule;
}());
exports.DetectorModule = DetectorModule;
