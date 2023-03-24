import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static _numbersInstanceRanger = 0;
  _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._numbersInstanceRanger += 1;
  }

  public get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger._numbersInstanceRanger;
  }
}