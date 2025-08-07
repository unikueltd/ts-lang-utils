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


import {isPlain} from './isPlain';


/**
 * Returns an object that cloned from the given object
 *
 * @param source The object to clone
 *
 * @returns an object that cloned from the given object
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * clone({'foo': 'bar'});
 * ```
 */
export function clone(source?: object): object | undefined {
    return (!source || !isPlain(source)) ? undefined : Object.assign({}, source);
}
