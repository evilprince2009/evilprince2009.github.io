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
const shell = new ShellComponent(container);
// input focus on page load
window.addEventListener("DOMContentLoaded", (e) => {
    shell.render();
});
const help = new HelpComponent(container);
const clear = new ClearComponent(container);
const exception = new ExceptionComponent(container);
const about = new AboutComponent(container);
const skills = new SkillsComponent(container);
const contact = new ContactComponent(container);
const destroy = new SudoRmRfComponent(terminal);
const message = document.querySelector(".message");
container.addEventListener("keyup", (e) => {
    var _a;
    e.preventDefault();
    if (e.target.className === "command" && e.key === "Enter") {
        if (e.key === "Enter") {
            if (e.target.value.toString().toLowerCase() === "help") {
                help.render();
                shell.render();
            }
            else if (e.target.value.toString().toLowerCase() === "about") {
                about.render();
                shell.render();
            }
            else if (e.target.value.toString().toLowerCase() === "skills") {
                skills.render();
                shell.render();
            }
            else if (e.target.value.toString().toLowerCase() === "contact") {
                contact.render();
                shell.render();
            }
            else if (container !== null && e.target.value.toString().toLowerCase() === "cls") {
                clear.render();
                shell.render();
            }
            else if (e.target.value.toString().toLowerCase() === "sudo rm -rf") {
                destroy.render();
                setTimeout(() => { window.close(); }, 2000);
            }
            else if (e.target.value.toString().toLowerCase() === "exit") {
                (_a = terminal.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(terminal);
                footer.classList.add("footer-on-exit", "vertical-center");
            }
            else if (e.target.value.toString().toLowerCase() === "") {
                shell.render();
            }
            else {
                exception.render();
                shell.render();
            }
        }
    }
});
quit.addEventListener("click", (e) => {
    var _a;
    e.preventDefault();
    (_a = terminal.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(terminal);
    footer.classList.add("footer-on-exit", "vertical-center");
});
let flip = false;
hide.addEventListener("click", (e) => {
    flip = !flip;
    const blink = container.querySelector("input:last-child");
    if (flip) {
        message.classList.add("flip");
        container.classList.add("flip");
    }
    else {
        message.classList.remove("flip");
        container.classList.remove("flip");
        blink.focus();
    }
});
