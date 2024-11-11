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
 * Utilities for random
 *
 * @author David Hsing
 */


/**
 * Returns a random element of the array
 *
 * @param array the array to random
 *
 * @returns a random element of the array
 *
 * @example
 * ```ts
 * randomElement(['1', '2', '3']);
 * ```
 */
export function randomElement<E>(array?: E[]): E | undefined {
    return (!array || array.length === 0) ? undefined : array.at(randomInteger(0, array.length) as number);
}
