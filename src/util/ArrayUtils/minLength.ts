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


import {getLength} from './getLength';
import {isEmpty} from './isEmpty';


/**
 * Returns the min length of the given arrays
 *
 * @param arrays The arrays to check
 *
 * @returns the min length of the given arrays
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * minLength(['foo', 'bar'], [1, 2, 3], []);    // 0
 * ```
 */
export function minLength(...arrays: (any[] | readonly any[])[]): number {
    if (isEmpty(arrays)) {
        return 0;
    }
    let result = arrays[0]?.length;
    for (const array of arrays.slice(1)) {
        result = Math.min(result, getLength(array));
        if (result === 0) {
            break;
        }
    }
    return result;
}
