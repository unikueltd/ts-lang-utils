/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
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


import {randomInteger} from './randomInteger';


/**
 * Returns a random element array with the specified length within the given array
 *
 * @param array the array to random
 * @param size the size to generate
 *
 * @returns a random element array with the specified length within the given array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * randomElements(['1', '2', '3'], 2);
 * ```
 */
export function randomElements<E>(array?: E[], size?: number): E[] | undefined {
    if (!array || !array.length || !size || size <= 0 || size > Number.MAX_SAFE_INTEGER) {
        return undefined;
    }
    if (array.length <= size) {
        return array;
    }
    const indexes = new Set<number>();
    while (indexes.size < size) {
        indexes.add(randomInteger(0, array.length) as number);
    }
    return array.filter((_value, index) => indexes.has(index));
}
