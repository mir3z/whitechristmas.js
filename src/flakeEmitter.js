export function flakeEmitter(strategy, options = {}) {
    const { width, height } = options;
    const count = strategy.count(options);
    const flakes = [];

    for (let i = 0; i < count; i++) {
        flakes.push(strategy.init({ i, ...options }));
    }

    const update = (callback) => {
        flakes.forEach(f => {
            f.y += f.vy;
            f.x += f.vx + Math.sin(f.t) * f.bx;
            f.t += f.dt;

            callback(f);

            if (f.y > height) {
                f.y = -f.vy;
                f.t = rand(-1, 1);
            } else if (f.x < 0) {
                f.x = width + f.x;
            } else if (f.x > width) {
                f.x = f.x - width;
            }
        });
    };

    return {
        update
    };
}

const rand = (min, max) =>
    Math.random() * (max - min) + min;
