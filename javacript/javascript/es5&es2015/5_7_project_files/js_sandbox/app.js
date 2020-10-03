//inheritance / subclass in es6
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

//since we extend the person class we will be able to access its methods
console.log(john.greeting());

//use actual class name to access static mathod
//console.log(Person.getMembershipCost()); //error bcz we extended person not customer
console.log(Customer.getMembershipCost());