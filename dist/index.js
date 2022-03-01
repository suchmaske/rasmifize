"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replacementRules_1 = require("./replacementRules");
function rasmifize(arabicString) {
    var rasm = arabicString.replace(replacementRules_1.characterRemovalRange, '');
    replacementRules_1.replacementRules.forEach(function (replacementRule) {
        rasm = rasm.replace(replacementRule.original, replacementRule.replacement);
    });
    return rasm.trim();
}
exports.default = rasmifize;
module.exports = rasmifize;
