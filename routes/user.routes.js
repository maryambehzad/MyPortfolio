import express from "express";
import * as userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router
  .route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create)
  .delete(userCtrl.removeAll);

router
  .route("/api/users/:id")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

export default router;
