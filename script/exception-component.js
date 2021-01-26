export class ExceptionComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const errorTemplate = document.createElement("div");
        errorTemplate.id = "exception";
        errorTemplate.innerHTML = `<p><span style="color: #e70347;"> Error thrown : InvalidCommandException !</span>
        <br>
            <span style="color: #fce26e;">Type <span style="color: aquamarine;">"help"</span> or <span
                    style="color: aquamarine;">"cls"</span> for assistance.</span></p>`;
        this.container.appendChild(errorTemplate);
    }
}
