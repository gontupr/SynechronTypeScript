var Person = /** @class */ (function () {
    function Person(socialId, name, city) {
        this.socialId = socialId;
        this.contactName = name;
        this.city = city;
    }
    Person.prototype.getPersonInformation = function () {
        return "contact Name is " + this.contactName + " who lives in city " + this.city;
    };
    return Person;
}());
//TypeScript class allows you to use Access Modifiers
//Private, Public, Protected
var person = new Person(654654, "Praveen", "New York");
console.log(person.getPersonInformation());
//# sourceMappingURL=person.js.map