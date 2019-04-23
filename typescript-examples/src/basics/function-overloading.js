function addit(num1, num2, num3) {
    if (arguments.length == 2) {
        return num1 * num2;
    }
    else {
        return num1 + num2 + num3;
    }
}
var a = addit(10, 20, 56);
console.log(a);
//# sourceMappingURL=function-overloading.js.map