const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const examSchema = mongoose.Schema({
 
  examSchedule: {
    type: String,
  },
  date: {
    type: String,
  },
  viewResults:{
    type:[objectId],
    ref:"result"
},
student_enquiry:{
    type:[objectId],
    ref:"student"
},
revision:{
    type:[objectId],
    ref:"revision"
}

});

module.exports = mongoose.model("examSchema", examSchema);
