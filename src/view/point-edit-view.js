import { createPointEditTemplate } from '../templates/point-edit-template.js';
import { createElement } from '../render.js';

export default class CurrentFormView {
  constructor ({point}) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}