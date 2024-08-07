import React from "react";

const Index =()=>{
    let old_arr = [-5, 4, 5, 6, 8, 10, 56];
    const quickSort = (arr: number[]): number[] => {
        if (arr.length < 2) {
            return arr;
        }
        
        const pivot = arr[arr.length - 1];
        const left: number[] = [];
        const right: number[] = [];
    
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    
        return [...quickSort(left), pivot, ...quickSort(right)];
    };
    

    return(
        <>
        <h1>Quick Sort</h1>
        <p>quickSort: - {quickSort(old_arr)}</p>
        </>
    )
}

export default Index