import React from "react";

const Index =()=>{

    let arr = [-5, 5 ,6,8,10,56]
    const linearSearch = (arr:number[],target:string | number):number=>{
        for(let i=0; i<arr.length-1 , i++;){
            if(arr[i] === target){
                return i
            }
        }
        return -1
    }
    return(
        <>
        <h2>Linear Search</h2>
        <div>
            {linearSearch(arr, 5)}
        </div>
        </>
    )
}

export default Index