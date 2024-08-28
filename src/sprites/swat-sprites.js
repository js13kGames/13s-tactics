import { Point } from "../entities/Point";
import { CharacterType } from "../enum/character-type";
import { DirectionType } from "../enum/direction-type";

// change to be text based
export const PlayerSwatColors = {
    "wl": "#9bf2fa",
    "wc": "#3c4f68",
    "wd": "#10495e",

    "vl": "#10495e",
    "vc": "#1b1116",
    "vd": "#100f0f",

    "cl": "#3e3846",
    "cm": "#38252e",
    "cc": "#2f1519",
    "cd": "#1b1116",
};

export const EnemySwatColors = {
    "wl": "#fa9b9b",
    "wc": "#693d3d",
    "wd": "#5e1010",

    "vl": "#a80000",
    "vc": "#2f1519",
    "vd": "#100f0f",

    "cl": "#703a33",
    "cm": "#641f14",
    "cc": "#431313",
    "cd": "#1b1116",
};

// SHIELD CHARACTER
export const ShieldSwatTop = [
    [null, null, "wl", "wl", "wl", "wl", "wl", "wl", "wl", null, null, null, null, null],
    [null, "wl", "wc", "wc", "wc", "wc", "wc", "wc", "wc", "wl", "wl", null, null, null],
    [null, "wl", "wc", "wd", "wd", "wd", "wd", "wd", "wc", "wc", "wc", "wl", null, null],
    [null, "wl", "wc", "wd", "wl", "wl", "wl", "wd", "wd", "wd", "wc", "wc", "wl", null],
    [null, "wl", "wc", "wd", "wl", "wl", "wl", "wl", "wl", "wd", "wd", "wc", "wc", "wl"],
    [null, "wl", "cm", "cm", "cm", "cm", "wl", "wl", "wl", "wl", "wd", "wd", "wc", "wl"],
    [null, "cm", "cc", "cc", "cc", "cc", "cd", "wd", "wl", "wl", "wl", "wd", "wc", "wl"],
    [null, "cm", "cc", "cc", "cc", "cc", "cd", "wd", "wd", "wl", "wl", "wd", "wc", "wl"],
    ["cl", "cm", "cc", "cc", "cc", "cd", "#e7c688", "wd", "cl", "cl", "wd", "wd", "wc", "wl"],
    ["cm", "vl", "cd", "cd", "cd", "#e7c688", "#e7c688", "wd", "cl", "cm", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vl", "vl", "vl", "vc", "vc", "cl", "cm", "cm", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vc", "vc", "vc", "vc", "cl", "cm", "cm", "cc", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vc", "vc", "vc", "vc", "cm", "cm", "cc", "cc", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vc", "vc", "vc", "vc", "cc", "cc", "cc", "#000000", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vc", "vc", "vc", "vc", "vc", "vc", "#000000", "wd", "wd", "wd", "wc", "wl"],
    ["vl", "vc", "vc", "vc", "vc", "vc", "vc", "cm", "wd", "wd", "wd", "wd", "wc", "wl"],
    ["#000000", "vd", "vc", "vc", "vc", "vc", "cc", "cm", "#000000", "#000000", "wd", "wd", "wd", "#000000"],
    [null, "#000000", "vd", "cm", "cm", "cc", "cc", "cm", null, null, "#000000", "wd", "#000000", null],
    [null, null, "#000000", "cm", "cc", "cc", "cc", "cm", null, null, null, "#000000", null, null],
    [null, null, null, "cm", "cc", "cc", "cd", "#000000", null, null, null, null, null, null],
    [null, null, "#100f0f", "#100f0f", "cd", "cd", "#000000", null, null, null, null, null, null, null],
    [null, null, "#100f0f", "#100f0f", "#100f0f", "#000000", null, null, null, null, null, null, null, null],
    [null, null, "#100f0f", "#000000", "#000000", null, null, null, null, null, null, null, null, null],
    [null, null, "#000000", null, null, null, null, null, null, null, null, null, null, null],
];
export const ShieldSwatBottom = [
    [null, null, null, null, null, null, null, null, null, null, null, null, "wl", null, null],
    [null, null, null, null, null, "cm", "cm", "cm", "cm", null, null, null, "wc", "wl", null],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, "wc", "wl", "wl"],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, "wl", "wc", "wl"],
    [null, null, null, "vl", "cm", "cc", "cd", "cd", "cd", "cd", null, "wl", "wc", "wc", "wl"],
    [null, null, "vl", "vc", "cm", "cd", "#e7c688", "#e7c688", "#e7c688", "vc", "wl", "wc", "wd", "wd", "wl"],
    [null, null, "vl", "vc", "vd", "cd", "#e7c688", "#e7c688", "wl", "wl", "wc", "wd", "wd", "wl", "wl"],
    [null, "vl", "vc", "vl", "wl", "wl", "wl", "wl", "wc", "wc", "wd", "wd", "wl", "wl", "wl"],
    [null, "vl", "vc", "vc", "wl", "wc", "wc", "wc", "wd", "wd", "wd", "wl", "wl", "wl", "wl"],
    [null, "vl", "vc", "cl", "wl", "wd", "wd", "wd", "wd", "wl", "wl", "wl", "wl", "wd", "wl"],
    [null, "vl", "vc", "cl", "wl", "wd", "wd", "wl", "wl", "wl", "wl", "wl", "wd", "wd", "wl"],
    [null, "#100f0f", "vd", "cl", "wl", "wd", "wd", "wl", "wl", "wl", "wd", "wd", "wd", "wd", "wl"],
    ["#100f0f", "#100f0f", "#100f0f", "vd", "wl", "wd", "wd", "wd", "wd", "wd", "wd", "wc", "wc", "wd", "wl"],
    ["#100f0f", "#000000", "cm", "cm", "wl", "wd", "wc", "wc", "wc", "wc", "wc", "wc", "wc", "wd", "wl"],
    ["#000000", null, "cd", "cm", "wl", "wd", "wc", "wc", "wc", "wc", "wc", "wc", "wc", "wd", "wl"],
    [null, null, "#000000", "cd", "wl", "wd", "wc", "wc", "wc", "wc", "wc", "wc", "wc", "wd", "#000000"],
    [null, null, null, "#000000", "wl", "wd", "wc", "wc", "wc", "wc", "wc", "wc", "wd", "wd", null],
    [null, null, null, null, "wl", "wd", "wc", "wc", "wc", "wc", "wc", "wd", "wd", "#000000", null],
    [null, null, null, null, "wl", "wd", "wc", "wc", "wc", "wd", "wd", "wd", "#000000", null, null],
    [null, null, null, null, "#000000", "wd", "wd", "wd", "wd", "wd", "#000000", "#000000", null, null, null],
    [null, null, null, null, null, "#000000", "#000000", "#000000", "#000000", "#000000", null, null, null, null, null],
];

