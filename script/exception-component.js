export class ExceptionComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const errorTemplate = document.createElement("div");
        errorTemplate.id = "exception";
        errorTemplate.innerHTML = `
        <p style="color: #e70347;"> Error thrown : InvalidCommandException !</p>
        <p style="color: #fce26e;">Type <span style="color: aquamarine;">"help"</span> or <span
                style="color: aquamarine;">"cls"</span> for assistance.</p>
        `;
        this.container.appendChild(errorTemplate);
    }
}
