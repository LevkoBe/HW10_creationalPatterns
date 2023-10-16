class Building {
  constructor() {
    this.land = "new land";
    this.floors = 0;
    this.ceiling = false;
    this.windows = 0;
    this.people = 0;
  }
  buildFloor() {
    this.floors++;
    this.ceiling = false;
    this.windows += 3;
  }
  addCeiling() {
    this.ceiling = true;
  }
  addWindow() {
    this.windows++;
  }
  addPerson() {
    this.people++;
  }
}

class Builder {
  buildAHouse(floors, extraWindows, people) {
    let building = new Building();
    for (let i = 0; i < floors; i++) {
      building.buildFloor();
    }
    for (let i = 0; i < extraWindows; i++) {
      building.addWindow();
    }
    building.addCeiling();
    for (let i = 0; i < people; i++) {
      building.addPerson();
    }
    return building;
  }
}

let builder = new Builder();
let building1 = builder.buildAHouse(3, 5, 4);
let building2 = builder.buildAHouse(5, 5, 2);
let building3 = builder.buildAHouse(6, 4, 7);
console.log(`First building has ${building1.floors} floors, and there live ${building1.people} people.`);
console.log(`Second building has ${building2.floors} floors, and there live ${building2.people} people.`);
console.log(`Third building has ${building3.floors} floors, and there live ${building3.people} people.`);

class ProtoBuilding {
  constructor(proto) {
    let newBuilding = new Building();
    newBuilding.floors = proto.floors;
    newBuilding.land = proto.land;
    newBuilding.people = proto.people;
    newBuilding.windows = proto.windows;
    newBuilding.ceiling = proto.ceiling;
    return newBuilding;
  }
}

let building4 = new ProtoBuilding(building2);
console.log(`Fourth building has ${building4.floors} floors, and there live ${building4.people} people.`);
