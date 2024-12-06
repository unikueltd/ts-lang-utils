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


import {defaultString} from './defaultString';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the joined string with the given array and delimiter
 *
 * @param array the source array to inspect
 * @param separator the delimiter to append between each element of the given array
 * @param filter the filter to check each element of the given array should be included
 *
 * @returns the joined string with the given array and delimiter
 *
 * @example
 * ```ts
 * join(['foo', 'bar'], undefined);    // 'foobar'
 * join(['foo', 'bar', 'world'], undefined, (text => text !== 'world'));    // 'foobar'
 * ```
 */
export function join(array?: any[] | null, separator?: string | null, filter?: (item?: any) => boolean): string | undefined {
    if (array === undefined || array === null || !array.length) {
        return undefined;
    }
    if (!filter) {
        return array.join(defaultString(separator));
    }
    const alias = array.filter(filter);
    return (!alias || !alias.length) ? undefined : alias.join(defaultString(separator));
}
