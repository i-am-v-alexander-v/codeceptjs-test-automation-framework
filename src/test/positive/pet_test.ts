Feature('Positive cases — Pet');

Data(require('../../data/positive/pet_create'))
  .Scenario('Create a new pet', async ({ I, current, petClient }) => {
    await petClient.create(current.data);
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsJson(current.data);
    I.seeResponseMatchesJsonSchema($ => {
      return $.object({
        id: $.number().integer().unsafe().min(0).required(),
        category: $.object({
          id: $.number().integer().unsafe().min(0).required(),
          name: $.string().required()
        }).required(),
        name: $.string().required(),
        photoUrls: $.array().items($.string()).required(),
        tags: $.array().items(
          $.object({
            id: $.number().integer().unsafe().min(0).required(),
            name: $.string().required()
          })
        ).required(),
        status: $.string().valid('available', 'pending', 'sold').required()
      })
    });
  })
    .tag('@positive');
