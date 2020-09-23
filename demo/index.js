const rasmifize = require('rasmifize');

const originalArabic = document.getElementById('arabic');
const rasmifizeTarget = document.getElementById('rasmifized');
const initialValue = "الفَاتِحَة";

originalArabic.value = initialValue;
rasmifizeTarget.textContent = rasmifize(originalArabic.value);

originalArabic.addEventListener('input', function (event) {
  rasmifizeTarget.textContent = rasmifize(event.target.value);
})