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


import {startsWithIgnoreCase} from './startsWithIgnoreCase';


/**
 * Returns a string that concat the given prefix and text, case-insensitive
 *
 * @param text The text to check
 * @param prefix The prefix to prepend
 *
 * @returns a string that concat the given prefix and text, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * prependIfMissingIgnoreCase('bar', 'foo');    // 'foobar'
 * prependIfMissingIgnoreCase('foobar', 'FOO');    // 'foobar'
 * ```
 */
export function prependIfMissingIgnoreCase(text?: string | null, prefix?: string): string | null | undefined {
    return (!text || !prefix || startsWithIgnoreCase(text, prefix)) ? text : (prefix + text);
}
