import Race from './race';

export default class Dwarf extends Race {
  _maxLifePoints: number;
  static _numbersInstanceDwarf = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._numbersInstanceDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._numbersInstanceDwarf;
  }
}