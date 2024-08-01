const express= require ("express");
const { addNote, getNotes, deleteNote, editNote } = require("../controllers/note.controller");

const router = express.Router()

router.post("/:id/createNote", addNote)
router.get("/:id/getNotes", getNotes)
router.delete("/:groupId/:noteId/deleteNote",deleteNote)
router.put("/:groupId/:noteId/editNote",editNote)

module.exports = router;