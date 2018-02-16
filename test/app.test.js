let request = require('supertest');
let expect = require('chai').expect;
let knex = require('../db');
let app = require('../app');
let sites_fixtures = require('./sites_fixtures');

describe("Testing 'sites' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for sites', (done) => {
     request(app)
      .get('/sites')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/sites/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         // handle error later
       })
     });

     // it('Creates a record', (done) => {
     //   request(app)
     //    .post('/sites')
     //    .send(sites_fixtures.site)
     //    .set('Accept', 'application/json')
     //    .expect('Content-Type', /json/)
     //    .expect(200)
     //    .then((response) => {
     //      expect(response.body).to.be.a('object');
     //      //sites_fixtures.site.id = response.body.id;
     //      //sites_fixtures.site.lat = response.body.lat;
     //      //sites_fixtures.site.lng = response.body.lng;
     //      //expect(response.body).to.deep.equal(sites_fixtures.site)
     //      done();
     //    })
     //    .catch((error) => {
     //      // handle error later
     //    })
     //  });
});

describe("Testing 'species' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for species', (done) => {
     request(app)
      .get('/species')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/species/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         // handle error later
       })
     });
});

describe("Testing 'users' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for users', (done) => {
     request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/users/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         // handle error later
       })
     });
});

describe("Testing 'varieties' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for varieties', (done) => {
     request(app)
      .get('/varieties')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/varieties/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         // handle error later
       })
     });
});

describe("Testing 'notes' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for notes', (done) => {
     request(app)
      .get('/notes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/notes/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         console.log(error);
         // handle error later
       })
     });
});

describe("Testing 'species_sites' ---->", () => {
   before((done) => {
     // run migrations
     knex.migrate.latest()
       .then(() => {
         // run seeds
         return knex.seed.run();
       }).then(() => done());
   });

   it('Lists all records for species_sites', (done) => {
     request(app)
      .get('/speciesSites')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        //expect(response.body).to.deep.equal(sites_fixtures.sites);
        done();
      })
      .catch((error) => {
        // handle error later
      })
    });

    it('Show one record by id', (done) => {
      request(app)
       .get('/speciesSites/1')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
         expect(response.body).to.be.a('object');
         done();
       })
       .catch((error) => {
         // handle error later
       })
     });
});
