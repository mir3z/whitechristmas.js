import { flakeEmitter } from "./flakeEmitter";
import { animator } from "./animator";

export function letItSnow(strategy, el) {
    const iframe = el.querySelector("iframe");
    const overlay = appendOverlay(el);
    const { canvas, ctx } = appendCanvas(el);

    const emitter = flakeEmitter(
        strategy,
        {
            width: canvas.width,
            height: canvas.height
        }
    );

    const loop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        emitter.update(f => {
            // ctx.fillStyle = `rgba(125, 220, 255, ${ f.opacity })`;
            ctx.fillStyle = `rgba(187, 227, 255, ${ f.opacity })`;
            ctx.fillRect(f.x, f.y, f.size, f.size);
        });
    };

    if (strategy.blur) {
        iframe.style.filter = `blur(${ strategy.blur() }px)`;
    }

    if (strategy.haze) {
        overlay.style.background = `rgba(255, 255, 255, ${ strategy.haze() })`;
    }

    animator(loop).start();
}

function appendCanvas(el) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    el.appendChild(canvas);

    return { ctx, canvas };
}

function appendOverlay(el) {
    const div = document.createElement("div");

    div.style.pointerEvents = "none";
    div.style.position = "absolute";
    div.style.left = "0";
    div.style.top = "0";
    div.style.right = "0";
    div.style.bottom = "0";

    el.appendChild(div);

    return div;
}
