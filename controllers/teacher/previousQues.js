const PreviousQues = require("../../models/previousQues");

exports.getPreviousQues = async (req, res) => {
  try {
    const previousQues = await PreviousQues.find();
    res.status(200).json({msg:previousQues});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePreviousQues = async (req, res) => {
  try {
    const id = req.params.id 
    const { previousQues } = req.body;
    await PreviousQues.findOneAndUpdate(id, { previousQues });
    res.status(200).json({ message: "Previous question updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.createPreviousQues = async (req, res) => {
  try {
    const { previousQues } = req.body;
    const createdPreviousQues = await PreviousQues.create({ previousQues });
    res.status(201).json(createdPreviousQues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPreviousQuesById = async (req, res) => {
  try {
    const { id } = req.params;
    const previousQues = await PreviousQues.findById(id);
    
    if (!previousQues) {
      return res.status(404).json({ error: "Previous question not found" });
    }
    
    res.status(200).json({msg:previousQues});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deletePreviousQuesById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPreviousQues = await PreviousQues.findByIdAndDelete(id);
    
    if (!deletedPreviousQues) {
      return res.status(404).json({ error: "Previous question not found" });
    }
    
    res.status(200).json({ message: "Previous question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

