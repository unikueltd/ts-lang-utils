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
 * Returns a string that trimmed from the given string
 *
 * @param text The string to trim
 * @param emptyAsNull Whether to return null if the trimmed result is empty
 *
 * @returns the trimmed string value from the given string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * trim("foobar", true);    // 'foobar'
 * ```
 */
export function trim(text?: string | null, emptyAsNull?: boolean): string | null | undefined {
    if (!text) {
        return text;
    }
    const result = text.trim();
    return (emptyAsNull && !result) ? null : result;
}
