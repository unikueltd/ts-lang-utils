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


/**
 * Returns the sum value of the given array
 *
 * @param values The array to calculate
 *
 * @returns the sum value of the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * sum([1, 2, 3]);    // 6
 * ```
 */
export function sum(values?: number[]): number | undefined {
    return !values ? undefined : values.reduce((a, b) => a + b);
}
