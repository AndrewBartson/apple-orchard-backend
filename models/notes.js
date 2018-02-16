let knex = require('../db');

function getAllNotes() {
  return knex('notes');
}

function getNoteById(id) {
  return knex('notes')
    .where('id', id)
    .first();
}

function createNote(note) {
  return knex('notes')
    .insert(note, '*');
  // '*' returns all properties of the note
  // that just got created
}

function updateNote(id, note) {
  return knex('notes')
    .where('id', id)
    .update(note, '*');
}

function deleteNote(id) {
  return knex('notes')
    .del()
    .where('id', id)
    .then()
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
}
