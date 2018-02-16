let trees = require('../db/seed_data/trees')
const uuid = require('uuid-v4');
// here we require the db connection and call it 'knex'.
// it's not knex itself but knex connected to the db.
let knex = require('../db');

function getAllTrees() {
  console.log('we made it to models/trees');
  return trees;
}

function getTreeById(id) {
  let tree = trees.find((treeItem) => {
    return treeItem.id === id
  })
  if (!tree) {
    err = {status: 404, message: "Tree id not found"}
    return err
  }
  return tree
}

function createTree(req) {
  return knex('')
  // let name = req.body.name;
  // let newId = uuid();
  // let newTree = { id: newId, name: name }
  // trees['name'] = newTree;
  // return newTree;

  //   let {name, site_id, species_id, variety_id, icon, date_planted, created_at, updated_at} = req.body
  //   let tree = createTree(name, site_id, species_id, variety_id, icon, date_planted, created_at, updated_at)
  //   res.json({data: tree})

}

function updateTree(req) {
  let tree = getTree(req.params.id)
  let data = req.body;
  for (var key in data) {
    tree[key] = data[key]
  }
  return tree
}

function deleteTree(id) {
  let tree = getTree(id)
  let delIndex = trees.findIndex(function(tree) {
    return tree.id === id
  })
  trees.splice(delIndex, 1);
  return tree
}

module.exports = {
  getAllTrees,
  getTreeById,
  createTree,
  updateTree,
  deleteTree
}
