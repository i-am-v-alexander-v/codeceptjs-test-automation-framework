Feature('Negative cases — Pet');

Data(require('../../data/negative/pet_create'))
  .Scenario('Create a new pet with invalid field', async ({ I, current, petClient }) => {
    await petClient.create(current.data);
    I.seeResponseCodeIs(404);
    I.seeResponseMatchesJsonSchema($ => {
      return $.object({
        code: $.number().integer().min(0).required(),
        type: $.string().required(),
        message: $.string().required(),
      })
    });
  })
    .tag('@negative');
