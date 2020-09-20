var expect = require('chai').expect;
var request = require('request');
it('index main page', function(done) {

    request('http://localhost:1111', function(error, response, body) {
        expect(response.statuscode).to.equal(200);
        done();
    }).catch(done);
});