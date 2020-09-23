(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rasmifize = require('rasmifize');

const originalArabic = document.getElementById('arabic');
const rasmifizeTarget = document.getElementById('rasmifized');
const initialValue = "الفَاتِحَة";

originalArabic.value = initialValue;
rasmifizeTarget.textContent = rasmifize(originalArabic.value);

originalArabic.addEventListener('input', function (event) {
  rasmifizeTarget.textContent = rasmifize(event.target.value);
})
},{"rasmifize":2}],2:[function(require,module,exports){
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

},{"./replacementRules":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacementRules = exports.characterRemovalRange = void 0;
/*
* List of unicode characters that should be removed
* '\u0615', '\u0617', '\u0618', '\u0619', '\u061A', '\u061E',
* '\u0621',
* '\u0640
* '\u064B', '\u064C', '\u064D', '\u064F', '\u0650', '\u0651', '\u0652', '\u0653', '\u0654', '\u0655
* '\u0656',
* '\u0670',
* '\u0674',
* '\u06D6', '\u06D7', '\u06D8', '\u06D9', '\u06DA', '\u06DB', '\u06DC',
* '\06DF', \u06E1', '\u06E2', '\u06E3', '\u06E4', '\u06E5', '\u06E6'
* '\u06ED',
*/
exports.characterRemovalRange = /[\u0615-\u061e\u0621\u0640\u064b-\u0655\u0656\u0670\u0674\u06d6-\u06dc\u06df\u06e1-\u06e6\u06ed]/g;
exports.replacementRules = [
    // Replace arabic letter alef wasla (\u0671) with arabic letter alef (\u0627)
    { original: /\u0671/g, replacement: "\u0627" },
    // Replace arabic letter teh (\u062A) with arabic letter dotless beh (\u066E)
    { original: /\u062A/g, replacement: "\u066E" },
    // Replace arabic letter teh marbuta (\u0629) with arabic letter heh (\u0647)
    { original: /\u0629/g, replacement: "\u0647" },
    // Replace arabic letter feh (\u0641) with arabic letter dotless feh (\u06A1)
    { original: /\u0641/g, replacement: "\u06A1" },
    // Replace arabic letter beh (\u0628) with arabic letter dotless beh (\u066E)
    { original: /\u0628/g, replacement: "\u066E" },
    // Replace arabic letter yeh (\u064A) with arabic letter alef maksura (\u0649)
    { original: /\u064A/g, replacement: "\u0649" },
    // Replace arabic letter kaf (\u0643) with arabic letter keheh (\u06A9)
    { original: /\u0643/g, replacement: "\u06A9" },
    // Replace arabic letter alef with hamza below (\u0625) with arabic letter alef (\u0627)
    { original: /\u0625/g, replacement: "\u0627" },
    // Replace arabic letter qaf (\u0642) with arabic letter dotless qaf (\u066F)
    { original: /\u0642/g, replacement: "\u066F" },
    // Replace arabic letter thal (\u0630) with arabic letter dal (\u062F)
    { original: /\u0630/g, replacement: "\u062F" },
    // Replace arabic letter alef with hamza above (\u0623) with arabic letter alef (\u0627)
    { original: /\u0623/g, replacement: "\u0627" },
    // Replace arabic letter ghain (\u063A) with arabic letter ain (\u0639)
    { original: /\u063A/g, replacement: "\u0639" },
    // Replace arabic letter dad (\u0636) with arabic letter sad (\u0635)
    { original: /\u0636/g, replacement: "\u0635" },
    // Replace arabic letter alef with madda above (\u0622) with arabic letter alef (\u0627)
    { original: /\u0622/g, replacement: "\u0627" },
    // Replace arabic letter sheen (\u0634) with arabic letter seen (\u0633)
    { original: /\u0634/g, replacement: "\u0633" },
    // Replace arabic letter jeem (\u062C) with arabic letter hah (\u062D)
    { original: /\u062C/g, replacement: "\u062D" },
    // Replace arabic letter zain (\u0632) with arabic letter reh (\u0631)
    { original: /\u0632/g, replacement: "\u0631" },
    // Replace arabic letter khah (\u062E) with arabic letter hah (\u062D)
    { original: /\u062E/g, replacement: "\u062D" },
    // Replace arabic letter theh (\u062B) with arabic letter dotless beh (\u066E)
    { original: /\u062B/g, replacement: "\u066E" },
    // Replace arabic letter zah (\u0638) with arabic letter tah (\u0637)
    { original: /\u0638/g, replacement: "\u0637" },
    // Replace arabic letter waw with hamza above (\u0624) with arabic letter waw (\u0648)
    { original: /\u0624/g, replacement: "\u0648" },
    // Replace arabic letter yeh (\u0626) at the end of a word with arabic letter alef maksura (\u0649)
    { original: /\u0626$/, replacement: "\u0649" },
    // Replace arabic letter yeh with hamza above (\u0626) with arabic letter dotless beh (\u066E)
    { original: /\u0626/g, replacement: "\u066E" },
    // Replace arabic letter noon (\u0646) with arabic letter noon ghunna (\u06BA)
    { original: /\u0646/g, replacement: "\u06BA" },
    // Replace arabic letter farsi yeh (\u06CC) with arabic letter alef maksura (\u0649)
    { original: /\u06CC/g, replacement: "\u0649" },
    // Insert zero-width-joiner (\u200D) into lam lam ha to avoid wrong ligatures
    { original: /\u0644\u0644\u0647/g, replacement: "\u0644\u0644\u200D\u0647" }
];

},{}]},{},[1]);
