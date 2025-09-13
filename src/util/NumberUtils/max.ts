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


/**
 * Returns the max value of the given array
 *
 * @param values The array to calculate
 *
 * @returns the max value of the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * max([1, 2, 3]);    // 3
 * ```
 */
export function max(values?: number[]): number | undefined {
    if (!values || !values.length) {
        return undefined;
    }
    let result = values[0];
    for (let i = 1; i < values.length; i++) {
        if (result < values[i]) {
            result = values[i];
        }
    }
    return result;
}
