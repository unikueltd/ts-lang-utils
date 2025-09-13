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
 * Returns whether the given object is null or undefined
 *
 * @param object The object to check
 *
 * @returns whether the given object is null or undefined
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isNil(null);    // true
 * isNil(undefined);    // true
 * isNil({});    // false
 * ```
 */
export function isNil(object: any): boolean {
    return object === undefined || object === null;
}
