const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
//const attendenceSchema = require('./attendence');
const coarseSchema = mongoose.Schema({
  vedio: {
    type: [Object],
    default: [
      {
        variable:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
    ],
  },


  dailyTracker: {
    type: String,
  },
});

module.exports = mongoose.model("coarseSchema", coarseSchema);
