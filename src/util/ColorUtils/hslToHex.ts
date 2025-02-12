/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


/**
 * Returns the converted hex color from the given hsl color
 *
 * @param hsl the hsl color to inspect
 *
 * @returns the converted hex color from the given hsl color
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * hslToHex('hsl(360, 1, 0.5)');    // '#ff0000'
 * hslToHex([360, 1, 0.5]);    // '#ff0000'
 * ```
 */
export function hslToHex(hsl?: string | [h: number, s: number, l: number]): string | undefined {
    if (!hsl) {
        return undefined;
    }
    let alias = null;
    if (typeof hsl === 'string') {
        const arr = /hsl\((\d+),\s*([\d.]+),\s*([\d.]+)\)/.exec(hsl);
        if (!arr || arr.length !== 4) {
            return undefined;
        }
        alias = arr.slice(1).map(Number);
    } else {
        alias = hsl;
    }
    const [h, s, l] = alias;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
