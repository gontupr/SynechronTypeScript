abstract class PersonAbstractClass {
    constructor(private _socialId?: number, private _contactName?: string, private _city?: string) {
    }
    get socialId(): number {
        return this._socialId
    }
    set socialId(value: number) {
        this._socialId = value;
    }

    get contactName(): string {
        return this._contactName
    }
    set contactName(value: string) {
        this._contactName = value;
    }

    get city(): string {
        return this._city
    }
    set city(value: string) {
        this._city = value;
    }
    getPersonInformation() {
        return `contact Name is ${this.contactName} who lives in city ${this.city}`
    }

    abstract changeAddress(socialId: number, newAddress: string): boolean;
}

class SyneCustomer extends PersonAbstractClass {
    changeAddress(socialId: number, newAddress: string): boolean {
        console.log("Address change.")
        return true;
    }
    constructor(public customerId: number) {
        super();
    }
}

let syneCustomer1= new SyneCustomer(34567);
syneCustomer1.socialId = 65454;
syneCustomer1.contactName = "Praveen";
syneCustomer1.city = "mumbi";
console.log(syneCustomer1.getPersonInformation());
console.log(syneCustomer1.changeAddress(23432,"df"));
