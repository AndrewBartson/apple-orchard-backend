const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/varieties')
  .get(controllers.varieties.getAllVarietiesController)
  .post(controllers.varieties.createVarietyController)

router.route('/varieties/:id')
  .get(controllers.varieties.getVarietyByIdController)
  .patch(controllers.varieties.updateVarietyController)
  .put(controllers.varieties.updateVarietyController)
  .delete(controllers.varieties.deleteVarietyController)

module.exports = router
