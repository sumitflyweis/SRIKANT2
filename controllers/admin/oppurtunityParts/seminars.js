const seminars = require("../../../models/oppurtunityParts.js/seminars");

exports.createseminarsOfStudentByAdmin = async (req, res) => {
  try {
    const oppurtunity = await seminars.create({
      data: req.body.data,
      date: req.body.date,
      time: req.body.time,
    });
    return res.status(200).send({ msg: oppurtunity });
  } catch (err) {
    return res.status(500).send(err);
  }
};



exports.createAllseminarsOfStudentByAdmin = async (req, res) => {
  try {
    const oppurtunities = await seminars.find();
    return res.status(200).send({ msg: oppurtunities });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getseminarsOfStudentByIdByAdmin = async (req, res) => {
  try {
    const oppurtunity = await seminars.findById(req.params.id);
    if (!oppurtunity) {
      return res.status(404).send();
    }
    return res.send({ msg: oppurtunity });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateseminarsOfStudentByAdmin = async (req, res) => {
  try {
    const oppurtunity = await seminars.findByIdAndUpdate(
      { _id: req.params.id },
      { data: req.body.data, date: req.body.date, time: req.body.time },
      { new: true }
    );
    if (!oppurtunity) {
      return res.status(404).send();
    }
    return res.status(200).send(oppurtunity);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.deleteseminarsOfStudentByAdmin = async (req, res) => {
  try {
    const oppurtunity = await seminars.findByIdAndDelete(req.params.id);
    if (!oppurtunity) {
      return res.status(404).send();
    }
    return res.send(oppurtunity);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getseminars = async (req, res) => {
  try {
    const { date, time } = req.query;

    // Build the filter object based on date and time parameters
    const filter = {};
    if (date) {
      filter.date = date;
    }
    if (time) {
      filter.time = time;
    }


    const users = await seminars.find(filter);
    if (!users || users.length==0) {
      return res.status(404).send({msg:"no data"});
    }
      res.status(200).json({
          success: true,
          message: "data fetched successfully",
          data: users,
      });
   
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
};

