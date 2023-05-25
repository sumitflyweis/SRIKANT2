const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");



require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://srikant:srikant@cluster0.vqdbytw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home",(req, res) => {
  res.status(200).send({msg:"Working App"});
});


app.use('/api/v1/student', require('./router/student_router'));
app.use('/api/v1/institutes', require('./router/institutesRouter'));
app.use('/api/v1/teacher', require('./router/teacher_router'));
app.use('/api/v1/schdule', require('./router/schdule_router'));
app.use('/api/v1/helpAndSupport',require('./router/helpAndSupport'))
app.use('/api/v1/privacyPolicy', require('./router/privacyPolicy'))
app.use('/api/v1/termsAndService',  require('./router/termsAndService'))
app.use('/api/v1/notification', require('./router/notification'))
app.use('/api/v1/menu', require('./router/menu'))
app.use('/api/v1/submenu',require('./router/submenu'))
app.use('/api/v1/topics', require('./router/topics'))
app.use('/api/v1/learningSites', require ('./router/learningSites'))
app.use('/api/v1/booking',require('./router/booking'))
app.use('/api/v1/payment',require ('./router/paymentByStudent'))
app.use('/api/v1/library',require('./router/library'))
app.use('/api/v1/themes',require('./router/themes'))
app.use('/api/v1/course',require('./router/course'))
app.use('/api/v1/attendence',require('./router/attendence'))
app.use('/api/v1/competitionParts',require('./router/competitionParts'))
app.use('/api/v1/competition', require('./router/competition'))
app.use('/api/v1/schedule',require('./router/schedule'))
app.use('/api/v1/exam',require('./router/exam'))
app.use('/api/v1/studentEnquiry',require('./router/student_enquiry'))
app.use('/api/v1/revision',require('./router/revision'))
app.use('/api/v1/oppurtunities',require('./router/oppurtunities'))
app.use('/api/v1/internship',require('./router/oppurtunityParts/internship'))
app.use('/api/v1/interview',require('./router/oppurtunityParts/interview'))
app.use('/api/v1/job',require('./router/oppurtunityParts/job'))
app.use('/api/v1/seminars',require('./router/oppurtunityParts/seminars'))
app.use('/api/v1/overview',require('./router/resume/overview'))
app.use('/api/v1/faq',require('./router/resume/FAQ'))
app.use('/api/v1/lessons',require('./router/resume/lessons'))
app.use('/api/v1/requirement',require('./router/resume/requirement'))
app.use('/api/v1/submenuoppurtunity',require('./router/oppurtunityParts/submenu/submenu'))
app.use('/api/v1/menuoppurtunity',require('./router/oppurtunityParts/menu/menu'))
app.use('/api/v1/lecture',require('./router/lecture'))
app.use('/api/v1/result',require('./router/results'))
app.use('/api/v1/challenges',require('./router/challenges'))
app.use('/api/v1/events',require('./router/events'))
app.use('/api/v1/registration',require('./router/studRegistrationRecieved'))
app.use('/api/v1/checkSheett',require('./router/checksheet'))
app.use('/api/v1/impQues',require('./router/impQues'))
app.use('/api/v1/vedioo',require('./router/vedio'))
app.use('/api/v1/prevQues',require('./router/previousQues'))




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  
  module.exports = {
    handler: serverless(app),
  };
  






