const mongoose = require("mongoose");

const connect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI);
    console.log(`${connected.connection.host}`);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit();
  }
};

module.exports = connect;
