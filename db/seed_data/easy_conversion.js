let fs = require('fs');
let util = require('util');

function getVarietyId(varietyName) {
  let varieties = {
    'Elstar': 1,
    'Gala': 2,
    'Golden Delcicious': 3,
    'Golden Delicious': 3,
    'Granny Smith': 4,
    'Grimes Golden': 5,
    'Hauer Pippin': 6,
    'Jonathan': 7,
    'Kidd\'s Orange Red': 8,
    'Liberty': 9,
    'Nonesuch': 10,
    'Pettingill': 11,
    'Pink Lady': 12,
    'Pink Pearl': 13,
    'Red Fuji': 14,
    'Emerald Beauty': 15,
    'Methley': 16,
    'Santa Rosa': 17,
    'Fuyu': 18,
    'default': 19
  };
  return varieties[varietyName] || varieties['default'];
}

// import raw trees file (a messy JS object)
let trees_0 = require('./trees');
// convert to json
let treesStr = JSON.stringify(trees_0);
// convert back to JS object - now it's cleaner
let treesObj = JSON.parse(treesStr)
// write the clean JS object to a file - not really necessary but I like it
fs.writeFileSync('./workspace/temp1.js', 'module.exports = \n' + util.inspect(treesObj, { maxArrayLength: null }), 'utf-8')
// import the saved data so it can be converted
let trees = require('./temp1.js');
let new_sites = [];
let new_species_sites = [];
let varieties = [];
let species = [];
let species_ids = [];
let new_notes = [];
let counter = 1;
for (let elem in trees) {
    let new_site = {};
    let new_species_site = {};
    let new_note = {};
    new_species_site.id = counter;
    new_species_site.name = elem;
    new_species_site.site_id = counter;
    if (trees[elem].species === 'apple') {
      new_species_site.species_id = 1;
    }
    if (trees[elem].species === 'plum') {
      new_species_site.species_id = 2;
    }
    if (trees[elem].species === 'persimmon') {
      new_species_site.species_id = 3;
    }
    if (trees[elem].species === 'unknown') {
      new_species_site.species_id = 1;
    }

    let cur_variety = trees[elem].variety;
    let cur_var_id = getVarietyId(cur_variety);
    new_species_site.variety_id = cur_var_id;

    varieties.push(trees[elem].variety);
    species.push(trees[elem].species);
    species_ids.push(new_species_site.species_id);

    new_site.id = counter;
    new_site.section = trees[elem].section;
    new_site.row = trees[elem].row;
    let startLat = trees[elem].location.lat;
    new_site.lat = (Math.trunc(startLat * 10000000))/ 10000000;

    let startLng = trees[elem].location.lng;
    new_site.lng = (Math.trunc(startLng * 10000000))/ 10000000;
    if (trees[elem].notes[0]) {
        new_note.content = trees[elem].notes[0];
        new_note.site_id = counter;
        new_note.species_site_id = counter;
        new_notes.push(new_note);
      }
    new_sites.push(new_site);
    new_species_sites.push(new_species_site);
    counter = counter + 1;
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let uniqueVarieties = varieties.filter(onlyUnique);
let uniqueSpecies = species.filter(onlyUnique);
let uniqueSpeciesIds = species_ids.filter(onlyUnique);

console.log('new_species_sites - ', new_species_sites);
console.log('********************************* love all');
console.log('new_sites - ', new_sites)

console.log('here comes notes ********************');
console.log('new_notes - ', new_notes);

console.log( 'uniqueVarieties = *********************')
console.log(uniqueVarieties)

console.log( 'uniqueSpecies = *********************')
console.log(uniqueSpecies);
//console.log('species_ids - ', species_ids);
console.log( 'uniqueSpeciesIds = *********************')
console.log(uniqueSpeciesIds)

fs.writeFileSync('./workspace/sites_input.js',
  'module.exports = \n' + util.inspect(new_sites, { maxArrayLength: null }), 'utf-8');
fs.writeFileSync('./workspace/species_sites_input.js',
  'module.exports = \n' + util.inspect(new_species_sites, { maxArrayLength: null }), 'utf-8');
fs.writeFileSync('./workspace/notes_input.js',
    'module.exports = \n' + util.inspect(new_notes, { maxArrayLength: null }), 'utf-8');
