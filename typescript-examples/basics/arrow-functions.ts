var Customer = {
    customerId:4354,
    contactNmae:"praveen",
    city:"guntur",
    getCustomerInformation:function(){
        setTimeout(()=>{
            console.log(`customer id id ${this.customerId}`)  },2000)
    }
}