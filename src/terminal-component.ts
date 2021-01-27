import { ShellComponent } from "./shell-component.js";
import { IComponent } from "./IComponents.js";

export class TerminalComponent implements IComponent {
    constructor(private container: HTMLDivElement) {}

    render(): void {
        const terminalTemplate: HTMLDivElement = document.createElement("div");
        terminalTemplate.id = "terminal";

        const controls: HTMLDivElement = document.createElement("div");
        controls.classList.add("controls");
        controls.innerHTML = `<ul>
        <li id="hide" style="color: #db7638;">&CircleMinus;</li>
        <li id="quit" style="color: #b9033a;">&CircleTimes;</li></ul>`;

        const message: HTMLDivElement = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = `<p>Welcome to ShellFolio v1992.05 !<br>Type <span style="font-weight: 300; color: aquamarine;">"help"</span> to see available commands.<br><span style="font-weight: 300; color: #fce26e;">All Commands are case insensitive.</span></p>`;

        const dynamicContent: HTMLDivElement = document.createElement("div");
        dynamicContent.id = "insert";
        dynamicContent.classList.add("dynamic-content");
        terminalTemplate.appendChild(controls);
        terminalTemplate.appendChild(message);
        terminalTemplate.appendChild(dynamicContent);
        this.container.appendChild(terminalTemplate);
    }
}