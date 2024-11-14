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
 * Returns the array that removes the given element
 *
 * @param array the arrays to inspect
 * @param element the element to remove
 *
 * @returns the array that removes the given element
 *
 * @example
 * ```ts
 * remove(undefined, 'bar');    // undefined
 * remove(['foo', 'bar'], undefined);    // ['foo', 'bar']
 * remove(['foo', 'bar'], 'bar');    // ['foo']
 * ```
 */
export function remove<E>(array?: E[] | null, element?: E | null): E[] | undefined | null {
    return (!array || !element) ? array : array.filter(item => item !== element);
}
