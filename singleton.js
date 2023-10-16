let instance;

class SingleObject {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    return instance;
  }
}

const obj1 = new SingleObject();
const obj2 = new SingleObject();
console.log(obj1 === obj2);
