const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {


  

  function spliceElement (index,sub){
    arr.splice(index,1,sub)

}
     let buf; 
     let indexArr=[];
     let check = false;
     for (i=0;i<arr.length; i++)
     {
        if(arr[i]!==-1){check = true;continue;}
     }

     if (check==false) {
         return arr;
     }

     
for (let i=0; i<arr.length; i++){
    if (arr[i]===-1){
        indexArr.push(i)
        arr.splice(i,1)
        i=0;
    } 
    
}
    
    for (let i=0; i<arr.length;i++)

    {
        if (arr[i]<arr[i-1]){
        buf = arr[i-1];
        arr[i-1] = arr[i]
        arr[i] = buf;  
        i=0;
        }
    
    }


    let pos;
  
  for (let i=0; i<indexArr.length; i++){
     pos = i+indexArr[i];
        arr.splice(pos,1,-1,arr[pos]);
    }

   return(arr)
}

module.exports = {
  sortByHeight
};
