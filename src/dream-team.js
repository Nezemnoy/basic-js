const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let el=[];
     let elSorted = [];
    if (!Array.isArray(members)){return false}    

     members.filter((element) =>  {
        if(typeof(element)==='string') {el.push(element.split('')); } 
        else {return false}
    })

    for (let i = 0; i<el.length; i++ )
    {
       for (let j = 0; j<el[i].length; j++)
        
       if (el[i][j]!=' '){ 
       elSorted.push(el[i][j]); break;
       }
    }

    return elSorted.join('').toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
