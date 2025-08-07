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
 * Returns a string that centers the given text using placeholder
 *
 * @param text The text to inspect
 * @param width The max width of the expected string
 * @param placeholder The placeholder to pad
 *
 * @returns a string that centers the given text using placeholder
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * center('foobar', -1);    // 'foobar'
 * center('foobar', 0);    // ''
 * center('foobar', 3);    // 'foobar'
 * center('foobar', 7);    // 'foobar '
 * center('foobar', 10);    // '  foobar  '
 * ```
 */
export function center(text?: string | null, width: number = -1, placeholder: string = ' '): string | null | undefined {
    if (!text || width < 0 || (width > 0 && width <= text.length)) {
        return text;
    }
    if (width === 0) {
        return '';
    }
    const left = Math.floor((width - text.length) / 2);
    return text.padStart(text.length + left, placeholder ?? ' ').padEnd(width, placeholder ?? ' ');
}
