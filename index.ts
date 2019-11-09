import { LitElement, html, property, customElement } from "lit-element";

@customElement("hello-world")
export class HellowWorldElement extends LitElement {
  @property({ type: String })
  recipient: string = "Coffee Machine";

  render() {
    return html`
      Hello ${this.recipient}
    `;
  }
}
