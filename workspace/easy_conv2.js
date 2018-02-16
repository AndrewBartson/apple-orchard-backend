let trees = require('./temp1.js');
let new_sites = [];
let new_species_sites = [];
let counter = 1;
for (let elem in trees) {
  let temp = elem;
  console.log('trees[elem] - ', trees[elem])
    let new_site = {};
    let new_species_site = {};
    new_species_site.id = counter;
    new_species_site.name = elem;
    new_species_site.site_id = counter;
    new_species_site.species_id = 1;
    new_species_site.variety_id = 1;

    new_site.id = counter;
    new_site.section = trees[elem].section;
    new_site.row = trees[elem].row;
    let startLat = trees[elem].location.lat;
    let shortLat = (Math.trunc(startLat * 10000000))/ 10000000;
    console.log('shortLat - ', shortLat);
    new_site.lat = shortLat;

    let startLng = trees[elem].location.lng;
    let shortLng = (Math.trunc(startLng * 10000000))/ 10000000;
    console.log('shortLng - ', shortLng);
    new_site.lng = shortLng;

    new_sites.push(new_site);
    new_species_sites.push(new_species_site);
    counter = counter + 1;
}

console.log('new_species_sites - ', new_species_sites);
console.log('********************************* love all');
console.log('new_sites - ', new_sites)
