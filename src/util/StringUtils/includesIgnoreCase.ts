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
 * Returns whether the given text includes the comparison string, case-insensitive
 *
 * @param text The source string to check
 * @param comparison The target string to compare
 *
 * @returns whether the given text includes the comparison string, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * includesIgnoreCase('foobar', 'FOO');    // true
 * ```
 */
export function includesIgnoreCase(text?: string | null, comparison?: string | null): boolean {
    return text === comparison || (!!text && !!comparison && text?.toUpperCase()?.includes(comparison?.toUpperCase()));
}
