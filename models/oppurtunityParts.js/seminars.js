const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const seminarSchema = mongoose.Schema(
  {
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

module.exports = mongoose.model("seminar", seminarSchema);
