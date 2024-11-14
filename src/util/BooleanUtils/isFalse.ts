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
 * Utilities for boolean
 *
 * @author David Hsing
 */


/**
 * Returns whether the given value can be converted to false
 *
 * @param value the source value to check
 *
 * @returns whether the given value can be converted to false
 *
 * @example
 * ```ts
 * isFalse(false);    // true
 * isFalse(0);    // true
 * isFalse('false');    // true
 * isFalse('no');    // true
 * isFalse('foobar');    // false
 * isFalse(() => false);    // true
 * ```
 */
export function isFalse(value?: boolean | number | string | null | (() => boolean)): boolean {
    if (typeof value === 'boolean') {
        return !(value as boolean);
    } else if (typeof value === 'number') {
        return (value as number) <= 0;
    } else if (typeof value === 'string') {
        return ['false', 'no', 'off', 'n', 'f', '0'].some(item => item === value.toLowerCase());
    } else if (typeof value === 'function') {
        return !value();
    }
    return false;
}
