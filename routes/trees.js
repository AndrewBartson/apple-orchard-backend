const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/trees')
  .get(controllers.trees.getAllTreesController)
  .post(controllers.trees.createTreeController)

router.route('/trees/:id')
  .get(controllers.trees.getTreeByIdController)
  .patch(controllers.trees.updateTreeController)
  .delete(controllers.trees.deleteTreeController)

module.exports = router
