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


import {keys} from './keys';


/**
 * Returns whether the given object is empty
 *
 * @param object The object to check
 *
 * @returns whether the given object is empty
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isEmpty(null);    // true
 * isEmpty(undefined);    // true
 * isEmpty(0);    // false
 * isEmpty({});    // true
 * isEmpty('foobar');    // false
 * ```
 */
export function isEmpty(object: any): boolean {
    if (object === undefined || object === null) {
        return true;
    }
    if (typeof object === 'string' || Array.isArray(object)) {
        return !object.length;
    }
    if (object instanceof Map || object instanceof Set) {
        return !object.size;
    }
    if (typeof object === 'object') {
        return !keys(object)?.length;
    }
    return false;
}
