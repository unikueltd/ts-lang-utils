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


import { isPrototype } from './isPrototype';
import { hasProp } from './hasProp';


/**
 * Returns a string array representation of keys in the given object
 *
 * @param object The object to inspect
 *
 * @returns the keys of the given object
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * keys({foo: 'bar'});    // ['foo']
 * ```
 */
export function keys(object: any): string[] {
    if (!object) {
        return [];
    }
    if (!isPrototype(object)) {
        return Object.keys(object);
    }
    const result: string[] = [];
    for (const key in Object(object)) {
        if (key !== 'constructor' && hasProp(object, key)) {
            result.push(key);
        }
    }
    return result;
}
