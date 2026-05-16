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


import { isFalse } from './isFalse';


/**
 * Returns whether the given value is nil or can be converted to true
 *
 * @param value The source value to check
 *
 * @returns whether the given value is nil or can be converted to true
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isNotFalse(true);    // true
 * isNotFalse(undefined);    // true
 * isNotFalse(null);    // true
 * isNotFalse('yes');    // true
 * isNotFalse('foobar');    // true
 * isNotFalse(() => true);    // true
 * ```
 */
export function isNotFalse(value?: boolean | number | string | null | (() => boolean)): boolean {
    return value === undefined || value === null || !isFalse(value);
}
