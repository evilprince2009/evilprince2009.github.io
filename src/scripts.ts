import { AboutComponent } from "./about-component";
import { ButtonComponent } from "./button-component";
import { ClearComponent } from "./clear-component";
import { ContactComponent } from "./contact-component";
import { ExceptionComponent } from "./exception-component";
import { HelpComponent } from "./help-component";
import { IComponent } from "./IComponents";
import { ShellComponent } from "./shell-component";
import { SkillsComponent } from "./skills-component";
import { SudoRmRfComponent } from "./sudo-rm-rf-component";

const terminal: HTMLDivElement = document.querySelector(
  "#terminal"
) as HTMLDivElement;
const container: HTMLDivElement = document.querySelector(
  "#insert"
) as HTMLDivElement;
const quit: HTMLElement = document.querySelector("#quit") as HTMLElement;
const footer: HTMLDivElement = document.querySelector(
  ".footer"
) as HTMLDivElement;
const hide: HTMLElement = document.querySelector("#hide") as HTMLElement;
const mainBody: HTMLDivElement = document.querySelector(
  ".container"
) as HTMLInputElement;
const maximizeBox: HTMLDivElement = document.querySelector(
  ".maximize-terminal"
) as HTMLDivElement;

const shell: ShellComponent = new ShellComponent(container);
const help: IComponent = new HelpComponent(container);
const clear: IComponent = new ClearComponent(container);
const exception: IComponent = new ExceptionComponent(container);
const button: IComponent = new ButtonComponent(mainBody);
const about: IComponent = new AboutComponent(container);
const skills: IComponent = new SkillsComponent(container);
const contact: IComponent = new ContactComponent(container);
const destroy: IComponent = new SudoRmRfComponent(terminal);

window.addEventListener("DOMContentLoaded", (e: Event) => {
  maximizeBox.classList.add("flip");
  shell.render();
});

container.addEventListener("keyup", (e: KeyboardEvent) => {
  e.preventDefault();
  const eventTarget: HTMLInputElement = e.target as HTMLInputElement;
  if (eventTarget.className === "command" && e.key === "Enter") {
    eventTarget.disabled = true;

    const input_value: string = eventTarget.value.toString().toLowerCase();

    if (input_value === "help") {
      help.render();
      shell.render();
    } else if (input_value === "about") {
      about.render();
      shell.render();
    } else if (input_value === "skills") {
      skills.render();
      shell.render();
    } else if (input_value === "contact") {
      contact.render();
      shell.render();
    } else if (container !== null && input_value === "cls") {
      clear.render();
      shell.render();
    } else if (input_value === "sudo rm -rf") {
      destroy.render();
      setTimeout(() => {
        window.close();
      }, 2000);
    } else if (input_value === "exit") {
      terminal.parentElement?.removeChild(terminal);
      footer.classList.add("footer-on-exit", "vertical-center");
      button.render();
    } else if (input_value === "" || whitespace_checker(input_value)) {
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

hide.addEventListener("click", (e: Event) => {
  e.preventDefault();
  terminal.classList.add("flip");
  maximizeBox.classList.remove("flip");
});

maximizeBox.addEventListener("click", (e: Event) => {
  maximizeBox.classList.add("flip");
  terminal.classList.remove("flip");
  shell.shellFocus();
});

mainBody.addEventListener("click", (e: Event) => {
  const targetButton: HTMLParagraphElement = e.target as HTMLParagraphElement;
  if (targetButton.className === "restore-button") {
    targetButton.parentElement?.removeChild(targetButton);
    footer.classList.remove("footer-on-exit", "vertical-center");
    location.reload();
  }
});

let whitespace_checker: (input: string) => boolean = (input_string: string) => {
  for (let i = 0; i < input_string.length; i++) {
    if (input_string[i] != " ") {
      return false;
    }
  }
  return true;
};
