const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if(!Array.isArray(arr)) {throw new Error("\'arr\' parameter must be an instance of the Array!");}

  let arrNew = [...arr];

   function double_next(array, index, previos){

       if(index!=array.length-1){
       array.splice((index), 1, previos);}
       else {array.splice(index,1)}
      return  [...array]
   }

   function discard_prev (array, index, previos){
        if (index!==0){array.splice((index-1), 2);}
        else {array.splice(index,1)}
      return  [...array]
   }

    function discard_next (array, index){
  
     array.splice((index), 2);
      return  [...array]
   }

   function double_previous (array, index, previos){
       if (index!=0){
       array.splice((index), 1,previos);}
       else {array.splice(index,1)}
       return  [...array]
    }

    function discard_this (array, index) {
        array.splice((index), 1);
        return  [...array]
    }
   

for (i=0; i<arrNew.length; i++)
{
if (arrNew[i]==='--double-next'){
   arrNew = double_next(arrNew, i, arrNew[i+1])
}

 else if (arrNew[i]==='--discard-prev'){

   arrNew = discard_prev(arrNew,i,arrNew[i])
 }


else if ((arrNew[i]==='--discard-next')&&(!arrNew[i+2]==='--double-prev')) {

   arrNew = discard_next(arrNew,i)
 }
else if (arrNew[i]==='--double-prev'){

   arrNew = double_previous(arrNew,i, arrNew[i-1])
 }

else if ((arrNew[i]==='--discard-next')&&(arrNew[i+2]==='--double-prev')){

   arrNew = discard_next(arrNew,i)
   arrNew = discard_this(arrNew,i)
}

else if ((arrNew[i]==='--discard-next')&&(arrNew[i+2]==='--discard-prev')){

   arrNew = discard_next(arrNew,i)
   arrNew = discard_this(arrNew,i)
}

else if ((arrNew[i]==='--discard-next')&&(i==arrNew.length-1)){
   arrNew = discard_this(arrNew,i)
}

} 
  
  return(arrNew)
}

module.exports = {
  transform
};
