/**
 * This file is here only to tag the repository language it was originally
 * written in. Ignore this file , this file has nothing to do with this project.
 * But Do not delete this file , please!
 */

export class DetectorModule {
  constructor(private name: string, private id: number) {}

  detectBrowser(): string {
    let ua = navigator.userAgent,
      tem,
      M =
        ua.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return "IE " + (tem[1] || "");
    }
  }

  // function to detect ip address
  detectIPAddress(): string {
    let ip_dups = {};
    let RTCPeerConnection =
      window.RTCPeerConnection;
    
    let mediaConstraints = {
      optional: [{ RtpDataChannels: true }],
    };
    let servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };
    let pc = new RTCPeerConnection(servers);
    let noop = function () {};
    let localIPs = {};
    let ipRegex =
      /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
    let key;
    function iterateIP(ip) {
      if (!ip_dups[ip]) {
        console.log(ip);
        ip_dups[ip] = true;
        localIPs[ip] = true;
      }
    }
    //create a bogus data channel
    pc.createDataChannel("");
    // create offer and set local description
    pc.createOffer(function (sdp) {
      sdp.sdp.split("\n").forEach(function (line) {
        if (line.indexOf("candidate") < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });
      pc.setLocalDescription(sdp, noop, noop);
    });

    return ``;
  }

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

  detectNumber(x: any): boolean {
    return !isNaN(x);
  }

  openSocialProfile(siteName: string): void {
    let url: string = `https://www.${siteName}.com/evilprince2009`;
    window.open(url, "_blank");
  }

  printMessage(msg: string): void {
    console.log(msg);
  }

  detectLanguage(): void {
    const language: string =
      "This file is hete just detect the language this project is written in.";
    const message = "Please do not remove this file.";
    (() => console.log(language))();
    this.printMessage(message);
    (() => console.log(language))();
    this.printMessage(message);
    (() => console.log(language))();
    this.printMessage(message);
    (() => console.log(language))();
    this.printMessage(message);
    (() => console.log(language))();
    this.printMessage(message);
  }
}
