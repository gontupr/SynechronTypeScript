var SynechronRepository = /** @class */ (function () {
    function SynechronRepository() {
        //In TypeScript Array it self is a generic class
        this._localStorage = new Array();
    }
    SynechronRepository.prototype.getAll = function () {
        return this._localStorage;
    };
    SynechronRepository.prototype.getSingle = function (id) {
        return this._localStorage[0];
    };
    SynechronRepository.prototype.addNew = function (T) {
        this._localStorage.push(T);
    };
    SynechronRepository.prototype.modify = function (id, T) {
        throw new Error("Method not implemented.");
    };
    SynechronRepository.prototype.remove = function (id) {
        throw new Error("Method not implemented.");
    };
    return SynechronRepository;
}());
var SynechronCustomer = /** @class */ (function () {
    function SynechronCustomer(customerId, contactName, city) {
        this.customerId = customerId;
        this.contactName = contactName;
        this.city = city;
    }
    return SynechronCustomer;
}());
var SynechronProduct = /** @class */ (function () {
    function SynechronProduct(productId, productName, unitPrice) {
        this.productId = productId;
        this.productName = productName;
        this.unitPrice = unitPrice;
    }
    return SynechronProduct;
}());
var cust1 = new SynechronCustomer(2345, "PraveenKumar", "Pune");
var cust2 = new SynechronCustomer(2346, "ram", "Hyd");
var prod1 = new SynechronProduct(45, "sdf", 54);
var prod2 = new SynechronProduct(46, "sd", 54);
var customerRepo = new SynechronRepository();
customerRepo.addNew(cust1);
customerRepo.addNew(cust2);
for (var _i = 0, _a = customerRepo.getAll(); _i < _a.length; _i++) {
    var customer = _a[_i];
    console.log("cutomer Id is " + customer.customerId + ", contact Name is " + customer.contactName);
}
console.log(customerRepo.getSingle(3426));
//# sourceMappingURL=CommonReposiory.js.map