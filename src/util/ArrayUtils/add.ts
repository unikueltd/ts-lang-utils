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
 * Returns the array that adds the given element
 *
 * @param array the arrays to inspect
 * @param element the element to add
 *
 * @returns the array that adds the given element
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * add(undefined, 'bar');    // ['bar']
 * add(['foo', 'bar'], undefined);    // ['foo', 'bar']
 * add(['foo', 'bar'], 'world');    // ['foo', 'bar', 'world']
 * ```
 */
export function add<E>(array?: E[] | null, element?: E | null): E[] | null | undefined {
    if (!array) {
        return !element ? undefined : [element];
    }
    if (!element) {
        return array;
    }
    const result = [...array];
    result.push(element);
    return result;
}
