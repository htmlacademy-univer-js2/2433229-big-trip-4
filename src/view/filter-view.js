import { createFilterTemplate } from '../templates/filter-template.js';
import { createElement } from '../render.js';

export default class FilterFormView {
  getTemplate() {
    return createFilterTemplate();
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