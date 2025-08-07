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


import {isEmpty} from './isEmpty';


/**
 * Returns whether any of the elements in the given objects is empty
 *
 * @param objects The objects to check
 *
 * @returns whether any of the elements in the given objects is empty
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * anyEmpty([null, undefined]);    // true
 * anyEmpty([null, {}]);    // true
 * ```
 */
export function anyEmpty(objects?: any[]): boolean {
    return !objects || !objects.length || objects.some(item => isEmpty(item));
}
