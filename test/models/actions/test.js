const db      = require('../../../models/dbConfig');
const actions = require('../../../models/actions/actions');
const expect  = require('chai').expect;

const TEST_DATA = {
  test_id: 0,
  name: 'John Doe',
  title: 'John Doe\'s Test',
  description: 'John Doe\'s test data API endpoint awesome'
};

describe('Database Test actions', () => {

  describe('createTest function', () => {

    beforeEach('clear data in tests table', done => {
      db.select()
        .from('tests')
        .del()
        .then(() => done())
        .catch(err => done(err));
    });

    it('should create a test', done => {

      db.select()
        .from('tests')
        .then(emptyTests => {
          expect(emptyTests.length).to.equal(0);
          actions.test.createTest(TEST_DATA, (err, data) => {
            db.select()
              .from('tests')
              .then(tests => {
                expect(tests.length).to.equal(1);
                done();
              })
              .catch(errTwo => done(errTwo));
          });
        })
        .catch(errOne => done(errOne));

    });

    it('should pass an array to a callback function that contains one number', done => {

      actions.test.createTest(TEST_DATA, (err, data) => {
        expect(data.length).to.equal(1);
        expect(data).to.be.an('array');
        expect(typeof data[0] === 'number').to.equal(true);
        done();
      });

    });

    it('should pass null to a callback function', done => {

      actions.test.createTest(TEST_DATA, (err, data) => {
        expect(err).to.equal(null);
        done();
      });

    });

    it('should pass an error object to a callback function', done => {

      actions.test.createTest(TEST_DATA, (err, data) => {
        expect(err).to.equal(null);
        actions.test.createTest(TEST_DATA, (err, data) => {
          expect(typeof err === 'object').to.equal(true);
          done();
        });
      });

    });

  });

  describe('retrieveTests function', () => {

    it('should pass an array as data', done => {

      actions.test.retrieveTests((err, data) => {
        expect(data).to.be.an('array');
        done();
      });

    });

    it('should pass null as err', done => {

      actions.test.retrieveTests((err, data) => {
        expect(err).to.equal(null);
        done();
      });
      
    });

  });

});