const Vedio = require("../../models/vedio");

exports.createVedio = async (req, res) => {
  try {
    const { vedioUrl } = req.body;

    // Create a new Vedio object
    const newVedio = new Vedio({
      vedio: vedioUrl,
    });

    // Save the Vedio object to the database
    const createdVedio = await newVedio.save();

    res.status(201).json(createdVedio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getVedios = async (req, res) => {
  try {
    const vedios = await Vedio.find();
    res.status(200).json(vedios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getVedioById = async (req, res) => {
  try {
    const { id } = req.params;
    const vedio = await Vedio.findById(id);
    if (!vedio) {
      return res.status(404).json({ error: "Vedio not found" });
    }
    res.status(200).json(vedio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateVedio = async (req, res) => {
  try {
    const { id } = req.params;
    const { vedioUrl } = req.body;
    const updatedVedio = await Vedio.findByIdAndUpdate(
      id,
      { vedio: vedioUrl },
      { new: true }
    );
    if (!updatedVedio) {
      return res.status(404).json({ error: "Vedio not found" });
    }
    res.status(200).json(updatedVedio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteVedio = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVedio = await Vedio.findByIdAndDelete(id);
    if (!deletedVedio) {
      return res.status(404).json({ error: "Vedio not found" });
    }
    res.status(200).json({ message: "Vedio deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
