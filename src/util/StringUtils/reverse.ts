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


import {toChars} from './toChars';


/**
 * Returns the reversed representation of the given string
 *
 * @param text the source string to inspect
 * @param startInclusive the starting index, inclusive
 * @param endExclusive the ending index, exclusive
 *
 * @returns the reversed representation of the given string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * reverse('foobar');    // 'raboof'
 * reverse('foobar', 1, 5);    // 'aboo'
 * ```
 */
export function reverse(text?: string | null, startInclusive?: number, endExclusive?: number): string | null | undefined {
    if (!text) {
        return text;
    }
    const substring = text.substring(startInclusive ?? 0, endExclusive);
    const result = toChars(substring) as string[];
    if (!result || !result.length) {
        return undefined;
    }
    result.reverse();
    return result.join('');
}
