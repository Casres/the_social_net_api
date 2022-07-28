const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOOSE_URI || "mongodb://localhost:27017/social_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
