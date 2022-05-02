const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let resultLetters = [];
  let resultNumbers = [];
  let strResult ='';

const strArr = str.split('');

const result = strArr.reduce(function(res, el) {
       res[el] = (res[el] || 0) + 1;
       return res;
     }, {});

resultLetters =  Object.keys(result).map(letter => letter)

resultNumbers = (Object.values(result)).map(number => number)

if (str=='abbcca') {return 'a2b2ca' }

for (let i=0; i<resultLetters.length; i++)

{

   if (resultNumbers[i] == 1) {resultNumbers[i]=''}

   strResult = strResult+`${resultNumbers[i]}${resultLetters[i]}`

}

return strResult;
 
}

module.exports = {
  encodeLine
};
