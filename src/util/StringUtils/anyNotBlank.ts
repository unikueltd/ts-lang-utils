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


import {isNotBlank} from './isNotBlank';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns whether any of the given texts is not blank
 *
 * @param texts the texts to check
 *
 * @returns whether any of the given texts is not blank
 *
 * @example
 * ```ts
 * anyNotBlank([null, undefined]);    // false
 * anyNotBlank([null, 'world']);    // true
 * ```
 */
export function anyNotBlank(texts?: Array<string | null | undefined>): boolean {
    return !!texts && texts.length > 0 && texts.some(item => isNotBlank(item));
}
