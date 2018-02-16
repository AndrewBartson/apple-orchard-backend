let model = require('../models');

function isValidSpeciesInput(species) {
  let hasGenus = typeof species.genus == 'string' && species.genus.trim() != '';
  let hasSpecies = typeof species.species_name == 'string' && species.species_name.trim() != '';
  let hasCommonName = typeof species.common_name == 'string' && species.common_name.trim() != '';
  return hasGenus && hasSpecies && hasCommonName;
  //return true;
}

function getAllSpeciesController(req, res, next) {
  model.species.getAllSpecies()
    .then((result) => {
      res.status(200).json(result);
    })
};
function getSpeciesByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.species.getSpeciesById(req.params.id)
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

function createSpeciesController(req, res, next) {
  if (isValidSpeciesInput(req.body)) {
    // insert into db
    model.species.createSpecies(req.body)
      .then(species => {
        res.status(201).json(species[0]);
      })
  }
   else {
     next({message: 'Invalid or missing input'});
   }

// to create a new species_site (means plant a new tree on a new
// site), need to create both a species_site and a site. So somehow
// need to create two objects, one of each kind, in one operation.

}

function updateSpeciesController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else if (!isValidSpeciesInput(req.body)) {
    return next({message: 'Invalid or missing input'});
  }
  else {
    model.species.updateSpecies(req.params.id, req.body)
      .then(species => {
        res.status(200).json(species[0])
      })
  }
}

function deleteSpeciesController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.species.deleteSpecies(req.params.id)
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
  getAllSpeciesController,
  getSpeciesByIdController,
  createSpeciesController,
  updateSpeciesController,
  deleteSpeciesController
}
