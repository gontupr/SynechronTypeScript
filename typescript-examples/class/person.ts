class Person {
    constructor(socialId: number, name: string, city: string) {
        this.socialId = socialId;
        this.contactName = name;
        this.city = city;

    }
    public socialId: number;
    public contactName: string;
    public city: string;

    getPersonInformation() {
        return `contact Name is ${this.contactName} who lives in city ${this.city}`
    }
}
//TypeScript class allows you to use Access Modifiers
//Private, Public, Protected

let person = new Person(654654, "Praveen", "New York");
console.log(person.getPersonInformation());