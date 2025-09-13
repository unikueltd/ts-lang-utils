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


import {isNotNil} from './isNotNil';


/**
 * Returns the first not nil element in the given objects, or undefined if all elements are nil
 *
 * @param objects The objects to check
 *
 * @returns the first not nil element in the given objects, or undefined if all elements are nil
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * firstNotNil(null, undefined, 'foo', 'bar', {});    // 'foo'
 * ```
 */
export function firstNotNil(...objects: any[] | readonly any[]): any {
    return (!objects || !objects.length) ? undefined : objects.find(item => isNotNil(item));
}
