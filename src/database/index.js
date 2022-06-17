const { MongoClient } = require('mongodb');

const url = 'mongodb://mongoadmin:secret@localhost:27017/?authMechanism=DEFAULT';
const client = new MongoClient(url);
const dbName = 'mycontacts';

class DatabaseConnection {
  connectDB() {
    return client.db(dbName);
  }

  getCollection(collectionName) {
    return this.connectDB().collection(collectionName);
  }

  async connectMongo() {
    try {
      await client.connect();
      console.log('Connected successfully to server');
    } catch (e) {
      console.error(e);
    }
  }

  close() {
    client.close();
  }
}

module.exports = new DatabaseConnection();
