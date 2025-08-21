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
 * Returns a length-fixed array from the given array
 *
 * @param array The arrays to inspect
 * @param length The length to fix
 * @param fillValue The fill value if the array is shorter than the length
 *
 * @returns a length-fixed array from the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * fixLength(undefined, -1);    // []
 * fixLength(['foo', 'bar'], 1);    // ['foo']
 * fixLength(['foo', 'bar'], 2);    // ['foo', 'bar']
 * fixLength(['foo', 'bar'], 3);    // ['foo', 'bar', undefined]
 * ```
 */
export function fixLength<E>(array?: E[] | null, length?: number, fillValue?: E | null): E[] {
    if (!array || !length) {
        return [];
    }
    if (array.length > length) {
        return array.slice(0, length);
    } else if (array.length < length) {
        return [
            ...array,
            ...Array(length - array.length).fill(fillValue)
        ];
    }
    return [...array];
}
