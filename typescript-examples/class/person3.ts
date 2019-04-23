class Person3
{
    constructor(private _socialId: number,private _contactName: string,private _city:string)
    {
    }
   get socialId():number
   {
       return this._socialId
   }
   set socialId(value: number)
   {
       this._socialId = value;
   }

   get contactName():string
   {
       return this._contactName
   }
   set contactName(value: string)
   {
       this._contactName = value;
   }

   get city():string
   {
       return this._city
   }
   set city(value: string)
   {
       this._city = value;
   }
    getPersonInformation()
    {
        return `contact Name is ${this.contactName} who lives in city ${this.city}`
    }
}


let person3 = new Person3(654654,"Praveen","New York");
console.log(person3.getPersonInformation());