let model = require('../models')

function getAllTreesController(req, res, next) {
  console.log('we made it to controllers/trees');
  //console.log('req - ', req)
  //let limit = req.query.limit;
  let trees = model.trees.getAllTrees();
  res.status(200).json(trees)
}

function getTreeByIdController(req, res, next) {
  let tree = model.trees.getTreeById(req.params.id)
  res.status(200).json(tree)
}

let createTreeController = (req, res, next) => {
  let { name } = req.body
  if(!name) return next({status: 400, message: "Please provide a name"})
  if (name.length > 45) {
    err = {status: 400, message: "Name is over 45 characters"}
    return next(err);
  }
// to create a new tree on a new site, need to add a site constructor
// as part of the tree constructor

  let newTree = model.trees.createTree(req)
  res.status(201).json(newTree)
}

function updateTreeController(req, res, next) {
  let updatedTree = model.trees.updateTree(req)
  res.status(200).json(updatedTree)
}

function deleteTreeController(req, res, next) {
  let deletedTree = model.trees.deleteTree(req.params.id)
  res.status(200).json([deletedTree])
}

module.exports = {
  getAllTreesController,
  getTreeByIdController,
  createTreeController,
  updateTreeController,
  deleteTreeController
}
