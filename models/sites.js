let knex = require('../db');

function getAllSites() {
  return knex('sites');
}

function getSiteById(id) {
  return knex('sites')
    .where('id', id)
    .first();
}

function createSite(site) {
  return knex('sites')
    .insert(site, '*');
  // '*' returns all properties of the site
  // that just got created
}

function updateSite(id, site) {
  return knex('sites')
    .where('id', id)
    .update(site, '*');
}

function deleteSite(id) {
  return knex('sites')
    .del()
    .where('id', id)
    .then()
}

module.exports = {
  getAllSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite
}
