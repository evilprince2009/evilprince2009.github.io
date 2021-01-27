export class ButtonComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const buttonTemplate = document.createElement("p");
        buttonTemplate.classList.add("restore-button");
        buttonTemplate.innerHTML = `Back to Terminal &DoubleLongRightArrow;`;
        this.container.appendChild(buttonTemplate);
    }
}
