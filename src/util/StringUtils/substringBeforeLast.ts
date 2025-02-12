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
 * Returns the substring before the last occurrence of the given separator (the separator is not returned)
 *
 * @param text the string to get a substring from
 * @param separator the string to search for
 *
 * @returns the substring before the last occurrence of the given separator
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * substringBeforeLast("foo/bar/foo/bar", "/");    // 'foo/bar/foo'
 * ```
 */
export function substringBeforeLast(text?: string | null, separator?: string | null): string | null | undefined {
    if (!text || !separator) {
        return text;
    }
    const index = text.lastIndexOf(separator);
    return (index === -1) ? text : text.substring(0, index);
}
