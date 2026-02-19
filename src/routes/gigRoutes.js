import express from "express";
import {
  createGig,
  getMyGigs,
  deleteGig,
  updateGig
} from "../controllers/gigController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createGig)
  .get(protect, getMyGigs);

router.route("/:id")
  .put(protect, updateGig)
  .delete(protect, deleteGig);

export default router;
