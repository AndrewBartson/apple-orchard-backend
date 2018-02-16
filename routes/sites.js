const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/sites')
  .get(controllers.sites.getAllSitesController)
  .post(controllers.sites.createSiteController)

router.route('/sites/:id')
  .get(controllers.sites.getSiteByIdController)
  .patch(controllers.sites.updateSiteController)
  .put(controllers.sites.updateSiteController)
  .delete(controllers.sites.deleteSiteController)

module.exports = router
