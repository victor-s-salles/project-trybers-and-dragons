import Fighter, { SimpleFighter } from '../Fighter';

import Battle from './Battle';

export default class PVE extends Battle {
  private _playerOne: Fighter;
  private _monster: (Fighter | SimpleFighter)[];
  constructor(playerOne: Fighter, monster:(Fighter | SimpleFighter)[]) {
    super(playerOne);
    this._playerOne = playerOne;
    this._monster = monster;
  }

  private checkNoMonstersRemaining():boolean {
    return this._monster.every((monster) => monster.lifePoints === -1);
  }

  fight(): number {
    while (this._playerOne.lifePoints > 0) {
      if (this.checkNoMonstersRemaining()) {
        break;
      }
      this._monster.forEach((monster) => {
        this._playerOne.attack(monster);
        monster.attack(this._playerOne);
      });
    }
    return this._playerOne.lifePoints === -1 ? -1 : 1;
  }
}