import React from "react";

const Index = () => {
  // Cartesian Product
  const old_arr1 = [1, 2];
  const old_arr2 = [3, 4];

  const cartesianProduct = (arr1: number[], arr2: number[]): number[][] => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        result.push([arr1[i], arr2[j]]);
      }
    }
    return result;
  };

  // Climbing Staircase
  const climbingStaircase = (n: number): number => {
    const noOfWays =[1,2]
    for (let i=2; i<=n ; i++){
        noOfWays[i]= noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n-1];
  };

  // Tower of Hanoi 
  const towerOfHanoi=(n:number, fromRod:string, toRod:string, usingRod:string)=>{
    if(n===1){
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
      return 
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod,toRod,fromRod)
  }

  return (
    <>
      <h1>Question</h1>
      <p>cartesian Product is {cartesianProduct(old_arr1, old_arr2)}</p>
      <p>Climbing Staircase is {climbingStaircase(5)}</p>
      {/* <p>Tower of Hanoi is {towerOfHanoi(2, 'A', 'B', 'C')}</p> */}

    </>
  );
};

export default Index;
