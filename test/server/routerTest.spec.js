import supertest from 'supertest';
import app from '../../src/server/app';

const getRequest = function () {
  return new Promise((resolve) => resolve(supertest(app)));
};

let request = null;

describe('test router', () => {
  before((done) => {
    getRequest().then(data => {
      request = data;
      done();
    });
  });

  it('should get 200 when get /', done => {
    request.get('/').expect(200, done);
  });

  it('should get hello information', done => {
    request.get('/hello').expect(200, done);
  });

  it('should get 404 when get /abcdefg which is not routed', done => {
    request.get('/abcdefg').expect(404, done);
  });
});
