let model = require('../models');

function isValidSiteInput(site) {
  let hasLat = typeof site.lat == 'number';
  let hasLng = typeof site.lng == 'number';
  // To validate a string -
  // let hasStringVal = typeof site.stringVal == 'string' && site.stringVal.trim() != '';
  return hasLat && hasLng;
}

function getAllSitesController(req, res, next) {
  model.sites.getAllSites()
    .then((result) => {
      res.status(200).json(result);
    })
};
function getSiteByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.sites.getSiteById(req.params.id)
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

function createSiteController(req, res, next) {
  let lat_step_1 = 3776400 + (Math.round(Math.random()*65));
  let lng_step_1 = -12203500 - (Math.round(Math.random()*65));
  let lat_step_2 = lat_step_1/100000;
  let lng_step_2 = lng_step_1/100000;
  req.body.lat = lat_step_2;
  req.body.lng = lng_step_2;

  if(isValidSiteInput(req.body)) {
    // insert into db
    model.sites.createSite(req.body)
      .then(sites => {
        res.status(201).json(sites[0]);
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

function updateSiteController(req, res, next) {
  let lat_step_1 = 3776400 + (Math.round(Math.random()*65));
  let lng_step_1 = -12203500 - (Math.round(Math.random()*65));
  let lat_step_2 = lat_step_1/100000;
  let lng_step_2 = lng_step_1/100000;
  req.body.lat = lat_step_2;
  req.body.lng = lng_step_2;

  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else if (!isValidSiteInput(req.body)) {
    return next({message: 'Invalid LatLng input'});
  }
  else {
    model.sites.updateSite(req.params.id, req.body)
      .then(sites => {
        res.status(200).json(sites[0])
      })
  }
}

function deleteSiteController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.sites.deleteSite(req.params.id)
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
  getAllSitesController,
  getSiteByIdController,
  createSiteController,
  updateSiteController,
  deleteSiteController
}
