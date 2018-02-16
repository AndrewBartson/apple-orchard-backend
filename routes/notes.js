const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/notes')
  .get(controllers.notes.getAllNotesController)
  .post(controllers.notes.createNoteController)

router.route('/notes/:id')
  .get(controllers.notes.getNoteByIdController)
  .patch(controllers.notes.updateNoteController)
  .put(controllers.notes.updateNoteController)
  .delete(controllers.notes.deleteNoteController)

module.exports = router
