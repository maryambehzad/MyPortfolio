import express from "express";
import * as projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

router
  .route("/api/projects")
  .get(projectCtrl.list)
  .post(projectCtrl.create)
  .delete(projectCtrl.removeAll);

router
  .route("/api/projects/:id")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

export default router;
