import { createPointTemplate } from '../templates/point-template.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class PointView extends AbstractView{
  #point = null;

  constructor ({data}) {
    super();
    this.#point = data;
  }

    get template() {
      return createPointTemplate(this.#point);
  }
}