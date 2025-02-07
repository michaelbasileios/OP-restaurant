import "./styles.css"
import { homePageLoad } from "./pageload";
import { menuLoad } from "./menu";

const contentDiv = document.querySelector("#content");
// homePageLoad(contentDiv);
menuLoad(contentDiv);

console.log("test");