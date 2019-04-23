abstract class CommonPerson {
    socialId: number;
    contactName: string;
    address: string;
    city: string;
}

class PersonCurd<T extends CommonPerson>{
    private _people: Array<T> = new Array<T>();
    getAll(): T[] {
        return this._people;
    }
    addNew(T: T): void {
        this._people.push(T);
    }
}

class Employee extends CommonPerson {
    constructor(public employeeId: number) {
        super();
    }
}

let e1: Employee = new Employee(2689);
let e2: Employee = new Employee(2390);

let employeeCurd: PersonCurd<Employee> = new PersonCurd<Employee>();

employeeCurd.addNew(e1);
employeeCurd.addNew(e2);

console.log(employeeCurd.getAll());