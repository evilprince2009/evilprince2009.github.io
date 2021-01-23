export class ContactComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const contactTemplate = document.createElement("div");
        contactTemplate.classList.add("contact");
        contactTemplate.innerHTML = `
        <p>In case you need me , drop a message via <a href="mailto:evilprince2009@gmail.com">evilprince2009@gmail.com</a>. I assure you to get back to you as soon as I can.<br>Are you social ? Clickable <span style="color:aqua;">links</span> below.</p>

        <ul>
            <li><span style="color: rgb(9, 197, 9);">&rArr;</span> <a href="https://www.linkedin.com/in/evilprince2009/" target="_blank">LinkedIn</a></li>
            <li><span style="color: rgb(9, 197, 9);">&rArr;</span> <a href="https://web.facebook.com/evilprince2009/" target="_blank">Facebook</a></li>
            <li><span style="color: rgb(9, 197, 9);">&rArr;</span> <a href="https://bn.quora.com/profile/%E0%A6%87%E0%A6%AC%E0%A6%A8%E0%A7%87-%E0%A6%A8%E0%A6%BE%E0%A6%B9%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8-Ibne-Nahian" target="_blank">Quora</a></li>
        </ul>

        <p>Don't hesitate to send me a 'Hello World' via any of those !</p>
        `;
        this.container.appendChild(contactTemplate);
    }
}
