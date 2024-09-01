const mongoose = require("mongoose");

const connectDb = async () => {
    try {
      const connect = await mongoose.connect("mongodb://user:to6uxIv3FXGZeFqV@faqdb.bilu8.mongodb.net/?ssl=true&replicaSet=atlas-1mirla-shard-0&authSource=admin&retryWrites=true&w=majority&appName=faqdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log(`Sucess Connected: $${connect.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  module.exports = { connectDb }