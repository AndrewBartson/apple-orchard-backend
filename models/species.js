let knex = require('../db');

function getAllSpecies() {
  return knex('species');
}

function getSpeciesById(id) {
  return knex('species')
    .where('id', id)
    .first();
}

function createSpecies(species) {
  return knex('species')
    .insert(species, '*');
  // '*' returns all properties of the species
  // that just got created
}

function updateSpecies(id, species) {
  return knex('species')
    .where('id', id)
    .update(species, '*');
}

function deleteSpecies(id) {
  return knex('species')
    .del()
    .where('id', id)
    .then()
}

module.exports = {
  getAllSpecies,
  getSpeciesById,
  createSpecies,
  updateSpecies,
  deleteSpecies
}
