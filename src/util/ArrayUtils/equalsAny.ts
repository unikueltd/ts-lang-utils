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


import {equals} from './equals';


/**
 * Returns whether the given array equals any of the given comparisons
 *
 * @param array the array to check
 * @param comparisons the elements to compare
 *
 * @returns whether the given array equals any of the given comparisons
 *
 * @example
 * ```ts
 * equalsAny([], [['foo', 'bar']]);    // false
 * equalsAny(['foo', 'bar'], [['foo', 'bar'], ['bar', 'foo']]);    // true
 * ```
 */
export function equalsAny(array?: any[] | readonly any[] | null, comparisons?: any[][] | readonly any[][] | null): boolean {
    return !!array && !!comparisons && comparisons.some(item => equals(item, array));
}
