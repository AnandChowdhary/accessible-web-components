import { LitElement, html } from "lit-element";

class FormGroup extends LitElement {
  constructor() {
    super();

    this.generatedId =
      "form_group_" +
      Math.random()
        .toString(36)
        .substr(2, 8);

    // Find the input and label
    this.label = this.querySelector("label");
    this.formElement = this.querySelector(
      "input, textarea, select, datalist, output"
    );

    // Assign `for` and `id` to them
    this.formElement.setAttribute("id", this.generatedId);
    this.label.setAttribute("for", this.generatedId);
  }

  render() {
    return html`
      <style>
        :host[hidden] {
          display: none;
        }
        :host {
          display: block;
        }
      </style>
      <slot />
    `;
  }
}

customElements.define("form-group", FormGroup);
