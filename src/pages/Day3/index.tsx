import React from "react";

const Index = () => {
  let old_arr = [-5, 4, 5, 6, 8, 10, 56];
  old_arr.sort((a, b) => a - b);
  const linearSearch = (arr: number[], target: string | number): number => {
    for (let i = 0; i < arr.length - 1, i++; ) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  };

  const binarySearch = (arr: number[], target: number): number => {
    // assume arr is sort
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (target === arr[middleIndex]) {
        return middleIndex;
      }
      if (target < arr[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
    return -1;
  };


//   recursive binary search
const recursiveBinarySearch=(arr:number[],targetValue:number):number=>{
    return helperSearch(arr,targetValue, 0, arr.length-1)
}

const  helperSearch =(arr:number[], target:number, leftIndex:number, rightIndex:number):number=>{
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target< arr[middleIndex]){
      return  helperSearch(arr,target,leftIndex,middleIndex+1)
    }else{
       return helperSearch(arr,target,middleIndex+1,rightIndex)
    }
}


  return (
    <>
      <h2>Linear Search</h2>
      <div>
        {linearSearch(old_arr, 5)}
        <p>binary search index of 56 in a array {binarySearch(old_arr, 4)}</p>
        <p>recursive binary search index of 56 in a array {recursiveBinarySearch(old_arr, 56)}</p>

      </div>
    </>
  );
};

export default Index;
