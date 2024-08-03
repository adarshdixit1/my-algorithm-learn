import React from "react";

const Index = () => {

    // find the nth term of fibonacci sequence
    const fibonacciSequence = (n: number):number => {
        if(n<2){
            return n
        }
       
        return fibonacciSequence(n-1) + fibonacciSequence(n-2)
    }


    return (
        <>
            This is Day 2
            <h1>Recursion</h1>
            <div>
            <p>fibonacci Sequence of 5th term:-  {fibonacciSequence(6)}</p>
            </div>
        </>
    );
};

export default Index;