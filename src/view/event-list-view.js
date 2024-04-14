import { createEventListTemplate } from '../templates/event-list-template.js';
import { createElement } from '../render.js';

export default class EventsListView {
  getTemplate() {
    return createEventListTemplate();
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