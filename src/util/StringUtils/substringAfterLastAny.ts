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


import {substringAfterLast} from './substringAfterLast';


/**
 * Returns the substring after the last occurrence of any the given separators (the separator is not returned)
 *
 * @param text The string to get a substring from
 * @param separators The strings to search for
 *
 * @returns the substring after the last occurrence of any the given separators
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * substringAfterLastAny("foo/bar/foo/bar", ["/", ";"]);    // 'bar'
 * ```
 */
export function substringAfterLastAny(text?: string | null, separators?: Array<string | null | undefined>): string | null | undefined {
    if (!text || !separators || !separators.length) {
        return text;
    }
    for (const item of separators) {
        const after = substringAfterLast(text, item);
        if (after) {
            return  after;
        }
    }
    return text;
}
