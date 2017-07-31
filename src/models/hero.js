class Hero {
  constructor(level = 0) {
    this.level = level;
    this.in_dungeon = false;
  }

  name() {
    return this.level < 5 ? this.low_level_name : this.high_level_name;
  }

  full_name() {
    return this.low_level_name + " / " + this.high_level_name;
  }
}

class Paladina extends Hero {
  constructor(level) {
    super(level);
    this.id = 1;
    this.low_level_name = 'Cruzada';
    this.high_level_name = 'Paladina';
    this.image = 'images/paladina.png';
  }
}

class Encantatriz extends Hero {
  constructor(level) {
    super(level);
    this.id = 2;
    this.low_level_name = 'Encantatriz';
    this.high_level_name = 'Fascinadora';
    this.image = 'images/encantatriz.png';
  }
}

const heroList = [new Paladina(), new Encantatriz()];
export default heroList;
