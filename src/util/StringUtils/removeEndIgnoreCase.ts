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


import { endsWithIgnoreCase } from './endsWithIgnoreCase';


/**
 * Returns the string that removed the rightmost given string, case-insensitive
 *
 * @param text The text to inspect
 * @param remove The string to remove, case-insensitive
 *
 * @returns the string that removed the rightmost given string, case-insensitive
 *
 * @author David Hsing
 *
 * @example
 * ```ts
 * removeEndIgnoreCase('foobar', 'Hello');    // 'foobar'
 * removeEndIgnoreCase('foobar', 'Bar');    // 'foo'
 * ```
 */
export function removeEndIgnoreCase(text?: string | null, remove?: string | null): string | null | undefined {
    return (!text || !remove || !endsWithIgnoreCase(text, remove)) ? text : text.substring(0, text.length - remove.length);
}
