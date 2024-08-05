import React from "react";

const Index = () => {

    // find the nth term of fibonacci sequence
    const fibonacciSequence = (n: number):number => {
        if(n<2){
            return n
        }
       
        return fibonacciSequence(n-1) + fibonacciSequence(n-2)
    }

    // factorial
    const factorial=(n:number):number=>{
        if(n<1){
            return 1
        }

        return n * factorial(n-1)
    }


    return (
        <>
            This is Day 2
            <h1>Recursion</h1>
            <div>
            <p>fibonacci Sequence of 5th term:-  {fibonacciSequence(5)}</p>
            <p>factorial of 5 term:-  {factorial(5)}</p>
            </div>
        </>
    );
};

export default Index;