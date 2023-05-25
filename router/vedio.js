const express = require("express");
const router = express.Router();
const vedioController = require("../controllers/teacher/vedio");

// GET /vedios
router.get("/", vedioController.getVedios);

// GET /vedios/:id
router.get("/:id", vedioController.getVedioById);

// POST /vedios
router.post("/", vedioController.createVedio);

// PUT /vedios/:id
router.put("/:id", vedioController.updateVedio);

// DELETE /vedios/:id
router.delete("/:id", vedioController.deleteVedio);

module.exports = router;
