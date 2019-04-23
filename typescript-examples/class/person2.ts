class Person2
{
    constructor(public socialId: number,public contactName: string,public city:string)
    {
    }
   
    getPersonInformation()
    {
        return `contact Name is ${this.contactName} who lives in city ${this.city}`
    }
}
//TypeScript class allows you to use Access Modifiers
//Private, Public, Protected

let person2 = new Person2(654654,"Praveen","New York");
console.log(person2.getPersonInformation());