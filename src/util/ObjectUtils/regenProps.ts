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


import { isPlain } from './isPlain';
import { setProp } from './setProp';


/**
 * Returns an object that regenerated the given source, processing each property value and assigning it back
 *
 * @param object The source object to assign to
 * @param callback The callback function that processes each prop key
 *
 * @returns an object that regenerated the given source, processing each property value and assigning it back
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * regenProps({'foo': 'bar'}, () => 'foobar');    // {'foo': 'foobar'}
 * ```
 */
export function regenProps(object: any, callback?: (key?: string, index?: number) => any): object | undefined {
    if (!object || !isPlain(object) || !callback) {
        return object;
    }
    const result = { };
    Object.keys(object).filter(key => Object.prototype.hasOwnProperty.call(object, key)).forEach((key: string, index: number) => {
        setProp(result, key, callback(key, index));
    });
    return result;
}
