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
 * Returns the array that contains all the given elements at the index of the source array
 *
 * @param array the array to inspect
 * @param index the index to insert, negative or greater than the length of source array, means at the end of the source array
 * @param elements the elements to insert
 *
 * @returns the array that contains all the given elements at the index of the source array
 *
 * @example
 * ```ts
 * insert(['foo', 'bar'], -1, ['hello', 'world']);    // ['foo', 'bar', 'hello', 'world']
 * insert(['foo', 'bar'], 0, ['hello', 'world']);    // ['hello', 'world', 'foo', 'bar']
 * insert(['foo', 'bar'], 1, ['hello', 'world']);    // ['foo', 'hello', 'world', 'bar']
 * insert(['foo', 'bar'], 9, ['hello', 'world']);    // ['foo', 'bar', 'hello', 'world']
 * ```
 */
export function insert<E>(array?: E[] | null, index?: number, elements?: E[] | null): E[] | null | undefined {
    if (index === undefined || !elements || !elements.length) {
        return array;
    }
    if (!array || !array.length) {
        return elements;
    }
    if (index < 0 || index >= array.length) {
        return array.concat(elements);
    } else if (index === 0) {
        return elements.concat(array);
    }
    const order = Math.min(index, array.length);
    return array.slice(0, order).concat(elements).concat(array.slice(order));
}
