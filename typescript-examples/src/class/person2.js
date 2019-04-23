var Person2 = /** @class */ (function () {
    function Person2(socialId, contactName, city) {
        this.socialId = socialId;
        this.contactName = contactName;
        this.city = city;
    }
    Person2.prototype.getPersonInformation = function () {
        return "contact Name is " + this.contactName + " who lives in city " + this.city;
    };
    return Person2;
}());
//TypeScript class allows you to use Access Modifiers
//Private, Public, Protected
var person2 = new Person2(654654, "Praveen", "New York");
console.log(person2.getPersonInformation());
//# sourceMappingURL=person2.js.map