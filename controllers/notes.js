let model = require('../models');

function isValidNoteInput(note) {
  // let hasGenus = typeof user.genus == 'string' && user.stringVal.trim() != '';
  // return hasGenus && hasSpecies && hasCommonName;
  return true;
}

function getAllNotesController(req, res, next) {
  model.notes.getAllNotes()
    .then((result) => {
      res.status(200).json(result);
    })
};
function getNoteByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.notes.getNoteById(req.params.id)

      .then((result) => {
        if(result) {
          res.status(200).json(result);
        }
        else {
          res.status(404);
          next({message: 'ID not found'});
        }
      })
    }
}

function createNoteController(req, res, next) {
  if(isValidNoteInput(req.body)) {
    // insert into db
    model.notes.createNote(req.body)
      .then(notes => {
        res.status(201).json(notes[0]);
      })
  }
   else {
     next({message: 'Invalid or missing input'});
   }

// to create a new species_site (means plant a new tree on a new
// site), need to create both a species_site and a site. So somehow
// need to create two objects, one of each kind, in one operation.

}

function updateNoteController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else if (!isValidNoteInput(req.body)) {
    return next({message: 'Invalid or missing input'});
  }
  else {
    model.notes.updateNote(req.params.id, req.body)
      .then(notes => {
        res.status(200).json(notes[0])
      })
  }
}

function deleteNoteController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.notes.deleteNote(req.params.id)
    .then((result) => {
      if(result) {
        res.status(200).json({ result });
      }
      else {
        res.status(404);
        next({message: 'ID not found'});
      }
    })
  }
}

module.exports = {
  getAllNotesController,
  getNoteByIdController,
  createNoteController,
  updateNoteController,
  deleteNoteController
}
