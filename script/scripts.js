import { ButtonComponent } from "./button-component.js";
import { SudoRmRfComponent } from "./sudo-rm-rf-component.js";
import { ContactComponent } from "./contact-component.js";
import { SkillsComponent } from "./skills-component.js";
import { AboutComponent } from "./about-component.js";
import { ShellComponent } from "./shell-component.js";
import { ExceptionComponent } from "./exception-component.js";
import { ClearComponent } from "./clear-component.js";
import { HelpComponent } from "./help-component.js";
const terminal = document.querySelector("#terminal");
const container = document.querySelector("#insert");
const quit = document.querySelector("#quit");
const footer = document.querySelector(".footer");
const hide = document.querySelector("#hide");
const mainBody = document.querySelector(".container");
const maximizeBox = document.querySelector(".maximize-terminal");
const shell = new ShellComponent(container);
window.addEventListener("DOMContentLoaded", (e) => {
    maximizeBox.classList.add("flip");
    shell.render();
});
const help = new HelpComponent(container);
const clear = new ClearComponent(container);
const exception = new ExceptionComponent(container);
const button = new ButtonComponent(mainBody);
const about = new AboutComponent(container);
const skills = new SkillsComponent(container);
const contact = new ContactComponent(container);
const destroy = new SudoRmRfComponent(terminal);
const message = document.querySelector(".message");
container.addEventListener("keyup", (e) => {
    var _a;
    e.preventDefault();
    const eventTarget = e.target;
    if (eventTarget.className === "command" && e.key === "Enter") {
        eventTarget.disabled = true;
        if (eventTarget.value.toString().toLowerCase() === "help") {
            help.render();
            shell.render();
        }
        else if (eventTarget.value.toString().toLowerCase() === "about") {
            about.render();
            shell.render();
        }
        else if (eventTarget.value.toString().toLowerCase() === "skills") {
            skills.render();
            shell.render();
        }
        else if (eventTarget.value.toString().toLowerCase() === "contact") {
            contact.render();
            shell.render();
        }
        else if (container !== null && eventTarget.value.toString().toLowerCase() === "cls") {
            clear.render();
            shell.render();
        }
        else if (eventTarget.value.toString().toLowerCase() === "sudo rm -rf") {
            destroy.render();
            setTimeout(() => { window.close(); }, 2000);
        }
        else if (eventTarget.value.toString().toLowerCase() === "exit") {
            (_a = terminal.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(terminal);
            footer.classList.add("footer-on-exit", "vertical-center");
            button.render();
        }
        else if (eventTarget.value.toString().toLowerCase() === "") {
            shell.render();
        }
        else {
            exception.render();
            shell.render();
        }
    }
});
quit.addEventListener("click", (e) => {
    var _a;
    e.preventDefault();
    (_a = terminal.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(terminal);
    footer.classList.add("footer-on-exit", "vertical-center");
    button.render();
});
hide.addEventListener("click", (e) => {
    e.preventDefault();
    terminal.classList.add("flip");
    maximizeBox.classList.remove("flip");
});
maximizeBox.addEventListener("click", (e) => {
    maximizeBox.classList.add("flip");
    terminal.classList.remove("flip");
    shell.shellFocus();
});
mainBody.addEventListener("click", (e) => {
    var _a;
    const targetButton = e.target;
    if (targetButton.className === "restore-button") {
        (_a = targetButton.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(targetButton);
        footer.classList.remove("footer-on-exit", "vertical-center");
        location.reload();
    }
});
