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
 * Returns the reversed rgb color from the given color
 *
 * @param rgb The rgb color to inspect
 *
 * @returns the reversed rgb color from the given color
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * reverseRgb('rgb(0, 0, 0)');    // 'rgb(255, 255, 255)'
 * reverseRgb([255, 255, 255]);    // 'rgb(0, 0, 0)'
 * ```
 */
export function reverseRgb(rgb?: string | [r: number, g: number, b: number]): string | undefined {
    // noinspection DuplicatedCode
    if (!rgb) {
        return undefined;
    }
    let alias = null;
    if (typeof rgb === 'string') {
        const arr = rgb.match(/\d+/g);
        if (!arr || arr.length !== 3) {
            return undefined;
        }
        alias = arr.map(Number);
    } else {
        alias = rgb;
    }
    const [r, g, b] = alias;
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}
