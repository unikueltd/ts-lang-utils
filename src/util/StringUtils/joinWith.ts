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
 * Returns the joined string with the given texts and delimiter
 *
 * @param texts the source string or strings to inspect
 * @param separator the delimiter string to append between each of the given texts
 * @param filter the filter to check each of the given texts should be included
 *
 * @returns the joined string with the given texts and delimiter
 *
 * @example
 * ```ts
 * joinWith('foobar');    // 'foobar'
 * joinWith(['foo', 'bar'], undefined);    // 'foobar'
 * joinWith(['foo', 'bar', 'world'], undefined, (text => text !== 'world'));    // 'foobar'
 * ```
 */
export function joinWith(texts?: string | string[] | null, separator?: string | null, filter?: (text?: string) => boolean): string | undefined {
    if (!texts || (Array.isArray(texts) && texts.length === 0)) {
        return undefined;
    }
    if (Array.isArray(texts)) {
        if (!filter) {
            return texts.join(defaultString(separator));
        }
        const array = texts.filter(filter);
        return (!array || array.length === 0) ? undefined : array.join(defaultString(separator));
    }
    return !filter ? (texts as string) : (filter(texts as string) ? (texts as string) : undefined);
}
