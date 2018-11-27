import { letItSnow } from "./letItSnow";
import * as strategy from "./strategy";

export function main(el, options) {
    const { type, site, img, music } = options;
    const iframe = el.querySelector("iframe");
    const playback = el.querySelector("#playback");
    const activeStrategy = strategiesMap[type] || strategy.lightSnow;

    if (img) {
        iframe.src = "image.html?src=" + img;
    } else if (site) {
        iframe.src = site || "";
    }

    if (music) {
        playback.src = "playback.html?src=" + playbackMap[music];
    }

    letItSnow(activeStrategy, el);
}

const strategiesMap = {
    "blizzard": strategy.blizzard,
    "fluff": strategy.lightSnow
};

const playbackMap = {
    0: "LastChristmas.mp3",
    1: "WhiteChristmas.mp3",
};
