const { v4: uuid } = require('uuid');
const DB = require('../../database/index');

class CategoryRepository {
  collection = DB.getCollection('categories');

  findAll() {
    return this.collection.find().toArray();
  }

  findById(_id) {
    return this.collection.findOne({
      _id,
    });
  }

  findByName(name) {
    return this.collection.findOne({
      name,
    });
  }

  deleteById(_id) {
    return this.collection.deleteOne({
      _id,
    });
  }

  async create(category) {
    return this.collection.insertOne({
      _id: uuid(),
      ...category,
    });
  }

  async update(id, {
    name,
  }) {
    console.log(id);
    console.log('AQUI');
    return this.collection.updateOne({
      _id: id,
    }, {
      $set: {
        ...(name && { name }),
      },
    });
  }
}

module.exports = new CategoryRepository();
