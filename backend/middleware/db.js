const mongoose = require('mongoose');
const config = require('../config/config');

async function connect() {
  try {
    await mongoose.connect(config.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: config.DB_NAME,
    });
    console.log('Mongoose default connection open');

    // Handle connection close on process exit
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      } catch (err) {
        console.error('Error closing Mongoose connection:', err);
        process.exit(1);
      }
    });
  } catch (err) {
    console.error('Mongoose default connection error:', err);
    process.exit(1);
  }
}

module.exports = connect;
