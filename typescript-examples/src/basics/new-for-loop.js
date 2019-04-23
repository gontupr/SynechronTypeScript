var syneOffices = ["bang", "chenni", "hyderbad", "NewYork", "pune", "Mumbai"];
/* for (let index = 0; index < syneOffices.length; index++) {
    const element = syneOffices[index];
    if(element==="hyderbad")
    {
        break;
    }
    console.log(element)
} */
syneOffices.forEach(function (element) {
    console.log(element);
    if (element === "hyderabd") {
        return;
    }
});
for (var _i = 0, syneOffices_1 = syneOffices; _i < syneOffices_1.length; _i++) {
    var iterator = syneOffices_1[_i];
    console.log(iterator);
    if (iterator === "hyderabd") {
        break;
    }
}
//# sourceMappingURL=new-for-loop.js.map