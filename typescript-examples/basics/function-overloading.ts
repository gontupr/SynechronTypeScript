function addit(num1: number,num2 :number):number;
function addit(num1: number,num2 :number,num3: number):number;
function addit(num1,num2,num3?)
{
    if(arguments.length == 2)
    {
        return num1*num2;
    }
    else
    {
    return num1+num2+num3;
    }
}

let a = addit(10,20,56);
console.log(a)