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


import {isNotNil} from './isNotNil';


/**
 * Utilities for object
 *
 * @author David Hsing
 */


/**
 * Returns whether any of the elements in the given objects is not null or undefined
 *
 * @param objects the objects to check
 *
 * @returns whether any of the elements in the given objects is not null or undefined
 *
 * @example
 * ```ts
 * anyNotNil([null, undefined]);    // false
 * anyNotNil([null, {}]);    // true
 * ```
 */
export function anyNotNil(objects?: any[]): boolean {
    return !!objects && objects.length > 0 && objects.some(item => isNotNil(item));
}
