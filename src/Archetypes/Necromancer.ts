import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _numbersInstanceNecromancer = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._numbersInstanceNecromancer += 1;
  }

  public get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Necromancer._numbersInstanceNecromancer;
  }
}