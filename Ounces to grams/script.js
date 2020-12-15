'use strict';

document.querySelector('.convert1').addEventListener('click', function () {
  let grams = Number(document.querySelector('#grams1').value);
  let ounces = (grams / 28.35).toFixed(2);
  document.querySelector('#ounces1').value = ounces;
});
document.querySelector('.convert2').addEventListener('click', function () {
  let ounces2 = Number(document.querySelector('#grams2').value);
  let grams2 = (ounces2 * 28.35).toFixed(2);
  document.querySelector('#grams2').value = grams2;
});
