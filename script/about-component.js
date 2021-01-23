export class AboutComponent {
    constructor(container) {
        this.container = container;
    }
    render() {
        const aboutTemplate = document.createElement("div");
        aboutTemplate.classList.add("intro");
        aboutTemplate.innerHTML = `
        <p>Hello,<br>I'm <span style="color: aquamarine;">Ibne Nahian</span>, a code freak , music lover , traveller & obviously a passionate learner. Worst thing about me is <span style="color: #6ef500; font-style:oblique;">'A little stupid Bug can give me Insomnia'</span>. Well, I think that's enough introduction.
        </p>
        `;
        this.container.appendChild(aboutTemplate);
    }
}
