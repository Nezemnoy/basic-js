const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

let nArr;
let nDelete;
let nNew;

nArr = n.toString(10).split('').map(int => parseInt(int, 10))


for (let i=0; i<nArr.length; i++)

{
    nDelete=i;

    if (nArr[i]<nArr[i+1])
    {

        nDelete=i;
        break;
    }


}

 nArr.splice(nDelete,1)
 nNew  = Number(nArr.join(''));
 return nNew;
}

module.exports = {
  deleteDigit
};
