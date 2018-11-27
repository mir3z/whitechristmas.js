import { main } from "./main";

const overlay = document.querySelector("#app");
const urlParams = new URLSearchParams(window.location.search);
const options = {
    type: urlParams.get("type"),
    site: urlParams.get("site"),
    img: urlParams.get("img"),
    music: urlParams.get("music"),
};

main(overlay, options);
