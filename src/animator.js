export function animator(onStep) {
    let last = 0;
    let dt = 0;

    const next = () => window.requestAnimationFrame(loop);

    const loop = (t) => {
        dt = t - last;
        last = t;

        onStep(dt, t);

        next();
    };

    return {
        start: next
    };
}
