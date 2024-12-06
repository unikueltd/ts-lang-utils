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
 * Utilities for number
 *
 * @author David Hsing
 */


/**
 * Returns a float value from the given source
 *
 * @param source the string value to check
 * @param defaultValue the default value if the source cannot be converted
 *
 * @returns a float value from the given source
 *
 * @example
 * ```ts
 * toFloat('1.0');    // 1.0
 * ```
 */
export function toFloat(source?: string, defaultValue?: number): number | undefined {
    if (source === undefined) {
        return defaultValue;
    }
    try {
        const result = Number.parseFloat(source);
        return Number.isNaN(result) ? defaultValue : result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (ignored) {
    }
    return defaultValue;
}
