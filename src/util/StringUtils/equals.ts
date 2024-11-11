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
 * Returns whether the given strings are equal
 *
 * @param text the source string to check
 * @param comparison the target string to compare
 *
 * @returns whether the given strings are equal
 *
 * @example
 * ```ts
 * equals(undefined, null);    // false
 * equals('foo', 'foo');    // true
 * equals('foo', 'bar');    // false
 * ```
 */
export function equals(text?: string | null, comparison?: string | null): boolean {
    if (text === comparison) {
        return true;
    }
    if (!text || !comparison || text?.length !== comparison?.length) {
        return false;
    }
    return text === comparison;
}
