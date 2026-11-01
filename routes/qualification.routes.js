import express from "express";
import qualCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/api/qualifications").get(qualCtrl.list).post(qualCtrl.create);

router
  .route("/api/qualifications/:id")
  .get(qualCtrl.read)
  .put(qualCtrl.update)
  .delete(qualCtrl.remove);

router.param("qualificationId", qualCtrl.qualificationByID);

export default router;
