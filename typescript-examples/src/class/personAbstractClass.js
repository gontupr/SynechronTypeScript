var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonAbstractClass = /** @class */ (function () {
    function PersonAbstractClass(_socialId, _contactName, _city) {
        this._socialId = _socialId;
        this._contactName = _contactName;
        this._city = _city;
    }
    Object.defineProperty(PersonAbstractClass.prototype, "socialId", {
        get: function () {
            return this._socialId;
        },
        set: function (value) {
            this._socialId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAbstractClass.prototype, "contactName", {
        get: function () {
            return this._contactName;
        },
        set: function (value) {
            this._contactName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonAbstractClass.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    PersonAbstractClass.prototype.getPersonInformation = function () {
        return "contact Name is " + this.contactName + " who lives in city " + this.city;
    };
    return PersonAbstractClass;
}());
var SyneCustomer = /** @class */ (function (_super) {
    __extends(SyneCustomer, _super);
    function SyneCustomer(customerId) {
        var _this = _super.call(this) || this;
        _this.customerId = customerId;
        return _this;
    }
    SyneCustomer.prototype.changeAddress = function (socialId, newAddress) {
        console.log("Address change.");
        return true;
    };
    return SyneCustomer;
}(PersonAbstractClass));
var syneCustomer1 = new SyneCustomer(34567);
syneCustomer1.socialId = 65454;
syneCustomer1.contactName = "Praveen";
syneCustomer1.city = "mumbi";
console.log(syneCustomer1.getPersonInformation());
console.log(syneCustomer1.changeAddress(23432, "df"));
//# sourceMappingURL=personAbstractClass.js.map