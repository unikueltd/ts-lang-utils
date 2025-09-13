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


/**
 * Returns a string that represents the given string array
 *
 * @param texts The source strings to inspect
 *
 * @returns a string that represents the given string array
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * fromChars(undefined);    // undefined
 * fromChars(['f', 'o', 'o', 'b', 'a', 'r']);    // 'foobar'
 * ```
 */
export function fromChars(texts?: Array<string | null | undefined>): string | undefined {
    return !texts ? undefined : texts.join('');
}
