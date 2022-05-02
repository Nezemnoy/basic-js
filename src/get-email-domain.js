const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  
     let newStr = email.split('');
     let newStrJoined;
     let indexSplit;
    for (let i=(email.length-1); i>=0; i--)
{
    
    if (email[i]=='@'){
        indexSplit = i;
        break;
    }
}

newStr.splice(0,indexSplit+1);
newStrJoined = newStr.join('')

return newStrJoined;
}

module.exports = {
  getEmailDomain
};
