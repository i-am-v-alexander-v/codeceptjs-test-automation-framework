const { I } = inject()

export = {
  async create(data) {
    await I.sendPostRequest('/pets', data);
  }
}
