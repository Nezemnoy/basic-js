const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  
  let arrSplited;
  arrSplited = n.split('-');
  let newArr =  [...arrSplited];
  let l = newArr.length;
  let hex;
  let dec;

  for (let i=0; i<l; i++)
  {
      dex = (parseInt(newArr[i], 16));
      hex = (Number(dex).toString(16));

      if (hex.length % 2) {
          hex = '0' + hex;
         }
         if (hex.toString().toUpperCase()!=newArr[i])
          {return false}
      
  }
  return true;

}
module.exports = {
  isMAC48Address
};
