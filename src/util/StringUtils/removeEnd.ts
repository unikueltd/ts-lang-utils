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


import {endsWith} from './endsWith';


/**
 * Returns the string that removed the leftmost given string
 *
 * @param text The text to inspect
 * @param remove The string to remove
 *
 * @returns the string that removed the leftmost given string
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeEnd('foobar', 'hello');    // 'foobar'
 * removeEnd('foobar', 'bar');    // 'foo'
 * ```
 */
export function removeEnd(text?: string | null, remove?: string | null): string | null | undefined {
    return (!text || !remove || !endsWith(text, remove)) ? text : text.substring(0, text.length - remove.length);
}
