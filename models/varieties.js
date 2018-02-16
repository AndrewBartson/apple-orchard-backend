let knex = require('../db');

function getAllVarieties() {
  return knex('varieties');
}

function getVarietyById(id) {
  return knex('varieties')
    .where('id', id)
    .first();
}

function createVariety(variety) {
  return knex('varieties')
    .insert(variety, '*');
  // '*' returns all properties of the variety
  // that just got created
}

function updateVariety(id, variety) {
  return knex('varieties')
    .where('id', id)
    .update(variety, '*');
}

function deleteVariety(id) {
  return knex('varieties')
    .del()
    .where('id', id)
    .then()
}

module.exports = {
  getAllVarieties,
  getVarietyById,
  createVariety,
  updateVariety,
  deleteVariety
}
