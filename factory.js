class FactoryOfPeople {
  createAPerson(personality, name) {
    let person;
    switch (personality) {
      case "optimistic":
        person = new Optimist(name);
        break;
      case "pessimistic":
        person = new Pessimist(name);
        break;
      default:
        break;
    }
    person.greetings = () => {
      console.log(person.greet() + ` And the day is ${person.day}`);
    };
    return person;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, my name is ${this.name}.`;
  }
}

class Pessimist extends Person {
  constructor(name) {
    super(name);
    this.day = "not really good...";
  }
}

class Optimist extends Person {
  constructor(name) {
    super(name);
    this.day = "really good...";
  }
}

var people = [];
var factory = new FactoryOfPeople();

people.push(factory.createAPerson("optimistic", "John"));
people.push(factory.createAPerson("optimistic", "Mary"));
people.push(factory.createAPerson("pessimistic", "George"));
people.push(factory.createAPerson("pessimistic", "Lucy"));
people.push(factory.createAPerson("optimistic", "Arnold"));

for (var i = 0; i < people.length; i++) {
  people[i].greetings();
}
