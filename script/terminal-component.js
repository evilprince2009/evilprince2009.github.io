export class TerminalComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const terminalTemplate = document.createElement("div");
        terminalTemplate.id = "terminal";
        const controls = document.createElement("div");
        controls.classList.add("controls");
        controls.innerHTML = `<ul>
        <li id="hide" style="color: #db7638;">&CircleMinus;</li>
        <li id="quit" style="color: #b9033a;">&CircleTimes;</li></ul>`;
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = `<p>Welcome to ShellFolio v1992.05 !<br>Type <span style="font-weight: 300; color: aquamarine;">"help"</span> to see available commands.<br><span style="font-weight: 300; color: #fce26e;">All Commands are case insensitive.</span></p>`;
        const dynamicContent = document.createElement("div");
        dynamicContent.id = "insert";
        dynamicContent.classList.add("dynamic-content");
        terminalTemplate.appendChild(controls);
        terminalTemplate.appendChild(message);
        terminalTemplate.appendChild(dynamicContent);
        this.container.appendChild(terminalTemplate);
    }
}
