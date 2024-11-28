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
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the repeated string with the given text and size
 *
 * @param text the source string to inspect
 * @param size the size to pad to
 *
 * @returns the repeated string with the given text and size
 *
 * @example
 * ```ts
 * repeat(undefined, 0);    // undefined
 * repeat('', 3);    // ''
 * repeat('z', 3);    // 'zzz'
 * ```
 */
export function repeat(text?: string | null, size?: number): string | undefined | null {
    if (!text || size === undefined || size <= 0) {
        return text;
    }
    let result = '';
    for (let i = 0; i < size; i++) {
        result = result.concat(text);
    }
    return result;
}
