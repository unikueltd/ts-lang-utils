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
 * Returns whether the given array includes any of the given elements
 *
 * @param array The array to check
 * @param elements The elements to compare
 *
 * @returns whether the given array includes any of the given elements
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * includesAny(['foo', 'bar'], ['foo', 'bar']);    // true
 * includesAny(['foo', 'bar'], ['foo', 'world']);    // true
 * ```
 */
export function includesAny<E>(array?: E[] | readonly E[] | null, elements?: E[] | null): boolean {
    return !!array && !!elements && elements.some(item => array.includes(item));
}
