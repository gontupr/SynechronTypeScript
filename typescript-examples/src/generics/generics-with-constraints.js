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
var CommonPerson = /** @class */ (function () {
    function CommonPerson() {
    }
    return CommonPerson;
}());
var PersonCurd = /** @class */ (function () {
    function PersonCurd() {
        this._people = new Array();
    }
    PersonCurd.prototype.getAll = function () {
        return this._people;
    };
    PersonCurd.prototype.addNew = function (T) {
        this._people.push(T);
    };
    return PersonCurd;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(employeeId) {
        var _this = _super.call(this) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    return Employee;
}(CommonPerson));
var e1 = new Employee(2689);
var e2 = new Employee(2390);
var employeeCurd = new PersonCurd();
employeeCurd.addNew(e1);
employeeCurd.addNew(e2);
console.log(employeeCurd.getAll());
//# sourceMappingURL=generics-with-constraints.js.map