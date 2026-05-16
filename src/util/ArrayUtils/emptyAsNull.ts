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


import { isEmpty } from '@/util/ObjectUtils';


/**
 * Returns a array that replaced the empty element to null from the given array
 *
 * @param array The arrays to inspect
 *
 * @returns a array that replaced the empty element to null from the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * emptyAsNull(['foo', 'bar']);    // ['foo', 'bar']
 * emptyAsNull(['foo', '']);    // ['foo', null]
 * emptyAsNull(['', 'bar']);    // [null, 'bar']
 * ```
 */
export function emptyAsNull<E>(array?: E[] | null): (E | null)[] | null | undefined {
    return !array ? array : array.map(item => isEmpty(item) ? null : item);
}
