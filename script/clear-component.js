export class ClearComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        Array.from(this.container.children).forEach(child => {
            var _a;
            (_a = child.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(child);
        });
    }
}
