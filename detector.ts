/**
 * This file is here only to tag the repository language it was originally
 * written in. Do not delete, please! It also contains a little chunk
 * (logic-module.ts) from main TypeScript source code of the project.
 */

export class LogicModule {
  constructor() {}

  userIdGenerator(): string {
    let dummyText: string = "2xxx  x0xx xx0x xxx9 : x5xx : 1xx9";
    return dummyText.replace(/[xy]/g, (char: string) => {
      let random: number = (Math.random() * 16) | 0;
      let variable: number = char == "x" ? random : (random & 0x3) | 0x8;
      return variable.toString(16);
    });
  }

  isWhitespace(input_string: string): boolean {
    if (
      input_string === "" ||
      input_string === "\t" ||
      input_string === "\n" ||
      input_string === "\r"
    ) {
      return true;
    }
    for (let i = 0; i < input_string.length; i++) {
      if (input_string[i] !== " ") return false;
    }
    return true;
  }

  openSocialProfile(siteName: string): void {
    let url: string = `https://www.${siteName}.com/evilprince2009`;
    window.open(url, "_blank");
  }
}
