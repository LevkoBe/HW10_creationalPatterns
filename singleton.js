class SingleObject {
  constructor() {
    if (SingleObject.instance) {
      return SingleObject.instance;
    }
    SingleObject.instance = this;
    return SingleObject.instance;
  }
}

const obj1 = new SingleObject();
const obj2 = new SingleObject();
console.log(obj1 === obj2);
