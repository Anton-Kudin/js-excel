export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('Метод getRoot должен быть имплементирован')
  }

  afterRender() {}

  destroy() {}
}
