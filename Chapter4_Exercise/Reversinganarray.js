// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?


/**

If you had issues understanding the question like me
know that reversing in array simply means reversing without using another array

   **/

// function reverseArray(arr){
// let   arr_length = arr.length;
// let   new_arr =[];
//   for(let i=1;i<=arr_length;i++){
//
//     new_arr.push(arr[arr_length-i]);
// }
//   console.log(new_arr);
//   }
//
// reverseArray([1,2,3,4,5])



function reverseArrayInPlace(arr2){

   let temp
  for(let i=0; i<arr2.length/2;i++){

     temp = arr2[i]
     arr2[i] = arr2[arr2.length-1-i]
     arr2[arr2.length-1-i] = temp


    console.log(i,temp, arr2[i]);
    //arr2[n-1] = temp;
  }
  //return arr2;
  console.log(i,temp, arr2[i]);


     //return popped;
     //arr2.push(popped)
     //console.log(start);




  }


console.log(reverseArrayInPlace([1,2,3,4]));
