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


import {isNotTrue} from './isNotTrue';


/**
 * Utilities for boolean
 *
 * @author David Hsing
 */


/**
 * Returns whether all the given elements are not true
 *
 * @param values the elements to check
 *
 * @returns whether all the given elements are not true
 *
 * @example
 * ```ts
 * allNotTrue([null, undefined]);    // true
 * allNotTrue([null, true]);    // false
 * allNotTrue([null, false]);    // true
 * ```
 */
export function allNotTrue(values?: Array<boolean | number | string | undefined | null>): boolean {
    return !values || values.length === 0 || values.every(item => isNotTrue(item));
}
