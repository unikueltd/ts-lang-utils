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


import { includes } from './includes';


/**
 * Returns whether the given text includes to any of the comparison strings
 *
 * @param text The source string to check
 * @param comparisons The target strings to compare
 *
 * @returns whether the given text includes the comparison string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * includesAny('foobar', ['foo', 'bar']);    // true
 * ```
 */
export function includesAny(text?: string | null, comparisons?: Array<string | null | undefined>): boolean {
    if (!text || !comparisons) {
        return false;
    }
    return comparisons?.some(comparison => includes(text, comparison));
}
