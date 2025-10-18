import { Model, RootFilterQuery, ProjectionType, QueryOptions, UpdateQuery, MongooseUpdateQueryOptions } from "mongoose";


export abstract class AbstractRepository<T> {
  constructor(protected model: Model<T>) { }


  // create
  async create(item: Partial<T>) {
    const doc = new this.model(item)
    doc.isNew
    return await doc.save()
  }

  // exsit
  async exsit(
    filter: RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    option?: QueryOptions<T>
  ) {
    return await this.model.findOne(filter, projection, option)
  }



  // getOne
  async getOne(
    filter: RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    option?: QueryOptions<T>
  ) {
    return await this.model.findOne(filter, projection, option)
  }

  // update
  async update(
    filter: RootFilterQuery<T>,
    update: UpdateQuery<T>, // <T> is the type of the document  //partial is used to update only the fields that are provided
    options?: MongooseUpdateQueryOptions
  ) {
    return await this.model.updateOne(filter, update, options)
  }

  // delete
  async delete(
    filter: RootFilterQuery<T>
  ) {
    return await this.model.deleteOne(filter)
  }

  // find
  async find(
    filter: RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    option?: QueryOptions<T>
  ) {
    return await this.model.find(filter, projection, option)
  }

  // findOne
  async findOne(
    filter: RootFilterQuery<T>,
    projection?: ProjectionType<T>,
    option?: QueryOptions<T>
  ) {
    return await this.model.findOne(filter, projection, option)
  }

  //    getAll


}