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


import { clone } from './clone';
import { isPlain } from './isPlain';
import { setProp } from './setProp';


/**
 * Returns an object that cloned from the given object, excludes all the given keys
 *
 * @param source The object to clone
 * @param keys The key names to exclude
 *
 * @returns an object that cloned from the given object, excludes all the given keys
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * cloneExclusive({'foo': 'bar'}, ['foo']);
 * ```
 */
export function cloneExclusive(source?: object, keys?: string[]): object | undefined {
    if (!source || !isPlain(source)) {
        return undefined;
    }
    if (!keys || !keys.length) {
        return clone(source);
    }
    const result = { };
    Object.entries(source).filter(item => !keys.includes(item[0])).forEach(item => setProp(result, item[0], item[1]));
    return result;
}
