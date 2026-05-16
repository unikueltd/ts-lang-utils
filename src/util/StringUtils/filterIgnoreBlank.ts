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


import { isNotBlank } from './isNotBlank';


/**
 * Returns the filtered array of the gaven strings, without blanks
 *
 * @param texts The source string to inspect
 *
 * @returns the filtered array of the gaven strings, without blanks
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * filterIgnoreEmpty([null, undefined, ' ', 'foobar']);    //  ['foobar']
 * ```
 */
export function filterIgnoreBlank(texts?: Array<string | null | undefined>): string[] | undefined {
    if (!texts || !texts.length) {
        return undefined;
    }
    const result = texts.filter(item => isNotBlank(item));
    // @ts-ignore
    return (!result || !result.length) ? undefined : result;
}
