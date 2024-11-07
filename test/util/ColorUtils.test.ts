/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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


import {ColorUtils} from '@yookue/ts-lang-utils';


describe('ColorUtils', () => {
    test('Testing isHex', () => {
        expect(ColorUtils.isHex('#ff0000')).toBeTruthy();
    });

    test('Testing hexToRgb', () => {
        expect(ColorUtils.hexToRgb('#ff0000')).toBe('rgb(255, 0, 0)');
    });

    test('Testing rgbToHex', () => {
        expect(ColorUtils.rgbToHex('rgb(255, 0, 0)')).toBe('#ff0000');
        expect(ColorUtils.rgbToHex([255, 0, 0])).toBe('#ff0000');
    });

    test('Testing hslToHex', () => {
        expect(ColorUtils.hslToHex('hsl(360, 1, 0.5)')).toBe('#ff0000');
        expect(ColorUtils.hslToHex([360, 1, 0.5])).toBe('#ff0000');
    });
});
