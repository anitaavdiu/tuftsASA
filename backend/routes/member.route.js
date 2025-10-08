import express from "express";
import mongoose from "mongoose";
import { getMembers, createMember, updateMember, deleteMember } from "../controllers/member.controller.js";

const router = express.Router();

router.get("/", getMembers );


router.post("/", createMember);

router.put("/:id", updateMember);

router.delete("/:id", deleteMember);

export default router;