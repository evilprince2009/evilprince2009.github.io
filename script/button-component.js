export class ButtonComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const buttonTemplate = document.createElement("div");
        buttonTemplate.classList.add("btn");
        buttonTemplate.innerHTML = `<button>Launch Terminal &rAarr;</button>`;
        this.container.appendChild(buttonTemplate);
    }
}
