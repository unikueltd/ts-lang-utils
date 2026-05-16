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


import { includes } from './includes';


/**
 * Returns the array that excludes the elements which includes any of the given exclusions
 *
 * @param texts The arrays to inspect
 * @param excludes The elements array to exclude
 *
 * @returns the array that excludes the elements which includes any of the given exclusions
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeIncludes(['foo', 'bar'], ['ar']);    // ['foo']
 * ```
 */
export function removeIncludes(texts?: string[] | null, excludes?: string[] | null): string[] | null | undefined {
    return (!texts || !texts.length || !excludes || !excludes.length) ? texts : texts.filter(text => !excludes.some(exclude => includes(text, exclude)));
}
