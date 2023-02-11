const mongoose = require("mongoose");
const DB = process.env.MONGO_URL;

const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB)
    .then(() => {
      console.log(`connection successful`);
    })
    .catch((err) => {
      console.log("no connections");
    });
};

module.exports = connectToMongo;
