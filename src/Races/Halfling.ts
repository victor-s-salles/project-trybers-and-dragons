import Race from './race';

export default class Halfling extends Race {
  _maxLifePoints: number;
  static _numbersInstanceHalfling = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._numbersInstanceHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._numbersInstanceHalfling;
  }
}