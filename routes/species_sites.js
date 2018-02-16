const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/speciesSites')
  .get(controllers.species_sites.getAllSpeciesSitesController)
  .post(controllers.species_sites.createSpeciesSiteController)

router.route('/speciesSites/:id')
  .get(controllers.species_sites.getSpeciesSiteByIdController)
  .patch(controllers.species_sites.updateSpeciesSiteController)
  .put(controllers.species_sites.updateSpeciesSiteController)
  .delete(controllers.species_sites.deleteSpeciesSiteController)

module.exports = router
