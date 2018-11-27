import { interpolate, rand } from "./utils";

export const lightSnow = {
    count: ({ width, height }) => Math.trunc(width * height / 1210),
    init: ({ i, width, height }) => {
        const size = rand(1, 4);

        return {
            x: rand(0, width),
            y: -rand(0, height) - i,
            vx: 0.0,
            bx: 0.3,
            vy: size * 0.5,
            t: rand(-1, 1),
            dt: 0.02,
            size,
            opacity: interpolate(size, 1, 5, 0.3, 0.8)
        };
    }
};

export const blizzard = {
    count: ({ width, height }) => Math.trunc(width * height / 125),
    blur: () => 2,
    haze: () => 0.5,
    init: ({ i, width, height }) => {
        const size = rand(1, 4);

        return {
            x: rand(0, width),
            y: -rand(0, height),
            vx: rand(8, 10),
            bx: 0.3,
            vy: rand(8, 10),
            t: 0,
            dt: 0,
            size,
            opacity: interpolate(size, 1, 5, 0.3, 0.8)
        };
    }
};
