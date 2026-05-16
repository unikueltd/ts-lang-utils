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


import { removeAll } from '@/util/ArrayUtils/removeAll';


/**
 * Returns the array that excludes the elements which equals to any of the given exclusions
 *
 * @param texts The arrays to inspect
 * @param excludes The elements array to exclude
 *
 * @returns the array that excludes the elements which equals to any of the given exclusions
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeEquals(['foo', 'bar'], ['bar']);    // ['foo']
 * ```
 */
export function removeEquals(texts?: string[] | null, excludes?: string[] | null): string[] | null | undefined {
    return removeAll(texts, excludes);
}
