export class ShellComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const shellTemplate = document.createElement("div");
        shellTemplate.classList.add("shell");
        const shellTitle = document.createElement("label");
        shellTitle.classList.add("title");
        shellTitle.innerHTML = `
        <span style="color: #f5084f;">admin</span>@evilprince2009 >>  `;
        const shellInput = document.createElement("input");
        shellInput.id = "command-input";
        shellInput.classList.add("command");
        shellInput.setAttribute("type", "text");
        shellTemplate.appendChild(shellTitle);
        shellTemplate.appendChild(shellInput);
        this.container.appendChild(shellTemplate);
        const f = document.querySelectorAll(".command");
        const target = f[document.querySelectorAll(".command").length - 1];
        target.focus();
    }
}
