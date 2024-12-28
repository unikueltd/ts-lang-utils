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


import {isBlank} from './isBlank';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns whether all the given texts are blank
 *
 * @param texts the texts to check
 *
 * @returns whether all the given texts are blank
 *
 * @example
 * ```ts
 * allBlank([null, undefined]);    // true
 * allBlank([null, 'true']);    // false
 * ```
 */
export function allBlank(texts?: Array<string | null | undefined>): boolean {
    return !texts || !texts.length || texts.every(item => isBlank(item));
}
