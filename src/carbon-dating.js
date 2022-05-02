const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let numberYr; 
  if ((typeof (sampleActivity) === 'string')&&(sampleActivity!==null)&&(sampleActivity!=0)){
  let smp = 1+ Number(sampleActivity);
  if ((typeof(smp) === 'number')&&(!isNaN(smp))&&(smp>0)){
  smp = smp - 1;
  let k = 0.693/5730;
  numberYr = Math.ceil(Math.log(15/smp)/k);
  }

  else  { return false;} }
  else  { return false;}
  if (numberYr>0) {
    return numberYr; }
    else {return false}     
}

module.exports = {
  dateSample
};
