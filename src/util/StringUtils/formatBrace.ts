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


import {toString} from '@/util/ObjectUtils/toString';


/**
 * Returns the replaced string of the source string ("{}" placeholder) with the given parameters
 *
 * @param text The source string to inspect
 * @param params The parameters to replaced with
 *
 * @returns the replaced string of the source string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * formatBrace('foo{}', 'bar');    //  'foobar'
 * formatBrace('foobar{}');    //  'foobar{}'
 * formatBrace('hello {}, foo{}', 'world', 'bar');    //  'hello world, foobar'
 * ```
 */
export function formatBrace(text?: string | null, ...params: any[]): string | null | undefined {
    if (!text || text.length <= 2 || !params || !params.length) {
        return text;
    }
    let result = text;
    for (const param of params) {
        result = result.replace('{}', toString(param, '') as string);
    }
    return result;
}
