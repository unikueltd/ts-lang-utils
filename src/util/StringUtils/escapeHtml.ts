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
 * Returns the escaped html string of the given text
 *
 * @param text The source string to inspect
 *
 * @returns the escaped html string of the given text
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * escapeHtml('<div>foobar<div>');    // '&lt;div&gt;foobar&lt;div&gt;'
 * ```
 */
export function escapeHtml(text?: string | null): string | null | undefined {
    if (!text) {
        return text;
    }
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace( /[&<>"']/g, item => map[item]);
}
