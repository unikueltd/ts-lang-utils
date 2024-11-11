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
 * Utilities for object
 *
 * @author David Hsing
 */


/**
 * Returns whether the given object is a prototype
 *
 * @param object the object to check
 *
 * @returns whether the given object is a prototype
 *
 * @example
 * ```ts
 * isPrototype({});    // false
 * isPrototype('foobar');    // false
 * ```
 */
export function isPrototype(object: any): boolean {
    if (typeof object !== 'object') {
        return false;
    }
    const constructor = object.constructor;
    const prototype = (typeof constructor === 'function') ? constructor.prototype : object.prototype;
    return object === prototype;
}
