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


/**
 * Returns a random number that between the value range
 *
 * @param minValue the min value, inclusive
 * @param maxValue the max value, exclusive
 *
 * @returns a random number that between the value range
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * randomNumber(1.1, 1.2);
 * randomNumber(-3.6, 2.8);
 * randomNumber(-3.6, -2.8);
 * ```
 */
export function randomNumber(minValue?: number, maxValue?: number): number | undefined {
    const min = (minValue !== undefined) ? minValue : Number.MIN_SAFE_INTEGER;
    const max = (maxValue !== undefined) ? maxValue : Number.MAX_SAFE_INTEGER;
    return (min > max) ? undefined : (min + (max - min) * Math.random());
}
