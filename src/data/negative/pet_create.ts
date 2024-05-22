var Factory = require('rosie').Factory
var { faker } = require('@faker-js/faker')

module.exports = [
  {
    name: 'invalid name',
    data: new Factory()
      .attr('name', () => faker.number.int({ min: 0, max: Number.MAX_SAFE_INTEGER }))
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
  },
  {
    name: 'invalid status',
    data: new Factory()
      .attr('name', () => faker.person.firstName())
      .attr('status', () => faker.helpers.arrayElement(['hello', 'word', '!']))
      .attr('photoUrls', () => [
        faker.image.urlLoremFlickr({category: 'animals'})
      ])
      .attr('category', () => (
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.animal.type()
        }
      ))
      .attr('tags', () => [
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.word.adjective()
        }
      ])
      .build()
  },
  {
    name: 'invalid photoUrls',
    data: new Factory()
      .attr('name', () => faker.person.firstName())
      .attr('status', () => faker.helpers.arrayElement(['available', 'pending', 'sold']))
      .attr('photoUrls', () => faker.image.urlLoremFlickr({category: 'city'}))
      .attr('category', () => (
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.animal.type()
        }
      ))
      .attr('tags', () => [
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.word.adjective()
        }
      ])
      .build()
  },
  {
    name: 'invalid category',
    data: new Factory()
      .attr('name', () => faker.person.firstName())
      .attr('status', () => faker.helpers.arrayElement(['available', 'pending', 'sold']))
      .attr('photoUrls', () => [
        faker.image.urlLoremFlickr({category: 'animals'})
      ])
      .attr('category', () => faker.animal.type())
      .attr('tags', () => [
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.word.adjective()
        }
      ])
      .build()
  },
  {
    name: 'invalid tags',
    data: new Factory()
      .attr('name', () => faker.person.firstName())
      .attr('status', () => faker.helpers.arrayElement(['available', 'pending', 'sold']))
      .attr('photoUrls', () => [
        faker.image.urlLoremFlickr({category: 'animals'})
      ])
      .attr('category', () => (
        {
          id: faker.number.int({min: 0, max: Number.MAX_SAFE_INTEGER}),
          name: faker.animal.type()
        }
      ))
      .attr('tags', () => faker.word.adjective())
      .build()
  },
]
