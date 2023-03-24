import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _numbersInstanceMage = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numbersInstanceMage += 1;
  }

  public get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage._numbersInstanceMage;
  }
}