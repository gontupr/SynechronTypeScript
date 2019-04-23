interface CommonRepository<T> {
    getAll(): T[];
    getSingle(id: number): T;
    addNew(T: T): void;
    modify(id: number, T: T): void;
    remove(id: number): void;

}

class SynechronRepository<T> implements CommonRepository<T>
{
    //In TypeScript Array it self is a generic class
    private _localStorage: Array<T> = new Array<T>();

    getAll(): T[] {
        return this._localStorage
    } getSingle(id: number): T {
        return this._localStorage[0];

    }
    addNew(T: T): void {
        this._localStorage.push(T);
        }
    modify(id: number, T: T): void {
        throw new Error("Method not implemented.");
    }
    remove(id: number): void {
        throw new Error("Method not implemented.");
    }



}

class SynechronCustomer{
    constructor(public customerId: number,public contactName: string, public city:string)
    {}
}

class SynechronProduct{
    constructor(public productId:number,public productName:string,public unitPrice: number)
    {}
}

const cust1:SynechronCustomer =  new SynechronCustomer(2345,"PraveenKumar","Pune");
const cust2:SynechronCustomer =  new SynechronCustomer(2346,"ram","Hyd");

const prod1:SynechronProduct =  new SynechronProduct(45,"sdf",54);
const prod2:SynechronProduct =  new SynechronProduct(46,"sd",54);

const customerRepo: CommonRepository<SynechronCustomer> = new SynechronRepository<SynechronCustomer>();
customerRepo.addNew(cust1);
customerRepo.addNew(cust2);
for (const customer of customerRepo.getAll()) 
{
    console.log(`cutomer Id is ${customer.customerId}, contact Name is ${customer.contactName}`)
}

console.log(customerRepo.getSingle(3426));