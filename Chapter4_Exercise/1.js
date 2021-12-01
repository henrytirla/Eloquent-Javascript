/**
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

**/
//a

function NumberRange(start,end){
  let numArray =[]
  for (let num = start; num
  <=end; num++){

numArray.push(num);

}
  console.log(numArray);

}

NumberRange(1,10);


//b

function SumFunction(arr){

  const sum_arr = arr.reduce((a, b) => a + b, 0);
  console.log(sum_arr);
}

SumFunction("b " + [1,3,4]);

//c



function NumberRange(start,end,step){
  let numArray =[]
  if (step>0){for (let num = start; num
  <=end; num=num+step){

numArray.push(num);

}
} else{
  for (let num = start; num
  <=end; num = num - 1){

numArray.push(num);


}

}
console.log(numArray);

}

NumberRange(5,2,-1);
