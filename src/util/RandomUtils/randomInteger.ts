/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import {randomNumber} from './randomNumber';


/**
 * Returns a random integer that between value range
 *
 * @param minValue The min value, inclusive
 * @param maxValue The max value, exclusive
 *
 * @returns a random integer that between value range
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * randomInteger(1, 10);
 * randomInteger(-6, 8);
 * ```
 */
export function randomInteger(minValue?: number, maxValue?: number): number | undefined {
    const value = randomNumber(minValue, maxValue);
    return !value ? undefined : Math.floor(value);
}
