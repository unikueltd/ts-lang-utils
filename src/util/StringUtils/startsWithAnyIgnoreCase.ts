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


import { startsWithIgnoreCase } from './startsWithIgnoreCase';


/**
 * Returns whether the given string starts with any of the prefixes, case-insensitive
 *
 * @param text The source string to check
 * @param prefixes The target strings to compare
 *
 * @returns whether the given string starts with any of the prefixes, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * startsWithAnyIgnoreCase('foobar', ['FOO', 'BAR']);    // true
 * startsWithAnyIgnoreCase('hello', ['FOO', 'BAR']);    // false
 * ```
 */
export function startsWithAnyIgnoreCase(text?: string | null, prefixes?: Array<string | null | undefined>): boolean {
    if (!text || !prefixes || !prefixes.length) {
        return false;
    }
    return prefixes.some(prefix => startsWithIgnoreCase(text, prefix));
}
