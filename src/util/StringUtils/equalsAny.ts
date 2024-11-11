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


import {includes} from '@/util/ArrayUtils/includes';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns whether the given string equals to any of the comparison strings
 *
 * @param text the source string to check
 * @param comparisons the target strings to compare
 *
 * @returns whether the given string equals to any of the comparison strings
 *
 * @example
 * ```ts
 * equalsAny('foo', ['foo', 'bar']);    // true
 * ```
 */
export function equalsAny(text?: string | null, comparisons?: Array<string | undefined | null>): boolean {
    return includes(comparisons, text);
}
