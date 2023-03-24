import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;
  static _numbersInstanceOrc = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._numbersInstanceOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._numbersInstanceOrc;
  }
}