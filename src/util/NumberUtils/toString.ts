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


/**
 * Returns a string value from the given number
 *
 * @param source The source value to inspect
 * @param radix The radix for converting numeric value to string
 *
 * @returns a string value from the given number
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * toString(1);    // '1'
 * ```
 */
export function toString(source?: number | null, radix?: number): string | undefined {
    return (source === undefined || source === null) ? undefined : source.toString(radix);
}
