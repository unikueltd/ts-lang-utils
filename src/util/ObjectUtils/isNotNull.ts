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


import {isNull} from './isNull';


/**
 * Returns whether the given object is not null
 *
 * @param object the object to check
 *
 * @returns whether the given object is not null
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * isNotNull('foobar');    // true
 * ```
 */
export function isNotNull(object: any): boolean {
    return !isNull(object);
}
