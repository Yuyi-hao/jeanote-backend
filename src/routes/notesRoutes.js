import express from "express";
import { createNote, deleteNote, getAllNotes, getOneNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.get("/:id", getOneNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;