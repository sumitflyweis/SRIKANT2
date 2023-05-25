const express = require("express");
const router = express.Router();
const previousQuesController = require("../controllers/teacher/previousQues");

// Create a previous question
router.post("/", previousQuesController.createPreviousQues);

router.get("/",previousQuesController.getPreviousQues)

router.get("/:id", previousQuesController.getPreviousQuesById);

router.put("/:id",previousQuesController.updatePreviousQues)

router.delete("/:id", previousQuesController.deletePreviousQuesById);

module.exports = router;
