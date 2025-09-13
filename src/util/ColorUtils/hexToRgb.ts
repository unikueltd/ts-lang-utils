/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
 * Returns the converted rgb color from the given hex color
 *
 * @param hex The hex color to inspect
 *
 * @returns the converted rgb color from the given hex color
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * hexToRgb('#fff');    // 'rgb(255, 255, 255)'
 * hexToRgb('#ff0000');    // 'rgb(255, 0, 0)'
 * ```
 */
export function hexToRgb(hex?: string): string | undefined {
    // noinspection DuplicatedCode
    if (!hex) {
        return undefined;
    }
    const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const rep = hex.replace(rgx, (m, r, g, b) => r + r + g + g + b + b );
    const arr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rep);
    if (!arr || arr.length !== 4) {
        return undefined;
    }
    const hexR = Number.parseInt(arr[1], 16);
    const hexG = Number.parseInt(arr[2], 16);
    const hexB = Number.parseInt(arr[3], 16);
    return `rgb(${hexR}, ${hexG}, ${hexB})`;
}
