const StudentEnquiry = require("../../models/student_enquiry");
const student = require("../../models/student_models");

// Create a new enquiry
exports.createstudentEnquiry = async (req, res) => {
  try {
    // const enquiry = {
    //     studentId: req.body.studentId,
    //       query:req.body.query
    // }

    // const studentData = await student.findById({_id:enquiry.studentId})
    // console.log(studentData)
    // const data = {
    //     studentId:studentData._id,
    //     rollno:studentData.roll_number,
    //     firstName:studentData.name,
    //     lastName:studentData.name,
    //     branch: studentData.branch,
    //     query:enquiry.query
    // }

    const data = {
      rollno: req.body.rollno,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      branch: req.body.branch,
      query: req.body.query,
    };

    const newEnquiry = await StudentEnquiry.create(data);
    return res.status(200).json({
      message: "enquiry Data ",
      data: newEnquiry,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getstudentEnquiryById = async (req, res) => {
  try {
    const data = await StudentEnquiry.findById(req.params.id);
    // .populate('studentId');
    return res.status(200).json({
      message: "enquiry Data ",
      data: data,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// Read all enquiries
exports.getAllstudentEnquiry = async (req, res) => {
  try {
    const data = await StudentEnquiry.find();
    // .populate('studentId');
    return res.status(200).json({
      message: "enquiry Data ",
      data: data,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updatestudentEnquiry = async (req, res) => {
  try {
    // const enquiry = {
    //     studentId: req.body.studentId,
    //       query:req.body.query
    // }
    const data = {
      rollno: req.body.rollno,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      branch: req.body.branch,
      query: req.body.query,
    };

    // const update =  await StudentEnquiry.findByIdAndUpdate(req.params.id, enquiry, { new: true }).populate('studentId');
    const update = await StudentEnquiry.findByIdAndUpdate(
      req.params.id,
      {
        rollno: data.rollno,
        firstName: data.firstName,
        lastName: data.lastName,
        branch: data.branch,
        query: data.query,
      },
      { new: true }
    );
    // .populate('studentId');
    console.log(update);
    return res.status(200).json({
      message: "enquiry Data ",
      data: update,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deletestudentEnquiry = async (req, res) => {
  try {
    const data = await StudentEnquiry.findByIdAndDelete(req.params.id);
    console.log(data);
    return res.status(200).json({
      message: "enquiry Data ",
      data: data,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
