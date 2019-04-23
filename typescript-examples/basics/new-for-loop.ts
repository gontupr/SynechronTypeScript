const syneOffices = ["bang","chenni","hyderbad","NewYork","pune","Mumbai"];
/* for (let index = 0; index < syneOffices.length; index++) {
    const element = syneOffices[index];
    if(element==="hyderbad")
    {
        break;
    }
    console.log(element)
} */

syneOffices.forEach(element => {
    console.log(element)
    if(element ==="hyderabd")
    {
    return;
    }
});

for (const iterator of syneOffices) {
    console.log(iterator)
    if(iterator ==="hyderabd")
    {
    break;
    }
}