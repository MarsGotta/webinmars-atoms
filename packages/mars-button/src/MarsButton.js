import { html, LitElement } from 'lit-element';
import styles from './MarsButton.styles.js';

export class MarsButton extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      title: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.type = '';
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button class=${`ui button ${this.type}`}>
        <slot></slot>
      </button>
    `;
  }
}
