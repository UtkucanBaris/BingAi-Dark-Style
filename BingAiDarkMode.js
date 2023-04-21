// # BingAi-Dark-Style
// BingAi Dark Style Js Code
// Author: Utkucan
// Date: 19/04/2023
// This Code Works At this Date
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("cib-background").shadowRoot.querySelector("div:nth-child(1)").remove();
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("cib-background").shadowRoot.querySelector("div:nth-child(1)").remove();
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("cib-background").style.backgroundColor="black";
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-conversation-main").shadowRoot.querySelector("div.scroller > div.fade.top").remove()
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-conversation-main").shadowRoot.querySelector("div.scroller > div.fade.bottom").remove()
var styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(".b_scopebar, .b_scopebar a, .b_scopebar a:visited, .id_button, .id_button:visited {color: white !important;}"));
document.querySelector("head").appendChild(styleElement)
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("cib-serp-feedback").shadowRoot.querySelector("#fbpgbt").setAttribute("style","color: white;background-color:black;border: 1px solid rgb(0, 0, 0);")
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("cib-serp-feedback").shadowRoot.querySelector("#fbpgbt > svg-icon").style.fill = "rgb(145 0 0)"
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("#searchbox").style.color="white";
document.querySelector("#b_sydConvCont > cib-serp").setAttribute("style","--cib-color-neutral-foreground: white;--cib-color-brand-link-foreground: red;--cib-color-brand-primary-background: linear-gradient(90deg, #000000 10.79%, #d90707b8 87.08%);--cib-color-neutral-layer-card: black;--cib-color-brand-gradient-core: linear-gradient(90deg, #000000 10.79%, #810000 87.08%);--cib-color-brand-tertiary-foreground: white;--cib-color-brand-tertiary-background: #7c0000;--cib-color-stealth-primary-foreground: white;--cib-color-brand-text-highlight-background: black;--cib-color-stealth-primary-foreground-hover: red;--cib-color-brand-secondary-stroke: red;--cib-color-brand-secondary-background: black;--cib-color-brand-secondary-foreground: white;--cib-color-brand-secondary-background-solid: black;--cib-color-neutral-input-inverted:black;--cib-color-neutral-layer-overlay: red;");
document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container").setAttribute("style","background:black;outline:1px solid red")
// This code is hosted on Github at https://github.com/UtkucanBaris/BingAi-Dark-Style.
// You can find more information and updates there. If you have any feedback or suggestions, please leave a comment or open an issue.
// Thank you for using this code and have a nice day!
