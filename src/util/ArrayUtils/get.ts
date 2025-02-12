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
 * Returns the indexed element of the given array
 *
 * @param array the array to inspect
 * @param index the index in the array
 * @param defaultValue the default value if the array is empty
 *
 * @returns the indexed element of the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * get(['foo', 'bar'], 0);    // 'foo'
 * ```
 */
export function get<E>(array?: E[] | readonly E[] | null, index?: number, defaultValue?: E | null): E | null | undefined {
    return (!array || !array.length || index === undefined || index > (array.length - 1)) ? defaultValue : array[index];
}
