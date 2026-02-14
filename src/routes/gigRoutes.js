import express from "express";
import { createGig, getMyGigs } from "../controllers/gigController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*
Software T:
Every route here requires authentication.
protect middleware runs BEFORE controller.
*/

router.route("/")
  .post(protect, createGig)
  .get(protect, getMyGigs);

export default router;

