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
 * Returns the first element of the given array
 *
 * @param array the array to inspect
 *
 * @returns the first element of the given array
 *
 * @example
 * ```ts
 * getFirst(['foo', 'bar']);    // 'foo'
 * ```
 */
export function getFirst<E>(array?: E[] | readonly E[] | null): E | undefined {
    return (!array || array.length === 0) ? undefined : array[0];
}
