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
 * Returns whether the given arrays are equal
 *
 * @param array The source array to check
 * @param comparison The target array to compare
 *
 * @returns whether the given arrays are equal
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * equals(undefined, undefined);    // true
 * equals(undefined, null);    // false
 * equals([], []);    // true
 * equals(['foo', 'bar'], ['foo', 'bar']);    // true
 * equals(['foo', 'bar'], ['bar', 'foo']);    // false
 * ```
 */
export function equals(array?: any[] | readonly any[] | null, comparison?: any[] | readonly any[] | null): boolean {
    if ((array === undefined && comparison === undefined) || (array === null && comparison === null)) {
        return true;
    }
    if ((array === undefined && comparison === null) || (array === null && comparison === undefined)) {
        return false;
    }
    if (!array?.length && !comparison?.length) {
        return true;
    }
    if (array?.length !== comparison?.length) {
        return false;
    }
    // @ts-ignore
    return array.every((item: any, index: number)=> comparison[index] === item);
}
