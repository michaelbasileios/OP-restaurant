import "./styles.css"
import { homePageLoad } from "./pageload";
import { menuLoad } from "./menu";
import { aboutPageLoad } from "./about";

const navButtons = document.querySelectorAll("button");

navButtons.forEach(button => {
    button.addEventListener("click", () => pageLoadFunc(button));
})

function pageLoadFunc(btn) {
    if (btn === navButtons[0]) {
        contentDivCheck();
        homePageLoad();
    } else
    if (btn === navButtons[1]) {
        contentDivCheck();
        menuLoad();
    } else 
    if (btn === navButtons[2]) {
        contentDivCheck();
        aboutPageLoad();
    }
};

function contentDivCheck() {
    const contentDiv = document.querySelector("#content");
    const divContent = document.querySelector(".divContent");
    const footer = document.querySelector("footer");
    const footerText = document.querySelector(".footerText");

    if(divContent && footerText) {
        contentDiv.removeChild(divContent);
        footer.removeChild(footerText);
    } else if(divContent) {
        contentDiv.removeChild(divContent);
    }
}

homePageLoad();

console.log("test");