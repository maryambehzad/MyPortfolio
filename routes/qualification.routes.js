import express from "express";
import * as qualCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router
  .route("/api/qualifications")
  .get(qualCtrl.list)
  .post(qualCtrl.create)
  .delete(qualCtrl.removeAll);

router
  .route("/api/qualifications/:id")
  .get(qualCtrl.read)
  .put(qualCtrl.update)
  .delete(qualCtrl.remove);

export default router;
