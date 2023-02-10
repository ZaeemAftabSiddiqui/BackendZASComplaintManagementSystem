const mongoose = require("mongoose");
const DB =
  "mongodb+srv://zaeemaftabsiddiqui:t9KrNwVKipdMLLsX@cluster0.pbgnpey.mongodb.net/Complait-system?retryWrites=true&w=majority";

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
