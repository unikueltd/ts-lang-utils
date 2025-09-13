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


import {isEmpty} from './isEmpty';
import {isNotNil} from '@/util/ObjectUtils/isNotNil';


/**
 * Utilities for array
 *
 * @author David Hsing
 */


/**
 * Returns the first not nil element in the given array, or null if all elements are nil
 *
 * @param array The array to check
 *
 * @returns the first not nil element in the given array, or null if all elements are nil
 *
 * @example
 * ```ts
 * firstNotNil([null, undefined, 'foo', 'bar', {}]);    // 'foo'
 * ```
 */
export function firstNotNil(array?: any[] | readonly any[] | null): any {
    // @ts-ignore
    return isEmpty(array) ? undefined : array.find(item => isNotNil(item));
}
