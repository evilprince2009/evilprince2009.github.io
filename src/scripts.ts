import { ButtonComponent } from "./button-component.js";
import { SudoRmRfComponent } from "./sudo-rm-rf-component.js";
import { ContactComponent } from "./contact-component.js";
import { SkillsComponent } from "./skills-component.js";
import { AboutComponent } from "./about-component.js";
import { ShellComponent } from "./shell-component.js";
import { ExceptionComponent } from "./exception-component.js";
import { ClearComponent } from "./clear-component.js";
import { IComponent } from "./IComponents.js";
import { HelpComponent } from "./help-component.js";


const terminal: HTMLDivElement = document.querySelector("#terminal") as HTMLDivElement;
const container: HTMLDivElement = document.querySelector("#insert") as HTMLDivElement;
const quit: HTMLElement = document.querySelector("#quit") as HTMLElement;
const footer: HTMLDivElement = document.querySelector(".footer") as HTMLDivElement;
const hide: HTMLElement = document.querySelector("#hide") as HTMLElement;
const mainBody: HTMLDivElement = document.querySelector(".container") as HTMLInputElement;

const shell: ShellComponent = new ShellComponent(container);
window.addEventListener("DOMContentLoaded", (e: Event) => {
   shell.render();
});

const help: IComponent = new HelpComponent(container);
const clear: IComponent = new ClearComponent(container);
const exception: IComponent = new ExceptionComponent(container);
const button: IComponent = new ButtonComponent(mainBody);
const about: IComponent = new AboutComponent(container);
const skills: IComponent = new SkillsComponent(container);
const contact: IComponent = new ContactComponent(container);
const destroy: IComponent = new SudoRmRfComponent(terminal);
const message: HTMLDivElement = document.querySelector(".message") as HTMLDivElement;

container.addEventListener("keyup", (e: KeyboardEvent) => {
    e.preventDefault();
    const eventTarget: HTMLInputElement = e.target as HTMLInputElement;
    if (eventTarget.className === "command" && e.key === "Enter") {
        eventTarget.disabled = true;
        if (eventTarget.value.toString().toLowerCase() === "help") {
            help.render();
            shell.render();
        } else if (eventTarget.value.toString().toLowerCase() === "about") {
            about.render();
            shell.render();
        } else if (eventTarget.value.toString().toLowerCase() === "skills") {
            skills.render();
            shell.render();
        } else if (eventTarget.value.toString().toLowerCase() === "contact") {
            contact.render();
            shell.render();
        } else if (container !== null && eventTarget.value.toString().toLowerCase() === "cls") {
            clear.render();
            shell.render();
        } else if (eventTarget.value.toString().toLowerCase() === "sudo rm -rf") {
            destroy.render();
            setTimeout(() => { window.close(); }, 2000);
        } else if (eventTarget.value.toString().toLowerCase() === "exit") {
            terminal.parentElement?.removeChild(terminal);
            footer.classList.add("footer-on-exit", "vertical-center");
            button.render();
        } else if (eventTarget.value.toString().toLowerCase() === "") {
            shell.render();
        } else {
            exception.render();
            shell.render();
        }
    }
});

quit.addEventListener("click", (e: Event) => {
    e.preventDefault();
    terminal.parentElement?.removeChild(terminal);
    footer.classList.add("footer-on-exit", "vertical-center");
    button.render();
});

let flip: boolean = false;
hide.addEventListener("click", (e: Event) => {
    e.preventDefault();
    flip = !flip;
    if (flip) {
        message.classList.add("flip");
        container.classList.add("flip");
    } else {
        message.classList.remove("flip");
        container.classList.remove("flip");
        shell.shellFocus();
    }
});

mainBody.addEventListener("click", (e: Event) => {
    const targetButton: HTMLParagraphElement = e.target as HTMLParagraphElement;
    if (targetButton.className === "restore-button") {
        targetButton.parentElement?.removeChild(targetButton);
        footer.classList.remove("footer-on-exit", "vertical-center");
        location.reload();
    }
});