import { IComponent } from "./IComponents";
export class ClearComponent implements IComponent {
  constructor(private container: HTMLDivElement) {}

  render(): void {
    Array.from(this.container.children).forEach((child) => {
      child.parentElement?.removeChild(child);
    });
  }
}
