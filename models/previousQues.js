const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const previousQuesSchema = mongoose.Schema(
  {
    previousQues: {
      type: String,
      default: "https://www.orimi.com/pdf-test.pdf",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("previousQues", previousQuesSchema);
