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


import {includesIgnoreCase} from './includesIgnoreCase';


/**
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the array that excludes the elements which includes any of the given exclusions, case-insensitive
 *
 * @param texts the arrays to inspect
 * @param excludes the elements array to exclude
 *
 * @returns the array that excludes the elements which includes any of the given exclusions, case-insensitive
 *
 * @example
 * ```ts
 * removeIncludesIgnoreCase(['foo', 'bar'], ['AR']);    // ['foo']
 * ```
 */
export function removeIncludesIgnoreCase(texts?: string[] | null, excludes?: string[] | null): string[] | undefined | null {
    return (!texts || texts.length === 0 || !excludes || excludes.length === 0) ? texts : texts.filter(text => !excludes.some(exclude => includesIgnoreCase(text, exclude)));
}
