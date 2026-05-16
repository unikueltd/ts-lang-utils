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


import { toFloat } from './toFloat';


/**
 * Returns a float value from the given source which divide 100
 *
 * @param source The source value to inspect
 * @param defaultValue The default value if the source cannot be converted
 *
 * @returns a float value from the given source which divide 100
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * divide100(82);    // 0.82
 * divide100('82');    // 0.82
 * ```
 */
export function divide100(source?: number | string | null, defaultValue?: number): number | undefined {
    const alias = toFloat(source);
    return (alias === undefined || alias === null) ? defaultValue : (alias / 100);
}
