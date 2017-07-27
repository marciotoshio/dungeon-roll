class Dice {
  roll() {
    return this.faces[Math.floor(Math.random() * 6)];
  }
}

export class PartyDice extends Dice {
  constructor() {
    super();

    this.faces = ['Guerreiro', 'Clérigo', 'Mago', 'Ladino', 'Campeão', 'Pergaminho'];
  }
}

export class DungeonDice extends Dice {
  constructor() {
    super();

    this.faces = ['Goblin', 'Esqueleto', 'Limo', 'Báu', 'Poção', 'Dragão'];
  }
}
