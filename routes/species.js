const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/species')
  .get(controllers.species.getAllSpeciesController)
  .post(controllers.species.createSpeciesController)

router.route('/species/:id')
  .get(controllers.species.getSpeciesByIdController)
  .patch(controllers.species.updateSpeciesController)
  .put(controllers.species.updateSpeciesController)
  .delete(controllers.species.deleteSpeciesController)

module.exports = router
