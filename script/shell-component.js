export class ShellComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const shellTitle = document.createElement("p");
        shellTitle.id = "title";
        shellTitle.innerHTML = `
        <span style="color: #f5084f;">admin</span>@evilprince2009 >>  `;
        const shellInput = document.createElement("input");
        shellInput.id = "command-input";
        shellInput.classList.add("command");
        shellInput.setAttribute("type", "text");
        this.container.appendChild(shellTitle);
        this.container.appendChild(shellInput);
        const f = document.querySelectorAll(".command");
        const target = f[document.querySelectorAll(".command").length - 1];
        target.focus();
    }
}
