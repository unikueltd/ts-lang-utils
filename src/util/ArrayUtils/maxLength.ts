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


import {getLength} from './getLength';
import {isEmpty} from './isEmpty';


/**
 * Utilities for array
 *
 * @author David Hsing
 */


/**
 * Returns the max length of the given arrays
 *
 * @param arrays the arrays to check
 *
 * @returns the max length of the given arrays
 *
 * @example
 * ```ts
 * maxLength(['foo', 'bar'], [1, 2, 3]);    // 3
 * ```
 */
export function maxLength(...arrays: (any[] | readonly any[])[]): number {
    if (isEmpty(arrays)) {
        return 0;
    }
    let result = 0;
    for (const array of arrays) {
        result = Math.max(result, getLength(array));
    }
    return result;
}
