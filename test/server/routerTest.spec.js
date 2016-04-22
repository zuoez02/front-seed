import supertest from 'supertest';
import config from '../../src/server/config';
import app from '../../src/server/app';

const getRequest = function () {
    return new Promise(function (resolve, reject) {
        resolve(supertest(app));
    });
};

let request = null;

describe('test router', function () {
   before(function(done) {
       getRequest().then(data => {
           request=data;
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