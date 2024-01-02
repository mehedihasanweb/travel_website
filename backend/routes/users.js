import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create user
router.post("/create-user", createUser);
//get all user
router.get("/", verifyUser, getAllUser);
// get single user
router.get("/:id", verifyUser, getSingleUser);
// update user
router.put("/:id", verifyUser, updateUser);
// delete user
router.delete("/:id", verifyAdmin, deleteUser);

export default router;
