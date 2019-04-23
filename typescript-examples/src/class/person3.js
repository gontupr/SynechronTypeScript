var Person3 = /** @class */ (function () {
    function Person3(_socialId, _contactName, _city) {
        this._socialId = _socialId;
        this._contactName = _contactName;
        this._city = _city;
    }
    Object.defineProperty(Person3.prototype, "socialId", {
        get: function () {
            return this._socialId;
        },
        set: function (value) {
            this._socialId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person3.prototype, "contactName", {
        get: function () {
            return this._contactName;
        },
        set: function (value) {
            this._contactName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person3.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Person3.prototype.getPersonInformation = function () {
        return "contact Name is " + this.contactName + " who lives in city " + this.city;
    };
    return Person3;
}());
var person3 = new Person3(654654, "Praveen", "New York");
console.log(person3.getPersonInformation());
//# sourceMappingURL=person3.js.map