let model = require('../models');

function isValidSpeciesSiteInput(species_site) {
  // To validate a string -
  // let hasStringVal = typeof site.stringVal == 'string' && site.stringVal.trim() != '';
  return true;
}

function getAllSpeciesSitesController(req, res, next) {
  model.species_sites.getAllSpeciesSites()
    .then((result) => {
      res.status(200).json(result);
    })
};
function getSpeciesSiteByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.species_sites.getSpeciesSiteById(req.params.id)
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

function createSpeciesSiteController(req, res, next) {
  if(isValidSpeciesSiteInput(req.body)) {
    // insert into db
    model.species_sites.createSpeciesSite(req.body)
      .then(species_sites => {
        res.status(201).json(species_sites[0]);
      })
  }
   else {
     next({message: 'Invalid LatLng input'});
   }

  // let { name } = req.body
  // if(!name) return next({status: 400, message: "Please provide a name"})
  // if (name.length > 45) {
  //   err = {status: 400, message: "Name is over 45 characters"}
  //   return next(err);
  //}

// to create a new tree on a new site, need to add a tree constructor
// as part of the site constructor

}

function updateSpeciesSiteController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else if (!isValidSpeciesSiteInput(req.body)) {
    return next({message: 'Invalid LatLng input'});
  }
  else {
    model.species_sites.updateSpeciesSite(req.params.id, req.body)
      .then(species_sites => {
        res.status(200).json(species_sites[0])
      })
  }
}

function deleteSpeciesSiteController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.species_sites.deleteSpeciesSite(req.params.id)
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
  getAllSpeciesSitesController,
  getSpeciesSiteByIdController,
  createSpeciesSiteController,
  updateSpeciesSiteController,
  deleteSpeciesSiteController
}
