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
 * Utilities for color
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class ColorUtils {
    /**
     * Returns whether the given string is a valid hex color
     *
     * @param hex the hex color to check
     *
     * @returns whether the given string is a valid hex color
     *
     * @example
     * ```ts
     * ColorUtils.isHex('#ff0000');
     * ```
     */
    public static isHex(hex?: string): boolean {
        return !!hex && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
    }

    /**
     * Returns the converted rgb color from the given hex color
     *
     * @param hex the hex color to inspect
     *
     * @returns the converted rgb color from the given hex color
     *
     * @example
     * ```ts
     * ColorUtils.hexToRgb('#ff0000');    // 'rgb(255, 0, 0)'
     * ```
     */
    public static hexToRgb(hex?: string): string | undefined {
        if (!hex) {
            return undefined;
        }
        const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const rep = hex.replace(rgx, (m, r, g, b) => r + r + g + g + b + b );
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rep);
        if (!rgb) {
            return undefined;
        }
        const r = Number.parseInt(rgb[1], 16);
        const g = Number.parseInt(rgb[2], 16);
        const b = Number.parseInt(rgb[3], 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    /**
     * Returns the converted hex color from the given rgb color
     *
     * @param rgb the rgb color to inspect
     *
     * @returns the converted hex color from the given rgb color
     *
     * @example
     * ```ts
     * ColorUtils.rgbToHex('rgb(255, 0, 0)');    // '#ff0000'
     * ColorUtils.rgbToHex([255, 0, 0]);    // '#ff0000'
     * ```
     */
    public static rgbToHex(rgb?: string | [r: number, g: number, b: number]): string | undefined {
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
        const hexR = r.toString(16).padStart(2, '0');
        const hexG = g.toString(16).padStart(2, '0');
        const hexB = b.toString(16).padStart(2, '0');
        return `#${hexR}${hexG}${hexB}`;
    }

    /**
     * Returns the converted hex color from the given hsl color
     *
     * @param hsl the hsl color to inspect
     *
     * @returns the converted hex color from the given hsl color
     *
     * @example
     * ```ts
     * ColorUtils.hslToHex('hsl(360, 1, 0.5)');    // '#ff0000'
     * ColorUtils.hslToHex([360, 1, 0.5]);    // '#ff0000'
     * ```
     */
    public static hslToHex(hsl?: string | [h: number, s: number, l: number]): string | undefined {
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
}
