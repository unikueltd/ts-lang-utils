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
 * Returns a string that abbreviates the given text using placeholder
 *
 * @param text the text to inspect
 * @param width the max width of the expected string
 * @param placeholder the placeholder to append
 *
 * @returns a string that abbreviates the given text using placeholder
 *
 * @example
 * ```ts
 * abbreviate('foobar', -1);    // 'foobar'
 * abbreviate('foobar', 0);    // ''
 * abbreviate('foobar', 5);    // 'fo...'
 * abbreviate('foobar', 6);    // 'foobar'
 * abbreviate('foobar', 10);    // 'foobar'
 * ```
 */
export function abbreviate(text?: string | null, width: number = -1, placeholder: string = '...'): string | undefined | null {
    if (!text || width < 0 || width >= text.length) {
        return text;
    }
    if (width === 0) {
        return '';
    }
    if (width <= placeholder.length) {
        return placeholder.substring(0, width);
    }
    return text.substring(0, width - placeholder.length) + placeholder;
}
