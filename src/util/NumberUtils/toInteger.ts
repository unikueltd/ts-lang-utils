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
 * Returns an integer value from the string value, or undefined if the value cannot be converted
 *
 * @param value the string value to check
 *
 * @returns an integer value from the string value, or undefined if the value cannot be converted
 *
 * @example
 * ```ts
 * toInteger('1');    // 1
 * ```
 */
export function toInteger(value?: string): number | undefined {
    if (value === undefined) {
        return undefined;
    }
    try {
        // @ts-ignore
        const result = Number.parseInt(value);
        return Number.isNaN(result) ? undefined : result;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (ignored) {
    }
    return undefined;
}
