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
 * Returns the array that removes the given elements
 *
 * @param array the arrays to inspect
 * @param elements the elements to remove
 *
 * @returns the array that removes the given elements
 *
 * @example
 * ```ts
 * removeAll(undefined, ['bar']);    // undefined
 * removeAll(['foo', 'bar'], undefined);    // ['foo', 'bar']
 * removeAll(['foo', 'bar'], ['bar']);    // ['foo']
 * ```
 */
export function removeAll<E>(array?: E[] | null, elements?: E[] | null): E[] | null | undefined {
    return (!array || !elements) ? array : array.filter(item => !elements.includes(item));
}
