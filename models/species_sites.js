let knex = require('../db');

function getAllSpeciesSites() {
  return knex('species_sites');
}

function getSpeciesSiteById(id) {
  return knex('species_sites')
    .where('id', id)
    .first();
}

function createSpeciesSite(site) {
  return knex('species_sites')
    .insert(site, '*');
  // '*' returns all properties of the site
  // that just got created
}

function updateSpeciesSite(id, site) {
  return knex('species_sites')
    .where('id', id)
    .update(site, '*');
}

function deleteSpeciesSite(id) {
  return knex('species_sites')
    .del()
    .where('id', id)
    .then()
}

module.exports = {
  getAllSpeciesSites,
  getSpeciesSiteById,
  createSpeciesSite,
  updateSpeciesSite,
  deleteSpeciesSite
}
