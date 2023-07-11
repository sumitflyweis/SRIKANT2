const terms = require("../../models/studRegistrationRecieved");

exports.registration = async (req, res) => {
  try {
    const termsData = await terms.create({
      data: req.body.data,
      studentId: req.body.studentId,
      date: req.body.date,
      time: req.body.time,
    });
    res.status(200).json({
      // data : policyData,
      message: "  terms Added ",
      details: termsData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.updateregistration = async (req, res) => {
  try {
    const UpdatedTerms = await terms.findOneAndUpdate(
      { _id: req.params.id },
      {
        data: req.body.data,
        studentId: req.body.studentId,
        date: req.body.date,
        time: req.body.time,
      }
    ); //.exec();
    console.log(UpdatedTerms);
    return res.status(200).json({
      message: "Terms Update",
      data: UpdatedTerms,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      mesage: err.mesage,
    });
  }
};


exports.Deleteregistration = async (req, res) => {
  try {
    const id = req.params.id;
    await terms.deleteOne({ _id: id });
    res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.getregistration = async (req, res) => {
  try {
    const data = await terms.find();
    console.log(data);
    return res.status(200).json({
      terms: data,
    });
  } catch (err) {
    res.status(400).send({ mesage: err.mesage });
  }
};

exports.getregistrationbyid = async (req, res) => {
  try {
    const data = await terms.findById({ _id: req.params.id });
    console.log(data);
    return res.status(200).json({
      terms: data,
    });
  } catch (err) {
    res.status(400).send({ mesage: err.mesage });
  }
};



exports.getseminarsOfStudent = async (req, res) => {
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
  
  
      const users = await terms.find(filter);
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
  
  