// RANGE CHARACTER
export const RangeSwatTop = [
    [null, null, "cm", "cm", "cm", "cm", null, null, null, null, null, null, null],
    [null, "cm", "cc", "cc", "cc", "cc", "cd", null, null, null, null, "wl", null],
    [null, "cm", "cc", "cc", "cc", "cc", "cd", null, null, null, "wl", "wd", "wl"],
    [null, "cm", "cc", "cc", "cc", "cd", "#e7c688", "cl", "wl", "wl", "wd", "wd", "#000000"],
    [null, "vl", "cd", "cd", "cd", "#e7c688", "#e7c688", "wl", "wd", "wd", "wd", "cm", null],
    ["vl", "vc", "vl", "vl", "vl", "vc", "wl", "wd", "wd", "cl", "wd", "cc", null],
    ["vl", "vc", "vc", "vc", "wl", "wl", "wd", "wd", "cl", "cm", "wd", "#000000", null],
    ["vl", "vc", "vc", "vc", "#000000", "cl", "cl", "cl", "cm", "cc", "#000000", null, null],
    ["vl", "vc", "vc", "vc", "cl", "cm", "cm", "cm", "cc", "cc", null, null, null],
    ["vl", "vc", "vc", "vc", "cl", "cm", "cm", "cc", "cc", "#000000", null, null, null],
    ["vl", "vc", "vc", "vc", "vc", "cc", "cc", "cc", "#000000", null, null, null, null],
    ["#000000", "vd", "vc", "vc", "vc", "vd", "vd", "#000000", null, null, null, null, null],
    [null, "#000000", "vd", "cm", "cm", "cc", "cc", "cm", null, null, null, null, null],
    [null, null, "#000000", "cm", "cc", "cc", "cc", "cm", null, null, null, null, null],
    [null, null, null, "cm", "cc", "cc", "cd", "#000000", null, null, null, null, null],
    [null, null, "#100f0f", "#100f0f", "cd", "cd", "#000000", null, null, null, null, null, null],
    [null, null, "#100f0f", "#100f0f", "#100f0f", "#000000", null, null, null, null, null, null, null],
    [null, null, "#100f0f", "#000000", "#000000", null, null, null, null, null, null, null, null],
    [null, null, "#000000", null, null, null, null, null, null, null, null, null, null],
];
export const RangeSwatBottom = [
    [null, null, null, null, null, "cm", "cm", "cm", "cm", null, null, null, null, null],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, "vl", "cm", "cc", "cd", "cd", "cd", "cd", null, null, null, null],
    [null, null, "vl", "vc", "cm", "cd", "#e7c688", "#e7c688", "#e7c688", "cd", null, null, null, null],
    [null, null, "vl", "vc", "vd", "cd", "#e7c688", "#e7c688", "#e7c688", "cd", null, null, null, null],
    [null, "vl", "vc", "vl", "vl", "wl", "wl", "cd", "cd", "cl", null, null, null, null],
    [null, "vl", "vc", "vc", "wl", "wd", "wd", "wl", "cc", "cm", "cl", null, null, null],
    [null, "vl", "vc", "cl", "cl", "wd", "wd", "wd", "wl", "cm", "cl", null, null, null],
    [null, "vl", "vc", "cl", "cm", "cl", "wd", "wd", "wd", "wl", "wl", "cl", null, null],
    [null, "#000000", "#000000", "cl", "cm", "cm", "cl", "cl", "wd", "wd", "wd", "wl", null, null],
    ["#100f0f", "#100f0f", "#100f0f", "#000000", "cc", "cc", "cc", "cm", "cl", "wd", "wd", "wd", "wl", null],
    ["#100f0f", "#000000", "cm", "cm", "#000000", "#000000", "#000000", "#000000", "#000000", "wd", "cm", "wd", "wd", "wl"],
    ["#000000", null, "cd", "cm", "cc", "cc", "cd", "#100f0f", "#100f0f", "#000000", "cc", "cc", "wd", "#000000"],
    [null, null, "#000000", "cd", "cc", "cc", "cd", "#000000", "#100f0f", "#100f0f", "#100f0f", "#000000", "#000000", "#000000"],
    [null, null, null, "#000000", "cd", "cd", "#000000", null, "#000000", "#000000", "#000000", null, null, null],
    [null, null, null, null, "#000000", "#000000", "#000000", null, null, null, null, null, null, null],
];

