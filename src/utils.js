export const rand = (min, max) =>
    Math.random() * (max - min) + min;

export const interpolate = (val, inMin, inMax, outMin, outMax) =>
    (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
