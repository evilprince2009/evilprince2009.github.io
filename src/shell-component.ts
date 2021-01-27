import { IComponent } from "./IComponents.js";
export class ShellComponent implements IComponent {
    constructor(private container: HTMLDivElement) {}

    render(): void {
        const shellTemplate: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        shellTemplate.classList.add("shell");

        const shellTitle: HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
        shellTitle.classList.add("title");
        shellTitle.innerHTML = `
        <span style="color: #f5084f;">admin</span>@evilprince2009 >>  `;

        const shellInput: HTMLInputElement = document.createElement("input");
        shellInput.id = "command-input";
        shellInput.classList.add("command");
        shellInput.setAttribute("type", "text");
        shellTemplate.appendChild(shellTitle);
        shellTemplate.appendChild(shellInput);

        this.container.appendChild(shellTemplate);

        this.shellFocus();
    }

    shellFocus(): void {
        const target: NodeListOf<HTMLInputElement> = document.querySelectorAll(".command");
        const lastInput: HTMLInputElement = target[document.querySelectorAll(".command").length -1];
        lastInput.focus();
    }
}