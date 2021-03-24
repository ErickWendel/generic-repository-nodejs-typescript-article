import { IEntity } from "./IEntity";

export class Hero implements IEntity {
  private name: string;
  private savedLifes: number;

  constructor(name: string, savedLifes: number) {
    this.name = name;
    this.savedLifes = savedLifes;
  }
  
  _id: string | undefined;
}
