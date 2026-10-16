import Qualification from "../models/qualification.model.js";

export const list = async (req, res) => {
  try {
    const items = await Qualification.find();
    res.json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const read = async (req, res) => {
  try {
    const item = await Qualification.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const item = new Qualification(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndDelete(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const removeAll = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
