import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  static _numbersInstanceElf = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._numbersInstanceElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._numbersInstanceElf;
  }
}