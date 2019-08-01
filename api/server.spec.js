const app = require('./server'); // our Node application
const request = require('supertest');


/// without authentification a 401 expected

describe('Test the get/users path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/api/users').expect(401);
    });
})


const demoUser = {
    username:"User03",
    password:"1234"
}


/// with authentification a 200
/// with invalid credentials expected 401

describe('Login', () => {
 it('succeeds with correct credentials', async () => {
   post(`/api/users/login`, demoUser).expect(200);
  });
 it('fails with invalid credentials', async () => {
   const user = {username:'User00', password: '1234'};
   await post(`/api/users/login`, user)
     .expect(401);
  });
});

// a helper function to make a POST request
  function post(url, body){
  const httpRequest = request(app).post(url);
  httpRequest.send(body);
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:5000')
  return httpRequest;
}