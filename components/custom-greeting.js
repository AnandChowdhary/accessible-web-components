import { LitElement, html } from "lit-element";

// Create your custom component
class CustomGreeting extends LitElement {
  // Declare properties
  static get properties() {
    return {
      name: { type: String }
    };
  }
  // Initialize properties
  constructor() {
    super();
    this.name = "World";
  }
  // Define a template
  render() {
    return html`
      <div>Hello, ${this.name}!</div>
    `;
  }
}
// Register the element with the browser
customElements.define("custom-greeting", CustomGreeting);
