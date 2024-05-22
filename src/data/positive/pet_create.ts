var Factory = require('rosie').Factory
var { faker } = require('@faker-js/faker')

module.exports = [...Array(10).keys()].map(() => (
  {
    name: 'valid data',
    data: new Factory()
      .attr('name', () => faker.person.firstName())
      .attr('status', () => faker.helpers.arrayElement(['available', 'pending', 'sold']))
      .attr('photoUrls', () => [
        faker.image.urlLoremFlickr({ category: 'animals' })
      ])
      .attr('category', () => (
        {
          id: faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }),
          name: faker.animal.type()
        }
      ))
      .attr('tags', () => [
        {
          id: faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }),
          name: faker.word.adjective()
        }
      ])
      .build()
  }
))
