const express = require('express');
const notesController = require('../controllers/notesController');
const router = express.Router();

router.get('/',notesController.getNotes);
router.post('/',notesController.createNotes);
router.get('/:id',notesController.getNoteById);
router.put('/:id',notesController.updateNote);

module.exports=router;