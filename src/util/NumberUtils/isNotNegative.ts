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


import { isNegative } from './isNegative';


/**
 * Returns whether the given value is not negative
 *
 * @param value The number value to check
 *
 * @returns whether the given value is not negative
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isNotNegative(1);    // true
 * isNotNegative(0);    // true
 * isNotNegative(-1);    // false
 * ```
 */
export function isNotNegative(value?: number): boolean {
    return !isNegative(value);
}
