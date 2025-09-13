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
 * Returns whether the given object has the specified property
 *
 * @param object The object to check
 * @param prop The property name to check
 *
 * @returns whether the object has the specified property
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * hasProp({foo: 'bar'}, 'foo');    // true
 * hasProp({foo: 'bar'}, 'bar');    // false
 * ```
 */
export function hasProp(object: any, prop?: string | null): boolean {
    return typeof object === 'object' && !!prop && Object.prototype.hasOwnProperty.call(object, prop);
}
