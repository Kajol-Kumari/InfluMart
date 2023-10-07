const mongoose = require("mongoose");
const config = require("../config/config");

function connect() {
  mongoose.connect(config.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "playground",
  });
  mongoose.Promise = Promise;

  // When successfully connected
  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open`);
  });

  // If the connection throws an error
  mongoose.connection.on("error", (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose and Redis connection
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit();
    });
  });
}

module.exports = connect();
