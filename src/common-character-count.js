const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  
  let matches = '';
  let count=0;

for (let j=0; j<s1.length; j++) {

if (!s2.includes(s1[j])){
  continue;
}

if(!s1.includes(s1[j])){
  matches = matches.concat(s1[j]);}
else {
    if ((s1.includes(s1[j]))&&(!matches.includes(s1[j]))){
      matches = matches.concat(s1[j]);}
    }
}

arrS1 = s1.split('');
arrS2 = s2.split('');
arrMatches = matches.split('');
let countS1 = 0;
let countS2 = 0; 
let resultArrS1 = [];
let resultArrS2 = [];


for (let i=0; i<arrMatches.length; i++){

  for (let k=0; k<arrS1.length; k++){

      if (arrMatches[i]==arrS1[k]){
          console.log(arrMatches[i])
          countS1++;       
      }        
  }
  resultArrS1.push (countS1);
  countS1=0; 

  for (let n=0; n<arrS2.length; n++){

      if (arrMatches[i]==arrS2[n]){

          countS2++;           
      }     
  }
  resultArrS2.push (countS2);
  countS2=0; 
}

for (let f=0; f<arrMatches.length; f++ ){

if (resultArrS1[f]<resultArrS2[f]){

  count = count+resultArrS1[f]

} else {count = count+resultArrS2[f]}
  
}
console.log(count)
return count;

}

module.exports = {
  getCommonCharacterCount
};
