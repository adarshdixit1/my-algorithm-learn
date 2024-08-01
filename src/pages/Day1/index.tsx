import React from "react";

const Index = () => {
    // solve the fibonacci sequence
    const fibonacciSequence = (n: number) => {
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]
        }
        return fib
    }

    // factorial function 
    const calculatefactorial = (n: number): number => {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result = result * i
        }
        return result
    }

    // find the number is prime number or not 
    const isPrimeNumber = (n: number): string => {
        if (n < 2) {
            return `${n} is not prime number`
        }

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return `${n} is not prime number`
            }
        }

        return `${n} is prime number`
    }

    // optimized solution of prime number

    const isPrime = (n: number): string => {
        if (n < 2) {
            return `${n} is not prime number`
        }

        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) {
                return `${n} is not prime number`
            }
        }

        return `${n} is prime number`
    }

    // for isPowerOfTwo funtion 
    const isPowerOfTwo = (n: number):boolean => {
        if (n < 1) {
            return false
        }
        while(n>1){
            if(n%2 !==0){
                return false
            }
            n = n/2
        }
        return true
    }

    // optimize
    const isPowerOfTwoBitWise=(n:number):boolean=>{
        if(n<1){
            return false
        }
        return (n & (n-1)) === 0
    }

    return (
        <div>
            <>{console.log("--->", fibonacciSequence(3))}</>
            <h1>
                fibonacci Sequence
            </h1>
            <p>factorial of 5:-  {calculatefactorial(5)}</p>
            <p>prime number of 13:-  {isPrimeNumber(15)}, {isPrime(5)}</p>
            <p>is power of two of 13:-  {isPowerOfTwo(15) ? 'true' :  "false"}</p>
        </div>
    );
};

export default Index;