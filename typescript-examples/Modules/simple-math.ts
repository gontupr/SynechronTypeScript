console.log("This is a beginning of simple Math Module!")


import {square} from './advance-math'
 
 export function adition(num1: number,num2:number): number{
    return num1+num2;
}

export function subtraction(num1: number,num2:number): number{
    return num1-num2;
}

function multiplication(num1: number,num2:number): number{
    return num1*num2;
}

function division(num1: number,num2:number): number{
    return num1/num2;
}

console.log(square(10,20));

console.log("this is an eddding of simple math Module")