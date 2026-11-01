import Qualification from "../models/qualification.model.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  const qualification = new Qualification(req.body);
  try {
    await qualification.save();
    return res.status(200).json({
      message: "Successfully created qualification!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let qualifications = await Qualification.find().select(
      "title institution year description",
    );
    res.json(qualifications);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const qualificationByID = async (req, res, next, id) => {
  try {
    let qualification = await Qualification.findById(id);
    if (!qualification)
      return res.status("400").json({
        error: "Qualification not found",
      });
    req.profile = qualification;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve qualification",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let qualification = req.profile;
    qualification = Object.assign(qualification, req.body);
    qualification.updated = Date.now();
    await qualification.save();
    res.json(qualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let qualification = req.profile;
    let deletedQualification = await qualification.deleteOne();
    res.json(deletedQualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  list,
  qualificationByID,
  read,
  update,
  remove,
};
