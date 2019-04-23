var Customer = {
    customerId:4354,
    contactNmae:"praveen",
    city:"guntur",
    getcustomerInformatioon: function()
    {
/* setTimeout(function() {
    console.log("customer id id "+_self.customerId)

}, 2000); */
setTimeout(function() {
    console.log("customer id id "+this.customerId)

}.bind(this), 2000);
    }
}

Customer.getcustomerInformatioon();