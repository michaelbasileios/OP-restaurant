import "./styles.css"
import { homePageLoad } from "./pageload";
import { menuLoad } from "./menu";
import { aboutPageLoad } from "./about";

const contentDiv = document.querySelector("#content");
const navButtons = document.querySelectorAll("button");

navButtons.forEach(button => {
    button.addEventListener("click", () => pageLoadFunc(button));
})

function pageLoadFunc(btn) {
    if (btn === navButtons[0]) {
       return homePageLoad(contentDiv);
    } else
    if (btn === navButtons[1]) {
        return menuLoad(contentDiv);
    } else 
    if (btn === navButtons[2]) {
        return aboutPageLoad(contentDiv);
    }
};

homePageLoad(contentDiv);

console.log("test");