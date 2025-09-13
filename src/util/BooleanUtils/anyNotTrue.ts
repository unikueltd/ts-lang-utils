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


import {isNotTrue} from './isNotTrue';


/**
 * Returns whether any of the given elements is not true
 *
 * @param values The elements to check
 *
 * @returns whether any of the given elements is not true
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * anyNotTrue([null, undefined]);    // true
 * anyNotTrue([null, true]);    // true
 * anyNotTrue([null, false]);    // true
 * ```
 */
export function anyNotTrue(values?: Array<boolean | number | string | null | undefined>): boolean {
    return !values || !values.length || values.some(item => isNotTrue(item));
}
