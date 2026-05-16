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


import { defaultString } from './defaultString';


/**
 * Returns the joined string with the given element(s) and delimiter
 *
 * @param element The source element(s) to inspect
 * @param separator The delimiter to append between each element of the given element(s)
 * @param filter The filter to check each element of the given element(s) should be included
 *
 * @returns the joined string with the given element(s) and delimiter
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * join('foobar');    // 'foobar'
 * join(['foo', 'bar'], undefined);    // 'foobar'
 * join(['foo', 'bar', 'world'], undefined, (text => text !== 'world'));    // 'foobar'
 * ```
 */
export function join(element?: any | any[] | readonly any[] | null, separator?: string | null, filter?: (item?: any) => boolean): string | undefined {
    if (element === undefined || element === null) {
        return undefined;
    }
    if (Array.isArray(element)) {
        if (!element.length) {
            return undefined;
        }
        if (!filter) {
            return element.join(defaultString(separator));
        }
        const alias = element.filter(filter);
        return (!alias || !alias.length) ? undefined : alias.join(defaultString(separator));
    }
    return !filter ? element.toString() : (filter(element) ? element.toString() : undefined);
}
