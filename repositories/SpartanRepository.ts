import { BaseRepository } from "./base/BaseRepository";
import { Spartan } from "../entities/Spartan"

// now, we have all code implementation from BaseRepository
export class SpartanRepository extends BaseRepository<Spartan>{

    // here, we can create all especific stuffs of Spartan Repository
    countOfSpartans(): Promise<number> {
        return this._collection.count({})
    }
}
