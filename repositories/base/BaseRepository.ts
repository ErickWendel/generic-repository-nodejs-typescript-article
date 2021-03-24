// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// we imported all types from mongodb driver, to use in code
import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';
import { IEntity } from '../../entities/IEntity';

// that class only can be extended
export abstract class BaseRepository<T extends IEntity> implements IWrite<T>, IRead<T>{
  //creating a property to use your code in all instances 
  // that extends your base repository and reuse on methods of class
  public readonly _collection: Collection;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult<T> = await this._collection.insertOne(item);
    // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    return !!result.result.ok;
  }


  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
