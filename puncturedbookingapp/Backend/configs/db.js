const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Punctured:aakash@cluster0.gc6xg.mongodb.net/Punctured?retryWrites=true&w=majority"
  );
};
