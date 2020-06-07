'use strict';

const faker = require('faker');

function generatingRandomSearchQuery(userContext, events, done) {
    const random = faker.fake("{{lorem.word}}");
    console.log(random)

    userContext.vars.random = random;

    return done();
}

module.exports = {
    generatingRandomSearchQuery
  };
