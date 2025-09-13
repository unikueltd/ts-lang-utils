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


/**
 * Reverses the given array
 *
 * @param array The arrays to inspect
 * @param startInclusive The starting index, inclusive
 * @param endExclusive The ending index, exclusive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * reverse(undefined);    // undefined
 * reverse(['foo', 'bar']);    // ['bar', 'foo']
 * reverse(['foo', 'bar'], 0, 1);    // ['foo']
 * ```
 */
export function reverse<E>(array?: E[] | null, startInclusive?: number, endExclusive?: number): E[] | null | undefined {
    if (!array) {
        return array;
    }
    const subarray = array.slice(startInclusive, endExclusive);
    subarray.reverse();
    return subarray;
}
