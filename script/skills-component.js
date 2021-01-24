export class SkillsComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const skillsTemplate = document.createElement("div");
        skillsTemplate.classList.add("skills");
        skillsTemplate.innerHTML = `
        <p>I can assist you with</p>
        <ul>
            <li><span style="color: #f5084f;">&starf;</span> Vanilla / ES6 / TypeScript</li>
            <li><span style="color: #f5084f;">&starf;</span> Angular / React</li>
            <li><span style="color: #f5084f;">&starf;</span> Node</li>
            <li><span style="color: #f5084f;">&starf;</span> .NET / C# / Entity Framework</li>
            <li><span style="color: #f5084f;">&starf;</span> MSSQL / MYSQL</li>
            <li><span style="color: #f5084f;">&starf;</span> Git / TFS</li>
            <li><span style="color: #f5084f;">&starf;</span> MSTEST / NUnit / xUnit / Selenium</li>
        </ul>
        <p style="color: #64f105;"><span style="color: #fec304;">&rArr;</span> Available for freelance , remote or contact based oppertunities.</p>
        `;
        this.container.appendChild(skillsTemplate);
    }
}
