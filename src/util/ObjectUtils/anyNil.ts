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


import {isNil} from './isNil';


/**
 * Utilities for object
 *
 * @author David Hsing
 */


/**
 * Returns whether any of the elements in the given objects is null or undefined
 *
 * @param objects the objects to check
 *
 * @returns whether any the elements in the given objects is null or undefined
 *
 * @example
 * ```ts
 * anyNil([null, undefined]);    // true
 * anyNil([null, {}]);    // true
 * anyNil(['foo', 'bar']);    // false
 * ```
 */
export function anyNil(objects?: any[]): boolean {
    return !objects || objects.length === 0 || objects.some(item => isNil(item));
}
