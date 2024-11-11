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


import {startsWith} from './startsWith';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns whether the given string starts with any of the prefixes
 *
 * @param text the source string to check
 * @param prefixes the target strings to compare
 *
 * @returns whether the given string starts with any of the prefixes
 *
 * @example
 * ```ts
 * startsWithAny('foobar', ['foo', 'bar']);    // true
 * startsWithAny('hello', ['foo', 'bar']);    // false
 * ```
 */
export function startsWithAny(text?: string | null, prefixes?: Array<string | undefined | null>): boolean {
    if (!text || !prefixes || prefixes.length === 0) {
        return false;
    }
    return prefixes.some(prefix => startsWith(text, prefix));
}
