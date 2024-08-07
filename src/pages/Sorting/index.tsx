import React from "react";

const Index = () => {
    let old_arr = [-6, 20, 8, -2, 4]
    const bubbleSort = (arr: number[]): number[] => {
        let swapped
        do {
            swapped = false
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp
                    swapped = true
                }
            }
        } while (swapped)
        return arr
    }
    return (
        <>
            <h2>Sorting Algorithms</h2>
            <p>Bubble sort of arr {bubbleSort(old_arr)}</p>
        </>
    )
}

export default Index