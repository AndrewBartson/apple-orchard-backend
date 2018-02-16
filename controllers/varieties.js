let model = require('../models');

function isValidVarietyInput(variety) {
  // let hasGenus = typeof user.genus == 'string' && user.stringVal.trim() != '';
  // let hasSpecies = typeof user.users_name == 'string' && user.stringVal.trim() != '';
  // let hasCommonName = typeof user.common_name == 'string' && user.stringVal.trim() != '';
  return true;
}

function getAllVarietiesController(req, res, next) {
  model.varieties.getAllVarieties()
    .then((result) => {
      res.status(200).json(result);
    })
};
function getVarietyByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.varieties.getVarietyById(req.params.id)
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

function createVarietyController(req, res, next) {
  if(isValidVarietyInput(req.body)) {
    // insert into db
    model.varieties.createVariety(req.body)
      .then(varieties => {
        res.status(201).json(varieties[0]);
      })
  }
   else {
     next({message: 'Invalid or missing input'});
   }
}

function updateVarietyController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else if (!isValidVarietyInput(req.body)) {
    return next({message: 'Invalid or missing input'});
  }
  else {
    model.varieties.updateVariety(req.params.id, req.body)
      .then(varieties => {
        res.status(200).json(varieties[0])
      })
  }
}

function deleteVarietyController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.varieties.deleteVariety(req.params.id)
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
  getAllVarietiesController,
  getVarietyByIdController,
  createVarietyController,
  updateVarietyController,
  deleteVarietyController
}