// MELEE CHARACTER
export const MeleeSwatTop = [
    [null, null, null, null, null, null, null, null, null, null, null, null, "wl", "wl", null],
    [null, null, null, null, null, "cm", "cm", "cm", "cm", null, null, null, "wd", "wc", "wl"],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cd", null, null, "wd", "wc", "wl"],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cd", null, null, "wd", "wc", "wl"],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cd", "#e7c688", null, null, "#000000", "wd", "wl"],
    [null, null, null, null, "vl", "cd", "cd", "cd", "#e7c688", "#e7c688", null, null, null, "wd", "wl"],
    [null, null, "cl", "vl", "vc", "vl", "vl", "vl", "vc", "vc", null, null, null, "wd", "wl"],
    [null, "cl", "cm", "vl", "vc", "vc", "vc", "vc", "vc", "cl", "cl", null, null, "cl", "cl"],
    ["cl", "cm", "cc", "vl", "vc", "vc", "vc", "vc", "cl", "cm", "cm", "cl", "cl", "cm", "cc"],
    ["cl", "cc", "cc", "vl", "vc", "vc", "vc", "vc", "cl", "cm", "cm", "cm", "cm", "cc", "#000000"],
    ["cc", "cc", "#000000", "vl", "vc", "vc", "vc", "vc", "vc", "cc", "cc", "cc", "cc", "#000000", null],
    ["#000000", "#000000", null, "vl", "vc", "vc", "vc", "vc", "vc", "vd", "vd", "#000000", "#000000", null, null],
    [null, null, null, "#000000", "vd", "vc", "vc", "vc", "vc", "cc", "cm", null, null, null, null],
    [null, null, null, null, "#000000", "vd", "cm", "cm", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, null, null, "#000000", "cm", "cc", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, null, null, null, "cm", "cc", "cc", "cd", "#000000", null, null, null, null],
    [null, null, null, null, null, "#100f0f", "#100f0f", "cd", "cd", "#000000", null, null, null, null, null],
    [null, null, null, null, null, "#100f0f", "#100f0f", "#100f0f", "#000000", null, null, null, null, null, null],
    [null, null, null, null, null, "#100f0f", "#000000", "#000000", null, null, null, null, null, null, null],
    [null, null, null, null, null, "#000000", null, null, null, null, null, null, null, null, null],
];
export const MeleeSwatBottom = [
    [null, null, null, null, null, "cm", "cm", "cm", "cm", null, null, null, null, null],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, null, "cm", "cc", "cc", "cc", "cc", "cm", null, null, null, null],
    [null, null, null, "vl", "cm", "cc", "cd", "cd", "cd", "cd", null, null, null, null],
    [null, null, "vl", "vc", "cm", "cd", "#e7c688", "#e7c688", "#e7c688", "cd", null, null, null, null],
    [null, null, "vl", "vc", "vd", "cd", "#e7c688", "#e7c688", "#e7c688", "wl", "wl", null, null, null],
    [null, "vl", "vc", "vl", "vl", "cd", "cd", "cd", "wl", "wc", "wd", null, null, null],
    [null, "vl", "vc", "vc", "vc", "vl", "vl", "vl", "wl", "wc", "wd", null, null, null],
    [null, "vl", "vc", "cl", "cl", "vc", "vc", "wl", "wc", "wd", "#000000", null, null, null],
    [null, "vl", "cl", "cm", "cm", "cl", "vc", "wl", "wc", "wd", "cc", "cl", null, null],
    [null, "#000000", "cl", "cm", "cm", "cl", "wl", "wc", "wd", "#000000", "cc", "cl", null, null],
    ["#100f0f", "#100f0f", "cl", "cm", "cm", "cm", "cc", "cm", "#000000", "cd", "cc", "cl", null, null],
    ["#100f0f", "#000000", "#000000", "cc", "cc", "cc", "cc", "#000000", "#000000", "cd", "cc", "#000000", null, null],
    ["#000000", null, "cd", "#000000", "#000000", "#000000", "#000000", "#100f0f", "#100f0f", "cd", "#000000", null, null, null],
    [null, null, "#000000", "cd", "cc", "cc", "cd", "#000000", "#100f0f", "#100f0f", "#100f0f", null, null, null],
    [null, null, null, "#000000", "cd", "cd", "#000000", null, "#000000", "#000000", "#000000", null, null, null],
    [null, null, null, null, "#000000", "#000000", "#000000", null, null, null, null, null, null, null],
];

export const SwatSpritePos = {
    [CharacterType.SHIELD]: {
        [DirectionType.UP]: new Point(4, -7),
        [DirectionType.RIGHT]: new Point(9, -7),
        [DirectionType.DOWN]: new Point(8, -3),
        [DirectionType.LEFT]: new Point(4, -3),
    },
    [CharacterType.RANGE]: {
        [DirectionType.UP]: new Point(5, -2),
        [DirectionType.RIGHT]: new Point(9, -2),
        [DirectionType.DOWN]: new Point(8, -2),
        [DirectionType.LEFT]: new Point(5, -2),
    },
    [CharacterType.MELEE]: {
        [DirectionType.UP]: new Point(6, -4),
        [DirectionType.RIGHT]: new Point(6, -4),
        [DirectionType.DOWN]: new Point(9, -2),
        [DirectionType.LEFT]: new Point(4, -2),
    }
};