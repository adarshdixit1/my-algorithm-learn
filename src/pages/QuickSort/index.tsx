import React from "react";

const Index = () => {
    let old_arr = [-5, 4, 5,20, 6, 8, 10, 56];
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


    // merge sort array

    const mergeSort = (arr: number[]): number[] => {
        if(arr.length<2){
            return arr
        }

        const mid = Math.floor(arr.length/2)
        const leftArr = arr.slice(0,mid)
        const rigthArr = arr.slice(mid)
        return merge(mergeSort(leftArr) , mergeSort(rigthArr))
    }

    const merge =(rigthArr:number[], leftArr:number[]):number[]=>{
        const sortedArr:number[] =[]
        while (leftArr.length && rigthArr.length) {
            if (leftArr[0] <= rigthArr[0]) {
                const leftValue = leftArr.shift();
                if (leftValue !== undefined) {
                    sortedArr.push(leftValue);
                }
            } else {
                const rightValue = rigthArr.shift();
                if (rightValue !== undefined) {
                    sortedArr.push(rightValue);
                }
            }
        }
        return [...sortedArr,...leftArr,...rigthArr]
    }


    return (
        <>
            <h1>Quick Sort</h1>
            <p>quickSort: - {quickSort(old_arr)}</p>
            <p>mergeSort: - {mergeSort(old_arr)}</p>

        </>
    )
}

export default Index