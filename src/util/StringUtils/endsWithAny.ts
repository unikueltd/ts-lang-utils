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


import {endsWith} from './endsWith';


/**
 * Returns whether the given string ends with any of the suffixes
 *
 * @param text The source string to check
 * @param suffixes The target strings to compare
 *
 * @returns whether the given string ends with any of the suffixes
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * endsWithAny('foobar', ['foo', 'bar']);    // true
 * endsWithAny('hello', ['foo', 'bar']);    // false
 * ```
 */
export function endsWithAny(text?: string | null, suffixes?: Array<string | null | undefined>): boolean {
    if (!text || !suffixes || !suffixes.length) {
        return false;
    }
    return suffixes.some(suffix => endsWith(text, suffix));
}
