export class HelpComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const helpTemplate = document.createElement("div");
        helpTemplate.id = "help";
        const firstPara = document.createElement("p");
        firstPara.innerHTML = `
        <span style="color: rgb(9, 197, 9);">&rArr;</span> Available commands listed below. Type <span
                            style="font-weight: 300; color: aquamarine;">"cls"</span> to clear & <span
                            style="font-weight: 300; color: aquamarine;">"exit"</span> to close terminal.
        `;
        const list = document.createElement("ul");
        list.innerHTML = `
        <li><span style = "color: #fce26e;">&GreaterGreater;</span> About</li>
        <li><span style = "color: #fce26e;">&GreaterGreater;</span> Skills</li>
        <li><span style = "color: #fce26e;">&GreaterGreater;</span> Contact</li>
        `;
        const secondPara = document.createElement("p");
        secondPara.innerHTML = `
        <span style="color: #af0437;">&CircleTimes;</span> Never do a <span
                            style="font-weight: 300; color: #cf0240;">"sudo rm -rf"</span> , cause it will mess our
                        entire internal system !
        `;
        helpTemplate.appendChild(firstPara);
        helpTemplate.appendChild(list);
        helpTemplate.appendChild(secondPara);
        this.container.appendChild(helpTemplate);
    }
}
