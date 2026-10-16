import Contact from '../models/contact.model.js';

export const list = async (req, res) => {
  try { const items = await Contact.find(); res.json(items); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const read = async (req, res) => {
  try { const item = await Contact.findById(req.params.id); res.json(item); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const create = async (req, res) => {
  try { const item = new Contact(req.body); await item.save(); res.status(201).json(item); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const update = async (req, res) => {
  try { const item = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(item); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const remove = async (req, res) => {
  try { const item = await Contact.findByIdAndDelete(req.params.id); res.json(item); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const removeAll = async (req, res) => {
  try { await Contact.deleteMany({}); res.json({ message: "All contacts deleted" }); } 
  catch (err) { res.status(400).json({ error: err.message }); }
};
