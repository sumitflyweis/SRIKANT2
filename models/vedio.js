const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
//const attendenceSchema = require('./attendence');
const vedioSchema = mongoose.Schema({
  vedio: {
    type: String,
    default:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
});

module.exports = mongoose.model("vedio", vedioSchema);
