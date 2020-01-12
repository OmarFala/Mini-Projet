const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let adminSchema = new Schema(
  {
    email: {
      type: String,
      default: "admin@gmail.com"
    },
    passwd: {
      type: String,
      default: "admin"
    }
  },
  {
    collection: "admin"
  }
);

adminSchema.methods.generateHash = function(passwd) {
  return bcrypt.hashSync(passwd, bcrypt.genSaltSync(8), null);
};

adminSchema.methods.validPassword = function(passwd) {
  return bcrypt.comparSync(passwd, this.passwd);
};

module.exports = mongoose.model("admin", adminSchema);
