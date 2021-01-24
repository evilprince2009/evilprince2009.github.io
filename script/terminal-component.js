export class TerminalComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const terminalTemplate = document.createElement("div");
        terminalTemplate.id = "terminal";
        const control = document.createElement("div");
        control.classList.add("controls");
        control.innerHTML = `<ul>
        <li id="hide" style="color: #db7638;">&CircleMinus;</li>
        <li id="quit" style="color: #b9033a;">&CircleTimes;</li>
    </ul>`;
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = `
        <p>Welcome to ShellFolio v1992.05 !</p>
        <p>
            Type <span style="font-weight: 300; color: aquamarine;">"help"</span> to see available commands.
        </p>
        <p style="font-weight: 300; color: #fce26e;">
            All Commands are case insensitive.
        </p>`;
        const content = document.createElement("div");
        content.id = "insert";
        content.classList.add("dynamic-content", "shell");
        terminalTemplate.appendChild(control);
        terminalTemplate.appendChild(message);
        terminalTemplate.appendChild(content);
        this.container.appendChild(terminalTemplate);
    }
}
