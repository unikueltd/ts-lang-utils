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
 * Utilities for array
 *
 * @author David Hsing
 */


/**
 * Returns the count of elements in the given array which match the given filter
 *
 * @param array the array to inspect
 * @param predicate the function to filter the given array
 *
 * @returns the count of elements in the given array which match the given filter
 *
 * @example
 * ```ts
 * count(['foo', 'bar', 'foobar'], value => value.includes('foo'));    // 2
 * ```
 */
export function count<E>(array?: E[] | readonly E[] | null, predicate?: (value: E, index: number) => boolean): number {
    if (!array) {
        return 0;
    }
    if (!predicate) {
        return array.length;
    }
    return array.filter(predicate).length;
}
