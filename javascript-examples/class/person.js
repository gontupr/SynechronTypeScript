function Person(socialId,name,city)
{
    this.socialId = socialId;
    this.name = name;
    this.city = city;
    this.getPersonInforamtion = function(){
        return "contact Name is "+this.name;
    }
}

var person = new Person(3453454543,"Manish Kaushik", "Raipur");
console.log(person.getPersonInforamtion());