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
 * Returns the leftmost length characters of the given string
 *
 * @param text the text to inspect
 * @param length the expected length
 *
 * @returns the leftmost length characters of the given string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * left('foobar', 3);    // 'foo'
 * left('foobar', 10);    // 'foobar'
 * ```
 */
export function left(text?: string | null, length?: number): string | null | undefined {
    if (!text || length === undefined || length < 0) {
        return text;
    }
    if (length === 0) {
        return '';
    }
    return text.substring(0, length);
}
