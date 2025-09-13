/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import {defaultIfBlank} from './defaultIfBlank';
import {defaultString} from './defaultString';
import {getLength} from './getLength';
import {repeat} from './repeat';


/**
 * Returns the left padded string with the given size and string, or original string if no padding is necessary
 *
 * @param text The source string to inspect
 * @param size The size to pad to
 * @param pad The target string to fill, default is space
 *
 * @returns the left padded string with the given size and string, or original string if no padding is necessary
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * leftPad(undefined, -1, null);    // undefined
 * leftPad('', 3, 'z');    // 'zzz'
 * leftPad('foo', 3, 'z');    // 'foo'
 * leftPad('foo', 8, 'yz')  = 'yzyzyfoo'
 * ```
 */
export function leftPad(text?: string | null, size?: number, pad?: string | null): string | null | undefined {
    // noinspection DuplicatedCode
    if (size === undefined || size <= 0) {
        return text;
    }
    const textLength = getLength(text);
    const needLength = size - textLength;
    if (needLength <= 0) {
        return text;
    }
    const padding = defaultIfBlank(pad, ' ');    // space
    const padLength = getLength(padding);
    const quotient = Math.floor(needLength / padLength);
    const remainder = needLength % padLength;
    let result = '';
    if (quotient > 0) {
        // @ts-ignore
        result = result.concat(repeat(padding, quotient));
    }
    if (remainder > 0) {
        // @ts-ignore
        result = result.concat(padding.substring(0, remainder));
    }
    return result.concat(defaultString(text));
}
