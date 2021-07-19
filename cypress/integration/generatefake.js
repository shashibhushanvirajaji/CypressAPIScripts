
var faker = require('faker')

console.log(faker.name.firstName()+' '+faker.name.lastName()+' '+faker.name.middleName())
console.log(faker.internet.email())