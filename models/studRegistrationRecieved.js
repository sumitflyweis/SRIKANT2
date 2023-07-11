const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const { Schema } = mongoose;

const studRegistrationRecievedSchema = new Schema(
  {
    studentId: {
      type: objectId,
      ref: "student",
    },
    data: {
      type: String,
    },
    date:{
      type:String,
      default:""
    },
    time:{
      type:String,
      default:""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("studRegistrationRecieved", studRegistrationRecievedSchema);
