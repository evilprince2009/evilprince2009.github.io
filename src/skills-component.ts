import { IComponent } from "./IComponents";

export class SkillsComponent implements IComponent {
  constructor(private container: HTMLDivElement) {}

  render(): void {
    const skillsTemplate: HTMLDivElement = document.createElement("div");
    skillsTemplate.classList.add("skills");

    skillsTemplate.innerHTML = `
        <p>I can assist you with</p>
        <ul>
            <li><span style="color: #f5084f;">&starf;</span> Vanilla / ES6 / TypeScript</li>
            <li><span style="color: #f5084f;">&starf;</span> Angular / React</li>
            <li><span style="color: #f5084f;">&starf;</span> Node / Express</li>
            <li><span style="color: #f5084f;">&starf;</span> .NET / C# / Entity Framework</li>
            <li><span style="color: #f5084f;">&starf;</span> MSSQL / MYSQL / MongoDB</li>
            <li><span style="color: #f5084f;">&starf;</span> Git / TFS</li>
            <li><span style="color: #f5084f;">&starf;</span> MSTEST / NUnit / xUnit / Selenium</li>
        </ul>
        <p style="color: #64f105;"><span style="color: #fec304;">&rArr;</span> Available for freelance , remote or contact based oppertunities.</p>
        `;

    this.container.appendChild(skillsTemplate);
  }
}
