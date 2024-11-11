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
 * Utilities for string
 *
 * @author David Hsing
 */


/**
 * Returns the unescaped html string of the given text
 *
 * @param text the source string to inspect
 *
 * @returns the unescaped html string of the given text
 *
 * @example
 * ```ts
 * unescapeHtml('&lt;div&gt;foobar&lt;div&gt;');    // '<div>foobar<div>'
 * ```
 */
export function unescapeHtml(text?: string | null): string | undefined | null {
    if (!text) {
        return text;
    }
    const map: Record<string, string> = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
    };
    return text.replace( /(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&#039;)/g, item => map[item]);
}
