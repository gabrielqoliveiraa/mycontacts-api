const { v4: uuid } = require('uuid');
const DB = require('../../database/index');

class ContactRepository {
  collection = DB.getCollection('contacts');

  findAll() {
    return this.collection.find().toArray();
  }

  findById(_id) {
    return this.collection.findOne({
      _id,
    });
  }

  findByEmail(email) {
    return this.collection.findOne({
      email,
    });
  }

  deleteById(_id) {
    return this.collection.deleteOne({
      _id,
    });
  }

  async create(contact) {
    return this.collection.insertOne({
      _id: uuid(),
      ...contact,
      categoryId: uuid(),
    });
  }

  async update(id, {
    name, email, phone, categoryId,
  }) {
    return this.collection.updateOne({
      _id: id,
    }, {
      $set: {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(categoryId && { categoryId }),
      },
    });
  }
}

module.exports = new ContactRepository();
