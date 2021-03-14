import { IComponent } from "./IComponents";

export class ButtonComponent implements IComponent {
  constructor(private container: HTMLDivElement) {}

  render(): void {
    const buttonTemplate: HTMLParagraphElement = document.createElement("p");

    buttonTemplate.classList.add("restore-button");
    buttonTemplate.innerHTML = `Back to Terminal &DoubleLongRightArrow;`;

    this.container.appendChild(buttonTemplate);
  }
}
