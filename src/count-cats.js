const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let joinedMatrix =[];
  let number = 0;

  for (let i = 0; i < matrix.length; i++)
{

joinedMatrix.push(...matrix[i]);

}

for (let j=0; j<joinedMatrix.length;j++)

{
if (joinedMatrix[j] === '^^'){
   number=number+1
}
}
return number;
  
}

module.exports = {
  countCats
};
