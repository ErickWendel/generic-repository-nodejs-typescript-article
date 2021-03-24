import { IEntity } from "./IEntity";

export class Spartan implements IEntity{
  private name: string;
  private kills: number;

  constructor(name: string, kills: number) {
    this.name = name;
    this.kills = kills;
  }

  _id: string | undefined;
}
