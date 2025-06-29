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


/**
 * Returns the split array of the given string by the given delimiter
 *
 * @param text the source string to inspect
 * @param delimiter the delimiter to split strings, default is comma
 * @param max the max elements expected, negative means unlimited, default is -1
 * @param trim whether trim each element before returning, default is true
 * @param skipEmptys whether skip all empty elements, default is true
 *
 * @returns the split array of the given string by the given delimiter
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * split('foo,bar');    // ['foo', 'bar']
 * split('hello | world | wonderful', '|', 2);    // ['hello', 'world']
 * ```
 */
export function split(text?: string | null, delimiter: string = ',', max: number = -1, trim: boolean = true, skipEmptys: boolean = true): string[] | undefined {
    if (!text) {
        return undefined;
    }
    const result = text.split(delimiter, max);
    if (!result || !result.length || (skipEmptys && result.every((item) => !item))) {
        return undefined;
    }
    return !trim ? result : result.map(item => !item ? item : item.trim());
}
