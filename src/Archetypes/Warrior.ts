import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _numbersInstanceWarrior = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._numbersInstanceWarrior += 1;
  }

  public get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Warrior._numbersInstanceWarrior;
  }
}