import { createPointTemplate } from '../templates/point-template.js';
import { createElement } from '../render.js';

export default class PointView {
  constructor ({data}) {
    this.point = data;
  }

  getTemplate() {
    return createPointTemplate(this.point);
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